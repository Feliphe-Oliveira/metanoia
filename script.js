const btn_metanoia = document.getElementById('btnMe')
btn_metanoia.addEventListener('click',()=>{
    const cod = 1111
    const senha = document.getElementById('senha')

    if(senha.value == cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }
})