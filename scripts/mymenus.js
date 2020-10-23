
var gdivinicio="";
var gdivsoftware="";
var gdivconsultoria="";
var gdivdesarrolloweb="";
var gdivproyectos="";
var gdivcontacto="";
var ventanamodal="";

/*ESTA FUNCION GESTIONA LA VISIBILIDAD DE LOS DIVS RELACIONADOS CON EL MENU*/

    function main(){

        document.getElementById("frmContacto").reset();
        
        var divinicio=document.getElementById("div_Inicio");
        var divsoftware=document.getElementById("div_Software");
        var divconsultoria=document.getElementById("div_Consultoria");
        var divdesarrolloweb=document.getElementById("div_DesarrolloWeb");
        var divproyectos=document.getElementById("div_Proyectos");
        var divcontacto=document.getElementById("div_Contacto");
        var divcentral=document.getElementById("div_central");

        gdivcentral=divcentral;
        gdivinicio=divinicio;
        gdivsoftware=divsoftware;
        gdivconsultoria=divconsultoria;
        gdivdesarrolloweb=divdesarrolloweb;
        gdivproyectos=divproyectos;
        gdivcontacto=divcontacto;
    
        gdivcentral.style.display="inline-block";
        gdivinicio.style.display="inline-block";
        gdivsoftware.style.display="none";
        gdivconsultoria.style.display="none";
        gdivdesarrolloweb.style.display="none";
        gdivproyectos.style.display="none";
        gdivcontacto.style.display="none";

       
        var mnuinicio=document.getElementById("mnu_inicio");
        var mnusoftware=document.getElementById("mnu_software");
        var mnuconsultoria=document.getElementById("mnu_consultoria");
        var mnudesarrolloweb=document.getElementById("mnu_desarrolloweb");
        var mnuproyectos=document.getElementById("mnu_proyectos");
        var mnucontacto=document.getElementById("mnu_contacto");
        var imgconsultoria=document.getElementById("img_consultoria");
        var imgsoftware=document.getElementById("img_software");
        var imgdesarrolloweb=document.getElementById("img_desarrolloweb");



            
        mnuinicio.addEventListener("click",menuinicio,false);
        mnuinicio.addEventListener("mouseover",menuinicio,false);

        mnusoftware.addEventListener("click",menusoftware,false);
        mnusoftware.addEventListener("mouseover",menusoftware,false);

        mnuconsultoria.addEventListener("click",menuconsultoria,false);
        mnuconsultoria.addEventListener("mouseover",menuconsultoria,false);


        mnudesarrolloweb.addEventListener("click",menudesarrolloweb,false);
        mnudesarrolloweb.addEventListener("mouseover",menudesarrolloweb,false);

        
        mnuproyectos.addEventListener("click",menuproyectos,false);
        mnuproyectos.addEventListener("mouseover",menuproyectos,false);

        
        mnucontacto.addEventListener("click",menucontacto,false);
        mnucontacto.addEventListener("mouseover",menucontacto,false); 

        imgconsultoria.addEventListener("click",menuconsultoria,false);
        imgsoftware.addEventListener("click",menusoftware,false);
        imgdesarrolloweb.addEventListener("click",menudesarrolloweb,false);

        
        
        //ventana modal del formulario de envio mail
        ventanamodal=document.getElementById("div_mensaje");
        ventanamodal.style.display="none";
        
        var botonmodal=document.getElementById("id_btnvermodal");
        botonmodal.addEventListener("click",mostrarmodal,false);
        
    }
    

        function mostrarmodal(){
            
            valor = document.getElementById("inp_nombre").value;
            if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
              
                    alert("El campo Nombre no es correcto");
              
                return false;
            }
            
            valor = document.getElementById("inp_apellido").value;
            if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
              
                alert("El campo Apellido no es correcto");
                            
                return false;
            }
//********************************************************************************* */
           /*  valor = document.getElementById("inp_email").value;
            if   (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,})+$/.test(valor)){
                           
                alert("Introduzca una dirección de email correcta");
                return false;
            } */

            valor = document.getElementById("inp_email").value;
            if( valor == null || valor.length == 0 || /^@\s+$/.test(valor) ) {
              
                alert("El campo Email no es correcto");
                          
            return false;
        }
            
            valor = document.getElementById("inp_comentario").value;
            if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
              
                    alert("El campo  comentarios de cumplimentarse correctamente");
              
                return false;
            }



            ventanamodal.style.display="block";
            //document.getElementById("frmContacto").reset();

         }
  




    
  
    function menuinicio(){

            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="inline-block";
            gdivsoftware.style.display="none";
            gdivconsultoria.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivproyectos.style.display="none";
            gdivcontacto.style.display="none";

        }

    function menusoftware(){

            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="none";
            gdivsoftware.style.display="inline-block";
            gdivconsultoria.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivproyectos.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menuconsultoria(){
            /*alert("hola");*/
            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="none";
            gdivsoftware.style.display="none";
            gdivconsultoria.style.display="inline-block";
            gdivdesarrolloweb.style.display="none";
            gdivproyectos.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menudesarrolloweb(){

            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="none";
            gdivsoftware.style.display="none";
            gdivconsultoria.style.display="none";
            gdivdesarrolloweb.style.display="inline-block";
            gdivproyectos.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menuproyectos(){

            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="none";
            gdivsoftware.style.display="none";
            gdivconsultoria.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivproyectos.style.display="inline-block";
            gdivcontacto.style.display="none";

        }


        function menucontacto(){

            gdivcentral.style.display="inline-block";
            gdivinicio.style.display="none";
            gdivsoftware.style.display="none";
            gdivconsultoria.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivproyectos.style.display="none";
            gdivcontacto.style.display="inline-block";

        }

window.addEventListener("load",main,false);
//window.onload=main();
//document.onload=main();
//var saludo="hola soy global";

