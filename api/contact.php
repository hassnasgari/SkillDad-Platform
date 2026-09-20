<?php
/**
 * SkillDad.ir - Contact Messages Backend Engine
 * Stores user messages safely into messages.json
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$dataFile = __DIR__ . '/messages.json';

// Initialize data file if missing
if (!file_exists($dataFile)) {
    @file_put_contents($dataFile, json_encode([], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
}

// 1. GET MESSAGES (Admin retrieve)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $messages = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];
    if (!is_array($messages)) $messages = [];
    echo json_encode([
        'status' => 'success',
        'count' => count($messages),
        'messages' => $messages
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// 2. POST NEW MESSAGE
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $input = json_decode($raw, true);
    if (!$input) {
        $input = $_POST;
    }

    $name = isset($input['name']) ? trim(strip_tags($input['name'])) : '';
    $contact = isset($input['contact']) ? trim(strip_tags($input['contact'])) : '';
    $subject = isset($input['subject']) ? trim(strip_tags($input['subject'])) : '';
    $message = isset($input['message']) ? trim(strip_tags($input['message'])) : '';

    if (empty($name) || empty($contact) || empty($message)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'لطفاً تمامی فیلدهای الزامی را پر بفرمایید.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $newMessage = [
        'id' => 'msg_' . time() . '_' . mt_rand(100, 999),
        'name' => $name,
        'contact' => $contact,
        'subject' => $subject ?: 'بدون موضوع',
        'message' => $message,
        'timestamp' => time(),
        'date' => date('Y/m/d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1'
    ];

    $messages = file_exists($dataFile) ? json_decode(file_get_contents($dataFile), true) : [];
    if (!is_array($messages)) $messages = [];

    // Prepend new message so newest is on top
    array_unshift($messages, $newMessage);

    @file_put_contents($dataFile, json_encode($messages, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    echo json_encode([
        'status' => 'success',
        'message' => 'پیام شما با موفقیت ثبت شد و برای بابا ارسال گردید.',
        'data' => $newMessage
    ], JSON_UNESCAPED_UNICODE);
    exit;
}
