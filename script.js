var number = [];


document.getElementById("addNum").addEventListener("click",function(){

	var num = document.getElementById("num").value;

		if(num == '' || num == null){
		
			document.getElementById("warnDisplay").innerHTML = "Please Enter Number.";

		}else if(isNaN(num)){

			document.getElementById("warnDisplay").innerHTML = "This is not Number. Please enter the Numbers.";
			
		}else{

			number.push(num);
			document.getElementById("numDisplay").innerHTML = number;
			document.getElementById("warnDisplay").innerHTML = "";
		}


	document.getElementById("num").value = "";

});


document.getElementById("maxClick").addEventListener("click", function(){

		var maxNum =  Math.max.apply(null, number);
		document.getElementById("maxNum").innerHTML = "Maximum Number from the numbers you have entered is: "+ maxNum;
});



document.getElementById("minClick").addEventListener("click", function(){

		var minNum =  Math.min.apply(null, number);
		document.getElementById("minNum").innerHTML = "Minium Number from the numbers you have entered is: "+ minNum;
});

