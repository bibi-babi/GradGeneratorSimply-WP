// Color Piker
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//4.1 Color Piker setting ----------------------
/*	1 Class_PikerInput  [ '.ColorPickerInput' ] 			=> ID o Classe del input che dovrà diventare un selettore colore.
 * 	2 Text_status		[ '' | 'deactive']  				=> lasciare vuoto per default (testo), altrimenti mettere deactive
 *	3 StartValue 			[90 | $option ] 					=> Valore iniziale con cui si presenterà lo slider. si consiglia di mettere l'opzione salvata
 */
//
function Color_Piker_setting(Class_PikerInput,Text_status){
	

		//AGGUNTA UNA ESTENSIONE PER ALPHA -> //piker color alphta exsterna plugin || //https://github.com/23r9i0/wp-color-picker-alpha
		jQuery(Class_PikerInput).wpColorPicker({ // ISTRUZIONI COMANDI http://automattic.github.io/Iris/
	        color: true,        	// true - false - #bada55 |If Iris is attached to an input element, it will first try to pick up its value attribute. Otherwise, you can supply a color of any type that Color.js supports. (Hex, rgb, and hsl are good bets.)
	        mode: 'hsl',        	// 'hsl' ‘hsv’ | Iris can sport a variety of looks. It supports hsl and  modes depending on your needs.      
	        controls: {         	// You can change all 3 directions of it controls.
	            horiz: 's', 		// horizontal defaults to saturation
	            vert:  'l', 		// vertical defaults to lightness
	            strip: 'h' 			// right strip defaults to hue
	        },
	        // hide: true,         	// true(default) - false | hide the color picker by default
	        // border: true,       	// true(default) - false | draw a border around the collection of UI elements
	        // target: false,      	// a DOM element / jQuery selector that the element will be appended within. Only used when called on an input.
	        palettes: true,     	// false(default) - true | Set to true to display a row of common palette colors. Show a palette of basic colors beneath the square. | quadratini sotto colori princiapli
	                            	// Custom Palet: palettes: ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
	        width: 300,         	// the width of the collection of UI elements 
	       	// change: function(event, ui) { //ERRORE:: se gli attivo Il .trigger('change'); o simili non funziona più che cambia il colore nel box grafico
	       	// }, //quando cambia il colore fai qualcosa -> //EG: ui.color.toString()
		   
	   	});


    
        // Iris  PIKER------------------------------------
	    // jQuery('.ColorPickerInput').iris({ //http://automattic.github.io/Iris/
	        // color: true,        // true - false - #bada55 |If Iris is attached to an input element, it will first try to pick up its value attribute. Otherwise, you can supply a color of any type that Color.js supports. (Hex, rgb, and hsl are good bets.)
	        // mode: 'hsl',        //Iris can sport a variety of looks. It supports hsl and ‘hsv’ modes depending on your needs.      controls: {         //You can change all 3 directions of it controls.           horiz: 's', // horizontal defaults to saturation
	        // controls: {         //. You can change all 3 directions of it controls.
	            // horiz: 's', // horizontal defaults to saturation
	            // vert:  'l', // vertical defaults to lightness
	            // strip: 'h' // right strip defaults to hue
	        // },
	        // // hide: true,         // true(default) - false | hide the color picker by default
	        // // border: true,       //true(default) - false | draw a border around the collection of UI elements
	        // // target: false,      // a DOM element / jQuery selector that the element will be appended within. Only used when called on an input.
	        // palettes: true,     // false(default) - true | Set to true to display a row of common palette colors. Show a palette of basic colors beneath the square.
	                            // // Custom Palet: palettes: ['#125', '#459', '#78b', '#ab0', '#de3', '#f0f'],
	        // width: 300,         // the width of the collection of UI elements
	        // // change: function(event, ui) { //ERRORE:: se gli attivo Il .trigger('change'); o simili non funziona più che cambia il colore nel box grafico
	       	// // }, //quando cambia il colore fai qualcosa -> //EG: ui.color.toString()
    	// });
	
	
	//TEXT HIDE SHOW | Elimina il testo dal box colore che rimanga solo il quadratino colorato:
	var Box_content = jQuery(Class_PikerInput).parent('.wp-picker-input-wrap').parent('.wp-picker-container');
		Box_text 	= jQuery(Class_PikerInput).parent('.wp-picker-input-wrap').parent('.wp-picker-container').find('.wp-color-result');
		
	if (typeof Text_status === "undefined" || Text_status === null) {  Text_status = 'active';}
	if(Text_status == 'deactive'){ Box_text.attr('title',''); Box_text.attr('data-current',''); Box_content.addClass('wp-picker-container-notext');	}	
	
	// VISTO CHE NON POSSO FAR ATTIVARE IL CHANGE QUANDO CAMBIA IL COLORE->FACCIO QUANDO CLICCA SUL colore finale
	//Box_content.click(function(){ jQuery(Class_PikerInput).trigger('change'); });
	
	 
	//ERROR AUTO HEX SIMBOL # | ELIMINA ERRORE "cancelletto" auto generato del jquery iris-wpColorPicker. in automatico il jquery crea un #all'inzio se non è presente
	// ma con rgba non va bene. così al caricamento della pagina questo cerca il cancelletto e lo elimina.
   	jQuery(Class_PikerInput).each(function() {  
   		var attr_alpha 	  = jQuery(this).attr('data-alpha'); 
			Box_previw 	  = jQuery(this).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
			ValuePikerHex = jQuery(this).val();
			ValueNewRgba  = ValuePikerHex.replace('#rgba','rgba');  //necessario che replace sia richiamato come variabile se no non funge
			// console.log('alpha_'+jQuery(this).val() );	
		if (typeof attr_alpha !== typeof undefined && attr_alpha !== false) { //esiste attributo data-alpha, inserito dal jquery "piker color alphta"  https://github.com/23r9i0/wp-color-picker-alpha
			if(jQuery(this).val().indexOf('#rgba') >= 0  ){ 
				jQuery(this).val(ValueNewRgba);
				Box_previw.css('background',ValueNewRgba);
			}
			//console.log('val new_'+jQuery(this).val() );	
		}
	});
   	

}

// // add value on input -> roundSlider | IMPORTANTE che stia fuori dal  jQuery(document).ready
// function Color_Piker_changeInput(e,Class_PikerInput) {
    // // var valuefinal = e.value; //numero dello slider
    // // jQuery(ID_ExsternalInput).val(valuefinal);
    // //jQuery(Class_PikerInput).trigger("change");
    // jQuery(Class_PikerInput).trigger("change");
//     
    // console.log('avvioR__'+Class_PikerInput);
    // // console.log('valuefinal__'+valuefinal);
//     
// }
//EG Color_Piker_setting('.ColorPickerInput','');

//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
   