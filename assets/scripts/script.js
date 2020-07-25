
window.onload = ()=>{

const img = document.querySelector('#imgsrc');
const name = document.querySelector('#name');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const cardWrapper = document.querySelector('#card-wrapper');

// define users class

class Users{
	constructor(user){
		this.name = user.name;
		this.gender = user.gender;
		this.height = user.height;
	}
	getName(){return this.name}

	getGender(){return this.gender}

	getHeight(){return this.height}
}

// make api call to get all stars
fetch('https://swapi.dev/api/people/')
.then(res=>res.json())
.then(({results})=>{
  let users = results;
  for(user of users){
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(user.name));
    li.setAttribute('data-url', user.url);
    li.setAttribute('class', 'list-item');
    ul.appendChild(li);  
    console.log(li.getAttribute('data-url'));

    // set click event
    li.addEventListener("click",(e)=>{
	// alert(e.target.dataset.url.split("").splice(28).join(""));
	fetch('https://swapi.dev/api/people/'+ e.target.dataset.url.split("").splice(28).join(""))
	.then(response=>response.json())
	.then(cast=>{
		// create instance of Users
		let star = new Users(cast);
		// alert(star.getHeight())
		if(star.getGender() === 'female'){
			img.setAttribute('src','assets/img/girl.svg');
		}
		else{
			img.setAttribute('src','assets/img/man.svg');
		}
		// img.setAttribute('src','assets/img/man.svg');
		name.textContent = `Name: ${star.getName()}`;

		gender.textContent = `Gender: ${star.getGender()}`;

		height.textContent = `Height: ${star.getHeight()} meters`;
		// cardWrapper.style.marginLeft = 'unset';
		if(cardWrapper.style.marginLeft == '-100em'){
			// cardWrapper.style.marginLeft = 15+'vw';
			alert("hi")
		}
		cardWrapper.style.marginLeft = 'unset';
		// cardWrapper.style.marginLeft = 15+'vw';
		// cardWrapper.setAttribute('width','100%');

	})

})
  }
});
}


