/*
	
Code to place an order, resulting in the creation of a cookie
Triggered by this HTML event -  onclick="placeOrder('Q517','Cat Collar','7.99',0)"

Taken from Tutorial 9 of
Carey, P., & Canovatchel, F. (2006). New Perspectives on Javascript. Boston, MA: Thompson Course Technology.

*/

var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

function clearValue(n){
   if(n == 0) {
      document.getElementById("qty0").value = "";
   } else if(n == 1) {
      document.getElementById("qty1").value = "";
   } else if(n == 2) {
      document.getElementById("qty2").value = "";
   } else { 
      document.getElementById("qty3").value = "";
   }
}

function placeOrder(myItemName, myImage, myPrice, myItemNumber){
// myItemNumber is an arbitrary identifed used in the HTML to mark an item
// if more than 4 items on the page, need to add more cases

   switch(myItemNumber) {
      case 0:
         myOrderQuantity = document.getElementById("qty0").value;
         break;
      case 1:
         myOrderQuantity = document.getElementById("qty1").value;
         break;
      case 2:
         myOrderQuantity = document.getElementById("qty2").value;
         break;
      case 3:
         myOrderQuantity = document.getElementById("qty3").value;
   }
   if(myOrderQuantity == 0) {
      alert("Please enter a quantity greater than zero.");
      return false;
   }
   document.cookie = "myitem"+ myItemNumber +" = "+ myItemName +","+ myImage +","+ myPrice +","+ myOrderQuantity +";expires = " + expdate.toGMTString();
   alert("You have added "+ myOrderQuantity +" of the "+ myItemName +" to your shopping cart.");
}
function test() {
   alert(document.cookie);
}