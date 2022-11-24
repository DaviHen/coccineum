;(function(){
    "use strict";

    let toTopBtn = document.getElementById("toTopBtn")

    let mobileBtn = document.getElementById("mobile-menu-btn")
    let headerMobileUl = document.getElementsByClassName('header-nav-ul')[0]

    let myForm = document.getElementById('ContactForm')
    let textArea = document.getElementById('contactTextArea')
    let characterNumber = document.getElementById('textAreaSpanCounter')
    let maxNumOfCharacters = 400

    
    toTopBtn.addEventListener('click', goToTop)
    
    mobileBtn.addEventListener('click', toggleMobileMenu)

    textArea.addEventListener('input', countCharacters)
    countCharacters()
    
    // Função que conta caracteres dentro de form
    function countCharacters(){
        let inputedNumOfCharacters = textArea.value.length
        textArea.maxLength = maxNumOfCharacters

        characterNumber.textContent = `${inputedNumOfCharacters} / ${maxNumOfCharacters}`
    }

    // Parar envio de formulário
    myForm.addEventListener('submit', (e) => {
        alert("Formulário enviado de mentirinha")
        e.preventDefault()
    })

    // Mobile Menu

    function toggleMobileMenu() {
        headerMobileUl.classList.toggle("activeMobile")
    }

    // Verificar tamanho e adicionar botão no scroll
    window.onscroll = () => {
        if(window.innerWidth < 600){
            toTopBtn.style.display = "none"
        } else{
            displayTopBtn()
        }
    }

    //Display top top Btn

    function displayTopBtn(){
        if(document.body.scrollTop > 750 || document.documentElement.scrollTop > 750){
            toTopBtn.style.display = "block"
        } else{
            toTopBtn.style.display = "none"
        }
    }

    // Go to top function

    function goToTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})()