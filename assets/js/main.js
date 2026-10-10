/**
 * SKILLDAD.IR - LIGHTWEIGHT SCRIPTS & ENGINE
 * Comprehensive i18n (Persian / English), Theme Engine (Dark Default / Light Day), and Interactions
 */

// Safe Storage Helper
function getSafeStorage(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch (e) {
    return fallback;
  }
}

function setSafeStorage(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {}
}

// 1. THEME TOGGLE ENGINE
window.toggleSkillDadTheme = function() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const newTheme = isLight ? 'dark' : 'light';
  applyTheme(newTheme);
  setSafeStorage('skilldad_theme', newTheme);
};

function applyTheme(theme) {
  const btn = document.getElementById('themeToggleBtn');
  const isEn = document.documentElement.lang === 'en';
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.add('light-mode');
    if (document.body) {
      document.body.setAttribute('data-theme', 'light');
      document.body.classList.add('light-mode');
    }
    if (btn) {
      btn.textContent = isEn ? '🌙 Dark Mode' : '🌙 تم شب';
      btn.title = isEn ? 'Switch to Dark Mode' : 'تغییر به تم شب';
    }
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('light-mode');
    if (document.body) {
      document.body.removeAttribute('data-theme');
      document.body.classList.remove('light-mode');
    }
    if (btn) {
      btn.textContent = isEn ? '☀️ Day Mode' : '☀️ تم روز';
      btn.title = isEn ? 'Switch to Day Mode' : 'تغییر به تم روز';
    }
  }
}

function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  const savedTheme = getSafeStorage('skilldad_theme', 'dark');
  applyTheme(savedTheme);
  if (btn) {
    btn.onclick = function(e) {
      e.preventDefault();
      window.toggleSkillDadTheme();
    };
  }
}

// 2. LANGUAGE TOGGLE ENGINE
window.toggleSkillDadLanguage = function() {
  const currentLang = document.documentElement.lang === 'en' ? 'en' : 'fa';
  const newLang = currentLang === 'en' ? 'fa' : 'en';
  applyLanguage(newLang);
  setSafeStorage('skilldad_lang', newLang);
};

function initLanguageToggle() {
  const btn = document.getElementById('langToggleBtn');
  const savedLang = getSafeStorage('skilldad_lang', 'fa');
  applyLanguage(savedLang);
  if (btn) {
    btn.onclick = function(e) {
      e.preventDefault();
      window.toggleSkillDadLanguage();
    };
  }
}

const siteTranslations = {
  fa: {
    page_title: 'آموزش تعمیرات خانه و مهارت‌های فنی کاربردی | اسکیل‌دد (SkillDad)',
    lang_btn: 'English',
    nav_home: 'صفحه اصلی',
    nav_troubleshoot: 'عیب‌یاب',
    nav_videos: 'مشاهده آموزش‌ها',
    nav_magazine: 'مجله',
    nav_glossary: 'واژه‌نامه فنی',
    nav_toolbox: 'جعبه‌ابزار',
    nav_faq: 'پرسش‌ها',
    nav_about: 'درباره ما',
    nav_contact: 'تماس با من',
    nav_cta: 'مشاهده آموزش‌ها',
    
    hero_tagline: '🛠️ مرجع آموزش‌های خودکفایی و کارهای فنی خانه',
    hero_h1_p1: 'خودت',
    hero_h1_p2: 'دست‌به‌آچار شو!',
    hero_p: 'یاد بگیر چطور بدون نیاز به تعمیرکار، وسایل خانه را عیب‌یابی و تعمیر کنی؛ از سرویس کولر و رفع نشتی شیرآلات تا ایمنی برق، رگلاژ درب‌ها و لذت آشپزی و موسیقی.',
    pill_repair: '🔧 تعمیر و نگهداری لوازم منزل',
    pill_cooler: '❄️ کولر',
    pill_tools: '🧰 شنبه ابزار',
    pill_car: '🚗 خودرو',
    pill_cook: '🍳 آشپزی با پدر',
    pill_music: '🎵 موزیک تایم',
    pill_install: '⚙️ نصب‌ها',
    pill_tricks: '💡 ترفند',
    pill_bike: '🚲 دوچرخه',
    btn_yt: 'کانال یوتیوب 📺',
    btn_ap: 'کانال آپارات 🎥',
    btn_tg: 'کانال تلگرام 💬',
    btn_ig: 'اینستاگرام 📷',
    btn_wa: 'پیام در واتساپ 💬',

    stat_1_lbl: 'آموزش کاربردی در یوتیوب',
    stat_2_lbl: 'ویدیوی منتخب در آپارات',
    stat_3_lbl: 'پلی‌لیست و دسته‌بندی موضوعی',

    topics_badge: '🧰 دسته‌بندی مهارت‌ها',
    topics_title: 'چه‌چیزی می‌خواهی <span class="gradient-title">یاد بگیری؟</span>',
    topics_desc: 'مجموعه آموزش‌های گام‌به‌گام برای اینکه بدون نیاز به تعمیرکار، مشکلات خانه و وسیله‌هات رو خودت حل کنی.',

    trouble_badge: '🔍 عیب‌یاب هوشمند خانه',
    trouble_title: 'بابا، این مشکل رو چطور <span class="gradient-title">حل کنم؟</span>',
    trouble_desc: 'مشکل وسیله‌ات رو انتخاب کن تا علت اصلی، ابزار لازم و آموزش ویدیویی دقیقش رو بهت بگم.',
    trouble_search_ph: 'جستجوی سریع مشکل (مثلاً: باد گرم کولر، چکه شیر، پریدن فیوز...)',
    trouble_tabs: ['همه مشکلات', 'کولر و لوازم', 'لوله‌کشی و شیرآلات', 'برق و گاز', 'درب و ساختمان', 'ابزار و خودرو'],

    videos_badge: '🎥 ویدیوهای آموزشی',
    videos_title: 'ویدیوهای برتر <span class="gradient-title">آموزش‌ها و مهارت‌ها</span>',
    videos_desc: 'پربازدیدترین ویدیوهای اسکیل‌دد در یوتیوب و آپارات',
    videos_tabs: ['همه ویدیوها (' + (parseInt(localStorage.getItem('skilldad_aparat_cnt') || '72', 10)).toLocaleString('fa-IR') + ' آموزش زنده)', 'کولر و لوازم خانگی', 'لوله‌کشی و پمپ آب', 'برق، گاز و آیفون', 'درب، کمد و ساختمان', 'شنبه ابزار و ترفندها', 'آشپزی و سه‌تار'],
    aparat_cta_btn: 'مشاهده و عضویت در کانال رسمی آپارات اسکیل‌دد (SkillDad) 📺',

    mag_badge: '📚 مجله تخصصی اسکیل‌دد',
    mag_title: 'دانشنامه و مقالات <span class="gradient-title">تعمیرات و خودکفایی</span>',
    mag_desc: 'راهنماهای گام‌به‌گام و مصور برگرفته از معتبرترین مراجع فنی جهان برای آموزش عمیق و اصولی کارهای فنی',
    mag_tabs: ['همه مقالات', '❄️ سرمایش و کولر', '🚰 لوله‌کشی و شیرآلات', '⚡ برق و ایمنی', '🚪 درب و چوب', '🧰 ابزارشناسی', '🚗 خودرو و دوچرخه'],

    glossary_badge: '📖 واژه‌نامه فنی و دانشنامه',
    glossary_title: 'فرهنگ لغات و <span class="gradient-title">اصطلاحات فنی خانه</span>',
    glossary_desc: 'راهنمای الفبایی و جامع برای درک اصطلاحات تخصصی تاسیسات، کولر، لوله‌کشی، برق و ابزارها',
    glossary_search_ph: 'جستجوی سریع اصطلاح یا قطعه (مثلاً: یاتاقان، فلوتر، کارتریج، پرلاتور، کلید مینیاتوری...)',
    glossary_cats: {
      all: 'همه اصطلاحات',
      cooling: '❄️ سرمایش و پکیج',
      plumbing: '🚰 لوله‌کشی و پمپ',
      electrical: '⚡ برق و ایمنی',
      carpentry: '🚪 درب و کمد',
      tools: '🧰 ابزارها',
      auto: '🚗 خودرو و دوچرخه',
      appliances: '🍳 لوازم خانگی'
    },
    glossary_letter_all: 'همه',
    glossary_result_label: 'تعداد اصطلاحات یافت‌شده:',
    glossary_result_unit: 'مدخل',

    toolbox_badge: '🧰 ابزارها و پیشنهادها',
    toolbox_title: 'جعبه‌ابزار <span class="gradient-title">پیشنهادی بابا</span>',
    toolbox_desc: 'ابزارها و راهنماهایی که داشتن‌شان در هر خانه‌ای ضروری و نجات‌بخش است.',

    about_badge: '👨‍🔧 درباره اسکیل‌دد',
    about_title: 'اسکیل‌دد <span class="gradient-title">کیست؟</span>',
    about_p1: 'من معتقدم هر فردی باید بتواند کارهای پایه‌ای و ضروری خانه‌اش را خودش انجام دهد؛ از سرویس کولر و تعویض شیرآلات گرفته تا چک کردن خودرو و دوچرخه. این مهارت‌ها علاوه بر صرفه‌جویی مالی، حس اعتمادبه‌نفس و استقلال واقعی به همراه دارد.',
    about_p2: 'زندگی فقط کارهای فنی نیست؛ من عاشق پختن کباب‌های سنتی برای خانواده‌ام، معرفی ابزارهای جالب در شنبه ابزار و نواختن آرامش‌بخش سه‌تار در اوقات فراغتم هستم. این سایت را ساختم تا تجربیات پدرانه‌ام را با شما به اشتراک بگذارم.',
    about_quote: '«خانه‌ای که در آن بتوانی با دست خودت آچار به دست بگیری و با عشق غذا بپزی، همیشه گرم و استوار است.»',
    about_tags: [
      'آموزش‌های ویدیویی کوتاه و مستقیم سر اصل مطلب',
      'تاکید بر ایمنی و جلوگیری از خطرات احتمالی',
      'بدون نیاز به پیش‌زمینه فنی و ابزارهای گران‌قیمت',
      'پاسخ پدرانه به سوالات و مشکلات همراهان'
    ],

    faq_badge: '❓ سوالات پرتکرار',
    faq_title: 'پرسش‌های رایج درباره <span class="gradient-title">تعمیرات و خودکفایی</span>',
    faq_desc: 'پاسخ‌های سریع و مطمئن اسکیل‌دد به پرتکرارترین چالش‌های فنی خانه و ابزارها',

    contact_badge: '📬 ارتباط مستقیم',
    contact_title: 'پیام به <span class="gradient-title">اسکیل‌دد</span>',
    contact_desc: 'سوال فنی داری یا می‌خواهی ویدیوی آموزشی خاصی بسازم؟ برایم پیام بگذار.',
    contact_card_title: 'پل‌های ارتباطی اسکیل‌دد',
    contact_card_desc: 'من تمام پیام‌ها و سوالات شما رو با دقت می‌خونم و تلاش می‌کنم تا حد امکان پاسخ بدم یا براساس سوالات پرتکرار، ویدیوی آموزشی جدید بسازم.',
    contact_lbl_email: 'آدرس ایمیل',
    contact_lbl_yt: 'کانال رسمی یوتیوب',
    contact_lbl_ap: 'کانال آپارات',
    contact_lbl_tg: 'کانال تلگرام',
    contact_lbl_ig: 'صفحه اینستاگرام',
    contact_success_html: '❤️ <strong>پیامت با موفقیت دریافت شد!</strong><br>ممنون که برام نوشتی. در اولین فرصت می‌خونم و جوابت رو میدم!',
    lbl_name: 'نام شما:',
    lbl_email: 'ایمیل یا شماره تماس:',
    lbl_msg: 'پیام یا سوال فنی شما:',
    ph_name: 'مثلاً: علی رضایی',
    ph_email: 'example@mail.com یا 0912...',
    ph_msg: 'سؤال یا پیامت رو اینجا بنویس دوست عزیز...',
    btn_submit: '✉️ ارسال پیام به اسکیل‌دد',
    lightbox_yt: '▶ تماشا در یوتیوب',
    lightbox_ap: '📺 تماشا در آپارات',
    lightbox_tg: '✈️ دریافت در تلگرام',
    art_modal_pdf: '🖨️ PDF / چاپ',
    art_modal_prev: '← مقاله قبلی',
    art_modal_share: '📲 اشتراک این راهنما با دوستان',
    art_modal_next: 'مقاله بعدی →',
    back_to_top: 'رفتن به بالای صفحه',
    nav_donation: '☕ یک فنجان چای',
    donation_title: 'یک فنجان چای مهمان بابا',
    donation_desc: 'اگر آموزش‌های رایگان اسکیل‌دد برای شما مفید بوده و توانسته‌اید مشکلات فنی خانه‌تان را خودتان حل کنید، می‌توانید برای حمایت از تولید ویدیوهای جدید و توسعه وب‌سایت، یک فنجان چای یا قهوه مهمان بابا باشید.',
    donation_badge_usdt: 'شبکه ترون (TRC-20) | کمترین کارمزد انتقال',
    donation_badge_btc: 'شبکه اصلی بیت‌کوین (Bitcoin Network)',
    donation_badge_eth: 'شبکه اتریوم و بایننس (ERC20 / BEP20 / Polygon)',
    donation_btn_copy_usdt: 'کپی آدرس تتر (TRC20)',
    donation_btn_copy_btc: 'کپی آدرس بیت‌کوین (BTC)',
    donation_btn_copy_eth: 'کپی آدرس اتریوم / بایننس',
    donation_note: 'لطفاً هنگام انتقال در صرافی یا کیف پول، به شبکه انتخابی (Network) دقت بفرمایید. از همراهی و لطف شما به اسکیل‌دد صمیمانه سپاسگزارم! ❤️',
    donation_copied_toast: '✅ آدرس با موفقیت کپی شد!',
    footer_stat_total: 'بازدید کل',
    footer_stat_today: 'بازدید امروز',
    footer_stat_guides: 'ویدیوهای آموزشی',
    footer_stat_status: 'وضعیت سامانه',
    footer_stat_online: 'فعال',
    footer_copy: '© ۲۰۲۶ اسکیل‌دد (SkillDad.ir) - تمامی حقوق محفوظ است.'
  },
  en: {
    page_title: 'SkillDad | Practical Home Repairs & DIY Technical Skills',
    lang_btn: 'فارسی',
    nav_home: 'Home',
    nav_troubleshoot: 'Troubleshoot',
    nav_videos: 'Explore Tutorials',
    nav_magazine: 'Magazine',
    nav_glossary: 'Glossary',
    nav_toolbox: 'Toolbox',
    nav_faq: 'FAQ',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_cta: 'Explore Guides',

    hero_tagline: '🛠️ The Ultimate Hub for Home Self-Reliance & DIY Skills',
    hero_h1_p1: 'Become Your Own',
    hero_h1_p2: 'Home Handyman!',
    hero_p: 'Master essential household repairs without expensive technicians: from swamp cooler tune-ups and plumbing leak fixes to electrical safety, cabinet alignments, gourmet grilling, and soothing Persian music.',
    pill_repair: '🔧 Appliance Repair',
    pill_cooler: '❄️ Swamp Coolers',
    pill_tools: '🧰 Saturday Tools',
    pill_car: '🚗 Automotive',
    pill_cook: '🍳 Cooking with Dad',
    pill_music: '🎵 Music Time',
    pill_install: '⚙️ Installations',
    pill_tricks: '💡 Hacks & Tips',
    pill_bike: '🚲 Bicycle',
    btn_yt: 'YouTube Channel 📺',
    btn_ap: 'Aparat Channel 🎥',
    btn_tg: 'Telegram 💬',
    btn_ig: 'Instagram 📷',
    btn_wa: 'WhatsApp 💬',

    stat_1_lbl: 'YouTube Video Guides',
    stat_2_lbl: 'Aparat Masterclasses',
    stat_3_lbl: 'Curated Playlists',

    topics_badge: '🧰 Skill Categories',
    topics_title: 'What Do You Want to <span class="gradient-title">Master Today?</span>',
    topics_desc: 'Comprehensive step-by-step guides so you can fix household issues yourself without expensive technicians.',

    trouble_badge: '🔍 Smart Trouble Finder',
    trouble_title: 'Dad, How Do I Fix <span class="gradient-title">This Problem?</span>',
    trouble_desc: 'Select your issue to find immediate causes, required tools, and exact video tutorial solutions.',
    trouble_search_ph: 'Quick search issue (e.g. warm cooler air, leaking faucet, blown fuse...)',
    trouble_tabs: ['All Issues', 'Cooling & Appliances', 'Plumbing & Faucets', 'Electrical & Gas', 'Doors & Cabinets', 'Tools & Auto'],

    videos_badge: '🎥 Video Tutorials',
    videos_title: 'Featured Video <span class="gradient-title">Tutorials & Skills</span>',
    videos_desc: 'Most-watched SkillDad hands-on tutorials on YouTube and Aparat',
    videos_tabs: ['All Videos (' + (parseInt(localStorage.getItem('skilldad_aparat_cnt') || '72', 10)) + ' Live Guides)', 'Cooling & Appliances', 'Plumbing & Pumps', 'Electrical & Safety', 'Doors & Carpentry', 'Saturday Tools', 'Cooking & Music'],
    aparat_cta_btn: 'Watch & Subscribe on SkillDad Official Aparat Channel 📺',

    mag_badge: '📚 SkillDad Knowledge Hub',
    mag_title: 'DIY Encyclopedia & <span class="gradient-title">Practical Guides</span>',
    mag_desc: 'Comprehensive step-by-step masterclasses inspired by top international DIY engineering standards.',
    mag_tabs: ['All Articles', '❄️ Cooling & HVAC', '🚰 Plumbing', '⚡ Electrical', '🚪 Doors & Wood', '🧰 Tools', '🚗 Auto & Bike'],

    glossary_badge: '📖 Technical Glossary & Encyclopedia',
    glossary_title: 'Dictionary of <span class="gradient-title">Home Technical Terms</span>',
    glossary_desc: 'Comprehensive A-Z guide to master technical terms in HVAC, plumbing, electrical, and tools.',
    glossary_search_ph: 'Search technical term or part (e.g. Bearing, Float Valve, Cartridge, Aerator, MCB...)',
    glossary_cats: {
      all: 'All Terms',
      cooling: '❄️ Cooling & HVAC',
      plumbing: '🚰 Plumbing & Pumps',
      electrical: '⚡ Electrical & Safety',
      carpentry: '🚪 Doors & Woodwork',
      tools: '🧰 Tools & Hardware',
      auto: '🚗 Auto & Bicycle',
      appliances: '🍳 Home Appliances'
    },
    glossary_letter_all: 'All',
    glossary_result_label: 'Found Technical Entries:',
    glossary_result_unit: 'terms',

    toolbox_badge: '🧰 Dad\'s Toolbox',
    toolbox_title: 'Dad\'s Recommended <span class="gradient-title">Toolbox Picks</span>',
    toolbox_desc: 'Essential, high-durability tools every home needs for emergency fixes.',

    about_badge: '👨‍🔧 About SkillDad',
    about_title: 'Who is <span class="gradient-title">SkillDad?</span>',
    about_p1: 'I believe everyone should be able to handle basic household repairs, air cooler maintenance, or bicycle and car checks on their own. It saves money, builds immense confidence, and brings true self-reliance.',
    about_p2: 'Life is more than just fixing things; I love cooking traditional dishes and grills for my family, reviewing cool gadgets on Saturday Tools, and unwinding with the soothing sound of the Persian Setar. I created this platform to share these fatherly experiences with you.',
    about_quote: '“A house is truly warm and resilient when you can hold a wrench with confidence and cook a delicious meal with love.”',
    about_tags: [
      'Concise, to-the-point practical video tutorials',
      'Strict focus on electrical & mechanical safety',
      'No prior technical experience or costly tools required',
      'Fatherly, reliable support for your DIY questions'
    ],

    faq_badge: '❓ Frequent Questions',
    faq_title: 'Common Questions About <span class="gradient-title">DIY & Home Repairs</span>',
    faq_desc: 'Quick, reliable answers to the most frequent home maintenance and DIY challenges.',

    contact_badge: '📬 Get In Touch',
    contact_title: 'Send a Message to <span class="gradient-title">Dad</span>',
    contact_desc: 'Have a technical question or suggested repair topic? Drop me a message below.',
    contact_card_title: 'SkillDad Communication Channels',
    contact_card_desc: 'I carefully read every message and question to help you or create new tutorial videos based on common requests.',
    contact_lbl_email: 'Email Address',
    contact_lbl_yt: 'Official YouTube Channel',
    contact_lbl_ap: 'Aparat Channel',
    contact_lbl_tg: 'Telegram Channel',
    contact_lbl_ig: 'Instagram Page',
    contact_success_html: '❤️ <strong>Message received successfully!</strong><br>Thank you for reaching out. I\'ll read and reply as soon as possible!',
    lbl_name: 'Your Name:',
    lbl_email: 'Email or Mobile:',
    lbl_msg: 'Your Message or Question:',
    ph_name: 'e.g. Alex Smith',
    ph_email: 'e.g. alex@example.com',
    ph_msg: 'Write your question or repair problem here...',
    btn_submit: '✉️ Send Message to Dad',
    lightbox_yt: '▶ Watch on YouTube',
    lightbox_ap: '📺 Watch on Aparat',
    lightbox_tg: '✈️ Get on Telegram',
    art_modal_pdf: '🖨️ Print / PDF',
    art_modal_prev: '← Previous Guide',
    art_modal_share: '📲 Share This Guide',
    art_modal_next: 'Next Guide →',
    back_to_top: 'Back to top',
    nav_donation: '☕ Buy Dad a Tea',
    donation_title: 'Buy Dad a Coffee / Tea',
    donation_desc: 'If SkillDad’s free DIY guides helped you fix household issues and you would like to support new video tutorials and platform development, feel free to contribute via crypto below.',
    donation_badge_usdt: 'Tron Network (TRC-20) | Lowest Transfer Fee',
    donation_badge_btc: 'Bitcoin Main Network (Native SegWit)',
    donation_badge_eth: 'Ethereum & BSC Network (ERC20 / BEP20)',
    donation_btn_copy_usdt: 'Copy USDT (TRC20) Address',
    donation_btn_copy_btc: 'Copy Bitcoin (BTC) Address',
    donation_btn_copy_eth: 'Copy ETH / BNB Address',
    donation_note: 'Please ensure you select the correct transfer network before sending. Thank you sincerely for supporting SkillDad! ❤️',
    donation_copied_toast: '✅ Address copied to clipboard!',
    footer_stat_total: 'Total Pageviews',
    footer_stat_today: 'Today\'s Visits',
    footer_stat_guides: 'Video Guides',
    footer_stat_status: 'System Status',
    footer_stat_online: 'Live & Active',
    footer_copy: '© 2026 SkillDad (SkillDad.ir) - All rights reserved. Self-reliance, practical learning and home craft.'
  }
};

function applyLanguage(lang) {
  const isEn = lang === 'en';
  const dict = siteTranslations[isEn ? 'en' : 'fa'];

  document.documentElement.dir = isEn ? 'ltr' : 'rtl';
  document.documentElement.lang = lang;
  if (isEn) {
    document.documentElement.classList.add('lang-en');
    if (document.body) document.body.classList.add('lang-en');
  } else {
    document.documentElement.classList.remove('lang-en');
    if (document.body) document.body.classList.remove('lang-en');
  }

  // 0. Update Page Title (Only on homepage to preserve unique subpage & article titles)
  const isHomepage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || !window.location.pathname.includes('.');
  if (isHomepage && dict && dict.page_title) {
    document.title = dict.page_title;
  }

  // 1. Language and Theme Buttons
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) langBtn.textContent = dict.lang_btn;

  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    if (currentTheme === 'light') {
      themeBtn.textContent = isEn ? '🌙 Dark Mode' : '🌙 تم شب';
    } else {
      themeBtn.textContent = isEn ? '☀️ Day Mode' : '☀️ تم روز';
    }
  }

  // 2. Navigation
  const navMap = {
    '#': dict.nav_home,
    '#hero': dict.nav_home,
    'index.html': dict.nav_home,
    '#videos': dict.nav_videos,
    'videos.html': dict.nav_videos,
    '#troubleshoot': dict.nav_troubleshoot,
    'troubleshoot.html': dict.nav_troubleshoot,
    '#magazine': dict.nav_magazine,
    'magazine.html': dict.nav_magazine,
    '#glossary': dict.nav_glossary,
    'glossary.html': dict.nav_glossary,
    '#toolbox': dict.nav_toolbox,
    'toolbox.html': dict.nav_toolbox,
    '#faq': dict.nav_faq,
    'contact.html#faq': dict.nav_faq,
    '#about': dict.nav_about,
    'index.html#about': dict.nav_about,
    '#contact': dict.nav_contact,
    'contact.html': dict.nav_contact
  };
  document.querySelectorAll('#navLinks a').forEach(a => {
    const href = a.getAttribute('href');
    if (navMap[href]) a.textContent = navMap[href];
  });
  const navCta = document.querySelector('.nav-cta-desktop');
  if (navCta) navCta.textContent = dict.nav_cta;

  // 3. Hero Section
  const elTagline = document.querySelector('[data-i18n="hero_tagline"]');
  if (elTagline) elTagline.textContent = dict.hero_tagline;
  const elH1P1 = document.querySelector('[data-i18n="hero_h1_p1"]');
  if (elH1P1) elH1P1.textContent = dict.hero_h1_p1;
  const elH1P2 = document.querySelector('[data-i18n="hero_h1_p2"]');
  if (elH1P2) elH1P2.textContent = dict.hero_h1_p2;
  const elHeroP = document.querySelector('[data-i18n="hero_p"]');
  if (elHeroP) elHeroP.textContent = dict.hero_p;

  const pillMap = {
    'pill_repair': dict.pill_repair,
    'pill_cooler': dict.pill_cooler,
    'pill_tools': dict.pill_tools,
    'pill_car': dict.pill_car,
    'pill_cook': dict.pill_cook,
    'pill_music': dict.pill_music,
    'pill_install': dict.pill_install,
    'pill_tricks': dict.pill_tricks,
    'pill_bike': dict.pill_bike,
    'btn_yt': dict.btn_yt,
    'btn_ap': dict.btn_ap,
    'btn_tg': dict.btn_tg,
    'btn_ig': dict.btn_ig,
    'btn_wa': dict.btn_wa
  };
  Object.keys(pillMap).forEach(key => {
    const el = document.querySelector('[data-i18n="' + key + '"]');
    if (el) el.textContent = pillMap[key];
  });

  // 4. Stats Strip
  const statLabels = document.querySelectorAll('.stat-lbl');
  if (statLabels.length >= 3) {
    statLabels[0].textContent = dict.stat_1_lbl;
    statLabels[1].textContent = dict.stat_2_lbl;
    statLabels[2].textContent = dict.stat_3_lbl;
  }

  // 5. Topics Section (ALL 6 CARDS 100% TRANSLATED)
  const topicsSection = document.getElementById('topics');
  if (topicsSection) {
    const badge = topicsSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.topics_badge;
    const title = topicsSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.topics_title;
    const desc = topicsSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.topics_desc;

    const catData = [
      {
        title_fa: 'سرویس کولر و لوازم خانگی',
        title_en: 'Cooling & Home Appliances',
        desc_fa: 'سرویس و تنظیم تسمه کولر آبی و سلولزی، رسوب‌زدایی اسپرسوساز، جرم‌گیری لباسشویی و ظرفشویی و سرویس کندانسور یخچال.',
        desc_en: 'Swamp cooler belt & pad maintenance, espresso machine citric descaling, washing machine sanitizing, and fridge condenser cleaning.',
        link_fa: 'مشاهده آموزش‌های لوازم خانگی ←',
        link_en: 'View Appliance Guides →'
      },
      {
        title_fa: 'لوله‌کشی و پمپ آب',
        title_en: 'Plumbing & Water Pumps',
        desc_fa: 'رفع افت فشار آب گرم، هواگیری و تنظیم پمپ آب، رسوب‌زدایی سرشیر و سردوش حمام و تعویض شناور.',
        desc_en: 'Booster pump priming & pressure calibration, aerator descaling, showerhead cleaning, and float valve replacement.',
        link_fa: 'مشاهده آموزش‌های تاسیسات و پمپ ←',
        link_en: 'View Plumbing Guides →'
      },
      {
        title_fa: 'برق، گاز و آیفون منزل',
        title_en: 'Home Electrical, Gas & Intercom',
        desc_fa: 'آموزش ایمن تعویض کلید و پریز، تعمیر زنگ آیفون، فندک اجاق گاز، اضافه کردن پریز برق و نکات کامل ایمنی.',
        desc_en: 'Safe wall receptacle wiring, switch replacement, doorbell repair, gas stove igniter fixes, and breaker safety.',
        link_fa: 'مشاهده آموزش‌های برق و گاز ←',
        link_en: 'View Electrical Guides →'
      },
      {
        title_fa: 'درب، کمد و ساختمان',
        title_en: 'Doors, Cabinets & Woodwork',
        desc_fa: 'رگلاژ لولای در کابینت، درآوردن کشوی ریل‌دار، نصب دستگیره، ترمیم سوراخ‌های دیوار، دوغاب سرامیک و ترمیم ایزوگام.',
        desc_en: '3D cabinet hinge alignment, slide drawer removal, handle installation, wall spackling, and tile re-grouting.',
        link_fa: 'مشاهده آموزش‌های ساختمان و کمد ←',
        link_en: 'View Woodwork Guides →'
      },
      {
        title_fa: 'شنبه ابزار و ترفندها',
        title_en: 'Saturday Tools & Smart Hacks',
        desc_fa: 'آشنایی با انواع اره و انبرها، باز کردن کنسرو با قاشق، جمع کردن چادر مسافرتی و ترفندهای کاربردی خانه.',
        desc_en: 'Handsaw & plier guides, tool reviews, opening cans with spoons, folding pop-up tents, and smart life hacks.',
        link_fa: 'مشاهده ویدیوهای شنبه ابزار ←',
        link_en: 'View Saturday Tool Guides →'
      },
      {
        title_fa: 'آشپزی با پدر و موسیقی',
        title_en: 'Dad Cooking & Persian Setar',
        desc_fa: 'دستور پخت کباب‌های سنتی، رازهای تمپ و فوم عالی قهوه به همراه دقایقی آرامش با مضراب‌نوازی دلنشین سه‌تار.',
        desc_en: 'Traditional Persian kebab secrets, barista coffee tips, and peaceful moments with the soulful Persian Setar.',
        link_fa: 'مشاهده آشپزی و موسیقی ←',
        link_en: 'View Cooking & Music →'
      }
    ];

    topicsSection.querySelectorAll('.category-card').forEach((card, idx) => {
      if (catData[idx]) {
        const item = catData[idx];
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = isEn ? item.title_en : item.title_fa;
        const p = card.querySelector('p');
        if (p) p.textContent = isEn ? item.desc_en : item.desc_fa;
        const link = card.querySelector('.category-link');
        if (link) link.textContent = isEn ? item.link_en : item.link_fa;
      }
    });
  }

  // 6. Troubleshooting Section (100% TRANSLATION FOR SEARCH, TABS, AND CARDS)
  const troubleSection = document.getElementById('troubleshoot');
  if (troubleSection) {
    const badge = troubleSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.trouble_badge;
    const title = troubleSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.trouble_title;
    const desc = troubleSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.trouble_desc;

    const searchInp = document.getElementById('troubleSearchInput') || document.getElementById('troubleSearch');
    if (searchInp) searchInp.placeholder = dict.trouble_search_ph;

    const troubleTabs = troubleSection.querySelectorAll('.trouble-tab');
    dict.trouble_tabs.forEach((tabText, idx) => {
      if (troubleTabs[idx]) troubleTabs[idx].textContent = tabText;
    });

    const troubleCardsData = [
      {
        badge_fa: 'کولر آبی', badge_en: 'Evaporative Cooler',
        title_fa: 'کولر باد گرم می‌زند یا خوب خنک نمی‌کند', title_en: 'Cooler blows warm air or lacks cooling power',
        cause_fa: 'گرفتگی ناودان‌ها، سوختن پمپ آب، رسوب شدید پوشال‌ها یا کمبود آب در کفی',
        cause_en: 'Clogged distributor troughs, seized water pump, calcified pads, or low reservoir water',
        tools_fa: 'شیلنگ آب، پیچ‌گوشتی، فرچه تمیزکاری، پوشال جدید',
        tools_en: 'Water hose, screwdriver, scrub brush, new pads',
        btn_fa: 'آموزش رفع مشکل و ویدیو 📺', btn_en: 'Fix Guide & Video 📺'
      },
      {
        badge_fa: 'کولر آبی', badge_en: 'Evaporative Cooler',
        title_fa: 'تسمه کولر صدای جیغ می‌دهد یا پاره شده', title_en: 'Cooler drive belt squeals or has snapped',
        cause_fa: 'شل یا سفت بودن بیش از حد تسمه، ترک‌خوردگی یا عدم هم‌راستایی فولی‌ها',
        cause_en: 'Improper belt tension, cracked rubber, or misaligned motor/blower pulleys',
        tools_fa: 'آچار یکسر تخت ۱۳ یا ۱۴، تسمه با سایز استاندارد کولر',
        tools_en: '13mm/14mm open-end wrench, factory size V-belt',
        btn_fa: 'آموزش تنظیم و تعویض تسمه 📺', btn_en: 'Belt Adjustment Guide 📺'
      },
      {
        badge_fa: 'لوله‌کشی', badge_en: 'Plumbing',
        title_fa: 'شیر آب اهرمی یا کلاسیک چکه می‌کند', title_en: 'Single-handle or traditional faucet is dripping',
        cause_fa: 'خرابی کارتریج شیر اهرمی، رسوب واشر یا ساییده شدن مغزی شیر معمولی',
        cause_en: 'Worn ceramic disc cartridge, mineral buildup, or degraded rubber washer',
        tools_fa: 'آچار فرانسه، آچار آلن سایز ۲.۵ یا ۳، کارتریج یدکی',
        tools_en: 'Adjustable wrench, 2.5mm/3mm hex key, replacement cartridge',
        btn_fa: 'آموزش تعویض مغزی و کارتریج 📺', btn_en: 'Cartridge Replacement Guide 📺'
      },
      {
        badge_fa: 'لوله‌کشی', badge_en: 'Plumbing',
        title_fa: 'افت شدید فشار آب گرم یا رسوب‌گرفتگی سرشیرها', title_en: 'Severe hot water pressure drop or clogged aerator',
        cause_fa: 'تجمع آهک و سنگ‌ریزه در پرلاتور (توری سرشیر)، سردوش یا فیلتر ورودی آبگرمکن',
        cause_en: 'Calcium buildup in faucet aerator mesh, showerhead nozzles, or boiler inlet filter',
        tools_fa: 'سرکه سفید یا جوهر نمک رقیق، انبردست یا آچار فرانسه، مسواک کهنه',
        tools_en: 'Distilled white vinegar, pliers or wrench, old toothbrush',
        btn_fa: 'آموزش رسوب‌زدایی سرشیر و دوش 📺', btn_en: 'Aerator Descaling Guide 📺'
      },
      {
        badge_fa: 'برق منزل', badge_en: 'Home Electrical',
        title_fa: 'پریدن مکرر فیوز برق یا جرقه زدن پریز', title_en: 'Frequent circuit breaker tripping or sparking outlet',
        cause_fa: 'اتصال کوتاه در یکی از لوازم برقی، شل شدن پیچ ترمینال پریز یا اضافه بار مدار',
        cause_en: 'Short circuit in connected appliance, loose receptacle terminal screw, or circuit overload',
        tools_fa: 'فازمتر عایق، پیچ‌گوشتی چهارسو، نوارچسب برق (لنت)',
        tools_en: 'Insulated voltage tester, Phillips screwdriver, lever connectors',
        btn_fa: 'آموزش عیب‌یابی و تعویض ایمن پریز 📺', btn_en: 'Safe Breaker & Receptacle Fix 📺'
      },
      {
        badge_fa: 'درب و کمد', badge_en: 'Doors & Cabinets',
        title_fa: 'درب کابینت یا کمد کج شده و بسته نمی‌شود', title_en: 'Cabinet or wardrobe door is sagging and sticking',
        cause_fa: 'از تنظیم خارج شدن پیچ‌های رگلاژ لولای گازور یا شل شدن پیچ چوب ام‌دی‌اف',
        cause_en: 'Misaligned 3D European hinge adjustment screws or stripped MDF screw holes',
        tools_fa: 'پیچ‌گوشتی چهارسو، چسب چوب و خلال دندان (در صورت هرز شدن سوراخ پیچ)',
        tools_en: 'Phillips screwdriver, PVA wood glue, toothpicks for stripped holes',
        btn_fa: 'آموزش ۳ دقیقه‌ای رگلاژ لولا 📺', btn_en: '3-Minute Hinge Alignment 📺'
      }
    ];

    troubleSection.querySelectorAll('.trouble-card').forEach((card, idx) => {
      if (troubleCardsData[idx]) {
        const item = troubleCardsData[idx];
        const badgeEl = card.querySelector('.trouble-badge');
        if (badgeEl) badgeEl.textContent = isEn ? item.badge_en : item.badge_fa;
        const titleEl = card.querySelector('.trouble-title');
        if (titleEl) titleEl.textContent = isEn ? item.title_en : item.title_fa;
        
        const causeLbl = card.querySelector('.trouble-cause strong');
        if (causeLbl) causeLbl.textContent = isEn ? 'Common Cause: ' : 'علت شایع: ';
        const causeText = card.querySelector('.trouble-cause span');
        if (causeText) causeText.textContent = isEn ? item.cause_en : item.cause_fa;

        const toolsLbl = card.querySelector('.trouble-tools strong');
        if (toolsLbl) toolsLbl.textContent = isEn ? 'Required Tools: ' : 'ابزار لازم: ';
        const toolsText = card.querySelector('.trouble-tools span');
        if (toolsText) toolsText.textContent = isEn ? item.tools_en : item.tools_fa;

        const btnPrimary = card.querySelector('.btn-primary');
        if (btnPrimary) btnPrimary.textContent = isEn ? item.btn_en : item.btn_fa;

        const btnShare = card.querySelector('.trouble-share-btn');
        if (btnShare) btnShare.innerHTML = isEn ? 'Share 📱' : 'اشتراک 📱';
      }
    });
  }

  // 7. Videos Section & Aparat CTA Banner
  const videosSection = document.getElementById('videos');
  if (videosSection) {
    const badge = videosSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.videos_badge;
    const title = videosSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.videos_title;
    const desc = videosSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.videos_desc;

    const filterTabs = videosSection.querySelectorAll('.filter-tab');
    dict.videos_tabs.forEach((tabText, idx) => {
      if (filterTabs[idx]) filterTabs[idx].textContent = tabText;
    });

    const aparatBtn = videosSection.querySelector('.btn-view-all-aparat');
    if (aparatBtn) aparatBtn.innerHTML = dict.aparat_cta_btn;
  }

  // 8. Magazine Section & All 21 Article Cards Dynamic Translation
  const magSection = document.getElementById('magazine');
  if (magSection) {
    const magBadge = magSection.querySelector('.section-badge');
    if (magBadge) magBadge.textContent = dict.mag_badge;
    const magTitle = magSection.querySelector('.section-title');
    if (magTitle) magTitle.innerHTML = dict.mag_title;
    const magDesc = magSection.querySelector('.section-desc');
    if (magDesc) magDesc.textContent = dict.mag_desc;

    const magTabs = magSection.querySelectorAll('.mag-tab');
    dict.mag_tabs.forEach((tabText, idx) => {
      if (magTabs[idx]) magTabs[idx].textContent = tabText;
    });

    document.querySelectorAll('.magazine-card').forEach(card => {
      const onClickAttr = card.getAttribute('onclick') || '';
      const match = onClickAttr.match(/openArticleModal\('([^']+)'\)/);
      if (match && magazineArticles[match[1]]) {
        const art = magazineArticles[match[1]];
        const badgeEl = card.querySelector('.mag-badge');
        if (badgeEl) badgeEl.textContent = isEn ? art.badge_en : art.badge_fa;
        const readTimeEl = card.querySelector('.mag-read-time');
        if (readTimeEl) readTimeEl.textContent = isEn ? art.readTime_en : art.readTime_fa;
        const titleEl = card.querySelector('.mag-title');
        if (titleEl) titleEl.textContent = isEn ? art.title_en : art.title_fa;
        const descEl = card.querySelector('.mag-desc');
        if (descEl) descEl.textContent = isEn ? (art.desc_en || '') : (art.desc_fa || '');
        const btnEl = card.querySelector('.mag-read-btn');
        if (btnEl) btnEl.textContent = isEn ? 'Read Full Guide →' : 'مطالعه مقاله کامل ←';
        const authorEl = card.querySelector('.mag-author');
        if (authorEl) authorEl.textContent = isEn ? '✍️ SkillDad Editorial' : '✍️ تحریریه اسکیل‌دد';
      }
    });
  }

  // 9. Technical Glossary Section
  const glossarySection = document.getElementById('glossary');
  if (glossarySection) {
    const badge = glossarySection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.glossary_badge;
    const title = glossarySection.querySelector('.section-title');
    if (title) title.innerHTML = dict.glossary_title;
    const desc = glossarySection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.glossary_desc;

    const searchInput = document.getElementById('glossarySearchInput');
    if (searchInput) searchInput.placeholder = dict.glossary_search_ph;

    const catButtons = glossarySection.querySelectorAll('.glossary-cat-btn');
    catButtons.forEach(btn => {
      const catKey = btn.getAttribute('data-cat') || 'all';
      if (dict.glossary_cats && dict.glossary_cats[catKey]) {
        btn.textContent = dict.glossary_cats[catKey];
      }
    });

    const letterAllBtn = glossarySection.querySelector('.glossary-letter-btn[data-letter="همه"]');
    if (letterAllBtn) letterAllBtn.textContent = dict.glossary_letter_all;

    const metaSpan = glossarySection.querySelector('.glossary-result-meta span');
    if (metaSpan) {
      const countEl = document.getElementById('glossaryCountDisplay');
      const countVal = countEl ? countEl.textContent : '82';
      metaSpan.innerHTML = `${dict.glossary_result_label} <strong id="glossaryCountDisplay" style="color: var(--amber-primary);">${countVal}</strong> ${dict.glossary_result_unit}`;
    }
  }

  // 10. Toolbox Section (ALL 3 CARDS 100% TRANSLATED)
  const toolboxSection = document.getElementById('toolbox');
  if (toolboxSection) {
    const badge = toolboxSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.toolbox_badge;
    const title = toolboxSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.toolbox_title;
    const desc = toolboxSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.toolbox_desc;

    const toolItemsData = [
      {
        title_fa: 'کیت ابزار ضروری خانه',
        title_en: 'Essential Home Tool Kit',
        desc_fa: 'شامل تمام ابزارهای اولیه‌ای که برای حل ۹۰ درصد مشکلات فنی منزل نیاز دارید.',
        desc_en: 'Includes all foundational hand tools required to solve 90% of household repair emergencies.'
      },
      {
        title_fa: 'کتاب راهنمای قدم‌به‌قدم',
        title_en: 'Step-by-Step DIY Handbook',
        desc_fa: 'آموزش‌های مصور و ساده برای خودکفایی در تعمیرات و نگهداری خانه و لوازم.',
        desc_en: 'Illustrated, easy-to-follow manuals for home self-reliance and appliance maintenance.'
      },
      {
        title_fa: 'فازمتر و ابزار اندازه‌گیری ایمن',
        title_en: 'Insulated Testers & Safety Gauges',
        desc_fa: 'ابزارهای مطمئن برای تست جریان برق قبل از هرگونه تعمیرات و اطمینان از ایمنی کامل.',
        desc_en: 'Reliable VDE-certified instruments to verify zero voltage before any electrical repair.'
      }
    ];

    toolboxSection.querySelectorAll('.tool-item-card').forEach((card, idx) => {
      if (toolItemsData[idx]) {
        const item = toolItemsData[idx];
        const h3 = card.querySelector('h3');
        if (h3) h3.textContent = isEn ? item.title_en : item.title_fa;
        const p = card.querySelector('p');
        if (p) p.textContent = isEn ? item.desc_en : item.desc_fa;
      }
    });
  }

  // 11. About Section (ALL 4 CHECKLIST ITEMS)
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const badge = aboutSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.about_badge;
    const title = aboutSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.about_title;
    const paragraphs = aboutSection.querySelectorAll('.about-text');
    if (paragraphs.length >= 2) {
      paragraphs[0].textContent = dict.about_p1;
      paragraphs[1].textContent = dict.about_p2;
    }
    const quote = aboutSection.querySelector('.dad-quote');
    if (quote) quote.textContent = dict.about_quote;

    const tagSpans = aboutSection.querySelectorAll('.about-tag-item span:last-child');
    dict.about_tags.forEach((tagText, idx) => {
      if (tagSpans[idx]) tagSpans[idx].textContent = tagText;
    });
  }

  // 12. FAQ Section
  const faqSection = document.getElementById('faq');
  if (faqSection) {
    const badge = faqSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.faq_badge;
    const title = faqSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.faq_title;
    const desc = faqSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.faq_desc;

    const faqItemsData = [
      {
        q_fa: 'آیا برای تعمیر کولر یا پمپ حتماً باید ابزار گران‌قیمت داشته باشیم؟',
        q_en: 'Do I need expensive specialized tools to repair a cooler or water pump?',
        a_fa: 'خیر! بیش از ۹۰ درصد کارهای تعمیراتی خانه تنها با یک آچار فرانسه، یک ست پیچ‌گوشتی، فازمتر و یک انبردست ساده قابل انجام است.',
        a_en: 'No! Over 90% of home repairs only require a 10-inch adjustable wrench, insulated screwdrivers, a voltage tester, and pliers.'
      },
      {
        q_fa: 'چطور از ایمنی کامل هنگام کار با برق مطمئن شوم؟',
        q_en: 'How can I ensure 100% safety when working with home electrical circuits?',
        a_fa: 'همیشه قبل از هر کاری، فیوز مینیاتوری مربوطه را از جعبه فیوز اصلی قطع کنید و با فازمتر عایق مطمئن شوید هیچ جریانی در سیم‌ها وجود ندارد.',
        a_en: 'Always trip the dedicated circuit breaker in your main electrical panel and double-check with an insulated phase tester before touching wires.'
      },
      {
        q_fa: 'چرا شیر اهرمی بعد از مدتی سفت می‌شود یا چکه می‌کند؟',
        q_en: 'Why does a single-handle mixer faucet become stiff or start dripping?',
        a_fa: 'رسوبات کلسیمی و آهک آب بین دیسک‌های سرامیکی کارتریج جمع می‌شوند. با تعویض کارتریج در کمتر از ۱۰ دقیقه مشکل کاملاً حل می‌شود.',
        a_en: 'Dissolved minerals and lime scale accumulate between the ceramic discs. Swapping the cartridge in under 10 minutes cures the leak completely.'
      },
      {
        q_fa: 'ویدیوهای جدید چه روزهایی منتشر می‌شوند؟',
        q_en: 'When are new SkillDad tutorial videos published?',
        a_fa: 'آموزش‌های جدید به صورت هفتگی در روزهای دوشنبه و پنج‌شنبه، و ویدیوهای «شنبه ابزار» شنبه هر هفته در یوتیوب و آپارات منتشر می‌شوند.',
        a_en: 'New DIY masterclasses are released weekly, alongside dedicated Saturday Tools episodes every weekend on YouTube and Aparat.'
      }
    ];

    faqSection.querySelectorAll('.faq-item').forEach((item, idx) => {
      if (faqItemsData[idx]) {
        const data = faqItemsData[idx];
        const qBtn = item.querySelector('.faq-question span');
        if (qBtn) qBtn.textContent = isEn ? data.q_en : data.q_fa;
        const aP = item.querySelector('.faq-answer p');
        if (aP) aP.textContent = isEn ? data.a_en : data.a_fa;
      }
    });
  }

  // 13. Contact Section & Left Info Card
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const badge = contactSection.querySelector('.section-badge');
    if (badge) badge.textContent = dict.contact_badge;
    const title = contactSection.querySelector('.section-title');
    if (title) title.innerHTML = dict.contact_title;
    const desc = contactSection.querySelector('.section-desc');
    if (desc) desc.textContent = dict.contact_desc;

    const cardTitle = contactSection.querySelector('.contact-card h3');
    if (cardTitle) cardTitle.textContent = dict.contact_card_title;
    const cardDesc = contactSection.querySelector('.contact-card p');
    if (cardDesc) cardDesc.textContent = dict.contact_card_desc;

    const contactRows = contactSection.querySelectorAll('.contact-row');
    if (contactRows.length >= 5) {
      const emailLbl = contactRows[0].querySelector('.contact-label') || contactRows[0].querySelector(':scope > div:last-child > div:first-child');
      if (emailLbl) emailLbl.textContent = dict.contact_lbl_email;
      const ytLbl = contactRows[1].querySelector('.contact-label') || contactRows[1].querySelector(':scope > div:last-child > div:first-child');
      if (ytLbl) ytLbl.textContent = dict.contact_lbl_yt;
      const apLbl = contactRows[2].querySelector('.contact-label') || contactRows[2].querySelector(':scope > div:last-child > div:first-child');
      if (apLbl) apLbl.textContent = dict.contact_lbl_ap;
      const tgLbl = contactRows[3].querySelector('.contact-label') || contactRows[3].querySelector(':scope > div:last-child > div:first-child');
      if (tgLbl) tgLbl.textContent = dict.contact_lbl_tg;
      const igLbl = contactRows[4].querySelector('.contact-label') || contactRows[4].querySelector(':scope > div:last-child > div:first-child');
      if (igLbl) igLbl.textContent = dict.contact_lbl_ig;
    }

    const labels = contactSection.querySelectorAll('.form-label');
    if (labels.length >= 3) {
      labels[0].textContent = dict.lbl_name;
      labels[1].textContent = dict.lbl_email;
      labels[2].textContent = dict.lbl_msg;
    }

    const inpName = document.getElementById('cName');
    if (inpName) inpName.placeholder = dict.ph_name;
    const inpEmail = document.getElementById('cEmail');
    if (inpEmail) inpEmail.placeholder = dict.ph_email;
    const inpMsg = document.getElementById('cMsg');
    if (inpMsg) inpMsg.placeholder = dict.ph_msg;

    const submitBtn = contactSection.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.textContent = dict.btn_submit;

    const successBox = document.getElementById('formSuccess');
    if (successBox) successBox.innerHTML = dict.contact_success_html;
  }

  // 14. Lightboxes & Global Modals
  const btnYt = document.getElementById('btnYtLink');
  if (btnYt) btnYt.textContent = dict.lightbox_yt;
  const btnAp = document.getElementById('btnApLink');
  if (btnAp) btnAp.textContent = dict.lightbox_ap;

  const artPdfBtn = document.querySelector('button[onclick="printCurrentArticlePdf()"]');
  if (artPdfBtn) artPdfBtn.textContent = dict.art_modal_pdf;
  const artPrevBtn = document.getElementById('artPrevBtn');
  if (artPrevBtn) artPrevBtn.textContent = dict.art_modal_prev;
  const artShareBtn = document.getElementById('artModalShareBtn');
  if (artShareBtn) artShareBtn.textContent = dict.art_modal_share;
  const artNextBtn = document.getElementById('artNextBtn');
  if (artNextBtn) artNextBtn.textContent = dict.art_modal_next;

  // Donation Modal & Nav Button
  const donNavBtn = document.getElementById('donationNavBtn');
  if (donNavBtn) donNavBtn.innerHTML = `<span>☕</span> ${dict.nav_donation}`;
  const donMenuLink = document.querySelector('.donation-menu-link');
  if (donMenuLink) donMenuLink.textContent = `☕ ${dict.nav_donation}`;

  const donTitle = document.getElementById('donationModalTitle');
  if (donTitle) donTitle.textContent = dict.donation_title;
  const donDesc = document.getElementById('donationModalDesc');
  if (donDesc) donDesc.textContent = dict.donation_desc;

  const badgeUsdt = document.getElementById('badge_usdt');
  if (badgeUsdt) badgeUsdt.textContent = dict.donation_badge_usdt;
  const badgeBtc = document.getElementById('badge_btc');
  if (badgeBtc) badgeBtc.textContent = dict.donation_badge_btc;
  const badgeEth = document.getElementById('badge_eth');
  if (badgeEth) badgeEth.textContent = dict.donation_badge_eth;

  const btnCopyUsdt = document.querySelector('#btnCopy_usdt .copy-btn-text');
  if (btnCopyUsdt) btnCopyUsdt.textContent = dict.donation_btn_copy_usdt;
  const btnCopyBtc = document.querySelector('#btnCopy_btc .copy-btn-text');
  if (btnCopyBtc) btnCopyBtc.textContent = dict.donation_btn_copy_btc;
  const btnCopyEth = document.querySelector('#btnCopy_eth .copy-btn-text');
  if (btnCopyEth) btnCopyEth.textContent = dict.donation_btn_copy_eth;

  const donNote = document.getElementById('donationModalNote');
  if (donNote) donNote.textContent = dict.donation_note;

  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.title = dict.back_to_top;

  // 15. Footer
  const footerCopy = document.querySelector('.footer-copy-text');
  if (footerCopy) footerCopy.textContent = dict.footer_copy;

  // Dynamic Data-i18n Attribute Translator (including footer stats)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const onlineEl = document.getElementById('onlineStatusCounter');
  if (onlineEl) {
    onlineEl.textContent = isEn ? (dict.footer_stat_online || 'Live') : (dict.footer_stat_online || 'فعال');
  }

  if (typeof window.refreshGlossary === 'function') {
    window.refreshGlossary();
  }
}


// 3. STAT COUNTER ANIMATIONS & LIVE CHANNEL STATS SYNC
function initCounters() {
  const counters = document.querySelectorAll('.stat-val');

  function animateSingleCounter(c, targetVal) {
    if (!c || !targetVal) return;
    const suffix = c.getAttribute('data-suffix') || '';
    let count = 0;
    const step = Math.max(1, Math.ceil(targetVal / 35));
    const timer = setInterval(() => {
      count += step;
      if (count >= targetVal) {
        count = targetVal;
        clearInterval(timer);
      }
      const isEn = document.documentElement.lang === 'en';
      c.textContent = isEn ? count + suffix : count.toLocaleString('fa-IR') + suffix;
    }, 28);
  }

  // Initial animation using saved or verified live baseline (196 YouTube, 75 Aparat, 15 Playlists)
  const savedYt = Math.max(196, parseInt(getSafeStorage('skilldad_yt_cnt', '196'), 10) || 196);
  const savedAp = Math.max(75, parseInt(getSafeStorage('skilldad_aparat_cnt', '75'), 10) || 75);
  const savedPl = parseInt(getSafeStorage('skilldad_playlists_cnt', '15'), 10) || 15;

  const ytEl = document.getElementById('statValYoutube');
  if (ytEl) {
    ytEl.setAttribute('data-target', savedYt.toString());
    animateSingleCounter(ytEl, savedYt);
  }

  const aparatEl = document.getElementById('statValAparat');
  if (aparatEl) {
    aparatEl.setAttribute('data-target', savedAp.toString());
    animateSingleCounter(aparatEl, savedAp);
  }

  const playlistEl = document.getElementById('statValPlaylists');
  if (playlistEl) {
    playlistEl.setAttribute('data-target', savedPl.toString());
    animateSingleCounter(playlistEl, savedPl);
  }

  // Also sync featured-stats-footer counters
  const statYtEl = document.getElementById('stat-yt-videos');
  const statApEl = document.getElementById('stat-aparat-videos');
  const statPlEl = document.getElementById('stat-yt-playlists');
  if (statYtEl) statYtEl.textContent = (document.documentElement.lang === 'en' ? savedYt : savedYt.toLocaleString('fa-IR')) + '+';
  if (statApEl) statApEl.textContent = (document.documentElement.lang === 'en' ? savedAp : savedAp.toLocaleString('fa-IR')) + '+';
  if (statPlEl) statPlEl.textContent = document.documentElement.lang === 'en' ? savedPl.toString() : savedPl.toLocaleString('fa-IR');

  function updateArchiveBtn(num) {
    const archiveBtn = document.getElementById('archiveFullBtn');
    if (archiveBtn) {
      const isEn = document.documentElement.lang === 'en';
      archiveBtn.textContent = isEn 
        ? `Watch Full Archive of ${num}+ Videos 📺`
        : `مشاهده آرشیو کامل ${num.toLocaleString('fa-IR')}+ آموزش در صفحه ویدیوها 📺`;
    }
  }
  updateArchiveBtn(savedYt);

  // Dynamic sync: Fetch latest channel stats cache (api/stats_cache.json or api/stats.php)
  fetch('api/stats_cache.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {
      if (data) {
        if (data.youtube && data.youtube >= 196) {
          const ytNum = parseInt(data.youtube, 10);
          setSafeStorage('skilldad_yt_cnt', ytNum.toString());
          if (ytEl && ytEl.getAttribute('data-target') !== ytNum.toString()) {
            ytEl.setAttribute('data-target', ytNum.toString());
            animateSingleCounter(ytEl, ytNum);
          }
          if (statYtEl) {
            statYtEl.textContent = (document.documentElement.lang === 'en' ? ytNum : ytNum.toLocaleString('fa-IR')) + '+';
          }
          updateArchiveBtn(ytNum);
        }
        if (data.aparat && data.aparat >= 75) {
          const apNum = parseInt(data.aparat, 10);
          setSafeStorage('skilldad_aparat_cnt', apNum.toString());
          if (aparatEl && aparatEl.getAttribute('data-target') !== apNum.toString()) {
            aparatEl.setAttribute('data-target', apNum.toString());
            animateSingleCounter(aparatEl, apNum);
          }
          if (statApEl) {
            statApEl.textContent = (document.documentElement.lang === 'en' ? apNum : apNum.toLocaleString('fa-IR')) + '+';
          }
        }
        if (data.playlists) {
          const plNum = parseInt(data.playlists, 10);
          setSafeStorage('skilldad_playlists_cnt', plNum.toString());
          if (playlistEl && playlistEl.getAttribute('data-target') !== plNum.toString()) {
            playlistEl.setAttribute('data-target', plNum.toString());
            animateSingleCounter(playlistEl, plNum);
          }
          if (statPlEl) {
            statPlEl.textContent = document.documentElement.lang === 'en' ? plNum.toString() : plNum.toLocaleString('fa-IR');
          }
        }
      }
    })
    .catch(() => {});

  // Direct live Aparat query probe
  try {
    fetch('https://www.aparat.com/api/fa/v1/user/user/information/username/skilldads')
      .then(res => res.json())
      .then(json => {
        const liveCnt = json?.data?.attributes?.video_cnt;
        if (liveCnt && !isNaN(liveCnt) && parseInt(liveCnt, 10) >= 75) {
          const apNum = parseInt(liveCnt, 10);
          setSafeStorage('skilldad_aparat_cnt', apNum.toString());
          if (aparatEl && aparatEl.getAttribute('data-target') !== apNum.toString()) {
            aparatEl.setAttribute('data-target', apNum.toString());
            animateSingleCounter(aparatEl, apNum);
          }
          if(window.i18n && window.i18n.fa) window.i18n.fa.videos_tabs[0] = 'همه ویدیوها (' + apNum.toLocaleString('fa-IR') + ' آموزش زنده)';
          if(window.i18n && window.i18n.en) window.i18n.en.videos_tabs[0] = 'All Videos (' + apNum + ' Live Guides)';
          const allTab = document.querySelector('.videos-filter .filter-tab[data-filter="all"]');
          if (allTab) allTab.textContent = document.documentElement.lang === 'en' ? window.i18n.en.videos_tabs[0] : window.i18n.fa.videos_tabs[0];
          fetch('api/stats.php?sync_ap=' + apNum).catch(() => {});
        }
      }).catch(() => {});
  } catch(e) {}
}

// 4. VIDEO FILTER TABS
function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter') || 'all';
      const cards = document.querySelectorAll('.video-card');

      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Handle URL query parameter ?cat=...
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat') || urlParams.get('filter');
    if (catParam) {
      const targetTab = document.querySelector(`.filter-tab[data-filter="${catParam}"]`);
      if (targetTab) {
        setTimeout(() => targetTab.click(), 50);
      }
    }
  } catch(e) {}
}

function filterCategory(catName) {
  const tab = document.querySelector(`.filter-tab[data-filter="${catName}"]`);
  if (tab) {
    tab.click();
  }
  const section = document.getElementById('videos');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// 5. VIDEO MODAL POPUP
function openVideoModal(title, desc) {
  const modal = document.getElementById('videoLightbox');
  const tEl = document.getElementById('lightboxTitle');
  const dEl = document.getElementById('lightboxDesc');

  if (tEl) tEl.textContent = title;
  if (dEl) dEl.textContent = desc;

  if (modal) modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('videoLightbox');
  if (modal) modal.classList.remove('active');
}

window.addEventListener('click', (e) => {
  const modal = document.getElementById('videoLightbox');
  if (modal && e.target === modal) {
    closeVideoModal();
  }
});

// 6. CONTACT FORM
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    if (successBox) successBox.style.display = 'block';
  });
}

// 7. BACK TO TOP
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 8. MOBILE MENU TOGGLE
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (!btn || !navLinks) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  const links = navLinks.querySelectorAll('.nav-link, .mobile-menu-cta-btn');
  links.forEach(l => {
    l.addEventListener('click', () => {
      btn.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !btn.contains(e.target)) {
      btn.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

// 9. LIVE VISITOR & TRAFFIC TRACKER
function initVisitorTracking() {
  const totalEl = document.getElementById('totalVisitsCounter');
  const todayEl = document.getElementById('todayVisitsCounter');
  const guidesEl = document.getElementById('footerGuidesCounter');
  const onlineEl = document.getElementById('onlineStatusCounter');
  if (!totalEl && !todayEl) return;

  const isEn = document.documentElement.lang === 'en';
  const todayStr = new Date().toISOString().slice(0, 10);
  const localTotalKey = 'skilldad_visits_total';
  const localTodayDateKey = 'skilldad_visits_today_date';
  const localTodayCountKey = 'skilldad_visits_today_count';

  // Initialize baseline total if not set or corrupted from old mock numbers (> 200000)
  let savedTotal = parseInt(getSafeStorage(localTotalKey, '1254'), 10) || 1254;
  if (savedTotal > 200000 || savedTotal < 1200) {
    savedTotal = 1254;
    setSafeStorage(localTotalKey, '1254');
  }

  let todayCount = parseInt(getSafeStorage(localTodayCountKey, '28'), 10) || 28;
  const savedDate = getSafeStorage(localTodayDateKey, '');
  if (savedDate !== todayStr) {
    todayCount = 1;
    setSafeStorage(localTodayDateKey, todayStr);
  } else {
    todayCount++;
  }

  if (todayCount > savedTotal) {
    todayCount = savedTotal;
  }
  setSafeStorage(localTodayCountKey, todayCount.toString());

  let totalCount = Math.max(savedTotal + 1, 1254);
  setSafeStorage(localTotalKey, totalCount.toString());

  function animateNumber(el, targetVal) {
    if (!el) return;
    const isEnDoc = document.documentElement.lang === 'en';
    let current = Math.max(0, Math.floor(targetVal * 0.8));
    const step = Math.max(1, Math.ceil((targetVal - current) / 20));
    const timer = setInterval(() => {
      current += step;
      if (current >= targetVal) {
        current = targetVal;
        clearInterval(timer);
      }
      el.textContent = isEnDoc ? current.toLocaleString('en-US') : current.toLocaleString('fa-IR');
    }, 30);
  }

  // Display initial cached/animated values immediately
  animateNumber(todayEl, todayCount);
  animateNumber(totalEl, totalCount);

  if (onlineEl) {
    onlineEl.textContent = isEn ? 'Live & Active' : 'فعال';
  }

  if (guidesEl) {
    const savedGuides = Math.max(75, parseInt(getSafeStorage('skilldad_aparat_cnt', '75'), 10) || 75);
    guidesEl.textContent = isEn ? savedGuides + '+' : savedGuides.toLocaleString('fa-IR') + '+';
  }

  // Fetch and track real visit from backend api/stats.php with anti-cache timestamp
  try {
    fetch('api/stats.php?action=visit&_t=' + Date.now(), { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.total_visits === 'number') {
          let realTotal = data.total_visits;
          if (realTotal < 1200) realTotal = 1254;
          setSafeStorage(localTotalKey, realTotal.toString());
          if (totalEl) {
            const isEnDoc = document.documentElement.lang === 'en';
            totalEl.textContent = isEnDoc ? realTotal.toLocaleString('en-US') : realTotal.toLocaleString('fa-IR');
          }
        }
        if (data && typeof data.today_visits === 'number' && todayEl) {
          let realToday = data.today_visits;
          if (realToday > (data.total_visits || 1254) || realToday < 1) realToday = 1;
          setSafeStorage(localTodayCountKey, realToday.toString());
          const isEnDoc = document.documentElement.lang === 'en';
          todayEl.textContent = isEnDoc ? realToday.toLocaleString('en-US') : realToday.toLocaleString('fa-IR');
        }
      })
      .catch(() => {
        // Fallback to local storage
      });
  } catch(e) {}
}

// 10. INTERACTIVE TROUBLESHOOTING LOGIC & SHARE
const troubleTutorials = {
  cooler_warm: {
    title: 'آموزش کامل سرویس و عیب‌یابی باد گرم کولر آبی',
    desc: 'در این ویدیو یاد می‌گیرید چطور با بررسی شیلنگ‌ها، تمیز کردن ناودان‌های خروجی آب و تست پمپ، سرمایش کولر را تا دوبرابر افزایش دهید.'
  },
  cooler_belt: {
    title: 'آموزش تنظیم دقیق، رگلاژ و تعویض تسمه کولر',
    desc: 'آموزش گام‌به‌گام نحوه رفع صدای سوت و جیغ تسمه کولر و نحوه انتخاب سایز مناسب بدون آسیب به دینام.'
  },
  faucet_leak: {
    title: 'آموزش رفع چکه و تعویض کارتریج شیر اهرمی',
    desc: 'چطور بدون نیاز به تعویض کل شیر، با هزینه بسیار کم کارتریج داخلی را باز و تعویض کنیم تا نشتی کاملاً قطع شود.'
  },
  pressure_drop: {
    title: 'آموزش رسوب‌زدایی سرشیر و سردوش حمام',
    desc: 'روش سریع تمیز کردن توری سرشیرها و رسوب‌زدایی کامل با محلول‌های خانگی برای بازگرداندن فشار قوی آب.'
  },
  fuse_trip: {
    title: 'عیب‌یابی پریدن فیوز و تعویض ایمن پریز برق',
    desc: 'نکات حیاتی ایمنی، کار با فازمتر و پیدا کردن اتصال کوتاه در سیم‌کشی برق ساختمان.'
  },
  cabinet_hinge: {
    title: 'آموزش ۳ دقیقه‌ای رگلاژ لولای آرام‌بند و کابینت',
    desc: 'تنظیم دقیق پیچ‌های بالا، پایین و عمق لولای گازور برای بسته شدن نرم و بی‌صدای درب کمد و کابینت.'
  }
};

window.openTroubleModal = function(troubleId) {
  const item = troubleTutorials[troubleId];
  if (item) {
    openVideoModal(item.title, item.desc);
  } else {
    openVideoModal('آموزش تعمیر و خودکفایی اسکیل‌دد', 'برای مشاهده آموزش‌های بیشتر به کانال یوتیوب یا آپارات مراجعه کنید.');
  }
};

window.shareTrouble = function(title, url) {
  if (navigator.share) {
    navigator.share({
      title: 'آموزش فنی اسکیل‌دد: ' + title,
      text: 'راهنمای رفع مشکل «' + title + '» در وب‌سایت اسکیل‌دد:',
      url: url || window.location.href
    }).catch(() => {});
  } else {
    try {
      navigator.clipboard.writeText(url || window.location.href);
      alert('🔗 لینک آموزش با موفقیت کپی شد! می‌توانید آن را برای دوستانتان ارسال کنید.');
    } catch(e) {
      alert('لینک صفحه: ' + (url || window.location.href));
    }
  }
};

function initTroubleshooter() {
  const searchInput = document.getElementById('troubleSearchInput');
  const tabs = document.querySelectorAll('.trouble-tab');
  const cards = document.querySelectorAll('.trouble-card');

  if (!cards.length) return;

  function filterTroubles() {
    const activeTab = document.querySelector('.trouble-tab.active');
    const catFilter = activeTab ? (activeTab.getAttribute('data-trouble-cat') || 'all') : 'all';
    const query = (searchInput ? searchInput.value.trim().toLowerCase() : '');

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-cat') || '';
      const cardKeywords = (card.getAttribute('data-keywords') || '').toLowerCase();
      const cardTitle = (card.querySelector('.trouble-title') ? card.querySelector('.trouble-title').textContent.toLowerCase() : '');

      const matchesCat = (catFilter === 'all' || cardCat === catFilter);
      const matchesQuery = (!query || cardKeywords.includes(query) || cardTitle.includes(query));

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterTroubles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', filterTroubles);
  }
}

// 11. SKILLDAD MAGAZINE & ARTICLE READER ENGINE

const magazineArticles = {
  "art_study_desk_lighting": {
    "badge_fa": "🎒 ویژه مدارس و مطالعه",
    "badge_en": "🎒 Ergonomic Study Desk",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۶۸۰ مطالعه",
    "views_en": "👁️ 2,680 views",
    "title_fa": "راهنمای جامع ارگونومی میز تحریر، زاویه صندلی و نور استاندارد مطالعه دانش‌آموزان",
    "title_en": "Complete Study Desk Ergonomics, Chair Angle & Healthy Lighting for Students",
    "desc_fa": "آموزش تنظیم زاویه ارگونومیک میز و صندلی مطالعه، نور استاندارد ۴۰۰۰ کلوین، پیشگیری از خستگی چشم و قوز پشتی دانش‌آموزان.",
    "desc_en": "Step-by-step ergonomic seating setup, 4000K balanced lighting, preventing eye strain and posture fatigue.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 اهمیت ارگونومی در موفقیت تحصیلی:</div>
        <p>بیش از ۶۰ درصد دردهای گردن، قوز پشتی و تاری دید در دوران تحصیل ناشی از میز و صندلی غیراستاندارد و نورپردازی اشتباه است. با چند ترفند ارگونومیک ساده محیط مطالعه را استاندارد کنید.</p>
      </div>

      <h3>📋 ۴ اصل طلایی چیدمان اتاق مطالعه</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>قانون سه ۹۰ درجه</h4>
        <p>زاویه مچ پا با زمین، زاویه زانوها، و زاویه آرنج با سطح میز تحریر باید ۹۰ درجه باشد. در صورت کوتاه بودن قد کودک حتماً از زیرپایی شیب‌دار استفاده کنید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>دمای رنگ نور استاندارد (۴۰۰۰ کلوین نچرال)</h4>
        <p>بهترین نور برای مطالعه ترکیب ۵۰٪ مهتابی و ۵۰٪ آفتابی است که مانع از خواب‌آلودگی و خستگی شبکیه چشم می‌شود.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>زاویه چراغ مطالعه در سمت مخالف دست نوشتن</h4>
        <p>چراغ مطالعه را در سمت مخالف دست غالب (برای راست‌دست‌ها در سمت چپ) قرار دهید تا دست هنگام نوشتن سایه نیندازد.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>استفاده از بوک‌استند و زاویه دید ۳۰ درجه</h4>
        <p>خم شدن مداوم سر به جلو فشار شدیدی به مهره‌های گردن وارد می‌کند؛ کتاب را روی بوک‌استند شیب‌دار قرار دهید.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد:</b> قانون ۲۰-۲۰-۲۰؛ بعد از هر ۲۰ دقیقه مطالعه، ۲۰ ثانیه به فاصله دور (۶ متری) نگاه کنید تا عضلات چشم استراحت کنند.
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-study-desk-lighting.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 Study Ergonomics Overview:</div>
        <p>Maintain the 90-degree posture rule, set 4000K balanced lighting, position task lamp opposite writing hand, and elevate books to 30 degrees.</p>
      </div>
    `
  },
  "art_student_tech_safety": {
    "badge_fa": "🎒 ایمنی لپ‌تاپ و کابل‌ها",
    "badge_en": "🎒 Student Tech Safety",
    "readTime_fa": "⏱️ ۹ دقیقه مطالعه ضروری",
    "readTime_en": "⏱️ 9 min essential read",
    "views_fa": "👁️ ۲,۴۵۰ مطالعه",
    "views_en": "👁️ 2,450 views",
    "title_fa": "چک‌لیست ایمنی برق، مدیریت کابل‌ها و سلامت لپ‌تاپ و تبلت دانش‌آموزان",
    "title_en": "Student Tech Safety Checklist: Cable Management, Surge Protection & Laptop Care",
    "desc_fa": "آموزش مدیریت ایمن سیم‌های میز تحریر، محافظ برق استاندارد، نگهداری باتری تبلت و لپ‌تاپ دانش‌آموزی و بهداشت تجهیزات دیجیتال.",
    "desc_en": "Cable routing protocols, surge protectors, 20-80% battery charging rules, and screen cleaning guides for students.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 ایمنی تجهیزات الکترونیکی دانش‌آموزان:</div>
        <p>کلاف سیم‌ها زیر پای کودک علاوه بر خطر سقوط لپ‌تاپ، به دلیل کشش سیم‌ها ریسک آتش‌سوزی و اتصالی دارد. با چیدمان اصولی، امنیت را به اتاق تحریر بیاورید.</p>
      </div>

      <h3>💻 چک‌لیست ۴ گام آماده‌سازی تجهیزات</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>مدیریت کابل‌ها و مهار زیر صفحه میز</h4>
        <p>کابل‌های شارژر و کامپیوتر را با بست کمربندی دسته‌بندی کرده و چندراهی محافظ‌دار را با چسب دوطرفه به دیواره داخلی میز متصل کنید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>قانون ۲۰ تا ۸۰ درصد شارژ باتری</h4>
        <p>لپ‌تاپ و تبلت را مدام به شارژ وصل نگذارید؛ بازه شارژ بین ۲۰ تا ۸۰ درصد عمر باتری را دو برابر می‌کند.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>تمیزکاری اصولی مانیتور با مایکروفایبر</h4>
        <p>هرگز شیشه‌شور یا الکل مستقیم روی صفحه اسپری نکنید؛ از دستمال عینک نرم با چند قطره آب مقطر استفاده کنید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>استفاده از پایه شیب‌دار خنک‌کننده</h4>
        <p>قرار دادن لپ‌تاپ روی فرش یا تخت باعث پرزگرفتگی فن و سوختن کارت گرافیک می‌شود؛ لپ‌تاپ را همیشه روی سطح صاف قرار دهید.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد:</b> یک فلش‌مموری اختصاصی به فرزندتان بدهید تا جمعه هر هفته از تمام تکالیف درسی نسخه پشتیبان تهیه کند.
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-student-tech-safety.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">💻 Digital Device Care:</div>
        <p>Elevate power strips off floor, employ 20-80% battery limits, avoid chemicals on displays, and enforce weekly homework USB backups.</p>
      </div>
    `
  },
  "art_package_radiator": {
    "badge_fa": "🍂 ویژه پاییز و سرما",
    "badge_en": "🍂 Autumn & Winter Heating",
    "readTime_fa": "⏱️ ۱۲ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 12 min deep read",
    "views_fa": "👁️ ۳,۴۲۰ مطالعه",
    "views_en": "👁️ 3,420 views",
    "title_fa": "راهنمای جامع راه‌اندازی پاییزی پکیج دیواری و هواگیری رادیاتور شوفاژ",
    "title_en": "Comprehensive Autumn Heating System Setup: Boiler Pressure & Radiator Bleeding",
    "desc_fa": "آموزش کامل سوئیچ به حالت زمستانه، هواگیری اصولی، تنظیم فشار مانومتر روی ۱.۵ بار و رفع سردی پره‌های رادیاتور شوفاژ.",
    "desc_en": "Step-by-step masterclass on bleeding air locks, balancing radiators, boiler pressure adjustment and circulating pump maintenance.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 چکیده اجرایی راهنما:</div>
        <p>با شروع فصل پاییز و خنک شدن هوا، راه‌اندازی اصولی پکیج پیش از فرارسیدن سرمای شدید ضروری است. این کار مانع از شوک حرارتی به قطعات، گرفتگی رسوبی مبدل‌ها و گریپاژ پمپ سیرکولاتور می‌شود و تا ۳۰ درصد در مصرف گاز صرفه‌جویی به همراه دارد.</p>
      </div>

      <h3>🛠️ چک‌لیست ابزارها و لوازم مورد نیاز</h3>
      <ul>
        <li><b>آچار مخصوص هواگیری رادیاتور:</b> آچار چهارگوش کوچک برنجی یا پیچ‌گوشتی دوسو پهن</li>
        <li><b>ظرف تخلیه و دستمال جاذب آب:</b> مهار قطرات آب خروجی از شیر هواگیری</li>
        <li><b>پیچ‌گوشتی دوسو بزرگ:</b> باز کردن پیچ برنجی وسط پمپ جهت رفع احتمالی گریپاژ روتور</li>
        <li><b>محلول ضدرسوب مدار گرمایش:</b> افزایش طول عمر پره‌ها و کاهش صدای پکیج</li>
      </ul>

      <div class="article-box-warning">
        ⚠️ <b>هشدار ایمنی حیاتی:</b> قبل از هر اقدامی مسیر خروجی دودکش پکیج و مکش لوله دوجداره را بررسی کنید. کلاهک H در پشت‌بام باید محکم و بدون انسداد باشد.
      </div>

      <h3>📋 مراحل عملیاتی گام‌به‌گام</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>باز کردن شیرهای رفت و برگشت زیر پکیج</h4>
        <p>دو شیر بزرگ رفت و برگشت مدار شوفاژ در زیر پکیج را در جهت موازی با لوله باز کنید. همچنین شیرهای رفت و برگشت تمام رادیاتورهای اتاق‌ها را تا انتها باز نمایید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>هواگیری اصولی تک‌تک رادیاتورها</h4>
        <p>هواگیری را از دورترین رادیاتور آغاز کنید. آچار را داخل مغزی انداخته و آرام نیم‌دور بچرخانید تا صدای خروج هوا قطع شده و آب زلال و بدون جهش خارج شود.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>تنظیم فشار مانومتر روی ۱.۵ بار</h4>
        <p>شیر پرکن کوچک زیر پکیج را خلاف عقربه‌های ساعت باز کنید تا عقربه فشار به ۱.۵ بار برسد، سپس محکم آن را ببندید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>روشن کردن حالت زمستانه</h4>
        <p>سلکتور پکیج را روی حالت زمستانه (رادیاتور) گذاشته و دما را روی ۵۵ الی ۶۵ درجه تنظیم کنید.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد:</b> فیلتر برنجی توری برگشت رادیاتور زیر پکیج را سالی یکبار با مسواک کهنه بشویید؛ این کار راندمان شوفاژ را تا ۴۰٪ افزایش می‌دهد!
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-package-radiator.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 Executive Overview:</div>
        <p>Complete autumn guide to firing up your combi boiler, bleeding radiators, recharging expansion loop pressure, and freeing stuck circulator pumps.</p>
      </div>
      <h3>Step-by-Step Procedure</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">1</span>Open Isolation Valves</h4>
        <p>Ensure flow and return heating valves underneath the boiler are fully aligned with the pipes.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">2</span>Systematic Radiator Bleeding</h4>
        <p>Start from the farthest radiator from the boiler. Vent trapped air until a solid stream of water appears.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">3</span>Recharge System Pressure to 1.5 Bar</h4>
        <p>Open filling loop key until gauge needle reaches 1.5 bar, then hand-tighten firmly.</p>
      </div>
    `
  },
  "art_winterizing_cooler": {
    "badge_fa": "🍂 پایان تابستان و پاییز",
    "badge_en": "🍂 Cooler Winterizing",
    "readTime_fa": "⏱️ ۱۰ دقیقه مطالعه کاربردی",
    "readTime_en": "⏱️ 10 min practical read",
    "views_fa": "👁️ ۲,۹۴۰ مطالعه",
    "views_en": "👁️ 2,940 views",
    "title_fa": "آموزش بستن و زمستانه‌سازی اصولی کولر آبی در پاییز و پایان گرما",
    "title_en": "How to Properly Winterize Your Evaporative Cooler & Stop Heat Loss",
    "desc_fa": "راهنمای تخلیه کامل آب تشتک، باز کردن و انبار کردن پمپ و شناور، رهاسازی تسمه، کشیدن کاور برزنتی و بستن دریچه‌های خانه.",
    "desc_en": "Step-by-step seasonal drain down, pump storage, belt removal, winter tarp cover, and sealing home vents.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 چرا نباید کولر را در پاییز و زمستان به حال خود رها کرد؟</div>
        <p>رها کردن کولر در فصول سرد باعث پوسیدگی و سوراخ شدن تشتک، یخ‌زدگی و سوختن پمپ آب، و هدررفت ۲۵ تا ۳۰ درصد گرمای بخاری از طریق کانال‌ها می‌شود.</p>
      </div>

      <h3>📋 مراحل عملیاتی بستن کولر آبی برای فصل سرما</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>قطع برق و بستن شیر آب تغذیه</h4>
        <p>کلید فیوز کولر را قطع کنید. شیر فلکه ورودی آب را ببندید و شیلنگ را از شیر جدا کرده و آب داخل آن را کاملاً فوت کنید تا تخلیه شود.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>تخلیه کامل آب تشتک و لجن‌زدایی</h4>
        <p>مهره سرریز کف کولر را باز کنید تا آب و املاح خالی شوند. کف تشتک را شسته و در صورت نیاز لایه ضدزنگ یا قیر بزنید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>باز کردن پمپ آب و شناور و نگهداری در منزل</h4>
        <p>پمپ و فلوتر را باز کرده و داخل خانه نگهداری کنید تا از یخ‌زدگی و شکستن هوزینگ پروانه در سرمای زیر صفر جلوگیری شود.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>رهاسازی تسمه و روان‌کاری یاتاقان‌ها</h4>
        <p>تسمه را از روی فولی آزاد کنید تا بر اثر سرما دفرمه نشود. به یاتاقان‌ها روغن بزنید تا شفت در خواب زمستانی زنگ نزند.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۵</span>کشیدن کاور برزنتی و مسدود کردن دریچه‌ها</h4>
        <p>کاور برزنتی ضخیم را روی کولر کشیده و با طناب محکم ببندید؛ دمپرهای دریچه‌های داخل خانه را ببندید و کاور مگنتی بچسبانید.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد:</b> پوشال‌ها را با آب و سرکه سفید بشویید و اجازه دهید در آفتاب خشک شوند تا سال بعد بوی لجن ندهند!
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-winterizing-cooler.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 Winterizing Essentials:</div>
        <p>Drain water pan, remove and store submersible pump indoors, slacken V-belt, grease pillow blocks, install heavy weather cover, and seal indoor diffusers.</p>
      </div>
    `
  },
  "art_gas_safety_heating": {
    "badge_fa": "🍂 ایمنی گاز و بخاری",
    "badge_en": "🍂 Gas & Heating Safety",
    "readTime_fa": "⏱️ ۹ دقیقه مطالعه حیاتی",
    "readTime_en": "⏱️ 9 min vital read",
    "views_fa": "👁️ ۳,۸۷۰ مطالعه",
    "views_en": "👁️ 3,870 views",
    "title_fa": "چک‌لیست طلایی ایمنی بخاری گازی و تست دودکش؛ پیشگیری از گازگرفتگی با مونوکسید کربن",
    "title_en": "Gas Heater Safety Checklist: Flue Draft Testing & Carbon Monoxide Prevention",
    "desc_fa": "آموزش تست مکش با شعله، علل خطرناک بودن لوله آکاردئونی، مشخصات کلاهک H پشت‌بام، تشخیص رنگ شعله و پیشگیری ۱۰۰٪ از مسمومیت CO.",
    "desc_en": "Draft flame tests, dangers of corrugated aluminum pipes, rooftop H-caps, flame color diagnosis and silent killer prevention.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">⚠️ مونوکسید کربن (CO)؛ قاتل خاموش چگونه عمل می‌کند؟</div>
        <p>مونوکسید کربن گازی بی‌رنگ، بی‌بو و بی‌مزه است که ۲۰۰ برابر اکسیژن میل به ترکیب با خون دارد. با انجام این ۴ تست ساده ایمنی خانواده‌تان را تضمین کنید.</p>
      </div>

      <h3>📋 آزمایش‌های حیاتی پیش از روشن کردن وسایل گرمایشی</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>تست مکش اولیه با شعله کبریت</h4>
        <p>شعله کبریت را در دهانه خروجی دودکش روی دیوار بگیرید؛ شعله و دود باید با مکش قوی به داخل مجرا کشیده شوند.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>تست لمس داغی لوله دودکش پس از ۱۵ دقیقه</h4>
        <p>لوله فلزی دودکش پس از روشن شدن حتماً باید داغ باشد. سرد بودن لوله یعنی گازهای مرگبار به داخل خانه برمی‌گردند!</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>ممنوعیت قطعی لوله‌های آکاردئونی آلومینیومی</h4>
        <p>لوله‌های فنری آکاردئونی به مرور زمان منافذ میکروسکوپی پیدا کرده و اتصالات آن‌ها جدا می‌شود. فقط از لوله گالوانیزه سفید درزجوش استفاده کنید.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>کلاهک H در پشت‌بام</h4>
        <p>کلاهک باید فرم H داشته باشد و حداقل ۶۰ سانتی‌متر از دیواره جان‌پناه پشت‌بام بالاتر باشد تا باد مانع خروج دود نشود.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد:</b> هرگز تمام منافذ خانه را ۱۰۰٪ کیپ نکنید؛ بخاری برای سوختن ایمن و جلوگیری از خفگی نیاز به ورود جریان تازه اکسیژن دارد.
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-gas-safety-heating.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">⚠️ Carbon Monoxide Prevention:</div>
        <p>Always perform matchstick draft test, ensure chimney pipe is hot to touch during operation, ban flex aluminum pipes, and install rooftop H-caps.</p>
      </div>
    `
  },
  "art_autumn_car_maintenance": {
    "badge_fa": "🍂 خودرو در پاییز",
    "badge_en": "🍂 Fall Car Maintenance",
    "readTime_fa": "⏱️ ۱۱ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 11 min mechanic read",
    "views_fa": "👁️ ۳,۱۲۰ مطالعه",
    "views_en": "👁️ 3,120 views",
    "title_fa": "چک‌لیست سرویس پاییزی خودرو؛ غلظت ضدیخ، باتری در سرما و تیغه‌های برف‌پاک‌کن",
    "title_en": "Autumn Vehicle Maintenance: Antifreeze Density, Cold Battery Health & Wipers",
    "desc_fa": "آماده‌سازی فنی خودرو قبل از مواجهه با باران و سرمای صبحگاهی؛ سنجش نقطه انجماد با چگالی‌سنج، ولتاژ استارت سرد و تنظیم باد لاستیک.",
    "desc_en": "Preparing your car for cold rainy days: hydrometer antifreeze check, battery cranking drop test, wiper replacement and tire pressure.",
    "content_fa": `
      <div class="article-summary-box">
        <div class="article-summary-title">📌 چرا آماده‌سازی خودرو در پاییز حیاتی است؟</div>
        <p>یک شب سرمای شدید کافی است تا آب درون رادیاتور یخ زده و بلوک سیلندر را بترکاند. همچنین باتری‌های ضعیف در سرمای صبحگاهی ماشین را روشن نمی‌کنند.</p>
      </div>

      <h3>🚗 چک‌لیست ۵ گام طلایی سرویس پاییزی خودرو</h3>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۱</span>سنجش غلظت ضدیخ با هیدرومتر</h4>
        <p>با چگالی‌سنج دستی، نقطه انجماد مایع خنک‌کننده را بسنجید؛ این عدد باید حداقل منفی ۲۵ الی ۳۵ درجه سانتی‌گراد باشد (ترکیب ۵۰/۵۰ با آب مقطر).</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۲</span>تست افت ولتاژ باتری در سرما</h4>
        <p>ولتاژ باتری خاموش باید بالای ۱۲.۵ ولت باشد و در لحظه استارت نباید زیر ۹.۶ ولت بیفتد، در غیر این صورت باتری سولفاته شده است.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۳</span>تعویض تیغه‌های برف‌پاک‌کن و مایع ضدیخ شیشه</h4>
        <p>تیغه‌های خشک‌شده تابستان را با مدل ژله‌ای نو تعویض کنید و مایع شیشه‌شوی ضدیخ در مخزن بریزید تا پمپ آب‌پاش یخ نزند.</p>
      </div>
      <div class="article-step-card">
        <h4><span class="article-step-badge">۴</span>تنظیم باد تایرها</h4>
        <p>با هر ۱۰ درجه افت دما، باد تایرها ۱ تا ۲ PSI کم می‌شود؛ باد چرخ‌ها را در حالت سرد تنظیم کنید.</p>
      </div>

      <div class="article-box-tip">
        💡 <b>ترفند طلایی اسکیل‌دد برای مه شیشه:</b> کلید A/C کولر را همراه با بخاری روشن کنید و چرخش داخلی هوا را قطع کنید تا در ۱۰ ثانیه تمام بخار شیشه‌ها ناپدید شود!
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="article-autumn-car-maintenance.html" class="btn btn-primary" style="display: inline-block; padding: 10px 22px; font-weight: bold; text-decoration: none;">📄 مطالعه صفحه اختصاصی مقاله (نسخه کامل و مصور) ←</a>
      </div>
    `,
    "content_en": `
      <div class="article-summary-box">
        <div class="article-summary-title">🚗 Autumn Car Care Checklist:</div>
        <p>Hydrometer antifreeze test (-25°C rating), cranking battery load test, silicone hybrid wiper replacement, tire pressure recalibration, and defogger optimization.</p>
      </div>
    `
  },
  "art_cooler_tuneup": {
    "badge_fa": "❄️ سرمایش و تهویه",
    "badge_en": "❄️ HVAC & Cooling",
    "readTime_fa": "⏱️ ۱۰ دقیقه مطالعه جامع",
    "readTime_en": "⏱️ 10 min comprehensive read",
    "views_fa": "👁️ ۲,۸۹۰ مطالعه",
    "views_en": "👁️ 2,890 views",
    "title_fa": "راهنمای جامع و صفر تا صد سرویس، عیب‌یابی و افزایش سرمایش کولر آبی و سلولزی",
    "title_en": "Ultimate Masterclass on Evaporative & Cellulose Cooler Servicing and Performance Boost",
    "desc_fa": "چطور با رسوب‌زدایی ناودان‌ها، تنظیم هم‌راستایی فولی، روغن‌کاری یاتاقان‌ها و تعویض پوشال یا پد سلولزی، خنکای کولر را به حداکثر برسانیم.",
    "desc_en": "Comprehensive teardown guide: descaling, motor maintenance, belt tensioning and maximizing airflow efficiency.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 چکیده اجرایی راهنما:</div>\n        <p>سرویس اصولی کولر آبی علاوه بر کاهش ۳۵ درصدی مصرف برق و جلوگیری از سوختن موتور دینام، دمای باد خروجی را تا ۷ درجه سانتی‌گراد خنک‌تر می‌کند. این راهنما ۵ گام تخصصی شامل ایمنی برق، تخلیه لجن و شستشوی تشتک، روغن‌کاری یاتاقان‌های بوش برنجی، رگلاژ تسمه و هم‌راستایی فولی‌ها و تنظیم شناور آب را پوشش می‌دهد.</p>\n      </div>\n\n      <h3>🛠️ چک‌لیست ابزارها و لوازم مورد نیاز</h3>\n      <ul>\n        <li><b>آچار فرانسه ۱۰ یا ۱۲ اینچ:</b> باز کردن مهره‌های برنجی لوله‌کشی و پیچ‌های یاتاقان</li>\n        <li><b>روغن غیر اسیدی مخصوص کولر (روغن هیدرولیک یا شماره ۲۰):</b> روان‌کاری یاتاقان‌ها</li>\n        <li><b>پیچ‌گوشتی دوسو و چهارسو دسته عایق ۱۰۰۰ ولت (VDE):</b> تنظیم پایه موتور و ترمینال</li>\n        <li><b>برس سیمی دسته بلند و کاردک پلاستیکی:</b> پاک‌سازی رسوبات آهکی و شوره کف تشتک</li>\n        <li><b>تسمه فابریک نو (سایز متناسب مانند A54، A56، A58 یا A60):</b> تعویض تسمه‌های ترک‌خورده</li>\n        <li><b>پوشال‌های نو چوبی سوزنی یا پد سلولزی:</b> متناسب با هوادهی کولر (۳۵۰۰ تا ۸۰۰۰)</li>\n      </ul>\n\n      <div class=\"article-box-warning\">\n        ⚠️ <b>هشدار ایمنی حیاتی:</b> قبل از بالا رفتن از نردبان، فیوز مینیاتوری مربوط به مدار کولر را در جعبه فیوز ورودی قطع کنید و با فازمتر نبود فاز در جعبه تقسیم داخل کولر را تست کنید.\n      </div>\n\n      <h3>📋 مراحل عملیاتی گام‌به‌گام</h3>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>تخلیه آب کهنه و لجن‌زدایی تشتک</h4>\n        <p>درب‌های سه‌طرفه را خارج کنید. مهره پلاستیکی سرریز آب کف کولر را باز کنید تا لجن، گل و رسوبات آب تخلیه شوند. با برس سیمی و آب تمیز، تمام کف را بشویید و در صورت وجود زنگ‌زدگی، پس از خشک شدن یک لایه قیر یا عایق پلیمری ضدزنگ بزنید.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>رسوب‌زدایی ناودان‌های توزیع آب درب‌ها</h4>\n        <p>یکی از اصلی‌ترین دلایل باد گرم کولر، مسدود شدن سوراخ‌های ناودان بالای درب‌هاست. با یک سیم مفتول فولادی، تمامی سوراخ‌ها را باز کنید تا آب به صورت کاملاً یکنواخت روی تمام سطح پوشال‌ها جریان یابد.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>روغن‌کاری یاتاقان‌ها و تست بالانس شفت</h4>\n        <p>درپوش فنری روغن‌دان یاتاقان‌های دو طرف توربین را بالا بزنید و ۱۰ تا ۱۵ قطره روغن بدون اسید تزریق کنید. پروانه را با دست بچرخانید؛ باید بدون کوچک‌ترین صدای جیرجیر یا لقی به نرمی حرکت کند.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۴</span>رگلاژ کشش تسمه و هم‌راستایی فولی‌ها</h4>\n        <p>پیچ‌های پایه دینام را تنظیم کنید. کشش استاندارد تسمه به این صورت است که با فشار ملایم انگشت شست در وسط تسمه، حدود ۱.۵ سانتی‌متر انحراف داشته باشد. هم‌راستا بودن فولی موتور و فولی توربین مانع از ساییدگی تسمه و لرزش کولر می‌شود.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۵</span>تنظیم فلوتر (شناور) و تست پمپ آب</h4>\n        <p>شناور را به گونه‌ای رگلاژ کنید که سطح آب ۱.۵ تا ۲ سانتی‌متر پایین‌تر از لوله سرریز متوقف شود. صافی پمپ را بشویید و قبل از زدن دور تند، ابتدا اجازه دهید پمپ آب ۵ دقیقه کار کند تا پوشال‌ها کاملاً خیس شوند.</p>\n      </div>\n\n      <div class=\"article-box-tip\">\n        💡 <b>ترفند طلایی اسکیل‌دد:</b> نصب سایبان برزنتی مقاوم روی سقف کولر، مانع از داغ شدن آب تشتک شده و سرمای باد کولر را تا ۴۰٪ افزایش می‌دهد!\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Executive Overview:</div>\n        <p>Seasonal servicing of evaporative and cellulose coolers cuts electricity consumption by 35% and drops outlet temperature by up to 7°C. Follow our 5 systematic engineering steps for full overhaul.</p>\n      </div>\n      <h3>Tools & Materials Checklist</h3>\n      <ul>\n        <li>10\" or 12\" Adjustable wrench</li>\n        <li>20W Non-detergent machine oil</li>\n        <li>VDE 1000V Insulated screwdrivers</li>\n        <li>Heavy-duty wire brush & plastic scraper</li>\n        <li>Factory spec V-belt (A54-A60)</li>\n        <li>New aspen wood pads or rigid cellulose media</li>\n      </ul>\n      <h3>Step-by-Step Procedure</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">1</span>Pan Flush & Sludge Removal</h4>\n        <p>Remove panels, unscrew overflow standpipe, scrape rust and flush all mineral deposits.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">2</span>Distributor Trough Descaling</h4>\n        <p>Clear all mineral-blocked water orifices on panel top headers with stiff wire.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">3</span>Pillow-Block Bearing Lubrication</h4>\n        <p>Inject 10-15 drops of machine oil into oil cups on both sides of blower shaft.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">4</span>Belt Tension & Pulley Alignment</h4>\n        <p>Set belt slack to 1/2 inch (1.5 cm) thumb deflection and ensure pulleys are strictly co-planar.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">5</span>Float Calibration & Pump Pre-Wet</h4>\n        <p>Adjust water level 1 inch below standpipe and run pump for 5 mins prior to fan activation.</p>\n      </div>\n    "
  },
  "art_faucet_repair": {
    "badge_fa": "🚰 لوله‌کشی و تاسیسات",
    "badge_en": "🚰 Plumbing & Valves",
    "readTime_fa": "⏱️ ۹ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 9 min read",
    "views_fa": "👁️ ۳,۱۴۰ مطالعه",
    "views_en": "👁️ 3,140 views",
    "title_fa": "کالبدشکافی و تعویض کارتریج شیر اهرمی (رفع ۱۰۰٪ چکه آب و سفتی دسته)",
    "title_en": "Complete Teardown & Ceramic Cartridge Replacement for Single-Lever Faucets",
    "desc_fa": "نحوه باز کردن پیچ آلن مخفی، تشخیص سایز کارتریج ۳۵ و ۴۰ میلی‌متر، روان‌کاری واشرها و رفع کامل چکه آب در ۱۰ دقیقه.",
    "desc_en": "Step-by-step valve disassembly, identifying 35mm vs 40mm cartridges, lubricating O-rings, and stopping leaks permanently.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>چکه کردن شیرهای اهرمی ناشی از فرسایش دیسک‌های سرامیکی داخل کارتریج یا رسوب املاح آب است. شما می‌توانید بدون نیاز به لوله‌کش و با هزینه بسیار کم، کارتریج شیر را تعویض کرده و مانند روز اول آن را روان و بدون چکه کنید.</p>\n      </div>\n\n      <h3>🛠️ لوازم و قطعات مورد نیاز</h3>\n      <ul>\n        <li><b>آچار آلن سایز ۲.۵ یا ۳ میلی‌متر:</b> باز کردن پیچ مغزی دسته شیر</li>\n        <li><b>آچار فرانسه ۱۰ اینچ:</b> باز کردن مهره برنجی نگهدارنده کارتریج</li>\n        <li><b>کارتریج سرامیکی نو (سایز ۳۵ یا ۴۰ پایه کوتاه یا پایه بلند):</b> بسته به مدل شیر</li>\n        <li><b>گریس سیلیکونی بهداشتی (خوراکی):</b> آب‌بندی بهتر واشرهای زیرین</li>\n        <li><b>تیغ کاتر یا پیچ‌گوشتی ساعتی:</b> درآوردن پولکی پلاستیکی سرد و گرم</li>\n      </ul>\n\n      <h3>📋 مراحل عملیاتی گام‌به‌گام</h3>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>قطع جریان آب از زیر سینک</h4>\n        <p>شیرهای پیسوار آب سرد و گرم زیر سینک را در جهت عقربه‌های ساعت ببندید. اهرم شیر را بالا بکشید تا آب باقیمانده در لوله‌ها تخلیه شده و فشار آزاد شود.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>درآوردن پولکی و باز کردن پیچ آلن دسته</h4>\n        <p>با نوک کاتر، پولکی نشانگر آبی/قرمز روی تنه دسته را خارج کنید. آچار آلن ۲.۵ را داخل سوراخ کرده و ۳ دور خلاف جهت عقربه‌های ساعت بچرخانید. سپس دسته شیر را مستقیم به سمت بالا بکشید.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>باز کردن کاور کروم و مهره برنجی</h4>\n        <p>کاور هلالی براق را با دست به صورت پیچی باز کنید. سپس با آچار فرانسه مهره برنجی شش‌ضلعی را که کارتریج را مهار کرده شل کرده و بردارید.</p>\n      </div>\n\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۴</span>تمیزکاری نشیمنگاه و نصب کارتریج نو</h4>\n        <p>کارتریج قدیمی را خارج کنید. کف محفظه شیر را از رسوبات پاک کنید. کارتریج نو را طوری جا بزنید که دو زایده زیرین آن دقیقاً در دو سوراخ کف نشیمنگاه چفت شوند. مهره برنجی را محکم کنید و قطعات را ببندید.</p>\n      </div>\n\n      <div class=\"article-box-tip\">\n        💡 <b>ترفند طلایی اسکیل‌دد:</b> بیش از حد سفت کردن مهره برنجی باعث سفت شدن حرکت دسته شیر می‌شود؛ آن را تا حدی سفت کنید که آب‌بند شود و اهرم به نرمی حرکت کند.\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Executive Summary:</div>\n        <p>Ceramic mixer faucet leaks are caused by calcified or cracked discs. Swapping the internal cartridge in 10 minutes restores smooth operation and eliminates wasted water.</p>\n      </div>\n      <h3>Tools Required</h3>\n      <ul>\n        <li>2.5mm or 3mm Hex Key</li>\n        <li>10\" Adjustable Wrench</li>\n        <li>Replacement 35mm / 40mm Ceramic Cartridge</li>\n        <li>Plumber's silicone grease</li>\n      </ul>\n      <h3>Step-by-Step Procedure</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">1</span>Shut Off Under-Sink Supply Valves</h4>\n        <p>Close angle stop valves clockwise and lift handle to relieve line pressure.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">2</span>Remove Index Cap & Hex Screw</h4>\n        <p>Pop off the decorative plastic index plug, loosen the set screw with hex key, and pull handle upward.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">3</span>Unscrew Dome Collar & Retaining Nut</h4>\n        <p>Thread off the decorative dome collar by hand, then loosen the heavy brass retaining nut with a wrench.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">4</span>Insert New Cartridge & Align Pins</h4>\n        <p>Clean housing base, lock the cartridge alignment pins into matching body sockets, and tighten brass nut.</p>\n      </div>\n    "
  },
  "art_electrical_safety": {
    "badge_fa": "⚡ برق و روشنایی",
    "badge_en": "⚡ Electrical Safety",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۷۸۰ مطالعه",
    "views_en": "👁️ 2,780 views",
    "title_fa": "۷ اصل حیاتی ایمنی برق ساختمان که از برق‌گرفتگی و آتش‌سوزی جلوگیری می‌کند",
    "title_en": "7 Non-Negotiable Home Electrical Safety Principles for DIYers",
    "desc_fa": "قانون قطع فیوز، تست دوگانه با فازمتر عایق، درک خطرات نول برگشتی، رنگ‌بندی سیم‌های استاندارد و استفاده از ترمینال‌های اهرمی.",
    "desc_en": "Lock-out procedures, dual tester checks, neutral backfeed risks, standard color coding, and modern lever connectors.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 چکیده اجرایی:</div>\n        <p>برق ۲۲۰ ولت خانگی به هیچ وجه جای آزمون و خطا ندارد. رعایت اصول قطع کلید مینیاتوری، بررسی عدم ولتاژ با فازمتر استاندارد و جایگزینی چسب برق کهنه با ترمینال‌های اهرمی استاندارد، ایمنی ۱۰۰ درصدی شما را تضمین می‌کند.</p>\n      </div>\n\n      <h3>⚡ ۷ اصل طلایی و بدون تغییر ایمنی برق</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>قطع قطعی از جعبه فیوز اصلی (نه فقط کلید برق)</h4>\n        <p>هیچ‌گاه به خاموش بودن کلید روی دیوار اطمینان نکنید، زیرا در سیم‌کشی‌های غیراستاندارد ممکن است نول کلید خورده باشد و سرپیچ لامپ یا پریز دارای فاز مستقیم باشد. همیشه فیوز مربوطه را در تابلو برق قطع کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تست دوگانه با فازمتر عایق ۱۰۰۰ ولت</h4>\n        <p>قبل از لمس سیم‌ها، با فازمتر سالم تست کنید. ابتدا هر دو سیم فاز و نول را تست کنید تا مطمئن شوید هیچ جریانی وجود ندارد.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>شناخت خطر نول برگشتی (Neutral Backfeed)</h4>\n        <p>هنگامی که مصرف‌کننده‌ای در مدار روشن باشد، سیم نول می‌تواند دارای ولتاژ برگشتی خطرناک باشد. همیشه با سیم نول با همان احتیاط سیم فاز رفتار کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۴</span>استفاده از ترمینال‌های فشاری و اهرمی (WAGO)</h4>\n        <p>چسب برق پس از چند سال خشک شده و خطر جرقه و حریق دارد. از ترمینال‌های اهرمی استاندارد و نسوز استفاده کنید.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Key Takeaways:</div>\n        <p>Mastering basic household electrical repairs requires strict adherence to isolation protocols, dual testing, and modern connector technology.</p>\n      </div>\n      <h3>7 Golden Electrical Rules</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">1</span>Main Breaker Isolation</h4>\n        <p>Always trip the branch circuit breaker in the panel rather than relying on wall switches.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">2</span>Dual Voltage Testing</h4>\n        <p>Verify zero potential across both Hot and Neutral wires using an insulated phase tester.</p>\n      </div>\n    "
  },
  "art_hinge_wood": {
    "badge_fa": "🚪 درب و چوب",
    "badge_en": "🚪 Doors & Woodwork",
    "readTime_fa": "⏱️ ۷ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 7 min read",
    "views_fa": "👁️ ۲,۴۱۰ مطالعه",
    "views_en": "👁️ 2,410 views",
    "title_fa": "راهنمای جامع رگلاژ ۳ بعدی لولای کابینت و رفع افتادگی و گیر درب‌های کمد و ساختمان",
    "title_en": "Complete 3D Concealed Hinge Adjustment & Sagging Cabinet Door Alignment",
    "desc_fa": "تنظیم پیچ‌های عمق، ارتفاع و شیب جانبی لولای گازور، ترمیم سوراخ پیچ هرز شده با خلال دندان و چسب چوب و بی‌صدا کردن درب‌ها.",
    "desc_en": "Professional adjustment of 3-way euro cabinet hinges, fixing stripped screw holes with wood glue, and eliminating squeaks.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه اجرایی راهنما:</div>\n        <p>افتادگی درب‌های کابینت و کمد به دلیل وزن درب و شل شدن پیچ‌های تنظیم لولای گازور (Concealed Euro Hinge) رخ می‌دهد. با درک کارکرد ۳ پیچ رگلاژ، می‌توانید در عرض ۵ دقیقه فاصله و تراز تمامی درها را میلی‌متری تنظیم کنید.</p>\n      </div>\n      <h3>🛠️ ابزارها و لوازم مورد نیاز</h3>\n      <ul>\n        <li><b>پیچ‌گوشتی چهارسو سایز PH2:</b> تنظیم پیچ‌های لولا بدون لیز خوردن</li>\n        <li><b>خلال دندان چوبی یا رول‌پلاک چوبی:</b> پر کردن سوراخ‌های هرز شده MDF</li>\n        <li><b>چسب چوب ضدآب:</b> تثبیت الیاف چوب در سوراخ‌های آسیب‌دیده</li>\n        <li><b>اسپری روان‌کننده سیلیکونی یا پارافین:</b> رفع جیرجیر لولاها</li>\n      </ul>\n      <h3>📋 راهنمای تنظیم ۳ بعدی پیچ‌های لولای گازور</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>پیچ تنظیم شیب جانبی (چپ و راست)</h4>\n        <p>پیچ جلویی روی بازوی لولا، فاصله بین دو درب کابینت را تنظیم می‌کند. چرخاندن آن در جهت عقربه‌های ساعت، لبه درب را به سمت بیرون هل می‌دهد و چرخاندن خلاف عقربه‌ها درب را به سمت مرکز متمایل می‌کند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>پیچ تنظیم عمق (جلو و عقب)</h4>\n        <p>پیچ عقبی روی لولا امکان عقب و جلو بردن درب نسبت به بدنه کابینت را می‌دهد تا درب کاملاً مماس بر بدنه یونیت بسته شود و باد نکند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>پیچ‌های تنظیم ارتفاع (بالا و پایین)</h4>\n        <p>دو پیچ روی پایه لولا که به دیواره یونیت متصل است، اجازه می‌دهد درب را به بالا یا پایین حرکت دهید تا لبه‌های بالایی تمام کابینت‌ها در یک خط تراز قرار گیرند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۴</span>ترفند طلایی ترمیم جای پیچ هرز شده در MDF</h4>\n        <p>اگر پیچ در چوب هرز می‌چرخد، پیچ را باز کنید. ۳ عدد خلال دندان آغشته به چسب چوب را داخل سوراخ قرار دهید و سر اضافه آن را بشکنید. پس از ۱۰ دقیقه پیچ را مجدداً محکم کنید؛ مانند بتن سفت خواهد شد!</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Executive Overview:</div>\n        <p>Concealed European cabinet hinges feature 3 distinct adjustment screws for lateral, vertical, and depth positioning. Learn how to align cabinet doors perfectly in minutes.</p>\n      </div>\n      <h3>3-Way Adjustment Guide</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">1</span>Lateral Gap Adjustment</h4>\n        <p>The front-most screw shifts the door left or right to establish uniform reveals between adjacent doors.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">2</span>Depth Alignment</h4>\n        <p>The rear screw moves the door closer or farther from the cabinet face frame for a flush seal.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">3</span>Fixing Stripped MDF Screw Holes</h4>\n        <p>Insert wood glue coated toothpicks into the stripped hole, snap flush, and drive the screw firmly.</p>\n      </div>\n    "
  },
  "art_essential_tools": {
    "badge_fa": "🧰 شنبه ابزار",
    "badge_en": "🧰 Tool Mastery",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۵۳۰ مطالعه",
    "views_en": "👁️ 2,530 views",
    "title_fa": "راهنمای جامع خرید و چیدمان جعبه‌ابزار ضروری خانه و کارگاه شخصی",
    "title_en": "The Essential Home Tool Kit: 10 Must-Have Tools for 95% of Household Fixes",
    "desc_fa": "معرفی آچارهای ضروری، متر، کاتر حرفه‌ای، انبر قفلی، دریل شارژی و پیچ‌گوشتی‌های ضربه‌خور؛ چطور با بودجه اقتصادی بهترین کیفیت را تهیه کنیم.",
    "desc_en": "Definitive breakdown of indispensable tools: combination pliers, locking wrenches, cordless drills, and laser meters.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 چکیده کاربردی:</div>\n        <p>داشتن یک ست ابزار استاندارد و باکیفیت، سرمایه‌گذاری برای تمام عمر است. با داشتن ۱۰ ابزار اساسی، شما از پرداخت هزینه‌های گزاف به تعمیرکاران برای کارهای ساده بی‌نیاز خواهید شد.</p>\n      </div>\n      <h3>🧰 لیست ۱۰ ابزار نجات‌بخش منزل</h3>\n      <ul>\n        <li><b>۱. آچار فرانسه ۱۰ اینچ کروم وانادیوم:</b> اهرم ایده‌آل برای انواع مهره‌های لوله‌کشی و کولر</li>\n        <li><b>۲. انبردست و دم‌باریک عایق:</b> نگه‌داشتن، خم کردن و فرم‌دهی سیم‌ها و قطعات ریز</li>\n        <li><b>۳. انبر قفلی (Locking Pliers):</b> باز کردن پیچ‌های هرز شده و نگه داشتن قطعات زنگ‌زده</li>\n        <li><b>۴. دریل پیچ‌گوشتی شارژی ۱۲ یا ۱۸ ولت:</b> سوراخ‌کاری و بستن سریع صدها پیچ</li>\n        <li><b>۵. ست پیچ‌گوشتی‌های ضربه‌خور مغناطیسی:</b> باز کردن پیچ‌های سرسخت و سفت</li>\n        <li><b>۶. متر نواری ۵ متری با تیغه قفل‌شونده:</b> اندازه‌گیری دقیق پرده، کمد و فضاها</li>\n        <li><b>۷. فازمتر دیجیتال یا ساده استاندارد:</b> تضمین سلامت و ایمنی در کارهای برقی</li>\n        <li><b>۸. کاتر حرفه‌ای فلزی تیغ ذوزنقه‌ای:</b> برش موکت، جعبه، پلاستیک و درزگیرها</li>\n        <li><b>۹. چکش دوشاخ ۵۰۰ گرمی:</b> کوبیدن و کشیدن میخ و ضربه‌زدن به اتصالات</li>\n        <li><b>۱۰. تفنگ چسب حرارتی و چسب قطره‌ای:</b> ترمیم سریع شکستگی‌های پلاستیکی و دکوری</li>\n      </ul>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Executive Summary:</div>\n        <p>Equipping yourself with the right 10 foundational hand and power tools solves over 95% of unexpected household breakdowns.</p>\n      </div>\n      <h3>Top 10 Essential Tools</h3>\n      <ul>\n        <li>10-inch Chrome Vanadium Adjustable Wrench</li>\n        <li>Insulated Combination & Needle-Nose Pliers</li>\n        <li>Locking Vise-Grip Pliers</li>\n        <li>12V/18V Cordless Drill Driver</li>\n        <li>Magnetic Strike-Cap Screwdriver Set</li>\n        <li>5m Heavy-Duty Tape Measure</li>\n        <li>Insulated Phase Voltage Tester</li>\n        <li>Utility Knife with Heavy-Duty Blades</li>\n        <li>16oz Claw Hammer</li>\n        <li>Precision Hot Melt Glue Gun</li>\n      </ul>\n    "
  },
  "art_auto_maintenance": {
    "badge_fa": "🚗 خودرو و دوچرخه",
    "badge_en": "🚗 Auto Care",
    "readTime_fa": "⏱️ ۹ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 9 min read",
    "views_fa": "👁️ ۲,۸۹۰ مطالعه",
    "views_en": "👁️ 2,890 views",
    "title_fa": "چک‌لیست طلایی سرویس‌های دوره‌ای، بررسی مایعات و افزایش طول عمر خودرو و باتری",
    "title_en": "DIY Automotive Maintenance: Fluid Checks, Battery Care & Preventive Inspection",
    "desc_fa": "بررسی سطح روغن موتور، مایع خنک‌کننده رادیاتور، روغن ترمز و هیدرولیک، رسوب‌زدایی قطب‌های باتری و تنظیم باد لاستیک‌ها.",
    "desc_en": "Step-by-step automotive health checklist: engine oil dipstick reading, coolant concentration, brake fluid clarity, and terminal cleaning.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه اجرایی:</div>\n        <p>بررسی ماهیانه خودرو تنها ۱۵ دقیقه زمان می‌برد اما از خرابی‌های چند ده میلیونی موتور و گیربکس جلوگیری می‌کند. این راهنما نکات چک کردن ۶ مایع حیاتی و نگهداری اصولی باتری را آموزش می‌دهد.</p>\n      </div>\n      <h3>🚗 ۶ مایع حیاتی که باید منظم بررسی شوند</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>روغن موتور (Engine Oil)</h4>\n        <p>خودرو را روی سطح صاف پارک کرده و پس از ۵ دقیقه خاموش بودن، گیج روغن را بیرون کشیده، پاک کنید و مجدداً جا بزنید. سطح روغن باید بین خط MIN و MAX باشد و رنگ آن نباید کدر و لجن‌گونه باشد.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>مایع ضدیخ و ضدجوش رادیاتور</h4>\n        <p>همیشه سطح مایع را در منبع انبساط شفاف بررسی کنید. هرگز در زمان گرم بودن موتور درب رادیاتور را باز نکنید. ترکیب استاندارد شامل ۵۰٪ آب مقطر و ۵۰٪ ضدیخ استاندارد است.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>نگهداری باتری و رفع سولفاته قطب‌ها</h4>\n        <p>پودر سفید یا آبی‌رنگ دور قطب‌های باتری نشانه سولفاته شدن است. مقداری آب جوش و جوش شیرین روی قطب‌ها بریزید تا کاملاً تمیز شوند، سپس مقداری گریس یا وازلین بمالید تا از سولفاته مجدد جلوگیری شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Routine monthly DIY checks on vital automotive fluids and battery terminals preserve engine life and prevent unexpected roadside failures.</p>\n      </div>\n    "
  },
  "art_water_pump": {
    "badge_fa": "🚰 لوله‌کشی و تاسیسات",
    "badge_en": "🚰 Water Booster Pumps",
    "readTime_fa": "⏱️ ۱۰ دقیقه مطالعه جامع",
    "readTime_en": "⏱️ 10 min read",
    "views_fa": "👁️ ۳,۴۵۰ مطالعه",
    "views_en": "👁️ 3,450 views",
    "title_fa": "راهنمای جامع هواگیری، تنظیم کلید اتوماتیک مکانیکی و دیجیتال پمپ آب خانگی",
    "title_en": "Domestic Water Booster Pump Priming, Pressure Switch Calibration & Troubleshooting",
    "desc_fa": "رفع یکسره کار کردن پمپ، تنظیم پیچ‌های فشار کم و زیاد کلید اتومات، تست باد منبع تحت فشار و نحوه هواگیری اصولی پمپ.",
    "desc_en": "Fixing continuously running booster pumps, pressure switch differential tuning, bladder tank pressure checking, and priming procedure.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه اجرایی:</div>\n        <p>افت فشار آب در طبقات بالا یکی از چالش‌های رایج ساختمان‌هاست. اگر پمپ آب یکسره کار می‌کند، خاموش نمی‌شود یا مرتباً روشن و خاموش (تیک‌تیک) می‌کند، با این راهنما مشکل را ریشه‌ای حل کنید.</p>\n      </div>\n      <h3>📋 مراحل عیب‌یابی و هواگیری پمپ آب</h3>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>نحوه هواگیری اصولی پمپ</h4>\n        <p>پیچ برنجی هواگیری روی کلگی پمپ را باز کنید. با یک قیف، آب داخل محفظه پروانه بریزید تا کاملاً پر شده و حباب‌های هوا خارج شوند. سپس پیچ را محکم کنید و پمپ را روشن کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تنظیم پیچ‌های کلید اتوماتیک مکانیکی (Square D)</h4>\n        <p>پیچ بزرگ‌تر فشار استارت (روشن شدن) پمپ را تنظیم می‌کند (چرخاندن موافق عقربه ساعت فشار را بالا می‌برد). پیچ کوچک‌تر دامنه اختلاف فشار قطع را کنترل می‌کند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>تست باد منبع تحت فشار (مخزن دیافراگمی)</h4>\n        <p>با فشارسنج باد تایر، والف بالای منبع را تست کنید. فشار باد منبع در حالت خاموش بودن پمپ باید حدود ۱.۸ تا ۲ بار باشد. اگر از والف آب بیرون بزند، تیوپ پاره شده و باید تعویض شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Master domestic water pump diagnostics: priming air locks, tuning cut-in/cut-out pressure switch points, and recharging expansion bladder pressure.</p>\n      </div>\n    "
  },
  "art_espresso_package_descaling": {
    "badge_fa": "❄️ لوازم خانگی",
    "badge_en": "❄️ Appliances Descaling",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۲۱۰ مطالعه",
    "views_en": "👁️ 2,210 views",
    "title_fa": "آموزش تخصصی رسوب‌زدایی اسپرسوساز خانگی و مبدل پکیج با اسید سیتریک خوراکی",
    "title_en": "Safe Descaling Guide for Home Espresso Machines & Boiler Heat Exchangers",
    "desc_fa": "فرمول ایمن رسوب‌زدایی بدون آسیب به بویلر آلومینیومی و واشرها، رسوب‌زدایی نازل بخار و رفع صدای غیرعادی پمپ اسپرسوساز.",
    "desc_en": "Safe citric acid descaling formulations, boiler flush cycles, steam wand unclogging, and pump vibration dampening.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه اجرایی:</div>\n        <p>سختی آب لوله‌کشی به سرعت مجاری باریک بویلر و نازل بخار اسپرسوساز را مسدود کرده و باعث افت فشار عصاره‌گیری و طعم ترش قهوه می‌شود. با اسید سیتریک طبیعی، دستگاه را بدون خطر رسوب‌زدایی کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>تهیه محلول رسوب‌زدای استاندارد</h4>\n        <p>۲ قاشق غذاخوری پودر اسید سیتریک خوراکی (جوهر لیمو) را در ۱ لیتر آب ولرم کاملاً حل کنید و داخل مخزن آب دستگاه بریزید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>چرخه شستشو و نازل بخار</h4>\n        <p>دستگاه را روشن کنید. نیمی از محلول را از گروپ و نیمی دیگر را از نازل بخار خارج کنید. سپس دستگاه را خاموش کرده و ۲۰ دقیقه استراحت دهید تا رسوبات حل شوند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۳</span>آبکشی نهایی با آب خالص</h4>\n        <p>مخزن را با آب تصفیه شده پر کنید و ۲ بار تمام آب را از هدگروپ و نازل عبور دهید تا طعم ترشی اسید کاملاً برطرف شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Executive Overview:</div>\n        <p>Descaling coffee boilers and steam circuits using food-grade citric acid restores brew pressure, crema quality, and thermal stability.</p>\n      </div>\n    "
  },
  "art_washer_dishwasher_care": {
    "badge_fa": "❄️ لوازم خانگی",
    "badge_en": "❄️ Laundry & Dishwashers",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۳۲۰ مطالعه",
    "views_en": "👁️ 2,320 views",
    "title_fa": "راهنمای سرویس فیلتر، جرم‌گیری، رفع بوی بد و نگهداری لباسشویی و ظرفشویی",
    "title_en": "Washing Machine & Dishwasher Maintenance: Filter Cleaning, Odor Removal & Descaling",
    "desc_fa": "تمیز کردن فیلتر پمپ تخلیه، جرم‌گیری لاستیک دور درب، رفع انسداد بازوهای آبپاش ظرفشویی و ضدعفونی سیستم با سرکه و جوش‌شیرین.",
    "desc_en": "Drain pump strainer cleaning, door gasket mold eradication, spray arm nozzle unblocking, and eco-friendly sanitization.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه راهنما:</div>\n        <p>تجمع پرز، چربی و آب راکد در فیلترها عامل اصلی بوی بد لباس‌ها و تمیز نشدن ظروف است. با سرویس فیلترها و جرم‌گیری دوره‌ای، عمر دستگاه خود را دوبرابر کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>تخلیه و شستشوی فیلتر پمپ لباسشویی</h4>\n        <p>دریچه پایین ماشین لباسشویی را باز کنید. ظرفی زیر آن قرار داده و فیلتر پیچی را باز کنید. پرزها، سکه‌ها و اجسام گیر افتاده را خارج کرده و با فرچه بشویید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>جرم‌گیری لاستیک دور درب و جاپودری</h4>\n        <p>با ترکیب سرکه سفید و مایع شوینده، چین‌های لاستیک دور درب را از قارچ و کپک پاک کنید. کشوی جاپودری را بیرون آورده و شستشو دهید.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Learn routine maintenance: clearing drain pumps, sanitizing door bellows, and unclogging dishwasher spray jets.</p>\n      </div>\n    "
  },
  "art_saws_guide": {
    "badge_fa": "🧰 شنبه ابزار",
    "badge_en": "🧰 Handsaws & Cutting",
    "readTime_fa": "⏱️ ۷ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 7 min read",
    "views_fa": "👁️ ۱,۹۸۰ مطالعه",
    "views_en": "👁️ 1,980 views",
    "title_fa": "اره‌شناسی تخصصی؛ انتخاب تیغه، زاویه برش و تکنیک‌های برش چوب و فلز",
    "title_en": "Handsaw & Blade Mastery: Selecting TPI, Cut Angles, and Wood/Metal Techniques",
    "desc_fa": "تفاوت اره دستی، اره کمانی، اره مویی و اره ژاپنی (Ryoba)، مفهوم TPI و تکنیک‌های برش تمیز بدون پلیسه.",
    "desc_en": "Comparing western vs japanese pull saws, understanding Teeth-Per-Inch (TPI), and tearout-free cutting techniques.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>انتخاب اره نامناسب باعث خستگی مفرط، شکستن تیغه و خراب شدن لبه قطعه کار می‌شود. شاخص TPI (تعداد دندانه در هر اینچ) نوع کاربرد را مشخص می‌کند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>مفهوم شاخص TPI</h4>\n        <p>تعداد دندانه کمتر (۶ تا ۸ TPI) برای برش‌های سریع چوب خام مناسب است؛ دندانه متوسط (۱۰ تا ۱۴ TPI) برای چوب‌های ظریف و دندانه ریز (۱۸ تا ۳۲ TPI) برای برش فلزات و لوله‌های PVC به کار می‌رود.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تکنیک برش با اره ژاپنی (Pull Saw)</h4>\n        <p>برخلاف اره‌های غربی که با فشار رو به جلو می‌برند، اره ژاپنی هنگام کشیدن به سمت خود برش می‌زند که دقت فوق‌العاده بالاتر و خط برش بسیار نازک‌تری به همراه دارد.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Master handsaws by understanding TPI ratings, push vs pull cutting dynamics, and blade tensioning.</p>\n      </div>\n    "
  },
  "art_outlet_switch_install": {
    "badge_fa": "⚡ برق و روشنایی",
    "badge_en": "⚡ Receptacles & Wiring",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۶۷۰ مطالعه",
    "views_en": "👁️ 2,670 views",
    "title_fa": "آموزش گام‌به‌گام تعویض، سیم‌کشی و اضافه کردن کلید و پریز برق خانگی",
    "title_en": "Step-by-Step Receptacle Wiring & Wall Switch Replacement",
    "desc_fa": "سیم‌کشی سیم فاز، نول و ارت، استفاده از فازمتر، بستن صحیح پیچ‌های ترمینال و نصب تراز قوطی کلید روی دیوار.",
    "desc_en": "Safe wiring of Live, Neutral, and Earth conductors, mounting frame alignment, and secure terminal clamping.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه راهنما:</div>\n        <p>تعویض کلید و پریزهای قدیمی یا سوخته علاوه بر زیبایی دکوراسیون، از خطرات جرقه و برق‌گرفتگی جلوگیری می‌کند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>قطع برق و برداشتن قاب کهنه</h4>\n        <p>فیوز مربوطه را قطع کنید. پیچ‌های قاب رویی را باز کرده و با فازمتر نبود برق در هر دو سیم را تایید کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>اتصال سیم‌های فاز، نول و ارت به پریز جدید</h4>\n        <p>سیم فاز (قرمز یا قهوه‌ای) به ترمینال فاز، سیم نول (آبی) به ترمینال نول و سیم ارت (زرد با خط سبز) به ترمینال اتصال به زمین بدنه متصل می‌شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Safely replace wall switches and outlets with proper Phase/Neutral/Earth terminal routing.</p>\n      </div>\n    "
  },
  "art_flush_tank_fix": {
    "badge_fa": "🚰 لوله‌کشی و تاسیسات",
    "badge_en": "🚰 Toilet & Flush Tanks",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۳۵۰ مطالعه",
    "views_en": "👁️ 2,350 views",
    "title_fa": "عیب‌یابی فلوتر، رفع آب‌دادن مداوم و تعمیر فلاش‌تانک و توالت فرنگی",
    "title_en": "Toilet Tank Repair: Fixing Running Toilets, Float Valves & Flapper Seals",
    "desc_fa": "تنظیم شناور آسانسوری، تعویض واشر تخلیه، رفع سرریز آب به کاسه توالت و عیب‌یابی دکمه‌های دوزمانه.",
    "desc_en": "Fixing continuous water run, adjusting vertical fill valves, replacing silicone seal gaskets, and dual-flush tuning.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه راهنما:</div>\n        <p>هدررفت مداوم آب در توالت فرنگی یا فلاش‌تانک ناشی از دو دلیل است: خرابی شناور پرکننده یا فرسایش واشر سیلیکونی تخلیه کف مخزن.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>بررسی واشر آب‌بندی کف مخزن</h4>\n        <p>اگر آب آرام‌آرام وارد کاسه می‌شود، واشر لاستیکی کف را خارج کرده و رسوبات آن را بشویید یا با واشر نو سیلیکونی تعویض کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تنظیم ارتفاع شناور آسانسوری</h4>\n        <p>پیچ تنظیم شناور را بچرخانید تا سطح آب حداقل ۲.۵ سانتی‌متر پایین‌تر از لوله سرریز متوقف شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Stop running toilets by adjusting float shutoff levels and swapping worn flush valve gaskets.</p>\n      </div>\n    "
  },
  "art_drill_tile_concrete": {
    "badge_fa": "🧰 شنبه ابزار",
    "badge_en": "🧰 Drilling & Fasteners",
    "readTime_fa": "⏱️ ۷ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 7 min read",
    "views_fa": "👁️ ۲,۱۴۰ مطالعه",
    "views_en": "👁️ 2,140 views",
    "title_fa": "تکنیک‌های سوراخ‌کاری سرامیک، کاشی، بتن و گچ بدون شکستگی و ترک",
    "title_en": "Drilling into Ceramic Tiles, Concrete, and Drywall Without Cracking",
    "desc_fa": "انتخاب مته سرامیک، چسب کاغذی برای جلوگیری از سُر خوردن، خنک‌کاری مته با آب و تنظیم حالت چکشی دریل.",
    "desc_en": "Spear-head tile bits, masking tape centering, water cooling, and hammer drill speed control.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>سوراخ کردن کاشی و سرامیک نیازمند صبر، مته مخصوص و خاموش کردن حالت چکشی دریل است تا لعاب کاشی نشکند.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>استفاده از چسب کاغذی برای نشانه</h4>\n        <p>یک تکه چسب کاغذی روی نقطه سوراخ‌کاری بچسبانید. این کار مانع از لغزش سر مته روی لعاب صیقلی کاشی می‌شود.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>استفاده از مته نیزه‌ای و دور پایین</h4>\n        <p>حالت چکشی را کاملاً خاموش کنید. با دور آرام دریل شروع به سوراخ کردن لعاب کنید و نوک مته را با آب خنک نگه دارید.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Master tile drilling without cracking by using masking tape guides, carbide spear bits, and water cooling.</p>\n      </div>\n    "
  },
  "art_bicycle_service": {
    "badge_fa": "🚗 خودرو و دوچرخه",
    "badge_en": "🚗 Bicycle Maintenance",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۱,۸۹۰ مطالعه",
    "views_en": "👁️ 1,890 views",
    "title_fa": "سرویس و رگلاژ دنده، ترمزهای لقمه‌ای و دیسکی و روان‌کاری زنجیر دوچرخه",
    "title_en": "Bicycle Overhaul: Derailleur Tuning, Disc/Rim Brake Alignment & Chain Care",
    "desc_fa": "تنظیم پیچ‌های حد L و H شانژمان، رگلاژ سیم ترمز، شستشوی زنجیر با گازوئیل و روغن‌کاری تخصصی تفلون.",
    "desc_en": "Tuning rear derailleurs, setting barrel adjusters, truing brake calipers, and PTFE chain lubrication.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>سرویس ماهیانه دوچرخه، رکاب زدن را بسیار نرم و پرشتاب کرده و مانع از ساییدگی خودرو و طبق‌قامه می‌شود.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>شستشو و روغن‌کاری زنجیر</h4>\n        <p>زنجیر را با فرچه و چربی‌زدا تمیز کنید. پس از خشک شدن، روی هر پین یک قطره روغن مخصوص زنجیر بریزید و روغن اضافه را پاک کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تنظیم دنده‌ها و پیچ‌های H و L</h4>\n        <p>با چرخاندن پیچ بشکه‌ای (Barrel Adjuster) روی دسته دنده، کشش سیم را طوری تنظیم کنید که دنده‌ها بدون صدا و تاخیر تعویض شوند.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Optimize bicycle shifting and braking response with cable tension adjustments and proper chain lubrication.</p>\n      </div>\n    "
  },
  "art_kebab_cooking": {
    "badge_fa": "🍳 آشپزی با پدر",
    "badge_en": "🍳 Persian Grilling",
    "readTime_fa": "⏱️ ۹ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 9 min read",
    "views_fa": "👁️ ۳,۶۲۰ مطالعه",
    "views_en": "👁️ 3,620 views",
    "title_fa": "رازهای طلایی پخت کباب کوبیده و جوجه‌کباب رستورانی بدون ریختن از سیخ",
    "title_en": "Authentic Persian Kebab Secrets: Koobideh & Joojeh Grilling Masterclass",
    "desc_fa": "نسبت گوشت قلوه‌گاه گوسفندی و سردست گوساله، آب‌گیری پیاز، ورز دادن حرفه‌ای، دمای گوشت هنگام به سیخ کشیدن و آتش منقل.",
    "desc_en": "Meat fat ratios, onion straining, cold temperature skewer shaping, and charcoal heat management.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 رازهای طلایی کباب کوبیده اصیل:</div>\n        <p>دلیل ریختن کباب از سیخ، آب پیاز یا گرم بودن مایه گوشت است. با رعایت نسبت چربی و استراحت در یخچال، کبابی آبدار و حرفه‌ای بپزید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>نسبت طلایی گوشت و پیاز</h4>\n        <p>۵۰٪ قلوه‌گاه گوسفند و ۵۰٪ سردست گوساله را ۳ بار چرخ کنید. پیاز را رنده کرده و آب آن را کاملاً با دست یا پارچه بگیرید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>ورز دادن و استراحت گوشت در سرما</h4>\n        <p>گوشت را ۱۰ دقیقه ورز دهید تا بافت چسبنده پیدا کند. مایه گوشت باید حداقل ۲ ساعت در یخچال کاملاً سرد شود قبل از به سیخ کشیدن.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Master authentic Persian Koobideh kebab: meat selection, chilled skewer shaping, and open-flame grilling.</p>\n      </div>\n    "
  },
  "art_setar_mindfulness": {
    "badge_fa": "🎵 نوای سه‌تار",
    "badge_en": "🎵 Persian Setar",
    "readTime_fa": "⏱️ ۶ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 6 min read",
    "views_fa": "👁️ ۱,۶۵۰ مطالعه",
    "views_en": "👁️ 1,650 views",
    "title_fa": "آشنایی با ساختار سه‌تار، مضراب‌نوازی و تاثیر موسیقی ایرانی بر آرامش ذهن",
    "title_en": "The Soul of Persian Setar: Structure, Fingering Techniques & Mindfulness",
    "desc_fa": "آشنایی با کاسه چوب توت، سیم‌های چهارگانه، پرده‌های روده و شیوه مضراب‌زدن با انگشت سبابه برای کسب آرامش درونی.",
    "desc_en": "Mulberry wood acoustics, four strings, gut frets, and index finger picking for deep mindfulness and meditation.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 نوای دلنشین اصالت:</div>\n        <p>سه‌تار، ساز خلوت و آرامش است. پس از یک روز پرمشغله فنی، نواختن چند گوشه از آواز دشتی یا دستگاه شور روح انسان را جلا می‌دهد.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>ساختار شناسی سه‌تار</h4>\n        <p>کاسه طنینی از چوب توت، صفحه نازک رویی، دسته گردو و ۴ سیم فلزی که سیم چهارم (سیم مشتاق) صدای زنگ‌دار خاصی به آن می‌بخشد.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Explore the spiritual acoustics of the traditional Iranian Setar and its calming meditative resonance.</p>\n      </div>\n    "
  },
  "art_insulation_energy": {
    "badge_fa": "❄️ بهینه‌سازی انرژی",
    "badge_en": "❄️ Thermal Insulation",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۲۳۰ مطالعه",
    "views_en": "👁️ 2,230 views",
    "title_fa": "راهنمای عایق‌بندی پنجره‌ها، درب‌ها و لوله‌ها جهت کاهش ۴۰ درصدی هدررفت انرژی",
    "title_en": "Home Weatherization: Door Seals, Window Insulation & Pipe Thermal Protection",
    "desc_fa": "نصب نوارهای درزگیر فومی و لاستیکی، درزگیری زیر درب با جاروبک، عایق الاستومری لوله‌های آب گرم و پکیج.",
    "desc_en": "Weatherstripping windows, door sweeps, elastomeric pipe lagging, and eliminating cold air drafts.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه راهنما:</div>\n        <p>بیش از ۴۰ درصد انرژی حرارتی و برودتی منزل از طریق درز پنجره‌ها و زیر درب‌ها هدر می‌رود. عایق‌کاری اصولی خانه را در زمستان گرم و در تابستان خنک نگه می‌دارد.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>درزگیری دور پنجره‌ها</h4>\n        <p>استفاده از نوارهای درزگیر لاستیکی EPDM شیاردار در لنگه پنجره‌ها، مانع ورود سوز سرما و خاک به داخل خانه می‌شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Cut utility heating and cooling costs by up to 40% with smart door and window thermal sealing.</p>\n      </div>\n    "
  },
  "art_silicone_caulk": {
    "badge_fa": "🚰 لوله‌کشی و تاسیسات",
    "badge_en": "🚰 Caulking & Sealing",
    "readTime_fa": "⏱️ ۷ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 7 min read",
    "views_fa": "👁️ ۲,۱۱۰ مطالعه",
    "views_en": "👁️ 2,110 views",
    "title_fa": "هنر درزگیری و چسب‌کاری حرفه‌ای سیلیکونی دور سینک، توالت فرنگی و حمام",
    "title_en": "Pro Caulking Masterclass: Silicone Sealing Around Sinks, Tubs & Vanities",
    "desc_fa": "برش نوک لوله چسب در زاویه ۴۵ درجه، تکنیک چسب کاغذی برای خط‌کشی صاف، صاف کردن با مایع ظرفشویی و ضدقارچ بودن چسب.",
    "desc_en": "45-degree nozzle trimming, masking tape straight edges, soapy water finger smoothing, and anti-mildew silicones.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>یک درزگیری تمیز و صیقلی علاوه بر جلوگیری از نفوذ آب و پوسیدگی کابینت، ظاهر فوق‌العاده شیک و نویی به حمام و آشپزخانه می‌دهد.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>تمیزکاری کامل چسب‌های کهنه</h4>\n        <p>با کاتر چسب‌های قدیمی و سیاه شده را کاملاً جدا کرده و محل را با الکل یا استون خشک و چربی‌زدایی کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>استفاده از چسب کاغذی و صابون مایع</h4>\n        <p>در دو طرف درز چسب کاغذی بچسبانید. چسب سیلیکون را تزریق کنید، انگشت خود را به کف صابون آغشته کرده و با یک حرکت ملایم درز را صیقلی کنید.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Achieve flawless, mold-resistant silicone caulk beads around kitchen sinks and shower trays.</p>\n      </div>\n    "
  },
  "art_multimeter_basics": {
    "badge_fa": "⚡ برق و ابزار",
    "badge_en": "⚡ Multimeter Testing",
    "readTime_fa": "⏱️ ۸ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 8 min read",
    "views_fa": "👁️ ۲,۴۸۰ مطالعه",
    "views_en": "👁️ 2,480 views",
    "title_fa": "آموزش کار با مولتی‌متر دیجیتال؛ تست ولتاژ، اهم، اتصال کوتاه و سلامت خازن",
    "title_en": "Digital Multimeter Demystified: Voltage, Continuity, Resistance & Capacitor Tests",
    "desc_fa": "نحوه تنظیم سلکتور ولتاژ AC/DC، تست بوق (Continuity) برای یافتن قطعی سیم، تست مقاومت و خازن استارت موتورها.",
    "desc_en": "Setting AC/DC voltage modes, continuity buzzer for broken wire diagnostics, and testing motor run capacitors.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه راهنما:</div>\n        <p>مولتی‌متر چشم یک برق‌کار و فرد فنی است. با یادگیری ۴ قابلیت اصلی آن، تمام عیب‌یابی‌های برقی وسایل خانه را در چند ثانیه انجام دهید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>تست پیوستگی و بوق (Continuity Test)</h4>\n        <p>سلکتور را روی علامت دیود/بوق قرار دهید. در صورت اتصال سیم سالم صدای بیپ شنیده می‌شود که برای یافتن قطعی کابل‌ها عالی است.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>تست ولتاژ برق متناوب (AC Voltage)</h4>\n        <p>سلکتور را روی V~ و عدد بالای ۲۲۰ (مثلاً ۶۰۰ ولت) تنظیم کنید تا ولتاژ واقعی برق پریزهای منزل را اندازه‌گیری کنید.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Learn how to safely operate a digital multimeter for voltage verification, wire continuity, and resistance checks.</p>\n      </div>\n    "
  },
  "art_lock_cylinder_replacement": {
    "badge_fa": "🚪 درب و ساختمان",
    "badge_en": "🚪 Door Locksmithing",
    "readTime_fa": "⏱️ ۷ دقیقه مطالعه تخصصی",
    "readTime_en": "⏱️ 7 min read",
    "views_fa": "👁️ ۲,۰۵۰ مطالعه",
    "views_en": "👁️ 2,050 views",
    "title_fa": "آموزش تعویض توپی (مغزی) قفل درب ضدسرقت و چوبی بدون آسیب به ساختار",
    "title_en": "Replacing Euro Profile Lock Cylinders on Security & Wooden Doors",
    "desc_fa": "باز کردن پیچ بلند مهارکننده مغزی، زاویه چرخاندن کلید برای خروج بادامک، اندازه‌گیری سایز مغزی (۷، ۸ و ۹ سانتی‌متر).",
    "desc_en": "Removing faceplate retaining bolt, cam alignment key rotation, and measuring cylinder offsets.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 خلاصه کاربردی:</div>\n        <p>اگر کلید در قفل گیر می‌کند یا خانه جدیدی خریده‌اید، تعویض مغزی قفل درب کمتر از ۵ دقیقه با یک پیچ‌گوشتی انجام می‌شود.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۱</span>باز کردن پیچ مهار مغزی روی پیشانی درب</h4>\n        <p>درب را باز کنید. روی لبه فلزی درب، پیچ تکی هم‌راستا با پایین سیلندر را باز کنید.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4><span class=\"article-step-badge\">۲</span>چرخاندن ملایم کلید و خارج کردن سیلندر</h4>\n        <p>کلید را داخل قفل کرده و حدود ۲۰ درجه بچرخانید تا زبانه مشکی داخلی هم‌راستا شود و به راحتی با دست بیرون کشیده شود.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Overview:</div>\n        <p>Swap out door lock cylinders in 5 minutes with basic screwdrivers and key alignment tricks.</p>\n      </div>\n    "
  },
  "art_appliance_troubleshoot_table": {
    "badge_fa": "❄️ لوازم خانگی",
    "badge_en": "❄️ Troubleshooting Tables",
    "readTime_fa": "⏱️ ۱۱ دقیقه مطالعه جامع",
    "readTime_en": "⏱️ 11 min read",
    "views_fa": "👁️ ۳,۸۲۰ مطالعه",
    "views_en": "👁️ 3,820 views",
    "title_fa": "دانشنامه جامع جداول خطایابی، عیب‌یابی سریع و رفع خرابی لوازم خانگی",
    "title_en": "Comprehensive Home Appliance Troubleshooting Encyclopedia & Diagnostic Tables",
    "desc_fa": "جدول جامع نشانه‌ها، دلایل احتمالی و راه‌حل‌های فوری برای یخچال، لباسشویی، ظرفشویی، جاروبرقی، پکیج و کولر آبی.",
    "desc_en": "Exhaustive symptom-cause-remedy matrix for refrigerators, washers, dishwashers, vacuums, boilers, and coolers.",
    "content_fa": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 جدول اورژانسی عیب‌یابی در منزل:</div>\n        <p>قبل از تماس با تعمیرکاران، این جدول را بررسی کنید؛ در ۸۰٪ موارد مشکل با یک تمیزکاری ساده یا ریست کردن رفع می‌شود.</p>\n      </div>\n      <h3>📊 ماتریس عیب‌یابی سریع لوازم خانگی</h3>\n      <div class=\"article-step-card\">\n        <h4>۱. یخچال فریزر خوب خنک نمی‌کند</h4>\n        <p><b>علت:</b> کثیف بودن کندانسور پشت یخچال، خرابی فن یا خرابی لاستیک درب.<br><b>راه‌حل:</b> جاروبرقی کشیدن لوله‌های رادیاتور پشت و تست چفت بودن آهنربای لاستیک درب با یک اسکناس.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4>۲. لباسشویی آب را تخلیه نمی‌کند</h4>\n        <p><b>علت:</b> مسدود شدن فیلتر پمپ تخلیه با پرز یا پیچ خوردگی شیلنگ خروجی.<br><b>راه‌حل:</b> باز کردن فیلتر پایین و تخلیه اجسام خارجی.</p>\n      </div>\n      <div class=\"article-step-card\">\n        <h4>۳. پکیج ارور افت فشار می‌دهد</h4>\n        <p><b>علت:</b> افت فشار بار مدار زیر ۱ بار.<br><b>راه‌حل:</b> باز کردن شیر پرکن مشکی یا آبی‌رنگ زیر پکیج تا رسیدن عقربه به ۱.۵ بار.</p>\n      </div>\n    ",
    "content_en": "\n      <div class=\"article-summary-box\">\n        <div class=\"article-summary-title\">📌 Diagnostic Matrix:</div>\n        <p>Quick reference guide for common refrigerator, washer, dishwasher, and boiler malfunctions.</p>\n      </div>\n    "
  }
};

// =============================================================================
// LUXURY MAGAZINE READER ENGINE (WITH PAGINATION, PROGRESS & KEYBOARD NAV)
// =============================================================================

const articleKeysList = [
  'art_package_radiator',
  'art_winterizing_cooler',
  'art_gas_safety_heating',
  'art_autumn_car_maintenance',
  'art_study_desk_lighting',
  'art_student_tech_safety',
  'art_cooler_tuneup',
  'art_faucet_repair',
  'art_electrical_safety',
  'art_hinge_wood',
  'art_essential_tools',
  'art_auto_maintenance',
  'art_water_pump',
  'art_espresso_package_descaling',
  'art_washer_dishwasher_care',
  'art_saws_guide',
  'art_outlet_switch_install',
  'art_flush_tank_fix',
  'art_drill_tile_concrete',
  'art_bicycle_service',
  'art_kebab_cooking',
  'art_setar_mindfulness',
  'art_insulation_energy',
  'art_silicone_caulk',
  'art_multimeter_basics',
  'art_lock_cylinder_replacement',
  'art_appliance_troubleshoot_table'
];

let currentArticleIndex = 0;

function openArticleModal(articleKey) {
  const index = articleKeysList.indexOf(articleKey);
  if (index !== -1) currentArticleIndex = index;
  renderCurrentArticle();

  const modal = document.getElementById('articleLightbox');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const scrollContainer = document.getElementById('artBodyScrollContainer');
    if (scrollContainer) scrollContainer.scrollTop = 0;
    updateArticleReadingProgress();
  }
}

function renderCurrentArticle() {
  const articleKey = articleKeysList[currentArticleIndex];
  const art = magazineArticles[articleKey];
  if (!art) return;

  const isEn = document.documentElement.lang === 'en';

  const badge = document.getElementById('artModalBadge');
  const readTime = document.getElementById('artModalReadTime');
  const title = document.getElementById('artModalTitle');
  const content = document.getElementById('artModalContent');
  const authorEl = document.getElementById('artModalAuthor');
  const dateEl = document.getElementById('artModalDate');
  const viewsEl = document.getElementById('artModalViews');
  const shareBtn = document.getElementById('artModalShareBtn');
  const prevBtn = document.getElementById('artPrevBtn');
  const nextBtn = document.getElementById('artNextBtn');

  if (badge) badge.textContent = isEn ? art.badge_en : art.badge_fa;
  if (readTime) readTime.textContent = isEn ? art.readTime_en : art.readTime_fa;
  if (title) title.textContent = isEn ? art.title_en : art.title_fa;
  if (content) content.innerHTML = isEn ? (art.content_en || art.content_fa) : (art.content_fa || art.content_en);
  if (authorEl) authorEl.textContent = isEn ? '✍️ SkillDad Engineering Team' : '✍️ تحریریه فنی اسکیل‌دد';
  if (dateEl) dateEl.textContent = isEn ? '📅 Updated: 2026' : '📅 به‌روزرسانی: ۲۰۲۶';
  if (viewsEl) viewsEl.textContent = isEn ? (art.views_en || '👁️ 1,520 views') : (art.views_fa || '👁️ ۱,۵۲۰ مطالعه');

  if (shareBtn) shareBtn.innerHTML = isEn ? '📲 Share Guide' : '📲 اشتراک این راهنما با دوستان';
  if (prevBtn) {
    prevBtn.innerHTML = isEn ? '← Previous' : '← مقاله قبلی';
    prevBtn.disabled = currentArticleIndex === 0;
    prevBtn.style.opacity = currentArticleIndex === 0 ? '0.4' : '1';
  }
  if (nextBtn) {
    nextBtn.innerHTML = isEn ? 'Next →' : 'مقاله بعدی →';
    nextBtn.disabled = currentArticleIndex === articleKeysList.length - 1;
    nextBtn.style.opacity = currentArticleIndex === articleKeysList.length - 1 ? '0.4' : '1';
  }
}

function navigateArticle(direction) {
  const newIndex = currentArticleIndex + direction;
  if (newIndex >= 0 && newIndex < articleKeysList.length) {
    currentArticleIndex = newIndex;
    renderCurrentArticle();
    const scrollContainer = document.getElementById('artBodyScrollContainer');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
    updateArticleReadingProgress();
  }
}

function updateArticleReadingProgress() {
  const container = document.getElementById('artBodyScrollContainer');
  const progressBar = document.getElementById('artReadingProgress');
  if (!container || !progressBar) return;
  const scrollTop = container.scrollTop;
  const scrollHeight = container.scrollHeight - container.clientHeight;
  const progressPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  progressBar.style.width = Math.min(100, Math.max(0, progressPercent)) + '%';
}

function closeArticleModal() {
  const modal = document.getElementById('articleLightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function shareCurrentArticle() {
  const articleKey = articleKeysList[currentArticleIndex];
  const art = magazineArticles[articleKey];
  const isEn = document.documentElement.lang === 'en';
  const url = 'https://skilldad.ir/#magazine';
  const title = isEn ? (art ? art.title_en : 'SkillDad DIY Guide') : (art ? art.title_fa : 'آموزش تخصصی اسکیل‌دد');

  if (navigator.share) {
    navigator.share({ title: title, url: url }).catch(() => {});
  } else {
    navigator.clipboard.writeText(url);
    alert(isEn ? 'Guide link copied to clipboard!' : 'لینک مقاله در حافظه کپی شد!');
  }
}



window.openArticleModal = function(artKey) {
  const art = magazineArticles[artKey];
  if (!art) return;

  currentArticleKey = artKey;
  const isEn = document.documentElement.lang === 'en';

  const modal = document.getElementById('articleLightbox');
  const badgeEl = document.getElementById('artModalBadge');
  const readTimeEl = document.getElementById('artModalReadTime');
  const titleEl = document.getElementById('artModalTitle');
  const contentEl = document.getElementById('artModalContent');

  if (badgeEl) badgeEl.textContent = isEn ? art.badge_en : art.badge_fa;
  if (readTimeEl) readTimeEl.textContent = isEn ? art.readTime_en : art.readTime_fa;
  if (titleEl) titleEl.textContent = isEn ? art.title_en : art.title_fa;
  if (contentEl) contentEl.innerHTML = isEn ? art.content_en : art.content_fa;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeArticleModal = function() {
  const modal = document.getElementById('articleLightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
};

window.shareCurrentArticle = function() {
  const art = magazineArticles[currentArticleKey];
  const isEn = document.documentElement.lang === 'en';
  const title = art ? (isEn ? art.title_en : art.title_fa) : 'مجله اسکیل‌دد';
  const url = window.location.origin + window.location.pathname + '#magazine';

  if (navigator.share) {
    navigator.share({
      title: title,
      text: (isEn ? 'Read this DIY guide on SkillDad: ' : 'این راهنمای کاربردی را در مجله اسکیل‌دد بخوانید: ') + title,
      url: url
    }).catch(() => {});
  } else {
    try {
      navigator.clipboard.writeText(url);
      alert(isEn ? '🔗 Article link copied to clipboard!' : '🔗 لینک مقاله در کلیپ‌بورد کپی شد! می‌توانید برای دوستانتان بفرستید.');
    } catch(e) {
      alert(url);
    }
  }
};

function initMagazine() {
  const tabs = document.querySelectorAll('.mag-tab');
  const cards = document.querySelectorAll('.magazine-card');

  if (!cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const cat = tab.getAttribute('data-mag-cat') || 'all';

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat') || '';
        const cats = cardCat.split(/\s+/);
        if (cat === 'all' || cardCat === cat || cats.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal click outside to close
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('articleLightbox');
    if (modal && e.target === modal) {
      closeArticleModal();
    }
  });
}


// 11. LIVE APARAT VIDEO PUBLISHER ENGINE (Auto-fetches newly uploaded videos)
function initLiveAparatVideoEngine() {
  const container = document.getElementById('videosGrid');
  if (!container) return;

  fetch('https://www.aparat.com/etc/api/videoByUser/username/skilldads/perpage/100')
    .then(res => res.json())
    .then(data => {
      const videos = data.videobyuser;
      if (!Array.isArray(videos) || videos.length === 0) return;

      // Check existing UIDs in DOM
      const existingUids = new Set();
      document.querySelectorAll('.video-card[data-uid]').forEach(card => {
        existingUids.add(card.getAttribute('data-uid'));
      });

      function categorize(title) {
        const t = (title || '').toLowerCase();
        if (t.includes('برق') || t.includes('پریز') || t.includes('کلید') || t.includes('آیفون') || t.includes('فازمتر') || t.includes('سیم') || t.includes('گاز') || t.includes('فندک')) return { cat: 'electrical', label: 'برق و گاز' };
        if (t.includes('آب') || t.includes('شیر') || t.includes('پمپ') || t.includes('فشار') || t.includes('کارتریج') || t.includes('دوش') || t.includes('لوله') || t.includes('شناور') || t.includes('چکه') || t.includes('سیفون') || t.includes('حوله')) return { cat: 'plumbing', label: 'لوله‌کشی و پمپ' };
        if (t.includes('کولر') || t.includes('تسمه') || t.includes('یخچال') || t.includes('لباسشویی') || t.includes('ظرفشویی') || t.includes('پکیج') || t.includes('بخاری') || t.includes('اسپرسو') || t.includes('قهوه') || t.includes('پلوپز') || t.includes('جاروبرقی') || t.includes('اتو')) return { cat: 'appliances', label: 'لوازم خانگی' };
        if (t.includes('درب') || t.includes('در') || t.includes('کمد') || t.includes('کابینت') || t.includes('لولا') || t.includes('قفل') || t.includes('دیوار') || t.includes('ریل') || t.includes('کشو') || t.includes('سرامیک') || t.includes('ایزوگام') || t.includes('پنجره') || t.includes('دستگیره')) return { cat: 'home', label: 'درب، کمد و ساختمان' };
        if (t.includes('ابزار') || t.includes('آچار') || t.includes('پیچ') || t.includes('انبر') || t.includes('دریل') || t.includes('شنبه') || t.includes('اره') || t.includes('متر') || t.includes('کاتر') || t.includes('تراز') || t.includes('چکش')) return { cat: 'tools', label: 'ابزار و ترفند' };
        if (t.includes('کباب') || t.includes('آشپزی') || t.includes('غذا') || t.includes('گوشت') || t.includes('سه‌تار') || t.includes('سه تار') || t.includes('موسیقی') || t.includes('مضراب') || t.includes('ساز') || t.includes('مرغ') || t.includes('شتر') || t.includes('جوجه') || t.includes('برنج')) return { cat: 'lifestyle', label: 'آشپزی و سه‌تار' };
        return { cat: 'tools', label: 'آموزش کاربردی' };
      }

      function formatDuration(sec) {
        if (!sec || isNaN(sec)) return '05:00';
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
      }

      // Prepend any brand new video not yet in static HTML
      videos.forEach(v => {
        if (!existingUids.has(v.uid)) {
          const { cat, label } = categorize(v.title);
          let poster = (v.big_poster || v.small_poster || 'assets/img/profile.jpg').replace('static.cdn.asset.aparat.com', 'static.cdn.asset.aparat.cloud');
          const dur = formatDuration(v.duration);
          const url = `https://www.aparat.com/v/${v.uid}`;

          const card = document.createElement('div');
          card.className = 'video-card';
          card.setAttribute('data-cat', cat);
          card.setAttribute('data-uid', v.uid);
          card.onclick = () => window.open(url, '_blank');

          card.innerHTML = `
            <div class="video-thumb">
              <img src="${poster}" alt="${(v.title || '').replace(/"/g, '&quot;')}" loading="lazy" referrerpolicy="no-referrer">
              <span class="vid-cat">${label}</span>
              <span class="vid-duration">${dur}</span>
              <div class="play-circle">▶</div>
            </div>
            <div class="video-body">
              <h4 class="vid-title">${v.title}</h4>
              <div class="vid-footer">
                <span>کانال SkillDad</span>
                <a href="${url}" target="_blank" rel="noopener" style="color: var(--amber-primary); font-weight: bold; text-decoration: none;" onclick="event.stopPropagation();">تماشا در آپارات ←</a>
              </div>
            </div>
          `;

          container.insertBefore(card, container.firstChild);
          existingUids.add(v.uid);
        }
      });
    })
    .catch(() => {});
}




// =============================================================================
// PDF GENERATOR & PRINT ENGINE FOR SKILLDAD GUIDES
// =============================================================================
function printCurrentArticlePdf() {
  const articleKey = articleKeysList[currentArticleIndex];
  const art = magazineArticles[articleKey];
  if (!art) {
    window.print();
    return;
  }

  const isEn = document.documentElement.lang === 'en';
  const title = isEn ? art.title_en : art.title_fa;
  const badge = isEn ? art.badge_en : art.badge_fa;
  const readTime = isEn ? art.readTime_en : art.readTime_fa;
  const content = isEn ? (art.content_en || art.content_fa) : (art.content_fa || art.content_en);
  const author = isEn ? 'SkillDad Engineering Team' : 'تحریریه فنی اسکیل‌دد';
  const date = isEn ? 'Updated: 2026' : 'به‌روزرسانی: ۱۴۰۵';

  const printWindow = window.open('', '_blank', 'width=900,height=800');
  if (!printWindow) {
    // If popup blocked, fallback to in-page window.print()
    window.print();
    return;
  }

  const printDoc = `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'fa'}" dir="${isEn ? 'ltr' : 'rtl'}">
<head>
  <meta charset="UTF-8">
  <title>${title} | SkillDad.ir PDF</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, Tahoma, sans-serif;
      line-height: 2;
      color: #0f172a;
      background: #ffffff;
      padding: 30px;
      max-width: 850px;
      margin: 0 auto;
    }
    .pdf-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 3px solid #0d9488;
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .pdf-logo {
      font-size: 1.4rem;
      font-weight: 900;
      color: #0d9488;
    }
    .pdf-tagline {
      font-size: 0.85rem;
      color: #64748b;
    }
    .pdf-meta {
      display: flex;
      gap: 16px;
      font-size: 0.85rem;
      color: #475569;
      background: #f8fafc;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 1.6rem;
      font-weight: 900;
      color: #0f172a;
      line-height: 1.5;
      margin-bottom: 12px;
    }
    h3, h4 {
      color: #0d9488;
      margin-top: 24px;
      margin-bottom: 10px;
      font-weight: 800;
      border-right: 4px solid #0d9488;
      padding-right: 10px;
    }
    p, li {
      color: #1e293b;
      font-size: 1rem;
      text-align: justify;
    }
    .article-summary-box {
      background: #f0fdf4;
      border: 1px solid #86efac;
      border-radius: 8px;
      padding: 14px 18px;
      margin: 16px 0;
    }
    .article-step-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 16px 18px;
      margin: 16px 0;
      page-break-inside: avoid;
    }
    .article-step-badge {
      display: inline-block;
      background: #0d9488;
      color: #ffffff;
      font-weight: 800;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      text-align: center;
      line-height: 26px;
      margin-left: 6px;
    }
    .article-box-tip {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-right: 4px solid #d97706;
      border-radius: 8px;
      padding: 12px 16px;
      margin: 16px 0;
      color: #78350f;
      page-break-inside: avoid;
    }
    .article-box-warning {
      background: #fef2f2;
      border: 1px solid #fecaca;
      border-right: 4px solid #ef4444;
      border-radius: 8px;
      padding: 12px 16px;
      margin: 16px 0;
      color: #7f1d1d;
      page-break-inside: avoid;
    }
    .pdf-footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 2px dashed #cbd5e1;
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      color: #64748b;
    }
    @media print {
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="pdf-header">
    <div>
      <div class="pdf-logo">SkillDad.ir | اسکیل‌دد</div>
      <div class="pdf-tagline">${isEn ? 'Dad, How Do I Fix This? - Official DIY Masterclass' : 'بابا اینو چطور درست کنم؟ - مرجع خودکفایی و آموزش کارهای فنی خانه'}</div>
    </div>
    <div style="text-align: left; font-size: 0.8rem; color: #64748b;">
      <div>🌐 https://skilldad.ir</div>
      <div>📺 YouTube & Aparat: @SkillDads</div>
    </div>
  </div>

  <h1>${title}</h1>

  <div class="pdf-meta">
    <span>🏷️ ${badge}</span>
    <span>${readTime}</span>
    <span>✍️ ${author}</span>
    <span>📅 ${date}</span>
  </div>

  <div class="pdf-body">
    ${content}
  </div>

  <div class="pdf-footer">
    <span>© ۱۴۰۵ اسکیل‌دد (SkillDad.ir) - تمامی حقوق محفوظ است.</span>
    <span>دانلود شده از وب‌سایت جامع آموزش‌های خودکفایی اسکیل‌دد</span>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>`;

  printWindow.document.open();
  printWindow.document.write(printDoc);
  printWindow.document.close();
}

window.printCurrentArticlePdf = printCurrentArticlePdf;


// =============================================================================
// 12. SKILLDAD TECHNICAL GLOSSARY ENGINE
// =============================================================================
const masterGlossaryDatabase = [{"term":"یاتاقان کولر آبی (Pillow Block Bearing)","cat":"cooling","desc":"قطعه مهارکننده شفت پروانه کولر که دارای بوش برنجی یا بلبرینگی و نمد ذخیره روغن است. خشک کار کردن آن باعث سوت کشیدن، لرزش و قفل شدن توربین می‌شود.","letter":"ی"},{"term":"پمپ آب کولر (Evaporative Water Pump)","cat":"cooling","desc":"پمپ گریز از مرکز ضدآب مستغرق در تشتک که آب را به ناودان‌های توزیع بالای درب‌ها پمپاژ می‌کند. سوختن خازن یا رسوب پروانه علت شایع از کار افتادن آن است.","letter":"پ"},{"term":"تسمه کولر آبی (V-Belt)","cat":"cooling","desc":"تسمه لاستیکی با مقطع V شکل (سایزهای A40 تا A70) برای انتقال گشتاور از پولی دینام به پولی پروانه. شل بودن آن باعث افت سرعت باد و سفت بودن آن موجب سوختن دینام می‌شود.","letter":"ت"},{"term":"فلوتر یا شناور کولر (Float Valve)","cat":"cooling","desc":"شیر مکانیکی قطع و وصل جریان آب ورودی به تشتک بر اساس سطح آب با استفاده از گوی توخالی پلاستیکی برای جلوگیری از سرریز آب.","letter":"ف"},{"term":"پولی یا فولی کولر (Pulley / Sheave)","cat":"cooling","desc":"قرقره آلومینیومی شیاردار نصب‌شده روی شفت موتور و شفت توربین برای تنظیم نسبت انتقال دور و سرعت چرخش پروانه.","letter":"پ"},{"term":"پد سلولزی (Rigid Cellulose Media)","cat":"cooling","desc":"صفحات موج‌دار فشرده کاغذی با رزین ضدرسوب جایگزین پوشال چوبی با راندمان خنک‌کنندگی ۴۰٪ بیشتر و بدون تغییر فرم و ایجاد گردوغبار.","letter":"پ"},{"term":"کلید کولر ۳ پل و ۴ پل (Cooler Switch)","cat":"cooling","desc":"کلید کنترل وضعیت شامل دکمه پمپ، دور کند و دور تند موتور، و در مدل‌های ۴ پل دکمه قطع دوقطب فاز و نول جهت ایمنی کامل.","letter":"ک"},{"term":"دینام کولر دو دور (Split-Phase Cooler Motor)","cat":"cooling","desc":"الکتروموتور تک‌فاز آسنکرون با دو سیم‌پیچ مجزای دور تند (۱۴۵۰ دور) و دور کند (۹۵۰ دور) و کلید گریز از مرکز (سانتریفیوژ).","letter":"د"},{"term":"خازن راه‌انداز موتور (Start Capacitor)","cat":"cooling","desc":"خازن الکترولیتی موقت برای ایجاد اختلاف فاز اولیه و راه‌اندازی سیم‌پیچ کمکی موتور تحت بار سنگین.","letter":"خ"},{"term":"مبدل حرارتی پکیج (Heat Exchanger)","cat":"cooling","desc":"بلوک لوله‌های مسی یا استیل که گرمای شعله مشعل را به آب مدار گرمایش رادیاتور و آب گرم مصرفی منتقل می‌کند.","letter":"م"},{"term":"منبع انبساط پکیج (Expansion Vessel)","cat":"cooling","desc":"مخزن فلزی دارای دیافراگم لاستیکی حاوی گاز نیتروژن برای مهار افزایش حجم آب مدار گرمایش در اثر افزایش دما.","letter":"م"},{"term":"سنسور NTC پکیج (Negative Temperature Sensor)","cat":"cooling","desc":"ترمیستور حساس به دما که با افزایش دمای آب مقاومتش کاهش یافته و سیگنال دما را به برد الکترونیکی ارسال می‌کند.","letter":"س"},{"term":"شیر اطمینان ۳ بار (3-Bar Safety Valve)","cat":"cooling","desc":"شیر فنری محافظ مدار هیدرولیک پکیج که در صورت بالا رفتن فشار آب به بیش از ۳ بار باز شده و مانع ترکیدن لوله‌ها می‌شود.","letter":"ش"},{"term":"ترموکوپل گاز (Thermocouple)","cat":"cooling","desc":"سنسور حرارتی بر پایه اثر ترموالکتریک که با داغ ماندن نوک آن جریان میلی‌ولتی تولید کرده و بوبین شیر گاز را باز نگه می‌دارد.","letter":"ت"},{"term":"کارتریج سرامیکی شیر اهرمی (Ceramic Disc Cartridge)","cat":"plumbing","desc":"مغزی استوانه‌ای شیرآلات اهرمی با دو دیسک صیقلی سرامیک آلومینا برای قطع و وصل و تنظیم نسبت آب سرد و گرم در سایزهای ۳۵ و ۴۰ میلی‌متر.","letter":"ک"},{"term":"شیر پیسوار (Angle Stop Valve)","cat":"plumbing","desc":"شیر زاویه‌ای کوچک زیر سینک، روشویی و فلاش‌تانک با فیلتر توری برنجی برای قطع محلی آب هنگام تعمیرات بدون قطع آب کل واحد.","letter":"ش"},{"term":"پرلاتور یا آبفشان سرشیر (Faucet Aerator)","cat":"plumbing","desc":"مجموعه توری‌های استیل و پلاستیکی خروجی شیر برای ترکیب ۵۰٪ هوا با آب جهت افزایش فشار ظاهری و صرفه‌جویی ۴۰٪ در مصرف آب.","letter":"پ"},{"term":"کلید اتوماتیک پمپ (Pressure Switch)","cat":"plumbing","desc":"سوئیچ مکانیکی دارای دو فنر تنظیمی برای روشن کردن پمپ در افت فشار و خاموش کردن در رسیدن به فشار ماکزیمم.","letter":"ک"},{"term":"ست کنترل دیجیتال (Electronic Pump Controller)","cat":"plumbing","desc":"کیت الکترونیکی شامل سنسور جریان (Flow Sensor) و سنسور فشار برای راه‌اندازی خودکار پمپ و قطع در زمان بی‌آبی (Dry Run Protection).","letter":"س"},{"term":"شیر خودکار یکطرفه (Check Valve)","cat":"plumbing","desc":"شیر سوپاپی فنری که تنها اجازه عبور آب در یک جهت را می‌دهد و مانع برگشت آب پرفشار به سمت شبکه شهری یا چاه می‌شود.","letter":"ش"},{"term":"تیوپ منبع تحت فشار (Pressure Tank Bladder)","cat":"plumbing","desc":"کیسه لاستیکی بهداشتی EPDM داخل مخزن پمپ که آب را از هوای فشرده جدا نگه داشته و مانع ضربه قوچ و روشن‌خاموش مکرر پمپ می‌شود.","letter":"ت"},{"term":"نوار تفلون آب‌بندی (PTFE Thread Seal Tape)","cat":"plumbing","desc":"نوار پلیمری نازک پلی‌تترافلوئورواتیلن پیچیده شده در جهت عقربه‌های ساعت روی رزوه‌های نرینگی لوله برای جلوگیری از نشتی.","letter":"ن"},{"term":"سیفون ظرفشویی و روشویی (Sink Trap / P-Trap)","cat":"plumbing","desc":"مجموعه لوله‌های گلویی U یا S شکل که با نگه داشتن مقداری آب تله، مانع از ورود گازهای سمی فاضلاب و بوی بد به فضای خانه می‌شود.","letter":"س"},{"term":"شیر فشار شکن (Pressure Reducing Valve)","cat":"plumbing","desc":"شیر دیافراگمی ورودی ساختمان برای تعدیل فشار بالای شبکه شهری و محافظت از اتصالات و پکیج در برابر ترکیدگی.","letter":"ش"},{"term":"کلید مینیاتوری MCB (Miniature Circuit Breaker)","cat":"electrical","desc":"کلید حفاظتی الکترومکانیکی برای قطع خودکار جریان در زمان اتصال کوتاه و اضافه بار بر اساس آمپراژ مشخص (B10, B16, C25).","letter":"ک"},{"term":"کلید محافظ جان RCD / RCCB (Residual Current Device)","cat":"electrical","desc":"کلید فوق حساس تفاضلی که با مقایسه جریان رفت و برگشت (فاز و نول)، نشتی جریان بالای ۳۰ میلی‌آمپر را در ۲۵ میلی‌ثانیه قطع می‌کند.","letter":"ک"},{"term":"سیم ارت اتصال به زمین (Earth / Ground Wire)","cat":"electrical","desc":"سیم حفاظتی با روکش زرد-سبز که بدنه فلزی تمام دستگاه‌های برقی را به چاه ارت متصل کرده تا در صورت نشتی، فیوز برق را قطع کند.","letter":"س"},{"term":"فازمتر عایق (Voltage Detector / Phase Tester)","cat":"electrical","desc":"ابزار تست تشخیص سیم فاز از طریق لامپ نئون داخلی یا سنسور القایی دیجیتال بدون تماس با جریان برق.","letter":"ف"},{"term":"ترمینال اهرمی WAGO (Lever Wire Connector)","cat":"electrical","desc":"بست اتصال سریع سیم با قفل فنری اهرمی بدون نیاز به چسب برق که اتصالی پایدار، ضدجرقه و مقاوم در برابر حرارت ایجاد می‌کند.","letter":"ت"},{"term":"کلید تبدیل (Three-Way Switch)","cat":"electrical","desc":"کلید دارای ۳ ترمینال (یک مشترک و دو غیرمشترک) برای کنترل و خاموش/روشن کردن یک لامپ از دو نقطه مجزا مانند راهرو و راه‌پله.","letter":"ک"},{"term":"کلید صلیبی (Four-Way Switch)","cat":"electrical","desc":"کلید دارای ۴ ترمینال برای کنترل یک مدار روشنایی از ۳ نقطه یا بیشتر در کنار دو کلید تبدیل.","letter":"ک"},{"term":"مولتی‌متر دیجیتال (Digital Multimeter)","cat":"electrical","desc":"دستگاه اندازه‌گیری کمیت‌های الکتریکی شامل ولتاژ متناوب و مستقیم، جریان، مقاومت اهمی، تست بوق اتصالی و ظرفیت خازن.","letter":"م"},{"term":"کنتاکتور (Contactor)","cat":"electrical","desc":"کلید الکترومغناطیسی قدرت برای قطع و وصل مدارهای با توان بالا مانند پمپ‌های سه‌فاز، چیلرها و روشنایی عمومی به صورت ریموت.","letter":"ک"},{"term":"چسب برق PVC (Vinyl Electrical Tape)","cat":"electrical","desc":"نوار چسب عایق پی‌وی‌سی تا ۶۰۰ ولت برای پوشش سیم‌های مسی؛ در اتصالات استاندارد با ترمینال جایگزین می‌شود.","letter":"چ"},{"term":"لولای گازور آرام‌بند (Concealed Soft-Close Hinge)","cat":"carpentry","desc":"لولای پنهان کابینت دارای پمپ پیستونی هیدرولیک داخلی برای بسته شدن بی‌صدا و آرام درب با قابلیت رگلاژ در ۳ بعد.","letter":"ل"},{"term":"سیلندر یا توپی قفل (Euro Profile Lock Cylinder)","cat":"carpentry","desc":"مغزی قفل درب‌های ضدسرقت و چوبی شامل پین‌های برنجی و فنرها که با چرخاندن کلید زبانه اصلی را جابجا می‌کند.","letter":"س"},{"term":"ریل ساچمه‌ای سه تیکه (Ball Bearing Drawer Slide)","cat":"carpentry","desc":"مکانیزم بازشوی کامل کشو با گوی‌های ساچمه‌ای فولادی و خار ضامن پلاستیکی برای درآوردن سریع کشو از بدنه.","letter":"ر"},{"term":"دستگیره رزت دو تیکه (Split Rosette Door Handle)","cat":"carpentry","desc":"دستگیره مدرن دارای دو پلاک دایره‌ای یا مربعی مجزا برای دسته و سیلندر قفل با پیچ فیکس سرتاسری.","letter":"د"},{"term":"جک پمپی کابینت (Cabinet Gas Spring)","cat":"carpentry","desc":"جک گازی نیتروژنی (قدرت ۸۰ تا ۱۲۰ نیوتن) برای باز نگه داشتن درب‌های افقی داشبوردی بالای آبچکان.","letter":"ج"},{"term":"قفل مگنتی تاچ (Push to Open Magnetic Catch)","cat":"carpentry","desc":"مکانیزم فشاری بدون نیاز به دستگیره که با فشار ملایم انگشت، درب کابینت را به سمت جلو پرتاب و باز می‌کند.","letter":"ق"},{"term":"آرام‌بند هیدرولیکی درب (Hydraulic Door Closer)","cat":"carpentry","desc":"دستگاه بازویی بالای درب ورودی با دو پیچ تنظیم سرعت اولیه و ضربه نهایی (Latching Speed) برای بستن درب ساختمان.","letter":"آ"},{"term":"چسب چوب پلی‌وینیل استات PVA (Woodworking Glue)","cat":"carpentry","desc":"چسب پلیمری بر پایه آب با مقاومت کششی بالا برای اتصال قطعات چوب، MDF و ترمیم سوراخ‌های هرز شده.","letter":"چ"},{"term":"آچار فرانسه (Adjustable Wrench)","cat":"tools","desc":"آچار دارای فک متحرک حلزونی برای باز و بستن پیچ‌ها و مهره‌های چهارگوش و شش‌گوش با سایزهای متنوع.","letter":"آ"},{"term":"انبر قفلی (Locking Pliers / Vise-Grip)","cat":"tools","desc":"انبر با مکانیزم اهرم ضامن‌دار برای قفل شدن روی مهره‌های زنگ‌زده، پیچ‌های هرز شده و نگه‌داشتن قطعات تحت فشار بالا.","letter":"ا"},{"term":"انبر کلاغی (Water Pump Pliers)","cat":"tools","desc":"انبر با فک‌های زاویه‌دار و شیارهای تنظیم چندگانه مخصوص لوله‌کشی و گرفتن لوله‌های استوانه‌ای با قطر بالا.","letter":"ا"},{"term":"مته الماسه بتن و گرانیت (Masonry / Concrete Drill Bit)","cat":"tools","desc":"مته دارای نوک زاویه‌دار کاربید تنگستن سخت برای سوراخ‌کاری ضربه‌ای در آجر، بتن و دیوارهای سیمانی.","letter":"م"},{"term":"مته نیزه‌ای سرامیک و شیشه (Carbide Spear Tile Bit)","cat":"tools","desc":"مته با نوک پیکانی تیز مخصوص سوراخ کردن لعاب صیقلی سرامیک، کاشی پرسلان و شیشه بدون ترک‌خوردگی.","letter":"م"},{"term":"کاتر تیغ ذوزنقه‌ای (Utility Knife)","cat":"tools","desc":"چاقوی صنعتی فلزی با تیغه‌های کربنی قابل تعویض برای برش مقوا، موکت، عایق و برداشتن چسب‌های کهنه.","letter":"ک"},{"term":"تراز بنایی مگنتی (Magnetic Torpedo Level)","cat":"tools","desc":"ابزار سنجش افقی، عمودی و زاویه ۴۵ درجه سطوح با کپسول‌های روغنی حباب‌دار و آهنربای نئودیمیوم.","letter":"ت"},{"term":"رول‌پلاک پروانه‌ای و حلزونی (Drywall Anchor)","cat":"tools","desc":"بست‌های ویژه پلاستیکی یا فلزی برای نصب بار روی دیوارهای توخالی کناف و گچی بدون ریزش سازه.","letter":"ر"},{"term":"اسپری روان‌کننده WD-40 (Penetrating Lubricant Spray)","cat":"tools","desc":"روان‌کننده بر پایه حلال و روغن معدنی برای نفوذ در زنگ‌زدگی پیچ‌ها، روان‌کاری لولاها و دفع رطوبت از قطعات الکتریکی.","letter":"ا"},{"term":"گیج اندازه‌گیری روغن موتور (Oil Dipstick)","cat":"auto","desc":"میله فلزی مدرج داخل کارتر موتور برای سنجش دقیق سطح، ویسکوزیته و سلامت روغن موتور خودرو.","letter":"گ"},{"term":"شانژمان دوچرخه (Rear Derailleur)","cat":"auto","desc":"مکانیزم فنری تعویض دنده عقب دوچرخه با دو قرقره راهنما و دو پیچ تنظیم حد بالا (H) و پایین (L).","letter":"ش"},{"term":"شمع جرقه‌زن خودرو (Spark Plug)","cat":"auto","desc":"قطعه سرسیلندر دارای الکترودهای ایریدیوم یا پلاتینیوم برای ایجاد جرقه اشتعال مخلوط سوخت و هوا در سیلندر.","letter":"ش"},{"term":"لنت ترمز دیسکی (Disc Brake Pads)","cat":"auto","desc":"لقمه‌های اصطکاکی سرامیکی یا فلزی نصب‌شده در کالیپر که با فشرده شدن روی دیسک، سرعت خودرو را مهار می‌کنند.","letter":"ل"},{"term":"فشارسنج باد لاستیک (Tire Pressure Gauge)","cat":"auto","desc":"ابزار دقیق سنجش فشار باد تایر بر حسب PSI یا Bar برای حفظ تعادل خودرو، کاهش مصرف سوخت و جلوگیری از ترکیدگی لاستیک.","letter":"ف"},{"term":"فیلتر هوای کابین و موتور (Air Filter)","cat":"auto","desc":"المان کاغذی یا کتان تصفیه‌کننده ذرات گردوغبار ورودی به منیفولد هوا و هوای داخل اتاق خودرو.","letter":"ف"},{"term":"پمپ تخلیه لباسشویی (Drain Pump Motor)","cat":"appliances","desc":"موتور مغناطیسی فیلتردار پایین ماشین لباسشویی برای پمپاژ آب کثیف به شیلنگ فاضلاب در مرحله آبکشی.","letter":"پ"},{"term":"المنت هیتر آبگرمکن و لباسشویی (Heating Element)","cat":"appliances","desc":"لوله فلزی حاوی سیم مقاومت‌دار نیکل-کروم و پودر منیزیم برای گرم کردن آب به دمای تنظیمی ترموستات.","letter":"ا"},{"term":"ترموستات محیطی یخچال (Refrigerator Thermostat)","cat":"appliances","desc":"سنسور فانوسی گازی یا الکترونیکی برای فرمان دادن به کمپرسور بر اساس دمای سرمای داخل کابین.","letter":"ت"},{"term":"میکروسوئیچ درب لباسشویی (Door Interlock Switch)","cat":"appliances","desc":"قفل ایمنی الکتریکی درب لباسشویی که تا زمان تخلیه کامل آب و توقف دیگ، مانع از باز شدن درب می‌شود.","letter":"م"},{"term":"اسید سیتریک خوراکی (Citric Acid Descaler)","cat":"appliances","desc":"پودر آلی بی‌خطر برای حل کردن رسوبات کربنات کلسیم داخل اسپرسوساز، کتری برقی، اتو بخار و پکیج.","letter":"ا"},{"term":"هیدروستات یا سنسور سطح آب (Water Level Pressure Switch)","cat":"appliances","desc":"سنسور دیافراگمی متصل به شیلنگ هوای دیگ لباسشویی برای قطع ورود آب در زمان رسیدن به حجم استاندارد.","letter":"ه"},{"term":"شیر سه راهه موتوری پکیج","cat":"cooling","desc":"شیر برقی هدایت‌کننده آب گرم به سمت رادیاتورها یا مبدل ثانویه آب مصرفی.","letter":"ش"},{"term":"فلوسوئیچ آبگرمکن","cat":"cooling","desc":"سنسور مغناطیسی حس‌کننده جریان آب برای روشن کردن فوری مشعل پکیج.","letter":"ف"},{"term":"پمپ سیرکولاتور گراندفوس","cat":"cooling","desc":"پمپ خطی گردش آب داغ در رادیاتورهای شوفاژ با ۳ دور تنظیمی سرعت.","letter":"پ"},{"term":"فن حلزونی سانتریفیوژ","cat":"cooling","desc":"توربین پروانه‌ای هدایت هوای فشرده و خنک از طریق کانال‌کشی به درون اتاق‌ها.","letter":"ف"},{"term":"پوشال چوبی سوزنی","cat":"cooling","desc":"رشته‌های چوب صنوبر با خاصیت جذب و تبخیر بالای آب برای خنک‌سازی کولر آبی.","letter":"پ"},{"term":"شناور آسانسوری توالت فرنگی","cat":"plumbing","desc":"مکانیزم پرکننده عمودی مخزن توالت فرنگی با قطع سریع جریان و بدون صدا.","letter":"ش"},{"term":"مکانیزم تخلیه دوزمانه فرنگی","cat":"plumbing","desc":"شیر تخلیه با دو دکمه تخلیه کامل (۶ لیتر) و تخلیه نیمه (۳ لیتر) برای صرفه‌جویی در آب.","letter":"م"},{"term":"بوگیر ژله‌ای توالت فرنگی","cat":"plumbing","desc":"واشر موم‌دار چسبنده بین لوله فاضلاب و کاسه توالت فرنگی برای جلوگیری از نشت آب و بو.","letter":"ب"},{"term":"شیلنگ شیلدمات استیل","cat":"plumbing","desc":"شیلنگ انعطاف‌پذیر با روکش بافته‌شده از استیل ۳۰۴ ضدزنگ برای اتصال شیرهای اهرمی و آبگرمکن.","letter":"ش"},{"term":"سیم‌کشی توکار با لوله خرطومی نسوز","cat":"electrical","desc":"مسیر عبور سیم‌های برق در شیارهای دیوار با لوله‌های پلی‌آمید ضدحریق.","letter":"س"},{"term":"سرپیچ باکالیت E27 استاندارد","cat":"electrical","desc":"پایه پیچی استاندارد لامپ‌های خانگی با جنس باکالیت مقاوم در برابر حرارت بالا.","letter":"س"},{"term":"سنسور حرکتی چشمی راه‌پله (PIR)","cat":"electrical","desc":"حسگر مادون قرمز غیرفعال برای روشن کردن خودکار روشنایی مشاعات با تشخیص ورود افراد.","letter":"س"},{"term":"استابلایزر و ترانس محافظ ولتاژ","cat":"electrical","desc":"دستگاه تثبیت نوسانات برق شهر برای محافظت از کمپرسور یخچال، تلویزیون و پکیج.","letter":"ا"},{"term":"چسب آکواریوم سیلیکونی RTV","cat":"carpentry","desc":"چسب خمیری ولکانیزه‌شونده در دمای اتاق با چسبندگی فوق‌العاده به شیشه، سرامیک و فلز.","letter":"چ"},{"term":"پیچ‌گوشتی جغجغه‌ای چندسر","cat":"tools","desc":"پیچ‌گوشتی با مکانیزم چرخش یک‌طرفه و سری‌های قابل تعویض آلن، ستاره‌ای، دوسو و چهارسو.","letter":"پ"},{"term":"دریل بتن‌کن سه کاره SDS","cat":"tools","desc":"دستگاه قدرتمند دارای ۳ حالت سوراخ‌کاری ساده، سوراخ‌کاری چکشی و تخریب با قلم.","letter":"د"},{"term":"فیلتر روغن پیچی خودرو","cat":"auto","desc":"قوطی فلزی حاوی کاغذ فیلتر تصفیه براده‌های فلزی و کربن از روغن موتور در حال چرخش.","letter":"ف"},{"term":"تسمه تایم خودرو (Timing Belt)","cat":"auto","desc":"تسمه دندانه‌دار همگام‌کننده چرخش میل‌لنگ با میل‌سوپاپ برای باز و بسته شدن دقیق سوپاپ‌ها.","letter":"ت"},{"term":"ترموستات آب خودرو","cat":"auto","desc":"شیر حساس به دمای ۸۲ یا ۸۷ درجه که مانع جریان آب به رادیاتور تا رسیدن موتور به دمای کاری ایده‌آل می‌شود.","letter":"ت"}];

function normalizePersianGlossaryText(str) {
  if (!str) return '';
  return str
    .toString()
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[آأإٱ]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .toLowerCase()
    .trim();
}

function initGlossaryEngine() {
  const container = document.getElementById('glossaryGrid');
  const searchInput = document.getElementById('glossarySearchInput');
  const countDisplay = document.getElementById('glossaryCountDisplay');
  const catButtons = document.querySelectorAll('.glossary-cat-btn');
  const letterButtons = document.querySelectorAll('.glossary-letter-btn');
  const clearBtn = document.getElementById('glossaryClearBtn');

  if (!container) return;

  let activeCat = 'all';
  let activeLetter = 'همه';
  let searchKeyword = '';

  const catNames = {
    cooling: '❄️ سرمایش و پکیج',
    plumbing: '🚰 لوله‌کشی و پمپ',
    electrical: '⚡ برق و ایمنی',
    carpentry: '🚪 درب و کمد',
    tools: '🧰 ابزارها',
    auto: '🚗 خودرو و دوچرخه',
    appliances: '🍳 لوازم خانگی'
  };

  function render() {
    const isEn = document.documentElement.lang === 'en';
    const dict = siteTranslations[isEn ? 'en' : 'fa'];

    const filtered = masterGlossaryDatabase.filter(item => {
      // Category filter
      if (activeCat !== 'all' && item.cat !== activeCat) return false;
      
      // Letter filter
      if (activeLetter !== 'همه' && activeLetter !== 'All') {
        const normActiveLetter = normalizePersianGlossaryText(activeLetter);
        const normItemLetter = normalizePersianGlossaryText(item.letter || '');
        const normFirstChar = normalizePersianGlossaryText(item.term.trim().charAt(0));

        if (normActiveLetter === 'الف' || normActiveLetter === 'ا') {
          if (normFirstChar !== 'ا' && normItemLetter !== 'ا' && normItemLetter !== 'الف') {
            return false;
          }
        } else {
          if (normFirstChar !== normActiveLetter && normItemLetter !== normActiveLetter) {
            return false;
          }
        }
      }

      // Keyword search
      if (searchKeyword) {
        const query = normalizePersianGlossaryText(searchKeyword);
        const inTerm = normalizePersianGlossaryText(item.term).includes(query);
        const inDesc = normalizePersianGlossaryText(item.desc).includes(query);
        if (!inTerm && !inDesc) return false;
      }

      return true;
    });

    if (countDisplay) {
      countDisplay.textContent = filtered.length.toLocaleString(isEn ? 'en-US' : 'fa-IR');
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.15);">
          <div style="font-size: 2.2rem; margin-bottom: 10px;">🔍</div>
          <h4 style="color: var(--amber-primary); font-size: 1.1rem; margin-bottom: 8px;">${isEn ? 'No technical terms found matching your query' : 'اصطلاحی با این مشخصات یافت نشد'}</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">${isEn ? 'Try searching for another keyword or reset the category and alphabet filters to "All".' : 'می‌توانید کلمه دیگری را جستجو کنید یا فیلتر دسته‌بندی و الفبا را روی «همه» قرار دهید.'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const badgeText = isEn ? (dict.glossary_cats?.[item.cat] || '🔧 Technical') : (catNames[item.cat] || '🔧 فنی');
      return `
        <div class="glossary-card" data-cat="${item.cat}">
          <div class="glossary-card-header">
            <h3 class="glossary-card-title">${item.term}</h3>
            <span class="glossary-card-badge">${badgeText}</span>
          </div>
          <p class="glossary-card-desc">${item.desc}</p>
        </div>
      `;
    }).join('');
  }

  window.refreshGlossary = render;

  // Initial render
  render();

  // Search input event
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value.trim();
      if (clearBtn) clearBtn.style.display = searchKeyword ? 'block' : 'none';
      render();
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchKeyword = '';
      clearBtn.style.display = 'none';
      render();
      searchInput.focus();
    });
  }

  // Category buttons
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.getAttribute('data-cat') || btn.getAttribute('data-gcat') || 'all';
      render();
    });
  });

  // Alphabet buttons
  letterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      letterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeLetter = btn.getAttribute('data-letter') || 'همه';
      render();
    });
  });
}


// =============================================================================
// GLOBAL SMOOTH SCROLL & ANCHOR LINK HANDLER
// =============================================================================
function initSmoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 75;
        const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        if (mobileBtn && navLinks) {
          mobileBtn.classList.remove('open');
          navLinks.classList.remove('open');
        }

        // Update active class on nav links
        document.querySelectorAll('#navLinks .nav-link').forEach(link => {
          link.classList.remove('active');
        });
        if (this.classList.contains('nav-link')) {
          this.classList.add('active');
        }
      }
    });
  });
}

// =============================================================================
// DONATION / CRYPTO TIP CONTROLLER
// =============================================================================
function openDonationModal() {
  const modal = document.getElementById('donationLightbox');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDonationModal() {
  const modal = document.getElementById('donationLightbox');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchDonationTab(cryptoType) {
  // Update Tab buttons
  document.querySelectorAll('.donation-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById('donTab_' + cryptoType);
  if (activeBtn) activeBtn.classList.add('active');

  // Update Panels
  document.querySelectorAll('.donation-crypto-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  const activePanel = document.getElementById('donPanel_' + cryptoType);
  if (activePanel) activePanel.classList.add('active');
}

function copyDonationAddress(cryptoType) {
  const addrEl = document.getElementById('addr_' + cryptoType);
  const btnEl = document.getElementById('btnCopy_' + cryptoType);
  if (!addrEl || !btnEl) return;

  const textToCopy = addrEl.textContent.trim();
  const isEn = document.documentElement.lang === 'en';
  const dict = siteTranslations[isEn ? 'en' : 'fa'];

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showCopySuccess(btnEl, isEn, dict);
    }).catch(() => {
      fallbackCopy(textToCopy, btnEl, isEn, dict);
    });
  } else {
    fallbackCopy(textToCopy, btnEl, isEn, dict);
  }
}

function fallbackCopy(text, btnEl, isEn, dict) {
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    showCopySuccess(btnEl, isEn, dict);
  } catch (err) {
    prompt(isEn ? 'Copy this address:' : 'آدرس را کپی کنید:', text);
  }
}

function showCopySuccess(btnEl, isEn, dict) {
  const textSpan = btnEl.querySelector('.copy-btn-text');
  const originalText = textSpan ? textSpan.textContent : '';
  const originalBg = btnEl.style.background;

  if (textSpan) {
    textSpan.textContent = isEn ? '✅ Copied to Clipboard!' : '✅ آدرس کپی شد!';
  }
  btnEl.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

  setTimeout(() => {
    if (textSpan) textSpan.textContent = originalText;
    btnEl.style.background = originalBg;
  }, 2500);
}

function initDonationEngine() {
  const modal = document.getElementById('donationLightbox');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDonationModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeDonationModal();
    }
  });

  const donNavBtn = document.getElementById('donationNavBtn');
  if (donNavBtn) {
    donNavBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDonationModal();
    });
  }

  const donMenuLink = document.querySelector('.donation-menu-link');
  if (donMenuLink) {
    donMenuLink.addEventListener('click', (e) => {
      e.preventDefault();
      // Close mobile nav if open
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const navLinks = document.getElementById('navLinks');
      if (mobileBtn && navLinks) {
        mobileBtn.classList.remove('open');
        navLinks.classList.remove('open');
      }
      openDonationModal();
    });
  }
}

// 15. MOUSE GLOW & AMBIENT SHIMMER ENGINE
function initMouseGlowEngine() {
  // Disable for touchscreens / devices without fine pointer
  if (window.matchMedia && !window.matchMedia('(pointer: fine)').matches) {
    return;
  }

  // Ensure DOM elements exist or create them dynamically
  let aura = document.getElementById('cursorGlowAura');
  let core = document.getElementById('cursorGlowCore');

  if (!aura) {
    aura = document.createElement('div');
    aura.id = 'cursorGlowAura';
    aura.className = 'cursor-glow-aura';
    aura.setAttribute('aria-hidden', 'true');
    document.body.appendChild(aura);
  }

  if (!core) {
    core = document.createElement('div');
    core.id = 'cursorGlowCore';
    core.className = 'cursor-glow-core';
    core.setAttribute('aria-hidden', 'true');
    core.innerHTML = '<div class="cursor-glow-dot"></div>';
    document.body.appendChild(core);
  } else if (!core.querySelector('.cursor-glow-dot')) {
    core.innerHTML = '<div class="cursor-glow-dot"></div>';
  }

  let mouseX = -1000;
  let mouseY = -1000;
  let auraX = -1000;
  let auraY = -1000;
  let isVisible = false;
  let isHovering = false;

  // Smooth follow loop for ambient aura (Lerp)
  function renderGlow() {
    if (isVisible) {
      if (auraX === -1000) {
        auraX = mouseX;
        auraY = mouseY;
      } else {
        auraX += (mouseX - auraX) * 0.12;
        auraY += (mouseY - auraY) * 0.12;
      }
      aura.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
    }
    requestAnimationFrame(renderGlow);
  }
  requestAnimationFrame(renderGlow);

  // Mouse move handler
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      aura.style.opacity = isHovering ? '0.9' : '0.75';
      core.style.opacity = '1';
    }

    core.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  }, { passive: true });

  // Mouse leave window
  document.addEventListener('mouseleave', () => {
    isVisible = false;
    aura.style.opacity = '0';
    core.style.opacity = '0';
  });

  // Mouse enter window
  document.addEventListener('mouseenter', () => {
    if (mouseX > 0 && mouseY > 0) {
      isVisible = true;
      aura.style.opacity = isHovering ? '0.9' : '0.75';
      core.style.opacity = '1';
    }
  });

  // Hover detection over interactive elements for reactive glow
  const interactiveSelector = 'a, button, input, textarea, select, .btn, .nav-link, .card, .filter-btn, .tag, .topic-card, .video-card, .magazine-card, .troubleshoot-card, .glossary-card, .social-icon-btn, .theme-toggle, .lang-toggle, .badge';

  document.addEventListener('mouseover', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      isHovering = true;
      core.classList.add('is-hovering');
      aura.classList.add('is-hovering');
      if (isVisible) aura.style.opacity = '0.9';
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    if (e.target && e.target.closest && e.target.closest(interactiveSelector)) {
      isHovering = false;
      core.classList.remove('is-hovering');
      aura.classList.remove('is-hovering');
      if (isVisible) aura.style.opacity = '0.75';
    }
  }, { passive: true });

  // Active / Click reaction
  document.addEventListener('mousedown', () => {
    core.classList.add('is-active');
  });

  document.addEventListener('mouseup', () => {
    core.classList.remove('is-active');
  });
}

// Window Global Exports
window.openArticleModal = openArticleModal;
window.closeArticleModal = closeArticleModal;
window.navigateArticle = navigateArticle;
window.updateArticleReadingProgress = updateArticleReadingProgress;
window.shareCurrentArticle = shareCurrentArticle;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.filterCategory = filterCategory;
window.printCurrentArticlePdf = printCurrentArticlePdf;
window.initGlossaryEngine = initGlossaryEngine;
window.openDonationModal = openDonationModal;
window.closeDonationModal = closeDonationModal;
window.switchDonationTab = switchDonationTab;
window.copyDonationAddress = copyDonationAddress;
window.initMouseGlowEngine = initMouseGlowEngine;

// Main App Initialization
function initApp() {
  initSmoothScrollLinks();
  initGlossaryEngine();
  initLiveAparatVideoEngine();
  initThemeToggle();
  initLanguageToggle();
  initCounters();
  initVisitorTracking();
  initFilters();
  initTroubleshooter();
  initMagazine();
  initContactForm();
  initBackToTop();
  initMobileMenu();
  initDonationEngine();
  initMouseGlowEngine();
  initSmartVideoRouting();
}

// =============================================================================
// 13. SMART VIDEO ROUTING & VPN PROBE (SkillDad Smart Dual Router)
// =============================================================================
window.isSkillDadYouTubeOnline = false;

function checkYouTubeReachability() {
  return new Promise(function(resolve) {
    var probeUrl = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg?_cb=' + Date.now();
    var finished = false;

    var timer = setTimeout(function() {
      if (!finished) {
        finished = true;
        resolve(false);
      }
    }, 4000);

    var img = new Image();
    img.onload = function() {
      if (!finished) {
        finished = true;
        clearTimeout(timer);
        window.isSkillDadYouTubeOnline = true;
        resolve(true);
      }
    };
    img.onerror = function() {
      if (!finished) {
        finished = true;
        clearTimeout(timer);
        resolve(false);
      }
    };
    img.src = probeUrl;
  });
}

// =============================================================================
// FEATURED TOP VIDEOS CONTROLLER (SMART YOUTUBE / APARAT DUAL ROUTER)
// =============================================================================
// =============================================================================
// FEATURED TOP VIDEOS CONTROLLER (SMART YOUTUBE / APARAT DUAL ROUTER)
// =============================================================================
const FEATURED_TOP_VIDEOS = {
  youtube: [
    {
      id: "lqNf8y0f_Js",
      title: "تثبیت پریز : چکار کنیم که پریزها در جای خود محکم باقی بمانند",
      cat: "برق و روشنایی",
      duration: "04:20",
      thumb: "https://img.youtube.com/vi/lqNf8y0f_Js/hqdefault.jpg",
      localThumb: "assets/img/thumb_top1.jpg",
      ytUrl: "https://www.youtube.com/watch?v=lqNf8y0f_Js",
      apUrl: "https://www.aparat.com/skilldads"
    },
    {
      id: "1YomTjvakm0",
      title: "رفع لقی سرامیک : تشخیص و ترمیم لقی سرامیک کف؟! ",
      cat: "ساختمان",
      duration: "07:09",
      thumb: "https://img.youtube.com/vi/1YomTjvakm0/hqdefault.jpg",
      localThumb: "assets/img/thumb_top2.jpg",
      ytUrl: "https://www.youtube.com/watch?v=1YomTjvakm0",
      apUrl: "https://www.aparat.com/skilldads"
    },
    {
      id: "Qd208Ys_U70",
      title: "سرویس سردوشی حمام : چگونه گرفتگی سردوشی حمام را بر طرف کنیم ؟ 🚿",
      cat: "لوله‌کشی و پمپ آب",
      duration: "06:00",
      thumb: "https://img.youtube.com/vi/Qd208Ys_U70/hqdefault.jpg",
      localThumb: "assets/img/thumb_top3.jpg",
      ytUrl: "https://www.youtube.com/watch?v=Qd208Ys_U70",
      apUrl: "https://www.aparat.com/skilldads"
    },
    {
      id: "Ax_1jc3HSJI",
      title: "دوغاب : چگونه کف ساختمان ها را با سیمان سفید و پودر دوغاب بدهیم",
      cat: "درب، کمد و ساختمان",
      duration: "06:00",
      thumb: "https://img.youtube.com/vi/Ax_1jc3HSJI/hqdefault.jpg",
      localThumb: "assets/img/thumb_top4.jpg",
      ytUrl: "https://www.youtube.com/watch?v=Ax_1jc3HSJI",
      apUrl: "https://www.aparat.com/skilldads"
    },
    {
      id: "p5UkeXwuqcM",
      title: "تعویض شناور : چگونه شناور کولر آبی را عوض کنیم",
      cat: "سرویس کولر و لوازم خانگی",
      duration: "06:00",
      thumb: "https://img.youtube.com/vi/p5UkeXwuqcM/hqdefault.jpg",
      localThumb: "assets/img/thumb_top5.jpg",
      ytUrl: "https://www.youtube.com/watch?v=p5UkeXwuqcM",
      apUrl: "https://www.aparat.com/skilldads"
    },
    {
      id: "-HPFRwpXlac",
      title: "شش کاری که اگر انجامش بدیم، ماشین لباسشویی کمتر خراب میشه...",
      cat: "لوازم خانگی",
      duration: "04:23",
      thumb: "https://img.youtube.com/vi/-HPFRwpXlac/hqdefault.jpg",
      localThumb: "assets/img/thumb_top6.jpg",
      ytUrl: "https://www.youtube.com/watch?v=-HPFRwpXlac",
      apUrl: "https://www.aparat.com/skilldads"
    }
  ],
  aparat: [
    {
      id: "63957864",
      uid: "ojsiw0w",
      title: "روش جمع کردن چادر مسافرتی",
      cat: "شنبه ابزار و ترفند",
      duration: "04:48",
      thumb: "https://static.cdn.asset.aparat.com/avt/63957864-5605-b__8669.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/ojsiw0w"
    },
    {
      id: "64834128",
      uid: "ajpc0gn",
      title: "رفع صدای جیر جیر کولر : تنظیم تسمه ی کولر آبی",
      cat: "کولر و لوازم خانگی",
      duration: "06:00",
      thumb: "https://static.cdn.asset.aparat.com/avt/64834128-1650-b__3681.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/ajpc0gn"
    },
    {
      id: "66537571",
      uid: "vghge8f",
      title: "تعمیر فندک اجاق گاز در خانه",
      cat: "برق، گاز و آیفون",
      duration: "08:45",
      thumb: "https://static.cdn.asset.aparat.com/avt/66537571-4103-b__6972.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/vghge8f"
    },
    {
      id: "66538814",
      uid: "vbtljyw",
      title: "رفع مشکل فشار کم آب گرم؟ راه‌ حل ساده !",
      cat: "لوله‌کشی و پمپ",
      duration: "05:43",
      thumb: "https://static.cdn.asset.aparat.com/avt/66538814-7194-b__1683.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/vbtljyw"
    },
    {
      id: "64645654",
      uid: "dhqc738",
      title: "سرویس کولر سلولزی : چگونه کولرهای سلولزی را سرویس  و راه اندازی کنیم ؟",
      cat: "کولر و لوازم خانگی",
      duration: "12:45",
      thumb: "https://static.cdn.asset.aparat.com/avt/64645654-6834-b__8468.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/dhqc738"
    },
    {
      id: "65404070",
      uid: "bqzo59u",
      title: "در آوردن کشو :  آموزش اصولی درآوردن کشوی ریل‌دار",
      cat: "درب، کمد و ساختمان",
      duration: "05:22",
      thumb: "https://static.cdn.asset.aparat.com/avt/65404070-5594-b__2710.jpg",
      ytUrl: "https://www.youtube.com/@SkillsDad",
      apUrl: "https://www.aparat.com/v/bqzo59u"
    }
  ]
};

window.currentFeaturedSource = 'youtube';

window.renderYtMonetizationBanner = function(isYtOnline) {
  const container = document.getElementById('ytMonetizationBannerContainer');
  if (!container) return;

  if (isYtOnline) {
    container.innerHTML = 
      '<div class="yt-monetize-banner yt-status-connected">' +
        '<div class="yt-monetize-content">' +
          '<span class="yt-monetize-pulse">🟢</span>' +
          '<span class="yt-monetize-text">اتصال مستقیم به <strong>یوتیوب</strong> برقرار است • تماشای بدون وقفه و کیفیت 4K</span>' +
        '</div>' +
        '<a href="https://www.youtube.com/@SkillsDad?sub_confirmation=1" target="_blank" rel="noopener" class="yt-monetize-btn" style="background: linear-gradient(135deg, #15803d, #047857);">' +
          '<span>کانال اسکیل‌دد ↗</span>' +
        '</a>' +
      '</div>';
  } else {
    container.innerHTML = 
      '<div class="yt-monetize-banner">' +
        '<div class="yt-monetize-content">' +
          '<span class="yt-monetize-pulse">💡</span>' +
          '<span class="yt-monetize-text">برای تماشای روان با کیفیت 4K، مشاهده تمام آموزش‌ها و <strong>حمایت از اسکیل‌دد</strong>، لطفاً با فیلترشکن وارد یوتیوب شوید ❤️</span>' +
        '</div>' +
        '<a href="https://www.youtube.com/@SkillsDad?sub_confirmation=1" target="_blank" rel="noopener" class="yt-monetize-btn">' +
          '<span>🔴 تماشا در یوتیوب (با فیلترشکن) ↗</span>' +
        '</a>' +
      '</div>';
  }
};

window.switchFeaturedVideos = function(source) {
  const grid = document.getElementById('featuredVideosGrid');
  if (!grid) return;
  const isYt = source === 'youtube';
  window.currentFeaturedSource = source;
  try {
    localStorage.setItem('skilldad_featured_pref', source);
  } catch(e) {}

  const btnYt = document.getElementById('btnFeaturedYt');
  const btnAp = document.getElementById('btnFeaturedAp');
  if (btnYt && btnAp) {
    if (isYt) {
      btnYt.classList.add('active');
      btnAp.classList.remove('active');
    } else {
      btnAp.classList.add('active');
      btnYt.classList.remove('active');
    }
  }

  // Update Monetization Banner visibility
  const banner = document.getElementById('ytMonetizationBannerContainer');
  if (banner) {
    banner.style.display = isYt ? 'block' : 'none';
  }

  const list = FEATURED_TOP_VIDEOS[source] || FEATURED_TOP_VIDEOS.youtube;

  grid.innerHTML = list.map(function(v) {
    const targetUrl = isYt ? v.ytUrl : v.apUrl;
    const badgeHtml = isYt 
      ? '<span style="position: absolute; top: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.68rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; z-index: 2;">🔴 YouTube</span>'
      : '<span style="position: absolute; top: 8px; left: 8px; background: #ea1e63; color: #fff; font-size: 0.68rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 4px; z-index: 2;">📺 آپارات</span>';

    const extraClass = isYt ? '' : ' aparat-btn';
    const btnText = isYt 
      ? (window.isSkillDadYouTubeOnline ? '🔴 تماشا در یوتیوب' : '🔴 تماشا در یوتیوب (پیشنهادی) ↗')
      : '📺 تماشا در آپارات';
    const safeTitle = v.title.replace(/"/g, '&quot;');
    const localAttr = v.localThumb ? (' data-local="' + v.localThumb + '"') : '';
    const errorFallback = 'if(this.dataset.local && this.src !== this.dataset.local){ this.src = this.dataset.local; } else { this.src = \'assets/img/logo.png\'; }';

    return '<div class="video-card" onclick="window.smartWatchVideo(\'' + targetUrl + '\')">' +
      '<div class="video-thumb">' +
        '<img src="' + v.thumb + '"' + localAttr + ' alt="' + safeTitle + '" loading="lazy" referrerpolicy="no-referrer" onerror="' + errorFallback + '">' +
        badgeHtml +
        '<span class="vid-cat">' + v.cat + '</span>' +
        '<span class="vid-duration">' + v.duration + '</span>' +
        '<div class="play-circle">▶</div>' +
      '</div>' +
      '<div class="video-body">' +
        '<h4 class="vid-title">' + safeTitle + '</h4>' +
        '<div class="vid-footer" style="margin-top: 10px;">' +
          '<a href="' + targetUrl + '" target="_blank" rel="noopener" class="btn btn-sm smart-vid-btn' + extraClass + '" onclick="event.stopPropagation();">' + btnText + '</a>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
};

function initSmartVideoRouting() {
  var userPref = '';
  try {
    userPref = localStorage.getItem('skilldad_featured_pref') || '';
  } catch(e) {}

  // Render initial banner (assuming checking in progress)
  window.renderYtMonetizationBanner(false);

  if (userPref === 'aparat') {
    window.switchFeaturedVideos('aparat');
  } else {
    window.switchFeaturedVideos('youtube');
  }

  // Probe YouTube reachability
  checkYouTubeReachability().then(function(isOnline) {
    window.isSkillDadYouTubeOnline = isOnline;
    window.renderYtMonetizationBanner(isOnline);
    if (window.currentFeaturedSource === 'youtube') {
      window.switchFeaturedVideos('youtube');
    }
  });
}

window.smartWatchVideo = function(url) {
  if (url) {
    window.open(url, '_blank', 'noopener');
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
