var Table = require('../');

var header = [
	{
		value : "item",
	},
	{
		value : "price",
	},
	{
		value : "organic",
	}
];

//Example with arrays as rows 
var rows = [
	["hamburger",2.50,null],
	["el jefe's special cream sauce",0.10],
	["two tacos, rice and beans topped with cheddar cheese",9.80,""],
	["apple slices",1.00,"yes"],
	[null,1.50,"no","extra element","another extra element"],
	["macaroni, ham and peruvian mozzarella",3.75,"no"]
];

var t1 = Table(header,rows,{
	borderStyle : 1,
	paddingBottom : 0,
	headerAlign : "center",
	align : "center",
	color : "white"
});

str1 = t1.render();
console.log(str1);


//Example with objects as rows 
var rows = [
	{
		item : "hamburger",
		price : 2.50,
		organic : null 
	},
	{
		item : "el jefe's special cream sauce",
		price : 0.10
	},
	{
		item : "two tacos, rice and beans topped with cheddar cheese",
		price : 9.80,
		organic : "no"
	},
	{
		item : "apple slices",
		price : 1.00,
		organic : "yes"	
	},	
	{
		item : null, 
		price : 1.50,
		organic : "no"
	},
	{
		item : "macaroni, ham and peruvian mozzarella",
		price : 3.75,
		organic : "no"
	}
];

var t2 = Table(header,rows,{
	borderStyle : 1,
	paddingBottom : 0,
	headerAlign : "center",
	align : "center",
	color : "white"
});

var str2 = t2.render();
console.log(str2);
