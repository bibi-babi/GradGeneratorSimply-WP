<?php


// 0.0 Register get_option Hook | importante sia impostato dopo la registrazione del get_option nei singoli file.
global $theme_ttoption_defaults;

//0.0 list of General  variable for load option theme
    $var = "TGetOption_ttoption"; // $$var = $v;
    $$var = get_option( 'tttheme_theme_ttoption_hook_settings', $theme_ttoption_defaults ); 
    //final register variable: $TGetOption_ttoption
    //EXAMPLE FINAL:     $TGetOption_ttoption       = get_option( 'tttheme_theme_ttoption_hook_settings', $theme_ttoption_defaults  );


if (file_exists(get_stylesheet_directory().'/gradient-resources/gradient-function.php')){ require_once( get_stylesheet_directory().'/gradient-resources/gradient-function.php');}     
    
//0.0 REQUEST JS and CSS  for theme option page (style | jquery ui |codemirror)
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    
   //3.1 Adding the STYLES for the theme option admin page used when my_theme_page_setting_creator() is launched ---------------------------------------------------------------------------------------
    function theme_page_admin_styles() {  // REGISTER NAME ON  =>>>>>>>>> theme_minify_all_cssjs.php
          // SPECIAL ICON Add Fontawesome Icons ||  http://fontawesome.io || URL link esternal get id https://cdnjs.com/libraries/font-awesome
        wp_enqueue_style( 'icon-style-font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css','','4.7.0', all );
        
        //Circular Slider || https://github.com/soundar24/roundSlider
        wp_enqueue_style('roundslider-css',get_stylesheet_directory_uri().'/gradient-resources/js/external-js/RoundSlider/roundslider.min.css','','1.3', all ); 

        //Some Effect  and CSS for animation
        wp_enqueue_script('graphic-effects-js',get_stylesheet_directory_uri(). '/gradient-resources/js/graphic-effects.min.js',array( 'jquery' ), '1.0', false  );  
        wp_enqueue_style('general-text-css',get_stylesheet_directory_uri().'/gradient-resources/css/general-text.min.css','','1.0', all); 
        //----------------------------------------------------------
        
        //Gradient Generator function js      
        wp_enqueue_style('GradGeneratorSimply-css',get_stylesheet_directory_uri().'/gradient-resources/css/GradGeneratorSimply.min.css','','1.0', all); 
        //----------------------------------------------------------
        
    } //---------------------------------------------------------------------------------
    

    
          
    //3.2 Adding the JS for the  theme option page -------------------------------------------------------------------------------------------------
    // ,array( 'jquery' ) -> dopo aver caricato jquery, ma si può fare anche con altri js come -> jquery-ui-core
    function theme_page_admin_scripts() {  // REGISTER NAME ON  =>>>>>>>>> theme_minify_all_cssjs.php
       
          
       


        //UI JQUERY DEPENDECIES -----------------------------------------------------------------------
        if (    !wp_script_is('jquery-ui-core',$list='registered') //if jquery don't exist on wp script list
                || !wp_script_is('jquery-ui-accordion',$list='registered') 
                || !wp_script_is('jquery-ui-slider',$list='registered')
                || !wp_script_is('jquery-ui-tooltip',$list='registered')
                || !wp_script_is('jquery-ui-resizable',$list='registered')
        ){ wp_register_script('jquery-ui-custom-js','https://code.jquery.com/ui/1.12.1/jquery-ui.min.js' );
           wp_enqueue_script('jquery-ui-custom-js');
           wp_enqueue_script('jquery-touch-punch');    //Iris Jquery   Dependencies
         }
        //  load-scripts.php  jquery-ui-core,jquery-ui-widget,jquery-ui-accordion...... 
        else { wp_enqueue_script('jquery-ui-core');         //UI Jquery                 | Dependencies for -> Iris 
               wp_enqueue_script('jquery-ui-accordion');    //UI Jquery Accordion       
               wp_enqueue_script('jquery-ui-slider');       //UI Jquery slider          | Dependencies for -> Iris
               wp_enqueue_script('jquery-ui-tooltip');      //UI Jquery  tooltip        
               wp_enqueue_script('jquery-ui-resizable');    //UI Jquery resize box    
               
               wp_enqueue_script('jquery-effects-core');    //Slider Bar (class option -> add class, remove, toogle)
        }  
        //  -----------------------------------------------------------------------

        //CUSTOM WIDGET JQUERY UI | funzioni di personalizzazione dei widget UI. Fondamentale, nel richiamo mettere array il nome del jquery che serve es: jquery-ui-slider che chiede: ui.slider
        wp_enqueue_script('jquery-ui-widget-exstension',get_stylesheet_directory_uri().'/gradient-resources/js/jquery-ui-widget-exstension.min.js',array( 'jquery', 'jquery-ui-core','jquery-ui-slider' ),'1.0', false );   
        //----------------------------------------------------------
 
 
 
        //UI COLOR PIKER  ------------------
        // Dependencies ->  jQuery 1.7  +  ()'jquery-ui-draggable', 'jquery-ui-slider', 'jquery-touch-punch') (jQuery UI core, widget, and mouse components. )
        if (       !wp_script_is('iris',$list='registered') ){
                    wp_enqueue_script( 'wp-color-picker' ); wp_enqueue_style( 'wp-color-picker' ); 
        } else if (!wp_script_is('wp-color-picker',$list='registered') ){
                    wp_enqueue_script('farbtastic'); wp_enqueue_style( 'farbtastic' ); 
        } else {    //Dependencies -> Iris relies on jQuery 1.7 and up, and the draggable and slider jQuery UI components. (Those then presume jQuery UI core, widget, and mouse components. 
                    // wp_enqueue_script('iris');  
                    //wp_enqueue_style('iris'); 
                    wp_enqueue_script( 'wp-color-picker' );  //piker default
                    wp_enqueue_style(  'wp-color-picker' );
        }
        
        //piker color alphta exsterna plugin || //    https://github.com/23r9i0/wp-color-picker-alpha
        wp_enqueue_script( 'wp-color-picker-alpha',get_stylesheet_directory_uri().'/gradient-resources/js/external-js/wp-color-picker-alpha.min.js', array('wp-color-picker'), '1.2.2', false ); 
        
        //option for color piker
        wp_enqueue_script( 'wp-color-picker-option', get_stylesheet_directory_uri().'/gradient-resources/js/wp-color-piker-option.min.js','', '1.0', false ); 
        //----------------------------------------------------------
         
        
   
   
        //Circular Slider || https://github.com/soundar24/roundSlider
        wp_enqueue_script('roundslider-js',get_stylesheet_directory_uri().'/gradient-resources/js/external-js/RoundSlider/roundslider.min.js', array('jquery'), '1.3', false ); 
   
        //option fro roundslider
        wp_enqueue_script('roundslider-option-js',get_stylesheet_directory_uri().'/gradient-resources/js/RoundSlider-option.min.js',array( 'jquery','roundslider-js'), '1.0', false );   
        //----------------------------------------------------------
        
        //Some Effect  and CSS for animation
        wp_enqueue_script('graphic-effects-js',get_stylesheet_directory_uri() . '/gradient-resources/js/graphic-effects.min.js',array( 'jquery' ), '1.0', false  );  
        //----------------------------------------------------------
   
        //Gradient Generator function js      
        wp_enqueue_script('GradGeneratorSimply-js', get_stylesheet_directory_uri().'/gradient-resources/js/GradGeneratorSimply.min.js',array( 'jquery','roundslider-js','wp-color-picker' ),'1.0', false );   
        //----------------------------------------------------------
         
                
    }//close theme_page_admin_scripts

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
   

   
//0.0 PAGE CREATION ON ADMIN SITE  
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
     
   
    //4.2 Create THEME PAGE LIST (Multipage) ----------------------------------------------------------------------------------
        // http://codex.wordpress.org/Function_Reference/add_theme_page
        // SE VOGLIO CREARE DIVERSE PAGINE: https://wordpress.org/support/topic/make-multiple-pages-and-set-templatecontent-on-theme-activation?replies=9
    function my_theme_page_setting_creator() { 
       //-----------------------------------------------------------------------------
        
        // https://developer.wordpress.org/reference/functions/add_submenu_page/
        $page_genera_setting = add_submenu_page('themes.php',  __('Gradient Option','lang_AkanaT_option'),  __('Gradient Option','lang_AkanaT_option'),   'edit_theme_options',   'theme-gradient-admin',   'theme_page_fun');
        
          
        //request file style and file script  | richiedi i file style e script sotto richiamati dalla funzione
        add_action('admin_print_styles-'.$page_genera_setting, 'theme_page_admin_styles');  //funzione creata sopra
        add_action('admin_print_scripts-'.$page_genera_setting,'theme_page_admin_scripts'); //funzione creata sopra
        
 
    }
    add_action('admin_menu', 'my_theme_page_setting_creator');
    //------------------------------------------------------------------ 
    
    
  
    
    
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''



//0.0 HOW DISPLAY OPTION PAGE THEMPLATE 
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
function theme_page_fun() {
    global $THEME_page_name_url;//created in theme_page_structure.php   
    global $pagenow;//for page tab
    global $THEME_page_default_tab;//created in theme_page_structure.php 
    global $THEME_my_theme;    
    global $LIST_SectionTheme, $LIST_SectionTheme_functioTAB;
    global $TGetOption_ajaxscreen;
    
  

//  TEMPLATE FOR PAGE OPTION ?>
<div class="wrap">  
    <!-- TITLE PAGE -->
    <div class="title-page">
        <div class=" icon-general-themepage"></div> 
        <div class="titletheme-text">Gradient Generetor Simply</div>   <!-- // eg $THEME_my_theme->get( 'Name')  //http://codex.wordpress.org/Function_Reference/wp_get_theme -->
        <span>for WordPress theme and plugin</span>
    </div>


<?php  

    //To properly save the options set in the gradient, you must create an identifier for the options for a single group.
    $STheme = 'this_theme_hook_settings'; //Full name of the options group. Then the variable inside contains all theme options.
    $VTheme = 'variabile_theme_thistheme'; //Variable name that retrieves the internal group of theme options
    $id_opt_grad = 'graphtemplate_header_bgstyle'; //Single name option to be saved in the options group for all gradient elements. (Each element adds a different identifier to the name)
    
    echo '<div id="content-box-page" >';
        color_gradient($id_opt_grad,$VTheme,$STheme); 
    echo '</div>'; 

?><!-- SCRIPT OPTION -->
    <script type="text/javascript">
    jQuery(document).ready(function($){ 
          
          
        //WP COLOR PIKER (Colour picker)-----------------------------
        //''''''''''''''''''''''''''''''''''''''''''''
       Color_Piker_setting('.ColorPickerInput');//normal PIKER
       Color_Piker_setting('.ColorPickerInputNOtext','deactive'); //no text PIKER 
        //''''''''''''''''''''''''''''''''''''''''''''
    
    
        
        //SPECIAL NUMBER INPUT 
        //''''''''''''''''''''''''''''''''''''''''''''
        Spinner_inputnumber('.input-number-spinner','.input-number-plus','.input-number-minus');
        //''''''''''''''''''''''''''''''''''''''''''''
     
           //CHANGE CLASS RADIO INPUT ON CLICK
        //''''''''''''''''''''''''''''''''''''''''''''
        function RadiochangeDiv(Classbox_radio) {
            jQuery(Classbox_radio +' label').click(function(){
                jQuery(this).parent(Classbox_radio).find('label').removeClass('borderful');
                jQuery(this).addClass('borderful');
            });
        }
        //EG ON PAGE:  RadiochangeDiv('.box-radio');
        // DIV STYLE
        /*	<div id="bgstyle_grad_repeat" class="box-radio">
                <label id="repeat" class="layouts text-botton bgstyle_grad_repeat borderful" >
                <input value="repeat"  name="hook_settings[graphtemplate]" type="radio">Ripeti</label>
            <label id="no-repeat" class="layouts text-botton bgstyle_grad_repeat   checkedClass" >
            <input checked="checked" value="no-repeat" name="hook_settings[graphtemplate]" type="radio">No repeat</label>
            </div>
        */

        RadiochangeDiv('.box-radio');
    //''''''''''''''''''''''''''''''''''''''''''''
     	
	
        
    });
    </script>



   




<?php } // theme_page_fun()
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      

?>
