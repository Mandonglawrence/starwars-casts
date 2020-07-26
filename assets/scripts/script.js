
window.onload = ()=>{

const img = document.querySelector('#imgsrc');
const age = document.querySelector('#age');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const cardWrapper = document.querySelector('#card-wrapper');

// define users class

class Users{
	constructor(user){
		this.age = user.birth_year;
		this.gender = user.gender;
		this.height = user.height;
	}
	getAge(){return this.age}

	getGender(){return this.gender}

	getHeight(){return this.height}
}

// make api call to get all stars
fetch('https://swapi.dev/api/people/')
.then(res=>res.json())
.then(({results})=>{
  let users = results;
  for(user of users){
	let listItemContainer = document.createElement('div');
	let listImg = document.createElement('img');
	listImg.setAttribute('data-url', user.url);
	let listName = document.createElement('h3');
	listName.setAttribute('data-url', user.url);
	listName.appendChild(document.createTextNode(user.name));


	if(user.gender === 'female'){
		listImg.setAttribute('src','assets/img/girl.svg');
	}
	else{
		listImg.setAttribute('src','assets/img/man.svg');
	}



	// listImg.setAttribute('src','assets/img/man.svg');
	listImg.setAttribute('id','listImgId');
	listItemContainer.appendChild(listImg);
	listItemContainer.appendChild(listName);
	listItemContainer.setAttribute('id','listItemContainer');
    let ul = document.getElementById("list");
	let div = document.createElement("div");
	div.setAttribute('data-url', user.url);
    div.appendChild(listItemContainer);
	listItemContainer.setAttribute('data-url', user.url);
	// li.setAttribute('data-url', user.url);
    div.setAttribute('class', 'list-item');
    ul.appendChild(div);  
    console.log(div.getAttribute('data-url'));

    // set click event
    div.addEventListener("click",(e)=>{
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
		// name.textContent = `Name: ${star.getName()}`;

		gender.textContent = `Gender: ${star.getGender()}`;

		height.textContent = `Height: ${star.getHeight()} meters`;

		age.textContent = `Age: ${star.getAge()}`;
		// cardWrapper.style.marginLeft = 'unset';
		// cardWrapper.style.marginLeft = 'unset';
		// cardWrapper.style.marginBottom = 40+'vh';
		listItemContainer.appendChild(document.querySelector('#details'));
		// cardWrapper.setAttribute('width','100%');

	})

})
  }
});
}


