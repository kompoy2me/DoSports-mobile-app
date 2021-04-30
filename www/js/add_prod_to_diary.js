/*$("#display").click(function(name){
  alert(name.toString());
});*/

function add_to(name, prot, fats, harb, cell, cal){

	main = document.getElementById('display');

	let table = document.createElement('div');
	table.id = "table_prod";
	table.addEventListener("click", function(){
		
		let modal = document.getElementById('modal');
		modal.style.display = 'block';
		modal.style.opacity = 1;
		modal.style.zIndex = 100;
		document.getElementById('announ_m').innerHTML = "Укажите количество продукта <b>" + name + "</b> в граммах";

		document.getElementById('prot_count').innerHTML = "Б " + prot;
		document.getElementById('fats_count').innerHTML = "Ж " + fats;
		document.getElementById('harb_count').innerHTML = "У " + harb;
		document.getElementById('cell_count').innerHTML = "Кл " + cell;
		document.getElementById('cal_count').innerHTML = "Ка " + cal;

		let quant = document.getElementById('quant');
		quant.value = 100;
		quant.onkeyup = function(){
		if ((quant.value < 10000) & (quant.value > 0)){
			document.getElementById('quant_prod').style.borderBottom = '2px solid #CCCCCC';
			document.getElementById('prot_count').innerHTML = "Б " + ((prot/100)*quant.value).toFixed(2);
			document.getElementById('fats_count').innerHTML = "Ж " + ((fats/100)*quant.value).toFixed(2);
			document.getElementById('harb_count').innerHTML = "У " + ((harb/100)*quant.value).toFixed(2);
			document.getElementById('cell_count').innerHTML = "Кл " + ((cell/100)*quant.value).toFixed(2);
			document.getElementById('cal_count').innerHTML = "Ка " + ((cal/100)*quant.value).toFixed(2);
		}
		else{
			document.getElementById('quant_prod').style.borderBottom = '2px solid #C20DB7';
		}
	};
		sub =  document.getElementById('sub_m');
		sub.onclick = function(){
			if ((quant.value < 10000) & (quant.value > 0)){
				var arr = JSON.parse(localStorage.getItem('array_prods'));
				arr.push(new Array([name,
				 ((prot/100)*quant.value).toFixed(2),
				 ((fats/100)*quant.value).toFixed(2),
				 ((harb/100)*quant.value).toFixed(2),
				 ((cell/100)*quant.value).toFixed(2),
				 ((cal/100)*quant.value).toFixed(2),
				 quant.value]));
				localStorage.setItem('array_prods',JSON.stringify(arr));
				load_p("create_meal.html");
			}
  			
		};

	});
	
	main.append(table);
	table.insertAdjacentHTML('beforeend', '<div id="table_prod" ><div id="head_table_prod"><div id="name_prod">'+
							    	name+'</div></div><div id="stat_prod"><div id="prot_prod" class="elem_prod">Б ' +
							    	prot+'</div><div id="fats_prod">Ж '+
							    	fats+'</div><div id="harb_prod">У '+
							    	harb+'</div><div id="cell_prod">Кл '+
							    	cell+'</div><div id="cal_prod">Ка '+
							    	cal+'</div></div></div>');

	
	/*let sub = document.createElement('button');

	sub.id = "sub_m";
	sub.className = "sub_butt";
	sub.innerHTML = "Принять";
	sub.addEventListener("click", function(){
		alert(name);
	});
	buttons = document.getElementById('buttons');
	buttons.append(sub);
	*/


	/*

		sub =  document.getElementById('sub_m');
		sub.addEventListener("click", function(){
			alert(name);
  			var arr = [];
			arr.push(new Array([name, prot, fats, harb, cell, cal]));

			console.log(arr[0]);
			localStorage.setItem('array',JSON.stringify(arr));
			arr = JSON.parse(localStorage.getItem('array'));
			console.log(arr[0]);
			window.localStorage.removeItem('array');
  		});
	*/

	/*let table_head = document.createElement('div');
	table_head.id = "head_table_prod";


	let name_prod = document.createElement('div');
	table_body.id = "name_prod";
	name_prod.innerHTML = name;


	let table_body = document.createElement('div');
	table_body.id = "stat_prod";


	let table = document.createElement('div');
	let table_head = document.createElement('div');
	let table_body = document.createElement('div');
	let table = document.createElement('div');
	let table_head = document.createElement('div');

	
	table.append(table_head);
	table.append(table_body);
	*/
	

	

	
/*
<div id="table_prod" onclick="add_to('.$row['name'].')">
	<div id="head_table_prod">
		<div id="name_prod">'.$row['name'].'</div>
	</div>
	<div id="stat_prod">
		<div id="prot_prod" class="elem_prod">Б '.$row['prot'].'</div>
		<div id="fats_prod">Ж '.$row['fat'].'</div>
		<div id="harb_prod">У '.$row['carb'].'</div>
		<div id="cell_prod">Кл '.$row['cel'].'</div>
		<div id="cal_prod">Ка '.$row['cal'].'</div>
	</div>
</div>';
*/

//div.className = "alert";
	
}