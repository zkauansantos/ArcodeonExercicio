const itemPerguntasRespostas = document.querySelectorAll('.item');

itemPerguntasRespostas[0].classList.remove('ativo')

itemPerguntasRespostas.forEach((item)=>{
    item.addEventListener('click', ()=>{
    const itemAtivoAtual = document.querySelector('.ativo')
    

    if (itemAtivoAtual ){
     itemAtivoAtual.classList.remove('ativo')
    }

    item.classList.add('ativo')
    });
});





