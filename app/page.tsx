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
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

type Locale = "en" | "id" | "zh" | "fr" | "ko" | "ja";

const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "id", label: "ID" },
  { code: "zh", label: "中文" },
  { code: "fr", label: "FR" },
  { code: "ko", label: "KO" },
  { code: "ja", label: "JP" },
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
          <Leaf className="brand-icon" size={24} aria-hidden="true" />
          <span>Kembang Bali</span>
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
              <p className="footer-title">Kembang Bali Home Spa Service</p>
              <p>{t.footerCopy}</p>
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
