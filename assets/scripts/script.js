
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
	  let actr = new Users(user);
	  let actrDetails = actr.user();
	let listItemContainer = document.createElement('div');
	let listImg = document.createElement('img');
	listImg.setAttribute('data-url', actrDetails.url);
	let listName = document.createElement('h3');
	listName.setAttribute('data-url', actrDetails.url);
	listName.appendChild(document.createTextNode(actrDetails.name));


	if(actrDetails.gender === 'female'){
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
	div.setAttribute('data-url', actrDetails.url);
	div.setAttribute('id','main-card');
    div.appendChild(listItemContainer);
	listItemContainer.setAttribute('data-url', actrDetails.url);
	// li.setAttribute('data-url', user.url);
    div.setAttribute('class', 'list-item');
    ul.appendChild(div);  
    console.log(div.getAttribute('data-url'));

    // set click event
    div.addEventListener("click",(e)=>{
	

		gender.textContent = `Gender: ${actrDetails.gender}`;

		height.textContent = `Height: ${actrDetails.height} meters`;

		age.textContent = `Birth year: ${actrDetails.birth_year}`;
	
		listItemContainer.appendChild(document.querySelector('#details'));

})
  }
});
}


