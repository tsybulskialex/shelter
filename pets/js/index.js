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
    const screenWidth = window.matchMedia('(max-width: 768px)');
    screenWidth.addEventListener('change', () => {
        if (!screenWidth.matches) {
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


    const cards = [
        {
          "name": "Scarlett",
          "img": "../img/our-friends/pets-scarlet.png",
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
          "img": "../img/our-friends/pets-katrine.png",
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
        "img": "../img/our-friends/pets-jennifer.png",
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
          "img": "../img/our-friends/pets-woody.png",
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
          "img": "../img/our-friends/pets-timmy.png",
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
          "img": "../img/our-friends/pets-charly.png",
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
          "img": "../img/our-friends/pets-freddie.png",
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
          "img": "../img/our-friends/pets-sophia.png",
          "type": "Dog",
          "breed": "Shih tzu",
          "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
          "age": "1 month",
          "inoculations": ["parvovirus"],
          "diseases": ["none"],
          "parasites": ["none"]
        }
    ]

    const cardsWrapper = document.querySelector('.our-friends__wrapper'),
        // Pagination btns
          first = document.querySelector('.first'),
          left = document.querySelector('.left'),
          current = document.querySelector('.center'),
          right = document.querySelector('.right'),
          last = document.querySelector('.last');

    // update window when change window width and count pages with update cards
    window.addEventListener('resize', () => {
        calcWindowWidth();
        updateCards();
        openCard();
    })

    function getRandomIndex(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    // create random array
    function createRandomArray() {
        let arrPets = [getRandomIndex(0, 8)];
        let index;
        while(arrPets.length !== 8) {
            index = getRandomIndex(0, 8)
            if (arrPets.includes(index)) {
                continue;
            } else {
                arrPets.push(index);
            }
        }
        return arrPets;
    }
    
    function addCard(id) {
        let card = document.createElement('div');
        let imgCards = cards[id].img;
        let nameCadrs = cards[id].name;
        card.innerHTML = `<div class="our-friends__card">
                            <img src=${imgCards} alt=${nameCadrs}>
                            <h2>${nameCadrs}</h2>
                            <button>Learn more</button>
                        </div>`;
        cardsWrapper.appendChild(card);
        /* openCard() */
    }
    let cur = 1;
    let pages = 6;

    // change window width and count pages
    function calcWindowWidth() {
        if (window.innerWidth > 1015) {
            pages = 6;
        } else if (window.innerWidth > 740 && window.innerWidth < 1015) {
            pages = 8;
        } else if (window.innerWidth < 740) {
            pages = 16;
        }
    }
    calcWindowWidth(); // but the cards updated themselves

    // create cards = counter pages
    let arrRandom = createRandomArray();

    const updateCards = () => {
        cardsWrapper.innerHTML = ' ';
        let arr = createRandomArray();
        if (48 / pages === 8) {
            for (let i = 0; i < arr.length; i++) {
                let curId = arr[i];
                addCard(curId);
            }
        } else if ( 48 / pages === 6) {
            for (let i = 0; i < arr.length - 2; i++) {
                let curId = arr[i];
                addCard(curId);
            }
        } else if (48 / pages === 3) {
            for (let i = 0; i < arr.length - 5; i++) {
                let curId = arr[i];
                addCard(curId);
            }
        }
    }

    updateCards()
    
    const body = document.querySelector('body');
    let cardsPets = document.querySelectorAll('.our-friends__card');

    right.classList.add('active');
    last.classList.add('active');
    console.log(cardsPets);

    // Pagination
    function arrowRight() {
        cardsWrapper.innerHTML = ' ';
        arrRandom = createRandomArray();
        updateCards(arrRandom);
        cur = cur + 1;
        right.addEventListener('click', openCard);
        left.addEventListener('click', openCard);
        last.addEventListener('click', openCard);
        first.addEventListener('click', openCard);
        if (cur > 1 && cur < pages) {
            current.textContent = cur;
            left.classList.add('active');
            first.classList.add('active');
            left.addEventListener('click', arrowLeft);
            first.addEventListener('click', arrowFirstLeft);
            right.addEventListener('click', openCard);
            left.addEventListener('click', openCard);
            last.addEventListener('click', openCard);
            first.addEventListener('click', openCard);
        } else if (cur === pages) {
            current.textContent = cur;
            right.removeEventListener('click', arrowRight);
            last.removeEventListener('click', arrowLastRight);
            left.addEventListener('click', arrowLeft);
            first.addEventListener('click', arrowFirstLeft);
            right.classList.remove('active');
            last.classList.remove('active');
            first.classList.add('active');
            left.classList.add('active');
            right.addEventListener('click', openCard);
            left.addEventListener('click', openCard);
            last.addEventListener('click', openCard);
            first.addEventListener('click', openCard);
        }
    }

    right.addEventListener('click', arrowRight);
    

    function arrowLastRight() {
        cardsWrapper.innerHTML = ' ';
        arrRandom = createRandomArray();
        updateCards(arrRandom);
        current.textContent = pages;
        cur = pages;
        left.classList.add('active');
        first.classList.add('active');
        last.removeEventListener('click', arrowLastRight);
        right.removeEventListener('click', arrowRight);
        left.addEventListener('click', arrowLeft);
        first.addEventListener('click', arrowFirstLeft);
        right.classList.remove('active');
        last.classList.remove('active');
        last.addEventListener('click', openCard);
        first.addEventListener('click', openCard);
        left.addEventListener('click', openCard);
        right.addEventListener('click', openCard);
       
    }
    last.addEventListener('click', arrowLastRight);

    function arrowLeft() {
        cardsWrapper.innerHTML = ' ';
        arrRandom = createRandomArray();
        updateCards(arrRandom);
        cur = cur - 1;
        right.addEventListener('click', openCard);
        left.addEventListener('click', openCard);
        last.addEventListener('click', openCard);
        first.addEventListener('click', openCard);
        if (cur === 1) {
            current.textContent = cur;
            left.classList.remove('active');
            first.classList.remove('active');
            left.removeEventListener('click', arrowLeft);
            first.removeEventListener('click', arrowFirstLeft);
            left.addEventListener('click', openCard);
            right.addEventListener('click', openCard);
            last.addEventListener('click', openCard);
            first.addEventListener('click', openCard);
        } else if (cur > 1 && cur <= pages) {
            last.addEventListener('click', arrowLastRight);
            right.addEventListener('click', arrowRight);
            left.addEventListener('click', openCard);
            right.addEventListener('click', openCard);
            last.addEventListener('click', openCard);
            first.addEventListener('click', openCard);
            right.classList.add('active');
            last.classList.add('active');
            current.textContent = cur;
        }
    }

    left.addEventListener('click', arrowLeft);

    function arrowFirstLeft() {
        cardsWrapper.innerHTML = ' ';
        arrRandom = createRandomArray();
        updateCards(arrRandom);
        current.textContent = 1;
        cur = 1;
        left.classList.remove('active');
        first.classList.remove('active');
        last.addEventListener('click', arrowLastRight);
        right.addEventListener('click', arrowRight);
        left.removeEventListener('click', arrowLeft);
        first.removeEventListener('click', arrowFirstLeft)
        right.classList.add('active');
        last.classList.add('active');
        first.addEventListener('click', openCard);
        right.addEventListener('click', openCard);
        last.addEventListener('click', openCard);
        left.addEventListener('click', openCard);
    }

    first.addEventListener('click', arrowFirstLeft);
    
	function createModal(id) {
		let card = document.createElement('div');
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
		
		let modalClose = document.querySelector('.modal__close');
		let modalCard = document.querySelector('.modal')
		let svg = modalCard.querySelector('.svg')
		let path = modalCard.querySelector('path');
		card.addEventListener('click', (e) => {
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
        let cardsPets = cardsWrapper.querySelectorAll('.our-friends__card');
        cardsPets.forEach((item) => {
            item.addEventListener('click', () => {
                for (let i = 0; i <= cards.length; i++) {
                    if(item.firstElementChild.nextElementSibling.innerText === cards[i].name) {
                        createModal(i);
                        break;
                    } else {
                        continue;
                    }
                }
            })
        })
    }
	openCard()
    right.addEventListener('click', openCard);
    left.addEventListener('click', openCard);
    first.addEventListener('click', openCard);
    last.addEventListener('click', openCard);
	
})

