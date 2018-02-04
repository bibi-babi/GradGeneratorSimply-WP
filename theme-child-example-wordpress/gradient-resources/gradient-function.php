<?php

//2.0 TOOLTIP 
//''''''''''''''''''''''''''

/* 1_$text 
 * 2_$br
 * 3_$style
 * 4_$variable ['' | normal | onvariable] => se deve essere una varibabile impostare -> onvariable
 */
//                          1      2         3              4
function tooltip_content ($text, $br= '', $style = '', $variable = ''){
    if ($style != ''){ $stylecontent = 'style=" '.$style.' " '; } else {$stylecontent = '';}
    switch ($variable){ //normal  - onvariable
        case "normal": 
                     echo '<div class="tooltip-icon"  '.$stylecontent.'><div class="tooltip-popup"><small>'.$text.'</small></div></div>'.$br;
        break; 
        case "onvariable":  
            $onvariable = '<div class="tooltip-icon"  '.$stylecontent.'><div class="tooltip-popup"><small>'.$text.'</small></div></div>'.$br;
            return $onvariable;
        break; 
        default;
                    echo  '<div class="tooltip-icon"  '.$stylecontent.'><div class="tooltip-popup"><small>'.$text.'</small></div></div>'.$br;
        break;  
    }
     

}
//EG:  tooltip_content (  __('Example','lang_AkanaT_option') );
//EG:  tooltip_content (  __('Example','lang_AkanaT_option'),'<br>', 'margin: 0 5px 0 0;'  );
//EG:  $tooltip = tooltip_content (  __('Example','lang_AkanaT_option'),'', '', 'onvariable' );
//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''



// 5.0 COLOR PIKERT
//''''''''''''''''''''''' 

// 5.1 Color Piker ------------------------------
   //  color piker            id=id da dare al campo, uguale al valore|titolo che appare scritto| valore=nome campo da registrare nel db| hint = tooltip    
   // function graphtemplate_color_clean_graph($color){    if(strlen($color)>1){ return "#".str_replace("#","",$color); } else { return $color; }       }
/* 1_$id_option                         [$variable_idoption | 'section_option1']  => nome identificativo della opzione creata
 * 2_$variabile_theme,                  [$variable_theme] => variabile con il nome della sezione di opzioni associata al hook da registrare nel database
 * 3_$hookIDsection,                    [$variable_hookIDsection] => variabile sezione hook in cui registrare nel database l'opzione
 * 4_$tooltip                           ['' | $variable]                        => attiva tooltip personalizzato
 * 5_$alpha                             ['' | 'none' | 'active']        => attiva o disattiva il selettore alpha
 * 6_$notext                            ['' | 'none' | 'active']        => attiva lo style box senza testo descrizione nel rettangolo grigio
 * 7_$conditionIsset                    ['' | 'active']                 => attiva l'opzione isset se da errore
 */   
//                          1           2               3           4           5            6          7
function color_pikert($id_option,$variabile_theme,$hookIDsection,$tooltip,$alpha='none',$notext='',$conditionIsset = ''){
    if ($conditionIsset = 'active'){ if(isset($variabile_theme[$id_option])){$VarID = $variabile_theme[$id_option];}else {$VarID = '';}
        if(strlen($VarID)>1){ $content = esc_attr( "#".str_replace("#","",$VarID) ); } 
        else { $content = esc_attr($VarID); } 
    } else {
        if(strlen($variabile_theme[$id_option])>1){ $content = esc_attr( "#".str_replace("#","",$variabile_theme[$id_option]) ); } 
        else { $content = esc_attr( $variabile_theme[$id_option] ); } 
    }
    if($alpha == 'active'){$alpha_code = "data-alpha='true' ";} else {$alpha_code = "";}
    if($notext == 'active'){$Class_piker = "ColorPickerInputNOtext";} else {$Class_piker = "ColorPickerInput";}
    
    echo "<input id='$id_option' class='input-$id_option $Class_piker'  $alpha_code   name='akana_theme_".$hookIDsection."_hook_settings[$id_option]'  type='text' value='".$content."' /> ";
    if($tooltip !='') {echo $tooltip; } else { echo '<div class="tooltip-icon"><div class="tooltip-popup"><small>'.__('Usable formats: #000000 | rgb(0, 0, 0) | rgba(0, 0, 0,0)| black | hsl(0, 0%, 0%).','lang_AkanaT_option').'<br/>'
                        .__('Selezionare il colore desiderato. Lasciare vuoto l\'input se non si vuole inserire il colore','lang_AkanaT_option').'<br/>'
                        .__('Se è attivo il selettore alpha di trasparenza potete usare colori rgba e impostare una trasparenza assoluta.','lang_AkanaT_option')
                        .'</small></div></div>';}
   
}//EG: color_pikert($id_option,$VTheme,$STheme,$tooltip,'','');




//3.2 INPUT NUMBER ---------------------------------
    /* 1_$id_option
     * 2_$variabile_theme
     * 3_$hookIDsection
     * 4_$labels            [px | % | ...]   => valore da visulizzare dopo o prima del input
     * 5_$personalclass     [Classe nome]    => nome classe del input
     * 6_$Nmin              [number]         => valore minimo
     * 7_$Nmax              [number]         => valore massimo
     * 8_$Nstep             [number]         => step di passaggio
     * 9_$labelposition     [right | lft ]   => posizione del valore label
     * 10_$JQ_botton        ['' | 'active-standard','active-stylus']  => attiva lo stile con i bottoni laterali
     * 11_$StyleLabel       [padding: 10px;] => CSS per l'elemento label (funziona anche per lo stile del testo)
     * 12_$StyleInput       [width: 45px;]   => CSS per l'elemento input
     * 13_$conditionIsset   [active | other] => azionare comando isset
     * 
     */
//                          1           2               3           4               5               6           7               8               9                   10              11              12          13
function input_number($id_option,$variabile_theme,$hookIDsection,$labels='px',$personalclass='', $Nmin = '0', $Nmax= '100', $Nstep= '1',$labelposition='right',$JQ_botton='',$StyleLabel='',$StyleInput='',$conditionIsset = ''){
    if ($conditionIsset == 'active'){   if(isset($variabile_theme[$id_option])){  $content = esc_attr($variabile_theme[$id_option]);  }else { $content = '';} } 
    else { $content = esc_attr($variabile_theme[$id_option]); }    
    if($StyleLabel !=''){ $S_label = "  style='".$StyleLabel."' ";}else { $S_label = "";}        
    if($StyleInput !=''){ $S_input = "  style='".$StyleInput."' ";}else { $S_input = "";}        
        
        
    if     ($labels !='' && $labelposition == 'right'){$labelRight = $labels; $labelLeft = '';      $labelRight_JQ = '<span style="'.$StyleLabel.' border-width: 0 0 0 1px;">'.$labels.'</span>'; $labelLeft_JQ  = '';} 
    else if($labels !='' && $labelposition == 'left') {$labelRight = '';      $labelLeft = $labels; $labelLeft_JQ  = '<span style="'.$StyleLabel.' border-width: 0 1px 0 0;">'.$labels.'</span>'; $labelRight_JQ = '';} 
    else if($labels !='' ){$labelRight = $labels; $labelLeft = ''; $labelRight_JQ = '<span style="'.$StyleLabel.' border-width: 0 0 0 1px;">'.$labels.'</span>'; $labelLeft_JQ = '';} 
    else{}   
    
    
    
    
    
    if($JQ_botton != ''){ //STYLE PULSANTI LATERALI JQUERY
        if ($JQ_botton == 'active-stylus'){ $classButtonNUM = 'input-number-spinner-input-stylus';} else {$classButtonNUM = '';}
        echo "<label class='l-name-input-number-spinner $classButtonNUM'><i class='input-number-minus fa fa-minus c_pointer'></i><div class='box-input-number-spinner' >$labelLeft_JQ"; 
            echo "<input id='$id_option' name='akana_theme_".$hookIDsection."_hook_settings[$id_option]' type='number' max='$Nmax' min='$Nmin' step='$Nstep' class=' input-number-spinner input-number-spinner-input input-$id_option  $personalclass'  $S_input  value='".$content."' />";
        echo "$labelRight_JQ</div><i class='input-number-plus fa fa-plus c_pointer'></i></label>";
    
    } else {
    
        echo "<label class='l-name-input' $S_label >$labelLeft<input id='$id_option' name='akana_theme_".$hookIDsection."_hook_settings[$id_option]' type='number' max='$Nmax' min='$Nmin' step='$Nstep' class='input-number-el input-$id_option  $personalclass'  $S_input  value='".$content."' /> ";
        echo $labelRight.'</label>';
    } 


}//EG:   input_number($id_option,$VTheme,$STheme,'%','inputsd-1','0','100','1','right','','','','');
//--------------------------------------------------------------------------------------------

   
// 8.0 RADIO SELECTOR
//'''''''''''''''''''''

// 8.1  radio buttom standard ------------------------------------------------
/* 1_ $id_option            [$variable_idoption | 'section_option1']    => nome identificativo della opzione creata
 * 2_ $variabile_theme,     [$variable_theme]                           => variabile con il nome della sezione di opzioni associata al hook da registrare nel database
 * 3_ $hookIDsection,       [$variable_hookIDsection]                   => variabile sezione hook in cui registrare nel database l'opzione
   4_ $itemsArray,          [ array('option1','option2');  ]            => array delle opzioni da visualizzare nei checbox radio
   5_ $itemsNameArray,      [ array('Option first','Option Second'); ]  => array testo lingua visualizzato per ogni opzione
   6_ $Cstyle,              [ color: red;]                              => elementi di style del contenitore
   7_ $labelStyle,          [ color: red;]                              => elementi di style dei label
   8_ $conditionIsset=''    [ '' | 'active' ]                           => se la variabile è *active* allora la variabile viene controllata prima come isset. Questo elemento elimina gli errori php -> *Undefined index* 
 *                         
*/
//                            1            2             3           4                  5           6               7               8
function radio_checkbox($id_option,$variabile_theme,$hookIDsection,$itemsArray, $itemsNameArray, $Cstyle = '',$labelStyle = '',$conditionIsset =''){
    if($labelStyle !=''){$LabelS = "style='$labelStyle' "; } else {$LabelS = "";}    
    echo '<div id="'.$id_option.'" class="box-radio" style="display: inline-block; vertical-align: middle; '.$Cstyle.'"  >';
        foreach($itemsArray as $id=>$item) {
            if( $conditionIsset == 'active'){  $checkedClass = (isset($variabile_theme[$id_option])==$item) ? ' checkedClass' : '';   } else {  $checkedClass = ($variabile_theme[$id_option]==$item) ? ' checkedClass' : '';  }    
                //$checkedClass = ($variabile_theme[$id_option]==$item) ? ' checkedClass' : '';
            echo "<label id='$item' class='layouts text-botton $id_option  $checkedClass' $LabelS><input ";
            if( $conditionIsset == 'active'){  checked(isset($variabile_theme[$id_option]),$item);  } else {  checked($variabile_theme[$id_option],$item);  }
                //checked($variabile_theme[$id_option],$item);
            echo " value='$item' name='akana_theme_".$hookIDsection."_hook_settings[$id_option]' type='radio' />
            $itemsNameArray[$id]
            </label>";
        }
    echo '</div>'; 
}       // $itemsArray             = array ( "genoption-title-color-standard",  "genoption-title-color-custom" );
        // $itemsNameArray         = array ( __("Standard color","lang_AkanaT_option"), __("Custom color","lang_AkanaT_option")  );           
        //EG: radio_checkbox($id_option,$VTheme,$STheme,$itemsArray,$itemsNameArray,'','','');
//------------------------------------------------------------------------------------------------------

      
      
      


//5.3 Color gradient------------------------------
/* 1_ $id_option            [$variable_idoption | 'section_option1']    => nome identificativo della opzione creata
 * 2_ $variabile_theme,     [$variable_theme]                           => variabile con il nome della sezione di opzioni associata al hook da registrare nel database
 * 3_ $hookIDsection,       [$variable_hookIDsection]                   => variabile sezione hook in cui registrare nel database l'opzione
 */ 
//                          1           2               3             
function color_gradient($id_option,$variabile_theme,$hookIDsection){
   $THEME_ID_hook= "akana_theme_";
     
    //Id_Option    
    $number_color               = $id_option.'_grad_color_num';
    
    $Id_color                   = $id_option.'_grad_color';
    $Id_colorpos                = $id_option.'_grad_color_pos';
    
    $repeatcolor                = $id_option.'_grad_repeat';
    $AR_repeat                  = array('repeat','no-repeat');
    $AR_repeat_Name             = array( __('Repeat',"lang_AkanaT_option"),__('No repeat',"lang_AkanaT_option") );
                
    $linear_rad                 = $id_option.'_grad_type';
    $AR_linear_rad              = array('linear','radial');
    $AR_linear_rad_Name         = array( __('Linear',"lang_AkanaT_option"),__('Radial',"lang_AkanaT_option") );
    
    $linear_edg                 = $id_option.'_grad_linear_edg';
    
    $radial_shape               = $id_option.'_grad_shape';
    $RAD_radial_shape           = array('circle','ellipse');
    $RAD_radial_shape_Name      = array( __('Circle',"lang_AkanaT_option"),__('Ellipse',"lang_AkanaT_option") );
    
    $radial_radialsize_circle   = $id_option.'_grad_radial_size_circle';
    $radial_radialsize_ellipse  = $id_option.'_grad_radial_size_ellipse';

    $radial_radialpos_horiz     = $id_option.'_grad_radial_pos_horiz';
    $radial_radialpos_vert      = $id_option.'_grad_radial_pos_vert';
     
 
    echo '<div id="'.$id_option.'-ggs-gradient-content" class="'.$id_option.'-ggs-gradient-content ggs-gradient-content" >';
        //PREVIEW ------------ 
        echo '<div class="ggs-gradient-preview-box">
                  <div class="previw-box">
                      <div class="gradient-prev" style="display: inline-block;" >'.__('Preview Gradient','lang_AkanaT_option').'</div>
                      <div class="gradient-prev-icon">
                          <i id="'.$id_option.'-ggs-full-view-prev" class="ggs-full-view-prev dashicons dashicons-editor-expand"></i>
                          <i id="'.$id_option.'-ggs-fullback-view-prev" class="ggs-fullback-view-prev dashicons dashicons-editor-contract"></i>
                      </div>
                      <div class="ggs-gradient-preview box-gradient"></div>
                  </div>
              </div>';
        //-----------------------      
        
        echo '<div class="ggs-gradient-commands" >';
            
            // NUMBER COLOR hiden box
            echo '<input style="display: none;" id="'.$number_color.'" name="'.$THEME_ID_hook.$hookIDsection.'_hook_settings['.$number_color.']" type="number" max="10" min="2" step="1" class="input-number-spinner-input input-'.$number_color.'"  value="'.$variabile_theme[$number_color].'" />'; 
                
            
            //sidebar slider -----------------------------------------------
            echo '<div class="box-slider" style="max-width: 90%;margin: auto;"><div id="'.$id_option.'-ggs-slider-multielement" class="ggs-slider-multielement slider-bar-content  slider-bar-gradient"></div></div>';    
            echo '<br/><br/>';
            echo '<div style="display: inline-block; max-width: 20%; vertical-align: middle; min-width: 100px;">';           
            echo '<h5  class="title-sub-box-normal" style="margin-right: 10px;">'.__('Colors','lang_AkanaT_option').'</h5>';
            tooltip_content ( __('Scegliere i colori da usare per lo sfondo a gradiente e il loro posizionamento.','lang_AkanaT_option').'<br/>'
                             .__('Come colori potete scegliere un colore generico, un colore semi trasparente o direttamente una trasparenza completa (portate la barra di trasparenza alpha completamente a 0)','lang_AkanaT_option').'<br/>'
                             .__('Il posizionamento numerico può essere elaborato anche con la barra slider, invece di unsare il selettore numerico.','lang_AkanaT_option'),'', '', '' );
            echo '</div>';
            echo '<div class="box-ggs-colorlist" style="display: inline-block; width: 80%; vertical-align: middle;">';      
                $number_ray_base = array(1,2,3,4,5,6,7,8,9,10);
                // $number_ray =  array();
                // foreach (range(1, $variabile_theme[$number_color]) as $n) { array_push($number_ray , $n); }
                foreach ($number_ray_base as $color){
                    //COLOR ID 
                    ${'grad_color'.$color}      = $Id_color.$color;      //EG  $grad_color1     = $id_option.'_grad_color1';
                    ${'grad_color_pos'.$color}  = $Id_colorpos.$color;   //EG $grad_color_pos1  = $id_option.'_grad_color_pos1';
                    echo '<div class="ggs-box-color-grad-seq box-id-grad'.$color.'" >';
                        color_pikert(${'grad_color'.$color},$variabile_theme,$hookIDsection,' ','active','active','');
                        input_number(${'grad_color_pos'.$color},$variabile_theme,$hookIDsection,'%','ggs-input-number input-color-grad-seq','0','100','1','right','','vertical-align: top; background: #E4E4E4;','','');
                    echo '</div>';
                }
                echo '<i id="'.$id_option.'-ggs-icon-minus" class="ggs-icon-minus fa fa-minus c_pointer" style="margin: 0 2% 0 1%;"></i>';
                echo '<i id="'.$id_option.'-ggs-icon-plus" class="ggs-icon-plus fa fa-plus c_pointer" style=" "></i>';
            echo '</div>'; 
            echo '<br/><br/>';
            // POSITION------------------------    
            echo '<div class="box-left box-grad-direction" style="display: inline-block;width: 50%;">';
                echo '<h5  class="title-sub-box-minwid-125" style="min-width: 100px;">'.__('Repeating','lang_AkanaT_option').'</h5>';
                radio_checkbox($repeatcolor,$variabile_theme,$hookIDsection,$AR_repeat,$AR_repeat_Name,'','min-width: 60px;','');
                tooltip_content (__('Scegli se nello schema i colori si ripetono in sequenza o se i colori scelti si estendono per tutto il colore non ripetendosi.','lang_AkanaT_option')   );
                echo '<br/>';
                echo '<h5  class="title-sub-box-minwid-125" style="min-width: 100px;">'.__('Gradient Type','lang_AkanaT_option').'</h5>';
                radio_checkbox($linear_rad,$variabile_theme,$hookIDsection,$AR_linear_rad,$AR_linear_rad_Name,'','min-width: 60px;','');
                tooltip_content (__('Scegli se nello schema i colori si ripetono in sequenza o se i colori scelti si estendono per tutto il colore non ripetendosi.','lang_AkanaT_option')   );
            echo '</div>'; //box left
            //CONDITION POSITION-------------
            echo '<div class="box-right" style="display: inline-block; vertical-align: top;width: 50%;text-align: center;">';
                //DIRECTION LINEAR-------------
                echo '<div class="ggs-grad-linear-comand grad-linear-box" style="text-align: center; min-height: 150px; min-width: 50%;" >';
                    echo '<h5  class="title-sub-box-normal"  style="font-weight: 600; margin-right: 5%; display: inline-block; vertical-align: middle; text-align: left;">'.__('Direction','lang_AkanaT_option').'</h5>';
                    echo '<div id="slider-'.$linear_edg.'" class="ggs-slidercircle-edg" style="display: inline-block; vertical-align: middle;"></div>'; //input class
                    echo '<input id="'.$linear_edg.'" name="'.$THEME_ID_hook.$hookIDsection.'_hook_settings['.$linear_edg.']" type="hidden"  size="3"  class="input_eggNum"  value="'.$variabile_theme[$linear_edg].'" /> ';
                echo '</div>';
                //RADIAL -------------
                echo '<div class="ggs-grad-radial-comand grad-radial-box" style="text-align: left; min-height: 150px; min-width: 50%;" >';
                    echo '<h5 class="title-sub-box-minwid-125" style="min-width: 150px;">'.__('Shape','lang_AkanaT_option').'</h5>';
                    radio_checkbox($radial_shape,$variabile_theme,$hookIDsection,$RAD_radial_shape,$RAD_radial_shape_Name,'','min-width: 60px;','');
                    tooltip_content (__('Scegli se il raggio del radial deve avere una forma circolare (larghezza e altezza uguale) o una forma ovale (con le due misure differenti)','lang_AkanaT_option')   );
                    echo '<br/>';
                    
                    echo '<div class="box-'.$radial_radialsize_circle.'">';
                        echo '<h5 class="title-sub-box-minwid-125" style="min-width: 150px; height: 30px; line-height: 30px; margin: 0 0 8px 0;vertical-align: top;">'.__('Size circle','lang_AkanaT_option').'</h5>';
                        input_number($radial_radialsize_circle,$variabile_theme,$hookIDsection,'px','ggs-input-number ggs-input-circle','0','','1','right','active-stylus','','width: 50px; text-align: center;','');
                        tooltip_content (__('Il valore minimo non può scendere sotto lo 0. Per uno Shape Circolare usare il primo valore per determinare il diametro del cerchio, mentre per un ovale impostare prima la larghezza e poi la lunghezza.','lang_AkanaT_option')   );
                    echo '</div>';
                    echo '<div class="box-'.$radial_radialsize_ellipse.'">';
                        echo '<h5 class="title-sub-box-minwid-125" style="min-width: 150px; height: 30px; line-height: 30px; margin: 0; vertical-align: top; ">'.__('Size ellipse','lang_AkanaT_option').'</h5>';
                        input_number($radial_radialsize_ellipse,$variabile_theme,$hookIDsection,'px','ggs-input-number ggs-input-ellipse','0','','1','right','active-stylus','','width: 50px; text-align: center;','');
                        tooltip_content (__('Il valore minimo non può scendere sotto lo 0. Per uno Shape Circolare usare il primo valore per determinare il diametro del cerchio, mentre per un ovale impostare prima la larghezza e poi la lunghezza.','lang_AkanaT_option')   );
                    echo '</div>';
                    
                    echo '<br/>';
                    
                    echo '<div class="box-'.$radial_radialpos_horiz.'">';
                        echo '<h5 class="title-sub-box-minwid-125" style="min-width: 150px; height: 30px; line-height: 30px; margin: 0 0 8px 0;vertical-align: top;">'.__('Horizontal position','lang_AkanaT_option').'</h5>';
                        input_number($radial_radialpos_horiz,$variabile_theme,$hookIDsection,'%','ggs-input-number input-color-grad-seq','','','1','right','active-stylus','vertical-align: middle;','width: 50px; text-align: center;','');
                        tooltip_content (__('Il valore minimo non può scendere sotto lo 0. Scegliere la posizione orizzontale rispetto al contenitore del centro del cerchio/ellisse.','lang_AkanaT_option')   );
                    echo '</div>';
                    echo '<div class="box-'.$radial_radialpos_vert.'">';
                        echo '<h5 class="title-sub-box-minwid-125" style="min-width: 150px; height: 30px; line-height: 30px; margin: 0;vertical-align: top;">'.__('Vertical position','lang_AkanaT_option').'</h5>';
                        input_number($radial_radialpos_vert,$variabile_theme,$hookIDsection,'%','ggs-input-number input-color-grad-seq','','','1','right','active-stylus','vertical-align: middle;','width: 50px; text-align: center;','');
                        tooltip_content (__('Il valore minimo non può scendere sotto lo 0. Scegliere la posizione verticale rispetto al contenitore del centro del cerchio/ellisse.','lang_AkanaT_option')   );
                    echo '</div>';
                    
                    
                    
                echo '</div>';
            
            echo '</div>';//box right-----------------------
 
        
        echo '</div>'; //ggs-gradient-commands

        //EXEMPLE PREVIEW -----------------------
        echo '<div class="ggs-gradient-exemple" >';
            
            //echo '<div class="description" style="font-size: 12px;">'   .__('    ','lang_AkanaT_option').'<br/>'                 .'</div>';
            echo '<h5  class="title-sub-box-normal" style=" margin-bottom: 15px;">'.__('Example','lang_AkanaT_option').'</h5>';
             
            //box exemple
            echo '<div class="ggs-gradient-exemple-boxs" >';
                // echo '<div class="ggs-gradient-exemple-el el-1 exampleval_1"></div>';
                // echo '<div class="ggs-gradient-exemple-el el-2 exampleval_2"></div>';
            echo '</div>';
        
        
        echo '</div>'; //ggs-gradient-exemple
        //-----------------------------
            
    echo '</div>'; //'.$id_option.'ggs-gradient-content
    
    //script -----------------------------------------
    ?><script> jQuery(document).ready(function($){
            var Primary_BOX  = '.<?php echo $id_option;?>-ggs-gradient-content';
            //previw full screen, normal screen
            $(Primary_BOX+' .ggs-full-view-prev').click(function(){      $(Primary_BOX+' .ggs-gradient-preview-box').addClass('ggs-preview-fullbox');     $(Primary_BOX+' .ggs-full-view-prev').css('display','none');  $(Primary_BOX+' .ggs-fullback-view-prev').css('display','block');    });  
            $(Primary_BOX+' .ggs-fullback-view-prev').click(function(){  $(Primary_BOX+' .ggs-gradient-preview-box').removeClass('ggs-preview-fullbox');  $(Primary_BOX+' .ggs-full-view-prev').css('display','block'); $(Primary_BOX+' .ggs-fullback-view-prev').css('display','none');     });  
            //--------------------
            
            //load gradie comand box
           
   
        $(Primary_BOX).GradGeneratorSimply({
            box_content     : Primary_BOX,
            previewID       : Primary_BOX+' .ggs-gradient-preview',
            sliderID        : Primary_BOX+' .ggs-gradient-commands .box-slider .ggs-slider-multielement',
            sliderID_circle : Primary_BOX+' .ggs-gradient-commands .box-right .ggs-grad-linear-comand .ggs-slidercircle-edg',
            box_show_linear : Primary_BOX+' .ggs-gradient-commands .box-right .ggs-grad-linear-comand',
            box_show_radial : Primary_BOX+' .ggs-gradient-commands .box-right .ggs-grad-radial-comand',
            box_show_ellipse: Primary_BOX+' .box-<?php echo $id_option;?>_grad_radial_size_ellipse',
        
            //content preview size
            box_preview : Primary_BOX+' .ggs-gradient-preview-box',
            //icon color + - class
            icon_plus       : Primary_BOX+' .box-ggs-colorlist .ggs-icon-plus',
            icon_minus      : Primary_BOX+' .box-ggs-colorlist .ggs-icon-minus',
            box_color_opt   : Primary_BOX+' .box-id-grad',
            
            //input condtion
            nColorID    : '#<?php echo $id_option;?>_grad_color_num', //id-class input of number of color (input hidden)
            colorsID    : '#<?php echo $id_option;?>_grad_color',
            positionID  : '#<?php echo $id_option;?>_grad_color_pos',
            
            //input value ID
            linear_edg  : '#<?php echo $id_option;?>_grad_linear_edg',
            r_circle    : '#<?php echo $id_option;?>_grad_radial_size_circle',
            r_ellipse   : '#<?php echo $id_option;?>_grad_radial_size_ellipse',
            r_horiz     : '#<?php echo $id_option;?>_grad_radial_pos_horiz',
            r_vert      : '#<?php echo $id_option;?>_grad_radial_pos_vert',
           
            //radio button
            g_rep       : '#<?php echo $id_option;?>_grad_repeat #repeat',
            g_norep     : '#<?php echo $id_option;?>_grad_repeat #no-repeat',
            g_linear    : '#<?php echo $id_option;?>_grad_type #linear',
            g_radial    : '#<?php echo $id_option;?>_grad_type #radial',
            g_circle    : '#<?php echo $id_option;?>_grad_shape #circle',
            g_ellipse   : '#<?php echo $id_option;?>_grad_shape #ellipse',
              
            //exemple value
            example_cont_class: Primary_BOX+' .ggs-gradient-exemple .ggs-gradient-exemple-boxs',//Primary_BOX+' .ggs-gradient-exemple-boxs',
            
    });   
   
            //--------------------
   
    });</script><?php
 
    
    

} //EG:color_gradient($id_option,$VTheme,$STheme);
//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  
 
 
 
 
?>  
