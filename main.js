var movie1;
var canvasContainer;
var nextButton;

function setup(){
    canvasContainer = createCanvas(0,0);

    movie1 = createVideo('assets/BEI-uang-inflasi-movie/UANG _ INFLASI ASSET-04.mp4');
    movie1.parent('canvas-holder');
    movie1.loop();

    nextButton = createButton("Next");
	nextButton.class('buttons');
	nextButton.parent('buttons-holder');
}

function draw(){
}

