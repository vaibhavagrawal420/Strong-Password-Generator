const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*()_+}{:;'[]?/>.<,";
function upcase(){
    return uppercase[Math.floor(Math.random()*uppercase.length)];
}
function lwcase(){
    return lowercase[Math.floor(Math.random()*lowercase.length)]
}
function numcase(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function symbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}
function generatePassword(){
    const uppercasechecked=document.getElementById('uppercase').checked;
    const lowercasechecked=document.getElementById('lowercase').checked;
    const numsberschecked=document.getElementById('numbers').checked;
    const symbolschecked=document.getElementById('symbols').checked;
    let str="";
    if(uppercasechecked)str+=upcase();
    if(lowercasechecked)str+=lwcase();
    if(numsberschecked)str+=numcase();
    if(symbolschecked)str+=symbol();
    if(str==""){
        alert("Please select at least one character type.");
        return;
    }
    let password = "";
    const num=parseInt(document.getElementById('length').value);
    for(let i=0;i<num;i++){
        const randomChar = str[Math.floor(Math.random() * str.length)];
        password += randomChar;
    }
    const boss=document.getElementById('password');
    boss.value=password;
}
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy password."));
}