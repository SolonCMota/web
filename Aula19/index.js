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

botaoDiminuir.addEventListener("click",
    ()=>{
        const valorAtual = Number(contador.textContent);
        contador.textContent = valorAtual-1;
        botaoDiminuir.classList.add("btn");
        botaoAumentar.classList.remove("btn");
});

 const input = document.querySelector("input");
 input.addEventListener("input",()=>{console.log(input.value);});

 //Adicionando estilos Inline no elemento contador
 contador.style.color = 'red';
 contador.style.padding = "0 2rem";
 contador.style.backgroundColor = "grey";
 contador.style.border = "1px solid #AAA";
// contador.style.width = "150px";

 //manipular classes
 console.log(botaoDiminuir.classList);
 botaoDiminuir.classList.add("btn");
 botaoDiminuir.classList.remove("btn");

 const themeButton = document.querySelector("#Theme");

 let darkTheme = false;

 themeButton.addEventListener("click",
         ()=>{
            darkTheme = !darkTheme;
           
             const body = document.querySelector("body");
            
             if(darkTheme){
                 body.style.backgroundColor = "black";
                 body.style.color = "white";
             }
             else{
                 body.style.backgroundColor = "white";
                 body.style.color = "black";
             }                      

 });
