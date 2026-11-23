const hedefZamani=new Date("November 23 ,2026 18:07:00").getTime();

const sayacFonksiyonu=setInterval(function(){
    const suAn=new Date().getTime();
    const kalanSure=hedefZamani-suAn;

    const gun=Math.floor(kalanSure/(1000*60*60*24));
    const saat=Math.floor((kalanSure % (1000*60*60*24))/(1000*60*60));
    const dakika=Math.floor((kalanSure %(1000*60*60))/(1000*60));
    const saniye=Math.floor((kalanSure %(1000*60))/1000);

    document.getElementById("days").innerText= gun ;
    document.getElementById("hours").innerText= saat ;
    document.getElementById("minutes").innerText= dakika  ;
    document.getElementById("seconds").innerText= saniye;    

    if(kalanSure<=0){
        clearInterval(sayacFonksiyonu);
        document.querySelector(".main-container").innerHTML="<h1>Yönlendiriliyoruz...</h1>";

        setTimeout(function(){
            window.location.href="anasayfa.html";
        },2000);
    }
},1000);

function mesajGoster(){
    alert("Bana aktarrabia8@gmail.com mail adresinden ulaşabilirsiniz");
}