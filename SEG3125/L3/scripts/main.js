
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}

	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkboxes
function populateListProductChoices(slct1, slct2) {
    var s2 = document.getElementById(slct2);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label');
		label.htmlFor = productName;

		// Create image for checklist
		var img = new Image();
		img.src = getPic(productName);
		img.id = "cl-image"
		label.appendChild(img);

		// Find price associated with item being added
		var itemPrice = products.find(itemPrice => itemPrice.name === productName).price;
		
		label.appendChild(document.createTextNode(" " + productName + " ($" + itemPrice + "/item)"));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price
var chosenProductsArr = [];

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected: ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
			chosenProductsArr.push(ele[i].value);
		}
	}
		
	// Add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Cart Total is $" + getTotalPrice(chosenProducts)));
		
}

// From: https://www.w3schools.com/jsref/dom_obj_image.asp
function changeit(option) {

	console.log(option);
	if (option === "salade")
	  document.getElementById("imgselect").setAttribute("src", "https://druxys.com/wp-content/uploads/2016/11/SaladThumb-GardenSalad.png");
  
}

//Helper function to pick correct image for checklist 
function getPic(prod) {
	var img;

	if (prod == "Almond Butter"){
		img = "images/FB-butter.png";
	}
	else if (prod == "Broccoli"){
		img = "images/FB-broccoli.png";
	}
	else if (prod == "Organic Apple Slices"){
		img = "images/FB-apple-slices.jpg";
	}
	else if (prod == "Multigrain Bread"){
		img = "images/FB-bread.png";
	}
	else if (prod == "Organic Milk"){
		img = "images/FB-milk.png";
	}
	else if (prod == "Almonds"){
		img = "images/FB-almonds.png";
	}
	else if (prod == "Organic Cheeses"){
		img = "images/FB-cheese.jpg";
	}
	else if (prod == "Organic Asparagus"){
		img = "images/FB-asparagus.png";
	}
	else if (prod == "Pistachios"){
		img = "images/FB-pis.jpg";
	}
	else if (prod == "Chicken"){
		img= "images/FB-chicken.png";
	}
	else if (prod == "Salmon"){
		img = "images/FB-salmon.png";
	}

	return img;

}