type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "سیسیلی",
    desc: "طعمی آتشین با ترکیبی از پپرونی تند، فلفل هالوپینو، فلفل قرمز و پنیر موزارلا؛ هر لقمه‌اش پر از هیجانه!",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "بیکن دیلاکس",
    desc: "گوشت گریل‌شده با بیکن ترد، پنیر چدار، پیاز کاراملی و سس باربیکیو؛ لذیذ و خوش‌عطر.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: "بلا ناپولی",
    desc: "پیتزای ایتالیایی کلاسیک با نان ترد، سس گوجه، موزارلای تازه، سبزی‌های معطر، کاهو و سس مایونز.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
  id: 4,
  title: "آرابیاتا تند",
  desc: "پاستای تند با سس گوجه فرنگی، سیر، فلفل قرمز و ریحان تازه؛ انتخابی برای عاشقان غذاهای تند.",
  img: "/temporary/p4.png",
  price: 26.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
{
  id: 5,
  title: "فیستا هالوپینو",
  desc: "برگر آبدار با هالوپینوی تند، پنیر پپر جک، سس چیپوتله و نان تست‌شده؛ طعمی جسورانه!",
  img: "/temporary/p5.png",
  price: 29.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
{
  id: 6,
  title: "مارگریتا مجیک",
  desc: "پیتزای نازک با گوجه شیرین، ریحان تازه، موزارلای خامه‌ای و روغن زیتون بکر؛ کلاسیک و خوش‌طعم.",
  img: "/temporary/p6.png",
  price: 24.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
{
  id: 7,
  title: "لینگوئینی سیر و پارمزان",
  desc: "پاستای لینگوئینی با سس خامه‌ای پارمزان، سیر تازه، فلفل دلمه‌ای و گوجه گیلاسی؛ لذیذ و معطر.",
  img: "/temporary/p7.png",
  price: 28.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
{
  id: 8,
  title: "لذت مدیترانه‌ای",
  desc: "پیتزای الهام‌گرفته از مدیترانه با پنیر فتا، زیتون کالاماتا، گوجه خشک‌شده و پاشش اورگانو.",
  img: "/temporary/p8.png",
  price: 32.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
{
  id: 9,
  title: "تِریاکی هاوایی",
  desc: "برگر با طعم استوایی؛ گوشت آبدار با سس تریاکی، آناناس گریل‌شده، بیکن ترد و کاهوی تازه.",
  img: "/temporary/p9.png",
  price: 29.9,
  options: [
    { title: "کوچک", additionalPrice: 0 },
    { title: "متوسط", additionalPrice: 4 },
    { title: "بزرگ", additionalPrice: 6 },
  ],
},
];

export const pizzas: Products = [
  {
    id: 1,
    title: "سیسیلی",
    desc: "ترکیبی آتشین از پپرونی تند، فلفل هالوپینو، فلفل قرمز خرد شده و پنیر موزارلا ذوب شده؛ هر لقمه‌اش پر از هیجانه!",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: "لذت مدیترانه‌ای",
    desc: "پیتزای الهام‌گرفته از مدیترانه با پنیر فتا، زیتون کالاماتا، گوجه خشک‌شده و پاشش اورگانو.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: "بلا ناپولی",
    desc: "پیتزای ایتالیایی کلاسیک با نان ترد، سس گوجه، موزارلای تازه، سبزی‌های معطر، کاهو و سس مایونز.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 4,
    title: "پستو پریماورا",
    desc: "پیتزای خوشمزه با سس پستو، سبزیجات تازه و پنیر موزارلا؛ ترکیبی از طعم‌های بهاری.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 5,
    title: "وجی سوپریم",
    desc: "پیتزای گیاهی با ترکیبی از سبزیجات تازه، سس گوجه و پنیر موزارلا؛ انتخابی سالم و خوشمزه.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
  {
    id: 6,
    title: "فور چیز فنتسی",
    desc: "تجربه‌ای از پنیرهای مختلف با ترکیبی از موزارلا، چدار، پروولون و پارمزان؛ لذیذ و خوشمزه.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      { title: "کوچک", additionalPrice: 0 },
      { title: "متوسط", additionalPrice: 4 },
      { title: "بزرگ", additionalPrice: 6 },
    ],
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "سیسیلی",
  desc: "با ترکیبی آتشین از پپرونی تند، فلفل هالوپینو، فلفل قرمز و پنیر موزارلای آب‌شده، طعمی هیجان‌انگیز را در هر لقمه تجربه کنید.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "کوچک",
      additionalPrice: 0,
    },
    {
      title: "متوسط",
      additionalPrice: 4,
    },
    {
      title: "بزرگ",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const mainMenu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "پاستاهای ایتالیایی",
    desc: "طعم بی‌نظیر پاستاهای دست‌ساز ایتالیایی را با منوی ویژه ما تجربه کنید.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "برگرهای آبدار",
    desc: "لذت برگرهای آبدار با طعم‌های جسورانه و تاپینگ‌های گورمه را بچشید.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "پیتزاهای پنیری",
    desc: "بهشت پیتزا: برش‌های وسوسه‌انگیز، تاپینگ‌های خوشمزه و پنیر فراوان.",
    img: "/temporary/m3.png",
    color: "white",
  },
];