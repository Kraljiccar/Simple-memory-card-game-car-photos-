
var source = "#game";

var Imgsource = [
    "assets/images/fiat500.jpg",
    "assets/images/beetle.jpg",
    "assets/images/ferrrari_f40.jpg",
    "assets/images/ford_gt.jpg",
    "assets/images/GTO.jpg",
    "assets/images/mazdarx9.jpg",
    "assets/images/porsche_911.jpg",
    "assets/images/subaru_impreza.jpg",
    "assets/images/tesla.jpg",
    "assets/images/odltimer.jpg",
];

function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
    }
    
function ShuffleImages() {
    var ImgAll = $(Source).children();
    var ImgThis = $(Source + " div:first-child");
    var ImgArr = new Array();
    
}
