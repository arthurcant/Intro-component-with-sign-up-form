function main() {
    fist_name();




    
}

function fist_name(){

    let fistName = document.getElementsByClassName("textToSee")[0]; 
    let message = document.getElementsByClassName("icon-erro")[0];
    let inputs = document.getElementsByClassName("area-inputs")[0];
    
    if(fistName.value.Length == 0){
        window.alert(`${fistName}`);
    }else {
        window.alert(`fistName tá vazio.`);
    }
    //if(fistName.value)



}





