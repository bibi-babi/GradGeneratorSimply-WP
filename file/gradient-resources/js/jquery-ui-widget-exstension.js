// COME RICHIAMARE QUESTO FILE:
// CUSTOM WIDGET JQUERY UI | funzioni di personalizzazione dei widget UI. Fondamentale, nel richiamo mettere array il nome del jquery che serve es: jquery-ui-slider che chiede: ui.slider
// wp_enqueue_script('jquery-ui-widget-exstension', get_template_directory_uri().'/admin/js-admin/jquery-ui-widget-exstension.js',array( 'jquery', 'jquery-ui-core','jquery-ui-slider' ),  null, false );   wp_enqueue_script('jquery-ui-widget-exstension.js');
// ----------------------------------------------------------


// https://learn.jquery.com/jquery-ui/widget-factory/how-to-use-the-widget-factory/                 
// https://msdn.microsoft.com/en-us/library/hh404085.aspx
// ESTENDERE UN WIDGET -> https://learn.jquery.com/jquery-ui/widget-factory/extending-widgets/

/*
 * 1.0 EXTENDING UI SLIDER 
 * 
 */




// 1.0 EXTENDING UI SLIDER 
//'''''''''''''''''''''''''
(function($) {
    $.widget('my-namespace.multiElementSlider', $.ui.slider, {
        // definition of the widget goes here
            addValue: function( val ) {     
                //You would need to add code to test that it's not in the list      
                this.options.values.push( parseInt(val, 10) );
                this._refresh(); 
            },
                
            removeValue: function( ) {
                this.options.values.pop( );
                this._refresh();
            }
    }); 
}(jQuery));
// Contained in startup.widget.js
//$('span[data-tag]').multiElementSlider();

//'''''''''''''''''''''