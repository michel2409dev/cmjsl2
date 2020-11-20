var gdivCaratula = "";
var gdivEmpresa="";
var gdivsoftware="";
var gdivservicios="";
var gdivdesarrolloweb="";
//var gdivclientes="";
var gdivcontacto="";
var giconmenu = "";
var gpantalla = "";
var gulmenuprincipal = "";



//var ventanamodal="";








/*ESTA FUNCION GESTIONA LA VISIBILIDAD DE LOS DIVS RELACIONADOS CON EL MENU*/

    function main(){

        var iconmenu = document.getElementById("icon_barras");
        giconmenu = iconmenu;
        //gpantalla = window.matchMedia("(max-width: 913)");
        

        //window.matchMedia("(max-width: 700px)").matches
        var ulmenuprincipal = document.getElementById("ul_menu_principal");
        gulmenuprincipal = ulmenuprincipal;

     
        
        var divCaratula = document.getElementById("div_caratula");
        var divEmpresa=document.getElementById("div_Empresa");
        var divsoftware=document.getElementById("div_Software");
        var divservicios=document.getElementById("div_servicios");
        var divdesarrolloweb=document.getElementById("div_DesarrolloWeb");
        //var divclientes=document.getElementById("div_clientes");
        var divcontacto=document.getElementById("div_Contacto");
        var divcentral=document.getElementById("div_central");

       
        gdivcentral=divcentral;
        gdivCaratula = divCaratula;
        gdivEmpresa=divEmpresa;
        gdivsoftware=divsoftware;
        gdivservicios=divservicios;
        gdivdesarrolloweb=divdesarrolloweb;
        //gdivclientes=divclientes;
        gdivcontacto=divcontacto;

        gdivCaratula.style.display = "inline-block";
        gdivcentral.style.display="inline-block";
        gdivEmpresa.style.display="none";
        gdivsoftware.style.display="none";
        gdivservicios.style.display="none";
        gdivdesarrolloweb.style.display="none";
        //gdivclientes.style.display="none";
        gdivcontacto.style.display="none";

       
        var mnuEmpresa=document.getElementById("mnu_Empresa");
        var mnusoftware=document.getElementById("mnu_software");
        var mnuservicios=document.getElementById("mnu_servicios");
        var mnudesarrolloweb=document.getElementById("mnu_desarrolloweb");
        //var mnuclientes=document.getElementById("mnu_clientes");
        var mnucontacto=document.getElementById("mnu_contacto");

        


      


            
        mnuEmpresa.addEventListener("click",menuEmpresa,false);
        //mnuEmpresa.addEventListener("mouseover",menuEmpresa,false);

        mnusoftware.addEventListener("click",menusoftware,false);
        //mnusoftware.addEventListener("mouseover",menusoftware,false);

        mnuservicios.addEventListener("click",menuservicios,false);
        //mnuservicios.addEventListener("mouseover",menuservicios,false);


        mnudesarrolloweb.addEventListener("click",menudesarrolloweb,false);
        //mnudesarrolloweb.addEventListener("mouseover",menudesarrolloweb,false);

        
        //mnuclientes.addEventListener("click",menuclientes,false);
        //mnuclientes.addEventListener("mouseover",menuclientes,false);

        
        mnucontacto.addEventListener("click",menucontacto,false);
        //mnucontacto.addEventListener("mouseover",menucontacto,false); 

        iconmenu.addEventListener("click",menugeneral,false);
        
        
    }
    



    function menugeneral(){

        gdivCaratula.style.display = "inline-block"; 


        //var x = document.getElementById("myDIV");

        // Start the animation with JavaScript
        //function myFunction() {
          //gdivCaratula.style.WebkitAnimation = "mymove 4s 1"; // Code for Chrome, Safari and Opera


            gdivCaratula.style.animation = "mymove 1s 1";     // Standard syntax
            
        





        gdivEmpresa.style.display="none";  
        gdivsoftware.style.display="none";
        gdivservicios.style.display="none";
        gdivdesarrolloweb.style.display="none";
        //gdivclientes.style.display="none";
        gdivcontacto.style.display="none";

        if (window.matchMedia("(max-width: 1012px)").matches){

            if (gulmenuprincipal.style.display === 'block'){

                gulmenuprincipal.style.display = 'none';
                //alert(gulmenuprincipal.style.display); 
            }

            else{
                gulmenuprincipal.style.display = 'block';
                //alert(gulmenuprincipal.style.display);
            } 
         

        }    
    
        else{
            
            if (gulmenuprincipal.style.display === 'flex'){

                gulmenuprincipal.style.display = 'none';
                //alert(gulmenuprincipal.style.display); 
            }

            else{
                gulmenuprincipal.style.display = 'flex';
                //alert(gulmenuprincipal.style.display);
            } 


        }



        /* if(gulmenuprincipal.style.display === 'inline-block')
            {gulmenuprincipal.style.display = 'none'}

        else
            {gulmenuprincipal.style.display = 'flex'} */

    }

  
    function menuEmpresa(){

            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';
    
            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="inline-block";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            //gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }

    function menusoftware(){
    
            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="inline-block";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            //gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menuservicios(){


            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';

            /*alert("hola");*/
            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="inline-block";
            gdivdesarrolloweb.style.display="none";
            //gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menudesarrolloweb(){

            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';
        

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="inline-block";
            //gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


       /*  function menuclientes(){


            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="inline-block";
            gdivcontacto.style.display="none";

        }
 */

        function menucontacto(){

            gdivCaratula.style.display = "none";
            gulmenuprincipal.style.display = 'none';
        

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            //gdivclientes.style.display="none";
            gdivcontacto.style.display="inline-block";

        }

window.addEventListener("load",main,false);
