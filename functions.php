<?php

 

//FUNCTION CHILD THEME
//*********************


/*Incorporate style.css of the original theme !!!!!!!!!!!!!!!!

 Note: This feature first loads the parent style sheet, then the child style sheet.
(Leave it in place if you do not know what you are doing)
*/


function twenty_seventeen_child_enqueue_child_styles() {
$parent_style = 'parent-style'; 
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 
		'child-style', 
		get_stylesheet_directory_uri() . '/style.css',
		array( $parent_style ),
		wp_get_theme()->get('Version') );
	}
add_action( 'wp_enqueue_scripts', 'twenty_seventeen_child_enqueue_child_styles' );





//FUNCTION GRADIENT 
//*******************


    // load script and css on Wordpress  Function.php File !
    //warning! External scripts may already be recalled in your theme or plugin.Make sure you do not load them several times
   require_once( get_stylesheet_directory() . '/admin/theme_page_structure.php' );  //admin page option 
   
   
   
?> 
