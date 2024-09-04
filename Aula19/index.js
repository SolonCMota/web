 const botaoAumentar = document.querySelector("#Aumentar");
 const botaoDiminuir = document.querySelector("#Diminuir");
 const contador = document.querySelector("#contador");
 botaoAumentar.addEventListener("click",
     ()=>{
         const valorAtual = Number(contador.textContent);
         contador.textContent = valorAtual+1;
         botaoAumentar.classList.add("btn");
         botaoDiminuir.classList.remove("btn");
 });

