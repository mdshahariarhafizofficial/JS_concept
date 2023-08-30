function call_Back(name, age, task){
    console.log("Hello!\nYour name :", name);
    console.log("Your age : ", age);
    task()
}

function playFootball() {
    console.log("Task: Play Football\n");
}
function scrollFacebook() {
    console.log("Task: Scroll Facebook\n");
}
function goToSchool() {
    console.log("Task: Go To School");
}

call_Back("Sogir", 15, playFootball)
call_Back("Jokir", 21, scrollFacebook)
call_Back("Mofij", 10, goToSchool)