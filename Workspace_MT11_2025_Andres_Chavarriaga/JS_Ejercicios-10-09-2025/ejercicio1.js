function par(){
    let esnumeropar = document.getElementById("esPar");
    esnumeropar = parseInt(esnumeropar.value);
    if (esnumeropar % 2 == 0){
        alert("Es un número par.");
        console.log("Es un número par.");
    }
    else {
        alert("Es un número impar.");
        console.log ("Es un número impar.");
    }
}