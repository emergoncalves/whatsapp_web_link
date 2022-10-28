let whatsappWebUrl = window.location.protocol + "//" + "web.whatsapp.com" + "" + window.location.pathname + window.location.search

if( confirm("Deseja abrir o link com WhatsApp Web?") == true ){
    window.location.href = whatsappWebUrl;   
}