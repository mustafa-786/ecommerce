var discount_code1 =document.getElementById('discount_code1')
var discount_code_msg=document.getElementById('discount_code_msg')
var product_total_amt=document.getElementById('product_total_amt')
var total_cart_amt = document.getElementById('total_cart_amt')
function discount()
{
  if(discount_code1.value ==='mustafa')
  {
    discount_code_msg.innerText='Hurray! code is valid'
    if(total_cart_amt.innerHTML ==='0.00') {
      total_cart_amt.innerHTML ='0.00'
    }
    else{
    total_cart_amt.innerHTML =parseInt(total_cart_amt.innerHTML) -15 
    }
    
    //current_total_amount -15
  }
  else{
    discount_code_msg.innerText='Try Again! Valid code is mustafa'
  }
 
}
function increment(incdec,itemval) {
  var textbox = document.getElementById(incdec);
  var itemval = document.getElementById(itemval);
 
  var shipping_charge = document.getElementById('shipping_charge')
  console.log(total_cart_amt)
  console.log(product_total_amt)
  if(textbox.value>=5)
  {
    
    textbox.value=5
    alert("maximum 5 quantity is allowed");
    textbox.style.backgroundColor = "red";
   
  }
  else{
    textbox.value = parseInt(textbox.value) +1
    itemval.innerHTML= parseInt(itemval.innerHTML) +15
    product_total_amt.innerHTML = parseInt( product_total_amt.innerHTML) + 15
    
    total_cart_amt.innerHTML= parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
  }
}

function decrement(incdec,itemval) {
  var textbox = document.getElementById(incdec);
  var itemval = document.getElementById(itemval);
 
  var shipping_charge = document.getElementById('shipping_charge')
  if(textbox.value <=0)
  {
    textbox.value=0
    textbox.style.backgroundColor = "";
  }
  else{
    textbox.value = parseInt(textbox.value) -1
    itemval.innerHTML= parseInt(itemval.innerHTML) -15
    product_total_amt.innerHTML = parseInt( product_total_amt.innerHTML) - 15
    total_cart_amt.innerHTML= parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML)
  }
}
