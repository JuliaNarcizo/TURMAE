  <button id="botao">clique-me</button>


    var botao = document.querySelector('#botao');

    function botaoHandler() {

        alert('Botão clicado');
    }

    botao.addEventListener('click', botaoHandler());


<input class="frase"><button class="botao">Copiar</button><span class="copia"></span>
  
  
  <input class="frase"><button class="botao">Copiar</button><span class="copia"></span>

    var inputFrase = document.querySelector('.frase');
    var botao = document.querySelector('.botao');
    var copia = document.querySelector('.copia');

    function botaoHandler() {


    }

    botao.addEventListener('click', botaoHandler);
 

                
                
                var form = document.querySelector('.adicionar-tarefa');

var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event){
 event.preventDeFault();
  console.log("Oi eu sou o botão e fui clicado");})

    
                 console.log("Oi Mundo")
                 console.log (document)
                 console.log (document.querySelector("titulo"))
       titulo.addEventListener("click", mostraMensagem)
       function mostraMensagem(){
           console.log("Ola fui clicado!")
       }
                var form = document.querySelector("#form-adicionar")
                 console.log(form.nome)
                 console.log(form.horario)
                console.log(form.pessoas)
                
                var reservaTr = document.createElement("tr")
                
                
                var nomeTd = document.createElement("td")
                var horarioTd = document.createElement ("td")
                var pessoasTd = document.createElement("td")
                
                nomeTd.textContent = nome 
                horarioTd.textContent = horario
                pessoasTd.textContent = quantidade
                
                reservaTr.appendChild(nomeTd)
                reservaTr.appendChild(horarioTd)
                reservaTr.appendChild(pessoasTd)
                
                var tabela = document.querySelector("#tabela-clientes")
                
                tabela.appendChild(reservaTr)
                
<head>
       
            
                
                var form = document.querySelector('.adicionar-tarefa');
var botao = document.querySelector('#botao-adicionar');
botao.addEventListener("click", function()){
    console.log(form.tarefa.value); 
    
                 console.log("Oi Mundo")
                 console.log (document)
                 console.log (document.querySelector("titulo"))
       titulo.addEventListener("click", mostraMensagem)
       function mostraMensagem(){
           console.log("Ola fui clicado!")
       }
                var form = document.querySelector("#form-adicionar")
                 console.log(form.nome)
                 console.log(form.produto)
                console.log(form.kg)
                
                                
                var tabela = document.querySelector("#tabela-clientes")
                
                tabela.appendChild(pacienteTr)
