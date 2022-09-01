let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];


function mapBuilder(keysarr, valuesarr){
    let result = {};
    let res = {}; 
    
    //keysarr.forEach((keysarr,i)=>console.log(valuesarr[i],i,keysarr));

    keysarr.forEach((keysarr, i) => result[keysarr] = valuesarr[i]);
    
    //console.log(result);
     const myMap	= new Map(Object.entries(result));
     
     //console.log(myMap);
      
 return myMap;
}


let map = mapBuilder(keys, values);


console.log(map.size); // 4
console.log(map.get('2')); // "span"
