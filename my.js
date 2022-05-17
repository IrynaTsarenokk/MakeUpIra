function main() {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded);

    function DOMContentLoaded() {
        const buttonNode = document.getElementsByClassName('js-show-form')[0]
        buttonNode.addEventListener('click', showForm);
    }
    
    function showForm() {
        const formNode = document.getElementsByClassName('js-form')[0];
        formNode.style.display = 'block';

        
        const buttonNodes = document.getElementsByClassName('buttom1');
        buttonNodes.forEach(node => {
            node.style.display = 'block';
        })
    }
    
};

main();
// immediately invoked function expression (function ())()

// SCROLL
const smoothLinks = document.querySelectorAll('a[href^="#my-id"]')
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
}


const smoothLinks1 = document.querySelectorAll('a[href^="#portfolio"]')
for (let smoothLink of smoothLinks1) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
}

const smoothLinks2 = document.querySelectorAll('a[href^="#record"]')
for (let smoothLink of smoothLinks2) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
}

const smoothLinks3 = document.querySelectorAll('a[href^="#blog"]')
for (let smoothLink of smoothLinks3) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    })
}

//Button list procedure


let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { 
        modal.classList.add('modal_vis'); 
        modal.classList.remove('bounceOutDown'); 
        body.classList.add('body_block'); 
    };
}
close_modal.onclick = function() { 
    modal.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); 
    }, 500);
};

let open_modal2 = document.querySelectorAll('.open_modal2');
let close_modal2 = document.getElementById('close_modal2');
let modal2 = document.getElementById('modal2');
let body2 = document.getElementsByTagName('body2')[0];
for (let i = 0; i < open_modal2.length; i++) {
    open_modal2[i].onclick = function() { 
        modal2.classList.add('modal_vis'); 
        modal2.classList.remove('bounceOutDown'); 
        body2.classList.add('body_block'); 
    };
}
close_modal2.onclick = function() { 
    modal2.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal2.classList.remove('modal_vis');
        body2.classList.remove('body_block'); 
    }, 500);
};


let open_modal3 = document.querySelectorAll('.open_modal3');
let close_modal3 = document.getElementById('close_modal3');
let modal3 = document.getElementById('modal3');
let body3 = document.getElementsByTagName('body3')[0];
for (let i = 0; i < open_modal3.length; i++) {
    open_modal3[i].onclick = function() { 
        modal3.classList.add('modal_vis'); 
        modal3.classList.remove('bounceOutDown'); 
        body3.classList.add('body_block'); 
    };
}
close_modal3.onclick = function() { 
    modal3.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal3.classList.remove('modal_vis');
        body3.classList.remove('body_block'); 
    }, 500);
};


let open_modal4 = document.querySelectorAll('.open_modal4');
let close_modal4 = document.getElementById('close_modal4');
let modal4 = document.getElementById('modal4');
let body4 = document.getElementsByTagName('body4')[0];
for (let i = 0; i < open_modal2.length; i++) {
    open_modal4[i].onclick = function() { 
        modal4.classList.add('modal_vis'); 
        modal4.classList.remove('bounceOutDown'); 
        body4.classList.add('body_block'); 
    };
}
close_modal4.onclick = function() { 
    modal4.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal4.classList.remove('modal_vis');
        body4.classList.remove('body_block'); 
    }, 500);
};


let open_modal5 = document.querySelectorAll('.open_modal5');
let close_modal5 = document.getElementById('close_modal5');
let modal5 = document.getElementById('modal5');
let body5 = document.getElementsByTagName('body5')[0];
for (let i = 0; i < open_modal2.length; i++) {
    open_modal5[i].onclick = function() { 
        modal5.classList.add('modal_vis'); 
        modal5.classList.remove('bounceOutDown'); 
        body5.classList.add('body_block'); 
    };
}
close_modal5.onclick = function() { 
    modal5.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal5.classList.remove('modal_vis');
        body5.classList.remove('body_block'); 
    }, 500);
};


let open_modal6 = document.querySelectorAll('.open_modal6');
let close_modal6 = document.getElementById('close_modal6');
let modal6 = document.getElementById('modal6');
let body6 = document.getElementsByTagName('body6')[0];
for (let i = 0; i < open_modal6.length; i++) {
    open_modal6[i].onclick = function() { 
        modal6.classList.add('modal_vis'); 
        modal6.classList.remove('bounceOutDown'); 
        body6.classList.add('body_block'); 
    };
}
close_modal6.onclick = function() { 
    modal6.classList.add('bounceOutDown'); 
    window.setTimeout(function() { 
        modal6.classList.remove('modal_vis');
        body6.classList.remove('body_block'); 
    }, 500);
};



// Img batton



var modalImg = document.getElementById('myModalImg');
var myImg = document.getElementById('myImg');
var myModalImg = document.getElementById("Myimg01");
var captionText = document.getElementById("caption");
myImg.onclick = function(){
    modalImg.style.display = "block";
    myModalImg.src = this.src;
    myModalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 

modalImg.onclick = function () {
    Myimg01.className += " out";
    setTimeout(function () {
        modalImg.style.display = "none";
        Myimg01.className = "modal-contentImg";
    }, 400);
}

var modalImg2 = document.getElementById('myModalImg2');
var myImg2 = document.getElementById('myImg2');
var myModalImg2 = document.getElementById("Myimg02");
var captionText2 = document.getElementById("caption2");
myImg2.onclick = function(){
    modalImg2.style.display = "block";
    myModalImg2.src = this.src;
    myModalImg2.alt = this.alt;
    captionText2.innerHTML = this.alt;
}
 

modalImg2.onclick = function () {
    Myimg02.className += " out";
    setTimeout(function () {
        modalImg2.style.display = "none";
        Myimg02.className = "modal-contentImg2";
    }, 400);
}



var modalImg3 = document.getElementById('myModalImg3');
var myImg3 = document.getElementById('myImg3');
var myModalImg3 = document.getElementById("Myimg03");
var captionText3 = document.getElementById("caption3");
myImg3.onclick = function(){
    modalImg3.style.display = "block";
    myModalImg3.src = this.src;
    myModalImg3.alt = this.alt;
    captionText3.innerHTML = this.alt;
}
 

modalImg3.onclick = function () {
    Myimg03.className += " out";
    setTimeout(function () {
        modalImg3.style.display = "none";
        Myimg03.className = "modal-contentImg3";
    }, 400);
}

var modalImg4 = document.getElementById('myModalImg4');
var myImg4 = document.getElementById('myImg4');
var myModalImg4 = document.getElementById("Myimg04");
var captionText4 = document.getElementById("caption4");
myImg4.onclick = function(){
    modalImg4.style.display = "block";
    myModalImg4.src = this.src;
    myModalImg4.alt = this.alt;
    captionText4.innerHTML = this.alt;
}
 

modalImg4.onclick = function () {
    Myimg04.className += " out";
    setTimeout(function () {
        modalImg4.style.display = "none";
        Myimg04.className = "modal-contentImg4";
    }, 400);
}

var modalImg5 = document.getElementById('myModalImg5');
var myImg5 = document.getElementById('myImg5');
var myModalImg5 = document.getElementById("Myimg05");
var captionText5 = document.getElementById("caption5");
myImg5.onclick = function(){
    modalImg5.style.display = "block";
    myModalImg5.src = this.src;
    myModalImg5.alt = this.alt;
    captionText5.innerHTML = this.alt;
}
 

modalImg5.onclick = function () {
    Myimg05.className += " out";
    setTimeout(function () {
        modalImg5.style.display = "none";
        Myimg05.className = "modal-contentImg5";
    }, 400);
}


var modalImg6 = document.getElementById('myModalImg6');
var myImg6 = document.getElementById('myImg6');
var myModalImg6 = document.getElementById("Myimg06");
var captionText6 = document.getElementById("caption6");
myImg6.onclick = function(){
    modalImg6.style.display = "block";
    myModalImg6.src = this.src;
    myModalImg6.alt = this.alt;
    captionText6.innerHTML = this.alt;
}
 

modalImg6.onclick = function () {
    Myimg06.className += " out";
    setTimeout(function () {
        modalImg6.style.display = "none";
        Myimg06.className = "modal-contentImg6";
    }, 400);
}

var modalImg7 = document.getElementById('myModalImg7');
var myImg7 = document.getElementById('myImg7');
var myModalImg7 = document.getElementById("Myimg07");
var captionText7 = document.getElementById("caption7");
myImg7.onclick = function(){
    modalImg7.style.display = "block";
    myModalImg7.src = this.src;
    myModalImg7.alt = this.alt;
    captionText7.innerHTML = this.alt;
}
 

modalImg7.onclick = function () {
    Myimg07.className += " out";
    setTimeout(function () {
        modalImg7.style.display = "none";
        Myimg07.className = "modal-contentImg7";
    }, 400);
}


var modalImg8 = document.getElementById('myModalImg8');

var myImg8 = document.getElementById('myImg8');
var myModalImg8 = document.getElementById("Myimg08");
var captionText8 = document.getElementById("caption8");
myImg8.onclick = function(){
    modalImg8.style.display = "block";
    myModalImg8.src = this.src;
    myModalImg8.alt = this.alt;
    captionText8.innerHTML = this.alt;
}

modalImg8.onclick = function () {
    Myimg08.className += " out";
    setTimeout(function () {
        modalImg8.style.display = "none";
        Myimg08.className = "modal-contentImg8";
    }, 400);
}

// gif

// function sendApiRequest() {
//     var userInput = document.getElementById('input').value;
//     console.log(userInput);

//     var giphyApiKey = '4bHw9LTmgkINIzDDOch8hSkzP8GDDwlH';
//     var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

//     fetch(giphyApiUrl).then(function (data) {
//         return data.json();
// } )
//         .then(function (json) {
//             console.log(json)
//             console.log(json.data[0].images.fixed_height.url);
//             var imhPath = json.data[0].images.fixed_height.url;
//             var img = document.createElement('img');
//             img.setAttribute('src', imhPath);
//             document.getElementById('gif').appendChild(img);

//         } )

// }
async function sendApiRequest() {
    const userInput = document.getElementById('input').value;
    console.log(userInput);
    const giphyApiKey = '4bHw9LTmgkINIzDDOch8hSkzP8GDDwlH';
    const giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;


    const response = await fetch(giphyApiUrl)
     console.log(response)
    let content = await response.json()
    console.log(content)
   var imhPath = content.data[0].images.fixed_height.url;
   var img = document.createElement('img');
   img.setAttribute('src', imhPath);
   document.getElementById('gif').appendChild(img);        
}