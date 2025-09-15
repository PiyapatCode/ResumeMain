const text = document.getElementById("text_Welcome");
const textinput = "WELCOME PIYAPAT";
var count =0;
do{
if (count<textinput.length){
    setTimeout(()=>{
        text.innerHTML += textinput.charAt(count);
        count++;
    },50);
   
   
   
}
}while(count<textinput.length)