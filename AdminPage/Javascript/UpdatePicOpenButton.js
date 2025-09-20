const tougglebutton = document.getElementById('UpdatePic_id');
const button_cancer = document.getElementById('button_cancer');
const updatepicbutton = document.getElementById('InterfaceChangePic_id');
const classOpen = document.getElementsByClassName('InterfaceChangePicOpen');
const classClose = document.getElementsByClassName('InterfaceChangePic');
tougglebutton.addEventListener('click',()=>{
   updatepicbutton.classList = "InterfaceChangePicOpen";
   
});
button_cancer.addEventListener('click',()=>{
  updatepicbutton.classList = "InterfaceChangePic";
});