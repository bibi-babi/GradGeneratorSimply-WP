
// 2.1 Change border for selecte inputs
function RadiochangeDiv (idName, className) {
	//jQuery('.'+className).removeClass( 'checkedClass' ); //disattivato perchè cosi vedi la vecchia selezione 
	jQuery('.'+className).removeClass( 'borderful' );
	jQuery('#'+idName).addClass( 'borderful' );
//return 0;    
}
//---------------------------------------------

    

//7.0 InputNumber_Spinner
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

//7.1  InputNumber_Spinner --------------------------
//ALTRI ESEMPI  http://stackoverflow.com/questions/37665060/plus-minus-max-value-input
//ALTRI ESEMPI  http://stackoverflow.com/questions/35363443/input-type-number-max-value-not-working  
/*	1 ID_Box_Roundslider  	[ '#slider' | '.slider'] 			=> ID o Classe del box che andrà a contenere lo slider rotondo
 * 	2 ID_ExsternalInput 	[ '#inputoption' | '.inputoption']  => ID o Classe del input dell'opzione che andrà ad essere salvata nel DB
 *	3 StartValue 			[90 | $option ] 					=> Valore iniziale con cui si presenterà lo slider. si consiglia di mettere l'opzione salvata
 */
//
function Spinner_inputnumber(Class_input,Class_plus,Class_minus){
	function CalcNumber_and_operator(event,operator,max_min){
	    var address_input   = jQuery(event.target).parent('label').first().find(Class_input);
	    var Input_step      = Number( address_input.attr('step')  );  //CONVERTIRE STRINGHE NUMERI: https://gabrieleromanato.com/2012/12/javascript-convertire-le-stringhe-in-numeri/   
	    var Orig_value      = Number( address_input.val()  ); 
	    
	    if      (operator == 'sum'){          var newVal = Orig_value + Input_step; }
	    else if (operator == 'subtraction'){  var newVal = Orig_value - Input_step; }
	    
	    if(max_min == 'max'){       
	   
	        var Input_max_min   = address_input.attr('max'); 
	        if(Input_max_min != ''){  //se esiste un max o un miimo e il campo non è vuoto
		        		if (newVal <= Input_max_min ) { address_input.val(newVal);			}      
		        		else{ 							address_input.val(Input_max_min);	}	
	        } else { 	address_input.val(newVal); }
	        address_input.trigger("change");	//!importante, che dica al div che è stato mutato  					 
	   
	    } else if (max_min == 'min'){ 
	        
	        var Input_max_min   = address_input.attr('min'); 
	        if(Input_max_min != ''){ //se esiste un max o un miimo e il campo non è vuoto
				        if (newVal >= Input_max_min ) { address_input.val(newVal);			}
				        else{							address_input.val(Input_max_min);	}
	        } else { 	address_input.val(newVal); }
	        address_input.trigger("change");	    				  
	    } 
	     
	     // console.log('maxmin_'+Input_max_min); 
	     // console.log('step_plus_'+Input_step); 
	     // console.log('originvalplus__'+Orig_value);
	     // console.log('newval.plus__'+ (Orig_value + Input_step));
	} 
jQuery(Class_plus).click(function(event){   CalcNumber_and_operator(event,'sum','max'); });
jQuery(Class_minus).click(function(event){  CalcNumber_and_operator(event,'subtraction','min'); });

} //EG Spinner_inputnumber('.input-number-spinner','.input-number-plus','.input-number-minus');
//-------------------------------------------------------------------
     
            
