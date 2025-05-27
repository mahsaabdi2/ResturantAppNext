type Product = {
  id: string | number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  quantity?:number;
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

export const burgers :Products = [
  {
    id: 101,
    title: "چیز برگر کلاسیک",
    desc: "گوشت گریل‌شده آبدار، پنیر چدار ذوب‌شده، کاهو، گوجه، خیارشور و سس مخصوص در نان نرم برگر.",
    img: "/temporary/b1.jpg",
    price: 18.9,
  },
  {
    id: 102,
    title: "دابل برگر دیوانه‌وار",
    desc: "دو لایه گوشت آبدار، دو لایه پنیر، پیاز کاراملی و سس اسپشیال؛ حجیم و خوشمزه!",
    img: "/temporary/b2.jpg",
    price: 24.5,
  },
  {
    id: 103,
    title: "چیکن برگر ترد",
    desc: "فیله سوخاری طلایی، کاهو تازه، مایونز سیر و نان نرم؛ انتخابی سبک و متفاوت.",
    img: "/temporary/b3.jpg",
    price: 20.0,
  },
  {
    id: 104,
    title: "برگر قارچ و پنیر",
    desc: "گوشت گریل‌شده با سس قارچ خامه‌ای، پنیر چدار و نان تست‌شده؛ طعمی عمیق و خاص.",
    img: "/temporary/b4.jpg",
    price: 22.9,
  },
  {
    id: 105,
    title: "برگر گیاهی گرین‌پاور",
    desc: "پَتی گیاهی خانگی، آووکادو، گوجه، کاهو و سس مخصوص گیاهی؛ انتخاب سالم‌خورها.",
    img: "/temporary/b5.jpg",
    price: 19.5,
  },
  {
    id: 106,
    title: "برگر اسپایسی مکزیکی",
    desc: "گوشت آبدار با فلفل تند، پنیر پپر جک، پیاز سوخاری و سس تند؛ مناسب عاشقان هیجان.",
    img: "/temporary/b6.jpg",
    price: 23.0,
  },
];

export const pastas: Products = [
  {
    id: 201,
    title: "پاستا آلفردو با مرغ",
    desc: "پاستای فتوچینی با سس خامه‌ای آلفردو، فیله مرغ گریل‌شده و پنیر پارمزان تازه.",
    img: "/pastas/pa1.jpg",
    price: 28.5,
  },
  {
    id: 202,
    title: "پاستا بلونز کلاسیک",
    desc: "پنه با سس گوشتی بلونز، گوجه تازه، سبزیجات معطر و پنیر رنده‌شده.",
    img: "/temporary/pa2.jpg",
    price: 26.0,
  },
  {
    id: 203,
    title: "پاستا سبزیجات بهاری",
    desc: "اسپاگتی با سبزیجات تازه، روغن زیتون، سیر و طعم تابستونی سبک و سالم.",
    img: "/temporary/pa3.jpg",
    price: 24.0,
  },
  {
    id: 204,
    title: "پاستا پستو و پنیر",
    desc: "پنه با سس پستوی ریحان، پنیر موزارلا و گوجه خشک‌شده؛ ترکیبی از طراوت و طعم.",
    img: "/temporary/pa4.jpg",
    price: 27.2,
  },
  {
    id: 205,
    title: "پاستا دریایی لوکس",
    desc: "فتوچینی با میگو، صدف، سس خامه‌ای سیر و لیمو؛ انتخابی خاص و لوکس.",
    img: "/temporary/pa5.jpg",
    price: 33.0,
  },
  {
    id: 206,
    title: "پاستا آریبیتا اسپایسی",
    desc: "اسپاگتی با سس گوجه تند، فلفل قرمز و سیر؛ مناسب عاشقان طعم‌های آتشین.",
    img: "/temporary/pa6.jpg",
    price: 25.5,
  },
];

