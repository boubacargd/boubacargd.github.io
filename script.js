function sendMail() {
    var params = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_qdp2m2p"
    const templateID = "template_yr7wght"

    emailjs.init("s7H001x_YAw6w8-Ra");
    emailjs
        .send(serviceID, templateID, params) 
        .then((res) => {

            document.getElementById("nom").value = "",
            document.getElementById("email").value = "",
            document.getElementById("sujet").value = "",
            document.getElementById("message").value = ""

            console.log(res);
            alert("Message bien envoyé!");
        })
            .catch((err) => {
            console.log(err);
            alert("Erreur lors de l'envoi du message, veuillez réessayer.");
        });

}


function openPopUp1() {
    document.getElementById("overlay1").style.display = "block";
    document.getElementById("popUp1").style.display = "block";
}
function openPopUp2() {
    document.getElementById("overlay2").style.display = "block";
    document.getElementById("popUp2").style.display = "block";
}
function openPopUp3() {
    document.getElementById("overlay3").style.display = "block";
    document.getElementById("popUp3").style.display = "block";
}
function openPopUp4() {
    document.getElementById("overlay4").style.display = "block";
    document.getElementById("popUp4").style.display = "block";
}



function closePopUp1() {
    document.getElementById("overlay1").style.display = "none";
    document.getElementById("popUp1").style.display = "none";
}

function closePopUp2() {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("popUp2").style.display = "none";
}
function closePopUp3() {
    document.getElementById("overlay3").style.display = "none";
    document.getElementById("popUp3").style.display = "none";
}
function closePopUp4() {
    document.getElementById("overlay4").style.display = "none";
    document.getElementById("popUp4").style.display = "none";
}


function sendMail() {
    var params = {
        nom: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        sujet: document.getElementById("sujet").value,
        message: document.getElementById("message").value
    }

    const serviceID = "service_qdp2m2p"
    const templateID = "template_yr7wght"

    emailjs.init("s7H001x_YAw6w8-Ra");
    emailjs
        .send(serviceID, templateID, params) 
        .then((res) => {

            document.getElementById("nom").value = "",
            document.getElementById("email").value = "",
            document.getElementById("sujet").value = "",
            document.getElementById("message").value = "",
            console.log(res)
            alert("Message bien envoyé!")

            })
        .catch((err) => {
            console.log(err),
            alert("errore lors de l'envoei de messsage, reessaye")
        })

}
 