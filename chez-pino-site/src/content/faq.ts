// FAQ content — plain question/answer pairs, no nesting. The FAQ page
// renders this list AND emits it as FAQPage JSON-LD (see
// src/content-pages/FaqContent.astro) — one source of truth for both.
//
// Content built from the verified brand facts for Chez Pino (Rabat):
// address, phone, Google rating (4.1★, 87 avis), 50–100 MAD price range,
// and the menu in MENU_DATA.md. Nothing here is fabricated; where a fact
// isn't confirmed (e.g. card payment), the answer stays honest about that.
import type { LocalizedText } from '../i18n/languages';

export interface FaqItem {
  question: LocalizedText;
  answer: LocalizedText;
  category: 'pratique' | 'menu' | 'reservation';
}

export const faqCategoryLabels: Record<FaqItem['category'], LocalizedText> = {
  pratique: { fr: 'Infos pratiques', en: 'Practical info', ar: 'معلومات عملية' },
  menu: { fr: 'La carte', en: 'The menu', ar: 'القائمة' },
  reservation: { fr: 'Réservations', en: 'Reservations', ar: 'الحجوزات' },
};

export const faqItems: FaqItem[] = [
  {
    question: {
      fr: 'Où se trouve Chez Pino ?',
      en: 'Where is Chez Pino located?',
      ar: 'أين يقع مطعم Chez Pino؟',
    },
    answer: {
      fr: 'Chez Pino se trouve Imm 60, magasin n°4, Prestigia — Riyad Al Andalous, à Rabat.',
      en: 'Chez Pino is located at Imm 60, magasin n°4, Prestigia — Riyad Al Andalous, Rabat.',
      ar: 'يقع مطعم Chez Pino في العمارة 60، المحل رقم 4، بريستيجيا — رياض الأندلس، الرباط.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Quels sont les horaires d\'ouverture ?',
      en: 'What are the opening hours?',
      ar: 'ما هي ساعات العمل؟',
    },
    answer: {
      fr: 'Chez Pino est ouvert tous les jours, de 12h00 à 23h00. (L\'heure d\'ouverture exacte est en cours de confirmation auprès du restaurant — appelez-nous si vous arrivez tôt.)',
      en: 'Chez Pino is open every day, from 12:00 PM to 11:00 PM. (The exact opening time is still being confirmed with the restaurant — call ahead if you\'re arriving early.)',
      ar: 'مطعم Chez Pino مفتوح كل يوم من الساعة 12:00 حتى 23:00. (وقت الفتح الدقيق قيد التأكيد مع المطعم — اتصلوا بنا إذا كنتم ستصلون مبكرًا.)',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Quel est le budget moyen par personne ?',
      en: 'What is the average budget per person?',
      ar: 'ما هي الميزانية المتوسطة للشخص الواحد؟',
    },
    answer: {
      fr: 'Comptez entre 50 et 100 MAD par personne selon les plats choisis (source : profil Google de l\'établissement).',
      en: 'Expect between 50 and 100 MAD per person depending on the dishes chosen (source: the venue\'s Google Business Profile).',
      ar: 'يتراوح المبلغ بين 50 و100 درهم للشخص الواحد حسب الأطباق المختارة (المصدر: ملف المطعم على Google).',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Peut-on payer par carte bancaire ?',
      en: 'Can we pay by card?',
      ar: 'هل يمكن الدفع بالبطاقة البنكية؟',
    },
    answer: {
      fr: 'Le paiement en espèces est accepté sur place ; contactez-nous par téléphone pour confirmer les autres moyens de paiement disponibles.',
      en: 'Cash payment is accepted in the restaurant; contact us by phone to confirm other available payment methods.',
      ar: 'يُقبل الدفع نقدًا في المطعم؛ تواصلوا معنا هاتفيًا لتأكيد وسائل الدفع الأخرى المتاحة.',
    },
    category: 'pratique',
  },
  {
    question: {
      fr: 'Que trouve-t-on sur la carte ?',
      en: 'What\'s on the menu?',
      ar: 'ماذا تحتوي القائمة؟',
    },
    answer: {
      fr: 'Une cuisine italienne généreuse : pizzas à pâte reposée 48h, pâtes fraîches, burgers, viandes et poissons grillés, salades, desserts maison, et une carte de boissons très complète (cafés, jus frais, cocktails, mocktails, milk-shakes...). Voir la page Carte pour le détail complet.',
      en: 'Generous Italian cooking: pizzas made with 48-hour rested dough, fresh pasta, burgers, grilled meat and fish, salads, homemade desserts, and a very complete drinks list (coffee, fresh juice, cocktails, mocktails, milkshakes...). See the Full Menu page for the complete list.',
      ar: 'مطبخ إيطالي غني: بيتزا بعجينة مخمرة 48 ساعة، باستا طازجة، برغر، لحوم وأسماك مشوية، سلطات، حلويات منزلية، وقائمة مشروبات شاملة جدًا (قهوة، عصائر طازجة، كوكتيلات، موكتيلات، ميلك شيك...). انظروا صفحة القائمة الكاملة للتفاصيل.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Proposez-vous des options végétariennes ?',
      en: 'Do you offer vegetarian options?',
      ar: 'هل تقدمون خيارات نباتية؟',
    },
    answer: {
      fr: 'Oui — plusieurs pizzas (Spinaci e Ricotta, Ortolana, Verdura, Funghi...), des pâtes (Arabiatta, Pomodoro, Pesto...) et des entrées comme les Aubergines alla Parmigiana ou le Mac & Cheese sont végétariennes.',
      en: 'Yes — several pizzas (Spinaci e Ricotta, Ortolana, Verdura, Funghi...), pastas (Arabiatta, Pomodoro, Pesto...) and starters like the Aubergines alla Parmigiana or Mac & Cheese are vegetarian.',
      ar: 'نعم — العديد من أطباق البيتزا (Spinaci e Ricotta وOrtolana وVerdura وFunghi...) والباستا (Arabiatta وPomodoro وPesto...) والمقبلات مثل الباذنجان بارميجيانا أو Mac & Cheese نباتية.',
    },
    category: 'menu',
  },
  {
    question: {
      fr: 'Comment réserver une table ?',
      en: 'How do I reserve a table?',
      ar: 'كيف يمكنني حجز طاولة؟',
    },
    answer: {
      fr: 'Le plus rapide est d\'appeler directement le restaurant au 05 37 71 70 70. Vous pouvez aussi remplir le formulaire de la page Réserver — notre équipe confirme chaque demande par téléphone.',
      en: 'The fastest way is to call the restaurant directly at 05 37 71 70 70. You can also fill in the form on the Reserve page — our team confirms every request by phone.',
      ar: 'أسرع طريقة هي الاتصال بالمطعم مباشرة على 05 37 71 70 70. يمكنكم أيضًا تعبئة النموذج في صفحة الحجز — يقوم فريقنا بتأكيد كل طلب هاتفيًا.',
    },
    category: 'reservation',
  },
  {
    question: {
      fr: 'Organisez-vous des groupes ou événements privés ?',
      en: 'Do you host groups or private events?',
      ar: 'هل تستقبلون مجموعات أو فعاليات خاصة؟',
    },
    answer: {
      fr: 'Pour un groupe important ou une occasion spéciale, contactez-nous par téléphone : nous nous adaptons au cas par cas selon la disponibilité de la salle.',
      en: 'For a larger group or a special occasion, please contact us by phone: we adapt case by case depending on room availability.',
      ar: 'لمجموعة كبيرة أو مناسبة خاصة، تواصلوا معنا هاتفيًا: نتعامل مع كل حالة حسب توفر القاعة.',
    },
    category: 'reservation',
  },
];
