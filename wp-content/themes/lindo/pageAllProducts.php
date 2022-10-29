<?php
/*
Template Name: allProducts
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/allProducts.css">
</head>
<body>
<ul class="flex-group" id="container">
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
            <li>
                <a href="<?php echo get_permalink()?>">
                    <div class="flex-item">
                        <div class="flex-img">
                            <img src="<?php the_field('first_img');?>" alt="" width="100%" title="">
                        </div>
                    </div>
                </a>
            </li>
            <?php
        }
    }

    wp_reset_postdata(); // сброс
    ?>
</ul>

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

