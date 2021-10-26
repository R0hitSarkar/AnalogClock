console.log("this is clock Project");
setInterval(()=>{
    console.log("this is clock Project");
    d= new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hrotation=30*h+m/2;
    mrotation=6*m;
    srotation=6*s;
    // var hour=document.getElementById("hour");
    // var minute=document.getElementById("minute");
    // var second=document.getElementById("second");
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000);