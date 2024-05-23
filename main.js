let listaUsuarios = [
    {nome:"Enzo Moura", email:"enzoo@gmail.com", senha:"123"},
    {nome:"Luis Gomes", email:"luis@gmail.com", senha:"456"},
    {nome:"Caroline Assis", email:"assis@gmail.com", senha:"789"},
]
 
function validaLogin(input1,input2,event) {

    let msgStatus;
    try{
        msgStatus = document.querySelector(".valida");
    

for (let x = 0; x < listaUsuarios.length; x++) {    
   if((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha) ){
        msgStatus.setAttribute("class","sucesso");
        msgStatus.innerText = alert("Login realizado com SUCESSO!");
        
        setTimeout(()=>{
            msgStatus.setAttribute("class","valida");
            msgStatus.innerText = "";
            window.location.href = "index.html";
        },1000);
        
        return true;
    }
}
    msgStatus.setAttribute("class","erro");
    msgStatus.innerText = alert("Nome de usuário ou senha inválidos!");

    setTimeout(()=>{
        msgStatus.setAttribute("class","valida");
        msgStatus.innerText = "";
    },5000);
    
}catch(error){
    msgStatus = ( document.querySelector(".sucesso") ? document.querySelector(".sucesso") : document.querySelector(".erro"));
}

    return false;
}
