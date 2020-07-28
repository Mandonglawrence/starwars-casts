
window.onload = ()=>{

const img = document.querySelector('#imgsrc');
const age = document.querySelector('#age');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const cardWrapper = document.querySelector('#card-wrapper');

// define users class

class Users{
	constructor(user){
		this.name = user.name;
		this.birth_year = user.birth_year;
		this.gender = user.gender;
		this.height = user.height;
		this.url = user.url;
	}

	user(name,birth_year,gender,height){
	return	{
	     "name" :this.name,
		"birth_year" : this.birth_year,
		"gender" : this.gender,
		"height" : this.height,
		"url":this.url
	    }
	}
	
}

// make api call to get all stars
fetch('https://swapi.dev/api/people/')
.then(res=>res.json())
.then(({results})=>{
  let users = results;
  for(user of users){
	  let star = new Users(user);
	  let starDetails = star.user();
	let listItemContainer = document.createElement('div');
	let listImg = document.createElement('img');
	
	let listName = document.createElement('h3');
	
	listName.appendChild(document.createTextNode(starDetails.name));


	if(starDetails.gender === 'female'){
		listImg.setAttribute('src','assets/img/girl.svg');
	}
	else{
		listImg.setAttribute('src','assets/img/man.svg');
	}

	listImg.setAttribute('id','listImgId');
	listItemContainer.appendChild(listImg);
	listItemContainer.appendChild(listName);
	listItemContainer.setAttribute('id','listItemContainer');
    let ul = document.getElementById("list");
	let div = document.createElement("div");
	
	div.setAttribute('id','main-card');
    div.appendChild(listItemContainer);
	
    div.setAttribute('class', 'list-item');
    ul.appendChild(div);  
	
    // set click event
    div.addEventListener("click",(e)=>{
	

		gender.textContent = `Gender: ${starDetails.gender}`;

		height.textContent = `Height: ${starDetails.height} meters`;

		age.textContent = `Birth year: ${starDetails.birth_year}`;
		
		// if(listItemContainer.contains(document.querySelector('#details')) === false)
		// {
			listItemContainer.appendChild(document.querySelector('#details'));
		// }
		// listItemContainer.removeChild(document.querySelector('#details'));

})
  }
});
}


