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
        $('.playbill-category').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current')
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
                }

                $('.quiz-routes__progress-item').eq(count).addClass('active')
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
        $('.card-item__price').each((index, el) => {
            let countGreenElem = +el.getAttribute('data-price');
            switch (countGreenElem) {
                case 1:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 2:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 3:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 4:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 5:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
            }

        })
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
        $('#fixed-pay__submit').on('click', function (e) {
            e.preventDefault()
            if ($('#fixed-pay__form').valid()) {
                let el = $(this).attr('data-popup');
                showPopup(el);
                $('.price-block__btn').addClass('disabled')
                $('.price-block__btn').text('Оплачено')
            }
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
    (function () {
        let stepCount = 0;
        // maps sеtting

        const firstMap = function () {
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map;
            let markers = [];
            let fromMarker = [];
            let startMarkerst = [
                {
                    position: new google.maps.LatLng(66.86305851932107, 70.8545548132817),
                    map: map,
                    title: 'Яр-Сале',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Яр-Сале",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(67.46201765996048, 78.70893018336228),
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.55047769194653, 66.59826008447075),
                    map: map,
                    title: 'Салехард',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Салехард",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.09653540676248, 76.65587017293807),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Новый Уренгой",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(65.53514113422678, 72.50449449743208),
                    map: map,
                    title: 'Надым',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Надым",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(68.41641830907557, 73.12853422144906),
                    map: map,
                    title: 'Сабетта',
                    icon: {
                        url: "img/icon/marker-sound.svg",
                        scaledSize: new google.maps.Size(39.69, 39.69)
                    },
                    label: {
                        text: "Сабетта",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            let lightMarkers = [
                {
                    position: new google.maps.LatLng(66.86305851932107, 70.8545548132817),
                    map: map,
                    title: 'Яр-Сале',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
                {
                    position: new google.maps.LatLng(67.46201765996048, 78.70893018336228),
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },

                {
                    position: new google.maps.LatLng(66.09653540676248, 76.65587017293807),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
                {
                    position: new google.maps.LatLng(68.41641830907557, 73.12853422144906),
                    map: map,
                    title: 'Новый Уренгой',
                    icon: {
                        url: "img/icon/sound-marker.svg",
                        scaledSize: new google.maps.Size(14, 14)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0px",
                        className: "hide"
                    }
                },
            ];
            let cityMarkersFrom = [
                {
                    position: new google.maps.LatLng(55.7526903859156, 37.62987442234599),
                    map: map,
                    title: 'Москва',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Москва",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(61.36087770604348, 31.326917871606124),
                    map: map,
                    title: 'Санкт-Петербург',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Санкт-Петербург",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(45.03590893134328, 38.97089281611214),
                    map: map,
                    title: 'Краснодар',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Краснодар",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            // Создаем маркеры в markers
            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            // отдельный массив для городов России
            function addMarkerFrom(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                fromMarker.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass();

            // Sets the map on all markers in the array.
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(map);
                }
            }
            // createCoordinates
            function createCoordinates(marker1, marker2) {
                flightPathCoordinates = [];
                flightPathCoordinates.push(marker1, marker2)
                // let startPoint = {}
                flightPath = new google.maps.Polyline({
                    path: flightPathCoordinates,
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ]
                })
                oldCordinates.push(flightPath)
            }
            // отфильровать массивы, чтобы получить 2 города
            function filterMarkers(name) {
                markers = markers.filter(el => name === el.title)
            }
            // добавить линию
            function addLine() {
                flightPath.setMap(map);
            }
            // убрать линию
            function removeLine() {
                oldCordinates.forEach(el => {
                    el.setMap(null);
                })
            }
            // Removes the markers from the map, but keeps them in the array.
            function hideMarkers() {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }
                for (let i = 0; i < fromMarker.length; i++) {
                    fromMarker[i].setMap(null);
                }
            }
            // Shows any markers currently in the array.
            function showMarkers() {
                setMapOnAll(map);
            }
            // add cityFrom
            const inputsCityFrom = $('.choosen-radio-from');
            const inputsCityTo = $('.choosen-radio-to');
            // add distance block
            function createDistanceBlock(distance) {
                return new google.maps.InfoWindow({
                    content: distance
                })
            }
            function initialize() {
                myLatlng = new google.maps.LatLng(67.01156439141535, 73.95476052039851);

                var mapOptions = {
                    zoom: 5,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map = new google.maps.Map(document.getElementById('map'), mapOptions);

                setMapOnAll(map)

                function createWayOnMap() {
                    let name = $('#city-to-value').text().trim()
                    hideMarkers()
                    createStartMass()
                    filterMarkers(name);
                    createDistanceBlock("2165 км").open(map, markers[0])
                    createCoordinates(fromMarker[0].position, markers[0].position);
                    removeLine()
                    setTimeout(addLine, 100);
                    showMarkers()
                }
                $('#add-light-map').on('click', function () {
                    hideMarkers()
                    markers = []
                    $(this).toggleClass('active')
                    if ($(this).hasClass('active')) {
                        lightMarkers.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    } else {
                        startMarkerst.forEach(el => {
                            addMarker(el.position, el.map, el.title, el.icon, el.label)
                        })
                    }
                    markers.forEach(el => {
                        el.addListener('click', function (e) {
                            let val = this.title;
                            $('#city-to-value').text(val);
                            $('.enter-banner__where').addClass('filed')
                            if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                                createWayOnMap()
                            }

                        })
                    })
                    setMapOnAll(map)
                })
                inputsCityFrom.on('change', function () {
                    for (let i = 0; i < fromMarker.length; i++) {
                        fromMarker[i].setMap(null);
                    }
                    fromMarker = [];
                    let i = +$(this).val();
                    addMarkerFrom(cityMarkersFrom[i].position, cityMarkersFrom[i].map, cityMarkersFrom[i].title, cityMarkersFrom[i].icon, cityMarkersFrom[i].label);
                })
                inputsCityFrom.on('change', function () {
                    if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                });
                inputsCityTo.on('change', function () {
                    if ($('.enter-banner__from').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                        createWayOnMap()
                    }
                })
                markers.forEach(el => {
                    el.addListener('click', function (e) {
                        let val = this.title;
                        $('#city-to-value').text(val);
                        $('.enter-banner__where').addClass('filed')
                        if ($('.enter-banner__from ').hasClass('filed') && $('.enter-banner__where').hasClass('filed')) {
                            createWayOnMap()
                        }

                    })
                })
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        }

        firstMap()

        const secondMap = function () {
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            let myLatlng
            let flightPathCoordinates = [];
            let oldCordinates = [];
            let flightPath;
            let map1;
            let allCordinates1 = [
                [
                    { lat: 66.53256677261557, lng: 66.61196913935893 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.53797994510903, lng: 66.59587795576483 },
                    { lat: 66.53551938734692, lng: 66.61205704031188 },
                ],
                [
                    { lat: 66.52640978771203, lng: 66.60338814095442 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.53797994510903, lng: 66.59587795576483 },
                ],
                [
                    { lat: 66.53256677261557, lng: 66.61196913935893 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                    { lat: 66.52692261179189, lng: 66.59257347430562 },
                    { lat: 66.524683202413, lng: 66.59579212514542 },
                ],
            ];
            let markers = [];
            let startMarkerst = [

                {
                    position: new google.maps.LatLng(66.54008719373186, 66.59395247904227),
                    map: map,
                    map: map1,
                    title: 'Центр города',
                    icon: {
                        url: "img/icon/center-btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "0",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53256677261557, 66.61196913935893),
                    map: map,
                    map: map1,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.52692261179189, 66.59257347430562),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53797994510903, 66.59587795576483),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Салехард",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.53551938734692, 66.61205704031188),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Новый Уренгой",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.52640978771203, 66.60338814095442),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Надым",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
                {
                    position: new google.maps.LatLng(66.524683202413, 66.59579212514542),
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Сабетта",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                },
            ];
            // createCoordinates
            function createCoordinates(...markers) {
                flightPathCoordinates = [];
                markers.forEach(el => {
                    flightPathCoordinates.push(el)
                })
                // let startPoint = {}
                flightPath = new google.maps.Polyline({
                    path: flightPathCoordinates,
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ]
                })
                oldCordinates.push(flightPath)
            }
            // добавить линию
            function addLine() {
                flightPath.setMap(map1);
            }
            // убрать линию
            function removeLine() {
                oldCordinates.forEach(el => {
                    el.setMap(null);
                })
            }
            function addMarker(position, map, title, icon, label) {
                const marker = new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon,
                    label,
                });
                markers.push(marker);
            }
            function createStartMass() {
                startMarkerst.forEach(el => {
                    addMarker(el.position, el.map, el.title, el.icon, el.label)
                })
            }
            createStartMass()
            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
            function initializeBuildMap() {
                myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);

                var mapOptions = {
                    zoom: 14,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map1 = new google.maps.Map(document.getElementById('build-way__map'), mapOptions);
                setMapOnAll(map1)


            }
            document.addEventListener('click', e => {
                if (e.target.closest('.build-list__date-label')) {
                    $('.current-date-way').text(e.target.closest('.build-list__date-label').textContent)
                    switch (e.target.closest('.build-list__date-label').getAttribute('data-num')) {
                        case '1':
                            createCoordinates(markers[1].position, markers[2].position, markers[3].position)
                            break
                        case '2':
                            createCoordinates(markers[2].position, markers[1].position, markers[3].position)
                            break
                        case '3':
                            createCoordinates(markers[1].position, markers[4].position, markers[2].position)
                            break
                        case '4':
                            createCoordinates(markers[1].position, markers[2].position, markers[4].position)
                            break
                        case '5':
                            createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                            break
                        case '6':
                            createCoordinates(markers[2].position, markers[4].position, markers[3].position)
                            break
                        case '6':
                            createCoordinates(markers[1].position, markers[4].position, markers[3].position)
                            break
                    }

                    removeLine()
                    setTimeout(addLine, 200)
                    // addLine()
                }
            })

            google.maps.event.addDomListener(window, 'load', initializeBuildMap);
        }
        secondMap()
        const thridMap = function () {
            let flightPath;
            let map;
            function initializeChoosedMap() {
                var myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);
                var pos1 = new google.maps.LatLng(66.53256677261557, 66.61196913935893);
                var pos2 = new google.maps.LatLng(66.52692261179189, 66.59257347430562);
                var pos3 = new google.maps.LatLng(66.53797994510903, 66.59587795576483);
                var pos4 = new google.maps.LatLng(66.53551938734692, 66.61205704031188);
                var pos5 = new google.maps.LatLng(66.52640978771203, 66.60338814095442);
                var pos6 = new google.maps.LatLng(66.524683202413, 66.59579212514542);

                var mapOptions = {
                    zoom: 14,
                    center: myLatlng,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    panControl: false,
                    zoomControl: false,
                    streetViewControl: false,
                    keyboardShortcuts: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#cad2d4"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        }
                    ]
                };
                map = new google.maps.Map(document.getElementById('catalog-choose__map'), mapOptions);
                var marker1 = new google.maps.Marker({
                    position: pos1,
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }

                });
                var marker2 = new google.maps.Marker({
                    position: pos2,
                    map: map,
                    title: 'Тазовский',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Тазовский",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker3 = new google.maps.Marker({
                    position: pos3,
                    map: map,
                    title: 'Хостел «Ямбург»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Ямбург»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker4 = new google.maps.Marker({
                    position: pos4,
                    map: map,
                    title: 'Хостел «У Урсулы»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «У Урсулы»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker5 = new google.maps.Marker({
                    position: pos5,
                    map: map,
                    title: 'Хостел «Хмель и Соль»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Хостел «Хмель и Соль»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });
                var marker6 = new google.maps.Marker({
                    position: pos6,
                    map: map,
                    title: 'Отель «Сибирь»',
                    icon: {
                        url: "img/icon/btn-location.svg",
                        scaledSize: new google.maps.Size(32, 32)
                    },
                    label: {
                        text: "Отель «Сибирь»",
                        color: "#213A8F",
                        fontWeight: "bold",
                        fontSize: "12px",
                        className: "map-label"
                    }
                });

                function generateCard(title) {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                    const cardElem = document.createElement('div');
                    cardElem.className = 'catalog__wrapper-item card-item photo hovered map-card';
                    cardElem.innerHTML = `
                    <a href="">
                        <div class="card-item__img">
                            <img src="img/cards/card-restor_1.png" alt="Отель «Ямбург»">
                        </div>
                        <div class="card-item__footer">
                            <div class="card-item__name">${title}</div>
                            <div class="descr-block__text">
                                10:00 - 22:00 для регистрации
                            </div>
                        </div>
                    </a>
                    <button type="button" data-type="only" class="choose-btn btn btn-transparent map-choose">
                        <span class="choose-btn__status">Выбрать</span>
                        <div class="choose-btn__icon">
                            +
                        </div>
                    </button>
                    `
                    mapContainer.append(cardElem)
                }
                function removeCard() {
                    const mapContainer = document.querySelector('.catalog-choose__map-cards');
                    mapContainer.textContent = ''
                }
                document.addEventListener('click', function (e) {
                    if (e.target.closest('.map-choose')) {
                        if (e.target.closest('.map-choose').classList.contains('current')) {
                            e.target.closest('.map-choose').classList.remove('current');
                        } else {
                            e.target.closest('.map-choose').classList.add('current');
                        }
                    }
                })
                marker1.addListener('click', function () {
                    generateCard(this.title)
                });
                marker2.addListener('click', function () {
                    generateCard(this.title)
                });
                marker3.addListener('click', function () {
                    generateCard(this.title)
                });
                marker4.addListener('click', function () {
                    generateCard(this.title)
                });
                marker5.addListener('click', function () {
                    generateCard(this.title)
                });
                marker6.addListener('click', function () {
                    generateCard(this.title)
                });

            }
            google.maps.event.addDomListener(window, 'load', initializeChoosedMap);
        }
        thridMap()


        // maps sеtting end

        // Steps

        const $steps = $('.steps-planning__step');
        const selectInputs = $('.enter-banner__input .custom-select');
        const values = document.querySelectorAll('#planning-form .custom-select__current-elem');

        const nextStep = function () {
            stepCount++;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            $('.catalog-choose__catalog').show()
            if (stepCount > 1) {
                $('#repeat-step-btn').addClass('show')
                $('#next-step-btn').removeClass('show')

            } else if (stepCount > 0) { $('.enter-banner__form').addClass('only-btn') }
        }
        const prevStep = function () {
            stepCount--;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            if (stepCount == 0) {
                $('#repeat-step-btn').removeClass('show')
                $('#next-step-btn').addClass('show')
                $('.enter-banner__form').removeClass('only-btn')
            };
        }
        $('#next-step-btn').on('click', function () {
            let fieldForm = true;
            selectInputs.each((index, el) => {
                if (!el.classList.contains('filed')) {
                    console.log(el);
                    el.classList.add('error')
                    fieldForm = false
                } else {
                    el.classList.remove('error')
                    fieldForm = true
                }
            })
            if (fieldForm === true && stepCount === 0) {
                nextStep()
                $(this).removeClass('show');
                $('#repeat-step-btn').addClass('show');
                $('#planning-form .custom-select__header').addClass('disabled')
                $('#planning-form .costum-calendar').prop('disabled', true)
                values.forEach(el => {
                    localStorage.setItem(el.getAttribute('data-title'), el.textContent)
                })
            }
        })
        $('#repeat-step-btn').on('click', function () {
            // stepCount = 0;
            // $steps.removeClass('show')
            // $steps.eq(stepCount).addClass('show');
            // $('#planning-form .custom-select__header').removeClass('disabled')
            // $(this).removeClass('show');
            // $('#next-step-btn').addClass('show'); $('.enter-banner__form').removeClass('only-btn');
            // $('.choosen-radio').prop('checked', false);
            // selectInputs.removeClass('filed')
            // $('.enter-banner__input').removeClass('show-title')
            // $('#city-from-value').text($('#city-from-value').attr('data-title'))
            // $('#city-to-value').text($('#city-to-value').attr('data-title'))
            // $('#calendar-value').html(`<span class="calendar-value__start">Когда</span>
            // <span class="calendar-value__finish"></span>`)
            // $('#type-of-recreation').text($('#type-of-recreation').attr('data-title'))
            location.reload();
        })
        $('.btn-next').on('click', function () {
            if (stepCount == 1 && !$('.choose-btn--hostel').hasClass('current') || stepCount == 2 && !$('.choose-btn--etertainment').hasClass('current')) {
                return false;
            } else
                if (stepCount < $steps.length - 1) {
                    nextStep()
                }
        });
        $('.btn-back').on('click', function () {
            if (stepCount > 0) {
                prevStep()
            }
        })
        $('.btn-end').on('click', function () {
            $('.build-way__hendler').hide()
            $('.build-way__hendler--done').addClass('done')
            $('.build-plan__checkbox input').prop('disabled', true);
            $('.build-plan__elem').addClass('done')
            let indexCount = 0
            if ($('.build-plan__list').css('display') === 'none') {
                $('.build-plan__list-date .build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            } else {
                $('.build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            }

        })
        // Steps end

        // choose btn
        $('.catalog-choose__type-search .btn').on('click', function () {
            if ($(this).attr('data-value') === 'list-search') {
                $('.catalog-choose__catalog').show()
                $('.catalog-choose__map').hide()
            } else if ($(this).attr('data-value') === 'map-search') {
                $('.choose-btn[data-type="only"]').removeClass('current')
                $('.choose-btn[data-type="only"]').prop('disabled', false);
                $('.catalog-choose__catalog').hide()
                $('.catalog-choose__map').show()
            }
        })
        $('.choose-btn').on('click', function () {
            if ($(this).attr('data-type') === "only") {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                    $('.choose-btn').prop('disabled', false);
                    $(this).prop('disabled', false);
                } else {
                    $(this).addClass('current');
                    $('.choose-btn[data-type="only"]').prop('disabled', true);
                    $(this).prop('disabled', false);
                }
            } else {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                } else {
                    $(this).addClass('current');
                }
            }
        })
        // choose btn end
    })();
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
        const deleteElementPlan = (id) => {
            dataElementsPlan = dataElementsPlan.filter((el) => id !== el.id);
            if (document.querySelector('.build-plan__list').style.display == 'none') {
                renderElementsPlan(document.querySelector('.build-list__date-inner'));
            } else if (document.querySelector('.build-list__date-inner')) {
                renderElementsPlan(defauldBuildList);
            }
        }
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
        $('.js-buy-btn').on('click', function () { $('#new-pay').addClass('show') })

        new Sortable(drag_1, {
            animation: 150,
            ghostClass: 'blue-background-class',
            filter: '.no-drag'
        });
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
        showhideBtn(catalogCardItems, showMoreBtn);

        showhideBtn(entertainmentsCatalogItems, showMoreBtneEtertainments);

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
        showMoreBtn.addEventListener('click', function () {
            showMoreCards(showMoreDataCard, caralogChooseHostel)
        })
        showMoreBtneEtertainments.addEventListener('click', function () {
            showMoreCardsEtertainments(EntertainmentsDataCards, entertainmentsCatalog)
        })
    })();
    // formValidate 
    (function () {
        jQuery.extend(jQuery.validator.messages, {
            required: "Заполните поле",
        });
        $('.input-phone').mask('+7 000 000 00 00');
        $('#fixed-pay__form').validate();
        $('#sms-send').validate();
    })()
});




