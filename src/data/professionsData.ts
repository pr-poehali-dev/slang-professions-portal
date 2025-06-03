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
    ],
  },
];
