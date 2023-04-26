$(document).ready(function () {
    new WOW({
            animateClass: 'animate__animated'
        }
    ).init();

    let carouselTour = $('.slick-carousel.slick-carousel-tour');
    carouselTour.slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    let carouselFeedbacks = $('.slick-carousel.slick-carousel-feedbacks');
    carouselFeedbacks.slick({
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    let carouselGallery = $('.slick-carousel.slick-carousel-gallery');
    carouselGallery.slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true
    });

    let carouselGalleryMini = $('.slick-carousel.slick-carousel-gallery-mini');
    for (let i = 1; i < 5; i++)
        for (let j = 1; j < 6; j++) {
            let str = '<div class="slick-carousel__item"><a href="images/gallery/gallery-' + i + '-' + j + '.jpg"><img src="images/gallery/gallery-' + i + '-' + j + '.jpg" alt="Природа Исландии"></a><div>';
            $(str).appendTo(carouselGalleryMini);
        }

    carouselGalleryMini.slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    function scroll(id) {
        let top = id.offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    }

    // .header
    let menu = $('.header__menu');
    let menuMini = $('.header__menu-mini');
    let menuItems = $('.header__menu-item');
    let menuItemsId = [$('#advantages'), $('#tour-program'), $('#feedbacks'), $('#gallery')];
    for (let i = 0; i < menuItemsId.length; i++) {
        $(menuItems[i]).on("click", (e) => {
            e.preventDefault();
            let id = menuItemsId[i];
            if (screen.width < 768) {
                menu.removeClass('d-flex').addClass('d-none');
                menuMini.removeClass('d-none').addClass('d-flex');
            }
            scroll(id);
        })
    }

    menuMini.on("click", () => {
        menu.removeClass('d-none').addClass('d-flex');
        menuMini.removeClass('d-flex').addClass('d-none');
    })

    $('.header__menu-cross').on("click", () => {
        menu.removeClass('d-flex').addClass('d-none');
        menuMini.removeClass('d-none').addClass('d-flex');
    })

    // .about
    $('#to-reservation').on("click", () => {
        let id = $('#reservation');
        scroll(id);
    })

    $('#watch-video-small').on("click", (e) => {
        e.preventDefault();
        let id = $('#last-video-tour');
        scroll(id);
    });

    // .advantages .advantages-bottom
    let pointsOfPath = $('.advantages__iceland-path-point');
    let poi = {
        titles: [
            'Заповедник Хорнстрандир',
            'Водопад Гюдльфосс',
            'Великий Гейсир',
            'Голубая лагуна',
            'Цветные горы Ландманналойгар'
        ],
        texts: [
            'Высота береговых скал 534 метра над уровнем моря, что создает идеальные условия для едва ли не самой большой колонии морских птиц на земле.',
            'Ступени высотой в 11 и 21 метр и глубина падения воды до 70 метров сделали этот водопад одним из самых посещаемых туристами.',
            'Гейзер на юго-западе Исландии в 50 километрах от вулкана Гекла, выбрасывающий кипящую воду на высоту до 70 метров.',
            'Один из самых известных и популярных термальных источников Исландии, который располагается в 40 км от города Рейкьявик.',
            'Невероятные пейзажи и уникальное буйство красок – все это цветная долина Ландманналойгар, популярная среди любителей дикой природы.'
        ],
        images: [
            'images/poi/poi-hornstrandir.png',
            'images/poi/poi-gullfoss.png',
            'images/poi/poi-geysir.png',
            'images/poi/poi-blue-lagoon.png',
            'images/poi/poi-landmannalaugar.png'
        ]
    }
    let poiTitle = $('.advantages__bottom-right-title');
    let poiText = $('.advantages__bottom-right-text');
    let poiImage = $('.advantages__bottom-right-image img');
    for (let i = 0; i < pointsOfPath.length; i++) {
        let target = $(pointsOfPath[i]);

        target.on("click", () => {
            if (parseInt((target.text()), 10) === i + 1) {
                if (target.hasClass('advantages__iceland-path-point_selected')) return;
                pointsOfPath.removeClass('advantages__iceland-path-point_selected');
                target.addClass('advantages__iceland-path-point_selected');
                poiTitle.animate({opacity: '0'});
                setTimeout(function () {
                    poiTitle.text(poi.titles[i]).animate({opacity: '1'});
                }, 1000);
                poiText.animate({opacity: '0'});
                setTimeout(function () {
                    poiText.text(poi.texts[i]).animate({opacity: '1'});
                }, 1000);
                poiImage.slideUp(1000);
                setTimeout(function () {
                    poiImage.attr('src', poi.images[i]).fadeIn(1000);
                }, 1000);
            }
        })
    }

    // .last-tour-video
    $('#watch-video-big').on("click", (e) => {
        e.preventDefault();
        $('.last-tour-video__youtube').css('z-index', 1).css('opacity', 100);
    })

    $('.last-tour-video__cross').on("click", () => {
        $('.last-tour-video__youtube').css('z-index', -1).css('opacity', 0);
        $('.yt-player-iframe').each(function () {
            $(this).attr("src", $(this).attr("src")); //обновляем src для iframe и плейер останавливает проигрывание
        });
    })

    // .tour-program
    $('.carousel-button-tour_left').on("click", () => {
        carouselTour.slick('slickPrev');
    })

    $('.carousel-button-tour_right').on("click", () => {
        carouselTour.slick('slickNext');
    })

    $('.tour-program__download').on("click", (e) => {
        e.preventDefault(); //заглушка от скролла
    })

    // .feedbacks
    let carouselFeedbacksButtonLeft = $('.carousel-button-feedbacks_left');
    let carouselFeedbacksButtonRight = $('.carousel-button-feedbacks_right');

    carouselFeedbacksButtonLeft.on("click", () => {
        carouselFeedbacks.slick('slickPrev');
        carouselFeedbacksButtonRight.removeClass('disabled');
    })

    carouselFeedbacksButtonRight.on("click", () => {
        carouselFeedbacks.slick('slickNext');
        carouselFeedbacksButtonLeft.removeClass('disabled');
    })

    carouselFeedbacks.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide === 0) carouselFeedbacksButtonLeft.addClass('disabled');
        if (nextSlide === slick.slideCount - 1) carouselFeedbacksButtonRight.addClass('disabled');
    });

    // .gallery
    $('.gallery-button__left').on("click", () => {
        carouselGallery.slick('slickPrev');
        carouselGalleryMini.slick('slickPrev');
    })

    $('.gallery-button__right').on("click", () => {
        carouselGallery.slick('slickNext');
        carouselGalleryMini.slick('slickNext');
    })

    let images = {};

    function initMagnific() {
        if (screen.width < 768) {
            images = $('.slick-carousel-gallery-mini a');
        } else {
            images = $('.slick-carousel-gallery a');
        }

        for (let i = 0; i < images.length; i++) {
            $(images[i]).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                showCloseBtn: false,
                fixedContentPos: true,
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 500
                }
            });
        }
    }

    initMagnific();

    $(window).resize(() => {
        menu.removeClass('d-flex').removeClass('d-none');
        menuMini.removeClass('d-flex').removeClass('d-none');
        initMagnific();
    });

    // .reservation
    let reservationButtons = $('.reservation__btn');
    let inputName = $('#input-name');
    let inputPhone = $('#input-phone');
    let quantity = 0;
    let hasError = false;
    let reservationFormApp = $('.reservation__form-app');
    let reservationModal = $('.reservation__modal-window');

    inputPhone.inputmask({'mask': '+375 (99) 999-99-99'});

    for (let i = 0; i < reservationButtons.length; i++) {
        $(reservationButtons[i]).on("click", (e) => {
            let target = $(e.target);
            quantity = 0;
            reservationButtons.removeClass('warning');
            inputName.prev().addClass('invisible');
            if (!target.hasClass('selected')) {
                reservationButtons.removeClass('selected');
                quantity = parseInt(e.target.innerText, 10);
            }
            target.toggleClass('selected');
        })
    }

    $('.reservation__btn-submit').on("click", (e) => {
        e.preventDefault();
        hasError = false;
        $('.reservation__form input').removeClass('warning').next().addClass('invisible');
        if (quantity === 0) {
            reservationButtons.addClass('warning');
            inputName.prev().removeClass('invisible');
            hasError = true;
        }
        if (!inputName.val()) {
            inputName.addClass('warning').next().removeClass('invisible');
            hasError = true;
        }
        if (!inputPhone.val()) {
            inputPhone.addClass('warning').next().removeClass('invisible');
            hasError = true;
        }
        if (!hasError) {
            $.ajax({
                method: 'POST',
                url: 'https://testologia.site/checkout',
                data: {quantity: quantity, name: inputName.val(), phone: inputPhone.val()}
            }).done((msg) => {
                if (msg.success) {
                    reservationFormApp.animate({opacity: '0'}, 750).css('z-index', -1);
                    reservationModal.css('z-index', 1).animate({opacity: '1'}, 750);
                    return;
                }
                alert('Произошла ошибка, повторите попытку позже...');
            })
        }

        $('.reservation__modal-window-btn').on("click", () => {
            inputPhone.val('');
            inputName.val('');
            quantity = 0;
            reservationButtons.removeClass('selected');
            reservationFormApp.animate({opacity: '1'}, 750).css('z-index', 1);
            reservationModal.css('z-index', -1).animate({opacity: '0'}, 750);
        })
    })
})