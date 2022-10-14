const reviews = [
{
	id: 1,
	img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
	name: "Sarah Jones",
	job: "Web developer",
	desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
	id: 2,
	img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
	name: "Tom Brad",
	job: "UI/UX developer",
	desc: "Lorem ipsum dolor sit amet, magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
	id: 3,
	img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
	name: "Steve Hardy",
	job: "Python developer",
	desc: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
},
{
	id: 4,
	name: "bill anderson",
	job: "The boss",
	img:
	"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
	desc:
	"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
}
]

const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const profileImage = document.querySelector('#profileImage');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const description = document.querySelector('.description');

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
	const item = reviews[currentIndex];
	profileImage.src = item.img;
	name.textContent = item.name;
	job.textContent = item.job;
	description.textContent = item.desc;
})

function changePerson(index){
	const item = reviews[index];
	profileImage.src = item.img;
	name.textContent = item.name;
	job.textContent = item.job;
	description.textContent = item.desc;
}

nextBtn.addEventListener('click', () => {
	currentIndex++;
	if(currentIndex > reviews.length -1){
		currentIndex = 0;
	}
	changePerson(currentIndex);
})

prevBtn.addEventListener('click', () => {
	currentIndex--;
	if(currentIndex < 0){
		currentIndex = reviews.length -1;
	}
	changePerson(currentIndex);
})