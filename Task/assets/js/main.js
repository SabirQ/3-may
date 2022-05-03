window.onload=function(){
  const header=document.getElementById("fixed-nav")
  const item=document.getElementsByClassName("item")
  const barBtn=document.getElementById("bar-button")
  const xBtn=document.getElementById("x-button")
  const menu=document.getElementById("clickbar")
  const visiblemenu=document.getElementById("visiblebar")

barBtn.onclick=function()
{
menu.style.display="initial";
}

xBtn.onclick=function()
{
menu.style.display="none";
  }


  window.onscroll=function(){
      if(window.scrollY>30){
          header.style.background="white";
          header.style.height="90px";
          barBtn.style.color="rgb(64, 8, 218)";
         
        for ( let i = 0; i < item.length; i++) {
            item[i].style.color="black";
            
        } 
      }
      else{
        barBtn.style.color="rgba(255, 255, 255, 0.801)";
        header.style.background="none";
        header.style.height="120px";
        for ( let i = 0; i < item.length; i++) {
            item[i].style.color=" rgba(255, 255, 255, 0.801)";
            
        } 
        

      }
  };
}