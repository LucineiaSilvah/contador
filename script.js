let contador = 0;
let valor = document.querySelector('#valor')
const botoes = document.querySelectorAll('.btn')

botoes.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
  const estilo = e.currentTarget.classList
  if(estilo.contains('decremento')){
    contador--;
 valor.textContent = contador
 if(contador < 0){
  valor.style.color = 'red';
 }
  }else if(estilo.contains('incremento')){
    contador ++;
    valor.textContent = contador;
    if (contador > 0) {
      valor.style.color = "green"
    }
  }else if(estilo.contains('reset')){
    contador = 0;
    valor.textContent = contador
    valor.style.color = '#fff'
  }


  })
  
    
  
})

