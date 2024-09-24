const avanca = document.querySelectorAll('.btn-proximo');
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
        
    button.addEventListener('click', (event) => {
        const ending = event.target.getAttribute('data-end');
        changetitleBasedOnEnding(ending);
        
        });
    });

});



function changetitleBasedOnEnding(ending) {
    if (ending === "final1") {
        document.title = "ACM - Final 1"
    } else if (ending === "final2a") {
        document.title = "ACM - Final 2A"
    } else if (ending === "final2b") {
        document.title = "ACM - Final 2B"
    } else if (ending === "final3a") {
        document.title = "ACM - Final 3A"
    } else if (ending === "final3b") {
        document.title = "ACM - Final 3B"
    } else if (ending === "final4") {
        document.title = "ACM - Final 4"
    }
    
}