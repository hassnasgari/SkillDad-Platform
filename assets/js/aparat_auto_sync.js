/**
 * SKILLDAD.IR - AUTOMATIC APARAT CHANNEL SYNCHRONIZATION ENGINE
 * Pre-seeded with all 71+ official Aparat masterclasses & auto-syncs live updates.
 */

const APARAT_OFFLINE_DATABASE = [
  {
    "id": "73041654",
    "uid": "tywxzq4",
    "title": "معجزه افزایش فشار آب !  اسیدشویی لوله‌های آب گرم  | Increase Water Pressure",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/73041654-9098-b__5058.jpg",
    "duration": "03:07",
    "durationSec": 187,
    "visits": 17,
    "date": "11 شهریور 1405"
  },
  {
    "id": "69620886",
    "uid": "hbx91cv",
    "title": "آب پاش تفنگی : آشنایی و راهنمای خرید",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620886-8736-b__9478.jpg",
    "duration": "10:17",
    "durationSec": 617,
    "visits": 52,
    "date": "3 مرداد 1405"
  },
  {
    "id": "69620793",
    "uid": "comlm4b",
    "title": "مخلوط کن : تعمیر مخلوط کن",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620793-8227-b__5844.jpg",
    "duration": "05:24",
    "durationSec": 324,
    "visits": 263,
    "date": "31 تیر 1405"
  },
  {
    "id": "69620558",
    "uid": "qejc86k",
    "title": "سرویس یخچال : آموزش سرویس کندانسور یخچال",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620558-7814-b__9606.jpg",
    "duration": "06:58",
    "durationSec": 418,
    "visits": 116,
    "date": "27 تیر 1405"
  },
  {
    "id": "69620462",
    "uid": "wut4zg1",
    "title": "مضراب سه تار : روش مضراب زدن در سه تار",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620462-4403-b__1012.jpg",
    "duration": "11:11",
    "durationSec": 671,
    "visits": 190,
    "date": "24 تیر 1405"
  },
  {
    "id": "69620204",
    "uid": "oxjt7u3",
    "title": "سوهان ها : اشنایی بیشتر با ابزار سوهان",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620204-3253-b__9728.jpg",
    "duration": "11:25",
    "durationSec": 685,
    "visits": 61,
    "date": "20 تیر 1405"
  },
  {
    "id": "69553498",
    "uid": "vvbvsae",
    "title": "چکش ها : انتخاب و آموزش کار با چکش ها",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69553498-1833-b__9361.jpg",
    "duration": "04:19",
    "durationSec": 259,
    "visits": 61,
    "date": "20 تیر 1405"
  },
  {
    "id": "69553401",
    "uid": "qsk86tf",
    "title": "روش تعویض سه شاخی های پردردسر با دوشاخ",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69553401-9584-b__8364.jpg",
    "duration": "04:25",
    "durationSec": 265,
    "visits": 32,
    "date": "17 تیر 1405"
  },
  {
    "id": "69620304",
    "uid": "vrwm8g8",
    "title": "کباب شتر : روش تهیه گوشت و کباب کردن",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620304-3220-b__5962.jpg",
    "duration": "10:55",
    "durationSec": 655,
    "visits": 211,
    "date": "17 تیر 1405"
  },
  {
    "id": "69552985",
    "uid": "meolcy3",
    "title": "رفع مشکل خاموش نشدن پمپ اب با هواگیری",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552985-1766-b__8542.jpg",
    "duration": "02:11",
    "durationSec": 131,
    "visits": 817,
    "date": "13 تیر 1405"
  },
  {
    "id": "69620075",
    "uid": "pgq9p3y",
    "title": "اره : آشنایی با اره",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69620075-9459-b__6809.jpg",
    "duration": "16:02",
    "durationSec": 962,
    "visits": 89,
    "date": "13 تیر 1405"
  },
  {
    "id": "69552575",
    "uid": "uqxp5l1",
    "title": "کاترها : آموزش انتخاب و کار با کاترها",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552575-5536-b__2443.jpg",
    "duration": "09:59",
    "durationSec": 599,
    "visits": 13,
    "date": "10 تیر 1405"
  },
  {
    "id": "69552436",
    "uid": "uufz7o6",
    "title": "سرویس گرفتگی سر شیرهای آب : آموزش سرویس ساده ی شیرهای آب .",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552436-2618-b__8044.jpg",
    "duration": "04:25",
    "durationSec": 265,
    "visits": 407,
    "date": "6 تیر 1405"
  },
  {
    "id": "69552183",
    "uid": "lprq758",
    "title": "یادگیری با نت یا گوشی؟ موسیقی را با نت یا گوشی یاد بگیریم ؟",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552183-1341-b__9526.jpg",
    "duration": "04:57",
    "durationSec": 297,
    "visits": 10,
    "date": "30 خرداد 1405"
  },
  {
    "id": "69552107",
    "uid": "vyu35za",
    "title": "آشنایی با سه تار",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552107-5889-b__4696.jpg",
    "duration": "02:32",
    "durationSec": 152,
    "visits": 12,
    "date": "27 خرداد 1405"
  },
  {
    "id": "69552037",
    "uid": "avb3359",
    "title": "تمیز کردن اسپرسوساز : سرویس بعد از زدن هر اسپرسو",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552037-6893-b__8974.jpg",
    "duration": "01:42",
    "durationSec": 102,
    "visits": 90,
    "date": "23 خرداد 1405"
  },
  {
    "id": "69551366",
    "uid": "hnnr724",
    "title": "پیچ گوشتی : آشنایی با پیچ گوشتی ها",
    "cat": "lifestyle",
    "catNameFa": "آشپزی و سه‌تار",
    "catNameEn": "Cooking & Music",
    "poster": "https://static.cdn.asset.aparat.com/avt/69551366-7425-b__1583.jpg",
    "duration": "11:01",
    "durationSec": 661,
    "visits": 69,
    "date": "20 خرداد 1405"
  },
  {
    "id": "69551244",
    "uid": "znl3ls5",
    "title": "خرید و نصب لامپهای سرویس ها : چه نوع لامپی و روش نصب",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/69551244-5417-b__4289.jpg",
    "duration": "10:21",
    "durationSec": 621,
    "visits": 67,
    "date": "16 خرداد 1405"
  },
  {
    "id": "69551080",
    "uid": "yvo3l60",
    "title": "انبر دست - انبرگازی -سیم چین - انبر قفلی-دم بایک : آشنایی بیشتر با این ابزارها !",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/69551080-3230-b__7227.jpg",
    "duration": "06:54",
    "durationSec": 414,
    "visits": 66,
    "date": "13 خرداد 1405"
  },
  {
    "id": "69550980",
    "uid": "dtub2gm",
    "title": "عصاره گیری خوب از قهوه : چگونه با اسپرسوساز معمولی یه قهوه ی خوب داشته باشیم؟!",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69550980-2949-b__2890.jpg",
    "duration": "09:13",
    "durationSec": 553,
    "visits": 46,
    "date": "9 خرداد 1405"
  },
  {
    "id": "69550903",
    "uid": "ksu93b4",
    "title": "روش خطای پکیج : چگونه ارورهای پکیج مثلا E21 را رفع کنیم ؟!",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69550903-9208-b__6077.jpg",
    "duration": "01:31",
    "durationSec": 91,
    "visits": 131,
    "date": "6 خرداد 1405"
  },
  {
    "id": "69550844",
    "uid": "yfmkxoe",
    "title": "تنظیم فشار پکیج : چگونه مشکل افت فشار اب پکیج را حل کنیم؟!",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69550844-1960-b__7721.jpg",
    "duration": "03:20",
    "durationSec": 200,
    "visits": 163,
    "date": "2 خرداد 1405"
  },
  {
    "id": "70749535",
    "uid": "kvb3y4d",
    "title": "سرویس کولر آبی : چگونه کولرآبی را سرویس کنیم",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/70749535-2747-b__3658.jpg",
    "duration": "20:37",
    "durationSec": 1237,
    "visits": 1207,
    "date": "26 اردیبهشت 1405"
  },
  {
    "id": "69550715",
    "uid": "ymfmgw3",
    "title": "نصب دستگیره برای درهای فلزی",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/69550715-6855-b__4060.jpg",
    "duration": "02:16",
    "durationSec": 136,
    "visits": 313,
    "date": "19 اردیبهشت 1405"
  },
  {
    "id": "69550655",
    "uid": "dmwlk6a",
    "title": "تعویض چرخ خودرو با زاپاس",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69550655-3369-b__9928.jpg",
    "duration": "10:36",
    "durationSec": 636,
    "visits": 91,
    "date": "16 اردیبهشت 1405"
  },
  {
    "id": "69486422",
    "uid": "pajd6oh",
    "title": "روش دوخت و تعمیر بند کوله پشتی",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69486422-7920-b__4601.jpg",
    "duration": "03:52",
    "durationSec": 232,
    "visits": 87,
    "date": "12 اردیبهشت 1405"
  },
  {
    "id": "69485970",
    "uid": "erai2gp",
    "title": "رفع گرفتگی سردوشی حمام",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69485970-3779-b__5597.jpg",
    "duration": "03:16",
    "durationSec": 196,
    "visits": 229,
    "date": "9 اردیبهشت 1405"
  },
  {
    "id": "69485492",
    "uid": "msvk28y",
    "title": "تعویض قاب سوئیچ ال 90",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69485492-6760-b__4081.jpg",
    "duration": "04:35",
    "durationSec": 275,
    "visits": 84,
    "date": "5 اردیبهشت 1405"
  },
  {
    "id": "69485063",
    "uid": "ocgqm95",
    "title": "حذف صدای جیر جیر اسکرول موس",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69485063-6818-b__8283.jpg",
    "duration": "07:26",
    "durationSec": 446,
    "visits": 69,
    "date": "2 اردیبهشت 1405"
  },
  {
    "id": "69484638",
    "uid": "uzsrjmf",
    "title": "رفع مشکل فشار کم پمپ اب",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/69484638-8087-b__4418.jpg",
    "duration": "03:27",
    "durationSec": 207,
    "visits": 2489,
    "date": "29 فروردین 1405"
  },
  {
    "id": "69552331",
    "uid": "gxj7nz2",
    "title": "تعویض شناور کولر : روش تعویض شناور کولر آبی",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/69552331-8444-b__8048.jpg",
    "duration": "06:01",
    "durationSec": 361,
    "visits": 1084,
    "date": "30 اردیبهشت 1405"
  },
  {
    "id": "69481683",
    "uid": "rzwzq2x",
    "title": "سرویس و تنظیم چشمی های شیشه شور خودرو",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/69481683-9959-b__2439.jpg",
    "duration": "02:10",
    "durationSec": 130,
    "visits": 138,
    "date": "26 فروردین 1405"
  },
  {
    "id": "69481535",
    "uid": "dhhp779",
    "title": "نصب چوب لباسی روی درهای فلزی",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/69481535-4339-b__5186.jpg",
    "duration": "02:13",
    "durationSec": 133,
    "visits": 116,
    "date": "22 فروردین 1405"
  },
  {
    "id": "67531907",
    "uid": "wtc4339",
    "title": "زنگ آیفون صدا نداره؟   آموزش کامل تعمیر در خانه",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/67531907-8468-b__6525.jpg",
    "duration": "07:08",
    "durationSec": 428,
    "visits": 13349,
    "date": "30 آذر 1404"
  },
  {
    "id": "67440701",
    "uid": "qoymp36",
    "title": "⬜ سفید کردن زردی دوغاب سرامیک : چگونه درزهای سیاه کاشی را سفید کنیم؟ ⬜",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67440701-2642-b__7415.jpg",
    "duration": "05:09",
    "durationSec": 309,
    "visits": 3288,
    "date": "24 آذر 1404"
  },
  {
    "id": "67441510",
    "uid": "iksdvpl",
    "title": "ضافه کردن پریز : آموزش صفر تا صد انشعاب گرفتن از پریز برق",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/67441510-7867-b__3595.jpg",
    "duration": "00:39",
    "durationSec": 39,
    "visits": 345,
    "date": "23 آذر 1404"
  },
  {
    "id": "67440199",
    "uid": "hmf7289",
    "title": "‪‪  در گیر می‌کنه؟ خودت درستش کن! ️",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67440199-8821-b__9517.jpg",
    "duration": "00:21",
    "durationSec": 21,
    "visits": 30,
    "date": "23 آذر 1404"
  },
  {
    "id": "67334492",
    "uid": "lpwhbm8",
    "title": "در گیر می‌کنه؟ خودت درستش کن!",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67334492-9054-b__4896.jpg",
    "duration": "04:47",
    "durationSec": 287,
    "visits": 3997,
    "date": "16 آذر 1404"
  },
  {
    "id": "67260564",
    "uid": "ernd74r",
    "title": "آموزش اضافه کردن پریز",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/67260564-8803-b__5919.jpg",
    "duration": "08:58",
    "durationSec": 538,
    "visits": 759,
    "date": "11 آذر 1404"
  },
  {
    "id": "67172036",
    "uid": "bap5w8w",
    "title": "پوشاندن جای سوراخ دریل روی دیوار و سرامیک",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67172036-7541-b__9542.jpg",
    "duration": "00:27",
    "durationSec": 27,
    "visits": 363,
    "date": "5 آذر 1404"
  },
  {
    "id": "67156891",
    "uid": "iwb414i",
    "title": "پر کردن سوراخ ها : ترمیم سوراخ های باقیمانده از دریل کار ی روی دیوارها",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67156891-9867-b__5420.jpg",
    "duration": "04:59",
    "durationSec": 299,
    "visits": 2911,
    "date": "4 آذر 1404"
  },
  {
    "id": "67041204",
    "uid": "xng65to",
    "title": "نحوه ی نصب جا حوله ای ️ در 5 دقیقه خودت جا حوله ای رو نصب کن",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/67041204-6030-b__3838.jpg",
    "duration": "05:40",
    "durationSec": 340,
    "visits": 806,
    "date": "25 آبان 1404"
  },
  {
    "id": "66965807",
    "uid": "kixj787",
    "title": "اسپرسوساز در خانه  | رسوب‌زدایی ارزان و آسان فقط با سرکه!",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66965807-1802-b__3945.jpg",
    "duration": "05:28",
    "durationSec": 328,
    "visits": 9823,
    "date": "19 آبان 1404"
  },
  {
    "id": "66867587",
    "uid": "zbw4oi9",
    "title": "با یه قاشق اینطوری  ایمن و سریع کنسرو باز کن!",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/66867587-5401-b__9803.jpg",
    "duration": "01:07",
    "durationSec": 67,
    "visits": 2773,
    "date": "11 آبان 1404"
  },
  {
    "id": "66794220",
    "uid": "jsuihve",
    "title": "لباسشویی هوشمند  : فقط یه اسم نیست، واقعاً هوشمنده!",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66794220-3016-b__3191.jpg",
    "duration": "15:42",
    "durationSec": 942,
    "visits": 60,
    "date": "6 آبان 1404"
  },
  {
    "id": "66695746",
    "uid": "bav370x",
    "title": "۸ راز یک اسپرسوی ️ عالی در خانه",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66695746-9858-b__5305.jpg",
    "duration": "06:38",
    "durationSec": 398,
    "visits": 65,
    "date": "27 مهر 1404"
  },
  {
    "id": "66606060",
    "uid": "nsa6125",
    "title": "️ نصب جا دستمال کاغذی : قبل از خرید جادستمالی این ویدیو رو ببین",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/66606060-8912-b__1760.jpg",
    "duration": "08:14",
    "durationSec": 494,
    "visits": 1599,
    "date": "20 مهر 1404"
  },
  {
    "id": "66538922",
    "uid": "pijh60l",
    "title": "جمع آوری کولرآبی : هفت کار برای جمع آوری کولر آبی در پاییز",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66538922-8812-b__7279.jpg",
    "duration": "08:38",
    "durationSec": 518,
    "visits": 1203,
    "date": "15 مهر 1404"
  },
  {
    "id": "66538814",
    "uid": "vbtljyw",
    "title": "رفع مشکل فشار کم آب گرم؟ راه‌ حل ساده !",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/66538814-7194-b__1683.jpg",
    "duration": "05:43",
    "durationSec": 343,
    "visits": 20370,
    "date": "15 مهر 1404"
  },
  {
    "id": "66538748",
    "uid": "hymm4e1",
    "title": "بستن دریچه ی کولر:  بستن و ایزوله کردن کولر آبی در فصول بلا استفاده",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66538748-6359-b__7690.jpg",
    "duration": "04:27",
    "durationSec": 267,
    "visits": 11180,
    "date": "15 مهر 1404"
  },
  {
    "id": "66537571",
    "uid": "vghge8f",
    "title": "تعمیر فندک اجاق گاز در خانه",
    "cat": "electrical",
    "catNameFa": "برق و سیم‌کشی",
    "catNameEn": "Electrical",
    "poster": "https://static.cdn.asset.aparat.com/avt/66537571-4103-b__6972.jpg",
    "duration": "08:45",
    "durationSec": 525,
    "visits": 23966,
    "date": "15 مهر 1404"
  },
  {
    "id": "66440669",
    "uid": "tvky294",
    "title": "جرم‌گیری طبیعی و ارگانیک ماشین ظرفشویی (بدون مواد شیمیایی!)",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/66440669-5951-b__5140.jpg",
    "duration": "04:59",
    "durationSec": 299,
    "visits": 980,
    "date": "6 مهر 1404"
  },
  {
    "id": "65950719",
    "uid": "xbl9u2n",
    "title": "️ رازهای تمپ کردن قهوه برای فوم عالی!",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/65950719-4082-b__7193.jpg",
    "duration": "06:48",
    "durationSec": 408,
    "visits": 3027,
    "date": "2 شهریور 1404"
  },
  {
    "id": "65786326",
    "uid": "wcra0bs",
    "title": "تعمیر یا تعویض خرطومی :     چطور خرطومی پاره جارو برقی رو تعمیر یا تعویض کنیم؟",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/65786326-1048-b__9188.jpg",
    "duration": "05:00",
    "durationSec": 300,
    "visits": 5203,
    "date": "22 مرداد 1404"
  },
  {
    "id": "65537235",
    "uid": "xto78fg",
    "title": "مورچه‌ها رو فراری بده! بدون سم",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/65537235-3211-b__3687.jpg",
    "duration": "01:28",
    "durationSec": 88,
    "visits": 746,
    "date": "7 مرداد 1404"
  },
  {
    "id": "65514769",
    "uid": "etfry1n",
    "title": "تعمیر پین شکسته :  چطور یک پین شکسته رو ترمیم کنیم؟!",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/65514769-9411-b__2680.jpg",
    "duration": "05:36",
    "durationSec": 336,
    "visits": 454,
    "date": "5 مرداد 1404"
  },
  {
    "id": "65404070",
    "uid": "bqzo59u",
    "title": "در آوردن کشو :  آموزش اصولی درآوردن کشوی ریل‌دار",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/65404070-5594-b__2710.jpg",
    "duration": "05:22",
    "durationSec": 322,
    "visits": 17648,
    "date": "29 تیر 1404"
  },
  {
    "id": "65268356",
    "uid": "lca2l02",
    "title": "شاید کسی نبود پشتت باشه ولی من بهت افتخار می کنم",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/65268356-1324-b__8461.jpg",
    "duration": "00:15",
    "durationSec": 15,
    "visits": 32,
    "date": "20 تیر 1404"
  },
  {
    "id": "65257295",
    "uid": "ixk6z4p",
    "title": "رفع لک ظروف 5  کار ساده برای ظرف‌های همیشه تمیز و بدون شوره",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/65257295-8914-b__7643.jpg",
    "duration": "05:03",
    "durationSec": 303,
    "visits": 477,
    "date": "19 تیر 1404"
  },
  {
    "id": "65108484",
    "uid": "czxw9t6",
    "title": "جرم گیری ماشین لباسشویی",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/65108484-9266-b__2109.jpg",
    "duration": "12:50",
    "durationSec": 770,
    "visits": 5699,
    "date": "8 تیر 1404"
  },
  {
    "id": "64834128",
    "uid": "ajpc0gn",
    "title": "رفع صدای جیر جیر کولر : تنظیم تسمه ی کولر آبی",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/64834128-1650-b__3681.jpg",
    "duration": "06:00",
    "durationSec": 360,
    "visits": 26399,
    "date": "17 خرداد 1404"
  },
  {
    "id": "64645654",
    "uid": "dhqc738",
    "title": "سرویس کولر سلولزی : چگونه کولرهای سلولزی را سرویس  و راه اندازی کنیم ؟",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/64645654-6834-b__8468.jpg",
    "duration": "12:45",
    "durationSec": 765,
    "visits": 18908,
    "date": "3 خرداد 1404"
  },
  {
    "id": "64606907",
    "uid": "dky5vhp",
    "title": "رفع مشکل افتادگی در کابینت و بی‌صدا کردن درهای کمد و کابینت️",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/64606907-7665-b__8176.jpg",
    "duration": "06:07",
    "durationSec": 367,
    "visits": 14696,
    "date": "31 اردیبهشت 1404"
  },
  {
    "id": "64388981",
    "uid": "smc3ksn",
    "title": "️سبد زنگ‌زده؟ این راهکار رو از دست نده !",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/64388981-6175-b__6442.jpg",
    "duration": "05:21",
    "durationSec": 321,
    "visits": 2497,
    "date": "14 اردیبهشت 1404"
  },
  {
    "id": "64159884",
    "uid": "ffy3k24",
    "title": "پاکش نکن . پاک اسکرین بذار",
    "cat": "tools",
    "catNameFa": "شنبه ابزار و ترفند",
    "catNameEn": "Saturday Tools",
    "poster": "https://static.cdn.asset.aparat.com/avt/64159884-1623-b__9359.jpg",
    "duration": "01:35",
    "durationSec": 95,
    "visits": 43,
    "date": "28 فروردین 1404"
  },
  {
    "id": "63968341",
    "uid": "qer2173",
    "title": "ترمیم کاغذ دیواری",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/63968341-8327-b__3486.jpg",
    "duration": "11:24",
    "durationSec": 684,
    "visits": 7725,
    "date": "14 فروردین 1404"
  },
  {
    "id": "63957864",
    "uid": "ojsiw0w",
    "title": "روش جمع کردن چادر مسافرتی",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/63957864-5605-b__8669.jpg",
    "duration": "04:48",
    "durationSec": 288,
    "visits": 73463,
    "date": "13 فروردین 1404"
  },
  {
    "id": "62087108",
    "uid": "fjt30d2",
    "title": "** 3 نکته طلایی برای تنظیم درب کابینت!**",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/62087108-3042-b__6398.jpg",
    "duration": "00:42",
    "durationSec": 42,
    "visits": 1161,
    "date": "19 آذر 1403"
  },
  {
    "id": "61584623",
    "uid": "knlu9fj",
    "title": "بستن دریچه ی کولر",
    "cat": "appliances",
    "catNameFa": "لوازم خانگی",
    "catNameEn": "Appliances",
    "poster": "https://static.cdn.asset.aparat.com/avt/61584623-1929-b__5259.jpg",
    "duration": "04:27",
    "durationSec": 267,
    "visits": 6375,
    "date": "14 آبان 1403"
  },
  {
    "id": "61494764",
    "uid": "wxc7s8k",
    "title": "ترمیم ایزوگام پشت بام : راهنمای گام به گام! ️",
    "cat": "home",
    "catNameFa": "درب و ساختمان",
    "catNameEn": "Wood & Home",
    "poster": "https://static.cdn.asset.aparat.com/avt/61494764-2960-b__4767.jpg",
    "duration": "04:34",
    "durationSec": 274,
    "visits": 15112,
    "date": "7 آبان 1403"
  },
  {
    "id": "59620064",
    "uid": "qosn106",
    "title": "رفع مشکل کم فشاری آب : چند راه حل برای پر فشار کردن آب",
    "cat": "plumbing",
    "catNameFa": "لوله‌کشی و پمپ",
    "catNameEn": "Plumbing & Pump",
    "poster": "https://static.cdn.asset.aparat.com/avt/59620064-2744-b__8527.jpg",
    "duration": "04:02",
    "durationSec": 242,
    "visits": 13981,
    "date": "10 تیر 1403"
  }
];

(function initAparatAutoSync() {
  const APARAT_USERNAME = 'skilldads';
  const APARAT_API_URL = 'https://www.aparat.com/etc/api/videoByUser/username/' + APARAT_USERNAME + '/perpage/100';
  const APARAT_INFO_URL = 'https://www.aparat.com/api/fa/v1/user/user/information/username/' + APARAT_USERNAME;

  // 1. Detect Category by Video Title
  function detectCategory(title) {
    const t = (title || '').toLowerCase();
    if (t.includes('کولر') || t.includes('اسپرسو') || t.includes('لباسشویی') || t.includes('ظرفشویی') || t.includes('یخچال') || t.includes('کندانسور') || t.includes('مخلوط کن') || t.includes('جارو') || t.includes('پکیج')) {
      return { key: 'appliances', nameFa: 'کولر و لوازم خانگی', nameEn: 'Appliances & HVAC' };
    }
    if (t.includes('آب') || t.includes('پمپ') || t.includes('لوله') || t.includes('شیر') || t.includes('اسیدشویی') || t.includes('فشار آب') || t.includes('هواگیری') || t.includes('کارتریج') || t.includes('سرشیر') || t.includes('دوش') || t.includes('شناور') || t.includes('سیفون') || t.includes('آب پاش') || t.includes('سردوشی')) {
      return { key: 'plumbing', nameFa: 'لوله‌کشی و پمپ آب', nameEn: 'Plumbing & Pump' };
    }
    if (t.includes('برق') || t.includes('پریز') || t.includes('کلید') || t.includes('فیوز') || t.includes('آیفون') || t.includes('دوشاخ') || t.includes('سه شاخ') || t.includes('سه شاخی') || t.includes('گاز') || t.includes('سیم') || t.includes('لامپ')) {
      return { key: 'electrical', nameFa: 'برق، گاز و آیفون', nameEn: 'Electrical & Gas' };
    }
    if (t.includes('کابینت') || t.includes('لولا') || t.includes('درب') || t.includes('در ') || t.includes('درهای') || t.includes('کمد') || t.includes('کشو') || t.includes('دیوار') || t.includes('سرامیک') || t.includes('کاشی') || t.includes('ایزوگام') || t.includes('ساختمان') || t.includes('کاغذ دیواری') || t.includes('چوب لباسی') || t.includes('جا حوله') || t.includes('جا دستمال')) {
      return { key: 'home', nameFa: 'درب، کمد و ساختمان', nameEn: 'Wood & Home' };
    }
    if (t.includes('کباب') || t.includes('آشپزی') || t.includes('گوشت') || t.includes('سه تار') || t.includes('سه‌تار') || t.includes('موسیقی') || t.includes('مضراب') || t.includes('نت')) {
      return { key: 'lifestyle', nameFa: 'آشپزی و سه‌تار', nameEn: 'Cooking & Music' };
    }
    return { key: 'tools', nameFa: 'شنبه ابزار و ترفند', nameEn: 'Saturday Tools' };
  }

  // 2. Format Duration Seconds to MM:SS
  function formatDuration(sec) {
    if (!sec || isNaN(sec)) return '05:00';
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  // Detect if user is likely outside Iran (International Visitor)
  function isInternationalVisitor() {
    try {
      if (document.documentElement.lang === 'en') return true;
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (tz && !tz.includes('Tehran') && !tz.includes('Iran')) {
        return true;
      }
    } catch(e) {}
    return false;
  }

  // Smart YouTube Reachability Probe & Live Network State
  let currentVideoSource = 'aparat'; // default safe domestic
  let isYouTubeReachable = false;
  let isProbing = false;
  let userManuallySelected = false;

  // Smart Probe: checks if visitor can reach YouTube in real-time (Dual Fetch + Image probe)
  async function probeYouTubeConnectivity() {
    if (isProbing) return;
    isProbing = true;

    const statusBar = document.getElementById('sourceStatusBar');
    if (statusBar && !statusBar.classList.contains('status-vpn-ok') && !statusBar.classList.contains('status-domestic')) {
      statusBar.className = 'source-status-bar status-probing';
    }

    const reachable = await new Promise((resolve) => {
      let resolved = false;
      const controller = new AbortController();
      const timeoutMs = 1700;

      const finish = (result) => {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          try { controller.abort(); } catch(e) {}
          resolve(result);
        }
      };

      const timer = setTimeout(() => {
        finish(false);
      }, timeoutMs);

      const probeUrl = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg?_cb=' + Date.now();

      // Channel 1: Strict CORS fetch to YouTube CDN (fails if blocked or hijacked by ISP filtering)
      fetch(probeUrl, {
        mode: 'cors',
        cache: 'no-store',
        signal: controller.signal
      }).then((res) => {
        if (res.ok) {
          finish(true);
        } else {
          finish(false);
        }
      }).catch(() => {
        // Network error, connection reset, or CORS drop by filtering
      });

      // Channel 2: Genuine YouTube CDN thumbnail image object
      try {
        const probeImg = new Image();
        probeImg.onload = () => { finish(true); };
        probeImg.onerror = () => { finish(false); };
        probeImg.src = probeUrl;
      } catch(e) {}
    });

    isYouTubeReachable = reachable;
    isProbing = false;

    // Absolute Network Truth:
    // If YouTube is unreachable -> ALWAYS Aparat (Domestic Mode), regardless of manual toggle
    // If YouTube is reachable -> Auto-activate YouTube (unless user specifically selected Aparat in this session)
    let newSource = 'aparat';
    if (reachable) {
      newSource = (userManuallySelected && currentVideoSource === 'aparat') ? 'aparat' : 'youtube';
    } else {
      userManuallySelected = false; // Reset if VPN disconnected
      newSource = 'aparat';
    }

    if (currentVideoSource !== newSource || !window.__sourceInitialized) {
      window.__sourceInitialized = true;
      currentVideoSource = newSource;
      updateSourceUI();
    } else {
      updateSourceUIStateOnly();
    }
  }

  function updateSourceUIStateOnly() {
    const isEn = document.documentElement.lang === 'en';
    const statusBar = document.getElementById('sourceStatusBar');
    const statusText = document.getElementById('sourceStatusText');
    const btnAparat = document.getElementById('btnSourceAparat');
    const btnYoutube = document.getElementById('btnSourceYoutube');
    const ytBanner = document.getElementById('ytChannelBanner');
    const domesticNotice = document.getElementById('domesticVpnNotice');

    if (btnAparat && btnYoutube) {
      if (currentVideoSource === 'youtube') {
        btnYoutube.classList.add('active');
        btnAparat.classList.remove('active');
      } else {
        btnAparat.classList.add('active');
        btnYoutube.classList.remove('active');
      }
    }

    if (ytBanner) {
      ytBanner.style.display = (currentVideoSource === 'youtube') ? 'flex' : 'none';
      ytBanner.classList.toggle('show', currentVideoSource === 'youtube');
    }

    if (domesticNotice) {
      domesticNotice.style.display = (currentVideoSource === 'aparat') ? 'flex' : 'none';
    }

    if (statusBar && statusText) {
      statusBar.className = 'source-status-bar';
      if (currentVideoSource === 'youtube') {
        statusBar.classList.add('status-vpn-ok');
        statusText.innerHTML = isEn ?
          '✅ <strong>YouTube Mode Active:</strong> Full library of 195+ guides unlocked (VPN / Global).' :
          '✅ <strong>اتصال یوتیوب فعال است (فیلترشکن روشن):</strong> دسترسی به آرشیو کامل ۱۹۵ آموزش بدون محدودیت.';
      } else {
        statusBar.classList.add('status-domestic');
        statusText.innerHTML = isEn ?
          '🇮🇷 <strong>Aparat Domestic Mode:</strong> Direct streaming without VPN requirement.' :
          '🇮🇷 <strong>شبکه داخلی (آپارات):</strong> تماشای روان آموزش‌ها بدون نیاز به فیلترشکن با ترافیک داخلی.';
      }
    }
  }

  function updateSourceUI() {
    updateSourceUIStateOnly();

    // Render corresponding video collection
    if (currentVideoSource === 'youtube') {
      const ytList = (typeof YOUTUBE_OFFLINE_DATABASE !== 'undefined' && Array.isArray(YOUTUBE_OFFLINE_DATABASE)) ? YOUTUBE_OFFLINE_DATABASE : [];
      renderAllVideos(ytList.length > 0 ? ytList : APARAT_OFFLINE_DATABASE);
      updateStatCounter(195);
    } else {
      renderAllVideos(APARAT_OFFLINE_DATABASE);
      updateStatCounter(Math.max(72, APARAT_OFFLINE_DATABASE.length));
    }
  }

  window.setSkillDadVideoSource = function(src) {
    if (src !== 'youtube' && src !== 'aparat') return;

    if (src === 'youtube' && !isYouTubeReachable) {
      alert('❌ اتصال به سرورهای یوتیوب برقرار نشد.\n\nبه دلیل محدودیت‌های شبکه، برای مشاهده ۱۹۵ ویدیوی یوتیوب لطفاً ابتدا فیلترشکن خود را روشن فرمایید.');
      return;
    }

    userManuallySelected = true;
    currentVideoSource = src;
    updateSourceUI();
  };

  // Global Video Modal Handler with Dual Platform Support
  window.openSkillDadVideo = function(uid, titleEncoded, ytId) {
    const title = decodeURIComponent(titleEncoded || '');
    const cleanTitle = title.replace(/[:|!]/g, ' ').trim();
    const ytUrl = ytId ? 
      ('https://www.youtube.com/watch?v=' + ytId) : 
      ('https://www.youtube.com/results?search_query=SkillDad+' + encodeURIComponent(cleanTitle));
    const apUrl = 'https://www.aparat.com/v/' + uid;

    if (currentVideoSource === 'youtube') {
      window.open(ytUrl, '_blank');
      return;
    }

    const modal = document.getElementById('videoLightbox');
    if (modal) {
      const titleEl = document.getElementById('lightboxTitle');
      if (titleEl) titleEl.textContent = title;
      
      const descEl = document.getElementById('lightboxDesc');
      if (descEl) {
        descEl.innerHTML = '🎬 <strong>پخش مستقیم:</strong> شما می‌توانید این ویدیو را در <strong>آپارات</strong> (پیش‌فرض ایران) یا مستقیماً در <strong>یوتیوب</strong> تماشا فرمایید.';
      }

      const ytBtn = document.getElementById('btnYtLink');
      if (ytBtn) {
        ytBtn.href = ytUrl;
        ytBtn.onclick = function(e) { e.preventDefault(); window.open(ytUrl, '_blank'); };
      }

      const apBtn = document.getElementById('btnApLink');
      if (apBtn) {
        apBtn.href = apUrl;
        apBtn.onclick = function(e) { e.preventDefault(); window.open(apUrl, '_blank'); };
      }

      modal.classList.add('active');
      modal.style.display = 'flex';
      return;
    }

    // Direct fallback
    window.open(apUrl, '_blank');
  };

  window.closeVideoModal = function() {
    const modal = document.getElementById('videoLightbox');
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  };

  // 3. Render All Videos into #videosGrid (Only for full videos archive page)
  function renderAllVideos(videos) {
    const grid = document.getElementById('videosGrid') || document.getElementById('videoGrid');
    if (!grid || !Array.isArray(videos) || videos.length === 0) return;

    const isEn = document.documentElement.lang === 'en';
    const isYt = currentVideoSource === 'youtube';

    grid.innerHTML = videos.map((v, idx) => {
      const cat = detectCategory(v.title);
      const catKey = v.cat || cat.key;
      const catName = isEn ? (v.catNameEn || cat.nameEn) : (v.catNameFa || cat.nameFa);
      
      // Authentic high-res thumbnail with fallback
      let poster = '';
      let fallbackPoster = '';
      if (isYt || v.ytUrl) {
        poster = v.poster || ('https://img.youtube.com/vi/' + (v.id || v.ytId) + '/hqdefault.jpg');
        fallbackPoster = v.fallbackPoster || ('https://i.ytimg.com/vi/' + (v.id || v.ytId) + '/mqdefault.jpg');
      } else {
        poster = v.poster || v.big_poster || v.small_poster || 'assets/img/profile.jpg';
        fallbackPoster = 'assets/img/profile.jpg';
      }

      const durationStr = v.duration || formatDuration(v.durationSec || v.duration);
      const isNew = idx < 3;
      const safeTitle = v.title.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const encodedTitle = encodeURIComponent(v.title);
      const cleanTitle = v.title.replace(/[:|!]/g, ' ').trim();
      const ytUrl = (v.id && !v.uid) ? ('https://www.youtube.com/watch?v=' + v.id) : (v.ytId ? ('https://www.youtube.com/watch?v=' + v.ytId) : ('https://www.youtube.com/results?search_query=SkillDad+' + encodeURIComponent(cleanTitle)));
      const apUrl = v.uid ? ('https://www.aparat.com/v/' + v.uid) : ('https://www.aparat.com/search/' + encodeURIComponent(cleanTitle));
      const targetUrl = isYt ? ytUrl : apUrl;

      return '<div class="video-card" data-cat="' + catKey + '" data-id="' + (v.id || v.uid) + '" onclick="window.open(\'' + targetUrl + '\', \'_blank\')">' +
        '<div class="video-thumb">' +
          '<img src="' + poster + '" alt="' + safeTitle + '" loading="lazy" referrerpolicy="no-referrer" onerror="if(!this.dataset.fb){this.dataset.fb=1;this.src=\'' + fallbackPoster + '\';}">' +
          '<span class="vid-cat">' + catName + '</span>' +
          '<span class="vid-duration">' + durationStr + '</span>' +
          (isNew ? '<span style="position: absolute; top: 8px; right: 8px; background: #ef4444; color: #fff; font-size: 0.72rem; font-weight: bold; padding: 2px 7px; border-radius: 4px;">جدید ⚡</span>' : '') +
          (isYt ? '<span style="position: absolute; top: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.68rem; font-weight: bold; padding: 2px 6px; border-radius: 4px;">YouTube 🔴</span>' : '') +
          '<div class="play-circle">▶</div>' +
        '</div>' +
        '<div class="video-body">' +
          '<h4 class="vid-title">' + v.title.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</h4>' +
          '<div class="vid-footer" style="display: flex; justify-content: space-between; align-items: center; gap: 6px; margin-top: 10px;">' +
            (isYt ? 
              ('<a href="' + ytUrl + '" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="background: #dc2626; border-color: #dc2626; color: #fff; font-size: 0.76rem; padding: 4px 10px; text-decoration: none; width: 100%; justify-content: center;" onclick="event.stopPropagation();">🔴 تماشا در یوتیوب</a>') :
              ('<a href="' + apUrl + '" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="font-size: 0.76rem; padding: 4px 10px; text-decoration: none; width: 100%; justify-content: center;" onclick="event.stopPropagation();">📺 تماشا در آپارات</a>')
            ) +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');

    // Re-apply filter if active tab is not 'all'
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) {
      const filter = activeTab.getAttribute('data-filter') || 'all';
      if (filter !== 'all') {
        grid.querySelectorAll('.video-card').forEach(card => {
          if (card.getAttribute('data-cat') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }
    }
  }

  // 4. Update Header Stats Counter
  function updateStatCounter(totalCount) {
    const isYt = currentVideoSource === 'youtube';
    const effectiveCount = isYt ? 195 : Math.max(72, parseInt(totalCount, 10) || 72);
    const isEn = document.documentElement.lang === 'en';

    const aparatEl = document.getElementById('statValAparat');
    if (aparatEl) {
      aparatEl.setAttribute('data-target', effectiveCount.toString());
      aparatEl.textContent = isEn ? effectiveCount + '+' : effectiveCount.toLocaleString('fa-IR') + '+';
    }
    const footerGuides = document.getElementById('footerGuidesCounter');
    if (footerGuides) {
      footerGuides.textContent = isEn ? effectiveCount + '+' : effectiveCount.toLocaleString('fa-IR') + '+';
    }
    const filterAllTab = document.querySelector('.filter-tab[data-filter="all"]');
    if (filterAllTab) {
      if (isYt) {
        filterAllTab.textContent = isEn ? 'All Videos (195+ Full Guides)' : 'همه ویدیوها (۱۹۵ آموزش یوتیوب)';
      } else {
        filterAllTab.textContent = isEn ? 'All Videos (' + effectiveCount + ' Live Guides)' : 'همه ویدیوها (' + effectiveCount.toLocaleString('fa-IR') + ' آموزش آپارات)';
      }
    }
  }

  // 5. Initialize Channel Data & Live Sync
  function initChannelData() {
    const isVideosArchive = document.getElementById('videosGrid') || document.getElementById('videoGrid');
    if (!isVideosArchive) return;

    // 5.1 Determine initial list
    let initialList = APARAT_OFFLINE_DATABASE;
    try {
      const cached = localStorage.getItem('skilldad_cached_aparat_videos');
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length >= APARAT_OFFLINE_DATABASE.length) {
          initialList = parsed;
        }
      }
    } catch(e) {}

    renderAllVideos(initialList);
    updateStatCounter(Math.max(72, initialList.length));

    // Trigger Smart YouTube & VPN Connectivity Probe
    probeYouTubeConnectivity();

    // 5.2 Fetch Live Info (Exact Count)
    fetch(APARAT_INFO_URL)
      .then(res => res.json())
      .then(json => {
        const liveCnt = parseInt(json && json.data && json.data.attributes && json.data.attributes.video_cnt, 10);
        if (liveCnt > 0) {
          const finalCnt = Math.max(72, liveCnt);
          updateStatCounter(finalCnt);
          localStorage.setItem('skilldad_aparat_cnt', finalCnt.toString());
        }
      })
      .catch(() => {});

    // 5.3 Fetch Live Video List for new uploads
    fetch(APARAT_API_URL)
      .then(res => res.json())
      .then(json => {
        const list = json && json.videobyuser;
        if (Array.isArray(list) && list.length > 0) {
          const seen = new Set();
          const merged = [];
          
          list.forEach(v => {
            const uid = v.uid || v.id;
            if (!uid || seen.has(uid)) return;
            seen.add(uid);
            const cat = detectCategory(v.title);
            merged.push({
              id: v.id,
              uid: uid,
              title: v.title,
              cat: cat.key,
              catNameFa: cat.nameFa,
              catNameEn: cat.nameEn,
              poster: v.big_poster || v.small_poster,
              duration: formatDuration(v.duration),
              durationSec: v.duration,
              visits: v.visit_cnt || 0,
              date: v.sdate || ''
            });
          });

          APARAT_OFFLINE_DATABASE.forEach(v => {
            if (!seen.has(v.uid)) {
              seen.add(v.uid);
              merged.push(v);
            }
          });

          renderAllVideos(merged);
          updateStatCounter(merged.length);
          localStorage.setItem('skilldad_cached_aparat_videos', JSON.stringify(merged));
        }
      })
      .catch(() => {});

    // Real-time network & VPN toggle detection
    window.addEventListener('focus', () => {
      setTimeout(probeYouTubeConnectivity, 250);
    });
    window.addEventListener('online', () => {
      setTimeout(probeYouTubeConnectivity, 300);
    });
    // Silent heartbeat probe every 3.5 seconds to immediately detect VPN on/off
    setInterval(probeYouTubeConnectivity, 3500);
  }

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChannelData);
  } else {
    initChannelData();
  }
})();
