import { TabletInfo } from "../TabletsUI/TabletsAbout/about";

interface Translations {
  [key: string]: {
    welcomeTitle: string;
    greeting: string;
    buttonLabel: string;
    LogoLabel: string;
    homeLabel: string;
    phoneLabel: string;
    tabletLabel: string;
    accessoriesLabel: string;
    authorizationLabel: string;
    favoriteLabel: string;
    chooseOptionLabel: string;
    itemsLabel: string;
    cartLabel: string;
    cartTitle: string;
    favoriteEmptyTitle: string;
    cartEmptyTitle: string;
    registrationLabel: string;
    catalogTitle: string;
    brandModelsTitle: string;
    brandModelsSubTitle: string;
    categoryTitle: string;
    categoryPhones: string;
    categoryTablets: string;
    availableColorsTitle: string;
    categoryAccessories: string;
    viewButtonLabel: string;
    modelsTitle: string;
    backTitle: string;
    hotPriceTitle: string;
    accessoriesComing: string;
    memoryLabel: string;
    productsInBasketLabel: string;
    readyTitle: string;
    authTitle: string;
    signUpLabel: string;
    registrationSubItems: {
      signIn: string;
      signOut: string;
    };
    cartState: {
      addCart: string;
      addedCart: string;
    };
    footerMenuLinks: {
      github: string;
      linkedIn: string;
      telegram: string;
    };
    pagesTitle: {
      mobilePhones: string;
      tablets: string;
      accessories: string;
      favorite: string;
      cart: string;
    };
    backButtonLabel: string;
    sortBy: string;
    chooseItems: string;
    paginationButtonsLabels: {
      prev: string;
      next: string;
    };
    optionsLabels: {
      name: string;
      models: string;
      price: string;
    };
    itemsOptions: {
      itemsTwo: string;
      itemsFour: string;
      itemsSix: string;
      itemsEight: string;
      itemsSixteen: string;
    };
    productParams: {
      screen: string;
      capacity: string;
      ram: string;
    };
    aboutItems: {
      title: string;
      subTitle: string;
      subSubTitle: string;
    };
    cameraItems: {
      cameraTitle: string;
      cameraSubTitle: string;
    };
    zoomItems: {
      zoomTitle: string;
      zoomSubTitle: string;
    };
    email: string;
    password: string;
    aboutTablets: TabletInfo[];
    aboutTabletsTitle: string;
  };
  ua: {
    welcomeTitle: string;
    greeting: string;
    LogoLabel: string;
    buttonLabel: string;
    homeLabel: string;
    phoneLabel: string;
    tabletLabel: string;
    accessoriesLabel: string;
    authorizationLabel: string;
    chooseOptionLabel: string;
    itemsLabel: string;
    favoriteLabel: string;
    favoriteEmptyTitle: string;
    cartLabel: string;
    cartEmptyTitle: string;
    registrationLabel: string;
    memoryLabel: string;
    catalogTitle: string;
    brandModelsTitle: string;
    brandModelsSubTitle: string;
    cartTitle: string;
    availableColorsTitle: string;
    categoryTitle: string;
    categoryPhones: string;
    categoryTablets: string;
    categoryAccessories: string;
    viewButtonLabel: string;
    backTitle: string;
    modelsTitle: string;
    hotPriceTitle: string;
    accessoriesComing: string;
    productsInBasketLabel: string;
    readyTitle: string;
    authTitle: string;
    signUpLabel: string;
    registrationSubItems: {
      signIn: string;
      signOut: string;
    };
    cartState: {
      addCart: string;
      addedCart: string;
    };
    footerMenuLinks: {
      github: string;
      linkedIn: string;
      telegram: string;
    };
    pagesTitle: {
      mobilePhones: string;
      tablets: string;
      accessories: string;
      favorite: string;
      cart: string;
    };
    backButtonLabel: string;
    sortBy: string;
    chooseItems: string;
    paginationButtonsLabels: {
      prev: string;
      next: string;
    };
    optionsLabels: {
      name: string;
      models: string;
      price: string;
    };
    itemsOptions: {
      itemsTwo: string;
      itemsFour: string;
      itemsSix: string;
      itemsEight: string;
      itemsSixteen: string;
    };
    productParams: {
      screen: string;
      capacity: string;
      ram: string;
    };
    aboutItems: {
      title: string;
      subTitle: string;
      subSubTitle: string;
    };
    cameraItems: {
      cameraTitle: string;
      cameraSubTitle: string;
    };
    zoomItems: {
      zoomTitle: string;
      zoomSubTitle: string;
    };
    email: string;
    password: string;
    aboutTablets: TabletInfo[];
    aboutTabletsTitle: string;
  };
}

export const translations: Translations = {
  en: {
    welcomeTitle: "Welcome to iMarketplace!",
    greeting: "Hello!",
    LogoLabel: "iMarketplace",
    buttonLabel: "Switch to Ukrainian",
    homeLabel: "Home",
    tabletLabel: "Tablets",
    phoneLabel: "Phones",
    accessoriesLabel: "Accessories",
    authorizationLabel: "Authorization",
    favoriteLabel: "Favorites",
    itemsLabel: "Items",
    chooseOptionLabel: "Choose an option",
    favoriteEmptyTitle: "Favorite page is empty",
    cartEmptyTitle: "Cart page is empty",
    cartLabel: "Basket",
    memoryLabel: "GB",
    registrationLabel: "Register",
    catalogTitle: "Welcome to iMarketplace! It's great to have you here",
    brandModelsTitle: "Brand New Models",
    brandModelsSubTitle: "Swipe to view the catalog",
    categoryTitle: "Shop by category",
    viewButtonLabel: "View Product",
    categoryPhones: "Mobile phones",
    categoryTablets: "Tablets",
    categoryAccessories: "Accessories",
    modelsTitle: "models",
    hotPriceTitle: "Hot prices",
    accessoriesComing: "Accessories is coming",
    backTitle: "Back to Phones",
    cartTitle: "Cart",
    availableColorsTitle: "Available colors",
    productsInBasketLabel: "Products in cart:",
    readyTitle: "Ready to buy ",
    authTitle: "Let's go to Authorization",
    signUpLabel: "Sign Up",
    registrationSubItems: {
      signIn: "Sign in",
      signOut: "Sign out",
    },
    cartState: {
      addCart: "Add to cart",
      addedCart: "Added to cart",
    },
    footerMenuLinks: {
      github: "GitHub",
      linkedIn: "LinkedIn",
      telegram: "Telegram",
    },
    pagesTitle: {
      mobilePhones: "Mobile Phones",
      tablets: "Tablets",
      accessories: "Accessories",
      favorite: "Favorites",
      cart: "Cart",
    },
    backButtonLabel: "Back",
    sortBy: "Sort By:",
    chooseItems: "Choose items:",
    paginationButtonsLabels: {
      prev: "Prev page",
      next: "Next page",
    },
    optionsLabels: {
      name: "Name",
      models: "Models",
      price: "Price",
    },
    itemsOptions: {
      itemsTwo: "Items 2",
      itemsFour: "Items 4",
      itemsSix: "Items 6",
      itemsEight: "Items 8",
      itemsSixteen: "Items 16",
    },
    productParams: {
      screen: "Screen",
      capacity: "Capacity",
      ram: "Ram",
    },
    aboutItems: {
      title: "About",
      subTitle: "And then there was Pro",
      subSubTitle:
        " A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
    cameraItems: {
      cameraTitle: "Camera",
      cameraSubTitle:
        "Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.",
    },
    zoomItems: {
      zoomTitle:
        "Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.",
      zoomSubTitle:
        "iPhone lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.",
    },
    email: "Email",
    password: "Password",
    aboutTablets: [
      {
        title: "Powerful Performance",
        text: [
          "Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.",
          "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease.",
        ],
      },
      {
        title: "Stunning Liquid Retina Display",
        text: [
          "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
          "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity.",
        ],
      },
      {
        title: "Versatile Camera System",
        text: [
          "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
          "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance.",
        ],
      },
    ],
    aboutTabletsTitle: "About Tablets",
  },
  ua: {
    welcomeTitle: "Ласкаво просимо до Маркетплейсу!",
    greeting: "Привіт!",
    LogoLabel: "Макретплейс",
    buttonLabel: "Переключитися на англійську",
    homeLabel: "Дім",
    cartTitle: "Кошик",
    phoneLabel: "Телефони",
    tabletLabel: "Планшети",
    accessoriesLabel: "Аксесуари",
    authorizationLabel: "Авторизація",
    favoriteLabel: "Улюблені",
    itemsLabel: "Елементів",
    availableColorsTitle: "Доступні кольори",
    chooseOptionLabel: "Виберіть опцію",
    favoriteEmptyTitle: "Сторінка улюблені порожня",
    cartEmptyTitle: "Сторінка кошика порожня",
    cartLabel: "Кошик",
    registrationLabel: "Увійти",
    catalogTitle: "Ласкаво просимо до Макретплейсу! Чудово, що ти тут",
    brandModelsTitle: "Нові моделі",
    brandModelsSubTitle: "Гортайте, щоб переглянути каталог",
    categoryTitle: "Купуйте за категоріями",
    viewButtonLabel: "Переглянути продукт",
    categoryPhones: "Телефони",
    categoryTablets: "Планшети",
    categoryAccessories: "Аксесуари",
    modelsTitle: "моделей",
    hotPriceTitle: "Гарячі ціни",
    accessoriesComing: "Аксесуари скоро з'являться",
    backTitle: "Назад до телефони",
    memoryLabel: "ГБ",
    productsInBasketLabel: "Товарів в кошику:",
    readyTitle: "Готові до покупки",
    authTitle: "Переходимо до авторизації",
    signUpLabel: "Увійти",
    registrationSubItems: {
      signIn: "Зареєструватись",
      signOut: "Вийти",
    },
    cartState: {
      addCart: "Додати в кошик",
      addedCart: "Додано в кошик",
    },
    footerMenuLinks: {
      github: "Гітхаб",
      linkedIn: "Лінкед",
      telegram: "Телеграм",
    },
    pagesTitle: {
      mobilePhones: "Телефони",
      tablets: "Планшети",
      accessories: "Аксесуари",
      favorite: "Улюблені",
      cart: "Товари",
    },
    backButtonLabel: "Назад",
    sortBy: "Сортувати за:",
    chooseItems: "Виберіть елементи:",
    paginationButtonsLabels: {
      prev: "Попередня",
      next: "Наступна",
    },
    optionsLabels: {
      name: "За Ім'ям",
      models: "За моделями",
      price: "За ціною",
    },
    itemsOptions: {
      itemsTwo: "2 Елементи",
      itemsFour: "4 Елементи",
      itemsSix: "6 Елементів",
      itemsEight: "8 Елементів",
      itemsSixteen: "16 Елементів",
    },
    productParams: {
      screen: "Екран",
      capacity: "Пам'ять",
      ram: "ОЗУ",
    },
    aboutItems: {
      title: "Про продукт",
      subTitle: "А потім був Pro",
      subSubTitle:
        "Трансформаційна система з трьома камерами, яка додає масу можливостей без ускладнень. Безпрецедентний стрибок у часі автономної роботи. І приголомшливий чіп, який подвоює машинне навчання та розширює межі того, що може робити смартфон. Ласкаво просимо до першого достатньо потужного iPhone, який можна назвати Pro.",
    },
    cameraItems: {
      cameraTitle: "Камера",
      cameraSubTitle:
        "Зустрічайте першу систему з трьома камерами, яка поєднує передові технології з легендарною простотою iPhone. Знімайте до чотирьох разів більше кадрів. Отримуйте чудові зображення за різко слабкого освітлення. Знімайте відео найвищої якості на смартфон, а потім редагуйте за допомогою тих самих інструментів, які вам подобаються для фотографій. Ви ніколи не стріляли з чогось подібного.",
    },
    zoomItems: {
      zoomTitle:
        "Стріляй. Переверніть його. Збільште його. Обріжте його. Виріжте його. Запаліть його. Налаштуйте його. Люблю це.",
      zoomSubTitle:
        "iPhone дозволяє знімати неймовірно реалістичні відео з більшою деталізацією та плавним рухом. Неперевершена потужність обробки означає, що він може знімати відео 4K із розширеним динамічним діапазоном і кінематографічною стабілізацією відео — і все це зі швидкістю 60 кадрів/с. Ви також отримуєте більше творчого контролю, завдяки вчетверо більшій кількості сцен і новим потужним інструментам редагування.",
    },
    email: "Е-Пошта",
    password: "Пароль",
    aboutTablets: [
      {
        title: "Потужна продуктивність",
        text: [
          "Відчуйте неймовірну потужність і продуктивність з Apple iPad Pro 11. Завдяки чіпу M1 він забезпечує новий рівень продуктивності, роблячи його швидшим і ефективнішим, ніж будь-коли раніше.",
          "Незалежно від того, редагуєте ви фотографії, створюєте ілюстрації або виконуєте багатозадачність із вимогливими додатками, iPad Pro 11 легко впорається з усім",
        ],
      },
      {
        title: "Чудовий дисплей Liquid Retina",
        text: [
          "Насолоджуйтеся яскравим і захоплюючим візуальним досвідом на дисплеї Liquid Retina iPad Pro 11. Завдяки технології ProMotion і True Tone дисплей адаптується до вашого середовища, забезпечуючи плавне прокручування, точну точність кольорів і неймовірну деталізацію.",
          "Від перегляду фільмів до редагування відео – дисплей iPad Pro 11 оживляє ваш вміст із приголомшливою чіткістю.",
        ],
      },
      {
        title: "Універсальна система камери",
        text: [
          "Знімайте приголомшливі фотографії та відео за допомогою передової системи камери iPad Pro 11. Завдяки 12-мегапіксельній ультраширокій передній камері та 12-мегапіксельній ширококутній задній камері зі сканером LiDAR ви можете робити високоякісні знімки та насолоджуватися враженнями від доповненої реальності.",
          "Незалежно від того, чи ви здійснюєте відеодзвінки, скануєте документи чи записуєте відео 4K, система камери iPad Pro 11 забезпечує виняткову продуктивність.",
        ],
      },
    ],
    aboutTabletsTitle: "Про Планшети",
  },
};
