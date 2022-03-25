



function calculate(){
   const islam = document.getElementById('islam').value;
   const bangla = document.getElementById('bangla').value;
   const math = document.getElementById('math').value;
   const english = document.getElementById('english').value;


   const totalResult = Number(islam)+Number(bangla)+Number(math)+Number(english)
   const avarage = (totalResult*100)/400
   

   if (avarage >= 90){
    var grade ='Grade A';
 }else if(avarage >= 80){
    var grade ='Grade B';
 }else if(avarage >= 70){
    var grade ='Grade C';
 }else if(avarage >= 60){
    var grade ='Grade D';
 }else if(avarage >= 40){
    var grade='Grade E';
 }else if(avarage < 40){
    var grade='You Are Fail';
 }
 
 document.getElementById('box_two').style.display='block'
 document.getElementById('box_two').innerHTML=`Total Marks : ${totalResult} out of 400 <br> Your Grade Is : ${grade} <br>
 Your Percentage is: ${avarage} %`;





}


 


