$(document).ready(function(){
    //Slider   
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });
    }

    //Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ante quam. Vivamus fringilla bibendum ligula in porttitor. Etiam nibh orci, elementum eu enim id, mattis tristique lectus. Ut dictum scelerisque aliquet. In ut nisi et metus condimentum placerat."
            },
            {
                title: "Prueba de titulo 2",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ante quam. Vivamus fringilla bibendum ligula in porttitor. Etiam nibh orci, elementum eu enim id, mattis tristique lectus. Ut dictum scelerisque aliquet. In ut nisi et metus condimentum placerat."
            },
            {
                title: "Prueba de titulo 3",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ante quam. Vivamus fringilla bibendum ligula in porttitor. Etiam nibh orci, elementum eu enim id, mattis tristique lectus. Ut dictum scelerisque aliquet. In ut nisi et metus condimentum placerat."
            },
            {
                title: "Prueba de titulo 4",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ante quam. Vivamus fringilla bibendum ligula in porttitor. Etiam nibh orci, elementum eu enim id, mattis tristique lectus. Ut dictum scelerisque aliquet. In ut nisi et metus condimentum placerat."
            },
            {
                title: "Prueba de titulo 5",
                date: new Date(),
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed ante quam. Vivamus fringilla bibendum ligula in porttitor. Etiam nibh orci, elementum eu enim id, mattis tristique lectus. Ut dictum scelerisque aliquet. In ut nisi et metus condimentum placerat."
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
                <a href="#" class="boton-mas">Leer más</a>
            </article>
            <br>
        `;

        $("#posts").append(post);
    });
}

    let togreen = $("#to-green");
    let tored = $("#to-red");
    let toblue = $("#to-blue");

    let tema = $("#theme");

    togreen.click(function(){
        tema.attr("href","css/green.css");
    });
    tored.click(function(){
        tema.attr("href","css/red.css");
    });
    toblue.click(function(){
        tema.attr("href","css/blue.css");
    });

    let subirpagina = $("#subir-pagina");
    subirpagina.click(function(){
        $("html, body").animate({scrollTop:0}, 500);
        return false;
    });

    let botonlogin = $("#boton-login");

    botonlogin.click(function(){
        let nombre = $("#name").val();
        let correo = $("#email").val();
        let pass = $("#password").val();
        let objeto = {
            name: nombre,
            email: correo,
            password: pass
        }

        localStorage.setItem(correo,JSON.stringify(objeto));
        imprimirDeStorage(correo);
    });

    //Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }
    
    if(window.location.href.indexOf('reloj') > -1){
        let tiempo = setInterval(function(){
            let form_hora = $("#horas");
            let form_minutos = $("#minutos");
            let form_segundos = $("#segundos");
            let fecha = new Date();
            let horas = fecha.getHours();
            let minutos = fecha.getMinutes();
            let segundos = fecha.getSeconds();
            let segundostext;
            let minutostext;
            let horastext;
            
            if(segundos<=9){
                segundostext="0"+segundos;
            }else{
                segundostext=segundos;
            }
            if(minutos<=9){
                minutostext="0"+minutos;
            }else{
                minutostext=minutos;
            }
            if(horas<=9){
                horastext="0"+horas;
            }else{
                horastext=horas;
            }
            form_hora.text(horastext);
            form_minutos.text(minutostext);
            form_segundos.text(segundostext);
            
        },1000);
    }

    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
          });
    
    }
});

function imprimirDeStorage(clave){
    if(localStorage.length>0){
        let texto = JSON.parse(localStorage.getItem(clave));
        let nombre = texto["name"];
        let email = texto["email"];
        let password = texto["password"];
        let parrafo = $("#texto-personal");
        parrafo.empty();
        parrafo.html("nombre: "+nombre+"<br><br>"+"email: "+email);

        let color = $("#logo").css("background-color");
        parrafo.css("color",color);
        parrafo.css("font-size",25);
        
    }
}

