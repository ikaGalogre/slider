
var sliderData = [
    {
        url:    "https://www.google.com/",
        img:  "https://www.split.io/wp-content/uploads/2020/03/react-logo.png",
        title: "title 1"
    },  {
        url:    "https://www.google.com/",
        img:  "https://joaohenriquebarbosa.com.br/images/thumbnails/nextjs.png",
        title: "title 2"
    },  {
        url:    "https://www.google.com/",
        img:  "https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png",
        title: "title 3"
    },  {
        url:    "https://www.google.com/",
        img:  "https://processing.org/static/9c28a3f9480899546b688fec94374e8e/d6138/normal_.png",
        title: "title 4"
    }
]
console.log(sliderData)
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var curentIndex = 0;

function createImgElement(url){
    let element = document.createElement('img');
    element.src = url;
    return element;
}

function createAelement(url){
    let element = document.createElement('a');
    element.href = url;
    return element;
}

function setSlider(index){
    let curentSlide = sliderData[index];
    let element = createAelement(curentSlide.url);
    element.appendChild(createImgElement(curentSlide.img));
    slider.innerHTML = '';
    slider.appendChild(element);
}

function arrowLeft(){
    if(curentIndex == 0){
        curentIndex = sliderData.length;
    }
    if(curentIndex > 0){
        curentIndex--;
        setSlider(curentIndex);
    }
    console.log(curentIndex);
}

function arrowRight(){
    if(curentIndex == sliderData.length - 1){
        curentIndex = -1;
    }
    if(curentIndex < sliderData.length - 1){
            curentIndex++;
            setSlider(curentIndex);
    }
    console.log(curentIndex);
}

right.addEventListener('click', arrowRight);

left.addEventListener('click', arrowLeft);

setSlider(curentIndex);

setInterval(function(){
    arrowRight();
}, 2500)