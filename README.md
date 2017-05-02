# GradGeneratorSimplyWP 
Wordpress (backend) CSS gradient generator with Jquery.

<br/>

> Gradient Generator Simply for Wordpress wants to be a tool for all webmasters who want to integrate into their themes and plugins a CSS Gradient Generator without having to use third-party tools that implement jQuery too complex.

<img  src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/example4.jpg" alt="" width="100%" height="auto" />
<img  src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/example3.jpg" alt="" width="100%" height="auto" />
<img src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/example-color-get.jpg" alt="" width="100%" height="auto" />

<br/><br/><br/>


# FUNCTION ONLY ON BACK-END

The code is designed for the **back-end**  of wordpress.
The front-end version is not usable because of the structural difference between jquery wp-color-piker and his older brother Iris.
Wp-color-piker is not loaded in front-end version.



<br/>
<br/>

# External JS and CSS used

## Standard:

- <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">Jquery</a>  (Loaded with wordpress)
- <a href="https://jqueryui.com/" target="_blank" rel="noopener noreferrer">Jquery-UI</a>  (Loaded with wordpress)


<a href="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/jquery.jpg"><img class="alignnone size-medium wp-image-31" src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/jquery-300x121.jpg" alt="" width="300" height="121" /></a>

## Made by other developers:

- <a href="http://github.com/23r9i0/wp-color-picker-alpha" target="_blank" rel="noopener noreferrer">Wp-color-picker-alpha</a>
- <a href="https://github.com/soundar24/roundSlider" target="_blank" rel="noopener noreferrer">RoundSlider</a>

<a href="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/wp-color-piker-alpha.jpg"><img class="size-medium wp-image-28 alignleft" src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/wp-color-piker-alpha-300x201.jpg" alt="" width="300" height="201" /></a><a href="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/roundslider.jpg"><img class="size-full wp-image-29 alignleft" src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/roundslider.jpg" alt="" width="233" height="194" /></a>

## CSS Fonts used:
- <a href="http://fontawesome.io/" target="_blank" rel="noopener noreferrer">Awesome Font</a>
These fonts can be easily replaced by the official wordpress word font because they just show for the + -.


<a href="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/fontawesome.jpg"><img class="alignnone size-medium wp-image-30" src="http://wp-gradgeneratorsimply-example.barbaralerici.net/wp-content/uploads/2017/05/fontawesome-300x114.jpg" alt="" width="300" height="114" /></a>

# Installation

> I remember creating a twentyseventeen child theme to show you how the gradient model works. You can take advantage of the child theme to see how to dispose of the content

### Add on WP admin function  JS and CSS:

```
function theme_page_admin_styles() { }
add_action( 'admin_enqueue_scripts', 'theme_page_admin_styles' );
```

- **jquery, jquery-uI (with wordpress)** [JQuery UI needed for the slider-UI]
- **icon-style-font-awesome (css)** [To display the + -]
- **roundslider (css, js)** [To have the rounded slider to set the gradient angles]
- **wp-color-picker-alpha (js)** [Adds to the wordpress color-picker the selector for semitransparent colors.]
- **jquery-ui-widget-exstension (js)** [Extension of some commands for the ui-slider] 
- **RoundSlider-option (js)** [Customization commands for RoundSlider]
- **wp-color-piker-option (js)** [Customization commands for wp-color-piker]
- **general-text (css)**
- **graphic-effects (js)** [Graphic effects: Color change for input type radio selector. And numeric change for input type numbers, correctly using the max, min, input step conditions]
- **GradGeneratorSimply (js,css)** [Functions that work to select css gradient. Including previewing instant field changes and loading examples.]



```
function theme_page_admin_styles() {

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
        else { wp_enqueue_script('jquery-ui-core');         //UI Jquery                 | Dependencies for -&gt; Iris 
               wp_enqueue_script('jquery-ui-accordion');    //UI Jquery Accordion       
               wp_enqueue_script('jquery-ui-slider');       //UI Jquery slider          | Dependencies for -&gt; Iris
               wp_enqueue_script('jquery-ui-tooltip');      //UI Jquery  tooltip        
               wp_enqueue_script('jquery-ui-resizable');    //UI Jquery resize box    
               
               wp_enqueue_script('jquery-effects-core');    //Slider Bar (class option -&gt; add class, remove, toogle)
        }  
        //  -----------------------------------------------------------------------

        //CUSTOM WIDGET JQUERY UI | funzioni di personalizzazione dei widget UI. Fondamentale, nel richiamo mettere array il nome del jquery che serve es: jquery-ui-slider che chiede: ui.slider
        wp_enqueue_script('jquery-ui-widget-exstension',get_stylesheet_directory_uri().'/gradient-resources/js/jquery-ui-widget-exstension.min.js',array( 'jquery', 'jquery-ui-core','jquery-ui-slider' ),'1.0', false );   
        //----------------------------------------------------------
 
 
 
        //UI COLOR PIKER  ------------------
        // Dependencies -&gt;  jQuery 1.7  +  ()'jquery-ui-draggable', 'jquery-ui-slider', 'jquery-touch-punch') (jQuery UI core, widget, and mouse components. )
        if (       !wp_script_is('iris',$list='registered') ){
                    wp_enqueue_script( 'wp-color-picker' ); wp_enqueue_style( 'wp-color-picker' ); 
        } else if (!wp_script_is('wp-color-picker',$list='registered') ){
                    wp_enqueue_script('farbtastic'); wp_enqueue_style( 'farbtastic' ); 
        } else {    //Dependencies -&gt; Iris relies on jQuery 1.7 and up, and the draggable and slider jQuery UI components. (Those then presume jQuery UI core, widget, and mouse components. 
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
       

}
add_action( 'admin_enqueue_scripts', 'theme_page_admin_styles' );
```



## Add html code (converted on php function)
The html content is so complex and long, that the various parts have been converted to php functions to call with specific options.

The php functions you find in the <a href="https://github.com/bibi-babi/GradGeneratorSimply-WP/blob/master/file/gradient-resources/gradient-function.php" target="_blank" rel="noopener noreferrer">**gradient-function.php**</a> file, and NEED you upload on WP with request in page functions.php:

```
require_once( get_stylesheet_directory() . '/admin/theme_page_structure.php' ); 
```

The page have:
- **[tooltip_content]** a function to call tooltip  with the icon [?]. It can be simply eliminated if you want to use this icon.
- **[color_pikert]** The second function invokes the input of the piker-color; You can choose to use a piker with transparency (necessary in this case)or not, and  a piker with or without text in closed set.
- **[input_number]** The third function  is used to invokes a numeric input. This can be a simple input or you can use the jquery input buttons for + and -.
- **[radio_checkbox]** The fourth function invokes a selection radio input.
- **[color_gradient]** Finally, the fifth function  processes the html of the gradient and uses the other functions to recall the various internal elements.

> I remember that gradient values fields are associated with a variable so that they can be saved and called wordpress options


# Call up the gradient generator in your admin page

Now that we've uploaded the js-css files and loaded the php functions into an additional file, we can load html and js content to make it appear on a page of our choice.
In the child theme example, I recreated a simple page in the theme admin menu. You will have to upload this content to the location where the gradient generator will appear.

```
//To properly save the options set in the gradient, you must create an identifier for the options for a single group.
    $STheme = 'this_theme_hook_settings'; //Full name of the options group. Then the variable inside contains all theme options.
    $VTheme = 'variabile_theme_thistheme'; //Variable name that retrieves the internal group of theme options
    $id_opt_grad = 'graphtemplate_header_bgstyle'; //Single name option to be saved in the options group for all gradient elements. (Each element adds a different identifier to the name)
    
    echo '&lt;div id="content-box-page" &gt;';
        color_gradient($id_opt_grad,$VTheme,$STheme); 
    echo '&lt;/div&gt;'; 

?&gt;&lt;!-- SCRIPT OPTION --&gt;
    &lt;script type="text/javascript"&gt;
    jQuery(document).ready(function($){ 
          
          
        //WP COLOR PIKER (Colour picker)-----------------------------
        //''''''''''''''''''''''''''''''''''''''''''''
       Color_Piker_setting('.ColorPickerInput');//normal PIKER
        //''''''''''''''''''''''''''''''''''''''''''''
    
    
        
        //SPECIAL NUMBER INPUT 
        //''''''''''''''''''''''''''''''''''''''''''''
        Spinner_inputnumber('.input-number-spinner','.input-number-plus','.input-number-minus');
        //''''''''''''''''''''''''''''''''''''''''''''
     
          
    });
    &lt;/script&gt;

```

As you can see from the example, only a php function is loaded that contains all the gradient code; With 3 associated variables.
These variables are needed to properly recall the theme options and you can enter the value that suits you most.

Remember that the individual options that make up the gradient commands will always start with the value "**$ id_opt_grad**", followed by a _name that identifies the single input.

As for the script, you need to recall the custom function for the piker color and the one for the numeric input in jquery. All other jquerys are called in code through php functions

&nbsp;
# Edit graphics settings of the GradGeneratorSimply.js plugin
&nbsp;

The Gradient js plugin has been structured to change options:
The plugin is called in the "**gradient-function.php**" file, to the "**color_gradient**" function.
As you can see from the examples, it is invoked with the simple command line:

```
$('.ggs-gradient-content')GradGeneratorSimply();
```
But the structure is much more complex; Here the structure with the default fields:

```
$('.ggs-gradient-content')GradGeneratorSimply({


        previewID       : '.ggs-gradient-preview',
 	sliderID 	: '.ggs-slider-multielement',
        sliderID_circle	: '.ggs-slidercircle-edg',
        box_show_linear : '.ggs-grad-linear-comand',
        box_show_radial : '.ggs-grad-radial-comand',
        box_show_ellipse: '.box-graphtemplate_header_bgstyle_grad_radial_size_ellipse',
        
        //content preview size
       	box_preview		:'.ggs-gradient-preview-box',
        box_preview_width	:'100%',
	box_preview_height	:'150px',
        
        //icon color + - class
        icon_plus   	: '.ggs-icon-plus',
        icon_minus  	: '.ggs-icon-minus',
        
        //input condtion
        nColorID    : '#graphtemplate_header_bgstyle_grad_color_num', //id-class input of number of color (input hidden)
        colorsID    : '#graphtemplate_header_bgstyle_grad_color',
        positionID  : '#graphtemplate_header_bgstyle_grad_color_pos',
        
        //input value ID
        linear_edg  : '#graphtemplate_header_bgstyle_grad_linear_edg',
        r_circle    : '#graphtemplate_header_bgstyle_grad_radial_size_circle',
        r_ellipse   : '#graphtemplate_header_bgstyle_grad_radial_size_ellipse',
        r_horiz     : '#graphtemplate_header_bgstyle_grad_radial_pos_horiz',
        r_vert      : '#graphtemplate_header_bgstyle_grad_radial_pos_vert',
       
        //radio button
        g_rep       : '#graphtemplate_header_bgstyle_grad_repeat #repeat',
        g_norep     : '#graphtemplate_header_bgstyle_grad_repeat #no-repeat',
        g_linear    : '#graphtemplate_header_bgstyle_grad_type #linear',
        g_radial    : '#graphtemplate_header_bgstyle_grad_type #radial',
        g_circle    : '#graphtemplate_header_bgstyle_grad_shape #circle',
        g_ellipse   : '#graphtemplate_header_bgstyle_grad_shape #ellipse',
	//option
	slider_min 	: 0, //sliderbar range value min
	slider_max 	: 100, //sliderbar range value max
	slider_step 	: 1,
	min_color	: 2, //number of color min to use (2)
	max_color  	: 10, //number of color max to use 
		
	//exemple value
	example_cont_class:   '.ggs-gradient-exemple-boxs',
	example_box_width: 	  '80px',
	example_box_height:   '40px',
		
	example_multioption: {     // OPTION FOR EACH EXAMPLE
		exampleval_1: {	numcolor: 			'2',
				colorvaluearray : 	['rgb(23, 183, 237)','rgb(9, 106, 191)'],
				positionvaluearray: 	[0,100],
				repeat_action:		'not-repeat', //repeat
				linear_radial: 		'linear', //radial
				linear_direction:   	'298',
				circle_ellipse:		'circle',// ellipse //Irrelevant
		    		size_circle:		'20', 				//Irrelevant
				size_ellipse: 		'20',//Irrelevant
				size_horiz:		'20',//Irrelevant
				size_vert:		'20',//Irrelevant
				},
		exampleval_2: {	numcolor: 		'2',
				colorvaluearray : 	['rgb(123, 224, 22)','rgb(4, 176, 219)'],
				positionvaluearray: 	[0,100],
				repeat_action:		'not-repeat', //repeat
				linear_radial: 		'radial', //radial
				linear_direction:   	'0',					//Irrelevant
				circle_ellipse:		'circle',// ellipse
		    		size_circle:		'700',
				size_ellipse: 		'700',
				size_horiz:		'0',
				size_vert:		'50',
				},
		exampleval_3: {	numcolor: 		'4',
				colorvaluearray : 	['rgb(197, 227, 239)','rgb(75, 173, 210)','rgb(39, 143, 186)','rgb(142, 212, 241)'],
				positionvaluearray: 	[0,50,51,100],
				repeat_action:		'repeat', 
				linear_radial: 		'linear', 
				linear_direction:   	'270',
				circle_ellipse:		'circle',	//Irrelevant
		    		size_circle:		'20',		//Irrelevant
				size_ellipse: 		'20',		//Irrelevant
				size_horiz:		'50',		//Irrelevant
				size_vert:		'50',		//Irrelevant
				},
		exampleval_4: {	numcolor: 		'3',
				colorvaluearray : 	['rgb(247, 159, 212)','rgb(255, 255, 255)','rgb(247, 159, 212)'],
				positionvaluearray: 	[0,70,100],
				repeat_action:		'not-repeat', 
				linear_radial: 		'radial', 
				linear_direction:   	'0',		//Irrelevant
				circle_ellipse:		'ellipse',	
		    		size_circle:		'600',		
				size_ellipse: 		'150',		
				size_horiz:		'28',		
				size_vert:		'-12',		
				},					
			
           
        },
		
		
});

```
