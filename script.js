function myFunction(){
    console.log("Ayan clicked the button");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    randomColor = "#" + randomColor;
    // console.log(randomColor);

    var h1 = document.getElementsByTagName("h1");
    h1 = h1[0];
    // console.log(h1);
    h1.style.color = randomColor;

    var btn = document.getElementsByTagName("button");
    // console.log(btn);
    btn = btn[0];
    // console.log(btn);
    btn.innerHTML = randomColor;
}