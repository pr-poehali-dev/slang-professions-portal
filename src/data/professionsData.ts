export interface SlangTerm {
  term: string;
  definition: string;
  example?: string;
}

export interface EnglishTerm {
  english: string;
  russian: string;
  definition: string;
}

export interface Profession {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  slang: SlangTerm[];
  englishTerms: EnglishTerm[];
}

export const professionsData: Profession[] = [
  {
    id: "it",
    name: "IT",
    description: "Информационные технологии",
    icon: "💻",
    color: "from-purple-500 to-pink-500",
    slang: [
      {
        term: "Багфикс",
        definition: "Исправление ошибки в коде",
        example: "Сегодня весь день делал багфикс в старом проекте",
      },
      {
        term: "Продакшн",
        definition: "Рабочая среда, где работает готовое приложение",
        example: "Не деплой на продакшн в пятницу!",
      },
      {
        term: "Релиз",
        definition: "Выпуск новой версии программы",
        example: "Завтра релиз новой версии приложения",
      },
      {
        term: "Рефакторинг",
        definition: "Переписывание кода без изменения функциональности",
        example: "Потратил день на рефакторинг этого модуля",
      },
      {
        term: "Хардкод",
        definition: "Жестко зашитые значения в коде",
        example: "Убери хардкод, сделай настройку",
      },
      {
        term: "Коммит",
        definition: "Сохранение изменений в системе контроля версий",
        example: "Не забудь запушить коммит",
      },
      {
        term: "Мердж",
        definition: "Слияние веток в системе контроля версий",
        example: "Сделай мердж в основную ветку",
      },
      {
        term: "Стейджинг",
        definition: "Тестовая среда перед продакшном",
        example: "Сначала протестируем на стейджинге",
      },
      {
        term: "Фича",
        definition: "Новая функциональность в программе",
        example: "Добавил новую фичу для пользователей",
      },
      {
        term: "Костыль",
        definition: "Временное решение проблемы",
        example: "Поставил костыль, потом переделаем",
      },
      {
        term: "Легаси",
        definition: "Старый код, который сложно поддерживать",
        example: "Этот легаси-код никто не трогает",
      },
      {
        term: "Хотфикс",
        definition: "Срочное исправление критической ошибки",
        example: "Нужен хотфикс, продакшн лежит",
      },
    ],
    englishTerms: [
      {
        english: "Deploy",
        russian: "Деплой",
        definition: "Развертывание приложения на сервере",
      },
      {
        english: "Framework",
        russian: "Фреймворк",
        definition: "Программная платформа для разработки",
      },
      {
        english: "Database",
        russian: "База данных",
        definition: "Система хранения структурированной информации",
      },
      {
        english: "API",
        russian: "АПИ",
        definition: "Интерфейс программирования приложений",
      },
      {
        english: "Backend",
        russian: "Бэкенд",
        definition: "Серверная часть приложения",
      },
      {
        english: "Frontend",
        russian: "Фронтенд",
        definition: "Клиентская часть приложения",
      },
      {
        english: "Repository",
        russian: "Репозиторий",
        definition: "Хранилище кода проекта",
      },
      {
        english: "Algorithm",
        russian: "Алгоритм",
        definition: "Последовательность действий для решения задачи",
      },
    ],
  },
  {
    id: "network-admin",
    name: "Сетевое администрирование",
    description: "Управление компьютерными сетями",
    icon: "🌐",
    color: "from-blue-500 to-cyan-500",
    slang: [
      {
        term: "Пинг",
        definition: "Проверка доступности узла в сети",
        example: "Пропингуй сервер, что-то он не отвечает",
      },
      {
        term: "Дропы",
        definition: "Потерянные пакеты данных",
        example: "На линии много дропов, нужно проверить кабель",
      },
      {
        term: "Аптайм",
        definition: "Время бесперебойной работы системы",
        example: "У нас аптайм 99.9% в этом месяце",
      },
      {
        term: "Траффик",
        definition: "Поток данных в сети",
        example: "Сегодня траффик превысил норму",
      },
      {
        term: "Лаги",
        definition: "Задержки в передаче данных",
        example: "На сервере лаги, пользователи жалуются",
      },
      {
        term: "Свич",
        definition: "Сетевой коммутатор",
        example: "Перезагрузи свич в серверной",
      },
      {
        term: "Хаб",
        definition: "Центральный узел сети",
        example: "Главный хаб находится в дата-центре",
      },
      {
        term: "Патчкорд",
        definition: "Короткий соединительный кабель",
        example: "Замени патчкорд, соединение нестабильное",
      },
      {
        term: "VLAN",
        definition: "Виртуальная локальная сеть",
        example: "Настрой отдельный VLAN для гостей",
      },
      {
        term: "Шлюз",
        definition: "Устройство для связи между сетями",
        example: "Проблема со шлюзом, интернет не работает",
      },
      {
        term: "Снифер",
        definition: "Программа для анализа сетевого трафика",
        example: "Включи снифер, посмотрим что происходит",
      },
    ],
    englishTerms: [
      {
        english: "Router",
        russian: "Маршрутизатор",
        definition: "Устройство для пересылки пакетов данных",
      },
      {
        english: "Firewall",
        russian: "Брандмауэр",
        definition: "Система защиты сети от несанкционированного доступа",
      },
      {
        english: "Bandwidth",
        russian: "Пропускная способность",
        definition: "Максимальная скорость передачи данных",
      },
      {
        english: "Protocol",
        russian: "Протокол",
        definition: "Набор правил для обмена данными",
      },
      {
        english: "Gateway",
        russian: "Шлюз",
        definition: "Узел для связи между разными сетями",
      },
      {
        english: "Switch",
        russian: "Коммутатор",
        definition: "Устройство для соединения узлов сети",
      },
      {
        english: "Subnet",
        russian: "Подсеть",
        definition: "Логическое разделение IP-сети",
      },
    ],
  },
  {
    id: "security",
    name: "Системная безопасность",
    description: "Информационная безопасность",
    icon: "🔒",
    color: "from-red-500 to-orange-500",
    slang: [
      {
        term: "Фишинг",
        definition: "Мошенничество с целью получения конфиденциальных данных",
        example: "Получил подозрительное письмо, похоже на фишинг",
      },
      {
        term: "Эксплойт",
        definition: "Программа для использования уязвимости",
        example: "Нашли новый эксплойт для этой версии ПО",
      },
      {
        term: "Пентест",
        definition: "Тестирование на проникновение",
        example: "Провели пентест нашей системы",
      },
      {
        term: "Социнж",
        definition: "Социальная инженерия - психологическое воздействие",
        example: "Хакер использовал социнж для получения паролей",
      },
      {
        term: "Бэкдор",
        definition: "Скрытый способ обхода аутентификации",
        example: "В системе обнаружен бэкдор",
      },
      {
        term: "Патч",
        definition: "Обновление для исправления уязвимости",
        example: "Срочно установи патч безопасности",
      },
      {
        term: "Хэш",
        definition: "Результат хэширования данных",
        example: "Проверь хэш файла на целостность",
      },
      {
        term: "Кейлоггер",
        definition: "Программа для перехвата нажатий клавиш",
        example: "На компьютере найден кейлоггер",
      },
      {
        term: "Зеро-дей",
        definition: "Неизвестная ранее уязвимость",
        example: "Обнаружена зеро-дей уязвимость в браузере",
      },
      {
        term: "Фаервол",
        definition: "Система защиты от сетевых атак",
        example: "Настрой фаервол для блокировки подозрительного трафика",
      },
    ],
    englishTerms: [
      {
        english: "Vulnerability",
        russian: "Уязвимость",
        definition: "Слабое место в системе безопасности",
      },
      {
        english: "Encryption",
        russian: "Шифрование",
        definition: "Преобразование данных в зашифрованный вид",
      },
      {
        english: "Authentication",
        russian: "Аутентификация",
        definition: "Процесс проверки подлинности пользователя",
      },
      {
        english: "Malware",
        russian: "Вредонос",
        definition: "Вредоносное программное обеспечение",
      },
      {
        english: "Antivirus",
        russian: "Антивирус",
        definition: "Программа для защиты от вирусов",
      },
      {
        english: "Backup",
        russian: "Резервная копия",
        definition: "Копия данных для восстановления",
      },
      {
        english: "Certificate",
        russian: "Сертификат",
        definition: "Цифровой документ для подтверждения подлинности",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    description: "Разработка и эксплуатация",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    slang: [
      {
        term: "Контейнеризация",
        definition: "Упаковка приложения со всеми зависимостями",
        example: "Давайте контейнеризируем это приложение",
      },
      {
        term: "Оркестрация",
        definition: "Автоматизация управления контейнерами",
        example: "Kubernetes отлично подходит для оркестрации",
      },
      {
        term: "Мониторинг",
        definition: "Отслеживание состояния системы",
        example: "Настроил мониторинг всех сервисов",
      },
      {
        term: "CI/CD",
        definition: "Непрерывная интеграция и доставка",
        example: "Настроили CI/CD пайплайн для автодеплоя",
      },
      {
        term: "Скейлинг",
        definition: "Масштабирование системы под нагрузку",
        example: "Нужно сделать горизонтальный скейлинг",
      },
      {
        term: "Логи",
        definition: "Записи о событиях в системе",
        example: "Проверь логи, что там с ошибками",
      },
      {
        term: "Докер",
        definition: "Платформа для контейнеризации",
        example: "Запакуй приложение в докер",
      },
      {
        term: "Кластер",
        definition: "Группа связанных серверов",
        example: "Развернули кластер на трех нодах",
      },
      {
        term: "Реплика",
        definition: "Копия сервиса для обеспечения надежности",
        example: "Подними еще одну реплику для балансировки",
      },
      {
        term: "Хелсчек",
        definition: "Проверка здоровья сервиса",
        example: "Хелсчек показывает, что сервис недоступен",
      },
    ],
    englishTerms: [
      {
        english: "Pipeline",
        russian: "Пайплайн",
        definition: "Автоматизированная последовательность операций",
      },
      {
        english: "Container",
        russian: "Контейнер",
        definition: "Изолированная среда для запуска приложений",
      },
      {
        english: "Infrastructure",
        russian: "Инфраструктура",
        definition: "Комплекс технических средств и систем",
      },
      {
        english: "Deployment",
        russian: "Развертывание",
        definition: "Процесс установки и настройки приложения",
      },
      {
        english: "Cluster",
        russian: "Кластер",
        definition: "Группа связанных компьютеров",
      },
      {
        english: "Load Balancer",
        russian: "Балансировщик нагрузки",
        definition: "Распределение запросов между серверами",
      },
      {
        english: "Microservice",
        russian: "Микросервис",
        definition: "Архитектурный подход с небольшими независимыми сервисами",
      },
    ],
  },
  {
    id: "chemistry",
    name: "Химические специальности",
    description: "Химия и химические технологии",
    icon: "🧪",
    color: "from-indigo-500 to-purple-500",
    slang: [
      {
        term: "Реакция пошла",
        definition: "Химическая реакция началась успешно",
        example: "Добавил катализатор и реакция пошла",
      },
      {
        term: "Синтез",
        definition: "Получение сложного вещества из простых",
        example: "Провел синтез нового соединения",
      },
      {
        term: "Выход продукта",
        definition:
          "Количество полученного вещества от теоретически возможного",
        example: "Выход продукта составил 85%",
      },
      {
        term: "Кристаллизация",
        definition: "Процесс образования кристаллов из раствора",
        example: "Запустил кристаллизацию, завтра посмотрим результат",
      },
      {
        term: "Титрование",
        definition: "Определение концентрации раствора",
        example: "Сделай титрование этого раствора",
      },
      {
        term: "Колба",
        definition: "Стеклянная лабораторная посуда",
        example: "Возьми чистую колбу для эксперимента",
      },
      {
        term: "Пипетка",
        definition: "Инструмент для точного отмеривания жидкости",
        example: "Используй пипетку для точного дозирования",
      },
      {
        term: "Вытяжка",
        definition: "Система вентиляции в лаборатории",
        example: "Включи вытяжку, будем работать с кислотами",
      },
      {
        term: "Осадок",
        definition: "Твердое вещество, выпавшее из раствора",
        example: "В пробирке образовался белый осадок",
      },
      {
        term: "Концентрат",
        definition: "Раствор с высокой концентрацией вещества",
        example: "Разбавь концентрат перед использованием",
      },
    ],
    englishTerms: [
      {
        english: "Catalyst",
        russian: "Катализатор",
        definition: "Вещество, ускоряющее химическую реакцию",
      },
      {
        english: "Solution",
        russian: "Раствор",
        definition: "Однородная смесь веществ",
      },
      {
        english: "Compound",
        russian: "Соединение",
        definition: "Вещество, состоящее из атомов разных элементов",
      },
      {
        english: "Molecule",
        russian: "Молекула",
        definition: "Наименьшая частица вещества",
      },
      {
        english: "Reaction",
        russian: "Реакция",
        definition: "Процесс превращения одних веществ в другие",
      },
      {
        english: "Element",
        russian: "Элемент",
        definition: "Простое вещество, состоящее из одинаковых атомов",
      },
      {
        english: "Laboratory",
        russian: "Лаборатория",
        definition: "Помещение для научных исследований",
      },
    ],
  },
  {
    id: "banking",
    name: "Банковское дело",
    description: "Финансы и банковские услуги",
    icon: "💰",
    color: "from-yellow-500 to-amber-500",
    slang: [
      {
        term: "Овердрафт",
        definition: "Кредитование сверх остатка на счете",
        example: "Клиент ушел в овердрафт на 50 тысяч",
      },
      {
        term: "Спред",
        definition: "Разница между курсами покупки и продажи",
        example: "Спред по доллару сегодня увеличился",
      },
      {
        term: "Ликвидность",
        definition: "Способность актива быстро превращаться в деньги",
        example: "У банка проблемы с ликвидностью",
      },
      {
        term: "Эквайринг",
        definition: "Прием платежей по банковским картам",
        example: "Настроили эквайринг для интернет-магазина",
      },
      {
        term: "Депозит",
        definition: "Вклад денежных средств в банк",
        example: "Открыл депозит на год под 8%",
      },
      {
        term: "Кредитная линия",
        definition: "Лимит кредитования для клиента",
        example: "Увеличили кредитную линию до миллиона",
      },
      {
        term: "Просрочка",
        definition: "Несвоевременное погашение кредита",
        example: "У клиента просрочка по кредиту",
      },
      {
        term: "Реструктуризация",
        definition: "Изменение условий кредитного договора",
        example: "Провели реструктуризацию долга клиента",
      },
      {
        term: "Залог",
        definition: "Имущество в обеспечение кредита",
        example: "Квартира оформлена в залог по ипотеке",
      },
      {
        term: "Рефинансирование",
        definition: "Замена одного кредита другим на лучших условиях",
        example: "Клиент хочет рефинансирование ипотеки",
      },
    ],
    englishTerms: [
      {
        english: "Credit",
        russian: "Кредит",
        definition: "Предоставление денег или товаров в долг",
      },
      {
        english: "Interest",
        russian: "Процент",
        definition: "Плата за пользование заемными средствами",
      },
      {
        english: "Investment",
        russian: "Инвестиция",
        definition: "Вложение капитала с целью получения прибыли",
      },
      {
        english: "Mortgage",
        russian: "Ипотека",
        definition: "Кредит под залог недвижимости",
      },
      {
        english: "Deposit",
        russian: "Депозит",
        definition: "Денежные средства, размещенные в банке",
      },
      {
        english: "Transaction",
        russian: "Транзакция",
        definition: "Банковская операция по переводу средств",
      },
      {
        english: "Portfolio",
        russian: "Портфель",
        definition: "Совокупность финансовых инструментов",
      },
    ],
  },
  {
    id: "mechatronics",
    name: "Мехатроника и робототехника",
    description: "Робототехника и автоматизация",
    icon: "🤖",
    color: "from-gray-500 to-slate-500",
    slang: [
      {
        term: "Сенсор",
        definition: "Датчик для измерения физических величин",
        example: "Поставил новый сенсор температуры",
      },
      {
        term: "Актуатор",
        definition: "Исполнительное устройство в системе управления",
        example: "Актуатор не отвечает на команды",
      },
      {
        term: "Алгоритм",
        definition: "Последовательность действий для решения задачи",
        example: "Написал алгоритм для движения робота",
      },
      {
        term: "Прошивка",
        definition: "Программное обеспечение микроконтроллера",
        example: "Обновил прошивку контроллера",
      },
      {
        term: "Сервопривод",
        definition: "Механизм точного позиционирования",
        example: "Сервопривод заедает, нужна замена",
      },
      {
        term: "ПЛК",
        definition: "Программируемый логический контроллер",
        example: "Запрограммировал ПЛК для конвейера",
      },
      {
        term: "Энкодер",
        definition: "Датчик положения и скорости вращения",
        example: "Энкодер дает неточные показания",
      },
      {
        term: "ЧМИ",
        definition: "Человеко-машинный интерфейс",
        example: "Разработал ЧМИ для оператора",
      },
      {
        term: "Автоматика",
        definition: "Система автоматического управления",
        example: "Настроил автоматику для теплицы",
      },
      {
        term: "Модуль",
        definition: "Отдельный функциональный блок системы",
        example: "Добавил новый модуль связи",
      },
    ],
    englishTerms: [
      {
        english: "Automation",
        russian: "Автоматизация",
        definition: "Применение технических средств для управления процессами",
      },
      {
        english: "Sensor",
        russian: "Датчик",
        definition: "Устройство для измерения физических параметров",
      },
      {
        english: "Programming",
        russian: "Программирование",
        definition: "Создание программ для управления устройствами",
      },
      {
        english: "Controller",
        russian: "Контроллер",
        definition: "Устройство управления автоматической системой",
      },
      {
        english: "Motor",
        russian: "Двигатель",
        definition: "Устройство для преобразования энергии в движение",
      },
      {
        english: "Interface",
        russian: "Интерфейс",
        definition: "Способ взаимодействия между системами",
      },
      {
        english: "Protocol",
        russian: "Протокол",
        definition: "Набор правил для обмена данными",
      },
    ],
  },
];
