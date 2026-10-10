<?php
/**
 * SkillDad.ir - Admin Backend Management API
 * Provides secure endpoints for dashboard analytics, message management,
 * content publishing, and site configuration.
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Admin-Token');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Data and config paths
$configFile = __DIR__ . '/admin_config.json';
$messagesFile = __DIR__ . '/messages.json';
$statsFile = __DIR__ . '/stats_cache.json';
$articlesFile = __DIR__ . '/custom_articles.json';
$videosFile = __DIR__ . '/custom_videos.json';

// Initialize default config if not exists
if (!file_exists($configFile)) {
    $defaultConfig = [
        'admin_password' => 'skilldad2026', // Default admin password
        'admin_title' => 'مدیر سایت اسکیل‌دد',
        'ga_id' => '',
        'created_at' => time()
    ];
    @file_put_contents($configFile, json_encode($defaultConfig, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// Helpers
function getConfig() {
    global $configFile;
    if (file_exists($configFile)) {
        $c = json_decode(file_get_contents($configFile), true);
        if (is_array($c)) return $c;
    }
    return ['admin_password' => 'skilldad2026'];
}

function saveConfig($cfg) {
    global $configFile;
    return @file_put_contents($configFile, json_encode($cfg, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

function generateToken($pwd) {
    return hash('sha256', $pwd . '_skilldad_salt_2026');
}

function verifyToken() {
    $headers = getallheaders();
    $token = $headers['X-Admin-Token'] ?? $headers['x-admin-token'] ?? ($_GET['token'] ?? '');
    if (!$token) {
        $raw = file_get_contents('php://input');
        $input = json_decode($raw, true);
        $token = $input['token'] ?? '';
    }
    $cfg = getConfig();
    $validToken = generateToken($cfg['admin_password'] ?? 'skilldad2026');
    return ($token && hash_equals($validToken, $token));
}

// Parse request input
$rawInput = file_get_contents('php://input');
$inputData = json_decode($rawInput, true) ?: $_POST;
$action = $_GET['action'] ?? ($inputData['action'] ?? '');

// 1. LOGIN ACTION (Public)
if ($action === 'login') {
    $password = trim($inputData['password'] ?? '');
    $cfg = getConfig();
    if ($password === ($cfg['admin_password'] ?? 'skilldad2026')) {
        $token = generateToken($password);
        echo json_encode([
            'status' => 'success',
            'token' => $token,
            'title' => $cfg['admin_title'] ?? 'مدیر اسکیل‌دد',
            'message' => 'خوش آمدید! ورود با موفقیت انجام شد.'
        ], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(401);
        echo json_encode(['status' => 'error', 'message' => 'رمز عبور مدیریت نادرست است.'], JSON_UNESCAPED_UNICODE);
    }
    exit;
}

// Check authorization for all subsequent admin actions
if (!verifyToken()) {
    http_response_code(403);
    echo json_encode(['status' => 'error', 'message' => 'دسترسی غیرمجاز. لطفاً وارد پنل شوید.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. CHECK AUTH
if ($action === 'check_auth') {
    $cfg = getConfig();
    echo json_encode(['status' => 'success', 'authenticated' => true, 'title' => $cfg['admin_title'] ?? 'مدیر'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 3. GET DASHBOARD SUMMARY DATA
if ($action === 'get_dashboard_data') {
    // Stats
    $stats = file_exists($statsFile) ? json_decode(file_get_contents($statsFile), true) : [];
    if (!is_array($stats)) $stats = [];

    // Messages
    $messages = file_exists($messagesFile) ? json_decode(file_get_contents($messagesFile), true) : [];
    if (!is_array($messages)) $messages = [];

    $unreadCount = 0;
    foreach ($messages as $m) {
        if (($m['status'] ?? 'unread') === 'unread') {
            $unreadCount++;
        }
    }

    // Custom content
    $articles = file_exists($articlesFile) ? json_decode(file_get_contents($articlesFile), true) : [];
    $videos = file_exists($videosFile) ? json_decode(file_get_contents($videosFile), true) : [];

    // System info
    $cfg = getConfig();
    $response = [
        'status' => 'success',
        'stats' => [
            'total_visits' => intval($stats['total_visits'] ?? 1254),
            'today_visits' => intval($stats['today_visits'] ?? 28),
            'today_date' => $stats['today_date'] ?? date('Y-m-d'),
            'youtube_videos' => intval($stats['youtube'] ?? 196),
            'aparat_videos' => intval($stats['aparat'] ?? 75),
            'playlists' => intval($stats['playlists'] ?? 15),
            'last_sync' => date('Y/m/d H:i:s', intval($stats['updated_at'] ?? time()))
        ],
        'messages_summary' => [
            'total' => count($messages),
            'unread' => $unreadCount,
            'recent' => array_slice($messages, 0, 5)
        ],
        'content_summary' => [
            'custom_articles' => is_array($articles) ? count($articles) : 0,
            'custom_videos' => is_array($videos) ? count($videos) : 0
        ],
        'seo_status' => [
            'canonical_fixed' => true,
            'sitemap_valid' => file_exists(__DIR__ . '/../sitemap.xml'),
            'robots_valid' => file_exists(__DIR__ . '/../robots.txt'),
            'ga_id' => $cfg['ga_id'] ?? ''
        ]
    ];
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit;
}

// 4. GET ALL MESSAGES
if ($action === 'get_messages') {
    $messages = file_exists($messagesFile) ? json_decode(file_get_contents($messagesFile), true) : [];
    if (!is_array($messages)) $messages = [];
    echo json_encode(['status' => 'success', 'messages' => $messages], JSON_UNESCAPED_UNICODE);
    exit;
}

// 5. UPDATE MESSAGE STATUS (read / unread / replied)
if ($action === 'update_message_status') {
    $id = $inputData['id'] ?? '';
    $newStatus = $inputData['status'] ?? 'read';
    $messages = file_exists($messagesFile) ? json_decode(file_get_contents($messagesFile), true) : [];
    if (!is_array($messages)) $messages = [];

    $updated = false;
    foreach ($messages as &$m) {
        if (($m['id'] ?? '') === $id) {
            $m['status'] = $newStatus;
            $updated = true;
            break;
        }
    }
    if ($updated) {
        @file_put_contents($messagesFile, json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['status' => 'success', 'message' => 'وضعیت پیام به‌روزرسانی شد.'], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'پیام مورد نظر یافت نشد.'], JSON_UNESCAPED_UNICODE);
    }
    exit;
}

// 6. DELETE MESSAGE
if ($action === 'delete_message') {
    $id = $inputData['id'] ?? '';
    $messages = file_exists($messagesFile) ? json_decode(file_get_contents($messagesFile), true) : [];
    if (!is_array($messages)) $messages = [];

    $filtered = [];
    foreach ($messages as $m) {
        if (($m['id'] ?? '') !== $id) {
            $filtered[] = $m;
        }
    }
    @file_put_contents($messagesFile, json_encode($filtered, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    echo json_encode(['status' => 'success', 'message' => 'پیام با موفقیت حذف شد.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 7. PUBLISH / SAVE ARTICLE
if ($action === 'save_article') {
    $title = trim($inputData['title'] ?? '');
    $category = trim($inputData['category'] ?? 'عمومی');
    $readTime = trim($inputData['read_time'] ?? '۵ دقیقه');
    $summary = trim($inputData['summary'] ?? '');
    $content = trim($inputData['content'] ?? '');
    $image = trim($inputData['image'] ?? 'assets/img/profile.jpg');

    if (empty($title) || empty($content)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'عنوان و متن مقاله الزامی است.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $articles = file_exists($articlesFile) ? json_decode(file_get_contents($articlesFile), true) : [];
    if (!is_array($articles)) $articles = [];

    $articleId = 'art_' . time() . '_' . mt_rand(10, 99);
    $newArticle = [
        'id' => $articleId,
        'title' => $title,
        'category' => $category,
        'read_time' => $readTime,
        'summary' => $summary ?: mb_substr(strip_tags($content), 0, 140) . '...',
        'content' => $content,
        'image' => $image,
        'date' => date('Y/m/d'),
        'created_at' => time()
    ];

    array_unshift($articles, $newArticle);
    @file_put_contents($articlesFile, json_encode($articles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode(['status' => 'success', 'message' => 'مقاله جدید با موفقیت ذخیره شد.', 'article' => $newArticle], JSON_UNESCAPED_UNICODE);
    exit;
}

// 8. GET CUSTOM ARTICLES
if ($action === 'get_articles') {
    $articles = file_exists($articlesFile) ? json_decode(file_get_contents($articlesFile), true) : [];
    if (!is_array($articles)) $articles = [];
    echo json_encode(['status' => 'success', 'articles' => $articles], JSON_UNESCAPED_UNICODE);
    exit;
}

// 9. PUBLISH / SAVE VIDEO
if ($action === 'save_video') {
    $title = trim($inputData['title'] ?? '');
    $ytId = trim($inputData['yt_id'] ?? '');
    $aparatId = trim($inputData['aparat_id'] ?? '');
    $category = trim($inputData['category'] ?? 'فنی و عیب‌یابی');
    $desc = trim($inputData['desc'] ?? '');

    if (empty($title) || (empty($ytId) && empty($aparatId))) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'عنوان و حداقل یک شناسه یوتیوب یا آپارات الزامی است.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $videos = file_exists($videosFile) ? json_decode(file_get_contents($videosFile), true) : [];
    if (!is_array($videos)) $videos = [];

    $newVideo = [
        'id' => 'vid_' . time() . '_' . mt_rand(10, 99),
        'title' => $title,
        'yt_id' => $ytId,
        'aparat_id' => $aparatId,
        'category' => $category,
        'desc' => $desc,
        'date' => date('Y/m/d'),
        'created_at' => time()
    ];

    array_unshift($videos, $newVideo);
    @file_put_contents($videosFile, json_encode($videos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode(['status' => 'success', 'message' => 'ویدیو با موفقیت به فهرست ذخیره شد.', 'video' => $newVideo], JSON_UNESCAPED_UNICODE);
    exit;
}

// 10. GET CUSTOM VIDEOS
if ($action === 'get_videos') {
    $videos = file_exists($videosFile) ? json_decode(file_get_contents($videosFile), true) : [];
    if (!is_array($videos)) $videos = [];
    echo json_encode(['status' => 'success', 'videos' => $videos], JSON_UNESCAPED_UNICODE);
    exit;
}

// 11. CHANGE ADMIN PASSWORD
if ($action === 'change_password') {
    $newPass = trim($inputData['new_password'] ?? '');
    if (strlen($newPass) < 6) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'رمز عبور جدید باید حداقل ۶ کاراکتر باشد.'], JSON_UNESCAPED_UNICODE);
        exit;
    }
    $cfg = getConfig();
    $cfg['admin_password'] = $newPass;
    saveConfig($cfg);
    $newToken = generateToken($newPass);
    echo json_encode(['status' => 'success', 'token' => $newToken, 'message' => 'رمز عبور با موفقیت تغییر یافت.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 12. UPDATE GOOGLE ANALYTICS ID
if ($action === 'update_settings') {
    $cfg = getConfig();
    if (isset($inputData['ga_id'])) {
        $cfg['ga_id'] = trim($inputData['ga_id']);
    }
    if (isset($inputData['admin_title'])) {
        $cfg['admin_title'] = trim($inputData['admin_title']);
    }
    saveConfig($cfg);
    echo json_encode(['status' => 'success', 'message' => 'تنظیمات با موفقیت ذخیره شد.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// 13. FULL BACKUP EXPORT
if ($action === 'export_backup') {
    $messages = file_exists($messagesFile) ? json_decode(file_get_contents($messagesFile), true) : [];
    $stats = file_exists($statsFile) ? json_decode(file_get_contents($statsFile), true) : [];
    $articles = file_exists($articlesFile) ? json_decode(file_get_contents($articlesFile), true) : [];
    $videos = file_exists($videosFile) ? json_decode(file_get_contents($videosFile), true) : [];

    $backup = [
        'export_time' => date('Y/m/d H:i:s'),
        'version' => 'SkillDad Admin 2026.1',
        'stats' => $stats,
        'messages' => $messages,
        'articles' => $articles,
        'videos' => $videos
    ];
    echo json_encode($backup, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(400);
echo json_encode(['status' => 'error', 'message' => 'دستور نامعتبر است.'], JSON_UNESCAPED_UNICODE);
