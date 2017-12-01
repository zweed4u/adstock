var flag=false;
// lol this doesnt work. redirect reloads the script - prompts again
if (flag==false){
	var style=prompt("Enter a style code", "eg. BZ0223");
	window.location.href='https://www.adidas.com/on/demandware.store/Sites-adidas-US-Site/en_US/Product-Show?pid=%20'+style;
	flag=true;
}
var stock=0;
var info='';
for (i=1; i<document.getElementsByName('pid')[0].children.length; i++){
	var size=document.getElementsByName('pid')[0].children[i];
	info+=('Size: '+ size.textContent.trim()+' :: Stock: '+size.getAttribute('data-maxavailable')+ ' :: Max Qty: '+size.getAttribute('data-maxorderqty')+'\n');
	stock+=parseInt(size.getAttribute('data-maxavailable'));
}
alert(info+'\nTotal Stock: '+stock)
