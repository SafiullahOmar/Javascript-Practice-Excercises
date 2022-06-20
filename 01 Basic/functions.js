const func =  (a, b) =>{  if (a == 100 || b == 100 || (a+b)==100)
        return true;

}

const getFileExtension=(str)=> 
str.slice(str.lastIndexOf('.'));


console.log(func(50,50));

console.log(getFileExtension('myfile.txt'));