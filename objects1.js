// №1
function n1 (){
    let user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete"
    delete user.name;
    console.log(user)
}
//№2
function n2() {
    let obj = {"Коля": '1000',
    'Вася' : "500",
    "Петя": "200"
    };
    console.log(obj["Коля"]);
}
//№2.1
function n21(){
    let sotrudn = [{namee: 'Ivan', age:25},{namee:'Alexey', age: 30},{namee:"Stepan", age:35}];
    function getInfo(sotr_mas){
        let itog_mas = [];
        for (i=0;i<=sotr_mas.length-1;i++){
            itog_mas[i]=`${sotr_mas[i].namee} ${sotr_mas[i].age} лет`;
        }
        console.log(itog_mas);
    }
    getInfo(sotrudn)
}
// №3
function n3(){
    let user = [{name: 'John', age:30},{name:'Bob', age: 21},{name:"Anna", age:19}], bob;
    for (i=0;i<=user.length-1;i++){
        if (user[i].name == "Bob"){
            bob = user[i];
        }
        if (user[i].name == "Anna"){
            user.splice(i,1);
        }
    }
    console.log(bob);
    console.log(user);
}
// №4
function n4(){
    let my_name = {
        name: "Thomas",
        surname: "Anderson",
        getName (){
            console.log(this.name, this.surname);
        }
    }
    my_name.getName();
    console.log(my_name);

    my_name.printMyName = function() {
        console.log("My name is", this.name, this.surname);
    }
    my_name.printMyName();

    delete my_name.getName;
    console.log(my_name);
}
//№5
function n5(){
    function calc(a,b){
        let calculator = {
            a,
            b,
            sum(){console.log(a,"+",b,"=",a+b);},
            mul(){console.log(a,"*",b,"=",a*b)}
        }
        calculator.sum();
        calculator.mul();
    }
    calc(5,5)
}
//Вызовите функцию, соответствующую номеру задания
