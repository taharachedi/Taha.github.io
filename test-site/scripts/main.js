/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World !";


document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });


document.querySelector("html").addEventListener("click", () => {
    alert("A Baraka matbrk A Ras Lfoula!");
});
*/


const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.jpg") {
        myImage.setAttribute("src", "images/google.jfif");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.jpg");
    }
};


//////////////////////////////////////////

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("D5el Smitk A ras lFoula");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }

}


if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}



myButton.onclick = () => {
    setUserName();
}