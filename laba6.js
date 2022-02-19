// Напишите функцию filter(), фильтрующую массив объектов по значению свойства.
// Массив, название свойства и нужное значение должны передаваться в качестве
// аргументов.

let objects = [
    { name:'Пётр', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров'}
]

function filter(object,propertyOfObj,inputData){
    let match = 0;
    for (i=0;i<=object.length-1;i++){
        if (object[i][propertyOfObj] == inputData){
            console.log(object[i]); 
            match++;
        }
    }
    if (match == 0){
    console.log("Совпадений не найдено")
    }
    console.log("Совпадения найдены (", match, ")")
}

filter(objects,'name','Иван');