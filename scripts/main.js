var gdivEmpresa="";
var gdivsoftware="";
var gdivservicios="";
var gdivdesarrolloweb="";
var gdivclientes="";
var gdivcontacto="";
var giconmenu = "";
var gpantalla = "";
var gulmenuprincipal = "";



//var ventanamodal="";








/*ESTA FUNCION GESTIONA LA VISIBILIDAD DE LOS DIVS RELACIONADOS CON EL MENU*/

    function main(){

        var iconmenu = document.getElementById("label_menu");
        giconmenu = iconmenu;
        //gpantalla = window.matchMedia("(max-width: 913)");
        

        //window.matchMedia("(max-width: 700px)").matches
        var ulmenuprincipal = document.getElementById("ul_menu_principal");
        gulmenuprincipal = ulmenuprincipal;

     
        
        var divEmpresa=document.getElementById("div_Empresa");
        var divsoftware=document.getElementById("div_Software");
        var divservicios=document.getElementById("div_servicios");
        var divdesarrolloweb=document.getElementById("div_DesarrolloWeb");
        var divclientes=document.getElementById("div_clientes");
        var divcontacto=document.getElementById("div_Contacto");
        var divcentral=document.getElementById("div_central");

       
        gdivcentral=divcentral;
        gdivEmpresa=divEmpresa;
        gdivsoftware=divsoftware;
        gdivservicios=divservicios;
        gdivdesarrolloweb=divdesarrolloweb;
        gdivclientes=divclientes;
        gdivcontacto=divcontacto;
    
        gdivcentral.style.display="inline-block";
        gdivEmpresa.style.display="inline-block";
        gdivsoftware.style.display="none";
        gdivservicios.style.display="none";
        gdivdesarrolloweb.style.display="none";
        gdivclientes.style.display="none";
        gdivcontacto.style.display="none";

       
        var mnuEmpresa=document.getElementById("mnu_Empresa");
        var mnusoftware=document.getElementById("mnu_software");
        var mnuservicios=document.getElementById("mnu_servicios");
        var mnudesarrolloweb=document.getElementById("mnu_desarrolloweb");
        var mnuclientes=document.getElementById("mnu_clientes");
        var mnucontacto=document.getElementById("mnu_contacto");

        


      


            
        mnuEmpresa.addEventListener("click",menuEmpresa,false);
        //mnuEmpresa.addEventListener("mouseover",menuEmpresa,false);

        mnusoftware.addEventListener("click",menusoftware,false);
        //mnusoftware.addEventListener("mouseover",menusoftware,false);

        mnuservicios.addEventListener("click",menuservicios,false);
        //mnuservicios.addEventListener("mouseover",menuservicios,false);


        mnudesarrolloweb.addEventListener("click",menudesarrolloweb,false);
        //mnudesarrolloweb.addEventListener("mouseover",menudesarrolloweb,false);

        
        mnuclientes.addEventListener("click",menuclientes,false);
        //mnuclientes.addEventListener("mouseover",menuclientes,false);

        
        mnucontacto.addEventListener("click",menucontacto,false);
        //mnucontacto.addEventListener("mouseover",menucontacto,false); 

        iconmenu.addEventListener("click",menuvertical,false);
        
        
    }
    



    function menuvertical(){

        if(gulmenuprincipal.style.display === 'inline-block')
            {gulmenuprincipal.style.display = 'none'}

        else
            {gulmenuprincipal.style.display = 'inline-block'}

    }

/* 
    function menuhorizontal(){

        if (window.matchMedia("(max-width: 1012px)").matches){

                    if (gulmenuprincipal.style.display === 'none'){

                        gulmenuprincipal.style.display = 'block';
                        //alert(gulmenuprincipal.style.display); 
                    }
  
                    else{
                        gulmenuprincipal.style.display = 'none';
                        //alert(gulmenuprincipal.style.display);
                    } 
 
                }    
            
                else{
                    gulmenuprincipal.style.display = 'flex';

                }

    }
     */
  
    function menuEmpresa(){

       /*  var fmenuprincipal = document.getElementById('ul_menu_principal');

        if(fmenuprincipal.style.display === 'block'){

            fmenuprincipal.style.display = 'none';

        }

 */
            gulmenuprincipal.style.display = 'none';
    
            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="inline-block";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }

    function menusoftware(){
    

            gulmenuprincipal.style.display = 'none';

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="inline-block";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menuservicios(){

            gulmenuprincipal.style.display = 'none';

            /*alert("hola");*/
            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="inline-block";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menudesarrolloweb(){

            gulmenuprincipal.style.display = 'none';
        

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="inline-block";
            gdivclientes.style.display="none";
            gdivcontacto.style.display="none";

        }


        function menuclientes(){

            gulmenuprincipal.style.display = 'none';

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="inline-block";
            gdivcontacto.style.display="none";

        }


        function menucontacto(){

            gulmenuprincipal.style.display = 'none';
        

            gdivcentral.style.display="inline-block";
            gdivEmpresa.style.display="none";
            gdivsoftware.style.display="none";
            gdivservicios.style.display="none";
            gdivdesarrolloweb.style.display="none";
            gdivclientes.style.display="none";
            gdivcontacto.style.display="inline-block";

        }

window.addEventListener("load",main,false);
