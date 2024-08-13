export const linearSearch = (inputArray, searchKey) => {
	if(inputArray.length==0){
		return "array empty";
	}
	for(let i=0;i<inputArray.length;i++){
		if(searchKey==inputArray[i]){
			return i;
		}
	}
	return "not found";
};
//console.log(linearSearch([1,2,3,5,4,6,8,7],5));
