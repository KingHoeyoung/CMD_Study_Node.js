var name = 'k8805';
var letter = 'Dear '+name+'\n\n어쩌고 '+name+' 저쩌고 '+name;

//literal이란 정보를 표현하는 방법

var letter = `Dear ${name}

어쩌고 ${name} 저쩌고 ${name}`;

console.log(letter);