import { binarySearch } from "./binarySearch.js";
import { linearSearch } from "./linearSearch.js";

export const genericSearch = (inputArray, searchKey) => {
	if(inputArray.length==0){
		return "array empty";
	}
	var original=[...inputArray];
	var sorted=inputArray.sort(function(a,b){
		return a-b;
	})
	var count=0;
	for(var i=0;i<original.length;i++){
		if(original[i]!=sorted[i]){
			count++;
		}
	}
	if(count==0){
		return `with binary search :${binarySearch(sorted,searchKey)}`;
		//return "yes";
	}
	else{
		return `with linear search: ${linearSearch(original,searchKey)}`;
		//return "no";
	}
};

console.log(genericSearch([10,20,30,40,50],20));