const List1 = document.getElementById('image_li1');
const List2 = document.getElementById('image_li2');
const threebox = document.getElementById('threebox_ul');
const List3 = document.getElementById('image_li3');

List1.addEventListener('mouseover',()=>{
    threebox.style.columnGap = '5px';  
    List1.style.scale = '1.2';
    List1.style.zIndex = '100';
});
List1.addEventListener('mouseleave',()=>{
     List1.style.scale = '1';
     List1.style.zIndex = '99';
    threebox.style.columnGap = '50px';
});
List2.addEventListener('mouseover',()=>{
    List2.style.zIndex = '100';
    threebox.style.columnGap = '5px';
    List2.style.scale = '1.2';
   
});
List2.addEventListener('mouseleave',()=>{
    threebox.style.columnGap = '50px';
    List2.style.scale = '1';
    List2.style.zIndex = '99';
});
List3.addEventListener('mouseover',()=>{
     List3.style.zIndex = '100';
   threebox.style.columnGap = '5px';
    List3.style.scale = '1.2';

});
List3.addEventListener('mouseleave',()=>{
threebox.style.columnGap = '50px';
    List3.style.scale = '1';
    List3.style.zIndex = '99';
});