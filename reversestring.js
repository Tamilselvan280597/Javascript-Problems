function reverseString(str){
//     var strArr = str.split("");
//     var reverseString = strArr.reverse();
//     var joinString = reverseString.join("");
//     return joinString;

// return str.split("").reverse().join("");

var final = "";
for(var i=lenght-1; i>=0; i--){
final = final + str[i];
}
return final;
}
console.log(reverseString(hello));