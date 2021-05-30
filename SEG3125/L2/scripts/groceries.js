	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		nutfree: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		nutfree: true,
		price: 2.99
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		nutfree: true,
		price: 10.59
	},
	{
		name: "Almonds",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 2.99
	},
	{
		name: "Pistachios",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 3.99
	},
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 8.99
	},
	{
		name: "Milk",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 2.59
	},
	{
		name: "Cheese",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 2.99
	},
	{
		name: "Butter",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		lactoseFree: false,
		price: 0.99
	},
	{
		name: "Breadsticks",
		vegetarian: false,
		glutenFree: true,
		nutfree: false,
		price: 1.99
	}

];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((document.getElementById('Vegetarian').checked) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((document.getElementById('GlutenFree').checked) && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (document.getElementById('None').checked){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

// Check if none checkbox is checked (done to prevent selecting conflicting options)
function isNoneChecked() {
	// Get the checkbox
	var checkBox = document.getElementById("None");
  
	// If the checkbox is checked, execute code
	if (checkBox.checked == true){
		document.getElementById("Vegetarian").disabled = true;
		document.getElementById("GlutenFree").disabled = true;
		document.getElementById("Nut").disabled = true;
		document.getElementById("Lac").disabled = true;
		document.getElementById("Organic").disabled = true;

	} else {
		document.getElementById("Vegetarian").disabled = false;
		document.getElementById("GlutenFree").disabled = false;
		document.getElementById("Nut").disabled = false;
		document.getElementById("Lac").disabled = false;
		document.getElementById("Organic").disabled = false;

	}
}

// Check if checkboxes are checked (done to prevent selecting conflicting options)
function areOthersChecked() {
	// Get the checkboxes
	var checkBox1 = document.getElementById("Vegetarian");
	var checkBox2 = document.getElementById("GlutenFree");
	var checkBox3 = document.getElementById("Nut");
	var checkBox4 = document.getElementById("Lac");
	var checkBox5 = document.getElementById("Organic");
  
	// If the checkboxes are checked, execute code
	if (checkBox1.checked || checkBox2.checked || checkBox3.checked || checkBox4.checked || checkBox5.checked){
		document.getElementById("None").disabled = true;
	} else {
		document.getElementById("None").disabled = false;
	}
}

// Toast notifcation code (from w3schools link)
function toastAlert() {
	// Get the snackbar DIV
	var x = document.getElementById("snackbar");
  
	// Add the "show" class to DIV
	x.className = "show";
  
	// After 3 seconds, remove the show class from DIV
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }