for(var i =1; i < 100; i++){
var li = document.createElement('li');
var damage = Math.floor(Math.random() * 100);
if(damage/3=0||damage/5=0){
li.textContent = 'FIZZBUZZ' ;
}
else if(damage/5=0){
li.textContent = 'BUZZ';
}
else if(damage/3=0){
li.textContent = 'FIZZ';
}
else{
li.textContent = '' + damage;
}
document.getElementById('list').appendChild(li);
}


