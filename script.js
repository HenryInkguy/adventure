const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

        changeh1BasedOnPhase(proximoPasso);
        
    document.querySelectorAll('.btn-proximo').forEach(button => {
        button.addEventListener('click', function () {
            const ending = this.getAttribute('data-end');
            if (ending) {
                changetitleBasedOnEnding(ending);
            }
        });
    });
        
    });

});

function changeh1BasedOnPhase(proximoPasso) {
    const h1Content = {
        'passo-0': 'Sua história começa aqui...',
        'passo-1': 'Fábrica abandonada...',
        'passo-2': 'Buscando ajuda...',
        'passo-3': 'Andares subterrâneos...',
        'passo-4': 'Investigando os laboratórios...',
        'passo-5': 'Apunhalado...',
        'passo-6': 'Apunhalado...',
        'passo-7': 'Continuando sua pesquisa...',
        'passo-8': 'Investigando o local...',
        'passo-9': 'Explorando o subterrâneo...',
        'passo-10': 'Capturado pelo inimigo...',
        'passo-11': 'Reencontro...'
    };

    const h1 = document.querySelector('main h1');

    if (h1Content[proximoPasso]) {
        h1.innerHTML = `<i>${h1Content[proximoPasso]}</i>`;

    }
}

function changetitleBasedOnEnding(ending) {
    if (ending === "final1") {
        document.title = "ACM - Final 1"
    } 
    else if (ending === "final2a") {
        document.title = "ACM - Final 2A"
    } 
    else if (ending === "final2b") {
        document.title = "ACM - Final 2B"
    } 
    else if (ending === "final3a") {
        document.title = "ACM - Final 3A"
    } 
    else if (ending === "final3b") {
        document.title = "ACM - Final 3B"
    } 
    else if (ending === "final4") {
        document.title = "ACM - Final 4"
    }
    
}

console.log("Hello teacher :)");