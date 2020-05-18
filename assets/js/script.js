
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
    
    for (var i = 0; i < ImgAll.length; i++) {
		ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
		ImgThis = ImgThis.next();
	}
	
		ImgThis = $(Source + " div:first-child");
	
	for (var z = 0; z < ImgAll.length; z++) {
	var RandomNumber = RandomFunction(0, ImgArr.length - 1);

		$("#" + ImgThis.attr("id") + " img").attr("src", ImgAr[RandomNumber]);
		ImgArr.splice(RandomNumber, 1);
		ImgThis = ImgThis.next();
	}
}

