
// DOM1

// console.log(h1_id.innerText);

// DOM2

// h2_id.innerText = "my DOM app";

// DOM3

// var h_classEl = document.getElementsByClassName("h_class");
// console.log(h_classEl);
// console.log(h_classEl[1]);
// console.log(h_classEl[2].innerText);

// DOM4

// var parag = document.getElementsByClassName("p_class");
// console.log(parag[0].innerText,parag[1].innerText,parag[2].innerText,parag[3].innerText);

// DOM5 

// function h2Func(){
//     var textFromUser = prompt("enter a valid name!")
//     document.write("<h2>" + textFromUser + "</h2>");
// } 
//  h2Func()

//  DOM6

//  function getColorFunc(){
//      var numberFromUser = +prompt("chose a number !");
//      for (var i = 0 ; i<numberFromUser; i++){
//     var colorFromUser = prompt("chose a color !");
//     console.log("<span>"+colorFromUser+ "</span>")
// }
// }

// function textUserFunc (){
//     var textfUser = prompt("type Text!"); 
//   var tagfUser1 = prompt("chose an html open <tag> !");
//   var tagfUser2 = prompt("chose an html closing </tag>");

//   document.write(tagfUser1 + textfUser + tagfUser2);
// } 
// textUserFunc ();

// DOM10

// function getfUseri () {
//     var inputFuser = prompt("Enter type of input!");
//     document.write(document.innerHTML= "<input type=" + inputFuser + "/>");

// }
// getfUseri ();
    // var body = document.body;
    // var input = document.createElement("input")
    // input.type = inputFuser;
    // body.append(input);
// }
// getfUseri ();

// DOM11

// function textClassFunc (classN,textfUser){
//     var className = document.getElementsByClassName(classN);
//     for (var i=0; i<className.length; i++ ){

//         className[i].innerText= textfUser;
//     }

// }
// textClassFunc ("classN","hello there");

// DOM12

// function tagNameFunc() {
    
//     var pArray = document.getElementsByTagName("p")
//     for (var i =0; i<pArray.length ;i++){
    
//         pArray[i].innerHTML= "<span> hello abay </span>";
//     }
// }
// tagNameFunc()

// DOM13 

// function personalFunc () {
//     var firstName = prompt("Enter first name!");
//     var lastName = prompt("Enter last name!");
//     var age = +prompt("Enter your age!");
//     var personInform = firstName+ "  " + lastName+ "  " + age;
//     document.body.append(personInform)
//     if(age>18){
//      var a= document.createElement("input");
//      document.body.append(a)
//     }
// }
// personalFunc ()

// DOM14

// function movieFunc () { 
//     var nomOfMovies = +prompt("Enter a number!")
//     for( var i = 0 ; i<nomOfMovies; i++){
//     var movieObject= {
//         movieName:prompt("Enter a name!"),
//         views:+prompt("Enter views!"),
//         year:+prompt("Enter a year!"),
//         moviePic:prompt("enter an img src!")
//     }
//     document.body.innerHTML+=
// "<h1>"+ movieObject.movieName+"</h1>" + 
//         movieObject.views + 
// "<h6>"+ movieObject.year+ "</h6>" +
// "<img src="+movieObject.moviePic+">";
// }
// }
// movieFunc () 

// DOM15
//      var workerObject = {
//          firstName:prompt("Enter first name!"),
//          lastName:prompt("Enter last name!"),
//          emailNa:prompt("Enter email!"),
//          depatment:prompt("Enter department!")
//      }
//      document.body.innerTEXT=
// "<h1>" + workerObject.firstName +"</h1>" +
// "<h2>"+ workerObject.lastName +"</h2>"+
// "<h3>"+ workerObject.emailNa +"</h3>"+
//  "<h4>"+ workerObject.depatment + "</h4>";

//  DOM16

// function numOfObFunc() {
//     var numberFromUser = +prompt("Enter a number!")
//     for (var i = 0 ; i < numberFromUser; i++){
//         var buldingObject={
//             contractorName:prompt("Enter a contractor Name!"),
//             companyName:prompt("Enter a company name!"),
//             numOffloor:+prompt("Enter number of floor!"),
//             numOfFlats:+prompt("enter nomber of flats!")
//         }
//         document.body.innerHTML+= "<h1>"+ buldingObject.contractorName+"</h1>"+"<h2>"+ buldingObject.companyName+"</h2>"+"<h3>"+ buldingObject.numOffloor+"</h3>"+"<h4>"+ buldingObject.numOffloor+"</h4>";

//     }
// }
// numOfObFunc()
     
// DOM17

// function getFusera() {
//     var numberOfPrint = 0 ;
//     var numFuser 
//     = +prompt("Enter Number!");
//     for (var i = 0; i<numFuser; i++){
    //    var objectStore = {
    //        storeName : prompt(),
    //        address : prompt(),
    //        department : prompt(),
    //        empolyes : +prompt("number of empolyes")
    //    }
//        if (objectStore.empolyes>10){
//             numberOfPrint++;
//             document.write( "<p>" + objectStore.storeName + "</p>"+ "<h1>"+ objectStore.address+"</h1>" + "<h2>" + objectStore.department+"</h2>" + "<h3>"+ objectStore.empolyes+"</h3>" + "<br>" )
//         }
        
       
//     }
//     return numberOfPrint;
// }


// function numberOfPrints(numOfPrint){
//     document.write(numOfPrint);
// }
// numberOfPrints(getFusera())

// DOM19
// function numofObFunc (){
//     var myid=document.getElementById("my_ul");
//     var numfUser= prompt("Enter a number");
//     for (var i = 0 ; i<numfUser; i++){
//         var contactObject = {
//             fullName:prompt("Enter full name!"),
//             company:prompt("Enter a company!"),
//             phoneNum:prompt("Enter phone number!"),
//             cellPhone:prompt("Enter cell phone!"),
//             userEmail:prompt("Enter a valid mail!")
//         }
//         myid.innerHTML += "<li>"+contactObject.fullName+ "</li>";
//     }

// }
// numofObFunc ()
// 
// DOM20
function docFunc (){
    var docid = document.getElementById("my_table")
    var docNum = prompt("Enter a number")
    for (var i = 0 ; i < docNum ; i++){
         var docObject = {
             fullName:prompt("Enter full name!"),
             expertise:prompt("Enter expertise!"),
             phoneNumber:prompt("Enter phone!"),
             validDoc:prompt("Enter if the doc is valid!"),
             docMail:prompt("Enter mail!")
         }
         docid.innerHTML += "<tr>" + "<td>" + docObject.fullName +  "</td>" +"</tr>"+"<tr>" + "<td>" + docObject.expertise +  "</td>" +"</tr>" + "<tr>" + "<td>" + docObject.phoneNumber +  "</td>" +"</tr>" + "<tr>" + "<td>" + docObject.validDoc +  "</td>" +"</tr>" + "<tr>" + "<td>" + docObject.docMail +  "</td>" +"</tr>" ;
    }
}
docFunc ()
// getColorFunc();
// var h1Element = document.getElementsbyid("h1_id");
// h1_id.style.color = "red";

// h1_id.innerText="";
