let verdadera = document.querySelectorAll('.verdadera'),
    enviar = document.querySelector('.enviar'),
    field = document.querySelectorAll('fieldset'),
    perf = document.querySelectorAll('.perf');

function respuestas(){
    for(let i=0;i<perf.length; i++){
        if(perf[i].checked){
            let parrafo = document.createElement('P');
            verdadera[i].classList.add('correcta');
            parrafo.innerHTML='CORRECTO!!!!';
            field[i].appendChild(parrafo);
        }else{
            //verdadera[i].classList.add('incorrecto');
            parrafo = document.createElement('P'),
            parrafo.innerHTML='incorrecto ):';
            field[i].appendChild(parrafo);
        }
    }
}

enviar.addEventListener('click', (e) =>{
    e.preventDefault()
    
    respuestas()
});