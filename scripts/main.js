'use strict';

var slides = [{ title: 'House of actors', date: '22. nov. 2010 - 10. dec 2010', url: 'images/img_002.jpg' }, { title: 'Jolene', date: '22. nov. 2010 - 10. dec 2010', url: 'images/img_003.jpg' }, { title: 'Friday Rock', date: '22. nov. 2010 - 10. dec 2010', url: 'images/img_004.jpg' }];

var slider = {
	slides: [],
	holder: document.getElementById('slider'),
	frame: 0,
	set: function set(image, duration) {
		var holder = this.holder,
		    li = '';

		if (duration) {
			holder.removeChild(holder.children[0]);
			li = this.createSlide(image);
			holder.appendChild(li);
		} else {
			holder.removeChild(holder.lastChild);
			li = this.createSlide(image);
			holder.insertBefore(li, holder.children[0]);
		}
	},
	createSlide: function createSlide(item) {
		var li = '',
		    title = '',
		    date = '',
		    img = '';

		li = document.createElement('li');
		li.dataset.id = item;
		title = document.createElement('div');
		title.className = 'title';
		title.innerHTML = slides[item].title;
		li.appendChild(title);
		date = document.createElement('div');
		date.className = 'date';
		date.innerHTML = slides[item].date;
		li.appendChild(date);
		img = document.createElement('img');
		img.src = slides[item].url;
		li.appendChild(img);

		return li;
	},
	printSlides: function printSlides(countSlide) {
		var holder = this.holder,
		    i = 0,
		    li = '';

		for (i; i < countSlide; i++) {
			li = this.createSlide(i);
			holder.appendChild(li);
		}
	},
	init: function init(option) {
		this.holder.innerHTML = '';
		this.slides = option.slides;
		this.frame = option.slides.length - 1;
		this.printSlides(option.sliderCount);
	},
	left: function left() {
		this.frame--;
		if (this.frame < 0) this.frame = this.slides.length - 1;
		this.set(this.frame, 0);
	},
	right: function right() {
		this.frame++;
		if (this.frame == this.slides.length) this.frame = 0;
		this.set(this.frame, 1);
	}
};

document.addEventListener('DOMContentLoaded', function () {
	responsivSlider();
});

window.onresize = responsivSlider;

function responsivSlider() {
	var width = window.innerWidth;
	console.log(width);

	if (width <= 899 && width >= 599) {
		slider.init({
			sliderCount: 2,
			slides: slides
		});
	} else if (width <= 899 && width <= 599) {
		slider.init({
			sliderCount: 1,
			slides: slides
		});
	} else {
		slider.init({
			sliderCount: 3,
			slides: slides
		});
	}
}
