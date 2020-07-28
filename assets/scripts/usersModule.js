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

module.exports = Users;