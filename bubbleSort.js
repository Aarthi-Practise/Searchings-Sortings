export const bubbleSort = (inputArray) => {
	if(inputArray.length==0){
		return "array empty";
	}
	for(var i=0;i<inputArray.length;i++){
		for(var j=0;j<inputArray.length;j++){
			if(inputArray[j]>inputArray[j+1]){
				var temp=inputArray[j];
				inputArray[j]=inputArray[j+1];
				inputArray[j+1]=temp;
			}
		}
	}
	return inputArray;
};
console.log(bubbleSort([5,1,-4,2,8]))
