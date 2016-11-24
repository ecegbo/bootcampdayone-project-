var findMinMax = module.exports = function (myArray){
	var min = myArray[0];
	var max = myArray[0];

	for(var i = 1; i < myArray.length; i++){
		if (min > myArray[i]){
			min = myArray[i];
		}
		else if(max < myArray[i]){
			max = myArray[i];
		}
	}

	if (min == max){
		return [min];
	}
	else{
		return [min, max];
	}

	
};