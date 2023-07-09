<?php
/*
Template Name: allProducts
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Lindo Products</title>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/main.css">
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/allProducts.css">

    <?php get_header()?>

    <style>
        .logo{
            top: 17%;
        }
    </style>
</head>
<body>
<!--<ul class="flex-group" id="container">-->
<header class="header">

    <div class="header__shape viewport">

        <div class="viewport__mobile ScaleY(.6) Trfo(c,t)">
            <div class="svg" id="morphing-mobile" style="padding-top: 71.63%;">

                <svg class="svg__element" enable-background="new 0 0 342.003 245" id="headingShape"
                     preserveAspectRatio="xMinYMin meet"
                     version="1.1" viewBox="0 0 342.003 245">

                    <radialgradient cx="177.002" cy="171.1143" fx="178.015" fy="282.5802"
                                    gradientTransform="matrix(0.9999 0.0103 -0.0063 0.6156 1.09 63.9594)"
                                    gradientUnits="userSpaceOnUse"
                                    id="gradient1"
                                    r="503.1308">
                        <stop offset="0" style="stop-color:#ffaab0"/>
                        <stop offset="1" style="stop-color:#ffdee6"/>
                    </radialgradient>

                    <path class="polymorph polymorph_mobile"
                          d="M342.004,220.789c-52.589,12.707-107.509,19.439-164.001,19.439c-61.526,0-121.188-7.986-178.003-22.979V0h342.003L342.004,220.789z"
                          fill="url(#gradient1)"
                          id="headingPolymorph"/>

                </svg>

            </div>
        </div>

        <div class="viewport__desktop">
            <div class="svg" id="morphing-desktop" style="padding-top: 28.39%;">

                <svg class="svg__element" enable-background="new 0 0 342.003 245" id="headingShape"
                     preserveAspectRatio="xMinYMin meet"
                     version="1.1" viewBox="0 0 633.997 180">

                    <radialgradient cx="319.999" cy="151.9531"
                                    gradientTransform="matrix(-4.371139e-08 1 -2.382 -1.041214e-07 681.9544 -168.0459)"
                                    gradientUnits="userSpaceOnUse"
                                    id="gradient2"
                                    r="158.5715">
                        <stop offset="0" style="stop-color:#ffaab0"/>
                        <stop offset="1" style="stop-color:#ffdee6"/>
                    </radialgradient>

                    <path class="polymorph polymorph_mobile"
                          d="M633.998,131.976c-79.848,27.021-192.352,43.849-317.001,43.849c-124.648,0-237.15-16.828-316.997-43.848V0h633.997L633.998,131.976z"
                          fill="url(#gradient2)"
                          id="headingPolymorph"/>

                </svg>

            </div>
        </div>

    </div>


</header>
<!--<div class="container">-->
    <div class="all-products">
        <?php
        $my_posts = get_posts(array(
            'numberposts' => -1,
            'category_name' => 'lindo_products',
            'orderby' => 'date',
            'order' => 'ASC',
            'include' => array(),
            'exclude' => array(),
            'meta_key' => '',
            'meta_value' => '',
            'post_type' => 'post',
            'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
        ));

        foreach ($my_posts as $post) {
            setup_postdata($post);
            if (in_category('lindo_products')) {
                ?>
                <!--            <li>-->
                <!--                <a href="--><?php //echo get_permalink()?><!--">-->
                <!--                    <div class="flex-item">-->
                <!--                        <div class="flex-img">-->
                <!--                            <img src="--><?php //the_field('first_img');?><!--" alt="" width="100%" title="">-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </a>-->
                <!--            </li>-->
                <a href="#">
                    <div class="boxAll">
                        <img src="<?php the_field('first_img'); ?>" alt="Lindo">
                    </div>
                </a>

                <?php
            }
        }

        wp_reset_postdata(); // сброс
        ?>
    </div>
<!--</div>-->
<!--</ul>-->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/jquery.sliphover.min.js"></script>
<script>
    fetch('data/data.json').then(function f(respons) {
        return respons.json()
    }).then(function (data) {
        loopData(data)
    });

    function loopData(item) {
        console.log(item)
        for (let i = 0; i < item.length; i++) {
            $('.flex-group').append(
                '<li>' +
                '<a href="">' +


                '<div class="flex-item">' +
                ' <div class="flex-img">' +
                '<img src="' + item[i].img + '" alt="" width="100%" title="' + item[i].name + ' <br> <p>' + item[i].p + '</p>">' +
                '</div>' +
                // ' <div class="flex-text">'+
                //      '<h1>'+item[i].name+'</h1>'+
                //      '<h1>'+item[i].price+'</h1>'+
                //  '</div>'+
                '</div>' +
                '</a>' +
                '</li>'
            )
            $(function () {

                $('#container').sliphover();
            })
        }

    }

</script>
<?php get_footer() ?>

