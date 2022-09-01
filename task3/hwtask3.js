
/*
 function mul(a,b) {
    let res = 1;
    for (let i = 0; i < arguments.length; i++) {        
         if (!isNaN(arguments[i])) {
            res *= arguments[i] ;    
         }
       
    }
    return res;  
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0
 
*/


function mul(...args) {
    let res = 1;
    let ischk = false;
    args.forEach(element => {
        if (!isNaN(element) && typeof element === 'number') {
            res *= element ;
            ischk = true;
           // console.log(element);    
         }
    })
   if (ischk){
    return res;  
   }
   else
   {
    return 0;  
   } 
 }
 console.log(mul(1, "str", 2, 3, true)); // 6
 console.log(mul(null, "str", false, true)); // 0