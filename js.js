function main() {
    // fist_name();
    // last_name();
    email();    
}

function fist_name(){

    let fistName = document.getElementsByClassName("textToSee")[0]; 
    let message = document.getElementsByClassName("icon-erro")[0];
    let areasInputs = document.getElementsByClassName("area-inputs")[0];
    
    if(fistName.value.length > 0){
        
        areasInputs.classList.remove("erro");
        message.style.display = "none";
    }else {
        areasInputs.classList.add("erro");
        message.style.display = "block";
    }

}

function last_name(){
    
    let lastName = document.getElementsByClassName("textToSee")[1]; 
    let message = document.getElementsByClassName("icon-erro")[1];
    let areasInputs = document.getElementsByClassName("area-inputs")[1];
    
    if(lastName.value.length > 0){
        
        areasInputs.classList.remove("erro");
        message.style.display = "none";
    }else {
        areasInputs.classList.add("erro");
        message.style.display = "block";
    }

}


function email(){

    let message = document.getElementsByClassName("menssage")[2]; // Manipula as mensagem que vão aparecer se o usuário digitou algo errado
    let messageIcon = document.getElementsByClassName("icon-erro")[2]; // aparecer o icone erro
    let messageStore = []; // Array para amostra os erros para o usuário

    let email = document.getElementsByClassName("textToSee")[2]; 
    let areasInputs = document.getElementsByClassName("area-inputs")[2];

    const emailContent = email.value;

    if(emailContent.length > 1){
        if(emailContent.indexOf("@") > -1) {
            let index_aroba = emailContent.indexOf("@");

            if((emailContent[index_aroba+1] === "" || emailContent[index_aroba+1] == null ) && (emailContent[index_aroba+2] === "") || emailContent[index_aroba+2] == null){
                alert("Email tem @ mais depois disso não tem mais nada.");  

            }
        }else if(emailContent.indexOf("@") == -1) {
        messageStore.push(`Email cannot lack de @ in its text.<br>`);

        }

    }else if(emailContent.length == 0) {
        areasInputs.classList.add("erro");
        message.style.display = "block";

        messageStore.push(`Email cann't be empty. <br>`);
    }
    
    // messageStore.push(`Password cann't be empty <br>`);

    message.innerHTML = messageStore.join("");
    message.style.display = "block";

}

function seachLetter(string, word) {
    
    for(let y in string){
        if(string[y] === word){

        }
        

    }
}

