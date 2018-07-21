let photo = document.getElementsByClassName("slider__photo");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let navigation = document.getElementsByClassName("slide");
let currentPhoto = 0;
next.onclick = function () {
	if (currentPhoto !== photo.length-1) {
	navigation[currentPhoto].className = "slide";	
	photo[currentPhoto++].className="slider__photo";
	photo[currentPhoto].className="slider__photo slider__active";
	navigation[currentPhoto].className = "slide slide__active";
	}
	else {
	navigation[currentPhoto].className = "slide";	
	photo[currentPhoto].className="slider__photo";
	currentPhoto = 0;
	photo[currentPhoto].className="slider__photo slider__active";
	navigation[currentPhoto].className = "slide slide__active";
	}
}

prev.onclick = function () {
	if (currentPhoto !== 0) {
	navigation[currentPhoto].className = "slide";
	photo[currentPhoto--].className="slider__photo";
	photo[currentPhoto].className="slider__photo slider__active";
	navigation[currentPhoto].className = "slide slide__active";
	}
	else {
	navigation[currentPhoto].className = "slide";
	photo[currentPhoto].className="slider__photo";
	currentPhoto = photo.length-1;
	photo[currentPhoto].className="slider__photo slider__active";
	navigation[currentPhoto].className = "slide slide__active";
	}
}

for (let i=0; i<navigation.length; i++) {
	navigation[i].onclick = function () {
		photo[currentPhoto].className="slider__photo";
		photo[i].className = "slider__photo slider__active";
		navigation[currentPhoto].className = "slide";
		this.className= "slide slide__active";
		currentPhoto=i;
	};
}