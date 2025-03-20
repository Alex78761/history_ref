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
        this.timeline = document.getElementById('timeline');
        this.startDate = -600; // Изменим начальную дату для учёта древних философов
        this.endDate = 2000;
        this.scale = 1;
        this.offset = 0;
        this.tooltip = null;
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Параметры для эффекта параллакса при прокрутке
        this.backgroundPosition = 0;
        this.backgroundSpeed = 0.5;
        
        this.init();
    }

    init() {
        this.createTooltip();
        this.renderReformers();
        this.setupEventListeners();
        this.updateTimeScale();
        this.setupParallaxBackground();
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        document.body.appendChild(this.tooltip);
    }

    renderReformers() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        currentReformers.forEach(reformer => {
            const container = document.createElement('div');
            container.className = 'reformer-container';
            container.style.left = this.calculatePosition(reformer.year) + '%';
            
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
                <button onclick="this.parentElement.parentElement.remove()">Закрыть</button>
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
        this.scale *= delta;
        this.scale = Math.max(0.5, Math.min(3, this.scale));
        
        // Исправляем способ применения масштабирования
        this.applyTransform();
    }

    navigate(delta) {
        this.offset += delta;
        this.offset = Math.max(-50, Math.min(50, this.offset));
        
        // Обновляем позицию фона при навигации
        this.updateBackground(delta);
        
        this.applyTransform();
    }
    
    applyTransform() {
        // Применяем масштабирование и смещение вместе
        this.timeline.style.transform = `translateX(${this.offset}%) scale(${this.scale})`;
    }

    updateTimeScale() {
        document.getElementById('startDate').textContent = this.startDate < 0 ? Math.abs(this.startDate) + " до н.э." : this.startDate;
        document.getElementById('endDate').textContent = this.endDate;
    }
    
    // Новые методы для работы с параллакс-эффектом фона
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
        this.backgroundPosition -= delta * this.backgroundSpeed * 30;
        document.body.style.backgroundPosition = `${this.backgroundPosition}px 0`;
    }
}

// Инициализация временной линии
document.addEventListener('DOMContentLoaded', () => {
    new Timeline();
}); 