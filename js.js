function main() {
    fist_name();
    last_name();
    email();
    password();
}

function fist_name() {

    let fistName = document.getElementsByClassName("textToSee")[0];
    let message = document.getElementsByClassName("menssage")[0];
    let messageIcon = document.getElementsByClassName("icon-erro")[0];
    let areasInputs = document.getElementsByClassName("area-inputs")[0];

    if (fistName.value.length > 0) {
        areasInputs.classList.remove("erro");
        messageIcon.style.opacity = "0";
        message.style.display = "none";
    } else {
        areasInputs.classList.add("erro");
        messageIcon.style.opacity = "1";
        message.style.display = "block";

    }

}

function last_name() {

    let lastName = document.getElementsByClassName("textToSee")[1];
    let message = document.getElementsByClassName("menssage")[1];
    let messageIcon = document.getElementsByClassName("icon-erro")[1];
    let areasInputs = document.getElementsByClassName("area-inputs")[1];

    if (lastName.value.length > 0) {

        areasInputs.classList.remove("erro");
        messageIcon.style.opacity = "0";
        message.style.display = "none";
    } else {
        areasInputs.classList.add("erro");
        messageIcon.style.opacity = "1";
        message.style.display = "block";

    }

}


function email() {

    let message = document.getElementsByClassName("menssage")[2]; // Manipula as mensagem que vão aparecer se o usuário digitou algo errado
    let messageIcon = document.getElementsByClassName("icon-erro")[2]; // aparecer o icone erro
    let messageStore = []; // Array para amostra os erros para o usuário

    let email = document.getElementsByClassName("textToSee")[2];
    let areasInputs = document.getElementsByClassName("area-inputs")[2];

    const emailContent = email.value;

    if (emailContent.length > 1) {
        if (emailContent.indexOf("@") > -1) {
            let index_aroba = emailContent.indexOf("@");

            if ( !((emailContent[index_aroba-1] == "") || (emailContent[index_aroba-1] == null)) &&  !(emailContent[index_aroba+1] == "."))  {

                if (!(emailContent[index_aroba + 1] === "" || emailContent[index_aroba + 1] == null) && !((emailContent[index_aroba + 2] === "") || emailContent[index_aroba + 2] == null)) {
                    if (emailContent.indexOf(".") > -1) {
                        let indexDot = emailContent.indexOf(".");
                        if ((emailContent[indexDot + 1] == seachLetter(emailContent, "c")) && (emailContent[indexDot + 2] == seachLetter(emailContent, "o") && (emailContent[indexDot + 3] == seachLetter(emailContent, "m")))) {
                            areasInputs.classList.remove("erro");
                            message.style.display = "none";
                            messageIcon.style.opacity = "0";
                        } else {
                            messageStore.push(`Email cannot lack letters after . <br>`);
                            areasInputs.classList.add("erro");
                            message.style.display = "block";
                            messageIcon.style.opacity = "1";
                        }

                    } else {
                        messageStore.push(`Email cannot lack the signal . <br>`);
                        areasInputs.classList.add("erro");
                        message.style.display = "block";
                        messageIcon.style.opacity = "1";
                    }

                } else {
                    messageStore.push(`Email cannot lack letters after @.<br>`);
                    areasInputs.classList.add("erro");
                    message.style.display = "block";
                    messageIcon.style.opacity = "1";

                }
            } else {
                messageStore.push(`Email cannot lack a letter before @ or after @ cannot have a dot..<br>`);
                areasInputs.classList.add("erro");
                message.style.display = "block";
                messageIcon.style.opacity = "1";

            }

        } else if (emailContent.indexOf("@") == -1) {
            messageStore.push(`Email cannot lack @ in its text.<br>`);

            areasInputs.classList.add("erro");
            message.style.display = "block";
            messageIcon.style.opacity = "1";

        }

    } else if (emailContent.length == 0) {
        areasInputs.classList.add("erro");
        message.style.display = "block";
        messageIcon.style.opacity = "1";

        messageStore.push(`Email cann't be empty. <br>`);
    }


    message.innerHTML = messageStore.join("");
    message.style.display = "block";

}

function password() {

    let verify01 = false, verify02 = false;
    let message = document.getElementsByClassName("menssage")[3];
    let messageIcon = document.getElementsByClassName("icon-erro")[3];
    let messageStore = [];

    let password = document.getElementsByClassName("textToSee")[3];
    let areasInputs = document.getElementsByClassName("area-inputs")[3];

    const passwordContent = password.value;

    if (passwordContent.length >= 8) {
        if (onlyNumber(passwordContent)) {
            messageStore.push(`Password cannot only has numbers. <br>`);

            areasInputs.classList.add("erro");
            message.style.display = "block";
            messageIcon.style.opacity = "1";
        } else {
            if (seachLetterUpperCase(passwordContent, passwordContent)) {
                verify01 = true;
            } else {
                messageStore.push("The password need at least one upper letter. <br>");
            }

            if (seachLetterSpecial(passwordContent)) {
                verify02 = true;
            } else {
                messageStore.push("The password need at least one character special <br> ! @ # $ % & * ( ) + = - _ § { [ } ] one of these. <br>");
            }

            if (verify01 && verify02) {
                areasInputs.classList.remove("erro");
                message.style.display = "none";
                messageIcon.style.opacity = "0";
            } else {
                areasInputs.classList.add("erro");
                message.style.display = "block";
                messageIcon.style.opacity = "1";
            }
        }


    } else if (passwordContent.length < 8) {
        messageStore.push(`Password need has at least 8 positions. <br>`);

        areasInputs.classList.add("erro");
        message.style.display = "block";
        messageIcon.style.opacity = "1";
    }

    message.innerHTML = messageStore.join("");
    message.style.display = "block";

}

function seachLetter(string, word) {

    for (let y in string) {
        if (string[y] === word) {
            return word;
        }
    }

    return false;
}

function seachLetterSpecial(string) {

    for (let y in string) {
        if (["!", "@", "#", "$", "%", "&", "*", "(", ")", "+", "=", "-", "_", "§", "{", "[", "}", "]", "}"].indexOf(string[y]) > -1) {
            return true;
        }
    }

    return false;
}


function onlyNumber(string) {
    let amountNumber = string.length;
    let verify = 0;
    for (let y in string) {
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(string[y]) > -1) {

            verify++

            if (verify == amountNumber) {
                return true
            }
        }
    }

    return false;
}


function isNumber(string) {

    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(string) > -1) {

        return true
    }

    return false;
}

function seachLetterUpperCase(string, string02) {

    for (let y in string) {
        if (isNumber(string[y])) {
            continue;
        } else {
            if (string[y] === string02[y].toUpperCase()) {
                return true;
            }
        }
    }

    return false;
}

