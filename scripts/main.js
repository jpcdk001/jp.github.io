//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';//更换了h1的内容,
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/每日目标.png') {
      myImage.setAttribute ('src','images/hd.png');
    } else {
      myImage.setAttribute ('src','images/每日目标.png');
    }
}//图片点击轮播轮播



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
// function multiply(num1,num2) {
//  var result = num1 * num2;
//  return result;
//}
//document.write('运行结果:');
//document.write (multiply(20,20));//multiply(num1,num2) 相乘,

//document.querySelector('html').onclick = function() {
//    alert('Ouch! Stop poking me!');//网页任何位置点击都跳出这个提示,
//}

////var iceCream = 'chocolate';
//if (iceCream === 'chocolate') {
//  alert('Yay, I love chocolate ice cream!');    
//} else {
//  alert('Awwww, but chocolate is my favorite...');    
//}//弹出提示,

//
//
//
//
//
//