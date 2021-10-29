"use strict";
@@include('./_aos.js');
@@include('./_jquery.mask.min.js');
$(document).ready(function () {
    // slide-menu
    (function () {
        const searchInputElem = $('.location-menu__search-inp');
        $('.header__burger-menu').on('click', () => {
            $('.header-menu').slideToggle();
        });
        $('.header__location').on('click', () => {
            $('.location-menu--main').slideToggle();
        });
        $('.fixed-menu__header-location').on('click', () => {
            $('.location-menu--fixed').slideToggle();
        });
        $('.js-show-cities').on('click', () => {
            $('.location-menu__lists').slideToggle();
        });
        $('.js-hide-location').on('click', () => {
            $('.location-menu__lists').hide();
            $('.location-menu').hide();
        });
        $('.location-menu__category-btn').on('click', function () {
            searchInputElem.val($(this).text())
        });
        $('.select-language').on('click', () => {
            if ($('.current-lang').text() === 'ENG') {
                $('.current-lang').text('RU')
            } else {
                $('.current-lang').text('ENG')
            }
        })
        const setElementForMobile = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 767) {
                $('.header__center').append($('.header__logo'));
                $('.header__right').append($('.header__burger-menu'));
            } else {
                $('.header__center').append($('.header__burger-menu'));
                $('.header__left').prepend($('.header__logo'));
            }
        }
        setElementForMobile()
        $(window).resize(() => {
            setElementForMobile();
        })
    })();
    // sliders
    (function () {
        const weatherSlider = new Swiper('.northern-lights__slider', {
            slidesPerView: 1,
        })
        const swiperCalendar = new Swiper('.playbill-events__calendar-slider', {
            slidesPerView: "auto",
            freeMode: true,
            speed: 1000,
        })
        const swiperEvent = new Swiper('.playbill-events__slider--event', {
            slidesPerView: "auto",
            spaceBetween: 20,
        })
        const swiperBanners = new Swiper('.playbill-events__slider--banner', {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 20,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                568: {
                    spaceBetween: 20,
                    pagination: false,
                }
            }
        });
        const swiperGoods = new Swiper('.goods-wrapper', {
            slidesPerView: "auto",
            spaceBetween: 20,
            breakpoints: {
                568: {
                    slidesPerView: 4,
                }
            }
        })
        const swiperRoutes = new Swiper('.routes-wrapper', {
            slidesPerView: "auto",
            spaceBetween: 20,
            breakpoints: {
                767: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            }
        })
        const swiperGallery = new Swiper('.gallery__slider', {
            slidesPerView: "auto",
            spaceBetween: 20,
            createElements: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                767: {
                    slidesPerView: 4,
                }
            }
        })
        $('.calendar-arrow__next').on('click', () => {
            swiperCalendar.slideNext();
        })
        $('.event-arrow__next').on('click', () => {
            swiperEvent.slideNext();
        })
        $('.banner-arrow__next').on('click', () => {
            swiperBanners.slideNext();
        })
        $('.banner-arrow__prev').on('click', () => {
            swiperBanners.slidePrev();
        })
        $('.goods-arrow__next').on('click', () => {
            swiperGoods.slideNext();
        })
        $('.routes-arrow__next').on('click', () => {
            swiperRoutes.slideNext();
        })
        $('.gallery-arrow__next').on('click', () => {
            swiperGallery.slideNext();
        })
        $('.gallery-arrow__prev').on('click', () => {
            swiperGallery.slidePrev();
        })
        $('.northern-lights-arrow__prev').on('click', () => {
            weatherSlider.slidePrev();
        })
        $('.northern-lights-arrow__next').on('click', () => {
            weatherSlider.slideNext();
        })
    })();
    // adaptive hide
    (function () {
        const adaptivePosBlock = () => {
            const windowWidth = $(window).width();
            const parentWidth = $('.quiz-individual').width();
            const childWidth = $('.quiz-individual__wrapper').width();
            let posBlock = (childWidth - parentWidth) / 3;
            if (posBlock > 0 && windowWidth > 568) {
                $('.quiz-individual__wrapper').css({
                    "right": `${posBlock}px`
                })
            }
        }
        adaptivePosBlock();
        $(window).resize(() => {
            adaptivePosBlock();
        })
    })();
    // playbill
    (function () {
        const eventsInner = $('.playbill-events__slider--event .swiper-wrapper')
        const showhideBtn = () => {
            if ($('.playbill-events__event').length <= 4) {
                $('.event-arrow__next').hide()
            } else {
                $('.event-arrow__next').show()
            }
        };
        showhideBtn();

        $('.playbill-category').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current')
        });
        $('.playbill-events__inner-empty').hide()
        $('.playbill-events__calendar-item').on('click', function () {
            $('.playbill-events__calendar-item').removeClass('active');
            $(this).addClass('active');
            showhideBtn();
            if (!$(this).hasClass('hasEvent')) {
                $('.playbill-events__inner-slider').hide()
                $('.playbill-events__inner-empty').show()
            } else {
                $('.playbill-events__inner-slider').show()
                $('.playbill-events__inner-empty').hide()
            }
        })
    })();
    // fixed-menu
    (function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= $(this).height()) {
                $('.fixed-menu').addClass('show-leftMenu')
            } else {
                $('.fixed-menu').removeClass('show-leftMenu')
            }
        })
        $('.fixed-menu').on('mouseenter', function () {
            $(this).addClass('show')
        });
        $('.fixed-menu').on('mouseleave', function () {
            $(this).removeClass('show')
        });
        $('.fixed-menu__close').on('click', () => {
            $('.fixed-menu').removeClass('show');
            $('.fixed-menu__menu-block').removeClass('active');
        })
        $('.js-show-menu').on('click', (e) => {
            $('.js-show-menu').toggleClass('current')
            $('.fixed-menu').toggleClass('menu-isOpen')
            $('.fixed-menu').removeClass('show')
            $('.fixed-menu__menu-block').toggleClass('active');
        });
    })();
    // parallax
    (function () {
        AOS.init({
            easing: 'ease-out-back',
        });
        var rellax = new Rellax('.rellax', {
            center: true,
        });
    })();
    // scroll
    (function () {
        $('.playbill__categoryes').mCustomScrollbar({
            axis: "x",
        }); $('.photos__wrapper--scroll').mCustomScrollbar({
            axis: "x",
        }); $('.catalog-choose__categories').mCustomScrollbar({
            axis: "x",
        });
        $('.fixed-pay').mCustomScrollbar({
            axis: "y",
        });
    })();
    // select-city
    (function () {
        const openSelect = function () {
            if ($(this).hasClass('disabled')) {
                return false
            }
            $(this).toggleClass('active')
            $(this).next().slideToggle();

            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
            $('.custom-select__category__elem .control').on('click', function () {
                let text = $(this).text()
                if ($(this).parents('.enter-banner__input')) {
                    $(this).parents('.enter-banner__input').addClass('show-title')
                }
                $(this).parents('.custom-select').find('.custom-select__current-elem').text(text)
                $(this).parents('.custom-select').addClass('filed')
                $(this).parents('.custom-select').removeClass('error')
                $('.custom-select__header').removeClass('active');
                $('.custom-select__body').hide();
            })

        }
        $('.custom-select__header').on('click', openSelect)
    })();
    // quiz
    (function () {
        let count = 0;
        const anketa = [
            {
                question: "Культура и история",
                answer: ['Не интересует', 'Могу уделить немного времени', 'Очень интересует', 'Хочу полностью погрузиться']
            },
            {
                question: "Природа и приключения",
                answer: ['Стараюсь избегать', 'Только популярные места', 'Очень интересует', 'Я - авантюрист']
            },
            {
                question: "Культура и история",
                answer: ['Не люблю делать покупки', 'Если будет свободное время', 'Остановлюсь на магнитиках', 'Хочу купить подарки']
            },
            {
                question: "Культура и история",
                answer: ['Не хочу пробовать новые блюда', 'Не против экспериментов', 'Присоединюсь к мастер-классам', 'Хочу погрузиться в местную кухню']
            },
        ];
        const renderQuestions = (count) => {
            const quizInnerBlock = document.querySelector('.quiz__questions-block');
            if (quizInnerBlock) {
                quizInnerBlock.innerHTML = `
            <div class="questions-block__title">${anketa[count].question}</div>
                <div class="questions-block__wrapper">
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[0]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-happy"></use>
                </svg>
                        <span>${anketa[count].answer[0]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[1]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal"></use>
                </svg>
                        <span>${anketa[count].answer[1]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[2]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal-1"></use>
                </svg>
                        <span>${anketa[count].answer[2]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[3]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-medium"></use>
                </svg>
                        <span>${anketa[count].answer[3]}</span>
                    </button>
                </div>
                <div class="questions-block__dott"></div>
            `}

            $('.questions-block__answer').on('click', function () {
                $('.quiz-routes__progress-item').eq(count).addClass('past')
                if (count != 3) {
                    count++;
                    renderQuestions(count)
                } else if (count === 3) {
                    $('.quiz-routes__progress-item').eq(4).addClass('active')
                    const showPopup = el => {
                        $('.popups').show();
                        $('body').addClass('overlay');
                        $(el).addClass('show');
                    };
                    // showPopup('#preloader');
                    $('#preloader').addClass('sizing')
                    const closeModal = () => {
                        $('.popup').removeClass('show');
                        $('.popups').hide();
                        $('body').removeClass('overlay');
                    }
                    setTimeout(() => {
                        closeModal()
                        $('#preloader').removeClass('show')
                        $('.recomended-route').show()
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".recomended-route").offset().top
                        }, 1000);
                    }, 3000)
                }

                $('.quiz-routes__progress-item').eq(count).addClass('active')
            })
            $('#repeatQuiz').on('click', function () {
                count = 0;
                $('.quiz-routes__progress-item').eq(count).nextAll().removeClass('active past')
                renderQuestions(count)
                $('.recomended-route').hide()
            })
        }
        renderQuestions(count)
        $('.btn-return').on('click', function () {
            count = $(this).attr('data-count')
            const parent = $(this).parents('.quiz-routes__progress-item')
            parent.nextAll().removeClass('active past')
            renderQuestions(count)
        })
    })();
    // filter
    (function () {
        const filterBtnTransform = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 992) {
                $('.catalog__header-settings').append($('.catalog-filter__btn'))
            } else {
                $('.catalog-filter').append($('.catalog-filter__btn'))
            }
        };
        filterBtnTransform()
        $(window).resize(() => {
            filterBtnTransform()
        });
        $('.filter-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
        })
        $('.js-open-filter').on('click', function () {
            $('.fixed-filter').addClass('show')
        });
        $('.fixed-filter__close').on('click', function () {
            $('.fixed-filter').removeClass('show')
            $('.fixed-pay').removeClass('show')
        })
        $('.js-open-pay').on('click', function () {
            $('.fixed-pay').addClass('show')
        });
    })();
    // catalog
    (function () {
    })();
    // questions
    (function () {
        $('.questions-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        })
    })();
    // card-product
    (function () {
        const showBlock = (auth, stat) => {
            $('.new-review__block--default').hide()
            if (auth === 'auth') {
                $('.new-review__block--auth').show()
            } else if (auth === 'noAuth') {
                $('.new-review__block--noAuth').show()
            } else if (auth === 'old') {
                $('.new-review__block--old').show()
            }
            if (stat === 'positive') {
                $('.new-review__input-icon').addClass('like')
            } else if (stat === 'negative') {
                $('.new-review__input-icon').addClass('dislike')
            }
        };
        $('.btn-positive').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.btn-negative').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.card-photos__slide').on('click', function () {
            let urlActivePhoto = $(this).children().attr('src');
            const changeBigPhoto = src => {
                $('.card-photos__big-photo img').attr('src', urlActivePhoto)
            }
            changeBigPhoto(urlActivePhoto)
            $(this).addClass('active').siblings().removeClass('active')
        })
        const swiperCardPhotos = new Swiper('.card-photos__slider', {
            slidesPerView: "auto",
            spaceBetween: 24,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                }
            }
        })
        $('.card-photos-arrow__prev').on('click', () => {
            swiperCardPhotos.slidePrev();
        })
        $('.card-photos-arrow__next').on('click', () => {
            swiperCardPhotos.slideNext();
        })
        const transformPhoto = () => {
            let windowWidth = $(document).width();
            if (windowWidth <= 1200) {
                $('.product-card__header').after($('.product-card__right'))
            } else { $('.product-card__left').after($('.product-card__right')) }
        }
        $(window).resize(() => {
            transformPhoto()
        });
        transformPhoto();
    })();
    // popups
    (function () {
        const showPopup = el => {
            $('.popups').show();
            $('body').addClass('overlay');
            $(el).addClass('show');
        };
        const showNotify = el => {
            $(el).addClass('show');
        }
        const closeNotify = el => {
            $('.notification').removeClass('show');
        }
        const closeModal = () => {
            $('.popup').removeClass('show');
            $('.popups').hide();
            $('body').removeClass('overlay');
        }
        $('.personal-review__delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showPopup(el)
        })
        $('.js-close').on('click', function () {
            closeModal();
            closeNotify();
            $('.fixed-filter').removeClass('show')
        });
        $('.popup__btn-delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            $(this).parents('.popup').removeClass('show');
            $('body').removeClass('overlay');
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('.btn-add-rewiew').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('#add-acc-btn').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            $('#add-way-acc').addClass('disabled')
            setTimeout(closeNotify, 3000)
        })
        $('#add-way-acc').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            $('#add-way-acc').addClass('disabled')
            setTimeout(closeNotify, 3000)
        })
        $('.add-to-favorite').on('click', function () {
            let status = $(this).attr('data-status');
            let el = $(this).attr('data-popup');
            if (status === 'auth') {
                $(this).addClass('active');
            } else if (status === 'noAuth') {
                showPopup(el);
            }
        })
        $('.btn-end').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('.popup__btn-sms').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('#get-sms-way').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })

    })();
    // showMore
    (function () {
        const dataRevew = [{
            name: 'Anon',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'User',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'Person',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        }]
        const renderMoreReviews = function ([...dataRevew]) {
            dataRevew.forEach(el => {
                const review = document.createElement('div');
                review.className = 'all-reviews__item personal-review';
                review.innerHTML = `
                <div class="personal-review__header">
                <div class="personal-review__left">
                    <div class="personal-review__status personal-review__status--like">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#like"></use>
                        </svg>
                    </div>
                    <div class="personal-review__person">
                        <div class="personal-review__name">${el.name}</div>
                        <div class="personal-review__date">${el.date}</div>
                    </div>
                </div>
            </div>
            <div class="personal-review__body">
                <p class="personal-review__text">${el.text}</p>
            </div>
                `;
                $('.all-reviews__show-more').before(review);
            })

        }
        $('.all-reviews__show-more').on('click', function () {
            renderMoreReviews(dataRevew)
        })
    })();
    // calendar
    (function () {
        $(function () {
            console.log(daterangepicker.locale);
            $('input[name="daterange"]').daterangepicker({
                opens: 'right',
                autoUpdateInput: false,
                // showWeekNumbers: false,
                // showISOWeekNumbers: false,
                autoApply: true,
                locale: {
                    format: 'DD.M',
                    cancelLabel: 'Clear',
                    daysOfWeek: false,
                    "monthNames": [
                        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
                    ],
                    "daysOfWeek": [
                    ],
                },

            },
                function (start, end, label) {
                    $('input[name="daterange"]').addClass('filed')
                });
        });
        $('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD.M') + ' - ' + picker.endDate.format('DD.M'));
            $(this).parent().addClass('filed')
            $(this).parent().removeClass('error')
            $(this).parents('.enter-banner__input').addClass('show-title')
            console.log();
        });

        $('input[name="daterange"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    })();

    // google map init and stylized 
    // steps planning way  

    // drag list
    (function () {
        const defauldBuildList = document.querySelector('.build-plan__list')
        const dateList = document.querySelector('.build-plan__list-date');
        const planElements = document.querySelectorAll('.build-plan__elem');
        const shareDateCheckbox = document.querySelector('.build-plan__checkbox input');
        let dataDate = [
            {
                mounth: 10,
                date: 1,
                year: 2021,
            },
            {
                mounth: 10,
                date: 2,
                year: 2021,
            },
            {
                mounth: 10,
                date: 3,
                year: 2021,
            },
            {
                mounth: 10,
                date: 4,
                year: 2021,
            },
            {
                mounth: 10,
                date: 1,
                year: 2021,
            }, {
                mounth: 10,
                date: 5,
                year: 2021,
            },
            {
                mounth: 10,
                date: 6,
                year: 2021,
            }
        ];
        let dataElementsPlan = [
            {
                'id': '01',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'no-drag',
                'btnStatus': 'disabled',
                "payStatus": 'disabled',
                'svg': 'home'
            },
            {
                'id': '02',
                'img': 'img/plan-photo-0.png',
                'name': 'Музей Арктики',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '03',
                'img': 'img/plan-photo-1.png',
                'name': 'Тур «За грибами»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '04',
                'img': 'img/plan-photo-2.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '05',
                'img': 'img/plan-photo-3.png',
                'name': 'Хостел «Хмель и Соль»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '06',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '07',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
        ];
        const renderElementsPlan = (whereRender) => {
            whereRender.textContent = '';
            dataElementsPlan.forEach(({ id, img, name, text, transformStatus, payStatus, svg, btnStatus }) => {
                let planElement = document.createElement('div');
                planElement.classList.add('build-plan__elem', transformStatus);
                planElement.setAttribute('id', `build-plan__elem-${id}`);
                let deleteBtn = (payStatus === 'payed' || btnStatus === 'disabled') ? '' : `</button> <button class="btn btn-delete" data-id="${id}">+</button>`;
                planElement.innerHTML = `
                <div class="build-plan__elem-inner">
                    <div class="build-plan__icon-drag ${btnStatus}">
                    <svg class="">
                        <use xlink:href="./img/icons/icons.svg#${svg}"></use>
                    </svg>
                    </div>
                    <a href='#' class="build-plan__photo">
                        <img src="${img}" alt="Ваш отель">
                    </a>
                    <div class="build-plan__descr">
                        <div class="descr-block__title">${name}</div>
                        <div class="descr-block__text">${text}</div>
                    </div>
                    <button type="button" class="pay-btn btn ${payStatus}" data-id="${id}">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#ticket"></use>
                        </svg>
                        <svg class="payed-icon">
                            <use xlink:href="./img/icons/icons.svg#tick-pay"></use>
                        </svg>
                    ${deleteBtn}
                    </div>
                               </div>
                `;
                whereRender.append(planElement)
            })
        }
        const renderDateList = () => {
            dateList.textContent = '';
            let countId = 0
            dataDate.forEach(({ mounth, date, year }) => {
                countId++
                let dateElem = document.createElement('div');
                dateElem.classList.add('build-list__date');
                dateElem.innerHTML = `
                <div class="build-list__date-label" data-num=${countId}>
                    <span>${date}.${mounth}.${year}</span>
                </div>
                <div id="dragulaId-${countId}" class="build-list__date-inner container"></div>
                `;
                dateList.append(dateElem)
            })
        };
        if ($('#step_4').length !== 0) {
            new Sortable(drag_1, {
                animation: 150,
                ghostClass: 'blue-background-class',
                filter: '.no-drag'
            });
        }
        function SortableInit(elements) {
            elements.forEach(el => {
                new Sortable(el, {
                    animation: 150,
                    handle: '.drag',
                    group: 'shared',
                    filter: '.no-drag'
                });
            })
        }
        if (shareDateCheckbox) {
            shareDateCheckbox.addEventListener('change', function () {
                if (shareDateCheckbox.checked === true) {
                    renderDateList()
                    const dateInnerBlocks = document.querySelectorAll('.build-list__date-inner')
                    renderElementsPlan(dateInnerBlocks[0])
                    let arrayForDrag = []
                    dateInnerBlocks.forEach(el => arrayForDrag.push(el))
                    SortableInit(dateInnerBlocks)
                    defauldBuildList.style.display = 'none';
                } else {
                    dateList.textContent = '';
                    defauldBuildList.style.display = 'block';
                    planElements.forEach(el => {
                        defauldBuildList.append(el)
                    })

                }
            });
        }
        const deleteElementPlan = (id) => {
            dataElementsPlan = dataElementsPlan.filter((el) => id !== el.id);
            if (document.querySelector('.build-plan__list').style.display == 'none') {
                renderElementsPlan(document.querySelector('.build-list__date-inner'));
            } else if (document.querySelector('.build-list__date-inner')) {
                renderElementsPlan(defauldBuildList);
            }
        }
        if (defauldBuildList) {
            renderElementsPlan(defauldBuildList);
            document.addEventListener('click', e => {
                if (e.target.closest('.btn-delete')) {
                    let id = e.target.getAttribute('data-id');
                    deleteElementPlan(id)
                }
                if (e.target.closest('.pay-btn.no-pay')) {
                    $('#new-pay').addClass('show')
                }
                if (e.target.closest('.pay-btn.payed')) {
                    $('#history-pay').addClass('show')
                }
            })
        }
        $('.js-buy-btn').on('click', function () { $('#new-pay').addClass('show') })

    })();
    // showMoreCards
    (function () {
        const showMoreDataCard = [
            {
                name: 'Отель «Ямбург»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель «Ямал»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель "Север"',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
        ]
        // for hosterl
        const caralogChooseHostel = document.querySelector('.catalog-choose__catalog .catalog__wrapper');
        const catalogCardItems = document.querySelectorAll('.catalog-choose__catalog .card-item');
        const showMoreBtn = document.querySelector('.catalog-choose__show-more');

        // for entertainments
        const EntertainmentsDataCards = [
            {
                name: 'Отель «Ямбург»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель «Ямал»',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
            {
                name: 'Отель "Север"',
                descr: '10:00 - 22:00 для регистрации',
                photo: 'img/cards/card-restor_1.png'
            },
        ]
        const entertainmentsCatalog = document.querySelector('.choose-entertainments__catalog .catalog__wrapper');
        const entertainmentsCatalogItems = document.querySelectorAll('.choose-entertainments__catalog .card-item');
        const showMoreBtneEtertainments = document.querySelector('.choose-entertainments__show-more');


        function showhideBtn(items, btn) {
            if (items.length >= 8) {
                btn.style.display = 'block'
            } else {
                btn.style.display = 'none'
            }
        }
        if (caralogChooseHostel) {
            showhideBtn(catalogCardItems, showMoreBtn);

            showhideBtn(entertainmentsCatalogItems, showMoreBtneEtertainments);
        }
        function showMoreCards([...dataCards], catalog) {
            dataCards.forEach(el => {
                const card = document.createElement('div')
                card.className = 'catalog__wrapper-item card-item photo'
                card.innerHTML = `
                        <a href="">
                            <div class="card-item__img">
                                <img src="${el.photo}" alt="${el.name}">
                            </div>
                            <div class="card-item__footer">
                                <div class="card-item__name">${el.name}</div>
                                <div class="descr-block__text">
                                ${el.descr}
                                </div>
                            </div>
                        </a>
                        <button data-type="only" type="button" class="choose-btn btn btn-transparent">
                            <span class="choose-btn__status">Выбрать</span>
                            <div class="choose-btn__icon">
                                +
                            </div>
                        </button>
                                    `
                catalog.append(card);
            })
        }
        function showMoreCardsEtertainments([...dataCards], catalog) {
            dataCards.forEach(el => {
                const card = document.createElement('div')
                card.className = 'catalog__wrapper-item card-item photo'
                card.innerHTML = `
                        <a href="">
                            <div class="card-item__img">
                                <img src="${el.photo}" alt="${el.name}">
                            </div>
                            <div class="card-item__footer">
                                <div class="card-item__name">${el.name}</div>
                                <div class="descr-block__text">
                                ${el.descr}
                                </div>
                            </div>
                        </a>
                        <button type="button" class="choose-btn btn btn-transparent choose-btn--etertainment">
                            <span class="choose-btn__status">Выбрать</span>
                            <div class="choose-btn__icon">
                                +
                            </div>
                        </button>
                                    `
                catalog.append(card);
            })
        }
        if (caralogChooseHostel) {
            showMoreBtn.addEventListener('click', function () {
                showMoreCards(showMoreDataCard, caralogChooseHostel)
            })
            showMoreBtneEtertainments.addEventListener('click', function () {
                showMoreCardsEtertainments(EntertainmentsDataCards, entertainmentsCatalog)
            })
        }
    })();

    // persinal cabinet 
    (function () {

    })();

    // formValidate 
    (function () {
        jQuery.extend(jQuery.validator.messages, {
            required: "Заполните поле",
        });
        $('.input-phone').mask('+7 000 000 00 00');
        $('.input-code').mask('0000');
        $('#fixed-pay__form').validate();
        $('#sms-send').validate();
        $('#enter-phone').validate();
        $('#enter-email').validate();
        $('#reg-traveler').validate();
        $('#reg-partner').validate();
        $('#pas-reset').validate();
        $('#change-data-form').validate();
        $('#create-elem').validate();

        $('.enter-next-btn').on('click', function (e) {
            e.preventDefault();
            if ($('#enter-phone').valid()) {
                $('#window-phone-enter').addClass('hide')
                $('#window-sms-code').removeClass('hide')
            }
        })
        const showHideWindow = function (el) {
            $('.cabinet-window').addClass('hide')
            $(`#${el}`).removeClass('hide')
            console.log(el);

        }

        $('.btn-open-window').on('click', function () {
            let window = $(this).attr('data-open');
            showHideWindow(window)
        })

        $('#become-partner').on('click', function () {
            $(this).hide();
            $('#become-traveler').show();
        })
        $('#become-traveler').on('click', function () {
            $(this).hide();
            $('#become-partner').show();
        })
        $('#submit-traveler').on('click', function (e) {
            e.preventDefault();
            if ($('#reg-traveler').valid()) {
                window.location.href = 'traveler-sucsess.html';
            }
        })

        $('#submit-partner').on('click', function (e) {
            e.preventDefault();
            if ($('#reg-partner').valid()) {
                let window = $(this).attr('data-open');
                showHideWindow(window)
            }
        })


        $('#reset-pas-btn').on('click', function (e) {
            e.preventDefault();
            let window = $(this).attr('data-open');
            if ($('#pas-reset').valid()) {
                showHideWindow(window)
            }
        })
        $('#change-data-btn').on('click', function () {
            console.log('ee');
            $('#personal-profile').addClass('hide')
            $('#data-change').removeClass('hide')
        })
        $('#save-change').on('click', function (e) {
            e.preventDefault()
            console.log('ee');
            if ($('#change-data-form').valid()) {
                $('#personal-profile').removeClass('hide')
                $('#data-change').addClass('hide')
            }
        });
        $('.cabinet-history__btn').on('click', function () {
            $('#history-pay').addClass('show')
        })
        $('.reviews-item').on('click', function (e) {
            e.preventDefault()
            let index = $(this).index()
            $(this).addClass('current').siblings().removeClass('current')
            $('.personal-review').removeClass('show')
            $('.personal-review').eq(index).addClass('show')
            let windowWidth = $(window).width();
            if (windowWidth <= 992) {
                console.log('w');
                $('.cabinet-rewiews__left').hide()
                $('#back-reviews').show()
                $('.cabinet-rewiews__review').show()
                // $('.personal-review').eq(index).addClass('show')
            }
        })
        $('#back-reviews').on('click', function () {
            $('.cabinet-rewiews__left').show()
            $('#back-reviews').hide()
            $('.cabinet-rewiews__review').hide()
        });
        $('#publish-elem').on('click', function (e) {
            e.preventDefault()
            if ($('#create-elem').valid()) {
                window.location.href = 'sucsess-create-elem.html';
            }
        })
        $('.choosen-radio').on('click', function () {
            if ($(this).parents('.custom-select')) {
                let value = $(this).parent().text();
                $(this).parents('.custom-select').addClass('filed')
                $(this).parents('.custom-select').find('.custom-select__current-elem').text(value);
                $('.custom-select__header').removeClass('active')
                $(this).parents('.custom-select').find('.custom-select__header').removeClass('active')
                $(this).parents('.custom-select').find('.custom-select__body').slideUp()
            }

        })
        function rewiewsMovile() {
            let windowWidth = $(window).width();
            if (windowWidth <= 992) {
                // $('.cabinet-rewiews__mobile-right').append($('.cabinet-rewiews__review'))
                $('.reviews-item').on('click', function (e) {
                    e.preventDefault()
                    $('#back-reviews').show()
                    let index = $(this).index()
                    $(this).addClass('current').siblings().removeClass('current')
                    $('.personal-review').removeClass('show')
                    $('.personal-review').eq(index).addClass('show')
                })
            }

        }
        rewiewsMovile()
        $(window).resize(() => {
            rewiewsMovile();
        })
    })();
    // create elem
    (function () {
        $('.upload-menu input').on('change', function () {
            let value = $(this).val();
            $('.upload-menu').hide()
            console.log(value)
            $('.download-description').addClass('upload')
            $('.download-description').text(value);
            $('.create-elem__download .delete-menu').show()
        });
        $('.delete-menu').on('click', function (e) {
            e.preventDefault()
            $('.upload-menu input').val('')
            $('.upload-menu').show()
            $('.download-description').removeClass('upload')
            $('.create-elem__download .delete-menu').hide()
            $('.download-description').text('.pdf < 500Мб');
        })
        function createWorkTime() {
            let timeWork = document.createElement('div')
            timeWork.className = 'cabinet-window__row';
            timeWork.innerHTML = `
            <div class="costum-input costum-input">
                <input type="text" name="time-work" class=""
                    placeholder="Пн-Вт 08:00 - 18:00" required></input>
                <div class="costum-input__icon">
                    <img src="img/icon/text.svg" alt="">
                </div>
            </div>
            <button class="btn square-btn delete-elem">
                <span>+</span>
            </button>
            `
            $('#timeWork-plus').before(timeWork)
        }
        function createRout() {
            let timeWork = document.createElement('div')
            timeWork.className = 'cabinet-window__row create-elem__row-flex';
            timeWork.innerHTML = `
            <button class="btn square-btn delete-elem js-route-add">
                <span>+</span>
            </button>
            <div class="cabinet-window__row">
                <div class="costum-input costum-input">
                    <input type="text" name="name-way" class="" placeholder="Название"
                        required></input>
                    <div class="costum-input__icon">
                        <img src="img/icon/text.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="cabinet-window__row">
                <div class="costum-input costum-input">
                    <input type="text" name="link-way" class="" placeholder="Ссылка"
                        required></input>
                    <div class="costum-input__icon">
                        <img src="img/icon/link.svg" alt="">
                    </div>
                </div>
            </div>
            `
            $('#route-elem').before(timeWork)
        }
        $('#timeWork-plus .btn').on('click', function (e) {
            e.preventDefault()
            createWorkTime()

        })
        $('#route-elem .btn').on('click', function (e) {
            e.preventDefault()
            createRout()
        })
        $('#fixed-pay__submit').on('click', function (e) {
            e.preventDefault()
            if ($('#fixed-pay__form').valid()) {
                window.location.href = 'sucsess-pay.html';
            }
        })
        document.addEventListener('click', function (e) {
            if (e.target.closest('.delete-elem')) {
                let parentElem = e.target.closest('.delete-elem').parentElement;
                parentElem.remove()
            }
            if (e.target.closest('.js-route-add')) {

                let parentElem = e.target.closest('.delete-elem').parentElement;
                parentElem.remove()
            }
        })
    })();

});




