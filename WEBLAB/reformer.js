// Данные реформаторов (в реальном приложении эти данные будут загружены с сервера)
const reformers = [
    {
        id: 1,
        name: "Петр I Великий",
        year: "1672-1725",
        image: "images/peter1.jpg",
        bio: "Петр I Великий - первый российский император, великий государственный деятель и реформатор. Родился 30 мая (9 июня) 1672 года, умер 28 января (8 февраля) 1725 года. Провёл коренную реорганизацию государства, преобразовав патриархальную Московскую Русь в Российскую империю. При Петре I Россия стала великой европейской державой с современной армией и флотом, развитой промышленностью, наукой и образованием.",
        achievements: [
            "Создание регулярной армии и военно-морского флота",
            "Основание Санкт-Петербурга в 1703 году",
            "Введение гражданского шрифта и арабских цифр",
            "Реформа государственного управления (создание Сената, коллегий, губерний)",
            "Развитие промышленности и торговли",
            "Основание первых гимназий, школ, Академии наук"
        ],
        related: [2, 3, 5]
    },
    {
        id: 2,
        name: "Екатерина II Великая",
        year: "1729-1796",
        image: "images/catherine2.jpg",
        bio: "Екатерина II Великая (урождённая София Августа Фредерика Ангальт-Цербстская) - российская императрица из династии Романовых с 1762 по 1796 год. Период её правления считается золотым веком Российской империи. Проводила политику просвещённого абсолютизма, способствовала развитию образования и культуры.",
        achievements: [
            "Секуляризация церковных земель",
            "Губернская реформа 1775 года",
            "Жалованные грамоты дворянству и городам 1785 года",
            "Основание Смольного института благородных девиц",
            "Расширение территории Российской империи",
            "Развитие русской культуры и образования"
        ],
        related: [1, 3, 4]
    },
    {
        id: 3,
        name: "Александр II Освободитель",
        year: "1818-1881",
        image: "images/alexander2.jpg",
        bio: "Александр II Николаевич (Освободитель) - император Всероссийский, царь Польский и великий князь Финляндский с 1855 по 1881 год. Старший сын императора Николая I и его супруги Александры Фёдоровны. Осуществил серию глубоких реформ, в том числе самую известную — отмену крепостного права в 1861 году.",
        achievements: [
            "Отмена крепостного права в 1861 году",
            "Земская и городская реформы",
            "Судебная реформа 1864 года",
            "Военная реформа",
            "Реформа образования",
            "Продажа Аляски США в 1867 году"
        ],
        related: [2, 4, 5]
    },
    {
        id: 4,
        name: "Сергей Витте",
        year: "1849-1915",
        image: "images/witte.jpg",
        bio: "Граф Сергей Юльевич Витте - российский государственный деятель, министр путей сообщения, министр финансов, председатель Комитета министров, председатель Совета министров. Провёл денежную реформу и содействовал ускоренной индустриализации Российской империи.",
        achievements: [
            "Денежная реформа 1897 года (введение золотого стандарта)",
            "Строительство Транссибирской магистрали",
            "Введение винной монополии",
            "Заключение Портсмутского мира с Японией",
            "Разработка манифеста 17 октября 1905 года",
            "Ускоренная индустриализация страны"
        ],
        related: [3, 5]
    },
    {
        id: 5,
        name: "Петр Столыпин",
        year: "1862-1911",
        image: "images/stolypin.jpg",
        bio: "Пётр Аркадьевич Столыпин - государственный деятель Российской империи, министр внутренних дел, председатель Совета министров с 1906 по 1911 год. Провёл ряд значительных реформ, направленных на модернизацию сельского хозяйства и укрепление государственности.",
        achievements: [
            "Аграрная реформа (разрушение общины, создание отрубов и хуторов)",
            "Создание крестьянского банка",
            "Переселенческая политика",
            "Введение земства в западных губерниях",
            "Проекты по всеобщему начальному образованию",
            "Меры по укреплению обороноспособности страны"
        ],
        related: [3, 4]
    }
];

// Функция для получения ID реформатора из URL
function getReformerIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const reformerId = parseInt(urlParams.get('id'));
    return isNaN(reformerId) ? 1 : reformerId; // Возвращаем ID из URL или 1 по умолчанию
}

// Функция для получения данных реформатора по ID
function getReformerById(id) {
    return reformers.find(reformer => reformer.id === id) || reformers[0];
}

// Функция для отображения информации о реформаторе
function displayReformerInfo() {
    const reformerId = getReformerIdFromUrl();
    const reformer = getReformerById(reformerId);
    
    // Заголовок страницы
    document.title = `${reformer.name} | История реформаторов`;
    
    // Обновляем информацию о реформаторе
    document.querySelector('.reformer-name').textContent = reformer.name;
    document.querySelector('.year').textContent = reformer.year;
    document.querySelector('.profile-img').src = reformer.image;
    document.querySelector('.profile-img').alt = reformer.name;
    
    // Биография
    document.querySelector('.biography-content').textContent = reformer.bio;
    
    // Достижения
    const achievementsList = document.querySelector('.achievements-list');
    achievementsList.innerHTML = '';
    reformer.achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        achievementsList.appendChild(li);
    });
    
    // Связанные реформаторы
    const relatedGrid = document.querySelector('.related-reformers-grid');
    relatedGrid.innerHTML = '';
    reformer.related.forEach(relatedId => {
        const relatedReformer = getReformerById(relatedId);
        
        const card = document.createElement('a');
        card.href = `reformer.html?id=${relatedReformer.id}`;
        card.className = 'related-reformer-card';
        
        card.innerHTML = `
            <img src="${relatedReformer.image}" alt="${relatedReformer.name}" class="related-reformer-img">
            <div class="related-reformer-info">
                <h4 class="related-reformer-name">${relatedReformer.name}</h4>
                <p class="related-reformer-year">${relatedReformer.year}</p>
            </div>
        `;
        
        relatedGrid.appendChild(card);
    });
    
    // Настройка кнопки "Вернуться на таймлайн"
    document.querySelector('.btn-timeline').addEventListener('click', () => {
        window.location.href = 'index.html#year-' + reformer.year.split('-')[0];
    });
    
    // Настройка кнопки "Поделиться"
    document.querySelector('.btn-share').addEventListener('click', () => {
        const url = window.location.href;
        
        // Проверяем поддержку API navigator.share
        if (navigator.share) {
            navigator.share({
                title: reformer.name,
                text: `Узнайте больше о ${reformer.name} - выдающемся реформаторе России!`,
                url: url
            }).catch(console.error);
        } else {
            // Если API не поддерживается, копируем URL в буфер обмена
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('Ссылка скопирована в буфер обмена');
                })
                .catch(err => {
                    console.error('Не удалось скопировать ссылку: ', err);
                });
        }
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', displayReformerInfo);

// Обработчик для изменения версии стилей
document.querySelector('.btn-version').addEventListener('click', function() {
    const currentStylesheet = document.getElementById('version-stylesheet');
    const currentVersion = currentStylesheet ? parseInt(currentStylesheet.getAttribute('data-version') || '1') : 1;
    const newVersion = currentVersion < 5 ? currentVersion + 1 : 1;
    
    // Удаляем текущую таблицу стилей, если она существует
    if (currentStylesheet) {
        currentStylesheet.remove();
    }
    
    // Если выбрана не версия 1, добавляем соответствующую таблицу стилей
    if (newVersion > 1) {
        const link = document.createElement('link');
        link.id = 'version-stylesheet';
        link.rel = 'stylesheet';
        link.href = `version${newVersion}.css`;
        link.setAttribute('data-version', newVersion.toString());
        document.head.appendChild(link);
    }
    
    // Обновляем текст кнопки
    this.textContent = `Версия ${newVersion}`;
});

document.addEventListener('DOMContentLoaded', () => {
    // Получаем ID реформатора из URL параметра
    const urlParams = new URLSearchParams(window.location.search);
    const reformerId = urlParams.get('id');
    
    if (!reformerId) {
        // Если ID не найден, перенаправляем на главную страницу
        redirectToHomePage();
        return;
    }
    
    // Загружаем данные о реформаторах
    fetchReformersData()
        .then(reformers => {
            // Находим реформатора по ID
            const reformer = reformers.find(ref => ref.id == reformerId);
            
            if (!reformer) {
                console.error('Реформатор не найден');
                redirectToHomePage();
                return;
            }
            
            // Заполняем страницу данными о реформаторе
            populateReformerPage(reformer, reformers);
            
            // Настраиваем обработчики событий
            setupEventListeners(reformer);
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
            showErrorMessage();
        });
});

/**
 * Загружает данные о реформаторах из JSON файла
 */
async function fetchReformersData() {
    try {
        const response = await fetch('data/reformers.json');
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных');
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        throw error;
    }
}

/**
 * Заполняет страницу данными о реформаторе
 */
function populateReformerPage(reformer, allReformers) {
    // Обновляем заголовок страницы
    document.title = `${reformer.name} | История реформаторов России`;
    
    // Заполняем профиль реформатора
    document.querySelector('.reformer-name').textContent = reformer.name;
    document.querySelector('.year').textContent = `${reformer.years || 'Годы жизни неизвестны'}`;
    
    // Устанавливаем изображение реформатора
    const profileImg = document.querySelector('.profile-img');
    profileImg.src = reformer.image || 'images/placeholder.jpg';
    profileImg.alt = reformer.name;
    
    // Заполняем биографию
    document.querySelector('.biography-content').innerHTML = reformer.biography || '<p>Биография отсутствует</p>';
    
    // Заполняем достижения
    const achievementsList = document.querySelector('.achievements-list');
    achievementsList.innerHTML = '';
    
    if (reformer.achievements && reformer.achievements.length > 0) {
        reformer.achievements.forEach(achievement => {
            const li = document.createElement('li');
            li.textContent = achievement;
            achievementsList.appendChild(li);
        });
    } else {
        achievementsList.innerHTML = '<li>Информация о достижениях отсутствует</li>';
    }
    
    // Заполняем связанных реформаторов
    populateRelatedReformers(reformer, allReformers);
}

/**
 * Заполняет секцию связанных реформаторов
 */
function populateRelatedReformers(currentReformer, allReformers) {
    const relatedReformersGrid = document.querySelector('.related-reformers-grid');
    relatedReformersGrid.innerHTML = '';
    
    // Находим связанных реформаторов (например, живших в ту же эпоху)
    // В реальном приложении здесь может быть более сложная логика выбора связанных реформаторов
    const relatedReformers = allReformers
        .filter(reformer => 
            reformer.id !== currentReformer.id && 
            Math.abs(extractYear(reformer.years) - extractYear(currentReformer.years)) < 100)
        .slice(0, 4); // Ограничиваем количество связанных реформаторов
    
    if (relatedReformers.length === 0) {
        relatedReformersGrid.innerHTML = '<p>Связанные реформаторы не найдены</p>';
        return;
    }
    
    // Создаем карточки для связанных реформаторов
    relatedReformers.forEach(reformer => {
        const card = document.createElement('a');
        card.href = `reformer.html?id=${reformer.id}`;
        card.className = 'related-reformer-card';
        
        card.innerHTML = `
            <img src="${reformer.image || 'images/placeholder.jpg'}" alt="${reformer.name}" class="related-reformer-img">
            <div class="related-reformer-info">
                <h3 class="related-reformer-name">${reformer.name}</h3>
                <p class="related-reformer-years">${reformer.years || 'Годы жизни неизвестны'}</p>
            </div>
        `;
        
        relatedReformersGrid.appendChild(card);
    });
}

/**
 * Извлекает год из строки с годами жизни (например, "1672-1725")
 */
function extractYear(yearsString) {
    if (!yearsString) return 0;
    
    // Пытаемся извлечь первый год из строки вида "1672-1725"
    const match = yearsString.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
}

/**
 * Настраивает обработчики событий на странице
 */
function setupEventListeners(reformer) {
    // Обработчик для кнопки "На временную шкалу"
    const timelineButton = document.querySelector('.btn-timeline');
    timelineButton.addEventListener('click', (e) => {
        e.preventDefault();
        // Переходим на главную страницу с фокусом на этом реформаторе
        window.location.href = `index.html?focus=${reformer.id}`;
    });
    
    // Обработчик для кнопки "Поделиться"
    const shareButton = document.querySelector('.btn-share');
    shareButton.addEventListener('click', (e) => {
        e.preventDefault();
        shareReformer(reformer);
    });
}

/**
 * Реализует функционал "Поделиться"
 */
function shareReformer(reformer) {
    // Проверяем, поддерживается ли Web Share API
    if (navigator.share) {
        navigator.share({
            title: `${reformer.name} | История реформаторов России`,
            text: `Узнайте о ${reformer.name} - выдающемся реформаторе России!`,
            url: window.location.href
        })
        .catch(error => console.log('Ошибка при попытке поделиться:', error));
    } else {
        // Если Web Share API не поддерживается, копируем ссылку в буфер обмена
        copyToClipboard(window.location.href);
        alert('Ссылка скопирована в буфер обмена');
    }
}

/**
 * Копирует текст в буфер обмена
 */
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Не удалось скопировать текст:', err);
    }
    
    document.body.removeChild(textarea);
}

/**
 * Перенаправляет на главную страницу
 */
function redirectToHomePage() {
    window.location.href = 'index.html';
}

/**
 * Отображает сообщение об ошибке
 */
function showErrorMessage() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div style="text-align: center; margin-top: 100px;">
            <h1>Произошла ошибка</h1>
            <p>К сожалению, не удалось загрузить информацию о реформаторе.</p>
            <a href="index.html" class="btn btn-home">Вернуться на главную</a>
        </div>
    `;
} 