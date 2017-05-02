<?php



//FUNCTION CHILD THEME
//*********************


/*Questo file è parte di twenty-seventeen-child-mio, twentyseventeen child theme.

Tutte le funzioni di questo file saranno caricate prima delle funzioni del tema genitore-
Per saperne di piùhttps://codex.wordpress.org/Child_Themes.

Nota: questa funzione carica prima il foglio di stile genitore, poi il foglio di stile figlio.
(lascialo al suo posto se non sai cosa stai facendo)
*/


function twenty_seventeen_child_mio_enqueue_child_styles() {
$parent_style = 'parent-style'; 
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 
		'child-style', 
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		wp_get_theme()->get('Version') );
	}
add_action( 'wp_enqueue_scripts', 'twenty_seventeen_child_mio_enqueue_child_styles' );

/*Scrivi qui le tue funzioni */




//FUNCTION GRADIENT 
//*******************


    // load script and css on Wordpress  Function.php File !
    //warning! External scripts may already be recalled in your theme or plugin.Make sure you do not load them several times
   require_once( get_stylesheet_directory() . '/admin/theme_page_structure.php' );  //admin page option 