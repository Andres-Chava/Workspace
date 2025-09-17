function miNombre() {
    let miNombre = document.getElementById("texto");
    
    let primerNombre = document.createElement("span");
    let apellido = document.createElement("i");

    primerNombre.innerHTML = "Andrés ";
    apellido.innerHTML = "Chavarriaga";

    miNombre.appendChild(primerNombre);
    miNombre.appendChild(apellido);
}