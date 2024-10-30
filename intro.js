secret.addEventListener("click",function(){
    alert("Bird is the word");
});
document.getElementById
("lights_on").style.display;

//when the users presses the 'light_on' button I wont to replace the  image in 'lightbulb' with the version that shows the light on

lights_on.addEventListener("click",function(){
   console.log("lights turned on");
   document.getElementById("lightbulb").src ="lightbulb_on.webp";
   document.getElementById ("lights_on").style.display="none";
   document.getElementById ("lights_off").style.display="initial";

    //apply the 'light' class to the bodyof the page
    document.body.classList.toggle
    ('light');
});

lights_off.addEventListener("click",function(){
    console.log("lights turned off");
    document.getElementById("lightbulb").src ="lightbulb_off.webp";
    document.getElementById ("lights_on").style.display="initial";
   document.getElementById ("lights_off").style.display="none";

    //apply the 'light' class to the bodyof the page
    document.body.classList.toggle
    ('light');
 });
 
