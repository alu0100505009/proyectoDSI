(function() {
    "use strict";
    $(document).ready(function(){
        
        //================================ INICIALIZACION ELEMENTOS MATERIALIZE =============================================//
        $(".button-collapse").sideNav();//barra pequeña
        $('input#input_text, textarea#textarea1').characterCounter(); //formularios
        
       
        $('ul.tabs').tabs('select_tab', 'tab_id');
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

        
        //================================ MOSTRAR TAREAS PENDIENTES =============================================//
        console.log("onclic");
        $.ajax(
        {     
            type: 'GET',
            url: '/pendi',
            success: function (data) {
                console.log(data);

                if(data.length == 0)
                {
                    var alerta = '<div class="mensaje"> No tienes tareas pendientes </div>';
                    $('.tareas-pendientes').append(alerta);
                }
                else
                {
                    var div = 
                    '<div class="row">'+
                                '<ul class="collapsible" data-collapsible="accordion">';
                                
                    for(var i=0; i<data.length; i++) 
                    {
                        if(data[i].estado == "pendiente")
                        {
                            
                            div = div +
                                    '<li class="col s12" onclick="f();">'+
                                        '<div class="collapsible-header #ffffff white"><i class="material-icons">library_books</i>'+data[i].tarea+'</div>'+
                                        '<div class="collapsible-body #eceff1 blue-grey lighten-4"><p> Fecha de entrega: ' + data[i].fecha  +  '</p></div>'+
                                        '<div class="collapsible-body #eceff1 blue-grey lighten-4"><p> Descripcion: ' + data[i].informacion  + '</p></div>'+
                                    '</li>';
                        }
                    } 
                    
                    div = div + '</ul>' + '</div>';
                    $('.tareas-pendientes').append(div);

                }
            },
            error: function(){
                  alert("La pagina no esta disponible");
            }
        });
            
           
        
        
        //================================ MOSTRAR TAREAS TERMINADAS =============================================//
        console.log("onclic");
        $.ajax(
        {     
            type: 'GET',
            url: '/termi',
            success: function (data) {
                console.log(data);

                if(data.length == 0)
                {
                    var alerta = '<div class="mensaje"> Aun no has terminado ninguna tarea </div>';
                    $('.tareas-terminadas').append(alerta);
                }
                else
                {
                    var div = 
                    '<div class="row">'+
                                '<ul class="collapsible" data-collapsible="accordion">';
                                
                    for(var i=0; i<data.length; i++) 
                    {
                        if(data[i].estado == "terminada")
                        {
                            
                            div = div +
                                    '<li class="col s12" onclick="f();">'+
                                        '<div class="collapsible-header #ffffff white"><i class="material-icons">library_books</i>'+data[i].tarea+'</div>'+
                                        '<div class="collapsible-body #eceff1 blue-grey lighten-4"><p> Fecha de entrega: ' + data[i].fecha  +  '</p></div>'+
                                        '<div class="collapsible-body #eceff1 blue-grey lighten-4"><p> Descripcion: ' + data[i].informacion  + '</p></div>'+
                                    '</li>';
                        }
                    } 
                    
                    div = div + '</ul>' + '</div>';
                    $('.tareas-terminadas').append(div);

                }
            },
            error: function(){
                  alert("La pagina no esta disponible");
            }
        });
        
           



    });
    
    

    

    
    function validar()
    {
        
        
        
        
    }
    
    
    
    
    
    
    
    
})();