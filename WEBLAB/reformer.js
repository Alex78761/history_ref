// Удаляем старые данные, так как теперь они загружаются из JSON
// const reformers = [ ... ]; 

// // Удаляем старую функцию, так как логика перенесена
// function getReformerIdFromUrl() { ... }
// // Удаляем старую функцию, так как логика перенесена
// function getReformerById(id) { ... }
// // Удаляем старую функцию, так как логика перенесена
// function displayReformerInfo() { ... }

// // Удаляем старый обработчик DOMContentLoaded
// document.addEventListener('DOMContentLoaded', function() { ... });

// // Удаляем старый обработчик кнопки версии
// document.querySelector('.btn-version').addEventListener('click', function() { ... });

// --- Новый основной блок инициализации ---
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, находимся ли мы на специальной странице реформатора
    const pageUrl = window.location.pathname;
    const isSpecialReformerPage = pageUrl.includes('reformer_') && !pageUrl.includes('reformer.html');
    
    const urlParams = new URLSearchParams(window.location.search);
    const reformerId = urlParams.get('id');
    const versionParam = urlParams.get('version'); // Получаем номер версии из URL
    
    // Проверяем существующий атрибут data-version в stylesheet
    const versionStylesheet = document.getElementById('version-stylesheet');
    const existingVersion = versionStylesheet ? parseInt(versionStylesheet.getAttribute('data-version')) : null;
    
    // Определяем версию: из URL, из атрибута data-version или по умолчанию 1
    const currentVersion = versionParam ? parseInt(versionParam) : (existingVersion || 1); 
    
    // Устанавливаем правильный CSS файл версии только если версия изменилась
    if (!existingVersion || existingVersion !== currentVersion) {
        setVersionStylesheet(currentVersion);
    }

    // Настраиваем текст кнопки версии
    setVersionButtonText(currentVersion);

    // Для специальных страниц реформаторов не требуем ID в URL
    if (isSpecialReformerPage) {
        // Страница уже содержит всю нужную информацию о реформаторе
        console.log('Специальная страница реформатора, ID в URL не требуется');
        
        // Настраиваем только обработчики событий для специальной страницы
        // Используем определенную версию из stylesheet
        setupEventListenersForSpecialPage(currentVersion);
        return;
    }

    // Для обычных страниц (reformer.html) требуем ID
    if (!reformerId) {
        console.error('ID реформатора не найден в URL');
        redirectToHomePage(currentVersion); // Перенаправляем на главную страницу ТЕКУЩЕЙ версии
        return;
    }
    
    // Загружаем данные о реформаторах
    fetchReformersData()
        .then(reformers => {
            const reformer = reformers.find(ref => ref.id == reformerId);
            
            if (!reformer) {
                console.error(`Реформатор с ID ${reformerId} не найден`);
                redirectToHomePage(currentVersion); // Перенаправляем на главную страницу ТЕКУЩЕЙ версии
                return;
            }
            
            // Заполняем страницу данными о реформаторе
            populateReformerPage(reformer, reformers, currentVersion); // Передаем версию для ссылок
            
            // Настраиваем обработчики событий
            setupEventListeners(reformer, currentVersion); // Передаем версию
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
            showErrorMessage(currentVersion); // Передаем версию для кнопки возврата
        });
});

/**
 * Устанавливает CSS-файл для текущей версии
 */
function setVersionStylesheet(version) {
    const versionStylesheet = document.getElementById('version-stylesheet');
    const versionFile = version === 1 ? 'styles.css' : `version${version}.css`; // Версия 1 использует styles.css
    
    if (versionStylesheet) {
        // Меняем только если файл стилей действительно отличается
        if (versionStylesheet.href.split('/').pop() !== versionFile) {
            versionStylesheet.href = versionFile;
        }
        versionStylesheet.setAttribute('data-version', version);
    } else {
        // Если тега link нет, создаем его (на всякий случай)
        const link = document.createElement('link');
        link.id = 'version-stylesheet';
        link.rel = 'stylesheet';
        link.href = versionFile;
        link.setAttribute('data-version', version);
        document.head.appendChild(link);
    }
}

/**
 * Устанавливает текст кнопки версии
 */
function setVersionButtonText(version) {
    const versionNames = ['Экономическая', 'Военная', 'Законодательная', 'Образовательная', 'Социальная'];
    const versionButton = document.querySelector('.btn-version');
    if (versionButton) {
        versionButton.textContent = versionNames[version - 1] || 'Версия ?';
    }
}

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
function populateReformerPage(reformer, allReformers, currentVersion) { // Добавили currentVersion
    document.title = `${reformer.name} | История реформаторов России`;
    document.querySelector('.reformer-name').textContent = reformer.name;
    document.querySelector('.year').textContent = `${reformer.years || 'Годы жизни неизвестны'}`;
    
    const profileImg = document.querySelector('.profile-img');
    profileImg.src = reformer.image || 'images/placeholder.jpg';
    profileImg.alt = reformer.name;
    
    document.querySelector('.biography-content').innerHTML = reformer.biography || '<p>Биография отсутствует</p>';
    
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
    
    // Передаем версию в функцию для связанных реформаторов
    populateRelatedReformers(reformer, allReformers, currentVersion); 
}

/**
 * Заполняет секцию связанных реформаторов
 */
function populateRelatedReformers(currentReformer, allReformers, currentVersion) { // Добавили currentVersion
    const relatedReformersGrid = document.querySelector('.related-reformers-grid');
    relatedReformersGrid.innerHTML = '';
    
    // Используем массив related из JSON, если он есть
    let relatedReformersData = [];
    if (currentReformer.related && Array.isArray(currentReformer.related)) {
         relatedReformersData = currentReformer.related
            .map(relatedId => allReformers.find(r => r.id === relatedId))
            .filter(r => r); // Убираем null, если ID не найден
    } else {
         // Альтернативная логика, если related нет (например, по годам)
         relatedReformersData = allReformers
             .filter(reformer => 
                 reformer.id !== currentReformer.id && 
                 Math.abs(extractYear(reformer.years) - extractYear(currentReformer.years)) < 100)
             .slice(0, 4); 
    }

    if (relatedReformersData.length === 0) {
        relatedReformersGrid.innerHTML = '<p>Связанные реформаторы не найдены</p>';
        return;
    }
    
    relatedReformersData.forEach(reformer => {
        const card = document.createElement('a');
        
        // Определяем URL для страницы реформатора
        let reformerUrl;
        
        // Проверяем, является ли реформатор Иваном Грозным или Петром I, у которых есть объединенные страницы
        if (reformer.id === 11 || reformer.id === 101) {
            // Иван Грозный (законодательная и военная ветки)
            reformerUrl = 'reformer_ivan4_combined.html';
        } else if (reformer.id === 12 || reformer.id === 102) {
            // Петр I (законодательная и военная ветки)
            reformerUrl = 'reformer_peter1_combined.html';
        } else {
            // Для остальных реформаторов строим URL в зависимости от их ID
            // Законодательная ветка (11-15)
            if (reformer.id >= 11 && reformer.id <= 15) {
                switch(reformer.id) {
                    case 13: reformerUrl = 'reformer_catherine2.html'; break;
                    case 14: reformerUrl = 'reformer_speransky.html'; break;
                    case 15: reformerUrl = 'reformer_kollontay.html'; break;
                    default: reformerUrl = `reformer.html?id=${reformer.id}&version=3`;
                }
            } 
            // Военная ветка (101-108)
            else if (reformer.id >= 101 && reformer.id <= 108) {
                switch(reformer.id) {
                    case 103: reformerUrl = 'reformer_pavel1.html'; break;
                    case 104: reformerUrl = 'reformer_milutin.html'; break;
                    case 105: reformerUrl = 'reformer_frunze.html'; break;
                    case 106: reformerUrl = 'reformer_stalin.html'; break;
                    case 107: reformerUrl = 'reformer_khrushchev.html'; break;
                    case 108: reformerUrl = 'reformer_shoigu.html'; break;
                    default: reformerUrl = `reformer.html?id=${reformer.id}&version=2`;
                }
            }
            // Для всех остальных используем стандартный URL с параметром версии
            else {
                reformerUrl = `reformer.html?id=${reformer.id}&version=${currentVersion}`;
            }
        }
        
        card.href = reformerUrl;
        card.className = 'related-reformer-card';
        
        const img = document.createElement('img');
        img.src = reformer.image || 'images/placeholder.jpg';
        img.alt = reformer.name;
        img.className = 'related-reformer-img';
        
        const infoDiv = document.createElement('div');
        infoDiv.className = 'related-reformer-info';
        
        const name = document.createElement('h3');
        name.className = 'related-reformer-name';
        name.textContent = reformer.name;
        
        const years = document.createElement('p');
        years.className = 'related-reformer-years';
        years.textContent = reformer.years || 'Годы жизни неизвестны';
        
        infoDiv.appendChild(name);
        infoDiv.appendChild(years);
        
        card.appendChild(img);
        card.appendChild(infoDiv);
        
        relatedReformersGrid.appendChild(card);
    });
}

/**
 * Извлекает год из строки с годами жизни (например, "1672-1725")
 */
function extractYear(yearsString) {
    if (!yearsString) return 0;
    const match = yearsString.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
}

/**
 * Настраивает обработчики событий на странице
 */
function setupEventListeners(reformer, currentVersion) { // Добавили currentVersion
    const baseUrls = [
        'index.html', 'version2.html', 'version3.html', 'version4.html', 'version5.html'
    ];
    const versionNames = ['Экономическая', 'Военная', 'Законодательная', 'Образовательная', 'Социальная'];
    
    // Обработчик для кнопки "На временную шкалу"
    const timelineButton = document.querySelector('.btn-timeline');
    if (timelineButton) {
        timelineButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Переходим на соответствующую версию таймлайна с фокусом
            window.location.href = `${baseUrls[currentVersion - 1]}?focus=${reformer.id}`;
        });
    }
    
    // Обработчик для кнопки "На главную"
    const homeButton = document.querySelector('.btn-home');
    if (homeButton) {
        homeButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Переходим на главную страницу текущей версии
             window.location.href = baseUrls[currentVersion - 1];
        });
    }

    // Обработчик для кнопки версии
    const versionButton = document.querySelector('.btn-version');
    if (versionButton) {
        versionButton.addEventListener('click', () => {
            // Просто переходим на главную страницу текущей версии
            window.location.href = baseUrls[currentVersion - 1];
        });
    }
    
    // Обработчик для кнопки "Поделиться"
    const shareButton = document.querySelector('.btn-share');
     if (shareButton) {
        shareButton.addEventListener('click', (e) => {
            e.preventDefault();
            shareReformer(reformer);
        });
    }
}

/**
 * Реализует функционал "Поделиться"
 */
function shareReformer(reformer) {
    // ... существующий код shareReformer ...
    if (navigator.share) {
        navigator.share({
            title: `${reformer.name} | История реформаторов России`,
            text: `Узнайте о ${reformer.name} - выдающемся реформаторе России!`,
            url: window.location.href
        })
        .catch(error => console.log('Ошибка при попытке поделиться:', error));
    } else {
        copyToClipboard(window.location.href);
        alert('Ссылка скопирована в буфер обмена');
    }
}

/**
 * Копирует текст в буфер обмена
 */
function copyToClipboard(text) {
    // ... существующий код copyToClipboard ...
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
 * Перенаправляет на главную страницу соответствующей версии
 */
function redirectToHomePage(version = 1) { // Принимает версию, по умолчанию 1
    // Массив URL-ов главных страниц для каждой версии (индекс = версия - 1)
    const homePages = [
        'index.html',         // версия 1 - Экономическая
        'version2.html',      // версия 2 - Военная
        'version3.html',      // версия 3 - Законодательная
        'version4.html',      // версия 4 - Образовательная
        'version5.html'       // версия 5 - Социальная
    ];
    
    // Получаем URL для текущей версии
    const homePage = homePages[version - 1] || 'index.html';
    window.location.href = homePage;
}

/**
 * Отображает сообщение об ошибке
 */
function showErrorMessage(version = 1) { // Принимает версию
    const homePages = [
        'index.html',         // версия 1 - Экономическая
        'version2.html',      // версия 2 - Военная
        'version3.html',      // версия 3 - Законодательная
        'version4.html',      // версия 4 - Образовательная
        'version5.html'       // версия 5 - Социальная
    ];
    
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div style="text-align: center; margin-top: 100px;">
            <h1>Произошла ошибка</h1>
            <p>К сожалению, не удалось загрузить информацию о реформаторе.</p>
            <a href="${homePages[version - 1]}" class="btn btn-home">Вернуться на главную</a> 
        </div>
    `;
}

/**
 * Настраивает обработчики событий на специальных страницах реформаторов
 */
function setupEventListenersForSpecialPage(currentVersion) {
    const homePages = [
        'index.html',         // версия 1 - Экономическая
        'version2.html',      // версия 2 - Военная
        'version3.html',      // версия 3 - Законодательная
        'version4.html',      // версия 4 - Образовательная
        'version5.html'       // версия 5 - Социальная
    ];
    const versionNames = ['Экономическая', 'Военная', 'Законодательная', 'Образовательная', 'Социальная'];
    
    // Проверяем, это объединенная страница или нет
    const pageUrl = window.location.pathname;
    const isCombinedPage = pageUrl.includes('combined');
    
    if (isCombinedPage) {
        // Для объединенных страниц обработчики кнопок уже настроены в HTML
        // Дополнительные обработчики для вкладок категорий уже добавлены в HTML
        console.log('Объединенная страница реформатора, используем обработчики из HTML');
        return;
    }
    
    // Для обычных специальных страниц реформаторов
    
    // Обработчик для кнопки "На таймлайн" уже настроен через href
    
    // Обработчик для кнопки "На главную" уже настроен через href
    
    // Обработчик для кнопки версии
    const versionButton = document.querySelector('.btn-version');
    if (versionButton) {
        versionButton.addEventListener('click', () => {
            // Переходим на главную страницу текущей версии
            window.location.href = homePages[currentVersion - 1];
        });
    }
    
    // Обработчик для кнопки "Поделиться", если она есть
    const shareButton = document.querySelector('.btn-share');
    if (shareButton) {
        shareButton.addEventListener('click', (e) => {
            e.preventDefault();
            // Копируем URL в буфер обмена
            copyToClipboard(window.location.href);
            alert('Ссылка скопирована в буфер обмена');
        });
    }
} 