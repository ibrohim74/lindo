<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/js/splide.min.js"></script>
<script>
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
</script>

<script src="<?php bloginfo('template_url'); ?>/assets/js/main.js" type="text/javascript"></script>

<script type="text/javascript">
    var shareUrl = "https://www.lindo.uz/";
</script>


<script src="<?php bloginfo('template_url'); ?>/assets/js/bps_prd.js" type="text/javascript"></script>


<script type="text/javascript">

    var dotsName = ['classici', 'gocce', 'cacao'];

    var heroSlider = new Swiper('.slideshow_hero', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 3, //looped slides should be the same
        effect: 'fade',
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });

    var packSlider = new Swiper('.slideshow_pack', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        threshold: 5,
        loopedSlides: 3, //looped slides should be the same
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // renderBullet: function (index, className) {
            //   return '<span class="' + className + '"><img class="Maw(80px) Maw(110px)--sm" src="/assets/images/hero/dot-' + (dotsName[index]) + '.png" alt="krumiri ' + (dotsName[index]) + '"></span>';
            // }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        thumbs: {
            swiper: heroSlider
        }

    });

</script>
<script type="application/javascript">

    fetch('data/data.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            loopData(data)
        });

    function loopData(item) {
        console.log(item)
        for (let i = 0; i < item.length; i++) {
            for (let j = 0; j <8 ; j++) {
                $('#lists').append(
                    '<li class="splide__slide">' +
                    '<div class="card" data-tilt>' +
                    '<div class="card-element">' +
                    '<div class="card-img">' +
                    '<img src="' + item[j].img + '" width="100%">' +
                    '</div>' +
                    '<div class="text">' +
                    '<h1>'+item[j].name +'</h1>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +

                    '</li>'
                )
            }

        }

        function myFunction(x) {
            var lists = document.getElementById('lists')
            if (x.matches) {
                var splide = new Splide('.splide', {
                    type: 'loop',
                    perPage: 1,

                    perMove: 1,

                });

                splide.mount();
            } else {
                var splide2 = new Splide('.splide', {
                    type: 'loop',
                    perPage: 2,
                    perMove: 1,
                });

                splide2.mount();
            }
        }

// Create a MediaQueryList object
        const mmObj = window.matchMedia("(max-width: 500px)")

// Call the match function at run time:
        myFunction(mmObj);

// Add the match function as a listener for state changes:
        mmObj.addListener(myFunction)




    }

</script>
<?php wp_footer();?>
</body>
</html>
