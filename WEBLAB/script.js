// Данные о реформаторах для разных версий
const reformersByVersion = {
    // Версия 1 (Экономическая)
    "index.html": [
        {
            id: 1,
            name: "Егор Канкрин",
            year: 1774,
            image: "images/reformer_kankrin.jpg",
            shortInfo: "Министр финансов, создатель денежной реформы",
            fullBio: "Егор Францевич Канкрин (1774–1845) — русский государственный деятель немецкого происхождения. С 1797 года был на русской службе в чине надворного советника. В 1821 году был назначен членом Государственного совета, а в 1823 году — министром финансов. Главным достижением Канкрина считается денежная реформа 1839-1843 годов, которая стабилизировала российскую финансовую систему и укрепила курс рубля на международной арене."
        },
        {
            id: 2,
            name: "Николай Бунге",
            year: 1823,
            image: "images/refromer_bunge.jpg",
            shortInfo: "Профессор-экономист, министр финансов",
            fullBio: "Николай Христианович Бунге (1823–1895) — российский экономист, профессор Киевского университета, министр финансов (1881–1886) и председатель Комитета министров. Бунге выступал за умеренные, постепенные реформы и социальную поддержку малоимущих слоёв населения, был сторонником активной роли государства в экономике."
        },
        {
            id: 3,
            name: "Сергей Витте",
            year: 1849,
            image: "images/reformer_vitte.jpg",
            shortInfo: "Ввел золотой стандарт рубля",
            fullBio: "Сергей Юльевич Витте (1849–1915) — выдающийся государственный деятель Российской империи, министр путей сообщения, министр финансов, председатель Совета министров. Добился введения в России «золотого стандарта», привлёк иностранные инвестиции и стимулировал рост российской промышленности."
        },
        {
            id: 4,
            name: "Алексей Косыгин",
            year: 1904,
            image: "images/reformer_kosigin.jpg",
            shortInfo: "Автор экономической реформы 1965 года",
            fullBio: "Алексей Николаевич Косыгин (1904–1980) — советский государственный и партийный деятель. Он занимал пост председателя Совета министров СССР с 1964 по 1980 год. В ходе его экономической реформы в 1965—1970 годах, была расширена самостоятельность предприятий, которым предоставлялась возможность распоряжаться прибылью."
        },
        {
            id: 5,
            name: "Егор Гайдар",
            year: 1956,
            image: "images/reformer_gaydar.jpg",
            shortInfo: "Автор 'шоковой терапии' 1990-х",
            fullBio: "Егор Тимурович Гайдар (1956–2009) — российский экономист, политик и реформатор. Под руководством Гайдара начался переход от плановой к рыночной экономике, были проведены либерализация цен, реорганизация налоговой системы, либерализация внешней торговли, начата приватизация."
        }
    ],
    // Версия 2 (Военная)
    "version2.html": [
        {
            id: 101,
            name: "Иван IV Грозный",
            year: 1530,
            image: "images/reformer_ivan4.jpeg",
            shortInfo: "Создатель стрелецкого войска и реформатор артиллерии",
            fullBio: "Иван Васильевич, прозванный Грозным, стал правителем в 3 года после смерти отца, Василия III, но реальную власть получил в 1547 году, приняв титул царя. В 1550 году создал стрелецкое войско — первую профессиональную пехоту, вооружённую пищалями. Укреплял артиллерию («наряд»), которая сыграла ключевую роль во взятии Казани (1552). Для защиты от набегов крымских татар построил засечные черты — систему лесных завалов и крепостей на южных границах."
        },
        {
            id: 102,
            name: "Пётр I Великий",
            year: 1672,
            image: "images/reformer_petr1.jpg",
            shortInfo: "Создатель регулярной армии и военно-морского флота России",
            fullBio: "Пётр Алексеевич Романов взошёл на престол в 1689 году, но с юности увлекался военным делом, создавая «потешные полки». После поражения под Нарвой (1700) начал радикальные реформы: ввёл рекрутскую повинность (1705), сделав армию постоянной и профессиональной. Лично изучал кораблестроение в Европе (1697–1698) и основал Балтийский флот, который разгромил шведов при Гангуте (1714)."
        },
        {
            id: 103,
            name: "Павел I",
            year: 1754,
            image: "images/reformer_pavel1.jpg",
            shortInfo: "Реформатор военной дисциплины, автор прусских военных уставов",
            fullBio: "Сын Екатерины II и Петра III, Павел взошёл на престол в 1796 году, ненавидя мать за убийство отца. Увлекаясь прусской военной системой, ввёл муштру и новые уставы (1796), запретив дворянам уклоняться от службы. Создал военные поселения (1797), где солдаты совмещали службу с сельским хозяйством."
        },
        {
            id: 104,
            name: "Дмитрий Милютин",
            year: 1816,
            image: "images/reformer_milutin.jpg",
            shortInfo: "Создатель всеобщей воинской повинности и военных округов",
            fullBio: "Выпускник Николаевской военной академии, Милютин стал военным министром в 1861 году. В 1874 году заменил рекрутчину всеобщей воинской повинностью, сократив срок службы с 25 до 6 лет. Разделил страну на 15 военных округов (1864) для оперативного управления. Ввёл винтовки Бердана и железные дороги для мобилизации."
        },
        {
            id: 105,
            name: "Михаил Фрунзе",
            year: 1885,
            image: "images/reformer_frunze.jpg",
            shortInfo: "Создатель кадровой армии и единой военной доктрины",
            fullBio: "Сын молдавского крестьянина и русской мещанки, Фрунзе стал большевиком в 1904 году. В Гражданскую войну разгромил Колчака и Врангеля. Как нарком по военным делам (1924–1925) ликвидировал милиционную систему, создав кадровую армию с единым командованием. Разработал доктрину «маневренной войны», ставшую основой для Блицкрига."
        },
        {
            id: 106,
            name: "Иосиф Сталин",
            year: 1878,
            image: "images/reformer_stalin.jpg",
            shortInfo: "Организатор военной индустриализации и создатель воздушно-десантных войск",
            fullBio: "Сын сапожника из Гори, Сталин пришёл к власти в 1920-х, устранив соперников. В 1930-е провёл индустриализацию, создав танковые заводы (Харьков, Челябинск) и авиаконструкторские бюро (Туполев, Ильюшин). В 1930 году сформировал первые воздушно-десантные войска. Перед войной увеличил армию до 5 млн человек (1941), но репрессии 1937–1938 ослабили командный состав."
        },
        {
            id: 107,
            name: "Никита Хрущёв",
            year: 1894,
            image: "images/reformer_khrushchev.jpg",
            shortInfo: "Создатель ракетных войск стратегического назначения",
            fullBio: "Сын шахтёра из Курской губернии, Хрущёв стал генсеком в 1953 году. Сократил армию на 2,5 млн человек (1955–1958), сделав ставку на ракеты. В 1959 году создал РВСН (ракетные войска), разместив ракеты на Кубе (1962). Его доктрина «ядерного паритета» привела к Карибскому кризису, но укрепила статус СССР."
        },
        {
            id: 108,
            name: "Сергей Шойгу",
            year: 1955,
            image: "images/reformer_shoigu.jpg",
            shortInfo: "Создатель воздушно-космических сил и профессиональной армии",
            fullBio: "Родился в Тувинской АССР, инженер по образованию. Возглавлял МЧС (1991–2012), прославившись в спасательных операциях. Став министром обороны (2012), объединил ВВС и ПВО в Воздушно-космические силы (2015). Перевёл армию на контракт (2017), увеличив долю профессионалов до 70%. Внедрил гиперзвуковое оружие: «Авангард» (2018), «Кинжал» (2017), «Сармат» (2020)."
        }
    ],
    // Версия 3
    "version3.html": [
        {
            id: 11,
            name: "Иван IV Грозный",
            year: 1530,
            image: "images/reformer_ivan4.jpeg",
            shortInfo: "Первый царь России, создатель Судебника 1550 года",
            fullBio: "Иван IV Васильевич Грозный стал первым царем на Руси. Его управление страной является наиболее длительным на русской земле. Иван Грозный вошел в историю благодаря своему жесткому стилю правления и полной единоличной власти. Также он добился успехов во внешней и внутренней политике и увеличил территорию страны в 2,5 раза. Правление Ивана Грозного характеризуется значительными законодательными реформами, которые заложили основы централизованного государства."
        },
        {
            id: 12,
            name: "Петр I",
            year: 1672,
            image: "images/reformer_petr1.jpg",
            shortInfo: "Создатель Табели о рангах и новой системы управления",
            fullBio: "Петр I Алексеевич не только вошел в историю как реформатор в военной и экономической сферах, но и как выдающийся законодатель, создавший новую систему государственного управления России. В 1708–1710 годах он разделил страну на губернии, в 1711 году учредил Сенат — высший орган власти. Важнейшими законодательными актами Петра стали Генеральный регламент и Табель о рангах, которые полностью изменили структуру государственной службы и управления в России."
        },
        {
            id: 13,
            name: "Екатерина II",
            year: 1729,
            image: "images/reformer_ekaterina2.jpeg",
            shortInfo: "Автор Жалованных грамот дворянству и городам",
            fullBio: "Екатерина II Великая (1729–1796) — русская императрица и одна из самых влиятельных женщин в мировой истории. Ее правление характеризовалось значительными изменениями в политической и законодательной сферах России. Наиболее значимыми были её законодательные инициативы, особенно в области местного самоуправления и организации системы власти в империи."
        },
        {
            id: 14,
            name: "Михаил Сперанский",
            year: 1772,
            image: "images/reformer_speranski.jpeg",
            shortInfo: "Создатель Свода законов Российской империи",
            fullBio: "М. М. Сперанский - русский общественный и государственный деятель, реформатор, законотворец периода правления Александра I и Николая І. Будучи незнатного происхождения, своими выдающимися способностями и трудолюбием смог заслужить доверие императора Александра I и возглавить реформаторскую деятельность в России. Он разработал первый в истории России проект конституции и предложил реформы, многие из которых опережали своё время."
        },
        {
            id: 15,
            name: "Александра Коллонтай",
            year: 1872,
            image: "images/reformer_kollontay.jpg",
            shortInfo: "Первая в мире женщина-министр, автор законов о равноправии",
            fullBio: "Александра Михайловна Коллонтай (1872–1952) — революционерка, дипломат и одна из первых женщин-министров в мировой истории. Была идеологом социальной политики РСФСР, борцом за права женщин и детей, а также за реформу труда. Коллонтай внесла значительный вклад в разработку советского законодательства по правам женщин, созданию системы защиты материнства и детства, а также развитию трудового права."
        }
    ],
    // Версия 4
    "version4.html": [
        {
            id: 21,
            name: "Михаил Ломоносов",
            year: 1711,
            image: "images/reformer_lomonosov.jpg",
            shortInfo: "Первый крупный русский учёный, основатель МГУ",
            fullBio: "Михаил Васильевич Ломоносов — первый крупный русский учёный. Вырос в крестьянской семье, добился блестящего образования и стал статским советником, профессором химии, членом Санкт-Петербургской Императорской академии наук. Самая знаменитая личность, связанная с российским Просвещением. Проявил себя как энциклопедист, физик, химик, астроном, географ, поэт, историк, филолог и во многих других сферах."
        },
        {
            id: 22,
            name: "Иван Шувалов",
            year: 1727,
            image: "images/reformer_shuvalov.jpg",
            shortInfo: "Меценат и идеолог просвещения в России",
            fullBio: "Русский государственный деятель, покровитель науки и искусства. Был меценатом и идеологом просвещения в России, тесно сотрудничал с Ломоносовым. Шувалов содействовал развитию русской науки и искусства, оказывал покровительство учёным, писателям и художникам. Поощрял перевод западных научных трудов на русский язык, поддерживал образование дворян и развитие светской науки."
        },
        {
            id: 23,
            name: "Николай Пирогов",
            year: 1810,
            image: "images/reformer_pirogov.jpg",
            shortInfo: "Основоположник военно-полевой хирургии и анатомии",
            fullBio: "Николай Иванович Пирогов - выдающийся хирург, учёный и педагог, основоположник военно-полевой хирургии, тайный советник. Пытался реализовать реформу образования, особое внимание уделял вопросам медицинского и женского образования. Во время Крымской войны Пирогов был главным хирургом в Севастополе, где также руководил обучением и работой Крестовоздвиженской общины сестёр милосердия."
        },
        {
            id: 24,
            name: "Константин Ушинский",
            year: 1824,
            image: "images/reformer_ushinsky.jpg",
            shortInfo: "Основоположник научной педагогики в России",
            fullBio: "Константин Дмитриевич Ушинский— русский педагог, писатель, один из основоположников научной педагогики в России. Основное внимание на роли личности учителя и национального характера образования. Ушинский провёл ряд важных изменений в образовании: сократил срок обучения до 7 лет, ввёл в учебный план курсы литературы и истории отечественной литературы."
        },
        {
            id: 25,
            name: "Анатолий Луначарский",
            year: 1875,
            image: "images/reformer_lunacharsky.jpg",
            shortInfo: "Первый нарком просвещения РСФСР, реформатор образования",
            fullBio: "Советский политический деятель, первый нарком просвещения РСФСР (1917–1929). Играл ключевую роль в формировании новой системы образования после революции 1917 года. Также, Луначарский написал множество работ на темы литературы, музыки, истории театра и живописи, архитектуры, активно участвовал в антирелигиозной пропаганде."
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
        this.modal = null;
        
        // Параметры для эффекта параллакса при прокрутке
        this.backgroundPosition = 0;
        this.backgroundSpeed = 0.5;
        
        this.init();
    }

    init() {
        this.createTooltip();
        // Сначала загружаем реформаторов из JSON, если текущая страница - военная версия
        if (this.currentPage === 'version2.html') {
            this.loadMilitaryReformers().then(() => {
                this.createYearMarkers();
                this.renderReformers();
                this.updateTimeScale();
                this.updateTimelineAppearance();
                this.stretchTimeline(); // Вызываем метод растягивания линии времени
                this.handleFocusParameter();
            });
        } else {
            this.createYearMarkers();
            this.renderReformers();
            this.stretchTimeline(); // Вызываем метод растягивания линии времени
        }
        
        this.setupEventListeners();
        this.setupParallaxBackground();
        this.createModal();
        
        // Вызываем метод для начальной настройки внешнего вида линии времени
        this.updateTimelineAppearance();
        
        // Обработка параметра focus из URL
        this.handleFocusParameter();
    }
    
    // Новый метод для загрузки военных реформаторов из JSON
    async loadMilitaryReformers() {
        try {
            const response = await fetch('data/reformers.json');
            const reformers = await response.json();
            
            // Проверяем содержимое JSON для отладки
            console.log('Загружены данные о реформаторах:', reformers);
            
            // Фильтруем реформаторов по полю branch со значением "military"
            let militaryReformers = reformers.filter(reformer => reformer.branch === "military");
            
            // Если не найдено ни одного военного реформатора, выводим предупреждение и используем все данные
            if (militaryReformers.length === 0) {
                console.warn('Военные реформаторы с полем branch="military" не найдены, используем все данные');
                militaryReformers = reformers;
            }
            
            // Преобразуем в формат, который ожидает наш код
            const formattedReformers = militaryReformers.map(reformer => {
                return {
                    id: reformer.id,
                    name: reformer.name,
                    year: parseInt(reformer.years.split('-')[0]), // Берем год рождения
                    image: reformer.image,
                    shortInfo: reformer.achievements && reformer.achievements.length > 0 
                        ? reformer.achievements[0] 
                        : 'Информация отсутствует', // Берем первое достижение как краткую информацию
                    fullBio: reformer.biography ? reformer.biography.replace(/<\/?p>/g, '') : 'Биография отсутствует' // Убираем HTML-теги из биографии
                };
            });
            
            // Заменяем существующих реформаторов для военной версии
            reformersByVersion['version2.html'] = formattedReformers;
            
            console.log('Загружены военные реформаторы:', formattedReformers);
            return formattedReformers;
        } catch (error) {
            console.error('Ошибка загрузки реформаторов:', error);
            return [];
        }
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        document.body.appendChild(this.tooltip);
    }

    // Создание модального окна
    createModal() {
        // Создаем модальное окно, если оно еще не создано
        if (!document.getElementById('reformer-modal')) {
            this.modal = document.createElement('div');
            this.modal.id = 'reformer-modal';
            this.modal.className = 'modal';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'close-modal';
            closeBtn.innerHTML = '&times;';
            closeBtn.onclick = () => {
                this.modal.style.display = 'none';
            };
            
            const modalHeader = document.createElement('div');
            modalHeader.className = 'modal-header';
            
            const modalBody = document.createElement('div');
            modalBody.className = 'modal-body';
            
            const modalFooter = document.createElement('div');
            modalFooter.className = 'modal-footer';
            
            modalContent.appendChild(closeBtn);
            modalContent.appendChild(modalHeader);
            modalContent.appendChild(modalBody);
            modalContent.appendChild(modalFooter);
            
            this.modal.appendChild(modalContent);
            document.body.appendChild(this.modal);
            
            // Закрытие модального окна при клике вне его содержимого
            window.onclick = (event) => {
                if (event.target === this.modal) {
                    this.modal.style.display = 'none';
                }
            };
        } else {
            this.modal = document.getElementById('reformer-modal');
        }
    }

    // Новый метод для создания маркеров годов рождения реформаторов
    createYearMarkers() {
        // Очищаем массив и удаляем существующие маркеры
        this.yearMarkers = [];
        const existingMarkers = this.timeline.querySelectorAll('.year-marker');
        existingMarkers.forEach(el => el.remove());
        
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        currentReformers.forEach(reformer => {
            // Создаем маркер года
            const marker = document.createElement('div');
            marker.className = 'year-marker';
            
            // Позиционируем маркер над линией времени
            marker.style.top = '0';
            
            // Создаем линию маркера
            const markerLine = document.createElement('div');
            markerLine.className = 'marker-line';
            
            // Создаем текст года
            const markerYear = document.createElement('div');
            markerYear.className = 'marker-year';
            
            // Форматируем год (отрицательный - до н.э.)
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
        
        // Очищаем текущие элементы реформаторов
        const existingReformers = this.timeline.querySelectorAll('.reformer-container');
        existingReformers.forEach(el => el.remove());
        
        currentReformers.forEach((reformer, index) => {
            const container = document.createElement('div');
            container.className = 'reformer-container';
            
            // Устанавливаем расположение (сверху или снизу) в зависимости от четности индекса
            if (index % 2 === 0) {
                container.style.top = '50px'; // Увеличиваем отступ под линией
            } else {
                container.style.top = '-130px'; // Увеличиваем отступ над линией
            }
            
            // Позиционируем контейнер по горизонтали
            container.style.left = this.calculatePosition(reformer.year) + '%';
            container.dataset.year = reformer.year;
            container.id = `reformer-${reformer.year}`;
            
            // Анимация с задержкой для плавного появления
            container.style.animationDelay = `${0.1 * (index + 1)}s`;
            
            const element = document.createElement('div');
            element.className = 'reformer';
            
            const img = document.createElement('img');
            img.src = reformer.image;
            img.alt = reformer.name;
            
            element.appendChild(img);
            container.appendChild(element);
            
            // Добавляем имя реформатора под или над кружочком
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

    // Обновленный метод для отображения модального окна с информацией о реформаторе
    showReformerPage(reformer) {
        // Определяем, какую версию страницы показывать в зависимости от текущей страницы
        let versionNumber = "1";
        if (this.currentPage === 'version2.html') {
            versionNumber = "2";
        } else if (this.currentPage === 'version3.html') {
            versionNumber = "3";
        } else if (this.currentPage === 'version4.html') {
            versionNumber = "4";
        } else if (this.currentPage === 'version5.html') {
            versionNumber = "5";
        }
        
        // URL страницы реформатора
        let reformerPageUrl = `reformer.html?id=${reformer.id}&version=${versionNumber}`;
        
        // Проверяем, является ли реформатор Иваном Грозным или Петром I, которые присутствуют в нескольких ветках
        if (reformer.id === 11 || reformer.id === 101) {
            // Иван Грозный (законодательная и военная ветки)
            reformerPageUrl = 'reformer_ivan4_combined.html';
        } else if (reformer.id === 12 || reformer.id === 102) {
            // Петр I (законодательная и военная ветки)
            reformerPageUrl = 'reformer_peter1_combined.html';
        } else if (this.currentPage === 'version3.html') {
            // Для других реформаторов версии 3 (законодательная)
            switch (reformer.id) {
                case 13:
                    reformerPageUrl = 'reformer_catherine2.html';
                    break;
                case 14:
                    reformerPageUrl = 'reformer_speransky.html';
                    break;
                case 15:
                    reformerPageUrl = 'reformer_kollontay.html';
                    break;
            }
        } else if (this.currentPage === 'version2.html') {
            // Для других реформаторов версии 2 (военная)
            switch (reformer.id) {
                case 103:
                    reformerPageUrl = 'reformer_pavel1.html';
                    break;
                case 104:
                    reformerPageUrl = 'reformer_milutin.html';
                    break;
                case 105:
                    reformerPageUrl = 'reformer_frunze.html';
                    break;
                case 106:
                    reformerPageUrl = 'reformer_stalin.html';
                    break;
                case 107:
                    reformerPageUrl = 'reformer_khrushchev.html';
                    break;
                case 108:
                    reformerPageUrl = 'reformer_shoigu.html';
                    break;
            }
        } else if (this.currentPage === 'version4.html') {
            // Для реформаторов версии 4 (образовательная)
            switch (reformer.id) {
                case 21:
                    reformerPageUrl = 'reformer_lomonosov.html';
                    break;
                case 22:
                    reformerPageUrl = 'reformer_shuvalov.html';
                    break;
                case 23:
                    reformerPageUrl = 'reformer_pirogov.html';
                    break;
                case 24:
                    reformerPageUrl = 'reformer_ushinsky.html';
                    break;
                case 25:
                    reformerPageUrl = 'reformer_lunacharsky.html';
                    break;
            }
        } else if (this.currentPage === 'version5.html') {
            // Для реформаторов версии 5 (научная/религиозная)
            switch (reformer.id) {
                case 1:
                    reformerPageUrl = 'reformer_luther.html';
                    break;
                case 2:
                    reformerPageUrl = 'reformer_calvin.html';
                    break;
                case 3:
                    reformerPageUrl = 'reformer_zwingli.html';
                    break;
            }
        } else if (this.currentPage === 'index.html' || !this.currentPage) {
            // Для реформаторов версии 1 (экономическая)
            switch (reformer.id) {
                case 1:
                    reformerPageUrl = 'reformer_kankrin.html';
                    break;
                case 2:
                    reformerPageUrl = 'reformer_bunge.html';
                    break;
                case 3:
                    reformerPageUrl = 'reformer_witte.html';
                    break;
                case 4:
                    reformerPageUrl = 'reformer_kosygin.html';
                    break;
                case 5:
                    reformerPageUrl = 'reformer_gaidar.html';
                    break;
            }
        }
        
        // Переходим на страницу реформатора
        window.location.href = reformerPageUrl;
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
        // Применяем масштабирование и смещение, сохраняя вертикальное центрирование
        this.timeline.style.transform = `translateY(-50%) translateX(${this.offset}%) scale(${this.scale})`;
        
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
        if (this.currentPage === 'index.html' || this.currentPage === 'version2.html') {
            // Для версии 1 и 2 используем их соответствующие стили из CSS-файлов
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

    // Обновим метод synchronizeElements для поддержки анимации
    synchronizeElements() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        currentReformers.forEach((reformer, index) => {
            // Находим маркер года и реформатора по году
            const markerYear = this.yearMarkers.find(marker => marker.year === reformer.year);
            const reformerContainer = document.getElementById(`reformer-${reformer.year}`);
            
            if (markerYear && reformerContainer) {
                // Рассчитываем позицию элемента на временной шкале
                const position = ((reformer.year - this.visibleStartDate) / (this.visibleEndDate - this.visibleStartDate)) * 100;
                
                // Проверяем, находится ли позиция в видимом диапазоне
                if (position >= 0 && position <= 100) {
                    // Отображаем элементы
                    markerYear.element.style.display = 'flex';
                    reformerContainer.style.display = 'flex';
                    
                    // Устанавливаем позицию
                    markerYear.element.style.left = position + '%';
                    reformerContainer.style.left = position + '%';
                    
                    // Убедимся, что четные и нечетные реформаторы имеют правильные классы для позиционирования
                    if (index % 2 === 0) {
                        reformerContainer.style.top = '50px'; // Увеличиваем отступ под линией
                    } else {
                        reformerContainer.style.top = '-130px'; // Увеличиваем отступ над линией
                    }
                    
                    // Добавим плавное перемещение
                    reformerContainer.style.transition = 'left 0.3s ease-out';
                    markerYear.element.style.transition = 'left 0.3s ease-out';
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
        let backgroundFile = 'back.jpg';
        
        // Применяем начальный фон
        document.body.style.backgroundImage = `url('images/${backgroundFile}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.transition = 'background-position 0.3s ease-out';
    }
    
    updateBackground(delta) {
        // Не обновляем позицию фона, так как используем background-size: cover
        // Закомментированный код ниже для возможного будущего использования
        // this.backgroundPosition += delta * this.backgroundSpeed * 30;
        // document.body.style.backgroundPosition = `${this.backgroundPosition}px 0`;
    }

    // Метод для обработки параметра focus из URL
    handleFocusParameter() {
        const urlParams = new URLSearchParams(window.location.search);
        const focusId = urlParams.get('focus');
        
        if (focusId) {
            // Найдем реформатора по ID
            const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
            const focusedReformer = currentReformers.find(reformer => reformer.id === parseInt(focusId));
            
            if (focusedReformer) {
                // Найдем позицию реформатора на таймлайне
                const position = this.calculatePosition(focusedReformer.year);
                
                // Центрируем таймлайн на этом реформаторе
                // Инвертируем позицию для смещения (позиция 0% -> смещение 0%, позиция 100% -> смещение -100%)
                this.offset = -position + 50; // 50% - это центр экрана
                
                // Ограничиваем смещение в допустимых пределах
                this.offset = Math.max(this.minOffset, Math.min(this.maxOffset, this.offset));
                
                // Применяем трансформацию
                this.applyTransform();
                
                // Обновляем видимые даты и шкалу
                this.updateVisibleDates();
                this.updateTimeScale();
                this.synchronizeElements();
                
                // Добавим визуальное выделение для найденного реформатора
                const reformerElement = document.querySelector(`#reformer-${focusedReformer.year} .reformer`);
                if (reformerElement) {
                    reformerElement.classList.add('highlight');
                    // Удалим подсветку через 3 секунды
                    setTimeout(() => {
                        reformerElement.classList.remove('highlight');
                    }, 3000);
                }
            }
        }
    }

    // Новый метод для автоматического растягивания линии времени, чтобы показать всех реформаторов
    stretchTimeline() {
        // Получаем реформаторов для текущей страницы
        const currentReformers = reformersByVersion[this.currentPage] || reformersByVersion['index.html'];
        
        if (currentReformers.length === 0) return;
        
        // Находим самую раннюю и самую позднюю даты реформаторов
        let earliestYear = Infinity;
        let latestYear = -Infinity;
        
        currentReformers.forEach(reformer => {
            if (reformer.year < earliestYear) earliestYear = reformer.year;
            if (reformer.year > latestYear) latestYear = reformer.year;
        });
        
        // Добавляем отступы по 10% с каждой стороны для лучшего визуального опыта
        const timeRange = latestYear - earliestYear;
        const padding = timeRange * 0.1;
        
        const adjustedEarliestYear = Math.max(this.startDate, earliestYear - padding);
        const adjustedLatestYear = Math.min(this.endDate, latestYear + padding);
        
        // Рассчитываем идеальный масштаб и смещение
        const totalRange = this.endDate - this.startDate;
        const visibleRange = adjustedLatestYear - adjustedEarliestYear;
        
        // Устанавливаем масштаб так, чтобы показать всех реформаторов
        this.scale = Math.min(3, Math.max(0.8, totalRange / visibleRange * 0.8));
        
        // Находим центр видимого диапазона и смещаем к нему линию
        const centerYear = (adjustedEarliestYear + adjustedLatestYear) / 2;
        const centerPosition = ((centerYear - this.startDate) / totalRange) * 100;
        
        // Инвертируем положение для смещения
        this.offset = -centerPosition + 50; // 50% - середина экрана
        
        // Ограничиваем смещение допустимыми пределами
        this.offset = Math.max(this.minOffset, Math.min(this.maxOffset, this.offset));
        
        // Применяем трансформацию и обновляем отображение
        this.applyTransform();
        this.updateVisibleDates();
        this.updateTimeScale();
        this.synchronizeElements();
    }
}

// Инициализация временной линии
document.addEventListener('DOMContentLoaded', () => {
    new Timeline();
}); 