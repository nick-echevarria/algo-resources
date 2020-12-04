//In order to implement merge sort, it's useful to first 
//implement a function responsible for arranging elements, 
//in an array on either side of a pivot. 

//********************************************************

//PSEUDOCODE

//Given an array, this helper function should designate an
//element as the pivot. 

//It should then rearrange elements in the array so that
//all values less than the pivot are moved to the left of 
//the pivot, and all values greater than the pivot
//are moves to the right of the pivot. 

//NOTE: The order of elements on either side of the pivot doesn't
//matter. 

//NOTE: The helper function should do this *in place*, meaning
//it should not create a new array

//When complete, the helper should return the index of the
//pivot. 