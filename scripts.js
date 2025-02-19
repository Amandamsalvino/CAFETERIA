const modal = document.querySelector(".modal")

const mascaraModal = document.querySelector(".mascara-modal")




function mostrarModal() {

    modal.style.left = "50%"
    
    mascaraModal.style.visibility = "visible"

}

function esconderModal(){
    
    mascaraModal.style.visibility = "hidden"
    modal.style.left = "-30%"

}

