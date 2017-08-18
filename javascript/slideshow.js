const updateStyle = ($target, styleName, styleValue) => {
	if ($target === null) return false;
	if (typeof styleName !== 'string') return false;
	if (typeof styleValue !== 'string') return false;

	$target.style[styleName] = styleValue;
	return true;
}

const nextSlide = () => {
	currentSlide = currentSlide + 1;
	if (currentSlide === allSlides) currentSlide = 0;
	updateStyle($slide, 'marginLeft', (-1 * currentSlide * 150)+'px')
}

const prevSlide = () => {
	currentSlide = currentSlide - 1;
	if (currentSlide < 0) currentSlide = allSlides - 1;
	updateStyle($slide, 'marginLeft', (-1 * currentSlide * 150)+'px')
}


const $window = document.querySelector('.js-slide-win');
const $slide = document.querySelector('.js-first');
const $left = document.querySelector('.js-left');
const $right = document.querySelector('.js-right');

let currentSlide = 0;
const allSlides = $window.children.length;
console.log(allSlides)


$right.addEventListener('click', nextSlide);
$left.addEventListener('click', prevSlide);


// setInterval(nextSlide, 500)







