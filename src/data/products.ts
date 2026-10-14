export interface Ingredient {
  name: string;
  sanskritName: string;
  property: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: "Zap" | "ShieldCheck" | "Heart" | "Sparkles" | "Leaf" | "Flame" | "Activity" | "CheckCircle2";
}

export interface UsageStep {
  step: number;
  title: string;
  instruction: string;
  tip?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductDetail {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  dosha: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  badge: string;
  description: string;
  shortDescription: string;
  longDescription: string;
  benefits: Benefit[];
  ingredients: Ingredient[];
  usageSteps: UsageStep[];
  faqs: FaqItem[];
  freeGift?: {
    name: string;
    subtitle: string;
    value: string;
    description: string;
    image: string;
  };
  inStock?: boolean;
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: "yameny-khalta",
    slug: "yameny-khalta",
    name: "4G Avleh Yameny Khalta with Sidr Honey",
    subtitle: "Traditional Royal Majoon Formula (Includes FREE Tila Josh Jawani 15ml)",
    category: "Rasayana & Vitality Tonic",
    dosha: "Balances Vata & Pitta",
    price: "₹1,499",
    originalPrice: "₹1,999",
    discount: "Save 25%",
    rating: 4.9,
    reviewCount: 382,
    image: "/images/products/yameny-khalta-combo.jpg",
    gallery: [
      "/images/products/yameny-khalta-combo.jpg",
    ],
    badge: "Includes FREE Tila Josh Jawani",
    description:
      "A classical royal Sidr honey & herbal Rasayana formulation designed for sustained vitality, strength, and stamina. Every order includes a complimentary full-size Tila Josh Jawani 15ml Ayurvedic Vitality Oil.",
    shortDescription:
      "Royal Yemeni Sidr honey with Ashwagandha, Safed Musli, Royal Jelly, and dry fruits. Bundled with a free bottle of Tila Josh Jawani 15ml.",
    longDescription:
      "4G Avleh Yameny Khalta (Majoon) is an authentic royal restorative formulation crafted with wild-harvested Sidr Honey and revered Ayurvedic Rasayana herbs including Ashwagandha, Safed Musli, and dry fruits. Inspired by ancient royal wellness recipes, it naturally replenishes internal vitality, counters chronic fatigue, and restores stamina. In this exclusive combo, every jar is paired with a complimentary 15ml bottle of Tila Josh Jawani Ayurvedic Massage Oil, delivering a complete internal and external vitality routine.",
    freeGift: {
      name: "Tila Josh Jawani (15ml)",
      subtitle: "Ayurvedic External Vitality Oil",
      value: "₹1,499",
      description:
        "Formulated with potent botanical extracts to support localized tone, vigor, and circulation.",
      image: "/images/products/yameny-khalta-combo.jpg",
    },
    benefits: [
      {
        title: "Sustained Natural Stamina & Strength",
        description:
          "Replenishes cellular Ojas and energy levels naturally without artificial stimulants, caffeine spikes, or crashes.",
        iconName: "Zap",
      },
      {
        title: "Includes FREE Tila Josh Jawani (15ml)",
        description:
          "Enjoy internal nourishment through 4G Avleh alongside targeted external vigor with the complimentary Tila Josh Jawani oil.",
        iconName: "Flame",
      },
      {
        title: "Immunity & Tissue Rejuvenation",
        description:
          "Rich in Sidr honey antioxidants and traditional restorative herbs that strengthen natural immunity and cellular resilience.",
        iconName: "ShieldCheck",
      },
      {
        title: "Ancient Raja Maharaja Recipe",
        description:
          "Prepared following time-tested royal treatises to relieve physical fatigue and promote vitality in everyday life.",
        iconName: "Sparkles",
      },
    ],
    ingredients: [
      {
        name: "Yemeni Sidr Honey",
        sanskritName: "Madhu (Sidr)",
        property:
          "World's most revered medicinal honey, exceptionally rich in bio-active flavonoids, minerals, and live enzymes.",
      },
      {
        name: "Ashwagandha",
        sanskritName: "Withania Somnifera",
        property:
          "Premier adaptogen that regulates cortisol, counters daily stress, and enhances stamina and muscular endurance.",
      },
      {
        name: "Safed Musli",
        sanskritName: "Chlorophytum Borivilianum",
        property:
          "Revered Rasayana herb prized in classical texts for tissue replenishment, vitality, and physical vigor.",
      },
      {
        name: "Royal Jelly",
        sanskritName: "Raj Madhu",
        property:
          "Natural nutrient powerhouse packed with B-complex vitamins, amino acids, and essential trace minerals.",
      },
      {
        name: "Botanical Extracts in Tila Josh Jawani",
        sanskritName: "Tailam & Rasayana Dravyas",
        property:
          "Specialized traditional oils formulated for external application to ease muscular fatigue and support localized circulation.",
      },
      {
        name: "Saffron & Dried Nuts",
        sanskritName: "Kesar & Vatada",
        property:
          "Precious spices and cold-pressed botanical fats for sustained tissue fuel, radiance, and mood balance.",
      },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Morning Routine (4G Avleh Yameny Khalta)",
        instruction:
          "Take 1 tablespoon (approx. 10g-15g) of 4G Avleh Yameny Khalta followed by a cup of warm milk or lukewarm water.",
        tip: "Best taken in the morning with breakfast to sustain all-day vigor and physical stamina.",
      },
      {
        step: 2,
        title: "Night Routine (Tila Josh Jawani Oil)",
        instruction:
          "Dispense 5 to 7 drops of the complimentary Tila Josh Jawani Oil onto palms and massage gently until fully absorbed.",
        tip: "Apply once daily at bedtime to ease muscular tension and support localized blood flow.",
      },
      {
        step: 3,
        title: "Consistent 45-60 Day Course",
        instruction:
          "Use both formulations consistently together to experience the synergistic benefits of internal and external Ayurveda.",
        tip: "Store 4G Avleh at room temperature (do not refrigerate). Keep Tila Josh Jawani bottle tightly capped.",
      },
    ],
    faqs: [
      {
        question: "Is Tila Josh Jawani really included free with 4G Avleh?",
        answer:
          "Yes! Under our exclusive vitality segment, every order of 4G Avleh Yameny Khalta includes a full-size complimentary 15ml bottle of Tila Josh Jawani at no additional charge.",
      },
      {
        question: "How do 4G Avleh and Tila Josh Jawani work together?",
        answer:
          "They provide complete synergistic care: 4G Avleh delivers internal vitality through Sidr honey, Ashwagandha, and Safed Musli, while Tila Josh Jawani acts externally through specialized botanical oils to promote tone and circulation.",
      },
      {
        question: "How long does one combo pack last?",
        answer:
          "With the recommended daily dosage of 1 tablespoon of 4G Avleh and 5-7 drops of Tila Josh Jawani, one combo provides approximately a 30-day supply.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "No. 4G Avleh and Tila Josh Jawani are formulated from 100% pure Ayurvedic botanicals and wild Sidr honey with zero harmful chemicals, steroids, or synthetic additives.",
      },
      {
        question: "Is the packaging discreet for home delivery?",
        answer:
          "Yes. All orders are packed in plain, tamper-proof, discreet outer boxes with zero sensitive product naming on the delivery label.",
      },
      {
        question: "Can I pay online securely?",
        answer:
          "Yes, we offer 256-bit encrypted online checkout via Razorpay with fast dispatch, as well as assistance on WhatsApp.",
      },
    ],
  },
  {
    id: "hikmo-sugar-madhumeh-daman",
    slug: "hikmo-sugar-madhumeh-daman",
    name: "Hikmo Sugar & Madhumeh Daman Powder",
    subtitle: "Ayurvedic Blood Sugar & Metabolic Glycemic Support Combo",
    category: "Madhumeha & Glucose Care",
    dosha: "Balances Kapha & Pitta",
    price: "₹1,499",
    originalPrice: "₹1,899",
    discount: "Save 21%",
    rating: 4.8,
    reviewCount: 264,
    image: "/images/products/hikmo-madhumeh-combo.jpg",
    gallery: [
      "/images/products/hikmo-madhumeh-combo.jpg",
    ],
    badge: "100% Herbal Diabetes Care",
    description:
      "A classical synergistic dual formulation combining Hikmo Sugar (100g) with Madhumeh Daman Powder to support healthy blood glucose levels, manage polyurea, and rejuvenate pancreatic vitality.",
    shortDescription:
      "Dual botanical formulation containing Hikmo Sugar & Madhumeh Daman Powder with Amla, Jamun seed, Gurmar, and Vijaysar for daily blood sugar and metabolic balance.",
    longDescription:
      "The Hikmo Sugar & Madhumeh Daman Powder combo is a specialized Ayurvedic regimen formulated to support healthy carbohydrate metabolism, regulate fasting and post-meal glucose spikes, and alleviate polyurea (frequent urination). Harnessing revered Tikta (bitter) and Kashaya (astringent) botanicals—including pure Amla, Jamun seed, Gurmar (Gymnema Sylvestre), Karela, Methi, and Vijaysar—it aids the body's natural insulin sensitivity, curtails sweet cravings, and counters glycemic fatigue without harsh side effects.",
    benefits: [
      {
        title: "Regulates Blood Glucose Spikes",
        description:
          "Synergistic bitter-tonic botanicals help prevent post-meal sugar surges and promote steady daily glycemic balance.",
        iconName: "Activity",
      },
      {
        title: "Relief from Polyurea & Frequent Urination",
        description:
          "Targeted herbs strengthen renal and bladder tone, easing the discomfort of frequent daytime and nighttime urination.",
        iconName: "ShieldCheck",
      },
      {
        title: "Pancreatic & Beta-Cell Nourishment",
        description:
          "Enriched with Vijaysar, Karela, and Gurmar to naturally rejuvenate pancreatic beta-cells and metabolic efficiency.",
        iconName: "Flame",
      },
      {
        title: "Curtails Sugar & Carb Cravings",
        description:
          "Gurmar ('The Sugar Destroyer') naturally desensitizes sweet taste receptors, curbing unhealthy cravings and glycemic fatigue.",
        iconName: "Zap",
      },
    ],
    ingredients: [
      {
        name: "Amla (Indian Gooseberry)",
        sanskritName: "Amalaki (Phyllanthus Emblica)",
        property:
          "Rich natural source of bioavailable Vitamin C and chromium that protects pancreatic tissues and enhances insulin response.",
      },
      {
        name: "Jamun Seed",
        sanskritName: "Syzygium Cumini",
        property:
          "Contains Jamboline glycoside which prevents the excessive conversion of dietary starch into glucose.",
      },
      {
        name: "Gurmar (Gymnema Sylvestre)",
        sanskritName: "Meshashringi",
        property:
          "Revered as the 'Sugar Destroyer'; suppresses intestinal sugar absorption and supports optimal beta-cell function.",
      },
      {
        name: "Karela (Bitter Gourd)",
        sanskritName: "Momordica Charantia",
        property:
          "Contains Charantin and Polypeptide-p, natural plant principles that facilitate cellular glucose utilization.",
      },
      {
        name: "Vijaysar",
        sanskritName: "Pterocarpus Marsupium",
        property:
          "Ancient Rasayana wood celebrated in classical Samhitas for pancreatic beta-cell rejuvenation and healthy lipid metabolism.",
      },
      {
        name: "Methi (Fenugreek)",
        sanskritName: "Trigonella Foenum-Graecum",
        property:
          "High in galactomannan soluble fiber which slows carbohydrate breakdown and improves systemic glucose sensitivity.",
      },
    ],
    usageSteps: [
      {
        step: 1,
        title: "Morning Dose",
        instruction:
          "Take 1 level teaspoon of the powder mixture stirred into half a glass of lukewarm water 30 minutes before breakfast.",
        tip: "Consistent timing before morning meals gives the strongest glycemic stabilization.",
      },
      {
        step: 2,
        title: "Evening Dose",
        instruction:
          "Take 1 level teaspoon stirred into lukewarm water 30 minutes before evening dinner.",
        tip: "Helps regulate post-dinner blood sugar levels and reduces nocturnal urination.",
      },
      {
        step: 3,
        title: "Monitor Your Progress",
        instruction:
          "Continue daily alongside a wholesome diet and regular hydration. Track blood glucose levels periodically.",
        tip: "A consistent 60 to 90 day course produces optimal long-term metabolic stability.",
      },
    ],
    faqs: [
      {
        question: "Can I take this combo alongside my allopathic diabetes medicines?",
        answer:
          "Yes. Maintain a 45-60 minute gap between taking the Ayurvedic powder and your prescribed allopathic medicines. Always monitor your blood sugar regularly and consult your healthcare practitioner.",
      },
      {
        question: "What does the combo include?",
        answer:
          "Each combo pack includes one container of Hikmo Sugar (100g) and one bottle of Madhumeh Daman Powder for comprehensive daily blood sugar management.",
      },
      {
        question: "Are there any added sugars or artificial additives?",
        answer:
          "No. Both formulations are 100% pure botanical extracts and dried herbal powders with zero added sugar, artificial sweeteners, chemicals, or preservatives.",
      },
      {
        question: "How soon can I expect to notice improvements?",
        answer:
          "Many customers report reduced cravings, decreased urinary frequency, and better daytime energy within 10 to 14 days of regular use.",
      },
      {
        question: "How long does one combo set last?",
        answer:
          "With the recommended dosage of 1 teaspoon twice daily, the combo set provides approximately a 30-day supply.",
      },
      {
        question: "How is it packaged and shipped?",
        answer:
          "Packaged in secure, tamper-evident food-grade containers with moisture-locking seals to preserve botanical potency during transit.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductDetail | undefined {
  if (slug === "lava31-gold") {
    return PRODUCTS.find((p) => p.slug === "yameny-khalta");
  }
  return PRODUCTS.find((p) => p.slug === slug);
}
