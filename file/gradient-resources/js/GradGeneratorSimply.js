/*!
 * GradGeneretorSimply v1.1 | (c) 2017-2017
 * MIT license | http://licence.html
 */

// LOAD PLUGIN:  
/*
 	$('.ggs-gradient-content').GradGeneratorSimply({
	   
	   	previewID       : '.ggs-gradient-preview',
 		sliderID 		: '.ggs-slider-multielement',
        sliderID_circle	: '.ggs-slidercircle-edg',
        box_show_linear : '.ggs-grad-linear-comand',
        box_show_radial : '.ggs-grad-radial-comand',
        box_show_ellipse: '.box-graphtemplate_header_bgstyle_grad_radial_size_ellipse',
        
        //content preview size
       	box_preview		 	:'.ggs-gradient-preview-box',
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
		slider_step : 1,
		min_color	: 2, //number of color min to use (2)
		max_color  	: 10, //number of color max to use 
		
		//exemple value
		example_cont_class:   '.ggs-gradient-exemple-boxs',
		example_box_width: 	  '80px',
		example_box_height:   '40px',
		
		example_multioption: {     // OPTION FOR EACH EXAMPLE
					exampleval_1: {		numcolor: 			'2',
										colorvaluearray : 	['rgb(23, 183, 237)','rgb(9, 106, 191)'],
										positionvaluearray: [0,100],
										repeat_action:		'not-repeat', //repeat
										linear_radial: 		'linear', //radial
										linear_direction:   '298',
										circle_ellipse:		'circle',// ellipse //Irrelevant
		    							size_circle:		'20', 				//Irrelevant
										size_ellipse: 		'20',//Irrelevant
										size_horiz:			'20',//Irrelevant
										size_vert:			'20',//Irrelevant
					},
					exampleval_2: {		numcolor: 			'2',
										colorvaluearray : 	['rgb(123, 224, 22)','rgb(4, 176, 219)'],
										positionvaluearray: [0,100],
										repeat_action:		'not-repeat', //repeat
										linear_radial: 		'radial', //radial
										linear_direction:   '0',					//Irrelevant
										circle_ellipse:		'circle',// ellipse
		    							size_circle:		'700',
										size_ellipse: 		'700',
										size_horiz:			'0',
										size_vert:			'50',
					},
					exampleval_3: {		numcolor: 			'4',
										colorvaluearray : 	['rgb(197, 227, 239)','rgb(75, 173, 210)','rgb(39, 143, 186)','rgb(142, 212, 241)'],
										positionvaluearray: [0,50,51,100],
										repeat_action:		'repeat', 
										linear_radial: 		'linear', 
										linear_direction:   '270',
										circle_ellipse:		'circle',	//Irrelevant
		    							size_circle:		'20',		//Irrelevant
										size_ellipse: 		'20',		//Irrelevant
										size_horiz:			'50',		//Irrelevant
										size_vert:			'50',		//Irrelevant
					},
					exampleval_4: {		numcolor: 			'3',
										colorvaluearray : 	['rgb(247, 159, 212)','rgb(255, 255, 255)','rgb(247, 159, 212)'],
										positionvaluearray: [0,70,100],
										repeat_action:		'not-repeat', 
										linear_radial: 		'radial', 
										linear_direction:   '0',		//Irrelevant
										circle_ellipse:		'ellipse',	
		    							size_circle:		'600',		
										size_ellipse: 		'150',		
										size_horiz:			'28',		
										size_vert:			'-12',		
					},					
			
           
        },
		
		
			
			
	});   
 */


//INFORMATION: 	https://learn.jquery.com/plugins/basic-plugin-creation/
//				https://learn.jquery.com/plugins/advanced-plugin-concepts/


jQuery.fn.GradGeneratorSimply = function(opti){
	opti = jQuery.extend({
 		//content
	 	previewID       : '.ggs-gradient-preview',
 		sliderID 		: '.ggs-slider-multielement',
        sliderID_circle	: '.ggs-slidercircle-edg',
        box_show_linear : '.ggs-grad-linear-comand',
        box_show_radial : '.ggs-grad-radial-comand',
        
        box_show_ellipse: '.box-graphtemplate_header_bgstyle_grad_radial_size_ellipse',
        
        
        //content preview size
       	box_preview		 	:'.ggs-gradient-preview-box',
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
		slider_step : 1,
		min_color	: 2, //number of color min to use (2)
		max_color  	: 10, //number of color max to use 
		
		//exemple value
		example_cont_class:   '.ggs-gradient-exemple-boxs',
		example_box_width: 	  '80px',
		example_box_height:   '40px',
		
		example_multioption: {     // OPTION FOR EACH EXAMPLE
					exampleval_1: {		numcolor: 			'2',
										colorvaluearray : 	['rgb(23, 183, 237)','rgb(9, 106, 191)'],
										positionvaluearray: [0,100],
										repeat_action:		'not-repeat', //repeat
										linear_radial: 		'linear', //radial
										linear_direction:   '298',
										circle_ellipse:		'circle',// ellipse //Irrelevant
		    							size_circle:		'20', 				//Irrelevant
										size_ellipse: 		'20',//Irrelevant
										size_horiz:			'20',//Irrelevant
										size_vert:			'20',//Irrelevant
					},
					exampleval_2: {		numcolor: 			'2',
										colorvaluearray : 	['rgb(123, 224, 22)','rgb(4, 176, 219)'],
										positionvaluearray: [0,100],
										repeat_action:		'not-repeat', //repeat
										linear_radial: 		'radial', //radial
										linear_direction:   '0',					//Irrelevant
										circle_ellipse:		'circle',// ellipse
		    							size_circle:		'700',
										size_ellipse: 		'700',
										size_horiz:			'0',
										size_vert:			'50',
					},
					exampleval_3: {		numcolor: 			'4',
										colorvaluearray : 	['rgb(197, 227, 239)','rgb(75, 173, 210)','rgb(39, 143, 186)','rgb(142, 212, 241)'],
										positionvaluearray: [0,50,51,100],
										repeat_action:		'repeat', 
										linear_radial: 		'linear', 
										linear_direction:   '270',
										circle_ellipse:		'circle',	//Irrelevant
		    							size_circle:		'20',		//Irrelevant
										size_ellipse: 		'20',		//Irrelevant
										size_horiz:			'50',		//Irrelevant
										size_vert:			'50',		//Irrelevant
					},
					exampleval_4: {		numcolor: 			'3',
										colorvaluearray : 	['rgb(247, 159, 212)','rgb(255, 255, 255)','rgb(247, 159, 212)'],
										positionvaluearray: [0,70,100],
										repeat_action:		'not-repeat', 
										linear_radial: 		'radial', 
										linear_direction:   '0',		//Irrelevant
										circle_ellipse:		'ellipse',	
		    							size_circle:		'600',		
										size_ellipse: 		'150',		
										size_horiz:			'28',		
										size_vert:			'-12',		
					},					
			
           
        },
		
		
  	}, opti);


 
      
//VARIABLE ................................
    //content
var 
    Box_show_ellipse= jQuery(opti.box_show_ellipse);
    
    
    //input value ID
    Linear_edg  = jQuery(opti.linear_edg);
    R_circle    = jQuery(opti.r_circle);
    R_ellipse   = jQuery(opti.r_ellipse);
    R_horiz     = jQuery(opti.r_horiz);
    R_vert      = jQuery(opti.r_vert);
   
    //radio button
    G_rep       	= jQuery(opti.g_rep);
    G_rep_input 	= jQuery(opti.g_rep+' input');
    G_norep     	= jQuery(opti.g_norep);
    G_norep_input	= jQuery(opti.g_norep+' input');
    G_linear    	= jQuery(opti.g_linear);
    G_linear_input 	= jQuery(opti.g_linear+' input');
    G_radial    	= jQuery(opti.g_radial);
    G_radial_input 	= jQuery(opti.g_radial+' input');
    G_circle    	= jQuery(opti.g_circle);
    G_circle_input 	= jQuery(opti.g_circle+' input');
    G_ellipse   	= jQuery(opti.g_ellipse);
    G_ellipse_input	= jQuery(opti.g_ellipse+' input');

    
//....................................

  
 
 
//°°°°°°°°°°°°°FUNCTION °°°°°°°°°°°°°°°°°°°°°
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


	//ERROR AUTO HEX SIMBOL # | ELIMINA ERRORE "cancelletto" auto generato del jquery iris-wpColorPicker.
    	// questa azione la fa già la funzione -> Color_Piker_setting, ma la farebbe dopo che il selettore pesca i valori del colore.
    function Grad_wpcolorpiker_error_autoHEX(ID_Opt_color){
	  	var N_Color_total = opti.max_color;
	    for(var i=1; i<N_Color_total+1; i++){ 
	        var Box_previw    = jQuery(ID_Opt_color+i).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
	            ValuePikerHex = jQuery(ID_Opt_color+i).val();
	            ValueNewRgba  = ValuePikerHex.replace('#rgba','rgba');  //necessario che replace sia richiamato come variabile se no non funge
	            ValueNewRgb   = ValuePikerHex.replace('#rgb' ,'rgb'); 
	            
	            if( jQuery(ID_Opt_color+i).val().indexOf('#rgba') >= 0  ){ 
	                jQuery(ID_Opt_color+i).val(ValueNewRgba);
	                Box_previw.css('background',ValueNewRgba);
	            }
	            if( jQuery(ID_Opt_color+i).val().indexOf('#rgb') >= 0  ){ 
	                jQuery(ID_Opt_color+i).val(ValueNewRgb);
	                Box_previw.css('background',ValueNewRgb);
	            }
		     	// console.log('IDOP_color_'+ID_Opt_color+i);
		     	// console.log('ValuePikerHex_'+jQuery(ID_Opt_color+i).val());
		     	// console.log('.indexOf_#rgba_'+jQuery(ID_Opt_color+i).val().indexOf('#rgba'));
		     	// console.log('.indexOf_#rgb_'+ jQuery(ID_Opt_color+i).val().indexOf('#rgb'));
		     	// console.log('____________________________');
	    } 
	   
	}//------------------------------------
 


	//6.2 Slider  MULTI selector --------------------------
	//http://stackoverflow.com/questions/19348528/jquery-ui-slider-how-to-add-values
	/*	1 SliderID  		[ '#slider' | '.slider'] 	=> ID o Classe del box che andrà a contenere lo slider
	 *	2 StartValue_Array	[ [5,10,40];		 ] 		=> Array di numeri per posizionare ogni elemento nel valore prestabilito. I numeri solitamente possono essere richiamati come variabili
	 *  3 Slider_min		[ 2] => numero minimo
	 *  4 Slider_max    	[100] => numero massimo
	 *  5 ID_input_position	['#id_singleinput'] 		=> variabile ID del campo input che deve variare quando cambia lo slider
	 */
	//        			      opti.sliderID | opti.slider_min | opti.slider_max | opti.slider_step
	function Slider_MultiSelector(SliderID,Slider_min,Slider_max,Slider_step,Array_IDColor,Array_pos,Array_Col,ID_input_color,ID_input_pos){
	
		var handlers 	 = Array_pos,//EG: [9,4,5]
			minMoveValue = 0, 		 //selettori minimi muovibili
		    maxMoveValue = Infinity; //selettorimassimi  muovibili
	
		//WIDGET personalizzato in: jquery-ui-widget-exstension USA GLI STESSI PARAMETRI DI SLIDER,
		// AGGIUNGI VALORE: addValue, removeValue  | inoltre  startizza con un set di valori che vanno tra un minimo e un massimo
		jQuery(SliderID).multiElementSlider({ 
		    range: 	false,
		    min: 	Number(Slider_min), //minimo slider
		    max: 	Number(Slider_max),	//max slider
		    values: handlers,
		    step: 	Number(Slider_step),
		    
		    
		    create: function( event, ui ) {
		    	//AGGIUNTO IO PER FAR APPARIRE I COLORI ->
		       	var handle = jQuery(SliderID+' .ui-slider-handle');  
		       	ArrayInputID_COL= [];
		       	for ( var i = 0;  i<Array_IDColor.length;   i++ ) { ArrayInputID_COL.push(Array_Col[i]); } //array dei colori da aggiungere
		       	handle.each(function(index) { jQuery(this).css('background',ArrayInputID_COL[index]); }); //per ogni span inserire il colore nell'ordine 0,1,2, ecc
				//---------------------------------------
		    },
		    
		    //!! QUESTO COODICE ATTIVO CREA I RANGED bloccati nei movimenti. io invece ho caricato range false così sono liberi
		    start: function(evt, ui) {          
		        // var allValues = jQuery(SliderID).multiElementSlider('option', 'values');
		        // maxMoveValue = allValues.reduce(function(prev, current){
		            // return (current > ui.value && current < prev) ? current : prev;
		        // }, Infinity);
// 		        
		        // minMoveValue = allValues.reduce(function(prev, current){
		            // return (current < ui.value && current > prev) ? current : prev;
		        // }, 0);
		       
		    },
		    slide: function (evt, ui) {
		    		//AGGIUNTO IO PER SALVARE I DATI NEL INPUT SPECIFICO -> 
					var ArrayInputID = [];
					for ( var i = 1;  i<Array_IDColor.length+1;   i++ ) {  ArrayInputID.push(ID_input_pos+i); } //1 e +1 necessario per la sequenza dei div che inizi da 1 e non da zero
					for ( var i = 0;  i<ui.values.length;   i++ ) { jQuery(ArrayInputID[i]).val(ui.values[i]);}
					//active preview change
					Grad_condRadio_changePreview (opti.previewID,opti.nColorID,opti.colorsID,opti.positionID,Linear_edg,R_circle,R_ellipse,R_horiz,R_vert,G_rep,G_norep,G_linear,G_radial,G_circle,G_ellipse);
					//----------------------------------------------
		        return ui.value > minMoveValue && ui.value < maxMoveValue;
		        
			        
		    } 
		});
		
		
		//AGGIUNGI TOGLI SELETTORI
		// $('#add').click(function(){	jQuery(SliderID).multiElementSlider('addValue', $('#newValue').val());	});
		// $('#remove').click(function(){ jQuery(SliderID).multiElementSlider('removeValue');	});
	    
	     
	    
	}
	//EG  Slider_MultiSelector(opti.sliderID,0,100,opti.slider_step,array_NActual,Array_Pos,Array_Col,ID_Opt_color,ID_Opt_pos);  
	//-------------------------------------------------------------------
	     

    //Quando cambia il NUMERO MAX di elementi -------------
	//						opti.sliderID
    function Grad_Ncolor_change(SliderID,ID_colorActive,ID_Opt_color,ID_Opt_pos){
        var handle_slider = jQuery(SliderID+' .ui-slider-handle');  
        if (jQuery(ID_colorActive).val() !=''){ var N_Color = Number (jQuery(ID_colorActive).val()); }else { var N_Color = opti.min_color; } 
        
        var array_NActual = [], array_NHide = [], Array_Col = [], Array_Pos= [];
        for(var i=1; i<N_Color+1; i++){     var Box_color  = jQuery(ID_Opt_color+i).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
                                            array_NActual.push([i]);
                                            jQuery('.box-id-grad'+i).css('display','inline-block');
                                            
                                            if( jQuery(ID_Opt_color+i).val() != ''){ Array_Col.push( jQuery(ID_Opt_color+i).val()); }
                                            else { Array_Col.push('#ffffff'); jQuery(ID_Opt_color+i).val('#ffffff');   Box_color.css('background','#ffffff'); }
                                            
                                            if( jQuery(ID_Opt_pos+i).val() != ''){ Array_Pos.push( jQuery(ID_Opt_pos+i).val() ); }
                                            else { Array_Pos.push('0'); jQuery(ID_Opt_pos+i).val('0'); }
        }  //[1,2,3,4,5,6]
        for(var i=N_Color+1; i<11; i++){   array_NHide.push([i]);  
                                                jQuery('.box-id-grad'+i).css('display','none');  
        }  //[7,8,9,10]
        
  
        
        //Slider ---------------
        Slider_MultiSelector(SliderID,opti.slider_min,opti.slider_max,opti.slider_step,array_NActual,Array_Pos,Array_Col,ID_Opt_color,ID_Opt_pos);  
       
        // console.log('N-color_'+N_Color);
        // console.log('array_NActua_'+array_NActual);
        // console.log('array_Nhide_'+array_NHide);
        // console.log('array_color_'+Array_Col);
        // console.log('array_pos_'+Array_Pos);
        // console.log('ID_Opt_color_'+ID_Opt_color);
        // console.log('ID_Opt_pos_'+ID_Opt_pos);
    }
    
    //BUTTON PLUS MINUS ACTIVATION | attiva disattiva pulsanti di aggiunta colore 
    function Grad_button_plus_minus(ID_colorActive,ID_iconplus,ID_iconminus){
        var N_Color     = Number(jQuery(ID_colorActive).val());
            Input_max   = jQuery(ID_colorActive).attr('max'); // 10
            Input_min   = jQuery(ID_colorActive).attr('min'); // 2
        if       (N_Color == Input_max){ jQuery(ID_iconplus).css('display','none');            jQuery(ID_iconminus).css('display','inline-block');
        } else if(N_Color == Input_min){ jQuery(ID_iconplus).css('display','inline-block');    jQuery(ID_iconminus).css('display','none');       
        } else {                         jQuery(ID_iconplus).css('display','inline-block');    jQuery(ID_iconminus).css('display','inline-block'); }       
    }
    
    //FUNCTION CHANGE MAX NUMBER MORE | cambia il numero di colori:aumenta -------------------
    //							opti.sliderID
    function Grad_maxN_color_plus (SliderID,ID_colorActive,ID_Opt_color,ID_Opt_pos,ID_iconplus,ID_iconminus){ 
        //QUANDO SCHIACCI + (max color)
        var N_Color     = Number (jQuery(ID_colorActive).val());
            Input_step  = Number (jQuery(ID_colorActive).attr('step'));
            Input_max   = jQuery(ID_colorActive).attr('max'); // 10
            newVal      = N_Color + Input_step;
        if (N_Color < Input_max ) {
            //CAMBIA NUMERO dopo aver cambiato gli indicatori
            jQuery(ID_colorActive).val(newVal);
            jQuery(ID_colorActive).trigger("change");    //!importante, che dica al div che è stato mutato    
            
            var New_Color = Number (jQuery(ID_colorActive).val());
            
            //attiva disattiva aggiungi o rimuovi colore
            Grad_button_plus_minus(ID_colorActive,ID_iconplus,ID_iconminus);
            
            // cambia i valori slider
            for(var i=New_Color; i<New_Color+1; i++){ 
                //add position
                if( jQuery(ID_Opt_pos+i).val() != ''){ addValue = jQuery(ID_Opt_pos+i).val();  }
                else { addValue = '0'; jQuery(ID_Opt_pos+i).val('0'); }
                // //add color ---------
                var Box_color  = jQuery(ID_Opt_color+i).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
                if( jQuery(ID_Opt_color+i).val() != ''){ addVal_color = jQuery(ID_Opt_color+i).val(); }
                else { addVal_color='#ffffff'; jQuery(ID_Opt_color+i).val('#ffffff');   Box_color.css('background','#ffffff'); }
            }
            jQuery(SliderID).multiElementSlider('addValue',  addValue );
            jQuery(SliderID+' .ui-slider-handle:last-child').css('background', addVal_color );    
        }          
        Grad_Ncolor_change(SliderID,ID_colorActive,ID_Opt_color,ID_Opt_pos);
    }
    
    //FUNCTION CHANGE MAX NUMBER LESS | cambia il numero di colori:diminuisce--------------------
    //							opti.sliderID
    function Grad_maxN_color_minus (SliderID,ID_colorActive,ID_Opt_color,ID_Opt_pos,ID_iconplus,ID_iconminus){ 
        //QUANDO SCHIACCI + (max color)
        var N_Color     = Number (jQuery(ID_colorActive).val());
            Input_step  = Number (jQuery(ID_colorActive).attr('step'));
            Input_min   = jQuery(ID_colorActive).attr('min'); // 2
            newVal      = N_Color - Input_step;
        if (N_Color > Input_min ) {
            //CAMBIA NUMERO dopo aver cambiato gli indicatori
            jQuery(ID_colorActive).val(newVal);
            jQuery(ID_colorActive).trigger("change");    //!importante, che dica al div che è stato mutato    
            
            //attiva disattiva aggiungi o rimuovi colore
            var New_Color = Number (jQuery(ID_colorActive).val());
            Grad_button_plus_minus(ID_colorActive,ID_iconplus,ID_iconminus);
              
            //rimuovi elemento slider
            jQuery(SliderID).multiElementSlider('removeValue');
            Grad_Ncolor_change(SliderID,ID_colorActive,ID_Opt_color,ID_Opt_pos);
        }
    }
    
    
    //FUNCTION COLOR CHANGE -------------------
    //						opti.sliderID
    function Grad_color_change (SliderID,ID_colorActive,ID_Opt_color){
        var handle_slider = jQuery(SliderID+' .ui-slider-handle');  
            N_Color       = Number (jQuery(ID_colorActive).val());
            array_NActual = [], Array_Col = [], ArrayInputID_COL= [];
        
        for(var i=1; i<N_Color+1; i++){ var Box_color  = jQuery(ID_Opt_color+i).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
                                        array_NActual.push([i]);
                                        if( jQuery(ID_Opt_color+i).val() != ''){ Array_Col.push( jQuery(ID_Opt_color+i).val()); }
                                        else { Array_Col.push('#ffffff'); jQuery(ID_Opt_color+i).val('#ffffff');   Box_color.css('background','#ffffff'); }
        }  //[1,2,3,4,5,6]
        for ( var i = 0;  i<Array_Col.length;   i++ ) { ArrayInputID_COL.push(Array_Col[i]); } //array dei colori da aggiungere
        handle_slider.each(function(index) { jQuery(this).css('background',ArrayInputID_COL[index]); }); //per ogni span inserire il colore nell'ordine 0,1,2, ecc
    }
    
    //FUNCTION POS CHANGE -------------------
//						opti.sliderID
    function Grad_pos_change (SliderID,ID_colorActive,ID_Opt_pos){
        var N_Color = Number (jQuery(ID_colorActive).val());
            ArrayInputID_POS= [];
        for(var i=1; i<N_Color+1; i++){ 
                if( jQuery(ID_Opt_pos+i).val() != ''){ArrayInputID_POS.push( jQuery(ID_Opt_pos+i).val() ); }
                else { ArrayInputID_POS.push('0'); jQuery(ID_Opt_pos+i).val('0'); }
        } 
        jQuery(SliderID).multiElementSlider('values', ArrayInputID_POS); 
    }

    
    //CHANGE PREVIEW  ----------------------
    				           // opti.previewID | opti.nColorID | opti.colorsID | opti.positionID
    function Grad_previw_css_box (PreviewID,NColorID,ColorsID,PositionID,G_EDG,G_size1,G_size2,G_hoz,G_vert,PR_Rep,PR_Type,PR_shape){
        var N_Color       = Number(jQuery(NColorID).val());
            Array_col_pos = '';
            SingleBg      = jQuery(ColorsID+'1').val(); //get first bg
            SecondBg      = jQuery(ColorsID+'2').val(); //get second bg
        
        if(PR_shape == 'circle'){ R_SizeA = G_size1; R_SizeB = G_size1; }else {  R_SizeA = G_size1; R_SizeB = G_size2;  }
        
   
		//riordina i colori a seconda dal campo pos , ovvero per la posizione (altrimenti la seqenza dei colori sarà pescata dalla lista normale dei colori)        	
		var AR_CP = []; 	       
		for(var i=1; i<N_Color+1; i++){       
			//var array = [[1, "grape", 42], [2, "fruit", 9]];
			var createarray =  [ i, jQuery(ColorsID+i).val() , jQuery(PositionID+i).val() ]; //creare prima il singolo array da implementare
			AR_CP.push( createarray );
		} 
		//funzione di riordinamento numerico   
		AR_CP.sort(function(a, b){	return a[2] - b[2];  }); //0 è il primo valore, 1 il secondo, 2 il terzo
		//crea la lista colori definitiva | il for qui non funge
		var TotalColor = AR_CP.length; //numero totale elementi, da usare come confronto per l'ultimo elemento (-1 perchè parte da 0)
		jQuery.each(AR_CP , function (index, value){ //index è la sequenza 0, 1, 2, 3 che è classica. non centra lo 0 che viene richiamato sotto)
		 	if (index == TotalColor -1  ) { //perchè partirebbe da 0, invece meglio parti da 1	
				Array_col_pos = Array_col_pos.toString() + (  jQuery(ColorsID+value[0]).val()+' '+jQuery(PositionID+value[0]).val()+'%' );
			} else {  //se non è l'ultimo mettere la virgola'
				Array_col_pos = Array_col_pos.toString() + (  jQuery(ColorsID+value[0]).val()+' '+jQuery(PositionID+value[0]).val()+'%, ' );
			}		
		});
        
        jQuery(PreviewID).css('background',SingleBg);  // old browser
        if(PR_Type == 'linear'){ //LINEAR ------------------------  
            if(PR_Rep == 'repeat' ){ 
                jQuery(PreviewID).css('background','repeating-linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                jQuery(PreviewID).css('background','-webkit-repeating-linear-gradient('+G_EDG+'deg, '+Array_col_pos+')');  /* Chrome10-25,Safari5.1-6 */
                jQuery(PreviewID).css('background','-moz-repeating-linear-gradient('+G_EDG+'deg, '+Array_col_pos+')'); // For Firefox 3.6 to 15 */
                jQuery(PreviewID).css('background','-o-repeating-linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* Opera 11.10-11.50 */
                jQuery(PreviewID).css('background','-ms-linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* IE10 preview */
            } else {
                jQuery(PreviewID).css('background','linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                jQuery(PreviewID).css('background','-webkit-linear-gradient('+G_EDG+'deg, '+Array_col_pos+')');  /* Chrome10-25,Safari5.1-6 */
                jQuery(PreviewID).css('background','-moz-linear-gradient('+G_EDG+'deg, '+Array_col_pos+')'); // For Firefox 3.6 to 15 */
                jQuery(PreviewID).css('background','-o-linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* Opera 11.10-11.50 */
                jQuery(PreviewID).css('background','-ms-linear-gradient('+G_EDG+'deg, '+Array_col_pos +')'); /* IE10 preview */
            }
        } else { // RADIAL----------------------------
            if(PR_Rep == 'repeat' ){ 
                jQuery(PreviewID).css('background','repeating-radial-gradient('+R_SizeA+'px '+R_SizeB+'px at '+G_hoz+'% '+G_vert+'%, '+Array_col_pos +')'); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                jQuery(PreviewID).css('background','-webkit-repeating-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); /* Chrome10-25,Safari5.1-6 */
                jQuery(PreviewID).css('background','-moz-repeating-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); // For Firefox 3.6 to 15 */
                jQuery(PreviewID).css('background','-o-repeating-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')');  /* Opera 11.10-11.50 */
                jQuery(PreviewID).css('background','-ms-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); /* IE10 preview */
            } else {
                jQuery(PreviewID).css('background','radial-gradient('+R_SizeA+'px '+R_SizeB+'px at '+G_hoz+'% '+G_vert+'%, '+Array_col_pos +')'); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                jQuery(PreviewID).css('background','-webkit-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')');  /* Chrome10-25,Safari5.1-6 */
                jQuery(PreviewID).css('background','-moz-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); // For Firefox 3.6 to 15 */
                jQuery(PreviewID).css('background','-o-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); /* Opera 11.10-11.50 */
                jQuery(PreviewID).css('background','-ms-radial-gradient('+G_hoz+'% '+G_vert+'%, '+R_SizeA+'px '+R_SizeB+'px, '+Array_col_pos+')'); /* IE10 preview */
            }                    
        }
        jQuery(PreviewID).css('filter','progid:DXImageTransform.Microsoft.gradient( startColorstr="'+SingleBg+'", endColorstr="'+SecondBg+'",GradientType=0 )');  /* IE6-8 fallback on horizontal gradient */
            
       
       
         // console.log('PREW-arra_colpos: '+Array_col_pos);
         // console.log('SingleBg: '+SingleBg +' - SecondBg: '+SecondBg); 
         // console.log('PR_Rep: '+PR_Rep);
         // console.log('PR_Type: '+PR_Type);
         // console.log('PR_shape: '+PR_shape);
         // console.log('G_EDG: '+G_EDG);
         // console.log('G_size1: '+G_size1);
         // console.log('G_size2: '+G_size2);
         // console.log('G_hoz: '+G_hoz);
         // console.log('G_vert: '+G_vert);
   
    }    
    
    //CONDTION RADIO CHECKED + CHANGE PREVIW
								//opti.previewID | opti.nColorID | opti.colorsID | opti.positionID
    function Grad_condRadio_changePreview (PreviewID,NColorID,ColorsID,PositionID,Linear_edg,R_circle,R_ellipse,R_horiz,R_vert,G_rep,G_norep,G_linear,G_radial,G_circle,G_ellipse){
        var G_EDG  = Linear_edg .val();
        //condition val ecist
        if( R_circle.val()  != ''){ var G_size1 =  R_circle.val(); } else { var G_size1 = '20'; R_circle.val('20');  }
        if( R_ellipse.val() != ''){ var G_size2 =  R_ellipse.val();} else { var G_size2 = '20'; R_ellipse.val('20'); }
        if( R_horiz.val()   != ''){ var G_hoz   =  R_horiz.val();  } else { var G_hoz   = '50'; R_horiz.val('50');   }
        if( R_vert.val()    != ''){ var G_vert  =  R_vert.val();   } else { var G_vert  = '50'; R_vert.val('50');    }
        
        
        //repeat not repeat radio check
        if      (   G_rep.hasClass("borderful")){           var PR_Rep = 'repeat';    }
        else if (   G_norep.hasClass("borderful")){         var PR_Rep = 'no-repeat'; }
        else    {   if(G_rep.hasClass("checkedClass")){     var PR_Rep = 'repeat';    } else {var PR_Rep = 'no-repeat';}        }
        // linear or radial
        if      (   G_linear.hasClass("borderful")){        var PR_Type= 'linear';    }
        else if (   G_radial.hasClass("borderful")){        var PR_Type= 'radial';    }
        else    {   if(G_linear.hasClass("checkedClass")){  var PR_Type= 'linear';    } else {var PR_Type= 'radial';   }        }
        // shape circle elipsse
        if      (   G_circle.hasClass("borderful")){        var PR_shape= 'circle';   }
        else if (   G_ellipse.hasClass("borderful")){       var PR_shape= 'ellipse';  }
        else    {   if(G_circle.hasClass("checkedClass")){  var PR_shape= 'circle';   } else {var PR_shape= 'ellipse'; }        }
        
        Grad_previw_css_box(PreviewID,NColorID,ColorsID,PositionID,G_EDG,G_size1,G_size2,G_hoz,G_vert,PR_Rep,PR_Type,PR_shape);
    }           
    
  
  
  
  
    // Variable Function ............................
	var Gradposchange_Callback = function() { Grad_pos_change(opti.sliderID,opti.nColorID,opti.positionID); 	};
	var GradcondRadiochangePreview_Callback = function() {
		Grad_condRadio_changePreview (opti.previewID,opti.nColorID,opti.colorsID,opti.positionID,Linear_edg,R_circle,R_ellipse,R_horiz,R_vert,G_rep,G_norep,G_linear,G_radial,G_circle,G_ellipse);
  	};
  
  
  
  
  
  	            
             
//°°°°° START PAGE  LOADING °°°°°°°°°°°°°°°°°°
//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°



	//Test ERROR wp color piker -> # HEX | testa se c'è un #rgba  e #rgb presente e lo toglie
	Grad_wpcolorpiker_error_autoHEX(opti.colorsID);


	//size preview box
	jQuery(opti.box_preview).css({'width': opti.box_preview_width,'height':opti.box_preview_height });
	
	// opti.box_preview		 	:'.ggs-gradient-preview-box',
        // opti.box_preview_width	:'100%',
		// opti.box_preview_height	:'150px',





    //number of color view 
    Grad_button_plus_minus(opti.nColorID,opti.icon_plus,opti.icon_minus);      // controll button plus-minus view | controlla se visualizzare i bottoni plus minus
    Grad_Ncolor_change(opti.sliderID,opti.nColorID,opti.colorsID,opti.positionID);  //control max color view | controlla quanti colori attivare
    //------------------------------------------------
    
    
    //SLIDER CIRCLE ----------------------------------
    if( Linear_edg.val()  != ''){ RoundSlider_StarVal =  Linear_edg.val(); } else { RoundSlider_StarVal = '90';  Linear_edg.val('90');  }
    Round_Slider(opti.sliderID_circle,Linear_edg,RoundSlider_StarVal);
    // ---------------------------------------------             
 
    //Preview load 
   	jQuery(document).ready( GradcondRadiochangePreview_Callback );

    //!importan SHOW HIDE BOX LINEAR OR RADIAL | visualizzare o no i box associati al tipo linear o radial
    if(G_linear.hasClass("checkedClass")){  jQuery(opti.box_show_linear).css('display','block');  jQuery(opti.box_show_radial).css('display','none');   }
    else {  								jQuery(opti.box_show_linear).css('display','none');   jQuery(opti.box_show_radial).css('display','block');  }    
    
    G_linear.click(function(){ jQuery(opti.box_show_linear).css('display','block');  jQuery(opti.box_show_radial).css('display','none');   });  
    G_radial.click(function(){ jQuery(opti.box_show_linear).css('display','none');   jQuery(opti.box_show_radial).css('display','block');  });  
    
    //show hide circle or eclipse value
    if(G_circle.hasClass("checkedClass")){ Box_show_ellipse.css('opacity','0.2');} else { Box_show_ellipse.css('opacity','1'); }    
    
    G_circle.click(function(){  Box_show_ellipse.css('opacity','0.2'); });  
    G_ellipse.click(function(){ Box_show_ellipse.css('opacity','1'); });  
    //----------------------

//------------------------------------------

        
            
    //BUTTON PLUS MINUS ACTIVATION | attiva disattiva pulsanti di aggiunta colore 
    var N_Color     = Number(jQuery(opti.nColorID).val());
        Input_max   = jQuery(opti.nColorID).attr('max'); // 10
        Input_min   = jQuery(opti.nColorID).attr('min'); // 2
    if       (N_Color == Input_max){ jQuery(opti.icon_plus).css('display','none');            jQuery(opti.icon_minus).css('display','inline-block');
    } else if(N_Color == Input_min){ jQuery(opti.icon_plus).css('display','inline-block');    jQuery(opti.icon_minus).css('display','none');       
    } else {                         jQuery(opti.icon_plus).css('display','inline-block');    jQuery(opti.icon_minus).css('display','inline-block'); }       
        
        
    //change MAX number color
    jQuery(opti.icon_plus).click(function(){  Grad_maxN_color_plus(opti.sliderID,opti.nColorID,opti.colorsID,opti.positionID,opti.icon_plus,opti.icon_minus);   }).click(GradcondRadiochangePreview_Callback);  
    jQuery(opti.icon_minus).click(function(){ Grad_maxN_color_minus(opti.sliderID,opti.nColorID,opti.colorsID,opti.positionID,opti.icon_plus,opti.icon_minus);  }).click(GradcondRadiochangePreview_Callback);  
    
             
    
    
    //Previw - CLIK RADIO -> repeat,notrepeat,linear,radial,circle,ellipse------------------------
    //Si ripete 2 volte il comando... non so perchè ! forse perchè sono nel prototipe!
    G_rep.add(G_norep).add(G_linear).add(G_radial).add(G_circle).add(G_ellipse).click( GradcondRadiochangePreview_Callback);             
    //---------------------------
    //Previw - CHANGE Input value radial -> val circle, val ellipse,val horz,val vert------------------------                  
    Linear_edg.add(R_circle).add(R_ellipse).add(R_horiz).add(R_vert).change(GradcondRadiochangePreview_Callback);
  	Linear_edg.add(R_circle).add(R_ellipse).add(R_horiz).add(R_vert).keyup(	GradcondRadiochangePreview_Callback);
    //---------------------------
    
    //change input position  AND change Previw -------------- 
    for(var i=1; i<opti.max_color+1; i++){ 
    	jQuery(opti.positionID+i).change(Gradposchange_Callback).change(GradcondRadiochangePreview_Callback );
    	jQuery(opti.positionID+i).keyup(Gradposchange_Callback).keyup(GradcondRadiochangePreview_Callback );
    } 
    //---------------------------

    //Input Color change  AND change Previw | per ogni colore attivo, controllare il cambio colore nello slider
    for(var i=1; i<opti.max_color+1; i++){   
	        jQuery(opti.colorsID+i).wpColorPicker({ // ISTRUZIONI COMANDI http://automattic.github.io/Iris/
	        change: function(event, ui) { Grad_color_change (opti.sliderID,opti.nColorID,opti.colorsID); 
	                                      Grad_condRadio_changePreview (opti.previewID,opti.nColorID,opti.colorsID,opti.positionID,Linear_edg,R_circle,R_ellipse,R_horiz,R_vert,G_rep,G_norep,G_linear,G_radial,G_circle,G_ellipse); 
	                                    } //quando cambia il colore fai qualcosa -> //EG: ui.color.toString()
	        });
    }
    //---------------------------
    
    
    
    
    

	//°°°°°°°EXAMPLE BUTTON ON CLICK °°°°°°°°°°°°°°°°
	//°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°


	//FUNCTION -----------------------------------------
	//--------------------------------------------------

	
	//CREATES BOX EXAMPLE and style css | Creates containers for each example you insert | crea i div che contengono gli esempi e la loro grafica css
	function Grad_condRadio_ExampleBox(){	
		//dimension box style
		
		jQuery(opti.example_cont_class).append( '<style>.ggs-gradient-exemple-el {width: '+opti.example_box_width+'; height: '+opti.example_box_height+'; } .ggs-gradient-exemple .exampleval_1 {margin-left: 0px;} </style>' );
		//------------------------------------------------
		
		//ADD DIV html and CSS example ------------------
		var ArrayStyle = [];
		
		//index -> 	exampleval_1, exampleval_2, ..... 
	   	//el -> ARRAY -> numcolor,colorvaluearray,positionvaluearray.
		jQuery.each(opti.example_multioption, function(index, el) { //Per ogni esempio in lista: 	index -> 	exampleval_1, exampleval_2, ..... 

			//STAMP DIV  on html
			jQuery(opti.example_cont_class).append( '<div class="ggs-gradient-exemple-el '+index+'"></div>' );// index eg  exampleval_1 
		


			//CSS CONDITION
			
			//list array  color + position 
			var Array_col_pos = [];
			 	TotalColor 	  = el['colorvaluearray'].length;
				
			jQuery.each(el['colorvaluearray'], function (index, value){ //index  è indice numerico della sequenza (parte da 0). value sono i colori. rgb(23, 183, 237)
			 	if (index == TotalColor -1  ) { //perchè partirebbe da 0, invece meglio parti da 1	
					 Array_col_pos = Array_col_pos.toString() + (  value+' '+el['positionvaluearray'][index]+'%' );
				} else {  //se non è l'ultimo mettere la virgola'
					Array_col_pos = Array_col_pos.toString() + (  value+' '+el['positionvaluearray'][index]+'%, ' );
				}		
			});
			//------------------------------
			
			//circle -ellips condition size redunce for  exemple box  -> WidhtBoxPrev :100 = el['size_circle'] : x -> x = 100* el['size_circle'] / WidhtBoxPrev
			var WidhtBoxPrev 	= jQuery(opti.box_preview).width();
				WidhtBoxExample	= jQuery('.ggs-gradient-exemple-el').width();
				SizeCircleEX 	= parseInt( el['size_circle']  * WidhtBoxExample / WidhtBoxPrev ); //el['size_circle'] : WidhtBoxPrev = x : opti.example_box_width   -> X = 700px *80px  /1090px
				SizeEllipseEX 	= parseInt( el['size_ellipse'] * WidhtBoxExample / WidhtBoxPrev );
			
			if(el['circle_ellipse'] == 'circle'){ var SizeRadial = SizeCircleEX+'px '+SizeCircleEX+'px'; }
			else {								  var SizeRadial = SizeCircleEX+'px '+SizeEllipseEX+'px'; }


			
			
			if(el['linear_radial'] == 'linear'){
				if(el['repeat_action'] == 'repeat' ){
					//linear- repeat
					cssBGname_standard 	= 'repeating-linear-gradient';
					cssBGname_webkit 	= '-webkit-repeating-linear-gradient';
					cssBGname_moz 		= '-moz-repeating-linear-gradient';
					cssBGname_o 		= '-o-repeating-linear-gradient';
					cssBGname_ms 		= '-ms-linear-gradient';
					direction_size_stan = el['linear_direction']+'deg';
					direction_size 		= el['linear_direction']+'deg';
				} else {
					//linear -not repeat
					cssBGname_standard 	= 'linear-gradient';
					cssBGname_webkit 	= '-webkit-linear-gradient';
					cssBGname_moz 		= '-moz-linear-gradient';
					cssBGname_o 		= '-o-linear-gradient';
					cssBGname_ms 		= '-ms-linear-gradient';
					direction_size_stan = el['linear_direction']+'deg';
					direction_size 		= el['linear_direction']+'deg';
				}
				
			} else { //radial
				if(el['repeat_action'] == 'repeat' ){
					//radial- repeat
					cssBGname_standard 	= 'repeating-radial-gradient';
					cssBGname_webkit 	= '-webkit-repeating-radial-gradient';
					cssBGname_moz 		= '-moz-repeating-radial-gradient';
					cssBGname_o 		= 'o-repeating-radial-gradient';
					cssBGname_ms 		= '-ms-radial-gradient';
					direction_size_stan	= SizeRadial+' at '+el['size_horiz']+'% '+el['size_vert']+'%';
					direction_size	 	= el['size_horiz']+'% '+el['size_vert']+'%, '+SizeRadial;
					
				} else {
					//radial -not repeat
					cssBGname_standard 	= 'radial-gradient';
					cssBGname_webkit 	= '-webkit-radial-gradient';
					cssBGname_moz 		= '-moz-radial-gradient';
					cssBGname_o 		= 'o-radial-gradient';
					cssBGname_ms 		= '-ms-radial-gradient';
					direction_size_stan	= SizeRadial+' at '+el['size_horiz']+'% '+el['size_vert']+'%';
					direction_size	 	= el['size_horiz']+'% '+el['size_vert']+'%, '+SizeRadial;
					
				}
			}
			//------------------------------------------------
			//Add to ARRAY CSS the condition for example
			ArrayStyle = ArrayStyle.toString() + ( '.ggs-gradient-exemple .'+index+'{'
													+'background: '+el['colorvaluearray'][0]+';'
													+'background: '+cssBGname_standard+'('+direction_size_stan+','+Array_col_pos+');'
													+'background: '+cssBGname_webkit+'('+direction_size+','+Array_col_pos+');'
													+'background: '+cssBGname_moz+'('+direction_size+','+Array_col_pos+');'
													+'background: '+cssBGname_o+'('+direction_size+','+Array_col_pos+');'
													+'background: '+cssBGname_ms+'('+direction_size+','+Array_col_pos+');'
													+'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="'+el['colorvaluearray'][0]+'", endColorstr="'+el['colorvaluearray'][1]+'",GradientType=0 );'
													+'}'
												 );
												   
		
		}); //jQuery.each(opti.example_multioption
		

		//add CSS
		jQuery(opti.example_cont_class).append( '<style>'+ArrayStyle+'</style>');
		
		
		
	} //Grad_condRadio_ExampleBox
	//-----------------------------------------------------------------


	//Prende le opzioni di default di ogni esempio e le inserisce nei valori di ogni campo
	function Grad_condRadio_ExampleActive (ValueList){
		var ColorValueArray = [],	PositionValueArray = [];

			NumColor 			= ValueList ['numcolor'];
			ColorValueArray 	= ValueList ['colorvaluearray'];
			PositionValueArray 	= ValueList ['positionvaluearray']; 
			Repeat_Action 	 	= ValueList ['repeat_action'];  //repeat , not-repeat
			Linear_Radial 	 	= ValueList ['linear_radial'];  //linear , radial
			Linear_direction    = ValueList ['linear_direction']; 
			Circle_Ellipse	    = ValueList ['circle_ellipse'];  //circle, ellipse
			Size_Circle			= ValueList ['size_circle'];
			Size_Ellipse		= ValueList ['size_ellipse'];
			Size_Horiz			= ValueList ['size_horiz'];
			Size_Vert			= ValueList ['size_vert'];
			

			// number of color on input HIDE  -> id="graphtemplate_header_bgstyle_grad_color_num"
			jQuery(opti.nColorID).val(NumColor);
			//---------------------------------------			


			//color end position value
	        for(var i=0; i<Number(NumColor); i++){ 
	        	//COLOR
	        	var Box_color  = jQuery(opti.colorsID+(i+1)).parent('.wp-picker-input-wrap').parent('.wp-picker-container').first().find('.wp-color-result span');
	            Box_color.css('background',ColorValueArray[i]); 
	        	jQuery(opti.colorsID+(i+1)).val(ColorValueArray[i]);
	       		//POSITION ADD
	           	jQuery(opti.positionID+(i+1)).val(PositionValueArray[i]);
	        } 
			//---------------------------------------

			//SLIDER CHANGE ELEMENT
			//aggiunge e toglie valori (aggiunge i valori del exempio)
			jQuery(opti.sliderID).multiElementSlider('option','values', PositionValueArray );
			//COLORE NEGLI SPAN SLIDER DISATTIVATO!!!!!!!!!! -> qui sente ancora il numero precedente degli span, e non quelli nuovi associati ai colori, spostata nel comando _> jQuery(opti.example_cont_class+' .'+index).click
			//jQuery(opti.sliderID+' .ui-slider-handle').each(function(index) { jQuery(this).css('background',ColorValueArray[index]); 
			//---------------------------------------

				        
			//repeating
			//repeat , not-repeat
			if(Repeat_Action 	== 'repeat'){ 	console.dir(G_rep_input);
												G_rep_input.prop("checked", true); 		G_rep.addClass('borderful'); 		G_norep.removeClass('borderful');				
			} else {							G_norep_input.prop("checked", true);	G_rep.removeClass('borderful');		G_norep.addClass('borderful');					
				 }
			if(Linear_Radial 	== 'linear'){ 	G_linear_input.prop("checked", true);	G_linear.addClass('borderful');		G_radial.removeClass('borderful');	
													jQuery(opti.box_show_linear).css('display','block'); 	jQuery(opti.box_show_radial).css('display','none'); 
			} else {							G_radial_input.prop("checked", true);	G_linear.removeClass('borderful');	G_radial.addClass('borderful');
													jQuery(opti.box_show_linear).css('display','none'); 	jQuery(opti.box_show_radial).css('display','block'); 
				   }
			
			
			//edg direction linear 
			Linear_edg.val(Linear_direction);
			Round_Slider(opti.sliderID_circle,Linear_edg,Linear_direction); //aziona il roundSlider per cambiare il valore


			//radial cirlce elips button radio
			if(Circle_Ellipse 	== 'circle'){ 	G_circle.prop("checked", true); 	G_circle.addClass('borderful'); 	G_ellipse.removeClass('borderful'); Box_show_ellipse.css('opacity','0.2');		} 
			else {								G_ellipse.prop("checked", true); 	G_circle.removeClass('borderful'); 	G_ellipse.addClass('borderful'); 	Box_show_ellipse.css('opacity','1');		}
			
			//radial value option
			R_circle.val(	Size_Circle);
			R_ellipse.val(	Size_Ellipse);
    		R_horiz.val(	Size_Horiz);
    		R_vert.val(		Size_Vert);
			//----------------------

        
	} // Grad_condRadio_ExampleActive
	//--------------------------------------------------

	
	
	//START PAGE ------------
	Grad_condRadio_ExampleBox();
	//----------------------------
	
   

   	
	//ACTION CLICK EXEMPLE NUMBER -----------------------------------------------
	//--------------------------------------------------
	   	//index -> 	exampleval_1, exampleval_2, ..... 
	   	//el -> ARRAY -> numcolor,colorvaluearray,positionvaluearray.
   	jQuery.each(opti.example_multioption, function(index, el) { //Per ogni esempio in lista: 	exampleval_1, exampleval_2,
		//ACTION CLICK EXEMPLE NUMBER ---
		jQuery(opti.example_cont_class+' .'+index).click(function(){  //click on div with class 	exampleval_1, exampleval_2, ecc
		 			Grad_condRadio_ExampleActive(el);	
					Grad_Ncolor_change(opti.sliderID,opti.nColorID,opti.colorsID,opti.positionID);  //control max color view | controlla quanti colori attivare
					Grad_button_plus_minus(opti.nColorID,opti.icon_plus,opti.icon_minus);      // controll button plus-minus view | controlla se visualizzare i bottoni plus minus
					//SLIDER CHANGE ELEMENT
					//aggiunge il colore in ogni span cerchio dello slider (non posso metterlo nella funzione _> Grad_condRadio_ExampleActive, perchè sente ancora i precedenti span che possono essere di numero inferiore rispetto ai colori!)
					jQuery(opti.sliderID+' .ui-slider-handle').each(function(index) { CList = el['colorvaluearray'];jQuery(this).css('background', CList[index]);  }); //per ogni span inserire il colore nell'ordine 0,1,2, e
			
		}).click(	Gradposchange_Callback,GradcondRadiochangePreview_Callback);
	});
   	//--------------------------------------------------

   	
   	
   	
   	//Come leggere gli object -------------------------------------------------
	// console.log("myObject is____ " + opti.example_multioption.toSource());
	// console.log("myObject is v2____ "+JSON.stringify(opti.example_multioption));
   	
   	
   	

}; // jQuery.fn.GradGeneratorSimply = function(opti)


    
  