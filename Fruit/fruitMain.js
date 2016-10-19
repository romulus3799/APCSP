var fruitArray = [
	{name:"pomegranate", price:1.99},
	{name:"bananas", price:0.29},
	{name:"oranges", price:2.99},
	{name:"apples",price:3.29},
	{name:"grapes",price:3.99}
];

function displayFruit(){
	document.getElementById("divDisplay").innerHTML = "";
	for(i = 0; i < fruitArray.length; i++){
		document.getElementById("divDisplay").innerHTML += 
			fruitArray[i].name + ": $" + fruitArray[i].price + "<br>";
	}
}

function sortFruitNames(){
	for(i = fruitArray.length; i > 1; i--){
		for(j = 0; j < i-1; j++){
			if(fruitArray[j].name > fruitArray[j+1].name){
				temp = fruitArray[j];
				fruitArray[j] = fruitArray[j+1];
				fruitArray[j+1] = temp;
			}
		}
	}
	displayFruit();
}

function sortFruitPrices(){
	for(i = fruitArray.length; i > 1; i--){
		for(j = 0; j < i-1; j++){
			if(fruitArray[j].price > fruitArray[j+1].price){
				temp = fruitArray[j];
				fruitArray[j] = fruitArray[j+1];
				fruitArray[j+1] = temp;
			}
		}
	}
	displayFruit();
}

function addFruit(){
	fruitName = document.getElementById("txtFruit").value;
	fruitPrice = parseFloat(document.getElementById("txtPrice").value.replace('$',''));
	if(fruitName != '' && !isNaN(fruitPrice)){
		fruitArray.push({name:fruitName,price:fruitPrice});
        document.getElementById("txtFruit").value = '';
        document.getElementById("txtPrice").value = '';
        document.getElementById('errorMessage').innerHTML = '';
        document.getElementById('errorMessage').style.display = 'none';
        displayFruit();
	}
    else if (fruitName == ''){
        document.getElementById('errorMessage').innerHTML = 'You must enter a fruit name!';
        document.getElementById('errorMessage').style.display = 'block';
    }
    else if (isNaN(fruitPrice)){
        document.getElementById('errorMessage').innerHTML = 'You must enter a valid price!';
        document.getElementById('errorMessage').style.display = 'block';
    }
}

function swapStyleSheet(sheet){
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

setTimeout(displayFruit,100);