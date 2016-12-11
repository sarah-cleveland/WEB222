/*
	
Taken from Tutorial 9 of

Carey, P., & Canovatchel, F. (2006). New Perspectives on Javascript. Boston, MA: Thompson Course Technology.
Adapted by: Lucian Bor
For: X-Badge, Internet Commerce, Baker College Online.
		
*/

var now = new Date();
var expdate = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);

function findCookie(val) {
   var cookie = null;
   var findVal = val + "=";
   var dc = document.cookie;
   if (dc.length > 0) {
      var start = dc.indexOf(findVal);
      if (start >= 0) {
         start += findVal.length;
         lastVal = dc.indexOf(";", start);
         if (lastVal == -1) {
            lastVal = dc.length;
	 }
         cookie = (dc.substring(start, lastVal));
      } else {
         return cookie;
      }
   }
   return cookie;
}


function delProd(prod){
   document.cookie = "myitem"+prod+" = ;expires = Thu, 01-Jan-70 00:00:01 GMT;";
   location.reload();
}


function showOrder(){
	var subTot = 0;
	var prod = new Array();
	prod[0] = findCookie("myitem0");
	prod[1] = findCookie("myitem1");
	prod[2] = findCookie("myitem2");

	prod[3] = findCookie("myitem3");
	var totalCost = 0;
	var salesTax = 0.06;
	if((prod[0] == null)&&(prod[1] == null)&&(prod[2] == null)&&(prod[3] == null))
		{
			document.write("<tr><td colspan='6'>");
			document.write("Your cart is empty.");
			document.write("</td></tr>");
		}
	for(i=0;i<=prod.length;i++)
		{
		if((prod[i] != null)&&(prod[i] != ""))
			{
			document.write("<tr><th>");
			start = prod[i].split(',');
			start1 =  start[0];
			document.write(start1+"</th><td><img src='");

			name = prod[i].indexOf(",")+1;
			name2 = prod[i].indexOf(",",name);
			prod_name = prod[i].substring(name,name2);
			document.write(prod_name+"' width='75px' height='75px'/></td><td>");

			price = prod[i].indexOf(",",name2)+1;
			price2 = prod[i].indexOf(",",price);
			prod_price = parseFloat(prod[i].substring(price,price2));
			price = prod_price.toFixed(2);
			document.write("$"+price+"</td><td>");

			quant = parseInt(start[3]);			
			document.write(quant+"</td><td>");
			
			cost_raw = quant*prod_price;
			cost_tot = cost_raw;
			subTot += cost_tot;
			cost = cost_raw.toFixed(2);
			document.write("$"+cost+"</td><td>");
			document.write("<a href=# onclick = 'delProd("+[i]+")'><button class='btn btn-danger'>Remove Item</button></a>");
			document.write("</td>");
			totalCost += cost_raw;

			}
		
	  	}
	  	tax = totalCost * salesTax;
	  	taxedTotal = totalCost + tax;
	  	document.write('<tr><th colspan="4" style="text-align: right">Sub Total</th><td>$'+totalCost.toFixed(2)+'</td><td></td>');
	  	document.write('<tr><th colspan="4" style="text-align: right">Total Sales Tax</th><td>$'+tax.toFixed(2)+'</td><td></td>');
	  	document.write('<tr><th colspan="4" style="text-align: right">Total</th><td>$'+taxedTotal.toFixed(2)+'</td><td><a href="./checkOut.html"><button class="btn btn-danger">Check Out</button></a></td>');
		
}
