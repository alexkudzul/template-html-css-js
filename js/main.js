$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode:'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager:true
        });
    }
    
    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Post 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. '
            },
            {
                title: 'Post 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. '
            },
            {
                title: 'Post 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. '
            },
            {
                title: 'Post 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. '
            },
            {
                title: 'Post 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " +moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo. '
            }
        ];
    
        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
    
            $("#posts").append(post);
        });
    }
    


    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        // attr modifica el atributo href
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        // attr modifica el atributo href
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        // attr modifica el atributo href
        theme.attr("href", "css/blue.css");
    });

    // PLUS, con local storage, guardar el css que se tiene elegido, cuando se actualice la pantalla hacer una 
    // condicion, sacar el valor que estan en local storage, en funcion del valor, poner el tema seleccionado


    // Scroll arriba de la web 

    $(".subir").click(function(e){
        // hace que no se redirecciones a otra pagina el href
        e.preventDefault();

        // hacer un animate sobre html y body de la pagina
        $('html, body').animate({
            // 0, lo lleva hasta arriba, en el pixel 0 
            scrollTop:0
            // 500 ml
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){

        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong> Biemvenido "+form_name+ "</strong> ");
        about_parrafo.append(" <a href= '#' id='logout'> Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

    }

    // Acordeon

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj

	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
    }
    
    // Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

        // metodo de jQuery Form Validator
		$.validate({
            // Lang solo carga con internet, revisar
            // lang: 'es',
            // Indica que el mensaje de error se vaya arriba
            errorMessagePosition: 'top',
            // Muestra todo los errores arriba con el scroll
		    scrollToTopOnError: true
		});

	}

});