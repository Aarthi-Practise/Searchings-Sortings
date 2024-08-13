export const mergeSort = (inputArray) => {
	if(inputArray.length==0){
		return "array empty";
	}
	//EDGE CAES:1
	if(inputArray.length==1){
		return inputArray;
	}
	// MERGE SORT RECURSION
	else{
		const mid=Math.floor(inputArray.length/2);
		const left_array=inputArray.slice(0,mid);
		const right_array=inputArray.slice(mid);
		return merge(mergeSort(left_array),mergeSort(right_array));
	}
}
const merge=(left_array,right_array)=>{
	const sorted=[];
	while(left_array.length>0 && right_array.length>0){
		if(left_array[0]<=right_array[0]){
			sorted.push(left_array.shift());
		}
		else{
			sorted.push(right_array.shift());
		}
	}
	sorted.push(...left_array);
	sorted.push(...right_array);
	return sorted;
}
console.log(mergeSort([100,90,60,50,40]));