window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("type_product");
  	radios.style.display = "none";
  	checkk.style.display = "none";
	let price="70";//глобальная переменная;
  s[0].addEventListener("change", function(event) {
    let select = event.target;//ссылка на объект, который был инициатором события
    let radios = document.getElementById("radios");
	let checkk=document.getElementById("checkk");
	
    if (select.value == "eclair") {
      radios.style.display = "none";
	  checkk.style.display = "none";
	  price="60";
    }
	if(select.value == "croissant")
	{
		radios.style.display = "none";
		checkk.style.display = "block";
		price="50";
		 document.getElementByName("checkboxx").addEventListener("change",function(event){
		let ch=event.target;
		if(ch.checked){price="55"};
	  });
	}
    if(select.value == "wafer") {
	   checkk.style.display = "none";
      radios.style.display = "block";
	  document.getElementsByName("ropt").addEventListener("change",function(event){
		let opt=event.target;
		if(opt.value=="belg"){price="70"};
		if(opt.value=="ven"){price="80"};
		if(opt.value=="gol"){price="90"};
	  });
    }
  });
    let r = document.querySelectorAll(".radios input[type=radio]");
  r.forEach(function(radio) {
   radio.addEventListener("change", function(event) {
    //  let r = event.target;//ссылка на объект, который был инициатором события
    //  console.log(r.value);//вывод в консоль
    });    
  });
	let m=document.getElementsById('main-form');
	m.addEventListener("submit",function(event){
	
	event.preventDefault();
	var el=document.getElementById('main-form');
	let amount=el.amount.value;
	let res; let fail="";
	if(amount=="")
	{
		fail="Заполните поле";
	}
	if(isNaN(amount))
	{
		fail= "Введены некорректные данные";
	}
	amount=parseInt(amount,10);
	price=parseInt(price,10);
	if(amount<0)
	{
		fail= "Введены некорректные данные ";
	}
	
	if(fail!="")
	{
		document.getElementById('error').innerHTML= fail;
	}
	else
	{
		document.getElementById('error').innerHTML= fail;
		res=price*amount;
		alert("ЦЕНА: "+res);
	}


	}); 

});
