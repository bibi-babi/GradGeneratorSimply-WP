<?php

/*
 *  The inputs set in color_gradient are save in their option.
    But to have an optimal result, it is recommended to use a single option that invokes CSS commands.
    So you can use this function for sanize a ONE option to insert on Style 
 */


// hookIDsection on name IS  NAME ON -> $hookIDsection ( the variable choose on function : color_gradient)
// $Hbg_grad -> is a name of option gradient, is variable "$id_option" that choose function : color_gradient
// other variable ($Hbg_G_EDG,$Hbg_G_Ncolor,ecc) is standard option name write on function:  color_gradient
// 'graphtemplate_header_bgstyle_grad_final_CSS' -> IS FINAL OPTION 

function akana_theme_hookIDsection_hook_settings_validate($input) { // !IMPORTANT !!!!!!!!!!! hookIDsection on name IS  NAME ON -> $hookIDsection ( the variable choose on function : color_gradient)


                //BG color final -> graphtemplate_header_bgstyle_color_final 
                $input['graphtemplate_header_bgstyle_color_final']      = $input['graphtemplate_header_bgstyle_color'];
                
                //BG GRADIENT final -----------------------------------------------------------------------------
                $Hbg_grad   = 'graphtemplate_header_bgstyle';
                $Hbg_G_EDG              = $input[$Hbg_grad.'_grad_linear_edg'];
                $Hbg_G_Ncolor           = $input[$Hbg_grad.'_grad_color_num'];
                $Hbg_G_N                = intval($Hbg_G_Ncolor); 
                $Hbg_G_Array_col_pos    = '';
                for($i = 1; $i <= $Hbg_G_N; $i++) { //+1 che parti da 1 fino al numero visualizzato |per ogni colore dei colori totali (colori max), metti colore e posizione. Se il valore corrisponde all'ultimo colore  non mettere la virgola finale
                    if($i == $Hbg_G_N){ $Hbg_G_Array_col_pos .=  $input[$Hbg_grad.'_grad_color'.$i].' '.$input[$Hbg_grad.'_grad_color_pos'.$i].'%';  }
                    else {              $Hbg_G_Array_col_pos .=  $input[$Hbg_grad.'_grad_color'.$i].' '.$input[$Hbg_grad.'_grad_color_pos'.$i].'%,'; }
                }      
                $Hbg_G_lin_rad          = $input[$Hbg_grad.'_grad_type']; //'linear','radial'
                $Hbg_G_repeat           = $input[$Hbg_grad.'_grad_repeat']; //'repeat','no-repeat'
                $Hbg_G_sizeCircle       = $input[$Hbg_grad.'_grad_radial_size_circle']; //'number    px
                $Hbg_G_sizeEllipse      = $input[$Hbg_grad.'_grad_radial_size_ellipse']; //'number   px
                if($input[$Hbg_grad.'_grad_shape'] == 'circle') { $Hbg_G_sizeTotal = $Hbg_G_sizeCircle.'px '.$Hbg_G_sizeCircle.'px';  }
                else {                                            $Hbg_G_sizeTotal = $Hbg_G_sizeCircle.'px '.$Hbg_G_sizeEllipse.'px';  }
                $Hbg_G_posHoriz         = $input[$Hbg_grad.'_grad_radial_pos_horiz']; //'number   %
                $Hbg_G_posVert          = $input[$Hbg_grad.'_grad_radial_pos_vert']; //'number   %
                
               
                 
                
                if (    $Hbg_G_lin_rad == 'linear' && $Hbg_G_repeat == 'no-repeat'){  //LINEAR NORMAL
                    $input['graphtemplate_header_bgstyle_grad_final_CSS'] =  'background: linear-gradient('        .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'
                                                                            .'background: -webkit-linear-gradient('.$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'  /* Chrome10-25,Safari5.1-6 */
                                                                            .'background: -moz-linear-gradient('   .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'   /* For Firefox 3.6 to 15 */
                                                                            .'background: -o-linear-gradient('     .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'   /* Opera 11.10-11.50 */
                                                                            .'background: -ms-linear-gradient('    .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'   /* IE10 preview */
                                                                            .'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="'.$input[$Hbg_grad.'_grad_color1'].'", endColorstr="'. $input[$Hbg_grad.'_grad_color2'].'",GradientType=0 );';  /* IE6-8 fallback on horizontal gradient */
                   
                } else if($Hbg_G_lin_rad == 'linear' && $Hbg_G_repeat == 'repeat'){  //LINEAR REPEAT
                    $input['graphtemplate_header_bgstyle_grad_final_CSS'] =  'background: repeating-linear-gradient('        .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'
                                                                            .'background: -webkit-repeating-linear-gradient('.$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'  
                                                                            .'background: -moz-repeating-linear-gradient('   .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'  
                                                                            .'background: -o-repeating-linear-gradient('     .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'  
                                                                            .'background: -ms-linear-gradient('              .$Hbg_G_EDG.'deg, '.$Hbg_G_Array_col_pos.');'
                                                                            .'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="'.$input[$Hbg_grad.'_grad_color1'].'", endColorstr="'. $input[$Hbg_grad.'_grad_color2'].'",GradientType=0 );'; 
                   
                } else if($Hbg_G_lin_rad == 'radial' && $Hbg_G_repeat == 'no-repeat'){
                    $input['graphtemplate_header_bgstyle_grad_final_CSS'] =  'background: radial-gradient('.$Hbg_G_sizeTotal.' at '.$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_Array_col_pos.');'
                                                                            .'background: -webkit-radial-gradient('.$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'background: -moz-radial-gradient('   .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');'  
                                                                            .'background: -o-radial-gradient('     .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'background: -ms-radial-gradient('    .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="'.$input[$Hbg_grad.'_grad_color1'].'", endColorstr="'. $input[$Hbg_grad.'_grad_color2'].'",GradientType=0 );';  
                                                                             
                } else if($Hbg_G_lin_rad == 'radial' && $Hbg_G_repeat == 'repeat'){
                    $input['graphtemplate_header_bgstyle_grad_final_CSS'] =  'background: repeating-radial-gradient('        .$Hbg_G_sizeTotal.' at '.$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_Array_col_pos.');'
                                                                            .'background: -webkit-repeating-radial-gradient('.$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'background: -moz-repeating-radial-gradient('   .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'background: -o-repeating-radial-gradient('     .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'background: -ms-radial-gradient('              .$Hbg_G_posHoriz.'% '.$Hbg_G_posVert.'%, '.$Hbg_G_sizeTotal.', '.$Hbg_G_Array_col_pos.');' 
                                                                            .'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="'.$input[$Hbg_grad.'_grad_color1'].'", endColorstr="'. $input[$Hbg_grad.'_grad_color2'].'",GradientType=0 );';  
                } else{  $input['graphtemplate_header_bgstyle_grad_final_CSS'] =  'background: '.$input[$Hbg_grad.'_grad_color1'];  }
                //----------------------------------------------------------------------------------------------------------------------

}    


//The Option "graphtemplate_header_bgstyle_grad_final_CSS" Print similar code:
/*
    background: radial-gradient(600px 150px at 28% -12%, rgb(247, 159, 212) 0%,rgb(255, 255, 255) 70%,rgb(247, 159, 212) 100%);
    background: -webkit-radial-gradient(28% -12%, 600px 150px, rgb(247, 159, 212) 0%,rgb(255, 255, 255) 70%,rgb(247, 159, 212) 100%);
    background: -moz-radial-gradient(28% -12%, 600px 150px, rgb(247, 159, 212) 0%,rgb(255, 255, 255) 70%,rgb(247, 159, 212) 100%);
    background: -o-radial-gradient(28% -12%, 600px 150px, rgb(247, 159, 212) 0%,rgb(255, 255, 255) 70%,rgb(247, 159, 212) 100%);
    background: -ms-radial-gradient(28% -12%, 600px 150px, rgb(247, 159, 212) 0%,rgb(255, 255, 255) 70%,rgb(247, 159, 212) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="rgb(247, 159, 212)", endColorstr="rgb(255, 255, 255)",GradientType=0 );

*/


?>