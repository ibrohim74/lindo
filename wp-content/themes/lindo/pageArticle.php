<?php
/*
Template Name: articel

Template Post Type: post,pages
*/
?>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="<?php bloginfo('template_url'); ?>/assets/css/artcl.css">
    <?php get_header() ?>
</head>
<body>
<div class="container">
    <div class="flexProduct">
        <div class="centerProduct">
            <img src="<?php the_field('first_img'); ?>" alt="" class="firstProduct">
            <h1 class="nameProduct"><?php the_field('name_product'); ?></h1>
        </div><div class="line"></div>
        <div class="boxP">
            <div class="box-texts">
                <h1>sostav</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem cupiditate quas quibusdam quidem
                    recusandae saepe soluta, vero! Accusamus accusantium ad amet animi architecto consequuntur dolore
                    dolores error, est excepturi, exercitationem fugiat inventore maxime, nam necessitatibus pariatur
                    placeat reiciendis rem sapiente similique tempora velit voluptas voluptatum? Aperiam asperiores at
                    consectetur consequuntur culpa debitis, delectus earum, eligendi est eveniet fuga fugiat illo in,
                    inventore labore minus nisi nulla officia omnis pariatur praesentium quae quam quas quasi quis
                    recusandae rem repellat sapiente sed sit sunt tempora tenetur voluptatum. Aliquid autem dolore fuga
                    harum magnam officia quia similique tempore, unde vel velit voluptatum!recusandae rem repellat sapiente sed sit sunt tempora tenetur voluptatum. Aliquid autem dolore fuga
                    harum magnam officia quia similique tempore, unde vel velit voluptatum!harum magnam officia quia similique tempore, unde vel velit voluptatum!recusandae rem repellat sapiente sed sit sunt tempora tenetur voluptatum. Aliquid autem dolore fuga
                    harum magnam officia quia similique tempore, unde vel velit voluptatum!</p>
            </div>

            <div class="box-photos">
                <img src="<?php the_field('first_img'); ?>" alt="" width="100%">
            </div>
        </div>
    </div>

</div>


<?php get_footer() ?>
