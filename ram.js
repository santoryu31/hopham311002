document.getElementById('random').onclick = () => {
    const valueRandom = Math.random();
    const value=Math.floor(Math.random() *4 );
    switch(value) {
        case 0:
        document.getElementsByTagName("h3") [0].innerText="Quốc Hải";
         break
        case 1:
        document.getElementsByTagName("h3") [0].innerText="Tây Hồ";
        break
        case 2:
        document.getElementsByTagName("h3") [0].innerText="Hoàng Linh";
        break
        case 3:
        document.getElementsByTagName("h3") [0].innerText="Diễm Quỳnh";
        break
    
    }

};