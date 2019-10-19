function run() {
    celllength = ((document.getElementsByTagName("td").length)-1)/6 //Tabloda kaç tane girdi olduğu hesaplanır...
    indirme = 0;
    yukleme = 0;
    zaman   = 0;
    /*Her sütundan gerekli bilgiler toplanır ve değişkenlere tanımlanır*/
        for(i = 1 ; i<= celllength ; i++){
            indirme = indirme +  Number(document.querySelector("#sorguSonuclari_data > tr:nth-child("+i+") > td:nth-child(3)").innerText);}
        for(i = 1 ; i<= celllength ; i++){
            yukleme = yukleme +  Number(document.querySelector("#sorguSonuclari_data > tr:nth-child("+i+") > td:nth-child(4)").innerText);}
        for(i = 1 ; i<= celllength ; i++){
            zaman = zaman +  Number(document.querySelector("#sorguSonuclari_data > tr:nth-child("+i+") > td:nth-child(5)").innerText);}
    //Veriler dönüştürülerek kullanıcıya sunulur
    alert("İNDİRİLEN : "+(indirme/1024).toFixed(2) + "GB\n" + "YÜKLEME :"+ (yukleme/1024).toFixed(2) + "GB\n"+"KULLANILAN ZAMAN :" + (zaman/3600).toFixed(1) + " SAAT\n"+ "KALAN GB :" + (16384-(indirme+yukleme))/1024).toFixed(2);         
    }