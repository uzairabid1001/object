var student1 = {
    name:"hamza",
    fatherName:"jawaid",
    result: "pass",
    contact:"0300000000"
 }
 
 var student2 = {
     name:"Moiz",
     fatherName:"ali",
     result: "fail",
     contact:"03400000000"
  }
 
  var student3 = {
     name:"Moen",
     fatherName:"akhter",
     result: "pass",
     contact:"03300000000"
  }
 
  var student4 = {
     name:"shadab",
     fatherName:"abbas",
     result: "pass",
     contact:"0320000000"
  }
 
  var student5 = {
     name:"imad",
     fatherName:"wasim",
     result: "fail",
     contact:"031000000000"
  };
 
   var studentlist = [student1,student2,student3,student4,student5]
   var tbody =document.getElementById("names")
  
   student1.rollNo = 1
   student2.rollNo = 2
   student3.rollNo = 3
   student4.rollNo = 4
   student5.rollNo = 5
 
   for(var i=0; i<studentlist.length; i++){
     //   studentlist[i].rollNo = i + 1;
       var obj =studentlist[i]
       names.innerHTML += "<tr><td>"+obj.rollNo+
       "</td><td>"+obj.name+"</td><td>"
       +obj.fatherName+"</td><td>"+obj.contact
       +"</td><td>"+obj.result+"</td></tr>"
   }
 
 function searchstd(){
     var inpva = document.getElementById("inpva")
     var roll = document.getElementById("roll")
     var nam = document.getElementById("nam")
     var father = document.getElementById("father")
     var cont = document.getElementById("cont")
     var res = document.getElementById("res")
 
     for(var i=0; i<studentlist.length; i++){
         var std = studentlist[i];
         if (inpva.value == std.rollNo){
             console.log(std)
             roll.innerHTML = std.rollNo
             nam.innerHTML = std.name
             father.innerHTML = std.fatherName
             cont.innerHTML = std.contact
             res.innerHTML = std.result
 
         }
     }
 }