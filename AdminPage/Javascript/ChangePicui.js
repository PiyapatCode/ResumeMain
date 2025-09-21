const image1 = document.getElementById('image_1');
const image2 = document.getElementById('image_2');
const image3 = document.getElementById('image_3');

const imageinput1 = document.getElementById('image_input1');
const imageinput2 = document.getElementById('image_input2');
const imageinput3 = document.getElementById('image_input3');

const buttonconfirm = document.getElementById('button_confirm');
const image_changed1 = document.getElementById('List_1Pic');
const image_changed2 = document.getElementById('List_2Pic');
const image_changed3 = document.getElementById('List_3Pic');


imageinput1.addEventListener('change',(event)=>{
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        reader.onload = function(e){
         image1.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
imageinput2.addEventListener('change',(event)=>{
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            image2.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
})
imageinput3.addEventListener('change',(event)=>{
    const file = event.target.files[0];
    if (file){
        const reader = new FileReader();
        reader.onload = function(e){
            image3.src = e.target.result;

        }
        reader.readAsDataURL(file);
    }
})
buttonconfirm.addEventListener('click',()=>{
    
    image_changed1.src = image1.src;
    image_changed2.src = image2.src;
    image_changed3.src = image3.src; 
    
});
