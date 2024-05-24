if (!localStorage.getItem('listaUsuarios')) {
    let listaUsuarios = [
        {nome: "Enzo Moura", email: "enzoo@gmail.com", senha: "123"},
        {nome: "Luis Gomes", email: "luis@gmail.com", senha: "456"},
        {nome: "Caroline Assis", email: "assis@gmail.com", senha: "789"},
    ];
    localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
}

function validaLogin(input1, input2) {
    let msgStatus;
    try {
        msgStatus = document.querySelector(".valida");
        
        
        let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
        
        for (let x = 0; x < listaUsuarios.length; x++) {
            if ((input1.value == listaUsuarios[x].email) && (input2.value == listaUsuarios[x].senha)) {
                msgStatus.setAttribute("class", "sucesso");
                alert("Login realizado com SUCESSO!");
                
                
                localStorage.setItem('usuarioLogado', listaUsuarios[x].email);

                setTimeout(() => {
                    msgStatus.setAttribute("class", "valida");
                    msgStatus.innerText = "";
                    window.location.href = "index.html";
                }, 1000);

                return true;
            }
        }
        msgStatus.setAttribute("class", "erro");
        alert("Nome de usuário ou senha inválidos!");

        setTimeout(() => {
            msgStatus.setAttribute("class", "valida");
            msgStatus.innerText = "";
        }, 5000);

    } catch (error) {
        msgStatus = (document.querySelector(".sucesso") ? document.querySelector(".sucesso") : document.querySelector(".erro"));
    }
    return false;
}

function volta() {
    history.back();
}

