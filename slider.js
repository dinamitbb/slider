const header = document.getElementById('header');
const sliderImg = document.getElementsByClassName('sliderImg');
const sliderCont = document.getElementById('sliderCont');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');




let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg, img/4.jpg'];

//append images
for(let image of images){
	let img = document.createElement('IMG');
	img.src = image;
	img.classList.add('sliderImg');
	sliderCont.appendChild(img);
}



//fade page and stop autoSlide function when hover navigation
let auto = true;
header.addEventListener('mouseenter', () => {
		sliderImg[sliderImg.length - 1].classList.add("filt"); 
		auto = !auto;		
})
header.addEventListener('mouseleave', () => { 
		sliderImg[sliderImg.length - 1].classList.remove("filt");
		auto = !auto;
		autoSlide();
})








nextBtn.addEventListener('click', next);
prevBtn.addEventListener('click', prev);


function fadeOut(item){
	let op = 1;

	let ret = () => {
		op -= 0.1;
		item.style.opacity = op;

		if(op <= 0) return;
		setTimeout(ret, 10);

	}
	ret();
}

function prev(){
	
	let cl1 = sliderCont.firstElementChild.cloneNode();
	let cl2 = sliderCont.lastElementChild.cloneNode();

	sliderCont.insertBefore(cl1, sliderCont.lastElementChild);
	fadeOut(sliderCont.lastChild);
	sliderCont.removeChild(sliderCont.firstElementChild);

	setTimeout(() => {
		sliderCont.removeChild(sliderCont.lastElementChild);
		sliderCont.insertBefore(cl2, sliderCont.lastElementChild);
	}, 200)

}

function next(){

	fadeOut(sliderCont.lastChild)

	setTimeout(()=> {
		let cl = sliderCont.lastChild.cloneNode();
		cl.style.opacity = 1;
		sliderCont.insertBefore(cl, sliderCont.firstElementChild );
		sliderCont.removeChild(sliderCont.lastChild)
	}, 200)

}

(function autoSlide(){

		setTimeout(() => {
		  let a = () => {
			if(auto){
				next();
				setTimeout(a, 7000);
			}
		}
		a();
	}, 7000)

})();
