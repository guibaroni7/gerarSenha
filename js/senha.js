document.querySelector('#btnSenha').addEventListener('click', () =>{

    // recuperar o elemento HTML que receberá a senha
    getSenha = document.querySelector('#senha');
    const caracteres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','U','V','W','X','Y','Z','!','@','#','$','%','&','¨','0','1','2','3','4','5','6','7','8','9'];

    let novaSenha = '';

    // for para gerar a senha = 67 caracteres
    for (let i = 0; i < 30; i++) {
        // sortear um numero que representa o indice do array
        let numero = Math.round(Math.random()*66)

        // montar a senha - atribuir o conteudo do indice à variavel novaSenha
        novaSenha+=caracteres[numero];
    }

    // atribuindo a senha na pagina
    getSenha.textContent = novaSenha;

    // getSenha.execCommand()



    
});


// Função que copia a senha para a área de transferência
// document.execCommand('copy') seria a instrução mais comum , foi 
// sustituida pela API de area de transferência, adicionada aos 
// navegadores. Por ser uma API seus métodos são Promise(), então
// podemos usar await para fazer alguma coisa apóss a seua execução.
// para copiar use o método writeText(copiar ARQUIVOS), sendo disponível
// ao objeto navigator 

document.querySelector('#btnCopia').addEventListener('click', () =>{
    const senha = document.querySelector('#senha').innerText;
    if(senha.length ==0){
        alert('Precisa gerar a senha')

    }
    else {

        if(navigator.clipboard){
            navigator.clipboard.writeText(senha).then(() =>{
                alert('Senha Copiada')
            })
            
            
            
        }
    }
})