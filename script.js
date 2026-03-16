// ================= DEFAULT GALLERY PHOTOS =================

if(!localStorage.getItem("photos")){

let defaultPhotos = [

{image:"images/gallery1.png"},
{image:"images/gallery2.png"},
{image:"images/gallery3.png"},
{image:"images/gallery4.png"},
{image:"images/gallery5.png"},

{image:"images/gallery6.png"},
{image:"images/gallery7.png"},
{image:"images/gallery8.png"},
{image:"images/gallery9.png"},
{image:"images/gallery10.png"},

{image:"images/gallery11.png"},
{image:"images/gallery12.png"},
{image:"images/gallery13.png"},
{image:"images/gallery14.png"},
{image:"images/gallery15.png"},

{image:"images/gallery16.png"},
{image:"images/gallery17.png"},
{image:"images/gallery18.png"},
{image:"images/gallery19.png"},
{image:"images/gallery20.png"}

];

localStorage.setItem("photos", JSON.stringify(defaultPhotos));

}



// ================= LOGIN FORM =================

function openForm(){
document.getElementById("joinForm").style.display="flex";
}

function closeForm(){
document.getElementById("joinForm").style.display="none";
}



// ================= MEMBER LOGIN =================

function memberLogin(){

let reg = document.getElementById("regno").value;
let pass = document.getElementById("password").value;

if(reg === "241CS237" && pass === "photo123"){

localStorage.setItem("member", reg);

window.location.href = "dashboard.html";

}
else{

alert("Access denied. Only club members can login.");

}

}



// ================= ADD EVENT =================

function addEvent(){

let title = document.getElementById("eventTitle").value;
let date = document.getElementById("eventDate").value;
let desc = document.getElementById("eventDesc").value;

let events = JSON.parse(localStorage.getItem("events")) || [];

events.push({
title:title,
date:date,
desc:desc
});

localStorage.setItem("events", JSON.stringify(events));

displayEvents();

}



// ================= DISPLAY EVENTS =================

function displayEvents(){

let events = JSON.parse(localStorage.getItem("events")) || [];

let container = document.getElementById("eventList");

if(!container) return;

container.innerHTML="";

events.forEach(event =>{

container.innerHTML += `
<div class="event-card">
<h3>${event.title}</h3>
<p>${event.date}</p>
<p>${event.desc}</p>
</div>
`;

});

}

displayEvents();



// ================= PHOTO UPLOAD =================

function uploadPhoto(){

let file = document.getElementById("photoUpload").files[0];

if(!file){
alert("Please select a photo");
return;
}

let reader = new FileReader();

reader.onload = function(){

let photos = JSON.parse(localStorage.getItem("photos")) || [];

photos.push({
image:reader.result
});

localStorage.setItem("photos", JSON.stringify(photos));

displayPhotos();

};

reader.readAsDataURL(file);

}



// ================= DISPLAY MEMBER PHOTOS =================

function displayPhotos(){

let photos = JSON.parse(localStorage.getItem("photos")) || [];

let gallery = document.getElementById("photoGallery");

if(!gallery) return;

gallery.innerHTML="";

photos.forEach((photo,index)=>{

gallery.innerHTML += `
<div class="photo-card">
<img src="${photo.image}">
<button onclick="deletePhoto(${index})">Delete</button>
</div>
`;

});

}

displayPhotos();



// ================= DELETE PHOTO =================

function deletePhoto(index){

let photos = JSON.parse(localStorage.getItem("photos")) || [];

photos.splice(index,1);

localStorage.setItem("photos", JSON.stringify(photos));

displayPhotos();

}



// ================= PUBLIC GALLERY =================

function loadPublicGallery(){

let photos = JSON.parse(localStorage.getItem("photos")) || [];

let gallery = document.getElementById("publicGallery");

if(!gallery) return;

gallery.innerHTML="";

photos.forEach(photo =>{

gallery.innerHTML += `
<div class="photo-card">
<img src="${photo.image}">
</div>
`;

});

}