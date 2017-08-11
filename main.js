var stringForMatrix ='ABCĆČDĐEFGHIJKLMNOPQRSŠTUVWXYZŽ'
                    +'abcčćdđefghijklmnopqrsštuvwxyzž'
                    +'ΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉ'
                    +'ίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯă'
                    +'âêôơưאבגדהוזחטיכךלמםנןסעפףצץקרשת1234567890' 
    arrayCol = [];
    matrixContainer = document.getElementById('matrix');

for(var i = 0 ; i < 40 ; i++){
    ul = document.createElement('ul');
    ul.id = i;
    arrayCol.push(i);
    matrixContainer.appendChild(ul);
}

function startInterval(id){
setInterval(function(id){
    var ul = document.getElementById(id);
    var li = document.createElement('li');
    li.innerHTML = stringForMatrix.substr(Math.floor((Math.random() * (stringForMatrix.length - 2)) + 1),1);
    Math.round(Math.random()) ? 
                                li.style.color = 'white' 
                              : 
                                li.style.color = 'green' ;
    ul.insertBefore(li,ul.children[0]);
    },900,id);
}
function verifeOnExistInArray(index){
    if(arrayCol.length == 0){
        return 0 ;
    }
    var elements = arrayCol[index];
    arrayCol.splice(index , 1);
    return {elements};
}
function startColons(){
    var number = Math.floor((Math.random() * arrayCol.length));
    var elements = verifeOnExistInArray(number)
    elements ? startInterval(elements.elements) : clearInterval(interval);
}

var interval = setInterval(function(){
    startColons();
},300);



