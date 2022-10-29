<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'lindo' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'sS~l<7<zFj4vTvm6wZw-:E>qB y9=n1ZG>-KL]Z@@!K5[bnPdk?3k_V*y|Jw],I:' );
define( 'SECURE_AUTH_KEY',  '@<lI=f1oWS{I&_g]}0WVQ&1~thu^!_`@07O%{sQG(0bx32Lit*=.zT=-k[240G~{' );
define( 'LOGGED_IN_KEY',    'd8nU{#&WAjD]2EKUe)A!54fgGpEUm-{df5_(k_Wk;Oh#]}=cZ]H$4~IK;/B(u76j' );
define( 'NONCE_KEY',        'd@Rk}9:l`sAtrt9kjJ?`~:DMqO)-}@Cg~hZVZ!~;@:Ozot0hg^_=.*7xOnqL~G9O' );
define( 'AUTH_SALT',        'f82{vv80~M5p77XDzt}=!A21Hq`R3l/b.bCAk<Gr~(#RT up^pdXt^BZJ[T)3jpR' );
define( 'SECURE_AUTH_SALT', '4VT.{-L/+mQ)aLtPwDR[Dc :Nafr5zDk1, >;&%}U~rJ=cw.FWTaW7hv7:k+8g#f' );
define( 'LOGGED_IN_SALT',   '*EmyRE)k&xvGJr4:dUg]{6acd~5^9+v>8 U`&!fl/H4R}Lq[c;J$O}dA`S<>~V[E' );
define( 'NONCE_SALT',       ']A;2i#Hblfnqal/v.V<8ShV^%})e]UI(#Tx=7AlD:evp^5CEil<eLM4#)SqS8OBC' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
