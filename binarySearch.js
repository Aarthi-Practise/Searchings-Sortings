const binarysearch = (inputArray, searchKey) => {
	if(inputArray.length==0){
		return "array empty";
	}
	let high=inputArray.length-1;
	let low=0;
	let mid=Math.floor((high+low)/2);
	while((mid>-1)&& (low<inputArray.length)){
		if(searchKey==inputArray[mid]){
			return mid;
		}
		else if(searchKey>inputArray[mid]){
			low=mid+1;
			mid=Math.floor((high+low)/2);
		}
		else if(searchKey<inputArray[mid]){
			high=mid-1;
			mid=Math.floor((high+low)/2);
		}  
	}
	return "not found";
};
export const binarySearch=(inputArray,searchKey)=>{
	inputArray=inputArray.sort(function(a,b){
		return a-b;
	})
	return binarysearch(inputArray,searchKey);
}
//console.log(binarySearch([1,21,45,40,33,24],21));
