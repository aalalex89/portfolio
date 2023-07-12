let text = document.getElementById('quote');
function changeText (){
    text.innerHTML = 'Develop a passion for learning. If you do, you will never cease to grow.—Anthony J. DAngelo';
}
text.addEventListener ('mouseover', changeText)

let text2 = document.getElementById('quote');

function changeTextBack (){
    text2.innerHTML = "Hey, I'm Aleks! I am a full-stack developer from Leeds, United Kingdom. I am currently studying the Full Stack Engineer course at Codecademy. I have already learned how to create accessible, responsive, and interactive websites. There are so many things to learn ahead!"
}
text2.addEventListener ('mouseout', changeTextBack)