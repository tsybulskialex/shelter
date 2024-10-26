window.addEventListener('DOMContentLoaded', () => {
	const navigation = document.querySelector('.header__navigation'),
		  burger = document.querySelector('.header__burger'),
		  bg = document.querySelector('.black'),
		  navLinks = document.querySelectorAll('.header__link');
	
	// function close
	function closeNavigation() {
		bg.classList.remove('bg');
		document.body.classList.remove('no-scroll');
		burger.classList.remove('push');
		navigation.classList.remove('show');
	}

	// if width > 768px close navigation menu
	const screenWidthTablet = window.matchMedia('(max-width: 768px)');
	screenWidthTablet.addEventListener('change', () => {
		if (!screenWidthTablet.matches) {
			closeNavigation();
		}
	});
	
	// if click on burger close nav menu
	burger.addEventListener('click', (e) => {
		burger.classList.toggle('push');
		navigation.classList.toggle('show');
		document.body.classList.toggle('no-scroll');
		bg.classList.toggle('bg');
	})

	// if click on links close nav menu
	navLinks.forEach((item) => {
		item.addEventListener('click', () => {
			closeNavigation();
		})
	})

	// if click on background close nav menu
	document.addEventListener('click', (e) =>{
		if (e.target === bg) {
			closeNavigation();
		};
	});

	// slider

	const prev = document.querySelector('.our-friends__arrow-left'),
		  next = document.querySelector('.our-friends__arrow-right'),
		  sliderField = document.querySelector('.our-friends__slider'),
		  slidesWrapper = document.querySelector('.our-friends__cards');

	let slideIndex = 0;
	sliderField.style.overflow = 'hidden';

	const cards = [
		  {
			"name": "Scarlett",
			"img": "img/our-friends/pets-scarlet.png",
			"type": "Dog",
			"breed": "Jack Russell Terrier",
			"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
			"age": "3 months",
			"inoculations": ["parainfluenza"],
			"diseases": ["none"],
			"parasites": ["none"]
		  },
		  {
			"name": "Katrine",
			"img": "img/our-friends/pets-katrine.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
			"age": "6 months",
			"inoculations": ["panleukopenia"],
			"diseases": ["none"],
			"parasites": ["none"]
		  },
		{
		  "name": "Jennifer",
		  "img": "img/our-friends/pets-jennifer.png",
		  "type": "Dog",
		  "breed": "Labrador",
		  "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		  "age": "2 months",
		  "inoculations": ["none"],
		  "diseases": ["none"],
		  "parasites": ["none"]
		},
		{
			"name": "Woody",
			"img": "img/our-friends/pets-woody.png",
			"type": "Dog",
			"breed": "Golden Retriever",
			"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
			"age": "3 years 6 months",
			"inoculations": ["adenovirus", "distemper"],
			"diseases": ["right back leg mobility reduced"],
			"parasites": ["none"]
		  },
		  {
			"name": "Timmy",
			"img": "img/our-friends/pets-timmy.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
			"age": "2 years 3 months",
			"inoculations": ["calicivirus", "viral rhinotracheitis"],
			"diseases": ["kidney stones"],
			"parasites": ["none"]
		  },
		  {
			"name": "Charly",
			"img": "img/our-friends/pets-charly.png",
			"type": "Dog",
			"breed": "Jack Russell Terrier",
			"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
			"age": "8 years",
			"inoculations": ["bordetella bronchiseptica", "leptospirosis"],
			"diseases": ["deafness", "blindness"],
			"parasites": ["lice", "fleas"]
		  },
		{
			"name": "Freddie",
			"img": "img/our-friends/pets-freddie.png",
			"type": "Cat",
			"breed": "British Shorthair",
			"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
			"age": "2 months",
			"inoculations": ["rabies"],
			"diseases": ["none"],
			"parasites": ["none"]
		  },
		  {
			"name": "Sophia",
			"img": "img/our-friends/pets-sophia.png",
			"type": "Dog",
			"breed": "Shih tzu",
			"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
			"age": "1 month",
			"inoculations": ["parvovirus"],
			"diseases": ["none"],
			"parasites": ["none"]
		  }
	  ]

	const body = document.querySelector('body');
	let cardsPets = document.querySelectorAll('.our-friends__card');
	// create card and add card in start
	const addCard = (id) => {
		let card = document.createElement('div');
		let imgCards = cards[id].img;
		let nameCadrs = cards[id].name;
		card.innerHTML = `<div class="our-friends__card">
							<img src=${imgCards} alt=${nameCadrs}>
							<h3>${nameCadrs}</h3>
							<button>Learn more</button>
						</div>`;
		slidesWrapper.appendChild(card);
		
	}

	for (let i = 0; i < 5; i++) {
		addCard(i);
	}

	
	
	
	// create card and add card in the end
	const addPrevCard = (id) => {
		let card = document.createElement('div');
		let imgCards = cards[id].img;
		let nameCadrs = cards[id].name;
		card.innerHTML = `<div class="our-friends__card">
							<img src=${imgCards} alt=${nameCadrs}>
							<h3>${nameCadrs}</h3>
							<button>Learn more</button>
						</div>`;
		
		slidesWrapper.prepend(card);
	}

	const turnLeft = () => {

		// Generation random cards
		for (let i = 0; i <= cards.length; i++) {
			slideIndex = Math.floor(Math.random() * cards.length);
			if (cards[slideIndex].name === slidesWrapper.lastElementChild.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.lastElementChild.previousElementSibling.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.lastElementChild.previousElementSibling.previousElementSibling.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.lastElementChild.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('h3').innerText) {
				continue;
			} else {
				slideIndex = slideIndex;
				break;
			}
		}

		// add class with keyframe and delete EventListener, but user can not click btn during animation
		slidesWrapper.classList.add('slide-left');
		prev.removeEventListener('click', turnRight);
		next.removeEventListener('click', turnLeft);
		prev.addEventListener('click', openCard);
		next.removeEventListener('click', openCard);
	}
	
	const turnRight = () => {
		
		// Generation random cards
	   for (let i = 0; i <= cards.length; i++) {
			slideIndex = Math.floor(Math.random() * cards.length);
			if (cards[slideIndex].name === slidesWrapper.firstElementChild.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.firstElementChild.nextElementSibling.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.firstElementChild.nextElementSibling.nextElementSibling.querySelector('h3').innerText || cards[slideIndex].name === slidesWrapper.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.querySelector('h3').innerText) {
				continue;
			} else {
				slideIndex = slideIndex;
				break;
			}
	   }

	   // add class with keyframe and delete EventListener, but user can not click btn during animation
		slidesWrapper.classList.add('slide-right');
		prev.removeEventListener('click', turnRight);
		next.removeEventListener('click', turnLeft);
		prev.removeEventListener('click', openCard);
		next.addEventListener('click', openCard);
	}

	// click arrow left and arrow right
	prev.addEventListener('click', turnRight);
	next.addEventListener('click', turnLeft);
	

	

	// Listener add when animation finish
	slidesWrapper.addEventListener('animationend', (event) => {
		
		if(event.animationName === "right") {
			addPrevCard(slideIndex);
			slidesWrapper.lastElementChild.remove();
			slidesWrapper.classList.remove('slide-right');
			cardsPets = document.querySelectorAll('.our-friends__card');
			prev.addEventListener('click', openCard);
	        next.removeEventListener('click', openCard);
			
		} else {
			addCard(slideIndex);
			slidesWrapper.firstElementChild.remove();
			slidesWrapper.classList.remove('slide-left');
			cardsPets = document.querySelectorAll('.our-friends__card');
			prev.removeEventListener('click', openCard);
			next.addEventListener('click', openCard);
		}

		prev.addEventListener('click', turnRight);
		next.addEventListener('click', turnLeft);
		
	})

	// modal
	
	
	function createModal(id) {
		
		let card = document.createElement('div');
		card.classList.add('modal');
		let imgCards = cards[id].img;
		let nameCadrs = cards[id].name;
		let type = cards[id].type;
		let breed = cards[id].breed;
		let descr = cards[id].description;
		let age = cards[id].age;
		let inoculations = cards[id].inoculations;
		let diseases = cards[id].diseases;
		let parasites = cards[id].parasites;
		
		card.innerHTML = `<div class="modal">
							<div class="modal__close">
								<svg class="svg" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path class="path" fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929" />
								</svg>
							</div>
							<img src=${imgCards} alt=${nameCadrs} class="modal__img">
							<div class="modal__content">
								<h2 class="modal__title">${nameCadrs}</h2>
								<h3 class="modal__subtitle">${type} - ${breed}</h3>
								<div class="modal__descr">${descr}</div>
								<ul class="modal__character">
									<li><span>Age: </span>${age}</li>
									<li><span>Inoculations: </span>${inoculations}</li>
									<li><span>Diseases: </span>${diseases}</li>
									<li><span>Parasites: </span>${parasites}</li>
								</ul>
							</div>
						</div>`;
		
		body.appendChild(card);
		bg.classList.add('bg');

		let modalCard = document.querySelector('.modal')
		let modalClose = modalCard.querySelectorAll('.modal__close');
		let svg = modalCard.querySelector('.svg')
		let path = modalCard.querySelector('path');
		prev.addEventListener('click', openCard);
		next.addEventListener('click', openCard);
		card.addEventListener('click', (e) => {
			prev.addEventListener('click', openCard);
			next.addEventListener('click', openCard);
			if (e.target === modalClose || e.target === modalCard.firstElementChild || e.target === svg || e.target === path) {
				bg.classList.remove('bg');
				document.body.classList.remove('no-scroll');
				card.remove();
			};
		})
		document.addEventListener('click', (e) =>{
			if (e.target === bg || e.target === modalClose || e.target === modalCard.firstElementChild || e.target === svg || e.target === path) {
				bg.classList.remove('bg');
				document.body.classList.remove('no-scroll');
				card.remove();
			};
		});
	}
	
	
	function  openCard() {
		cardsPets = document.querySelectorAll('.our-friends__card');
        cardsPets.forEach((item) => {
            item.addEventListener('click', () => {
                for (let i = 0; i < cards.length; i++) {
                    if(item.firstElementChild.nextElementSibling.innerText === cards[i].name) {
						document.body.classList.add('no-scroll');
                        createModal(i);
                        break;
                    } else {
						continue;
					}
                }
				
            })
        })
    }
	openCard();
	prev.removeEventListener('click', openCard);
	next.removeEventListener('click', openCard);
	


})