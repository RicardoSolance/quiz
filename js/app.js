let python = document.getElementById('python'),
    enviar = document.querySelector('.enviar');

console.log(python.checked)

function display(){
    if(python.checked){
        return python.value
    }else{
        return 'No está'
    }
}

enviar.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('hola')
    console.log(display())
});