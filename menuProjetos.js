let btnMenu = document.getElementById('abrir-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay');
let btnFechar = document.getElementById('btn-fechar');

btnMenu.addEventListener('click', () => {
  menu.classList.add('abrir-menu');
});

btnFechar.addEventListener('click', () => {
  menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu');
});

//Fechar o menu e rolar suavemente ao clicar em links do menu mobile//

const linksMenuMobile = menu.querySelectorAll('nav ul li a')

linksMenuMobile.forEach(link=> {
    link.addEventListener('click', (event) => {
        event.preventDefault() //impede o comportamento padrão do link//

        //Fecha o menu//
        menu.classList.remove('abrir-menu')

        //Obtém o destino do link (hash)//
        const href = link.getAttribute('href')
        const targetElement = document.querySelector(href)

        if(targetElement) {
            //Rola suavemente até a sessão//
            targetElement.scrollIntoView({ behavior: 'smooth' })
        }
    })
})