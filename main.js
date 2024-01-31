onload = () => {
        document.body.classList.remove("container");
    };
    
    document.addEventListener('DOMContentLoaded', function () {
        const audio = document.querySelector('audio');
        const introText = document.querySelector('.intro-text p');
    
        const phrases = [
            "Como las flores bailan con la brisa",
            "tu sonrisa hace bailar mi corazón 🫣",
            "Holaaa, ¿puedo robarte un minuto de tu tiempo?",
            "Bueno lo que dure esta canción 🤭",
            "Estoy aquí, como siempre, molestándote un poquito",
            "pero con la mejor intención, ¡prometo que no es nada malo! 😄",
            "Eres una chica increíble, ¿lo sabías?",
            "Aunque a veces pareces un poco fría",
            "eso solo le da un toque más lindo a tu misterio",
            "JAJAJA ¡y me encanta! 😄",
            "Llegaste a mi vida de la manera más inesperada",
            "No te busqué, pero de repente estás ahí",
            "y en muy poco tiempo, te volviste alguien especial",
            "Tal vez no somos los más cercanos en persona",
            "pero ¿sabes qué? Me encantaría cambiar eso",
            "¿Qué te parece si algún día salimos a solas?",
            "No como una cita formal, porque entiendo tu posición",
            "pero me encantaría tener la oportunidad de salir juntos",
            "romper un poco esa posible tensión",
            "y simplemente disfrutar de un momento relajado",
            "Imagina compartir risas, historias, y quién sabe qué más",
            "¿Qué te parece la idea, estrellita?",
            "Error de tipeo, quise decir",
            "¿Qué te parece la idea, Leonela?",
            "Por supuesto, respetaré tu respuesta, sea cual sea",
            "solo quiero asegurarme de que te sientas cómoda",
            "y de que sepas que valoro mucho",
            "lo que sea que estemos construyendo😏",
            "Bueno, no te quito más tu tiempo",
            "Ah, y antes de que me olvide, quiero decirte ",
            "que para mí, eres como esa melodía de Trueno",
            "que nunca me canso de escuchar",
            "¡Mi Mamichula!😳",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            
            

            // Agrega más frases según sea necesario
        ];
    
        let index = 0;
    
        function changePhrase() {
            introText.textContent = phrases[index];
            index = (index + 1) % phrases.length;
        }
    
        setInterval(changePhrase, 5000);
    
        // Reproducir automáticamente al cargar la página
        audio.play();
    
        // Puedes agregar más lógica según tus necesidades para controlar la reproducción del audio.
        // Por ejemplo, puedes pausar el audio al hacer clic en algún elemento.
        document.body.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
    
        // Otros ejemplos de eventos que puedes agregar para controlar la reproducción:
        // document.body.addEventListener('mouseover', function() {
        //   audio.play();
        // });
    
        // document.body.addEventListener('mouseout', function() {
        //   audio.pause();
        // });
    
        // Puedes ajustar la lógica según tus preferencias y requisitos.
    });
    