var contanier=document.querySelector('.contanier');
var bullet=document.querySelector('#bullet');
 
document.addEventListener('mousemove',function(eventInfo){
    contanier.style.left= eventInfo.clientX+'px';
    contanier.style.top= eventInfo.clientY+'px';
})
// var left=0;
// var bottom=0;
// document.addEventListener('keydown', function(eventinfo){
//     if(eventinfo.key==='ArrowRight'){
//         left+=70;
//         contanier.style.left=left+'px'
//     }
//     else if(eventinfo.key==='ArrowLeft'){
//         left-=70;
//         contanier.style.left=left+'px'
//     }
//    else if(eventinfo.key==='ArrowUp'){
//         bottom+=70;
//         contanier.style.bottom=bottom+'px';
//     }
//    else if(eventinfo.key==='ArrowDown'){
//         bottom-=70;
//         contanier.style.bottom=bottom+'px';
//     }
// })