
//6.1 Round Slider --------------------------
//https://github.com/soundar24/roundSlider
/*  1 ID_Box_Roundslider    [ '#slider' | '.slider']            => ID o Classe del box che andrà a contenere lo slider rotondo
 *  2 ID_ExsternalInput     [ '#inputoption' | '.inputoption']  => ID o Classe del input dell'opzione che andrà ad essere salvata nel DB
 *  3 StartValue            [90 | $option ]                     => Valore iniziale con cui si presenterà lo slider. si consiglia di mettere l'opzione salvata
 */
//                              1               2               3     
function Round_Slider(ID_Box_Roundslider,ID_ExsternalInput,StartValue){
    jQuery(ID_Box_Roundslider).roundSlider({ // ISTRUZIONI ->  http://roundsliderui.com/document.html#value
        min:    0,
        max:    364,
        step:   1,                          // Decides the number of steps or value should take while we move the handle.
        value:  StartValue,                 //For default and min-range slider the property allows a single value (ex: value - 10).
        radius: 50,                         //The radius property indicates the radius of the slider's circle. The height and width of the control considered as (2 * radius).
        width:  12,                          //larghezza barra
        handleSize: "+8",                   //dimensione cursore rispetto alla barra
        handleShape: "dot",                 // CURSORE style The handleShape property mentions the shape of the handle. 
        // startAngle: 0,
        // endAngle: "+360",
        // animation: true,
        // showTooltip: true,
        // editableTooltip: true,
        // readOnly: false,
        // disabled: false,
        // keyboardAction: true,
        // mouseScrollAction: false,
        sliderType: "min-range",
        circleShape: "full",                // [full | half-top | altri] style lunghezza slider 
        // lineCap: "square",

        // events -------
        // beforeCreate: null,
        // create: null,
        // start: null,
        drag:   function(e) { Round_Slider_change_inputOption(e,ID_ExsternalInput); }, //'Round_Slider_change_inputOption',       //quando muovi il cursore
        change: function(e) { Round_Slider_change_inputOption(e,ID_ExsternalInput); }, //'Round_Slider_change_inputOption',       //quando cambia input
        stop:   function(e) { Round_Slider_change_inputOption(e,ID_ExsternalInput); }, //'Round_Slider_change_inputOption',       //quando smetti di girare il cursore
        //tooltipFormat: "changeTooltip",   //chiama una funzione che con il return dice cosa visualizzare dopo il numero (esempio kilometri)
    });

}
// add value on input -> roundSlider | IMPORTANTE che stia fuori dal  jQuery(document).ready
function Round_Slider_change_inputOption(e,ID_ExsternalInput) {
    var valuefinal = e.value; //numero dello slider
    jQuery(ID_ExsternalInput).val(valuefinal);
    jQuery(ID_ExsternalInput).trigger("change");
    
    // console.log('avvioR__'+ID_ExsternalInput);
    // console.log('valuefinal__'+valuefinal);
    
}
//EG Round_Slider('#slider','#inputoption', $OptionStart,'slider');
//-------------------------------------------------------------------

