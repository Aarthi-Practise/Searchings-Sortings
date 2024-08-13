export const insertionSort = (inputArray) => {
	if(inputArray.length==0){
		return "array empty";
	}
	for(var i=1;i<inputArray.length;i++){
		var num=i;
		for(var j=i-1;j>=0;j--){
			if(inputArray[i]<inputArray[j]){
				var swap=inputArray[j];
				inputArray[j]=inputArray[i];
				inputArray[i]=swap;
				i=j;
			}
		}
		i=num;
	}
	return inputArray;
};
console.log(insertionSort([10,20,30,4,0,5,20]));
