// import People from "./usersModule";
// console.log(People);
window.onload = ()=>{
	// grab age ,gender,height,imgsrc and card-wrapper
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
// create user method
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
	// store results in users
  let users = results;
//   populate card for each user
  for(user of users){
	  let star = new Users(user);
	//   get user() method
	  let starDetails = star.user();
	//   create a container for user img,name and extra details
	let listItemContainer = document.createElement('div');
	// img tag
	let listImg = document.createElement('img');
	// create h3 to store name
	let listName = document.createElement('h3');
	// append name to listname
	listName.appendChild(document.createTextNode(starDetails.name));

// set src attribute of img
	if(starDetails.gender === 'female'){
		listImg.setAttribute('src','assets/img/girl.svg');
	}
	else{
		listImg.setAttribute('src','assets/img/man.svg');
	}

	// set id for img
	listImg.setAttribute('id','listImgId');
	// append listimg that is img to listitemcontainer
	listItemContainer.appendChild(listImg);
	// append name
	listItemContainer.appendChild(listName);
	// set id 
	listItemContainer.setAttribute('id','listItemContainer');
	
	// grab #list
	let ul = document.getElementById("list");
	
	// create a div
	let div = document.createElement("div");
	
	// set id for div
	div.setAttribute('id','main-card');
	// append listItemcontainer to div
    div.appendChild(listItemContainer);
	
	// set class 
	div.setAttribute('class', 'list-item');
	// append div to ul
    ul.appendChild(div);  
	
    // set click event
    div.addEventListener("click",(e)=>{
	
//  set textcontent of gender
		gender.textContent = `Gender: ${starDetails.gender}`;
//  set textcontent of height
		height.textContent = `Height: ${starDetails.height} meters`;
//  set textcontent of age
		age.textContent = `Birth year: ${starDetails.birth_year}`;
		
		//  append #details to listitemcoontainer
			listItemContainer.appendChild(document.querySelector('#details'));

})
  }
});
}
	// let cardExDetails = document.querySelector('#details');
	// cardExDetails.addEventListener("click",function(){
	// if(cardExDetails.style.display = 'block'){
	// 	// document.querySelector('#details').style.display = 'hide';
	// 	if((listItemContainer.children)[2] !== undefined){
	// 		listItemContainer.remove(cardExDetails)
	// 	}
	// 	// console.log(listItemContainer.children)
	// }else{
	// 	listItemContainer.appendChild(cardExDetails)
	// 	cardExDetails.style.display = 'block'
	// 	console.log(2)
	// }
	
	// console.log(1)
// })
