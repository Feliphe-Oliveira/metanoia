const btn_metanoia = document.getElementById('btnMe')
btn_metanoia.addEventListener('click',()=>{
    const cod = 'lado'
    const senha = document.getElementById('senha')

    if(senha.value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }else if(senha.value == ''){
        alert('Preencha os dados solicitados')
    }else{
        alert('Senha incorreta')
    }
})