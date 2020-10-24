//file-system
const fs=require('fs');
//for reading json file
const jsondata=fs.readFileSync('data.json').toString();
//parse json data
var data=JSON.parse(jsondata);
//storing final result
var arraydata=[];
//length of fields
const lenOfAnsArrays=data.form_response.definition.fields.length
for(var i=0;i<lenOfAnsArrays;i++)
{
    //to find id
    var newid=data.form_response.definition.fields[i].id;
    //to find question
    var question=data.form_response.definition.fields[i].title;
    //find answer type
    var type_answer=data.form_response.answers[i].type;
    //find answer value
    var answer_value=data.form_response.answers[i];
    //find answer
    var answer=answer_value[type_answer];
    //if type of answer is object 
    if(typeof(answer)=='object'){
        answer=answer[Object.keys(answer_value[type_answer])]
    }
    var array1={};
    //storing value in object
    array1={id:newid,question:question,answer:answer};
    //storing each value in array
    arraydata.push(array1)
}
//convert object into string 
console.log(JSON.stringify(arraydata));