"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type Locale = "en" | "id" | "zh" | "cn" | "fr" | "ko" | "ja" | "ru";

const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
  { code: "zh", label: "中文" },
  { code: "cn", label: "简体中文" },
  { code: "fr", label: "FR" },
  { code: "ko", label: "KO" },
  { code: "ja", label: "JP" },
  { code: "ru", label: "RU" },
];

const areas = ["Seminyak", "Canggu", "Kuta", "Ubud", "Nusa Dua", "Sanur", "Uluwatu", "Pererenan"];
const whatsappNumber = "6282146691100";

const content = {
  en: {
    nav: ["Services", "How it works", "Policy", "Areas", "FAQ"],
    hero: {
      eyebrow: "Home, villa, and hotel massage service in Bali",
      title: "No need to visit a spa. Enjoy premium massage at your place in Bali.",
      copy: "Kembang Bali Home Spa Service brings professional therapeutic massage, body care, and couple treatments directly to your villa, hotel, or home across Bali.",
      primary: "Chat now - check availability",
      secondary: "View treatments",
      proof: ["Starting from IDR 250k / 60 mins", "Therapist transportation included", "Certified professional therapists", "Available daily"],
    },
    booking: ["Location", "Villa, hotel, or home", "Timing", "Same-day or scheduled", "Need", "Massage, scrub, facial, hair ritual", "Instant booking"],
    servicesEyebrow: "Treatment menu",
    servicesTitle: "Filtered service menu for faster booking",
    servicesCopy: "The menu focuses on high-intent treatments guests naturally search for in Bali: classic massage, sun recovery, pregnancy care, couple massage, and simple add-on rituals.",
    serviceBook: "Book via WhatsApp",
    services: [
      {
        name: "Pregnancy Relaxing Massage",
        tag: "Prenatal care",
        text: "Gentle support for expecting mothers, focused on relaxation, comfort, back tension, and better rest.",
        rates: ["60 mins / IDR 250k"],
      },
      {
        name: "Foot Massage",
        tag: "Quick relief",
        text: "Focused foot therapy to release tired legs after walking, travel, shopping, surf days, or long flights.",
        rates: ["60 mins / IDR 150k"],
      },
      {
        name: "Lymphatic Massage",
        tag: "Body reset",
        text: "Light rhythmic massage to support circulation, reduce heaviness, and help the body feel refreshed.",
        rates: ["60 mins / IDR 250k"],
      },
      {
        name: "Balinese Massage",
        tag: "Classic Bali",
        text: "A traditional full-body massage with warm oil, flowing palm pressure, and gentle stretches.",
        rates: ["60 mins / IDR 200k"],
      },
      {
        name: "Deep Tissue Massage",
        tag: "Strong pressure",
        text: "Firm pressure massage for tight shoulders, back tension, tired muscles, and deeper body recovery.",
        rates: ["60 mins / IDR 300k"],
      },
      {
        name: "Lomi Lomi Massage",
        tag: "Flowing touch",
        text: "Long, flowing movements inspired by Hawaiian bodywork for deep relaxation and softer muscle release.",
        rates: ["60 mins / IDR 300k"],
      },
      {
        name: "Aromatic Relaxing Massage",
        tag: "Calm ritual",
        text: "A gentle aromatic oil massage for stress relief, better rest, and a peaceful spa feeling at your stay.",
        rates: ["60 mins / IDR 250k"],
      },
      {
        name: "Hot Stone Massage",
        tag: "Warm therapy",
        text: "Heated stones and relaxing massage pressure to melt tension and create a deeper sense of calm.",
        image: "/images/hot-stone-massage.png",
        rates: ["90 mins / IDR 500k"],
      },
    ],
    howEyebrow: "How it works",
    howTitle: "Getting your mobile massage is simple.",
    steps: [
      ["Message us via WhatsApp", "Tap book now, share your area, preferred time, service, and number of guests."],
      ["Confirm therapist and time", "Our team confirms your slot, therapist availability, and any travel details before payment."],
      ["We prepare the spa setup", "Your therapist arrives with oils, sheets, towels, clean tools, and relaxing music. Treatment is done on the customer's bed."],
    ],
    trust: [
      ["Professional care only", "Therapeutic massage, relaxation, wellness, and body recovery treatments."],
      ["Villa-ready service", "Designed for Bali villas, hotels, homes, retreats, and wedding preparation stays."],
      ["Respectful experience", "Clear boundaries protect both clients and therapists from inappropriate requests."],
    ],
    policyEyebrow: "Official notice",
    policyTitle: "Professional home massage service policy",
    policyIntro: "Kembang Bali Home Spa Service provides professional therapeutic home massage delivered by trained and experienced therapists.",
    policyOfferTitle: "What we offer",
    policyNoTitle: "What we do not provide",
    policyOffers: ["Professional therapeutic massage only", "Relaxation, wellness, and body recovery treatments", "Trained and experienced massage therapists", "Home, villa, and hotel massage service in Bali"],
    policyNos: ["Sensual massage", "Erotic or sexual services", "Special service or similar requests", "Therapist photos or personal pictures"],
    policyNote: "Any inappropriate requests, photos, or behavior will not be accepted. By contacting us via WhatsApp, you confirm that you understand and agree to this policy.",
    areasEyebrow: "Coverage",
    areasTitle: "Relaxation delivered to your door across Bali",
    areasCopy: "Wherever you stay in Bali, our on-call massage team can bring relaxation to your villa, hotel, or home. For remote locations, we confirm travel feasibility before payment.",
    quote: "\"I had an amazing deep tissue massage experience. The therapist was professional, skilled, and made me feel completely relaxed. Highly recommended for quality therapeutic massage in Bali.\"",
    quoteBy: "Guest review",
    ctaTitle: "Ready to turn your room into a peaceful spa escape?",
    ctaCopy: "Send your location and preferred treatment. We will reply with the fastest available slot.",
    ctaButton: "Chat now for fast booking",
    faqEyebrow: "FAQ",
    faqTitle: "Good to know before booking",
    faqs: [
      ["How fast can a therapist arrive?", "Same-day bookings are available from around 90 minutes ahead, depending on your area and therapist availability."],
      ["Do you bring a massage bed?", "No. Treatments are done on the customer's bed. We bring oils, sheets, towels, clean tools, and relaxing music. You only prepare a comfortable, quiet space."],
      ["Can you come to villas and hotels?", "Yes. We serve private villas, hotels, residences, offices, retreats, and wedding preparation locations across Bali."],
      ["How do I book?", "Tap WhatsApp, share your area, service, preferred time, and number of guests. Our team confirms availability and payment."],
    ],
    footerCopy: "Professional home massage and spa rituals across Bali.",
    footerCta: "Book via WhatsApp",
  },
  id: {
    nav: ["Layanan", "Cara booking", "Policy", "Area", "FAQ"],
    hero: {
      eyebrow: "Layanan pijat ke rumah, villa, dan hotel di Bali",
      title: "Tidak perlu ke spa. Nikmati pijat premium di tempat Anda di Bali.",
      copy: "Kembang Bali Home Spa Service menghadirkan pijat terapi profesional, body care, dan treatment couple langsung ke villa, hotel, atau rumah Anda di Bali.",
      primary: "Chat sekarang - cek jadwal",
      secondary: "Lihat treatment",
      proof: ["Mulai IDR 250k / 60 menit", "Transport terapis termasuk", "Terapis profesional tersertifikasi", "Tersedia setiap hari"],
    },
    booking: ["Lokasi", "Villa, hotel, atau rumah", "Waktu", "Hari ini atau terjadwal", "Kebutuhan", "Pijat, scrub, facial, hair ritual", "Booking cepat"],
    servicesEyebrow: "Menu treatment",
    servicesTitle: "Menu layanan yang lebih rapi untuk booking cepat",
    servicesCopy: "Menu difokuskan ke treatment yang paling dicari tamu di Bali: pijat klasik, sun recovery, prenatal, couple massage, dan ritual tambahan sederhana.",
    serviceBook: "Booking via WhatsApp",
    services: [
      {
        name: "Pregnancy Relaxing Massage",
        tag: "Prenatal care",
        text: "Pijat lembut untuk ibu hamil, fokus pada relaksasi, kenyamanan, punggung tegang, dan tidur lebih nyenyak.",
        rates: ["60 menit / IDR 250k"],
      },
      {
        name: "Foot Massage",
        tag: "Quick relief",
        text: "Terapi kaki untuk melepas lelah setelah jalan jauh, perjalanan, shopping, surf day, atau penerbangan panjang.",
        rates: ["60 menit / IDR 150k"],
      },
      {
        name: "Lymphatic Massage",
        tag: "Body reset",
        text: "Pijatan ritmis ringan untuk membantu sirkulasi, mengurangi rasa berat, dan membuat tubuh terasa lebih segar.",
        rates: ["60 menit / IDR 250k"],
      },
      {
        name: "Balinese Massage",
        tag: "Classic Bali",
        text: "Pijat tradisional full-body dengan warm oil, tekanan telapak yang mengalir, dan stretching lembut.",
        rates: ["60 menit / IDR 200k"],
      },
      {
        name: "Deep Tissue Massage",
        tag: "Strong pressure",
        text: "Pijat tekanan kuat untuk bahu kaku, punggung tegang, otot lelah, dan recovery tubuh yang lebih dalam.",
        rates: ["60 menit / IDR 300k"],
      },
      {
        name: "Lomi Lomi Massage",
        tag: "Flowing touch",
        text: "Gerakan panjang dan mengalir ala Hawaiian bodywork untuk relaksasi mendalam dan melepas otot secara lembut.",
        rates: ["60 menit / IDR 300k"],
      },
      {
        name: "Aromatic Relaxing Massage",
        tag: "Calm ritual",
        text: "Pijat lembut dengan aromatic oil untuk stress relief, tidur lebih baik, dan suasana spa yang tenang.",
        rates: ["60 menit / IDR 250k"],
      },
      {
        name: "Hot Stone Massage",
        tag: "Warm therapy",
        text: "Batu hangat dan tekanan pijat relaksasi untuk mencairkan ketegangan dan memberi rasa tenang lebih dalam.",
        image: "/images/hot-stone-massage.png",
        rates: ["90 menit / IDR 500k"],
      },
    ],
    howEyebrow: "Cara booking",
    howTitle: "Booking mobile massage itu simple.",
    steps: [
      ["Chat kami via WhatsApp", "Tap book now, kirim area, waktu pilihan, layanan, dan jumlah tamu."],
      ["Konfirmasi waktu dan terapis", "Tim kami mengonfirmasi slot, ketersediaan terapis, dan detail perjalanan sebelum pembayaran."],
      ["Kami siapkan setup spa", "Terapis datang membawa oil, sheet, towels, alat bersih, dan musik relaksasi. Treatment dilakukan di atas bed customer."],
    ],
    trust: [
      ["Layanan profesional saja", "Pijat terapi, relaksasi, wellness, dan body recovery treatment."],
      ["Siap untuk villa", "Cocok untuk villa, hotel, rumah, retreat, dan persiapan wedding di Bali."],
      ["Pengalaman yang respectful", "Batasan layanan jelas untuk melindungi klien dan terapis dari permintaan tidak pantas."],
    ],
    policyEyebrow: "Official notice",
    policyTitle: "Professional home massage service policy",
    policyIntro: "Kembang Bali Home Spa Service menyediakan layanan pijat terapi profesional ke rumah oleh terapis terlatih dan berpengalaman.",
    policyOfferTitle: "Yang kami sediakan",
    policyNoTitle: "Yang tidak kami sediakan",
    policyOffers: ["Pijat terapi profesional saja", "Treatment relaksasi, wellness, dan pemulihan tubuh", "Terapis pijat terlatih dan berpengalaman", "Layanan pijat rumah, villa, dan hotel di Bali"],
    policyNos: ["Sensual massage", "Layanan erotic atau seksual", "Special service atau permintaan sejenis", "Foto terapis atau foto pribadi"],
    policyNote: "Permintaan, foto, atau perilaku yang tidak pantas tidak akan diterima. Dengan menghubungi kami via WhatsApp, Anda memahami dan menyetujui policy ini.",
    areasEyebrow: "Coverage",
    areasTitle: "Relaksasi datang langsung ke tempat Anda di Bali",
    areasCopy: "Di mana pun Anda menginap di Bali, tim massage on-call kami siap datang ke villa, hotel, atau rumah. Untuk lokasi jauh, kami konfirmasi akses sebelum pembayaran.",
    quote: "\"Deep tissue massage-nya luar biasa. Terapis sangat profesional, terampil, dan membuat saya benar-benar rileks. Sangat direkomendasikan untuk therapeutic massage berkualitas di Bali.\"",
    quoteBy: "Guest review",
    ctaTitle: "Siap mengubah kamar Anda menjadi peaceful spa escape?",
    ctaCopy: "Kirim lokasi dan treatment pilihan. Kami akan membalas dengan slot tercepat yang tersedia.",
    ctaButton: "Chat sekarang untuk booking cepat",
    faqEyebrow: "FAQ",
    faqTitle: "Yang perlu diketahui sebelum booking",
    faqs: [
      ["Seberapa cepat terapis bisa datang?", "Same-day booking tersedia mulai sekitar 90 menit sebelumnya, tergantung area dan ketersediaan terapis."],
      ["Apakah membawa massage bed?", "Tidak. Treatment dilakukan di atas bed customer. Kami membawa oil, sheet, towels, alat bersih, dan musik relaksasi. Anda cukup siapkan ruang yang nyaman dan tenang."],
      ["Bisa datang ke villa dan hotel?", "Bisa. Kami melayani villa pribadi, hotel, residence, kantor, retreat, dan lokasi persiapan wedding di Bali."],
      ["Bagaimana cara booking?", "Tap WhatsApp, kirim area, layanan, waktu pilihan, dan jumlah tamu. Tim kami akan konfirmasi ketersediaan dan pembayaran."],
    ],
    footerCopy: "Professional home massage dan spa ritual di seluruh Bali.",
    footerCta: "Booking via WhatsApp",
  },
  ru: {
    nav: ["Услуги", "Как это работает", "Политика", "Районы", "FAQ"],
    hero: {
      eyebrow: "Массаж на дому, вилле и в отеле на Бали",
      title: "Не нужно ехать в спа. Наслаждайтесь премиальным массажем у себя на Бали.",
      copy: "Kembang Bali Home Spa Service привозит профессиональный терапевтический массаж, уход за телом и процедуры для пар прямо на вашу виллу, в отель или домой на Бали.",
      primary: "Написать - проверить время",
      secondary: "Посмотреть процедуры",
      proof: ["От IDR 250k / 60 мин", "Транспорт терапевта включен", "Сертифицированные профессиональные терапевты", "Доступно ежедневно"],
    },
    booking: ["Локация", "Вилла, отель или дом", "Время", "Сегодня или по расписанию", "Запрос", "Массаж, скраб, уход за лицом, уход за волосами", "Быстрое бронирование"],
    servicesEyebrow: "Меню процедур",
    servicesTitle: "Удобное меню услуг для быстрого бронирования",
    servicesCopy: "Меню сфокусировано на процедурах, которые гости чаще всего ищут на Бали: классический массаж, восстановление после солнца, уход для беременных, массаж для пар и простые дополнительные ритуалы.",
    serviceBook: "Забронировать в WhatsApp",
    services: [
      {
        name: "Pregnancy Relaxing Massage",
        tag: "Уход для беременных",
        text: "Мягкая поддержка для будущих мам с фокусом на расслабление, комфорт, напряжение в спине и более спокойный отдых.",
        rates: ["60 мин / IDR 250k"],
      },
      {
        name: "Foot Massage",
        tag: "Быстрое облегчение",
        text: "Фокусная терапия стоп для усталых ног после прогулок, поездок, шопинга, серфинга или долгого перелета.",
        rates: ["60 мин / IDR 150k"],
      },
      {
        name: "Lymphatic Massage",
        tag: "Перезагрузка тела",
        text: "Легкий ритмичный массаж для поддержки циркуляции, уменьшения тяжести и ощущения свежести в теле.",
        rates: ["60 мин / IDR 250k"],
      },
      {
        name: "Balinese Massage",
        tag: "Классика Бали",
        text: "Традиционный массаж всего тела с теплым маслом, плавным давлением ладонями и мягкой растяжкой.",
        rates: ["60 мин / IDR 200k"],
      },
      {
        name: "Deep Tissue Massage",
        tag: "Сильное давление",
        text: "Глубокий массаж для зажатых плеч, напряженной спины, уставших мышц и более глубокого восстановления.",
        rates: ["60 мин / IDR 300k"],
      },
      {
        name: "Lomi Lomi Massage",
        tag: "Плавное касание",
        text: "Длинные плавные движения в стиле гавайской техники для глубокого расслабления и мягкого освобождения мышц.",
        rates: ["60 мин / IDR 300k"],
      },
      {
        name: "Aromatic Relaxing Massage",
        tag: "Спокойный ритуал",
        text: "Мягкий массаж с ароматическим маслом для снятия стресса, лучшего отдыха и спокойного спа-настроения.",
        rates: ["60 мин / IDR 250k"],
      },
      {
        name: "Hot Stone Massage",
        tag: "Теплая терапия",
        text: "Теплые камни и расслабляющее массажное давление помогают снять напряжение и создать глубокое чувство спокойствия.",
        image: "/images/hot-stone-massage.png",
        rates: ["90 мин / IDR 500k"],
      },
    ],
    howEyebrow: "Как это работает",
    howTitle: "Заказать мобильный массаж очень просто.",
    steps: [
      ["Напишите нам в WhatsApp", "Нажмите кнопку бронирования, отправьте район, желаемое время, услугу и количество гостей."],
      ["Подтверждаем терапевта и время", "Наша команда подтверждает слот, доступность терапевта и детали поездки до оплаты."],
      ["Готовим спа-набор", "Терапевт приезжает с маслами, простынями, полотенцами, чистыми инструментами и расслабляющей музыкой. Процедура проводится на кровати клиента."],
    ],
    trust: [
      ["Только профессиональный уход", "Терапевтический массаж, расслабление, wellness и восстановительные процедуры для тела."],
      ["Готово для вилл", "Сервис подходит для вилл, отелей, домов, ретритов и подготовки к свадьбе на Бали."],
      ["Уважительный опыт", "Четкие границы защищают клиентов и терапевтов от неуместных запросов."],
    ],
    policyEyebrow: "Официальное уведомление",
    policyTitle: "Политика профессионального массажа на дому",
    policyIntro: "Kembang Bali Home Spa Service предоставляет профессиональный терапевтический массаж на дому от обученных и опытных терапевтов.",
    policyOfferTitle: "Что мы предлагаем",
    policyNoTitle: "Что мы не предоставляем",
    policyOffers: ["Только профессиональный терапевтический массаж", "Расслабляющие, wellness и восстановительные процедуры для тела", "Обученные и опытные массажные терапевты", "Массаж на дому, вилле и в отеле на Бали"],
    policyNos: ["Чувственный массаж", "Эротические или сексуальные услуги", "Special service или похожие запросы", "Фотографии терапевтов или личные фотографии"],
    policyNote: "Любые неуместные запросы, фотографии или поведение не принимаются. Связываясь с нами через WhatsApp, вы подтверждаете, что понимаете и принимаете эту политику.",
    areasEyebrow: "Зона обслуживания",
    areasTitle: "Расслабление у вашей двери по всему Бали",
    areasCopy: "Где бы вы ни остановились на Бали, наша команда выездного массажа может приехать на вашу виллу, в отель или домой. Для удаленных локаций мы подтверждаем возможность поездки до оплаты.",
    quote: "\"У меня был потрясающий опыт deep tissue massage. Терапевт был профессиональным, умелым и помог мне полностью расслабиться. Очень рекомендую качественный терапевтический массаж на Бали.\"",
    quoteBy: "Отзыв гостя",
    ctaTitle: "Готовы превратить комнату в спокойное спа-пространство?",
    ctaCopy: "Отправьте вашу локацию и выбранную процедуру. Мы ответим с ближайшим доступным временем.",
    ctaButton: "Написать для быстрого бронирования",
    faqEyebrow: "FAQ",
    faqTitle: "Что полезно знать перед бронированием",
    faqs: [
      ["Как быстро может приехать терапевт?", "Бронирование в тот же день доступно примерно от 90 минут вперед, в зависимости от района и доступности терапевтов."],
      ["Вы привозите массажную кушетку?", "Нет. Процедуры проводятся на кровати клиента. Мы привозим масла, простыни, полотенца, чистые инструменты и расслабляющую музыку. Вам нужно только подготовить комфортное тихое место."],
      ["Вы приезжаете на виллы и в отели?", "Да. Мы обслуживаем частные виллы, отели, резиденции, офисы, ретриты и локации подготовки к свадьбе по всему Бали."],
      ["Как забронировать?", "Нажмите WhatsApp, отправьте район, услугу, желаемое время и количество гостей. Наша команда подтвердит доступность и оплату."],
    ],
    footerCopy: "Профессиональный массаж на дому и спа-ритуалы по всему Бали.",
    footerCta: "Забронировать в WhatsApp",
  },
};

const localizedContent = {
  ...content,
  zh: {
    ...content.en,
    nav: ["服务", "预约流程", "服务政策", "区域", "常见问题"],
    hero: {
      ...content.en.hero,
      eyebrow: "巴厘岛住宅、别墅与酒店上门按摩",
      title: "无需前往水疗中心，在巴厘岛住处享受高级按摩。",
      copy: "Kembang Bali Home Spa Service 将专业理疗按摩、身体护理和情侣疗程直接送达您在巴厘岛的别墅、酒店或住处。",
      primary: "立即聊天 - 查询空档",
      secondary: "查看疗程",
      proof: ["60 分钟 IDR 250k 起", "已含理疗师交通", "认证专业理疗师", "每日可预约"],
    },
    booking: ["地点", "别墅、酒店或住处", "时间", "当天或预约", "需求", "按摩、磨砂、面部、头发护理", "快速预约"],
    servicesEyebrow: "疗程菜单",
    servicesTitle: "更清晰的服务菜单，帮助快速预约",
    howEyebrow: "预约流程",
    howTitle: "预约上门按摩很简单。",
    policyEyebrow: "官方说明",
    policyTitle: "专业上门按摩服务政策",
    policyOfferTitle: "我们提供",
    policyNoTitle: "我们不提供",
    areasEyebrow: "服务范围",
    areasTitle: "将放松体验送到巴厘岛您的门口",
    ctaTitle: "准备把房间变成安静的水疗空间吗？",
    ctaButton: "立即聊天快速预约",
    faqEyebrow: "常见问题",
    faqTitle: "预约前须知",
    footerCta: "通过 WhatsApp 预约",
  },
  cn: {
    ...content.en,
    nav: ["服务项目", "预约流程", "服务须知", "服务区域", "常见问题"],
    hero: {
      ...content.en.hero,
      eyebrow: "巴厘岛家庭、别墅及酒店上门SPA服务",
      title: "无需出门做SPA，在巴厘岛下榻处享受高端按摩服务。",
      copy: "Kembang Bali 上门SPA为您提供专业理疗按摩、身体护理及情侣SPA套餐，直达您在巴厘岛的别墅、酒店或住所。",
      primary: "立即咨询 - 查看空档",
      secondary: "浏览项目",
      proof: ["60分钟起，IDR 250k", "含理疗师交通费", "认证专业理疗师", "全天候可预约"],
    },
    booking: ["地点", "别墅、酒店或住所", "时间", "当天或提前预约", "需求", "按摩、磨砂、面部护理、头皮护理", "快速预约"],
    servicesEyebrow: "项目菜单",
    servicesTitle: "精选服务项目，预约更高效",
    howEyebrow: "预约流程",
    howTitle: "上门按摩预约超简单",
    policyEyebrow: "官方须知",
    policyTitle: "专业上门按摩服务须知",
    policyOfferTitle: "服务内容",
    policyNoTitle: "不提供的服务",
    areasEyebrow: "覆盖区域",
    areasTitle: "巴厘岛各地均可上门服务",
    ctaTitle: "想把房间变成私人SPA空间吗？",
    ctaButton: "立即咨询快速预约",
    faqEyebrow: "常见问题",
    faqTitle: "预约前须知事项",
    footerCta: "通过WhatsApp预约",
  },
  fr: {
    ...content.en,
    nav: ["Soins", "Comment ca marche", "Politique", "Zones", "FAQ"],
    hero: {
      ...content.en.hero,
      eyebrow: "Massage a domicile pour maisons, villas et hotels a Bali",
      title: "Inutile d'aller au spa. Profitez d'un massage premium chez vous a Bali.",
      copy: "Kembang Bali Home Spa Service apporte massage therapeutique professionnel, soins du corps et traitements couple directement dans votre villa, hotel ou maison a Bali.",
      primary: "Chat maintenant - disponibilites",
      secondary: "Voir les soins",
      proof: ["A partir de IDR 250k / 60 min", "Transport du therapeute inclus", "Therapeutes professionnels certifies", "Disponible tous les jours"],
    },
    booking: ["Lieu", "Villa, hotel ou maison", "Horaire", "Aujourd'hui ou programme", "Besoin", "Massage, scrub, facial, rituel cheveux", "Reservation rapide"],
    servicesEyebrow: "Menu des soins",
    servicesTitle: "Menu clarifie pour reserver plus vite",
    howEyebrow: "Comment ca marche",
    howTitle: "Obtenir votre massage mobile est simple.",
    policyEyebrow: "Avis officiel",
    policyTitle: "Politique de service de massage professionnel a domicile",
    policyOfferTitle: "Ce que nous proposons",
    policyNoTitle: "Ce que nous ne proposons pas",
    areasEyebrow: "Couverture",
    areasTitle: "La relaxation livree a votre porte partout a Bali",
    ctaTitle: "Pret a transformer votre chambre en escape spa paisible ?",
    ctaButton: "Chat maintenant pour reserver",
    faqEyebrow: "FAQ",
    faqTitle: "A savoir avant de reserver",
    footerCta: "Reserver via WhatsApp",
  },
  ko: {
    ...content.en,
    nav: ["서비스", "예약 방법", "정책", "지역", "FAQ"],
    hero: {
      ...content.en.hero,
      eyebrow: "발리 숙소, 빌라, 호텔로 찾아가는 마사지",
      title: "스파에 갈 필요 없이 발리 숙소에서 프리미엄 마사지를 즐기세요.",
      copy: "Kembang Bali Home Spa Service는 전문 테라피 마사지, 바디 케어, 커플 트리트먼트를 발리의 빌라, 호텔, 숙소로 직접 제공합니다.",
      primary: "지금 채팅 - 가능 시간 확인",
      secondary: "트리트먼트 보기",
      proof: ["60분 IDR 250k부터", "테라피스트 교통 포함", "인증 전문 테라피스트", "매일 예약 가능"],
    },
    booking: ["장소", "빌라, 호텔 또는 숙소", "시간", "당일 또는 예약", "필요 서비스", "마사지, 스크럽, 페이셜, 헤어 리추얼", "빠른 예약"],
    servicesEyebrow: "트리트먼트 메뉴",
    servicesTitle: "빠른 예약을 위한 정리된 서비스 메뉴",
    howEyebrow: "예약 방법",
    howTitle: "모바일 마사지 예약은 간단합니다.",
    policyEyebrow: "공식 안내",
    policyTitle: "전문 홈 마사지 서비스 정책",
    policyOfferTitle: "제공 서비스",
    policyNoTitle: "제공하지 않는 서비스",
    areasEyebrow: "서비스 지역",
    areasTitle: "발리 전역, 문 앞까지 찾아가는 휴식",
    ctaTitle: "방을 평화로운 스파 공간으로 바꿀 준비가 되셨나요?",
    ctaButton: "빠른 예약 채팅",
    faqEyebrow: "FAQ",
    faqTitle: "예약 전 알아둘 점",
    footerCta: "WhatsApp으로 예약",
  },
  ja: {
    ...content.en,
    nav: ["サービス", "予約方法", "ポリシー", "エリア", "FAQ"],
    hero: {
      ...content.en.hero,
      eyebrow: "バリ島の自宅、ヴィラ、ホテルへ訪問するマッサージ",
      title: "スパへ行かずに、バリ島の滞在先でプレミアムマッサージを。",
      copy: "Kembang Bali Home Spa Service は、プロのセラピーマッサージ、ボディケア、カップルトリートメントをバリ島のヴィラ、ホテル、ご自宅へ直接お届けします。",
      primary: "今すぐチャット - 空き確認",
      secondary: "トリートメントを見る",
      proof: ["60分 IDR 250k から", "セラピスト交通費込み", "認定プロセラピスト", "毎日予約可能"],
    },
    booking: ["場所", "ヴィラ、ホテル、またはご自宅", "時間", "当日または事前予約", "ご希望", "マッサージ、スクラブ、フェイシャル、ヘアリチュアル", "クイック予約"],
    servicesEyebrow: "トリートメントメニュー",
    servicesTitle: "すばやく予約できる整理されたサービスメニュー",
    howEyebrow: "予約方法",
    howTitle: "モバイルマッサージの予約は簡単です。",
    policyEyebrow: "公式案内",
    policyTitle: "プロフェッショナルホームマッサージサービスポリシー",
    policyOfferTitle: "提供するサービス",
    policyNoTitle: "提供しないサービス",
    areasEyebrow: "対応エリア",
    areasTitle: "バリ島全域、リラックスをお部屋まで",
    ctaTitle: "お部屋を静かなスパ空間に変えませんか？",
    ctaButton: "今すぐチャットで予約",
    faqEyebrow: "FAQ",
    faqTitle: "予約前に知っておきたいこと",
    footerCta: "WhatsAppで予約",
  },
};

function getCopy(locale: Locale) {
  return localizedContent[locale];
}

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function generalBookingMessage(locale: Locale) {
  if (locale === "id") {
    return [
      "Halo Kembang Bali Home Spa Service, saya ingin booking home spa.",
      "",
      "Lokasi: ",
      "Tanggal/jam: ",
      "Jumlah orang: ",
      "Treatment pilihan: ",
      "",
      "Mohon info slot terdekat dan total harga. Terima kasih.",
    ].join("\n");
  }

  if (locale === "ru") {
    return [
      "Здравствуйте, Kembang Bali Home Spa Service. Я хочу забронировать home spa service.",
      "",
      "Локация: ",
      "Дата/время: ",
      "Количество гостей: ",
      "Выбранная процедура: ",
      "",
      "Пожалуйста, отправьте ближайшее доступное время и итоговую стоимость. Спасибо.",
    ].join("\n");
  }

  return [
    "Hello Kembang Bali Home Spa Service, I would like to book a home spa service.",
    "",
    "Location: ",
    "Date/time: ",
    "Number of guests: ",
    "Preferred treatment: ",
    "",
    "Please share the nearest available slot and total price. Thank you.",
  ].join("\n");
}

function packageBookingMessage(service: { name: string; rates: string[] }, locale: Locale) {
  const priceDetail = service.rates.join(", ");

  if (locale === "id") {
    return [
      `Halo Kembang Bali Home Spa Service, saya ingin booking ${service.name}.`,
      "",
      `Detail paket: ${priceDetail}`,
      "Lokasi: ",
      "Tanggal/jam: ",
      "Jumlah orang: ",
      "",
      "Mohon konfirmasi ketersediaan terapis dan total harga. Terima kasih.",
    ].join("\n");
  }

  if (locale === "ru") {
    return [
      `Здравствуйте, Kembang Bali Home Spa Service. Я хочу забронировать ${service.name}.`,
      "",
      `Детали пакета: ${priceDetail}`,
      "Локация: ",
      "Дата/время: ",
      "Количество гостей: ",
      "",
      "Пожалуйста, подтвердите доступность терапевта и итоговую стоимость. Спасибо.",
    ].join("\n");
  }

  return [
    `Hello Kembang Bali Home Spa Service, I would like to book ${service.name}.`,
    "",
    `Package detail: ${priceDetail}`,
    "Location: ",
    "Date/time: ",
    "Number of guests: ",
    "",
    "Please confirm therapist availability and total price. Thank you.",
  ].join("\n");
}

const navTargets = ["#services", "#how", "#policy", "#areas", "#faq"];

function BrandMark({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 202 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M89.6926 197.4C79.6926 193.9 71.2926 186.1 65.9926 175.6C64.1926 171.8 62.5926 168.2 62.5926 167.5C62.5926 166.5 59.2926 166.1 49.6926 165.9L36.8926 165.5L28.1926 161.1C8.69256 151.2 -2.80744 130.7 0.592556 111.9C2.69256 100.6 7.19256 93.4 17.7926 84.3L21.4926 81.1L18.3926 74.3C15.5926 68.5 15.0926 66.1 14.7926 57.9C14.4926 50.8 14.7926 46.7 16.0926 42.4C20.2926 27.9 30.1926 15.4 42.2926 9.7C48.5926 6.7 49.7926 6.5 59.5926 6.5C68.9926 6.5 70.6926 6.8 76.0926 9.3C79.2926 10.8 83.4926 13.2 85.3926 14.6L88.6926 17.2L93.9926 12.2C103.093 3.6 112.893 0 127.593 0C146.793 0 163.493 9.5 170.193 24.3C173.693 32 174.593 45 172.293 54.8L170.793 61.1L175.893 63.6C190.093 70.8 199.593 85.8 201.193 103.4C202.493 118 198.393 131.1 189.593 140.4C183.393 147 175.893 150.5 163.893 152.6C158.993 153.5 154.693 154.5 154.293 154.9C153.893 155.4 152.793 158.5 151.993 161.9C150.293 169.3 148.593 172.8 143.493 179.7C137.993 187.1 128.593 193.9 120.193 196.7C111.593 199.5 96.6926 199.8 89.6926 197.4ZM119.493 189.1C124.993 186.9 136.793 176.2 140.193 170.3C142.493 166.4 145.493 156.9 145.593 153.4C145.593 152.7 142.493 151.5 138.693 150.7C129.193 148.5 117.593 143.9 108.093 138.5C103.093 135.6 99.3926 134.1 98.0926 134.4C96.9926 134.7 95.0926 136.7 93.8926 138.9C90.5926 144.7 81.2926 154.3 75.0926 158.5C72.0926 160.5 69.5926 162.6 69.5926 163.3C69.5926 165.9 75.5926 177 79.1926 181C82.7926 185 88.2926 188.5 93.5926 190.1C98.5926 191.6 114.793 191 119.493 189.1ZM58.7926 146.5C58.3926 134.7 59.5926 123.5 62.2926 112.8C63.1926 109.1 63.6926 105.8 63.3926 105.5C63.0926 105.1 60.0926 104.2 56.6926 103.4C49.7926 101.8 36.4926 95.5 31.8926 91.6C27.4926 87.9 25.1926 88.3 19.1926 94C5.39256 107 4.49256 125.5 16.6926 141.8C24.6926 152.4 36.7926 158.1 50.5926 157.7L59.0926 157.5L58.7926 146.5ZM73.7926 149.3C78.8926 145.4 86.6926 135.9 89.3926 130.3C90.8926 127.2 90.8926 127.1 86.7926 122.4C82.7926 117.9 80.5926 112.9 80.5926 108.2C80.5926 106.1 80.1926 105.9 76.3926 106.2C72.3926 106.5 71.9926 106.8 70.7926 110.4C66.6926 123 64.9926 153 68.3926 153C68.5926 153 71.0926 151.3 73.7926 149.3ZM172.393 141.8C180.193 139.1 186.793 133 190.393 125.2C192.793 120.1 193.093 118.4 192.993 108.5C192.993 99.5 192.493 96.4 190.693 91.7C186.493 81 176.193 71 169.293 71C167.093 71 165.693 72.4 160.893 79.8C157.493 85 151.093 92.5 144.893 98.7L134.493 108.9L137.393 112.2C144.893 120.7 149.293 129.4 153.293 143.9C153.793 145.8 164.093 144.6 172.393 141.8ZM144.093 140.8C142.993 135.6 138.793 127.5 133.893 121C128.893 114.3 127.493 113.9 119.593 116.6C116.893 117.5 112.793 118 109.193 117.8L103.293 117.5L102.293 121C101.493 124.1 101.693 124.7 104.293 126.8C110.493 131.9 136.893 143.3 143.893 143.9C144.393 144 144.393 142.5 144.093 140.8ZM96.1926 113.6C96.9926 108.9 95.1926 105.8 91.7926 106.2C89.3926 106.5 89.0926 106.9 89.2926 109.8C89.3926 113.2 93.0926 118.4 94.6926 117.4C95.1926 117.2 95.7926 115.4 96.1926 113.6ZM117.693 109C120.393 107.5 120.093 106.3 116.593 104.5C112.693 102.5 109.293 102.6 107.193 104.9C105.593 106.6 105.593 106.9 107.093 108.4C108.893 110.2 114.693 110.5 117.693 109ZM135.193 96.7C138.593 93.9 143.493 89 146.093 86C151.193 80.3 158.593 69.4 158.593 67.7C158.593 66.2 142.393 67.8 135.293 70C125.293 73.1 124.793 73.7 125.393 81.9C125.793 87.7 125.493 89.6 123.593 93.5C122.393 96 121.493 98.2 121.693 98.4C124.093 100.2 127.293 102 128.093 102C128.593 102 131.793 99.6 135.193 96.7ZM85.9926 96.4C88.0926 94.4 87.9926 90.1 85.8926 89.3C83.6926 88.4 79.7926 90.9 77.3926 94.8L75.3926 98H79.8926C82.6926 98 85.0926 97.4 85.9926 96.4ZM69.3926 92C71.3926 88.8 74.3926 85.8 77.5926 83.8C82.8926 80.5 83.1926 79.8 81.5926 75.5L80.5926 72.8L71.7926 73.5C58.9926 74.5 39.9926 79.2 35.7926 82.4C34.6926 83.2 34.8926 83.7 36.7926 85.2C42.6926 89.9 58.7926 96.7 64.6926 96.9C65.5926 97 67.6926 94.7 69.3926 92ZM116.593 90.1C117.093 89 117.593 86.5 117.593 84.5C117.593 81.3 117.293 80.9 115.493 81.2C110.093 82 107.993 92 113.193 92C114.493 92 115.993 91.1 116.593 90.1ZM100.593 82.5C103.193 79.3 95.4926 72.7 91.1926 74.3C89.6926 74.9 89.6926 75.2 91.0926 77.9C92.5926 81 96.1926 84 98.1926 84C98.7926 84 99.8926 83.3 100.593 82.5ZM36.5926 74.5C39.2926 71.2 54.3926 67.4 72.1926 65.5L78.3926 64.8L78.7926 51.7C79.1926 41.3 79.6926 37.2 81.4926 32.5C84.9926 23.1 84.9926 23.2 76.5926 18.6C69.2926 14.6 68.7926 14.5 59.5926 14.5C47.9926 14.5 42.9926 16.6 35.1926 24.5C28.9926 30.8 24.9926 38.6 22.9926 48.2C21.2926 56.2 22.0926 62.6 25.6926 71C27.6926 75.7 27.9926 76 31.5926 76C33.6926 76 35.8926 75.3 36.5926 74.5ZM112.393 73.1C113.593 72 114.593 70.6 114.593 69.8C114.593 69.1 112.693 64.2 110.293 59C104.193 45.5 94.1926 31 90.9926 31C89.1926 31 86.5926 43.7 86.5926 52.7C86.5926 64.2 86.6926 64.4 93.7926 65.9C98.7926 66.9 100.693 67.9 103.493 70.9C107.593 75.3 109.193 75.7 112.393 73.1ZM128.393 64.6C141.293 60.7 145.793 59.8 154.093 59.2L163.093 58.5L164.393 53.5C165.193 50.6 165.593 44.9 165.393 40C164.793 26.1 159.193 18 145.593 11.6C139.493 8.7 138.493 8.5 127.093 8.5C115.593 8.5 114.793 8.6 108.593 11.7C104.993 13.4 100.593 16.4 98.7926 18.3L95.3926 21.8L101.293 29.2C107.793 37.4 114.593 48.8 119.193 59.2C120.793 62.9 122.493 66 122.893 66C123.393 66 125.793 65.4 128.393 64.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BrandWordmark({ className, height = 28 }: { className?: string; height?: number }) {
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 643 131"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M75.972 108.366V105.864H90.9842V108.366H75.972ZM89.2015 97.1072H91.8599V119H89.2015V97.1072ZM74.502 97.1072H77.1604V119H74.502V97.1072ZM110.933 108.054C110.933 109.701 111.287 111.171 111.996 112.463C112.726 113.756 113.717 114.778 114.968 115.528C116.219 116.279 117.636 116.654 119.221 116.654C120.826 116.654 122.244 116.279 123.474 115.528C124.725 114.778 125.705 113.756 126.414 112.463C127.144 111.171 127.509 109.701 127.509 108.054C127.509 106.406 127.144 104.936 126.414 103.644C125.705 102.351 124.725 101.329 123.474 100.579C122.244 99.8282 120.826 99.4529 119.221 99.4529C117.636 99.4529 116.219 99.8282 114.968 100.579C113.717 101.329 112.726 102.351 111.996 103.644C111.287 104.936 110.933 106.406 110.933 108.054ZM108.118 108.054C108.118 106.448 108.389 104.968 108.931 103.613C109.494 102.236 110.276 101.048 111.277 100.047C112.278 99.0254 113.456 98.2331 114.811 97.6702C116.166 97.0864 117.636 96.7945 119.221 96.7945C120.826 96.7945 122.296 97.0864 123.631 97.6702C124.986 98.2331 126.164 99.0254 127.165 100.047C128.166 101.048 128.937 102.236 129.479 103.613C130.042 104.968 130.324 106.448 130.324 108.054C130.324 109.638 130.042 111.119 129.479 112.495C128.937 113.871 128.166 115.07 127.165 116.091C126.164 117.092 124.986 117.885 123.631 118.468C122.296 119.031 120.826 119.313 119.221 119.313C117.636 119.313 116.166 119.031 114.811 118.468C113.456 117.885 112.278 117.092 111.277 116.091C110.276 115.07 109.494 113.871 108.931 112.495C108.389 111.119 108.118 109.638 108.118 108.054ZM149.622 104.207L147.996 119H145.337L147.996 96.0126L156.753 111.869L165.51 96.0126L168.168 119H165.51L163.883 104.207L156.753 116.967L149.622 104.207ZM185.888 119V116.498H196.928V119H185.888ZM185.888 99.6093V97.1072H196.928V99.6093H185.888ZM185.888 108.366V105.864H196.303V108.366H185.888ZM184.418 97.1072H187.076V119H184.418V97.1072ZM236.823 112.37C237.324 113.245 237.845 114.017 238.387 114.684C238.95 115.351 239.576 115.872 240.264 116.248C240.952 116.623 241.734 116.811 242.609 116.811C243.777 116.811 244.715 116.488 245.424 115.841C246.133 115.195 246.487 114.371 246.487 113.37C246.487 112.39 246.258 111.609 245.799 111.025C245.341 110.441 244.736 109.972 243.985 109.617C243.256 109.242 242.474 108.908 241.64 108.617C241.098 108.429 240.493 108.189 239.826 107.897C239.159 107.584 238.523 107.199 237.918 106.74C237.313 106.26 236.813 105.677 236.417 104.989C236.041 104.301 235.854 103.456 235.854 102.455C235.854 101.371 236.125 100.402 236.667 99.5467C237.209 98.6918 237.96 98.0246 238.919 97.5451C239.878 97.0447 240.973 96.7945 242.203 96.7945C243.391 96.7945 244.423 97.0238 245.299 97.4825C246.196 97.9204 246.957 98.4938 247.582 99.2027C248.208 99.8907 248.698 100.62 249.052 101.392L246.769 102.706C246.498 102.163 246.154 101.632 245.737 101.11C245.32 100.589 244.809 100.162 244.204 99.8282C243.62 99.4946 242.901 99.3278 242.046 99.3278C240.858 99.3278 239.993 99.6197 239.45 100.203C238.908 100.766 238.637 101.402 238.637 102.111C238.637 102.716 238.794 103.279 239.106 103.8C239.419 104.301 239.94 104.78 240.67 105.239C241.421 105.677 242.432 106.115 243.704 106.552C244.288 106.761 244.903 107.032 245.549 107.366C246.196 107.699 246.79 108.127 247.332 108.648C247.895 109.148 248.354 109.763 248.708 110.493C249.062 111.202 249.24 112.057 249.24 113.058C249.24 114.017 249.052 114.882 248.677 115.654C248.322 116.425 247.822 117.082 247.175 117.624C246.55 118.166 245.831 118.583 245.017 118.875C244.225 119.167 243.391 119.313 242.515 119.313C241.327 119.313 240.222 119.063 239.2 118.562C238.199 118.041 237.313 117.363 236.542 116.529C235.791 115.674 235.176 114.767 234.697 113.808L236.823 112.37ZM265.655 97.1072H268.313V119H265.655V97.1072ZM267.125 99.6093V97.1072H271.597C273.015 97.1072 274.276 97.3783 275.381 97.9204C276.507 98.4416 277.393 99.1922 278.04 100.172C278.707 101.152 279.04 102.32 279.04 103.675C279.04 105.009 278.707 106.177 278.04 107.178C277.393 108.158 276.507 108.919 275.381 109.461C274.276 109.982 273.015 110.243 271.597 110.243H267.125V107.741H271.597C273.015 107.741 274.161 107.397 275.037 106.709C275.934 106.021 276.382 105.009 276.382 103.675C276.382 102.32 275.934 101.309 275.037 100.641C274.161 99.9533 273.015 99.6093 271.597 99.6093H267.125ZM295.195 112.432L296.134 109.93H305.829L306.767 112.432H295.195ZM300.919 102.049L297.228 110.743L296.978 111.306L293.725 119H290.754L300.919 96.0126L311.083 119H308.112L304.922 111.494L304.672 110.868L300.919 102.049ZM348.957 112.37C349.457 113.245 349.978 114.017 350.52 114.684C351.083 115.351 351.709 115.872 352.397 116.248C353.085 116.623 353.867 116.811 354.743 116.811C355.91 116.811 356.848 116.488 357.557 115.841C358.266 115.195 358.621 114.371 358.621 113.37C358.621 112.39 358.391 111.609 357.933 111.025C357.474 110.441 356.869 109.972 356.119 109.617C355.389 109.242 354.607 108.908 353.773 108.617C353.231 108.429 352.626 108.189 351.959 107.897C351.292 107.584 350.656 107.199 350.051 106.74C349.447 106.26 348.946 105.677 348.55 104.989C348.175 104.301 347.987 103.456 347.987 102.455C347.987 101.371 348.258 100.402 348.8 99.5467C349.342 98.6918 350.093 98.0246 351.052 97.5451C352.011 97.0447 353.106 96.7945 354.336 96.7945C355.524 96.7945 356.557 97.0238 357.432 97.4825C358.329 97.9204 359.09 98.4938 359.715 99.2027C360.341 99.8907 360.831 100.62 361.185 101.392L358.902 102.706C358.631 102.163 358.287 101.632 357.87 101.11C357.453 100.589 356.942 100.162 356.338 99.8282C355.754 99.4946 355.034 99.3278 354.18 99.3278C352.991 99.3278 352.126 99.6197 351.584 100.203C351.042 100.766 350.771 101.402 350.771 102.111C350.771 102.716 350.927 103.279 351.24 103.8C351.552 104.301 352.074 104.78 352.803 105.239C353.554 105.677 354.565 106.115 355.837 106.552C356.421 106.761 357.036 107.032 357.682 107.366C358.329 107.699 358.923 108.127 359.465 108.648C360.028 109.148 360.487 109.763 360.841 110.493C361.196 111.202 361.373 112.057 361.373 113.058C361.373 114.017 361.185 114.882 360.81 115.654C360.456 116.425 359.955 117.082 359.309 117.624C358.683 118.166 357.964 118.583 357.151 118.875C356.358 119.167 355.524 119.313 354.649 119.313C353.46 119.313 352.355 119.063 351.334 118.562C350.333 118.041 349.447 117.363 348.675 116.529C347.925 115.674 347.309 114.767 346.83 113.808L348.957 112.37ZM379.258 119V116.498H390.298V119H379.258ZM379.258 99.6093V97.1072H390.298V99.6093H379.258ZM379.258 108.366V105.864H389.673V108.366H379.258ZM377.788 97.1072H380.446V119H377.788V97.1072ZM411.403 108.21H414.374L422.193 119H418.909L411.403 108.21ZM407.493 97.1072H410.152V119H407.493V97.1072ZM408.963 99.4529V97.1072H413.436C414.854 97.1072 416.115 97.3783 417.22 97.9204C418.346 98.4416 419.232 99.1922 419.878 100.172C420.546 101.152 420.879 102.32 420.879 103.675C420.879 105.009 420.546 106.177 419.878 107.178C419.232 108.158 418.346 108.919 417.22 109.461C416.115 109.982 414.854 110.243 413.436 110.243H408.963V107.897H413.436C414.374 107.897 415.198 107.73 415.907 107.397C416.636 107.063 417.199 106.584 417.595 105.958C418.012 105.333 418.221 104.572 418.221 103.675C418.221 102.778 418.012 102.017 417.595 101.392C417.199 100.766 416.636 100.287 415.907 99.9533C415.198 99.6197 414.374 99.4529 413.436 99.4529H408.963ZM445.323 114.058L452.517 97.1072H455.488L445.323 120.095L435.159 97.1072H438.13L445.323 114.058ZM470.661 97.1072H473.32V119H470.661V97.1072ZM492.401 108.054C492.401 109.742 492.777 111.233 493.527 112.526C494.299 113.819 495.299 114.83 496.53 115.56C497.76 116.289 499.094 116.654 500.533 116.654C501.575 116.654 502.524 116.519 503.379 116.248C504.255 115.977 505.047 115.601 505.756 115.122C506.465 114.621 507.069 114.048 507.57 113.402V116.905C506.652 117.718 505.652 118.322 504.567 118.719C503.483 119.115 502.138 119.313 500.533 119.313C499.011 119.313 497.583 119.042 496.248 118.5C494.935 117.937 493.777 117.155 492.777 116.154C491.776 115.132 490.994 113.933 490.431 112.557C489.868 111.181 489.586 109.68 489.586 108.054C489.586 106.427 489.868 104.926 490.431 103.55C490.994 102.174 491.776 100.985 492.777 99.9846C493.777 98.9629 494.935 98.181 496.248 97.6389C497.583 97.0759 499.011 96.7945 500.533 96.7945C502.138 96.7945 503.483 96.9925 504.567 97.3887C505.652 97.7849 506.652 98.3895 507.57 99.2027V102.706C507.069 102.059 506.465 101.496 505.756 101.017C505.047 100.516 504.255 100.131 503.379 99.8595C502.524 99.5884 501.575 99.4529 500.533 99.4529C499.094 99.4529 497.76 99.8178 496.53 100.548C495.299 101.277 494.299 102.289 493.527 103.581C492.777 104.853 492.401 106.344 492.401 108.054ZM526.228 119V116.498H537.268V119H526.228ZM526.228 99.6093V97.1072H537.268V99.6093H526.228ZM526.228 108.366V105.864H536.643V108.366H526.228ZM524.758 97.1072H527.416V119H524.758V97.1072ZM555.277 112.37C555.777 113.245 556.298 114.017 556.84 114.684C557.403 115.351 558.029 115.872 558.717 116.248C559.405 116.623 560.187 116.811 561.062 116.811C562.23 116.811 563.168 116.488 563.877 115.841C564.586 115.195 564.941 114.371 564.941 113.37C564.941 112.39 564.711 111.609 564.253 111.025C563.794 110.441 563.189 109.972 562.439 109.617C561.709 109.242 560.927 108.908 560.093 108.617C559.551 108.429 558.946 108.189 558.279 107.897C557.612 107.584 556.976 107.199 556.371 106.74C555.767 106.26 555.266 105.677 554.87 104.989C554.495 104.301 554.307 103.456 554.307 102.455C554.307 101.371 554.578 100.402 555.12 99.5467C555.662 98.6918 556.413 98.0246 557.372 97.5451C558.331 97.0447 559.426 96.7945 560.656 96.7945C561.844 96.7945 562.876 97.0238 563.752 97.4825C564.649 97.9204 565.41 98.4938 566.035 99.2027C566.661 99.8907 567.151 100.62 567.505 101.392L565.222 102.706C564.951 102.163 564.607 101.632 564.19 101.11C563.773 100.589 563.262 100.162 562.658 99.8282C562.074 99.4946 561.354 99.3278 560.5 99.3278C559.311 99.3278 558.446 99.6197 557.904 100.203C557.362 100.766 557.09 101.402 557.09 102.111C557.09 102.716 557.247 103.279 557.56 103.8C557.872 104.301 558.394 104.78 559.123 105.239C559.874 105.677 560.885 106.115 562.157 106.552C562.741 106.761 563.356 107.032 564.002 107.366C564.649 107.699 565.243 108.127 565.785 108.648C566.348 109.148 566.807 109.763 567.161 110.493C567.516 111.202 567.693 112.057 567.693 113.058C567.693 114.017 567.505 114.882 567.13 115.654C566.775 116.425 566.275 117.082 565.629 117.624C565.003 118.166 564.284 118.583 563.471 118.875C562.678 119.167 561.844 119.313 560.969 119.313C559.78 119.313 558.675 119.063 557.653 118.562C556.653 118.041 555.767 117.363 554.995 116.529C554.244 115.674 553.629 114.767 553.15 113.808L555.277 112.37Z"
        style={{ fill: "var(--brand-tagline-color)" }}
      />
      <path
        d="M4.80432 66.8656C4.9387 66.3953 5.06189 65.8129 5.17388 65.1186C5.30827 64.4243 5.42026 63.5619 5.50985 62.5316C5.59944 61.5014 5.66663 60.2807 5.71143 58.8696C5.75622 57.4362 5.77862 55.7675 5.77862 53.8637V31.9923C5.77862 30.0885 5.75622 28.4311 5.71143 27.02C5.66663 25.5866 5.59944 24.3547 5.50985 23.3244C5.42026 22.2717 5.30827 21.3982 5.17388 20.7039C5.06189 20.0095 4.9387 19.4272 4.80432 18.9568V18.8224H12.8675V18.9568C12.7331 19.4272 12.5987 20.0095 12.4643 20.7039C12.3524 21.3982 12.2516 22.2717 12.162 23.3244C12.0948 24.3547 12.0276 25.5866 11.9604 27.02C11.9156 28.4311 11.8932 30.0885 11.8932 31.9923V39.4844L31.5136 23.4588C33.7086 21.667 34.8061 20.1215 34.8061 18.8224H44.2468V18.9568C42.9253 19.2704 41.5814 19.8751 40.2152 20.771C38.8713 21.6446 37.4378 22.7196 35.9148 23.9963L18.5789 38.5101L39.4424 61.423C40.3159 62.3189 41.0551 63.0692 41.6598 63.6739C42.287 64.2563 42.8357 64.749 43.306 65.1522C43.7764 65.5329 44.202 65.8577 44.5827 66.1265C44.9859 66.3729 45.4002 66.6192 45.8258 66.8656V67H35.982C35.8924 66.7984 35.7356 66.5408 35.5116 66.2273C35.3101 65.9137 35.0637 65.5889 34.7725 65.253C34.5037 64.917 34.2014 64.5698 33.8654 64.2115C33.5518 63.8531 33.2495 63.5172 32.9583 63.2036L11.8932 40.0891V53.8637C11.8932 55.7675 11.9156 57.4362 11.9604 58.8696C12.0276 60.2807 12.0948 61.5014 12.162 62.5316C12.2516 63.5619 12.3524 64.4243 12.4643 65.1186C12.5987 65.8129 12.7331 66.3953 12.8675 66.8656V67H4.80432V66.8656ZM63.0474 18.8224C65.8471 18.8224 68.6245 18.8112 71.3794 18.7888C74.1567 18.7664 76.6989 18.744 79.0058 18.7217C81.3128 18.6769 83.2838 18.6209 84.9188 18.5537C86.5539 18.4865 87.6626 18.3969 88.2449 18.2849L86.5987 22.7532C85.8595 22.5517 84.9972 22.3725 84.0117 22.2157C83.1606 22.0813 82.1191 21.9581 80.8872 21.8461C79.6778 21.7118 78.2779 21.6446 76.6877 21.6446C76.1501 21.6446 75.5006 21.667 74.739 21.7118C73.9999 21.7341 73.2832 21.7677 72.5889 21.8125C71.7825 21.8573 70.965 21.9021 70.1363 21.9469V40.2907C72.4433 40.2683 74.5263 40.2011 76.3853 40.0891C78.2443 39.9771 79.8233 39.8651 81.1224 39.7531C82.6455 39.6188 83.9893 39.462 85.154 39.2828L84.1125 44.1543C82.5671 43.9527 80.988 43.7623 79.3754 43.5832C77.9867 43.4264 76.4749 43.292 74.8398 43.18C73.2048 43.0456 71.637 42.9784 70.1363 42.9784V64.0435C72.7792 64.0435 75.2094 63.9315 77.4268 63.7075C79.6442 63.4836 81.5816 63.226 83.239 62.9348C85.1652 62.6212 86.9234 62.2517 88.5137 61.8261L87.5394 67.2688C87.2706 67.2464 86.8674 67.224 86.3299 67.2016C85.7923 67.1792 85.1876 67.1568 84.5157 67.1344C83.8661 67.112 83.1718 67.0896 82.4327 67.0672C81.7159 67.0672 81.0328 67.056 80.3833 67.0336C79.7337 67.0336 79.1514 67.0224 78.6363 67C78.1435 67 77.7851 67 77.5612 67H63.0474V66.8656C63.1818 66.3953 63.305 65.8129 63.417 65.1186C63.5514 64.4243 63.6634 63.5619 63.753 62.5316C63.8425 61.5014 63.9097 60.2807 63.9545 58.8696C63.9993 57.4362 64.0217 55.7675 64.0217 53.8637V31.9923C64.0217 30.0885 63.9993 28.4311 63.9545 27.02C63.9097 25.5866 63.8425 24.3547 63.753 23.3244C63.6634 22.2717 63.5514 21.3982 63.417 20.7039C63.305 20.0095 63.1818 19.4272 63.0474 18.9568V18.8224ZM108.154 66.8656C108.401 66.5072 108.681 65.9809 108.994 65.2866C109.308 64.5698 109.554 63.6739 109.733 62.5988C109.98 61.031 110.248 59.2728 110.54 57.3242C110.853 55.3532 111.167 53.2926 111.48 51.1424C111.816 48.9922 112.141 46.7972 112.455 44.5575C112.791 42.2953 113.104 40.0779 113.395 37.9053C113.709 35.7103 114 33.605 114.269 31.5892C114.56 29.551 114.818 27.692 115.042 26.0121C115.266 24.3323 115.445 22.8764 115.579 21.6446C115.736 20.3903 115.848 19.4496 115.915 18.8224H120.182L141.314 58.3321L162.278 18.8224H165.47L170.98 58.7352C171.137 59.9895 171.305 61.0646 171.484 61.9605C171.663 62.8564 171.842 63.6291 172.021 64.2787C172.201 64.9058 172.369 65.4322 172.525 65.8577C172.705 66.2609 172.873 66.5968 173.029 66.8656V67H164.563V66.8656C164.675 66.6192 164.776 66.2161 164.865 65.6561C164.977 65.0962 165.033 64.4243 165.033 63.6403C165.033 63.3492 165.022 63.058 165 62.7668C164.977 62.4533 164.944 62.1173 164.899 61.7589L160.632 29.5734L140.81 66.8656L138.492 66.5968L118.536 29.2374C117.752 34.5457 117.069 39.4508 116.486 43.9527C116.24 45.8789 115.993 47.8051 115.747 49.7313C115.501 51.6351 115.277 53.4158 115.075 55.0732C114.896 56.7306 114.75 58.1977 114.638 59.4744C114.526 60.7286 114.47 61.6581 114.47 62.2629C114.47 63.0244 114.493 63.6963 114.538 64.2787C114.582 64.861 114.627 65.3538 114.672 65.7569C114.739 66.2273 114.806 66.6416 114.874 67H108.154V66.8656ZM195.358 31.9923C195.358 30.0885 195.335 28.4311 195.29 27.02C195.246 25.5866 195.178 24.3547 195.089 23.3244C194.999 22.2717 194.887 21.3982 194.753 20.7039C194.641 20.0095 194.518 19.4272 194.383 18.9568V18.8224C194.831 18.8448 195.302 18.856 195.794 18.856C196.22 18.8784 196.69 18.8896 197.205 18.8896C197.743 18.8896 198.292 18.8896 198.852 18.8896C199.658 18.8896 200.744 18.8112 202.111 18.6545C203.499 18.4977 205.28 18.4193 207.452 18.4193C209.468 18.4193 211.327 18.6881 213.029 19.2256C214.732 19.7407 216.199 20.4911 217.431 21.4766C218.685 22.4621 219.659 23.6828 220.354 25.1386C221.07 26.5721 221.429 28.2071 221.429 30.0437C221.429 31.5892 221.216 32.9778 220.79 34.2097C220.365 35.4192 219.76 36.4831 218.976 37.4014C218.215 38.2973 217.285 39.0588 216.188 39.6859C215.112 40.2907 213.925 40.7722 212.626 41.1306C214.53 41.4218 216.266 41.9145 217.834 42.6089C219.402 43.2808 220.745 44.1319 221.865 45.1622C223.008 46.1925 223.881 47.402 224.486 48.7906C225.113 50.1569 225.427 51.6799 225.427 53.3598C225.427 58.0857 223.87 61.6357 220.757 64.0099C217.643 66.3617 212.985 67.5375 206.78 67.5375C206.109 67.5375 205.325 67.5039 204.429 67.4368C203.533 67.392 202.615 67.336 201.674 67.2688C200.756 67.2016 199.848 67.1344 198.952 67.0672C198.057 67.0224 197.273 67 196.601 67H194.383V66.8656C194.518 66.3953 194.641 65.8129 194.753 65.1186C194.887 64.4243 194.999 63.5619 195.089 62.5316C195.178 61.5014 195.246 60.2807 195.29 58.8696C195.335 57.4362 195.358 55.7675 195.358 53.8637V31.9923ZM207.688 43.18C206.165 43.18 204.888 43.236 203.858 43.348C202.827 43.46 202.032 43.572 201.472 43.6839V53.8637C201.472 56.4843 201.517 58.6456 201.607 60.3479C201.696 62.0501 201.819 63.4388 201.976 64.5138C202.827 64.6258 203.678 64.7266 204.53 64.8162C205.381 64.9058 206.064 64.9506 206.579 64.9506C210.767 64.9506 213.825 64.0211 215.751 62.1621C217.699 60.2807 218.674 57.4026 218.674 53.5278C218.674 52.0047 218.439 50.616 217.968 49.3618C217.52 48.0851 216.837 46.9876 215.919 46.0693C215.023 45.151 213.881 44.4455 212.492 43.9527C211.126 43.4376 209.524 43.18 207.688 43.18ZM201.472 40.6602C202.099 40.7274 202.659 40.7722 203.152 40.7946C203.645 40.7946 204.171 40.7946 204.731 40.7946C206.254 40.7946 207.643 40.5819 208.897 40.1563C210.151 39.7083 211.215 39.0476 212.089 38.1741C212.985 37.3006 213.679 36.2143 214.172 34.9152C214.665 33.5938 214.911 32.0595 214.911 30.3125C214.911 28.8566 214.732 27.5352 214.373 26.3481C214.015 25.161 213.477 24.1531 212.761 23.3244C212.066 22.4733 211.204 21.8237 210.174 21.3758C209.143 20.9278 207.968 20.7039 206.646 20.7039C205.795 20.7039 205.045 20.7374 204.395 20.8046C203.768 20.8718 203.23 20.9502 202.782 21.0398C202.267 21.1294 201.831 21.2414 201.472 21.3758V40.6602ZM280.108 67V66.8656C280.153 66.7536 280.187 66.5856 280.209 66.3617C280.232 66.1377 280.243 65.9361 280.243 65.7569C280.243 65.0626 280.142 64.3011 279.941 63.4724C279.761 62.6212 279.403 61.5685 278.865 60.3143L274.8 51.176C273.546 51.1312 271.877 51.1088 269.794 51.1088C267.711 51.1088 265.46 51.1088 263.041 51.1088C261.272 51.1088 259.559 51.1088 257.901 51.1088C256.266 51.1088 254.788 51.1312 253.466 51.176L249.603 60.0455C249.267 60.8742 248.908 61.7813 248.528 62.7668C248.147 63.7523 247.957 64.749 247.957 65.7569C247.957 66.0481 247.979 66.2945 248.024 66.4961C248.069 66.6752 248.113 66.7984 248.158 66.8656V67H241.304V66.8656C241.708 66.4401 242.211 65.6897 242.816 64.6146C243.421 63.5172 244.082 62.1509 244.798 60.5159L264.049 17.8145H266.737L284.98 58.8696C285.406 59.8327 285.842 60.7734 286.29 61.6917C286.761 62.5876 287.197 63.394 287.601 64.1107C288.004 64.8274 288.362 65.4322 288.676 65.9249C288.989 66.4177 289.202 66.7312 289.314 66.8656V67H280.108ZM258.338 48.2195C259.637 48.2195 260.97 48.2195 262.336 48.2195C263.702 48.1971 265.035 48.1859 266.334 48.1859C267.655 48.1635 268.921 48.1523 270.13 48.1523C271.34 48.1299 272.437 48.1075 273.423 48.0851L263.982 26.7512L254.709 48.2195H258.338ZM309.123 18.8224L343.727 55.6443V31.9923C343.727 30.0885 343.705 28.4311 343.66 27.02C343.615 25.5866 343.548 24.3547 343.458 23.3244C343.369 22.2717 343.257 21.3982 343.122 20.7039C343.01 20.0095 342.887 19.4272 342.753 18.9568V18.8224H348.733V18.9568C348.599 19.4272 348.475 20.0095 348.363 20.7039C348.251 21.3982 348.151 22.2717 348.061 23.3244C347.971 24.3547 347.904 25.5866 347.859 27.02C347.815 28.4311 347.792 30.0885 347.792 31.9923V67.6719H346.616L312.012 30.8836V53.8637C312.012 55.7675 312.034 57.4362 312.079 58.8696C312.124 60.2807 312.191 61.5014 312.281 62.5316C312.37 63.5619 312.471 64.4243 312.583 65.1186C312.695 65.8129 312.818 66.3953 312.953 66.8656V67H306.972V66.8656C307.107 66.3953 307.23 65.8129 307.342 65.1186C307.476 64.4243 307.588 63.5619 307.678 62.5316C307.767 61.5014 307.835 60.2807 307.879 58.8696C307.924 57.4362 307.947 55.7675 307.947 53.8637V31.9923C307.947 30.0885 307.924 28.4311 307.879 27.02C307.835 25.5866 307.767 24.3547 307.678 23.3244C307.588 22.2717 307.476 21.3982 307.342 20.7039C307.23 20.0095 307.107 19.4272 306.972 18.9568V18.8224H309.123ZM414.267 61.3558C414.267 61.6021 414.233 61.8597 414.166 62.1285C414.121 62.3973 413.998 62.6212 413.796 62.8004C412.788 63.5619 411.691 64.2675 410.504 64.917C409.339 65.5441 408.074 66.0929 406.707 66.5632C405.341 67.0336 403.863 67.392 402.273 67.6383C400.705 67.9071 399.014 68.0415 397.199 68.0415C393.123 68.0415 389.405 67.448 386.045 66.2609C382.686 65.0514 379.796 63.3492 377.377 61.1542C374.981 58.9592 373.122 56.3275 371.8 53.259C370.479 50.1681 369.818 46.7412 369.818 42.9784C369.818 40.8506 370.087 38.7564 370.625 36.6958C371.184 34.6353 371.991 32.6754 373.043 30.8164C374.096 28.9574 375.395 27.2552 376.941 25.7097C378.486 24.1419 380.244 22.7868 382.215 21.6446C384.209 20.5023 386.393 19.6176 388.767 18.9904C391.163 18.3409 393.75 18.0161 396.528 18.0161C397.603 18.0161 398.7 18.0721 399.82 18.1841C400.94 18.2737 402.049 18.4193 403.146 18.6209C404.244 18.8 405.296 19.024 406.304 19.2928C407.334 19.5616 408.309 19.8639 409.227 20.1999L411.512 26.4153L411.243 26.5497C410.369 25.7657 409.361 25.0378 408.219 24.3659C407.077 23.694 405.856 23.1116 404.557 22.6189C403.258 22.1261 401.892 21.7453 400.458 21.4766C399.047 21.1854 397.614 21.0398 396.158 21.0398C393.336 21.0398 390.749 21.4878 388.397 22.3837C386.045 23.2572 384.018 24.5339 382.316 26.2137C380.636 27.8935 379.326 29.9541 378.385 32.3955C377.445 34.8368 376.974 37.6142 376.974 40.7274C376.974 44.1543 377.422 47.3348 378.318 50.2689C379.214 53.203 380.547 55.7451 382.316 57.8953C384.086 60.0455 386.292 61.7365 388.935 62.9684C391.6 64.1779 394.702 64.7826 398.241 64.7826C399.809 64.7826 401.209 64.6594 402.441 64.4131C403.672 64.1667 404.714 63.8643 405.565 63.506C406.416 63.1252 407.054 62.722 407.48 62.2965C407.928 61.8485 408.152 61.4454 408.152 61.087V59.7767C408.152 58.2089 408.13 56.8538 408.085 55.7115C408.04 54.5692 407.973 53.5837 407.883 52.755C407.794 51.9039 407.693 51.176 407.581 50.5713C407.469 49.9665 407.334 49.4066 407.178 48.8914V48.757H415.241V48.8914C415.106 49.3618 414.972 49.9217 414.838 50.5713C414.726 51.1984 414.625 51.9487 414.535 52.8222C414.446 53.6957 414.379 54.726 414.334 55.9131C414.289 57.0778 414.267 58.4329 414.267 59.9783V61.3558ZM472.059 31.9923C472.059 30.0885 472.037 28.4311 471.992 27.02C471.947 25.5866 471.88 24.3547 471.791 23.3244C471.701 22.2717 471.589 21.3982 471.455 20.7039C471.343 20.0095 471.22 19.4272 471.085 18.9568V18.8224C471.533 18.8448 472.003 18.856 472.496 18.856C472.922 18.8784 473.392 18.8896 473.907 18.8896C474.445 18.8896 474.994 18.8896 475.553 18.8896C476.36 18.8896 477.446 18.8112 478.812 18.6545C480.201 18.4977 481.982 18.4193 484.154 18.4193C486.17 18.4193 488.029 18.6881 489.731 19.2256C491.433 19.7407 492.901 20.4911 494.132 21.4766C495.387 22.4621 496.361 23.6828 497.055 25.1386C497.772 26.5721 498.13 28.2071 498.13 30.0437C498.13 31.5892 497.918 32.9778 497.492 34.2097C497.067 35.4192 496.462 36.4831 495.678 37.4014C494.916 38.2973 493.987 39.0588 492.889 39.6859C491.814 40.2907 490.627 40.7722 489.328 41.1306C491.232 41.4218 492.968 41.9145 494.536 42.6089C496.103 43.2808 497.447 44.1319 498.567 45.1622C499.709 46.1925 500.583 47.402 501.188 48.7906C501.815 50.1569 502.128 51.6799 502.128 53.3598C502.128 58.0857 500.572 61.6357 497.458 64.0099C494.345 66.3617 489.686 67.5375 483.482 67.5375C482.81 67.5375 482.026 67.5039 481.131 67.4368C480.235 67.392 479.316 67.336 478.376 67.2688C477.457 67.2016 476.55 67.1344 475.654 67.0672C474.758 67.0224 473.974 67 473.303 67H471.085V66.8656C471.22 66.3953 471.343 65.8129 471.455 65.1186C471.589 64.4243 471.701 63.5619 471.791 62.5316C471.88 61.5014 471.947 60.2807 471.992 58.8696C472.037 57.4362 472.059 55.7675 472.059 53.8637V31.9923ZM484.389 43.18C482.866 43.18 481.59 43.236 480.559 43.348C479.529 43.46 478.734 43.572 478.174 43.6839V53.8637C478.174 56.4843 478.219 58.6456 478.308 60.3479C478.398 62.0501 478.521 63.4388 478.678 64.5138C479.529 64.6258 480.38 64.7266 481.231 64.8162C482.082 64.9058 482.766 64.9506 483.281 64.9506C487.469 64.9506 490.526 64.0211 492.453 62.1621C494.401 60.2807 495.375 57.4026 495.375 53.5278C495.375 52.0047 495.14 50.616 494.67 49.3618C494.222 48.0851 493.539 46.9876 492.621 46.0693C491.725 45.151 490.582 44.4455 489.194 43.9527C487.827 43.4376 486.226 43.18 484.389 43.18ZM478.174 40.6602C478.801 40.7274 479.361 40.7722 479.854 40.7946C480.347 40.7946 480.873 40.7946 481.433 40.7946C482.956 40.7946 484.345 40.5819 485.599 40.1563C486.853 39.7083 487.917 39.0476 488.791 38.1741C489.686 37.3006 490.381 36.2143 490.874 34.9152C491.366 33.5938 491.613 32.0595 491.613 30.3125C491.613 28.8566 491.433 27.5352 491.075 26.3481C490.717 25.161 490.179 24.1531 489.462 23.3244C488.768 22.4733 487.906 21.8237 486.876 21.3758C485.845 20.9278 484.669 20.7039 483.348 20.7039C482.497 20.7039 481.746 20.7374 481.097 20.8046C480.47 20.8718 479.932 20.9502 479.484 21.0398C478.969 21.1294 478.532 21.2414 478.174 21.3758V40.6602ZM556.81 67V66.8656C556.855 66.7536 556.889 66.5856 556.911 66.3617C556.933 66.1377 556.945 65.9361 556.945 65.7569C556.945 65.0626 556.844 64.3011 556.642 63.4724C556.463 62.6212 556.105 61.5685 555.567 60.3143L551.502 51.176C550.248 51.1312 548.579 51.1088 546.496 51.1088C544.413 51.1088 542.162 51.1088 539.743 51.1088C537.974 51.1088 536.26 51.1088 534.603 51.1088C532.968 51.1088 531.49 51.1312 530.168 51.176L526.305 60.0455C525.969 60.8742 525.61 61.7813 525.229 62.7668C524.849 63.7523 524.658 64.749 524.658 65.7569C524.658 66.0481 524.681 66.2945 524.725 66.4961C524.77 66.6752 524.815 66.7984 524.86 66.8656V67H518.006V66.8656C518.409 66.4401 518.913 65.6897 519.518 64.6146C520.123 63.5172 520.783 62.1509 521.5 60.5159L540.751 17.8145H543.439L561.682 58.8696C562.107 59.8327 562.544 60.7734 562.992 61.6917C563.462 62.5876 563.899 63.394 564.302 64.1107C564.705 64.8274 565.064 65.4322 565.377 65.9249C565.691 66.4177 565.904 66.7312 566.016 66.8656V67H556.81ZM535.04 48.2195C536.339 48.2195 537.671 48.2195 539.038 48.2195C540.404 48.1971 541.737 48.1859 543.036 48.1859C544.357 48.1635 545.623 48.1523 546.832 48.1523C548.042 48.1299 549.139 48.1075 550.125 48.0851L540.684 26.7512L531.411 48.2195H535.04ZM591.032 64.0435C593.675 64.0435 596.105 63.9315 598.322 63.7075C600.54 63.4836 602.477 63.226 604.134 62.9348C606.061 62.6212 607.819 62.2517 609.409 61.8261L608.435 67.2688C608.166 67.2464 607.763 67.224 607.225 67.2016C606.688 67.1792 606.083 67.1568 605.411 67.1344C604.762 67.112 604.067 67.0896 603.328 67.0672C602.611 67.0672 601.928 67.056 601.279 67.0336C600.629 67.0336 600.047 67.0224 599.532 67C599.039 67 598.681 67 598.457 67H583.943V66.8656C584.077 66.3953 584.201 65.8129 584.312 65.1186C584.447 64.4243 584.559 63.5619 584.648 62.5316C584.738 61.5014 584.805 60.2807 584.85 58.8696C584.895 57.4362 584.917 55.7675 584.917 53.8637V31.9923C584.917 30.0885 584.895 28.4311 584.85 27.02C584.805 25.5866 584.738 24.3547 584.648 23.3244C584.559 22.2717 584.447 21.3982 584.312 20.7039C584.201 20.0095 584.077 19.4272 583.943 18.9568V18.8224H592.006V18.9568C591.872 19.4272 591.737 20.0095 591.603 20.7039C591.491 21.3982 591.39 22.2717 591.301 23.3244C591.233 24.3547 591.166 25.5866 591.099 27.02C591.054 28.4311 591.032 30.0885 591.032 31.9923V64.0435ZM629.654 66.8656C629.789 66.3953 629.912 65.8129 630.024 65.1186C630.136 64.4243 630.237 63.5619 630.326 62.5316C630.416 61.5014 630.483 60.2807 630.528 58.8696C630.573 57.4362 630.595 55.7675 630.595 53.8637V31.9923C630.595 30.0885 630.573 28.4311 630.528 27.02C630.483 25.5866 630.416 24.3547 630.326 23.3244C630.237 22.2717 630.136 21.3982 630.024 20.7039C629.912 20.0095 629.789 19.4272 629.654 18.9568V18.8224H637.684V18.9568C637.55 19.4272 637.415 20.0095 637.281 20.7039C637.169 21.3982 637.068 22.2717 636.979 23.3244C636.911 24.3547 636.844 25.5866 636.777 27.02C636.732 28.4311 636.71 30.0885 636.71 31.9923V53.8637C636.71 55.7675 636.732 57.4362 636.777 58.8696C636.844 60.2807 636.911 61.5014 636.979 62.5316C637.068 63.5619 637.169 64.4243 637.281 65.1186C637.415 65.8129 637.55 66.3953 637.684 66.8656V67H629.654V66.8656Z"
        style={{ fill: "var(--brand-word-color)" }}
      />
    </svg>
  );
}

function formattedWhatsappNumber() {
  return `+${whatsappNumber.slice(0, 2)} ${whatsappNumber.slice(2, 5)} ${whatsappNumber.slice(
    5,
    9,
  )} ${whatsappNumber.slice(9)}`;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const [scrolled, setScrolled] = useState(false);
  const t = getCopy(locale);
  const bookingLink = whatsappLink(generalBookingMessage(locale));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Kembang Bali Home Spa Service home">
          <BrandMark className="brand-icon" size={30} />
          <BrandWordmark className="brand-wordmark" height={26} />
        </a>
        <div className="nav-links" aria-label="Main navigation">
          {t.nav.map((label, index) => (
            <a className="nav-link" href={navTargets[index]} key={label}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <div className="lang-toggle" aria-label="Language selector">
            {locales.map((item) => (
              <button
                className={locale === item.code ? "active" : ""}
                type="button"
                aria-pressed={locale === item.code}
                onClick={() => setLocale(item.code)}
                key={item.code}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a className="nav-book-link" href={bookingLink}>
            <MessageCircle size={17} />
            {locale === "id" ? "Booking" : "Book"}
          </a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-arrow hero-arrow-prev" aria-hidden="true">
          <ChevronLeft size={20} />
        </div>
        <div className="hero-arrow hero-arrow-next" aria-hidden="true">
          <ChevronRight size={20} />
        </div>
        <div className="hero-content">
          <div className="hero-top">
            <p className="eyebrow">
              <Sparkles size={16} />
              {t.hero.eyebrow}
            </p>
            <h1 className="hero-title">{t.hero.title}</h1>
          </div>
          <div className="hero-divider" aria-hidden="true" />
          <div className="hero-bottom-row">
            <p className="hero-bottom-desc">{t.hero.copy}</p>
            <div className="hero-bottom-info" aria-label="Service highlights">
              {t.hero.proof.map((item, index) => {
                const icons = [Star, Clock3, ShieldCheck, BadgeCheck];
                const Icon = icons[index];
                return (
                  <span key={item}>
                    <Icon size={15} />
                    {item}
                  </span>
                );
              })}
            </div>
            <div className="hero-bottom-cta-group">
              <a className="button white-button" href={bookingLink}>
                <MessageCircle size={18} />
                {t.hero.primary}
              </a>
              <a className="hero-secondary-link" href="#services">
                {t.hero.secondary}
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-strip" aria-label="Quick booking summary">
        <div>
          <span>{t.booking[0]}</span>
          <strong>{t.booking[1]}</strong>
        </div>
        <div>
          <span>{t.booking[2]}</span>
          <strong>{t.booking[3]}</strong>
        </div>
        <div>
          <span>{t.booking[4]}</span>
          <strong>{t.booking[5]}</strong>
        </div>
        <a href={bookingLink}>
          {t.booking[6]}
          <ChevronRight size={18} />
        </a>
      </section>

      <section id="services" className="section">
        <div className="section-heading center">
          <p className="eyebrow">{t.servicesEyebrow}</p>
          <h2>{t.servicesTitle}</h2>
          <p className="desc">{t.servicesCopy}</p>
        </div>
        <div className="service-grid">
          {t.services.map((service) => (
            <article className="service-card" key={service.name}>
              {"image" in service && service.image ? (
                <Image
                  className="service-image"
                  src={service.image}
                  alt={`${service.name} treatment`}
                  width={640}
                  height={400}
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              ) : null}
              <span className="service-tag">
                <Sparkles size={15} />
                {service.tag}
              </span>
              <h3>{service.name}</h3>
              <p>{service.text}</p>
              <ul className="rate-list">
                {service.rates.map((rate) => (
                  <li key={rate}>{rate}</li>
                ))}
              </ul>
              <a
                className="inline-button"
                href={whatsappLink(packageBookingMessage(service, locale))}
                aria-label={`${t.serviceBook} ${service.name}`}
              >
                {t.serviceBook}
                <ChevronRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="marque-section" aria-hidden="true">
        <div className="marque-text-wrapper">
          {[0, 1].map((block) => (
            <div className="marque-text-block" key={block}>
              {t.services.map((service) => (
                <p className="marque-text" key={service.name}>
                  {service.name}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="section split-section">
        <div className="image-panel">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
            alt="Spa therapist preparing towels and oils"
            fill
            sizes="(max-width: 991px) 100vw, 42vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="steps">
          <p className="eyebrow">{t.howEyebrow}</p>
          <h2>{t.howTitle}</h2>
          {t.steps.map((step, index) => {
            const icons = [MessageCircle, CalendarCheck, HeartHandshake];
            const Icon = icons[index];
            return (
              <div className="step" key={step[0]}>
                <Icon />
                <div>
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="trust-band">
        {t.trust.map((item) => (
          <div key={item[0]}>
            <strong>{item[0]}</strong>
            <span>{item[1]}</span>
          </div>
        ))}
      </section>

      <section id="policy" className="section">
        <div className="section-heading center">
          <p className="eyebrow">{t.policyEyebrow}</p>
          <h2>{t.policyTitle}</h2>
          <p className="desc">{t.policyIntro}</p>
        </div>
        <div className="policy-grid">
          <article>
            <h3>
              <Check size={22} />
              {t.policyOfferTitle}
            </h3>
            <ul>
              {t.policyOffers.map((item) => (
                <li key={item}>
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="article-no">
            <h3>
              <X size={22} />
              {t.policyNoTitle}
            </h3>
            <ul>
              {t.policyNos.map((item) => (
                <li key={item}>
                  <X size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="policy-note">{t.policyNote}</p>
      </section>

      <div className="bg-grey">
        <section id="areas" className="section">
          <div className="section-heading">
            <p className="eyebrow">{t.areasEyebrow}</p>
            <h2>{t.areasTitle}</h2>
            <p className="desc">{t.areasCopy}</p>
          </div>
          <div className="area-grid">
            {areas.map((area) => (
              <span key={area}>
                <MapPin size={16} />
                {area}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="section testimonial-section">
        <div className="quote">
          <div className="stars" aria-label="5 stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote>{t.quote}</blockquote>
          <p className="quote-by">{t.quoteBy}</p>
        </div>
        <div className="cta-panel">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaCopy}</p>
          <a className="button solid-button" href={bookingLink}>
            <MessageCircle size={18} />
            {t.ctaButton}
          </a>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="section-heading">
          <p className="eyebrow">{t.faqEyebrow}</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map((faq) => (
            <details key={faq[0]}>
              <summary>{faq[0]}</summary>
              <p>{faq[1]}</p>
            </details>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <BrandMark className="footer-logo-icon" size={48} />
                <BrandWordmark className="footer-logo-wordmark" height={56} />
                <span className="sr-only">Kembang Bali Home Spa Service</span>
              </div>
              <p className="footer-brand-copy">{t.footerCopy}</p>
              <a className="button white-button" href={bookingLink}>
                {t.footerCta}
                <ArrowRight size={17} />
              </a>
            </div>
            <div>
              <p className="footer-widget-title">Menu</p>
              <ul className="footer-link-list">
                {t.nav.map((label, index) => (
                  <li key={label}>
                    <a className="footer-widget-text" href={navTargets[index]}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-widget-title">WhatsApp</p>
              <a className="footer-number" href={bookingLink}>
                {formattedWhatsappNumber()}
              </a>
              <p className="footer-widget-text">{t.booking[3]}</p>
            </div>
            <div>
              <p className="footer-widget-title">{t.nav[3]}</p>
              <p className="footer-area-list">{areas.join(", ")}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright-text">
              &copy; {new Date().getFullYear()} Kembang Bali Home Spa Service
            </p>
            <a className="copyright-text" href="#policy">
              {t.nav[2]}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
