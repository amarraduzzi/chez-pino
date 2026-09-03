// The complete Chez Pino menu — sourced verbatim (dishes + MAD prices) from
// MENU_DATA.md, the authoritative menu the client supplied. Nothing here is
// invented: every dish, price and drink comes straight from that file.
// French descriptions are the source of truth; English is a faithful
// translation; Arabic is a lighter, reasonable translation (dish names stay
// in their original Italian/French form across all three languages, as is
// conventional for an Italian menu).
import type { LocalizedText } from '../i18n/languages';

export interface MenuItem {
  name: string;
  description?: LocalizedText;
  // A number in MAD, or the literal 'sur-demande' for "Prix sur demande"
  // (La Marmite du Pêcheur has no confirmed price).
  price: number | 'sur-demande';
}

export interface MenuCategory {
  id: string;
  label: LocalizedText;
  note?: LocalizedText;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'hamburgers',
    label: { fr: 'Hamburgers', en: 'Burgers', ar: 'برغر' },
    items: [
      {
        name: 'César Burger',
        price: 69,
        description: {
          fr: 'Pain brioché au sésame, suprême de poulet pané, romaine, laitue, tomate, copeaux de parmesan et sauce César.',
          en: 'Sesame brioche bun, breaded chicken supreme, romaine, lettuce, tomato, parmesan shavings and Caesar sauce.',
          ar: 'خبز بريوش بالسمسم، صدر دجاج مقرمش، خس روماني، خس، طماطم، برمازان وصلصة سيزار.',
        },
      },
      {
        name: 'Caprese Burger',
        price: 75,
        description: {
          fr: 'Pain brioché au sésame, steak haché de bœuf, tomate, mozzarella fondante, fondue de cheddar, oignons rouges, roquette, pesto et sauce burger maison.',
          en: 'Sesame brioche bun, beef patty, tomato, melted mozzarella, cheddar fondue, red onions, rocket, pesto and house burger sauce.',
          ar: 'خبز بريوش بالسمسم، برغر لحم بقري، طماطم، موزاريلا ذائبة، شيدر، بصل أحمر، جرجير، بيستو وصلصة برغر منزلية.',
        },
      },
      {
        name: 'Smash Burger',
        price: 85,
        description: {
          fr: 'Pain brioché au sésame, 2 steaks hachés de bœuf écrasés, cheddar fondant, laitue, oignons caramélisés, champignons et sauce burger maison.',
          en: 'Sesame brioche bun, 2 smashed beef patties, melted cheddar, lettuce, caramelized onions, mushrooms and house burger sauce.',
          ar: 'خبز بريوش بالسمسم، قطعتان من اللحم البقري المهروس، شيدر ذائب، خس، بصل مكرمل، فطر وصلصة برغر منزلية.',
        },
      },
      { name: 'Portion de Frites', price: 18, description: { fr: 'Portion de frites maison.', en: 'A portion of fries.', ar: 'حصة بطاطا مقلية.' } },
    ],
  },
  {
    id: 'entrees',
    label: { fr: 'Antipasti / Entrées', en: 'Antipasti / Starters', ar: 'مقبلات' },
    items: [
      {
        name: 'Mac & Cheese',
        price: 45,
        description: { fr: 'Gratin de macaronis à la sauce cheddar et mozzarella.', en: 'Macaroni gratin with cheddar and mozzarella sauce.', ar: 'مكرونة مجراتنة بصلصة الشيدر والموزاريلا.' },
      },
      {
        name: 'Aubergines alla Parmigiana',
        price: 45,
        description: { fr: 'Gratin d\'aubergines, sauce tomate, basilic, parmesan et mozzarella.', en: 'Eggplant gratin, tomato sauce, basil, parmesan and mozzarella.', ar: 'باذنجان مجراتن بصلصة الطماطم والريحان والبرمازان والموزاريلا.' },
      },
      {
        name: 'Croquettes de Poulet',
        price: 55,
        description: { fr: 'Trois croquettes de poulet, sauce crémeuse aux champignons et sauce aïoli.', en: 'Three chicken croquettes, creamy mushroom sauce and aioli sauce.', ar: 'ثلاث كروكيت دجاج، صلصة كريمية بالفطر وصلصة أيولي.' },
      },
      {
        name: 'Croquettes de Gambas',
        price: 59,
        description: { fr: 'Trois croquettes de gambas, sauce aux poivrons rouges et tomates et sauce sriracha.', en: 'Three prawn croquettes, red pepper and tomato sauce and sriracha sauce.', ar: 'ثلاث كروكيت جمبري، صلصة الفلفل الأحمر والطماطم وصلصة سريراتشا.' },
      },
      {
        name: 'Gamberi al Pil-Pil',
        price: 69,
        description: { fr: 'Gambas au beurre, huile d\'olive vierge, jus de citron, ail et persil.', en: 'Prawns in butter, virgin olive oil, lemon juice, garlic and parsley.', ar: 'جمبري بالزبدة وزيت الزيتون البكر وعصير الليمون والثوم والبقدونس.' },
      },
    ],
  },
  {
    id: 'pizza',
    label: { fr: 'Pizza', en: 'Pizza', ar: 'بيتزا' },
    note: {
      fr: 'Pizzas italiennes authentiques — pâte reposée 48h.',
      en: 'Authentic Italian pizzas — dough rested 48 hours.',
      ar: 'بيتزا إيطالية أصيلة — عجينة مخمرة لمدة 48 ساعة.',
    },
    items: [
      { name: 'Margaritta', price: 49, description: { fr: 'Sauce tomate maison, mozzarella, tomates cerises, basilic et huile d\'olive.', en: 'House tomato sauce, mozzarella, cherry tomatoes, basil and olive oil.', ar: 'صلصة طماطم منزلية، موزاريلا، طماطم كرزية، ريحان وزيت زيتون.' } },
      { name: 'Napolitana', price: 59, description: { fr: 'Sauce tomate maison, mozzarella, tomates cerises, anchois, olives noires et câpres.', en: 'House tomato sauce, mozzarella, cherry tomatoes, anchovies, black olives and capers.', ar: 'صلصة طماطم منزلية، موزاريلا، طماطم كرزية، أنشوجة، زيتون أسود وكبر.' } },
      { name: 'Spinaci e Ricotta', price: 69, description: { fr: 'Sauce fromagère, mozzarella, épinards, ricotta, parmesan et huile d\'olive.', en: 'Cheese sauce, mozzarella, spinach, ricotta, parmesan and olive oil.', ar: 'صلصة جبنية، موزاريلا، سبانخ، ريكوتا، برمازان وزيت زيتون.' } },
      { name: 'Tonno', price: 75, description: { fr: 'Sauce tomate maison, mozzarella, thon, olives noires, oignon rouge, tomates cerise, roquette et basilic.', en: 'House tomato sauce, mozzarella, tuna, black olives, red onion, cherry tomatoes, rocket and basil.', ar: 'صلصة طماطم منزلية، موزاريلا، تونة، زيتون أسود، بصل أحمر، طماطم كرزية، جرجير وريحان.' } },
      { name: 'Pollo', price: 75, description: { fr: 'Sauce tomate maison, mozzarella, poulet mariné, champignons, oignons rouges, roquette, parmesan et basilic.', en: 'House tomato sauce, mozzarella, marinated chicken, mushrooms, red onions, rocket, parmesan and basil.', ar: 'صلصة طماطم منزلية، موزاريلا، دجاج متبل، فطر، بصل أحمر، جرجير، برمازان وريحان.' } },
      { name: 'Tirolese', price: 79, description: { fr: 'Sauce tomate maison, mozzarella, tomates cerises, jambon de bœuf, roquette et parmesan.', en: 'House tomato sauce, mozzarella, cherry tomatoes, beef ham, rocket and parmesan.', ar: 'صلصة طماطم منزلية، موزاريلا، طماطم كرزية، لحم بقري مقدد، جرجير وبرمازان.' } },
      { name: 'Rustica', price: 79, description: { fr: 'Sauce tomate maison, mozzarella, viande hachée de bœuf, champignons, oignons rouges, poivrons marinés, roquette et parmesan.', en: 'House tomato sauce, mozzarella, minced beef, mushrooms, red onions, marinated peppers, rocket and parmesan.', ar: 'صلصة طماطم منزلية، موزاريلا، لحم بقري مفروم، فطر، بصل أحمر، فلفل متبل، جرجير وبرمازان.' } },
      { name: 'Ortolana', price: 79, description: { fr: 'Sauce fromagère, légumes grillés (aubergines, poivrons verts et rouges, épinards, courgettes, champignons, tomates cerises), sauce pesto et parmesan.', en: 'Cheese sauce, grilled vegetables (eggplant, green and red peppers, spinach, zucchini, mushrooms, cherry tomatoes), pesto sauce and parmesan.', ar: 'صلصة جبنية، خضار مشوية (باذنجان، فلفل أخضر وأحمر، سبانخ، كوسة، فطر، طماطم كرزية)، صلصة بيستو وبرمازان.' } },
      { name: 'Verdura', price: 79, description: { fr: 'Sauce fromagère, mozzarella, ricotta, champignons, avocat, tomates cerises, épinards, roquette, parmesan, pesto.', en: 'Cheese sauce, mozzarella, ricotta, mushrooms, avocado, cherry tomatoes, spinach, rocket, parmesan, pesto.', ar: 'صلصة جبنية، موزاريلا، ريكوتا، فطر، أفوكادو، طماطم كرزية، سبانخ، جرجير، برمازان، بيستو.' } },
      { name: 'Funghi', price: 79, description: { fr: 'Sauce fromagère, mozzarella, champignons, tapenade d\'olives noires, huile d\'olive et parmesan.', en: 'Cheese sauce, mozzarella, mushrooms, black olive tapenade, olive oil and parmesan.', ar: 'صلصة جبنية، موزاريلا، فطر، تابيناد زيتون أسود، زيت زيتون وبرمازان.' } },
    ],
  },
  {
    id: 'pasta',
    label: { fr: 'Pasta', en: 'Pasta', ar: 'باستا' },
    items: [
      { name: 'Penne all\'Arabiatta', price: 49, description: { fr: 'Sauce tomate maison, piment, ail, huile d\'olive et parmesan.', en: 'House tomato sauce, chili, garlic, olive oil and parmesan.', ar: 'صلصة طماطم منزلية، فلفل حار، ثوم، زيت زيتون وبرمازان.' } },
      { name: 'Spaguetti Pomodoro', price: 55, description: { fr: 'Sauce tomate maison, ail, tomates cerises, huile d\'olive, basilic et parmesan.', en: 'House tomato sauce, garlic, cherry tomatoes, olive oil, basil and parmesan.', ar: 'صلصة طماطم منزلية، ثوم، طماطم كرزية، زيت زيتون، ريحان وبرمازان.' } },
      { name: 'Spaguetti Pesto', price: 59, description: { fr: 'Sauce pesto, huile d\'olive, basilic et parmesan.', en: 'Pesto sauce, olive oil, basil and parmesan.', ar: 'صلصة بيستو، زيت زيتون، ريحان وبرمازان.' } },
      { name: 'Canielloni Ricotta e Spinaci', price: 65, description: { fr: 'Sauce fromagère, épinards, ricotta, mozzarella et parmesan.', en: 'Cheese sauce, spinach, ricotta, mozzarella and parmesan.', ar: 'صلصة جبنية، سبانخ، ريكوتا، موزاريلا وبرمازان.' } },
      { name: 'Penne Premavera', price: 65, description: { fr: 'Sauce à l\'ail et huile d\'olive, légumes grillés (courgettes, aubergines, champignons, tomates cerises) et pesto.', en: 'Garlic and olive oil sauce, grilled vegetables (zucchini, eggplant, mushrooms, cherry tomatoes) and pesto.', ar: 'صلصة الثوم وزيت الزيتون، خضار مشوية (كوسة، باذنجان، فطر، طماطم كرزية) وبيستو.' } },
      { name: 'Penne al Tonno', price: 75, description: { fr: 'Sauce tomate maison, tomates cerises, thon, olives noires, câpres et basilic.', en: 'House tomato sauce, cherry tomatoes, tuna, black olives, capers and basil.', ar: 'صلصة طماطم منزلية، طماطم كرزية، تونة، زيتون أسود، كبر وريحان.' } },
      { name: 'Tagliatelle Alfredo', price: 75, description: { fr: 'Sauce Alfredo, poulet, champignons, pesto et parmesan.', en: 'Alfredo sauce, chicken, mushrooms, pesto and parmesan.', ar: 'صلصة ألفريدو، دجاج، فطر، بيستو وبرمازان.' } },
      { name: 'Spaguetti alla Bolognese', price: 75, description: { fr: 'Sauce bolognaise, basilic et parmesan.', en: 'Bolognese sauce, basil and parmesan.', ar: 'صلصة بولونيز، ريحان وبرمازان.' } },
      { name: 'Penne 4 Formaggi', price: 79, description: { fr: 'Sauce fromagère, mozzarella, parmesan, gorgonzola et ricotta.', en: 'Cheese sauce, mozzarella, parmesan, gorgonzola and ricotta.', ar: 'صلصة جبنية، موزاريلا، برمازان، غورغونزولا وريكوتا.' } },
      { name: 'Lasagne alla Bolognese', price: 79, description: { fr: 'Sauce bolognaise, sauce fromagère, basilic, mozzarella et parmesan.', en: 'Bolognese sauce, cheese sauce, basil, mozzarella and parmesan.', ar: 'صلصة بولونيز، صلصة جبنية، ريحان، موزاريلا وبرمازان.' } },
      { name: 'Linguine Pino', price: 89, description: { fr: 'Sauce fromagère, gambas, champignons et parmesan.', en: 'Cheese sauce, prawns, mushrooms and parmesan.', ar: 'صلصة جبنية، جمبري، فطر وبرمازان.' } },
      { name: 'Tagliatelle Frutti di Mare', price: 99, description: { fr: 'Sauce fromagère, gambas, calamar, moules, ail et huile d\'olive.', en: 'Cheese sauce, prawns, squid, mussels, garlic and olive oil.', ar: 'صلصة جبنية، جمبري، حبار، بلح البحر، ثوم وزيت زيتون.' } },
    ],
  },
  {
    id: 'plats',
    label: { fr: 'Plats (Secondi Piatti)', en: 'Mains (Secondi Piatti)', ar: 'أطباق رئيسية' },
    note: {
      fr: '* Sauce au choix : champignons / curry / poivre vert / moutarde à l\'ancienne.',
      en: '* Choice of sauce: mushroom / curry / green pepper / wholegrain mustard.',
      ar: '* اختر الصلصة: فطر / كاري / فلفل أخضر / خردل.',
    },
    items: [
      { name: 'Suprême de Volaille', price: 79, description: { fr: 'Suprême de poulet mariné et grillé, purée de pommes de terre à la noix de muscade, légumes de saison sautés à l\'ail et au persil, sauce onctueuse aux champignons*.', en: 'Grilled marinated chicken supreme, nutmeg mashed potatoes, seasonal vegetables sautéed with garlic and parsley, creamy mushroom sauce*.', ar: 'صدر دجاج متبل ومشوي، بوريه بطاطا بجوزة الطيب، خضار موسمية مقلية بالثوم والبقدونس، صلصة كريمية بالفطر*.' } },
      { name: 'Filet de Bœuf', price: 129, description: { fr: 'Filet de bœuf grillé, purée de pommes de terre à la noix de muscade, légumes de saison sautés à l\'ail et au persil, sauce onctueuse au poivre vert*.', en: 'Grilled beef fillet, nutmeg mashed potatoes, seasonal vegetables sautéed with garlic and parsley, creamy green pepper sauce*.', ar: 'فيليه لحم بقري مشوي، بوريه بطاطا بجوزة الطيب، خضار موسمية مقلية بالثوم والبقدونس، صلصة كريمية بالفلفل الأخضر*.' } },
      { name: 'Pavé de Saumon', price: 129, description: { fr: 'Pavé de saumon, purée de pommes de terre à la noix de muscade, légumes de saison sautés à l\'ail et au persil, sauce crémeuse au beurre et au citron*.', en: 'Salmon steak, nutmeg mashed potatoes, seasonal vegetables sautéed with garlic and parsley, creamy butter and lemon sauce*.', ar: 'شريحة سلمون، بوريه بطاطا بجوزة الطيب، خضار موسمية مقلية بالثوم والبقدونس، صلصة كريمية بالزبدة والليمون*.' } },
      { name: 'La Marmite du Pêcheur', price: 'sur-demande', description: { fr: 'Gambas, calamar, moules, poisson blanc, roquette et tomates cerises, sauce onctueuse aux bisques de crevettes.', en: 'Prawns, squid, mussels, white fish, rocket and cherry tomatoes, creamy shrimp bisque sauce.', ar: 'جمبري، حبار، بلح البحر، سمك أبيض، جرجير وطماطم كرزية، صلصة كريمية بحساء الجمبري.' } },
    ],
  },
  {
    id: 'salades',
    label: { fr: 'Salades (Insalata)', en: 'Salads (Insalata)', ar: 'سلطات' },
    items: [
      { name: 'Caprese', price: 55, description: { fr: 'Tranches de tomates fraîches, mozzarella et pesto.', en: 'Fresh tomato slices, mozzarella and pesto.', ar: 'شرائح طماطم طازجة، موزاريلا وبيستو.' } },
      { name: 'Légumes Grillés', price: 59, description: { fr: 'Aubergines, poivrons verts/rouges/jaunes, courgettes, tomates cerises, mesclun et sauce César.', en: 'Eggplant, green/red/yellow peppers, zucchini, cherry tomatoes, mesclun and Caesar sauce.', ar: 'باذنجان، فلفل أخضر/أحمر/أصفر، كوسة، طماطم كرزية، خس متنوع وصلصة سيزار.' } },
      { name: 'César aux Gambas', price: 75, description: { fr: 'Gambas panées, salade romaine, croûtons à l\'ail, œuf, tomates cerises, parmesan et sauce César.', en: 'Breaded prawns, romaine lettuce, garlic croutons, egg, cherry tomatoes, parmesan and Caesar sauce.', ar: 'جمبري مقرمش، خس روماني، خبز محمص بالثوم، بيض، طماطم كرزية، برمازان وصلصة سيزار.' } },
      { name: 'L\'Exotique', price: 79, description: { fr: 'Gambas, avocat, mesclun de salade, sauce rose.', en: 'Prawns, avocado, mesclun, pink sauce.', ar: 'جمبري، أفوكادو، خس متنوع، صلصة وردية.' } },
      { name: 'Tartare de Saumon', price: 85, description: { fr: 'Saumon, avocat, mangue, aneth, citron et filet d\'huile extra-vierge.', en: 'Salmon, avocado, mango, dill, lemon and a drizzle of extra-virgin olive oil.', ar: 'سلمون، أفوكادو، مانجو، شبت، ليمون وقليل من زيت الزيتون البكر.' } },
      { name: 'Burrata', price: 119, description: { fr: 'Burrata, roquette, sauce pesto, crème balsamique.', en: 'Burrata, rocket, pesto sauce, balsamic cream.', ar: 'بوراتا، جرجير، صلصة بيستو، كريمة البلسميك.' } },
    ],
  },
  {
    id: 'dessert',
    label: { fr: 'Dessert', en: 'Dessert', ar: 'حلويات' },
    items: [
      { name: 'Tiramisu Traditionnel', price: 45 },
      { name: 'Panna Cotta', price: 45, description: { fr: 'Panna cotta et coulis de fruits.', en: 'Panna cotta with fruit coulis.', ar: 'بانا كوتا مع صلصة الفواكه.' } },
      { name: 'Crème Brûlée', price: 45 },
      { name: 'Coupe de Glace', price: 45, description: { fr: '3 parfums au choix : chocolat, vanille, pistache, noisette et sorbet fraise.', en: '3 flavours of your choice: chocolate, vanilla, pistachio, hazelnut and strawberry sorbet.', ar: '3 نكهات حسب الاختيار: شوكولاتة، فانيليا، فستق، بندق وسوربيه الفراولة.' } },
      { name: 'Fondant au Chocolat', price: 50, description: { fr: 'Accompagné d\'une boule de glace vanille.', en: 'Served with a scoop of vanilla ice cream.', ar: 'يُقدَّم مع كرة آيس كريم فانيليا.' } },
      { name: 'Crumble à la Poire', price: 50, description: { fr: 'Poires caramélisées, crumble, éclats de chocolat, pistache et glace pistache.', en: 'Caramelized pears, crumble, chocolate shavings, pistachio and pistachio ice cream.', ar: 'كمثرى مكرملة، كرامبل، شوكولاتة، فستق وآيس كريم الفستق.' } },
    ],
  },
];

// --- Carte des boissons -----------------------------------------------------
export interface DrinkItem {
  name: string;
  price: number;
}
export interface DrinkSubcategory {
  label: LocalizedText;
  items: DrinkItem[];
}

export const drinkMenu: DrinkSubcategory[] = [
  {
    label: { fr: 'Cafés', en: 'Coffee', ar: 'قهوة' },
    items: [
      { name: 'Espresso', price: 18 },
      { name: 'Americano', price: 18 },
      { name: 'Cappuccino', price: 22 },
      { name: 'Capsule Nespresso', price: 22 },
      { name: 'Double Espresso', price: 24 },
    ],
  },
  {
    label: { fr: 'Lattes', en: 'Lattes', ar: 'لاتيه' },
    items: [
      { name: 'Café Latte', price: 22 },
      { name: 'Mochaccino', price: 30 },
      { name: 'French Coffee', price: 30 },
      { name: 'Italian Coffee', price: 30 },
      { name: 'Affogato', price: 30 },
      { name: 'Toffee Caramel', price: 30 },
    ],
  },
  {
    label: { fr: 'Chocolats chauds', en: 'Hot chocolate', ar: 'شوكولاتة ساخنة' },
    items: [
      { name: 'Traditionnel', price: 20 },
      { name: 'À l\'Ancienne', price: 35 },
      { name: 'Viennois', price: 40 },
    ],
  },
  {
    label: { fr: 'Thés & Infusions', en: 'Teas & Infusions', ar: 'شاي وأعشاب' },
    items: [
      { name: 'Thé Marocain', price: 18 },
      { name: 'Thé Chamali', price: 18 },
      { name: 'Infusions', price: 20 },
    ],
  },
  {
    label: { fr: 'Boissons fraîches', en: 'Cold drinks', ar: 'مشروبات باردة' },
    items: [
      { name: 'Eau Minérale 50cl', price: 14 },
      { name: 'Eau Gazeuse 50cl', price: 16 },
      { name: 'Sodas', price: 18 },
      { name: 'Red Bull', price: 35 },
    ],
  },
  {
    label: { fr: 'Jus de fruits frais', en: 'Fresh fruit juice', ar: 'عصائر طازجة' },
    items: [
      { name: 'Orange', price: 28 },
      { name: 'Carotte', price: 28 },
      { name: 'Citron', price: 28 },
      { name: 'Citron Gingembre', price: 30 },
      { name: 'Banane', price: 30 },
      { name: 'Pommes', price: 30 },
      { name: 'Fraise', price: 35 },
      { name: 'Ananas', price: 35 },
      { name: 'Mangue', price: 35 },
      { name: 'Kiwi', price: 35 },
      { name: 'Avocat', price: 35 },
      { name: 'Panaché', price: 35 },
      { name: 'Avocat Fruits Secs', price: 45 },
    ],
  },
  {
    label: { fr: 'Iced Coffee', en: 'Iced Coffee', ar: 'قهوة مثلجة' },
    items: [
      { name: 'Iced Americano', price: 20 },
      { name: 'Iced Latte', price: 24 },
      { name: 'Iced Mocha', price: 28 },
      { name: 'Iced Rose Latte', price: 32 },
      { name: 'Iced French Latte', price: 32 },
      { name: 'Iced Italian Latte', price: 32 },
    ],
  },
  {
    label: { fr: 'Iced Lemonade', en: 'Iced Lemonade', ar: 'ليموناضة مثلجة' },
    items: [
      { name: 'Basilico', price: 32 },
      { name: 'Hibiscus', price: 32 },
      { name: 'Passion', price: 32 },
      { name: 'Pino', price: 35 },
    ],
  },
  {
    label: { fr: 'Frappuccino', en: 'Frappuccino', ar: 'فرابتشينو' },
    items: [
      { name: 'Mocha Frappuccino', price: 35 },
      { name: 'Caramel Frappuccino', price: 35 },
      { name: 'Frappuccino Nutella', price: 42 },
      { name: 'Frappuccino Oreo', price: 42 },
      { name: 'Frappuccino Ferrero', price: 42 },
    ],
  },
  {
    label: { fr: 'Smoothies', en: 'Smoothies', ar: 'سموذي' },
    items: [
      { name: 'Smoothie Hawaï', price: 45 },
      { name: 'Smoothie Blue Mango', price: 45 },
    ],
  },
  {
    label: { fr: 'Milk-shake', en: 'Milkshake', ar: 'ميلك شيك' },
    items: [
      { name: 'Classique', price: 28 },
      { name: 'Prestige', price: 40 },
      { name: 'Oreo', price: 45 },
      { name: 'Ferrero', price: 45 },
      { name: 'Prestige (variante)', price: 48 },
    ],
  },
  {
    label: { fr: 'Mojitos', en: 'Mojitos', ar: 'موخيتو' },
    items: [
      { name: 'Virgin Mojito', price: 30 },
      { name: 'Mojito Blueberry', price: 32 },
      { name: 'Mojito Mixte', price: 35 },
    ],
  },
  {
    label: { fr: 'Cocktails', en: 'Cocktails (mocktails)', ar: 'كوكتيلات' },
    items: [
      { name: 'Piña Colada', price: 35 },
      { name: 'Blue Hawaïane', price: 38 },
      { name: 'Green Avocado', price: 42 },
      { name: 'Rose Espresso Martini', price: 45 },
      { name: 'Maldivas', price: 48 },
      { name: 'Venézuela', price: 48 },
      { name: 'Bora-Bora', price: 48 },
    ],
  },
  {
    label: { fr: 'Coupes de glace', en: 'Ice cream scoops', ar: 'كرات الآيس كريم' },
    items: [
      { name: '1 Boule', price: 15 },
      { name: '3 Boules', price: 40 },
    ],
  },
  {
    label: { fr: 'Plaisir gourmand', en: 'Sweet treats', ar: 'حلويات إضافية' },
    items: [
      { name: 'Éclair', price: 28 },
      { name: 'Millefeuille', price: 29 },
      { name: 'Forêt Noire', price: 30 },
      { name: 'Tarte', price: 32 },
      { name: 'Suprême Amandes', price: 32 },
    ],
  },
];

// A short curated selection for the Menu (highlights) page — a subset of
// menuCategories, one or two signature items per section, so the homepage
// and highlights page don't have to repeat the entire carte.
export const menuHighlightIds = ['Smash Burger', 'Margaritta', 'Linguine Pino', 'Burrata', 'Tiramisu Traditionnel', 'Filet de Bœuf'];
