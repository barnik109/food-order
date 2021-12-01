function placeorder()
{
    document.getElementById("ord sum").style.display="block";

    urname=document.getElementById("name");
    mobile=document.getElementById("mobile");l
    burger=document.getElementById("optnburger");
    roller=document.getElementById("optnroller");
    fries=document.getElementById("optnfries");
    
    var mcost=0;
    var acost=0;
    var mname=" ";
    var aname=" ";
   if(burger.checked)
   {
   mcost=120;
   mname=burger.value;
   }
   if(roller.checked)
   {
   mcost=100;
   mname=roller.value;
   }
   if(burger.checked)
   {
   mcost=120;
   mname=burger.value;
   }
   if(fries.checked)
   {
   acost=60;
   mcost+=acost;
   aname+=fries.value+"<br>"
   }
   document.getElementById("lblname").innerHTML=urname.value;
   document.getElementById("lblmob").innerHTML=mobile.value;
   document.getElementById("lblmeal").innerHTML=mname;
   document.getElementById("lblbill").innerHTML=mcost;
   document.getElementById("adon").innerHTML=aname;
}