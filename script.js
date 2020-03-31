function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} Horas!`
    
    if(hora > 0 && hora <12){
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
    }
    if(hora > 11 && hora < 18){
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    }else if (hora >= 18 && hora <= 24){
        img.src ="noite.png"
        document.body.style.background = "#515154"
    }

}