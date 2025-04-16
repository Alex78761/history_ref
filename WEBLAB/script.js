// Данные о реформаторах для разных версий
const reformersByVersion = {
    // Версия 1
    "index.html": [
        {
            id: 1,
            name: "Мартин Лютер",
            year: 1483,
            image: "images/luther.jpg",
            shortInfo: "Основатель протестантизма",
            fullBio: "Мартин Лютер (1483-1546) - немецкий богослов, инициатор Реформации. Известен своими 95 тезисами против индульгенций, которые положили начало протестантской Реформации в Европе."
        },
        {
            id: 2,
            name: "Жан Кальвин",
            year: 1509,
            image: "images/calvin.jpg",
            shortInfo: "Основатель кальвинизма",
            fullBio: "Жан Кальвин (1509-1564) - французский богослов, реформатор церкви. Его учение о предопределении стало основой кальвинизма, одного из важнейших направлений протестантизма."
        },
        {
            id: 3,
            name: "Ульрих Цвингли",
            year: 1484,
            image: "images/zwingli.jpg",
            shortInfo: "Швейцарский реформатор",
            fullBio: "Ульрих Цвингли (1484-1531) - швейцарский богослов и гуманист, один из лидеров Реформации в Швейцарии. Основатель цвинглианства, предшественника реформатских церквей."
        }
    ],
    // Версия 2
    "version2.html": [
        {
            id: 1,
            name: "Петр I",
            year: 1672,
            image: "images/peter1.jpg",
            shortInfo: "Первый российский император",
            fullBio: "Петр I Великий (1672-1725) - последний царь всея Руси и первый Император Всероссийский. Провел масштабные реформы государственного управления, армии, флота, образования и культуры России."
        },
        {
            id: 2,
            name: "Екатерина II",
            year: 1729,
            image: "images/catherine2.jpg",
            shortInfo: "Императрица Всероссийская",
            fullBio: "Екатерина II Великая (1729-1796) - императрица Всероссийская с 1762 по 1796 год. Период её правления считается золотым веком Российской империи. Провела административную и судебную реформы."
        },
        {
            id: 3,
            name: "Александр II",
            year: 1818,
            image: "images/alexander2.jpg",
            shortInfo: "Царь-освободитель",
            fullBio: "Александр II Николаевич (1818-1881) - император Всероссийский, царь Польский и великий князь Финляндский. Осуществил отмену крепостного права и другие важные реформы."
        }
    ],
    // Версия 3
    "version3.html": [
        {
            id: 1,
            name: "Махатма Ганди",
            year: 1869,
            image: "images/gandhi.jpg",
            shortInfo: "Лидер движения за независимость Индии",
            fullBio: "Мохандас Карамчанд Ганди (1869-1948) - индийский политический и общественный деятель, руководитель и идеолог движения за независимость Индии от Великобритании. Основоположник философии ненасилия и сатьяграхи."
        },
        {
            id: 2,
            name: "Нельсон Мандела",
            year: 1918,
            image: "images/mandela.jpg",
            shortInfo: "Борец против апартеида",
            fullBio: "Нельсон Ролихлахла Мандела (1918-2013) - южноафриканский политический и государственный деятель, президент ЮАР. Один из самых известных активистов в борьбе за права человека, символ борьбы с апартеидом."
        },
        {
            id: 3,
            name: "Мартин Лютер Кинг",
            year: 1929,
            image: "images/mlk.jpg",
            shortInfo: "Лидер движения за гражданские права",
            fullBio: "Мартин Лютер Кинг (1929-1968) - американский общественный деятель, борец за гражданские права чернокожих в США, выдающийся оратор. Лауреат Нобелевской премии мира 1964 года."
        }
    ],
    // Версия 4
    "version4.html": [
        {
            id: 1,
            name: "Конфуций",
            year: -551,
            image: "images/confucius.jpg",
            shortInfo: "Древнекитайский философ",
            fullBio: "Конфуций (551-479 до н.э.) - древний китайский мыслитель и философ, основатель конфуцианства. Его учение оказало глубокое влияние на жизнь, культуру и политическую историю Китая и других стран Восточной Азии."
        },
        {
            id: 2,
            name: "Сократ",
            year: -470,
            image: "images/socrates.jpg",
            shortInfo: "Древнегреческий философ",
            fullBio: "Сократ (470-399 до н.э.) - древнегреческий философ, учение которого знаменует поворот в философии от изучения природы к проблемам человека. Создатель метода познания истины, называемого майевтикой."
        },
        {
            id: 3,
            name: "Аристотель",
            year: -384,
            image: "images/aristotle.jpg",
            shortInfo: "Ученик Платона, учитель Александра Македонского",
            fullBio: "Аристотель (384-322 до н.э.) - древнегреческий философ и ученый, основоположник формальной логики. Создал понятийный аппарат, который до сих пор пронизывает философский лексикон и стиль научного мышления."
        }
    ],
    // Версия 5
    "version5.html": [
        {
            id: 1,
            name: "Коперник",
            year: 1473,
            image: "images/copernicus.jpg",
            shortInfo: "Создатель гелиоцентрической системы",
            fullBio: "Николай Коперник (1473-1543) - польский астроном, математик, экономист, каноник эпохи Возрождения. Автор гелиоцентрической системы мира, совершившей переворот в естествознании."
        },
        {
            id: 2,
            name: "Галилео Галилей",
            year: 1564,
            image: "images/galileo.jpg",
            shortInfo: "Физик, астроном, механик, философ",
            fullBio: "Галилео Галилей (1564-1642) - итальянский физик, механик, астроном, философ и математик, оказавший значительное влияние на науку своего времени. Один из основателей современного экспериментального естествознания."
        },
        {
            id: 3,
            name: "Исаак Ньютон",
            year: 1643,
            image: "images/newton.jpg",
            shortInfo: "Автор закона всемирного тяготения",
            fullBio: "Исаак Ньютон (1643-1727) - английский физик, математик, механик и астроном, один из создателей классической физики. Автор фундаментального труда 'Математические начала натуральной философии'."
        }
    ]
};

class Timeline {
    constructor() {
        this.timelineContainer = document.querySelector('.timeline-container');
        this.timeline = document.getElementById('timeline');
        this.startDate = 1000; // Изменено: начальная дата с 1000 года нашей эры
        this.endDate = 2025;   // Изменено: конечная дата до 2025 года
        this.visibleStartDate = this.startDate;
        this.visibleEndDate = this.endDate;
        this.scale = 1;
        this.offset = 0;
        this.minOffset = -100;
        this.maxOffset = 100;
        this.tooltip = null;
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.yearMarkers = [];
        
        // Параметры для эффекта параллакса при прокрутке
        this.backgroundPosition = 0;
        this.backgroundSpeed = 0.5;
        
        this.init();
    }

    init() {
        this.createTooltip();
        this.createYearMarkers();
        this.renderReformers();
        this.setupEventListeners();
        this.updateTimeScale();
        this.setupParallaxBackground();
        
        // Вызываем метод для начальной настройки внешнего вида линии времени
        this.updateTimelineAppearance();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        document.body.appendChild(this.tooltip);
    }

    // Новый метод для создания маркеров годов рождения реформаторов
    createYearMarkers() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        // Создаем маркеры годов для каждого реформатора
        currentReformers.forEach(reformer => {
            const marker = document.createElement('div');
            marker.className = 'year-marker';
            marker.dataset.year = reformer.year; // Добавляем атрибут для связи с реформатором
            
            const markerLine = document.createElement('div');
            markerLine.className = 'marker-line';
            
            const markerYear = document.createElement('div');
            markerYear.className = 'marker-year';
            
            const yearText = reformer.year < 0 
                ? Math.abs(reformer.year) + ' до н.э.'
                : reformer.year + ' г.';
                
            markerYear.textContent = yearText;
            
            marker.appendChild(markerLine);
            marker.appendChild(markerYear);
            
            // Изначально устанавливаем позицию маркера
            marker.style.left = this.calculatePosition(reformer.year) + '%';
            
            this.timeline.appendChild(marker);
            this.yearMarkers.push({
                element: marker,
                year: reformer.year
            });
        });
    }

    renderReformers() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        currentReformers.forEach(reformer => {
            const container = document.createElement('div');
            container.className = 'reformer-container';
            container.style.left = this.calculatePosition(reformer.year) + '%';
            container.dataset.year = reformer.year; // Добавляем год как атрибут для последующего обновления
            container.id = `reformer-${reformer.year}`; // Добавляем уникальный id для привязки к году
            
            const element = document.createElement('div');
            element.className = 'reformer';
            
            const img = document.createElement('img');
            img.src = reformer.image;
            img.alt = reformer.name;
            
            element.appendChild(img);
            container.appendChild(element);
            
            // Добавляем имя реформатора под кружочком
            const nameElement = document.createElement('div');
            nameElement.className = 'reformer-name';
            nameElement.textContent = reformer.name;
            container.appendChild(nameElement);
            
            element.addEventListener('mouseover', (e) => this.showTooltip(e, reformer));
            element.addEventListener('mouseout', () => this.hideTooltip());
            element.addEventListener('click', () => this.showReformerPage(reformer));
            
            this.timeline.appendChild(container);
        });
    }

    calculatePosition(year) {
        return ((year - this.startDate) / (this.endDate - this.startDate)) * 100;
    }

    showTooltip(event, reformer) {
        this.tooltip.innerHTML = `<strong>${reformer.name}</strong><br>${reformer.year}<br>${reformer.shortInfo}`;
        this.tooltip.style.left = event.pageX + 10 + 'px';
        this.tooltip.style.top = event.pageY + 10 + 'px';
        this.tooltip.style.display = 'block';
    }

    hideTooltip() {
        this.tooltip.style.display = 'none';
    }

    showReformerPage(reformer) {
        const page = document.createElement('div');
        page.className = 'reformer-page';
        page.innerHTML = `
            <div class="reformer-content">
                <img src="${reformer.image}" alt="${reformer.name}">
                <h2>${reformer.name}</h2>
                <p>${reformer.fullBio}</p>
                <div class="reformer-actions">
                    <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">Закрыть</button>
                    <a href="reformer.html?id=${reformer.id}&page=${this.currentPage}" class="profile-link">Подробнее о персонаже</a>
                </div>
            </div>
        `;
        document.body.appendChild(page);
    }

    setupEventListeners() {
        // Зум колесиком мыши
        this.timeline.addEventListener('wheel', (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? 0.9 : 1.1;
            this.zoom(delta);
        });

        // Кнопки зума - исправляем их работу
        document.getElementById('zoomIn').addEventListener('click', () => {
            this.zoom(1.1);
        });
        
        document.getElementById('zoomOut').addEventListener('click', () => {
            this.zoom(0.9);
        });

        // Навигация
        document.getElementById('prevBtn').addEventListener('click', () => this.navigate(-10));
        document.getElementById('nextBtn').addEventListener('click', () => this.navigate(10));

        // Клавиатура
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.navigate(-10);
            if (e.key === 'ArrowRight') this.navigate(10);
        });
    }

    zoom(delta) {
        const prevScale = this.scale;
        const oldVisibleStartDate = this.visibleStartDate;
        const oldVisibleEndDate = this.visibleEndDate;
        
        // Обновляем масштаб
        this.scale *= delta;
        this.scale = Math.max(0.5, Math.min(5, this.scale));
        
        // Ограничиваем смещение при сильном зуме
        if (this.scale > prevScale) {
            this.offset = Math.max(this.minOffset, Math.min(this.maxOffset, this.offset));
        }
        
        // Применяем масштабирование
        this.applyTransform();
        
        // Обновляем видимые даты после масштабирования
        this.updateVisibleDates();
        
        // Проверяем, не вышли ли за пределы допустимого диапазона
        if (this.visibleStartDate < this.startDate || this.visibleEndDate > this.endDate) {
            // Если вышли, возвращаем предыдущий масштаб и видимые даты
            this.scale = prevScale;
            this.visibleStartDate = oldVisibleStartDate;
            this.visibleEndDate = oldVisibleEndDate;
            this.applyTransform();
        }
        
        // Обновляем видимую шкалу и элементы
        this.updateTimeScale();
        this.synchronizeElements();
    }

    navigate(delta) {
        // Инвертируем направление смещения для правильного перемещения по оси времени
        const newOffset = this.offset - delta;
        const oldVisibleStartDate = this.visibleStartDate;
        const oldVisibleEndDate = this.visibleEndDate;
        
        // Ограничиваем смещение в пределах допустимого диапазона
        if (newOffset >= this.minOffset && newOffset <= this.maxOffset && this.isOffsetInRange(newOffset)) {
            this.offset = newOffset;
            
            // Обновляем позицию фона при навигации (инвертируем направление)
            this.updateBackground(-delta);
            
            this.applyTransform();
            
            // Обновляем видимые года
            this.updateVisibleDates();
            
            // Проверяем, не вышли ли за пределы допустимого диапазона
            if (this.visibleStartDate < this.startDate || this.visibleEndDate > this.endDate) {
                // Если вышли, возвращаем предыдущее смещение и видимые даты
                this.offset = this.offset + delta; // Отменяем новое смещение
                this.visibleStartDate = oldVisibleStartDate;
                this.visibleEndDate = oldVisibleEndDate;
                this.updateBackground(delta); // Отменяем смещение фона
                this.applyTransform();
                return; // Прерываем выполнение метода
            }
            
            // Обновляем видимую шкалу и элементы
            this.updateTimeScale();
            this.synchronizeElements();
        }
    }
    
    // Обновленный метод для проверки, находится ли смещение в допустимом диапазоне
    isOffsetInRange(offset) {
        // Рассчитываем видимый диапазон дат после применения смещения
        const timelineWidth = this.timelineContainer.getBoundingClientRect().width;
        const visibleWidth = timelineWidth / this.scale;
        const totalWidth = timelineWidth;
        
        // Смещение в годах
        const totalRange = this.endDate - this.startDate;
        const percentOffset = offset / 100;
        const yearOffset = percentOffset * totalRange;
        
        // Видимые даты после смещения
        const potentialStart = this.startDate - yearOffset * (visibleWidth / totalWidth);
        const potentialEnd = potentialStart + totalRange * (visibleWidth / totalWidth);
        
        // Проверяем, не выходим ли мы за пределы требуемого диапазона (1000-2025)
        return potentialStart >= this.startDate && potentialEnd <= this.endDate;
    }
    
    applyTransform() {
        // Применяем масштабирование и смещение вместе
        this.timeline.style.transform = `translateX(${this.offset}%) scale(${this.scale})`;
        
        // Обновляем видимость и стиль линии времени
        this.updateTimelineAppearance();
    }

    // Новый метод для обновления внешнего вида линии времени
    updateTimelineAppearance() {
        // Убедимся, что линия времени всегда видна
        // Увеличиваем ширину в зависимости от масштаба
        const minWidth = 100 + Math.abs(this.offset);
        const width = Math.max(200, minWidth * this.scale);
        this.timeline.style.width = `${width}%`;
        
        // Настраиваем позицию фоновой линии
        if (this.currentPage === 'version2.html') {
            // Для версии 2 используем стили из version2.css
            return;
        }
        
        // Для остальных версий настраиваем градиент под текущий масштаб и позицию
        const gradientPosition = 50 + (this.offset / 2);
        this.timeline.style.backgroundPosition = `center ${gradientPosition}%`;
    }

    // Обновляем позиции маркеров годов и реформаторов одновременно для синхронизации
    updateVisibleDates() {
        // Получаем размеры контейнера
        const containerRect = this.timelineContainer.getBoundingClientRect();
        
        // Рассчитываем видимый процент временной шкалы
        const totalWidth = containerRect.width * this.scale;
        const visibleWidth = containerRect.width;
        
        // Рассчитываем видимые начальную и конечную даты
        const visiblePercent = visibleWidth / totalWidth;
        
        // Общая продолжительность в годах
        const totalYears = this.endDate - this.startDate;
        
        // Видимая продолжительность в годах
        const visibleYears = totalYears * visiblePercent;
        
        // Рассчитываем видимые даты с учетом масштаба и смещения
        let newStartDate = this.startDate - totalYears * (this.offset / 100);
        
        // Обеспечиваем, чтобы видимые даты не выходили за пределы допустимого диапазона
        if (newStartDate < this.startDate) {
            newStartDate = this.startDate;
        }
        
        let newEndDate = newStartDate + visibleYears;
        
        if (newEndDate > this.endDate) {
            newEndDate = this.endDate;
            // Корректируем начальную дату, если конечная вышла за предел
            if (newEndDate - visibleYears >= this.startDate) {
                newStartDate = newEndDate - visibleYears;
            }
        }
        
        this.visibleStartDate = newStartDate;
        this.visibleEndDate = newEndDate;
        
        // Обновляем позиции маркеров и реформаторов
        this.synchronizeElements();
    }

    // Новый метод для синхронизации маркеров и реформаторов
    synchronizeElements() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        currentReformers.forEach(reformer => {
            // Находим маркер года и реформатора по году
            const markerYear = this.yearMarkers.find(marker => marker.year === reformer.year);
            const reformerContainer = document.getElementById(`reformer-${reformer.year}`);
            
            if (markerYear && reformerContainer) {
                // Рассчитываем одинаковую позицию для обоих элементов
                const position = ((reformer.year - this.visibleStartDate) / (this.visibleEndDate - this.visibleStartDate)) * 100;
                
                // Проверяем, находится ли позиция в видимом диапазоне
                if (position >= 0 && position <= 100) {
                    // Отображаем элементы
                    markerYear.element.style.display = 'flex';
                    reformerContainer.style.display = 'flex';
                    
                    // Устанавливаем одинаковую позицию
                    markerYear.element.style.left = position + '%';
                    reformerContainer.style.left = position + '%';
                } else {
                    // Скрываем элементы за пределами видимого диапазона
                    markerYear.element.style.display = 'none';
                    reformerContainer.style.display = 'none';
                }
            }
        });
    }

    updateTimeScale() {
        const startElement = document.getElementById('startDate');
        const endElement = document.getElementById('endDate');
        
        // Форматирование и отображение дат
        startElement.textContent = this.formatYear(Math.floor(this.visibleStartDate));
        endElement.textContent = this.formatYear(Math.ceil(this.visibleEndDate));
    }
    
    formatYear(year) {
        return year < 0 ? Math.abs(year) + " до н.э." : year;
    }
    
    // Методы для работы с параллакс-эффектом фона
    setupParallaxBackground() {
        // Выбираем правильный фон в зависимости от страницы
        let backgroundFile = 'background.jpg';
        
        if (this.currentPage === 'version2.html') {
            backgroundFile = 'background2.jpg';
        } else if (this.currentPage === 'version3.html') {
            backgroundFile = 'background3.jpg';
        } else if (this.currentPage === 'version4.html') {
            backgroundFile = 'background4.jpg';
        } else if (this.currentPage === 'version5.html') {
            backgroundFile = 'background5.jpg';
        }
        
        // Применяем начальный фон
        document.body.style.backgroundImage = `url('images/${backgroundFile}')`;
        document.body.style.backgroundPosition = `${this.backgroundPosition}px 0`;
        document.body.style.transition = 'background-position 0.3s ease-out';
    }
    
    updateBackground(delta) {
        // Обновляем позицию фона в зависимости от направления навигации
        this.backgroundPosition += delta * this.backgroundSpeed * 30;
        document.body.style.backgroundPosition = `${this.backgroundPosition}px 0`;
    }
}

// Инициализация временной линии
document.addEventListener('DOMContentLoaded', () => {
    new Timeline();
}); 