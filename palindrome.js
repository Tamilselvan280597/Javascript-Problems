function palindrome(str){
var p = str.split("").reverse().join("");
if(p === str){
    return true;
}else{
    return false;
}
}
console.log(palindrome("eye"));
