let mobilenet;
let img;
let label = '';

function modelReady(){
    console.log('model is ready !!');
    mobilenet.predict(rslt);
}

function rslt(error, results){
    if (error){
        console.error(error);
    }
    else {
        //console.log(results);
        label = results[0].className;
        
        mobilenet.predict(rslt);
    }
}

//function imageReady(){
//    image(img, 0, 0, width, height);
//}

function setup() {
    createCanvas(640,550);
    img = createCapture(VIDEO);
    img.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet',img,modelReady);
}

function draw(){
    image(img,0,0, width, height);
    fill(0);
    textSize(50);
    text(label, 10, height - 50);
}