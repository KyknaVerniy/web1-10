for(var i =1; i < 100; i++){
var li = document.createElement('li');
if(i%15==0){
li.textContent = 'FIZZBUZZ' ;
}
else if(i%5==0){
li.textContent = 'BUZZ';
}
else if(i%3==0){
li.textContent = 'FIZZ';
}
else{
li.textContent = '' + i;
}
document.getElementById('list').appendChild(li);
}


