/*
		ОТОБРАЖЕНИЕ ЗАПИСЕЙ ПО ИНДЕКСУ ПРИЕМА ПИЩИ
*/
function write_tab(date_filter, meal_index, meal_date, meal_time, prot, fats, harb, cell, cal){
			
			var arr = JSON.parse(localStorage.getItem('DIARY_ARRAY'));

			if (date_filter == meal_date || date_filter == "all"){
				var prods = "";
				var prods_count = 0;
				
				for (let i = meal_index; i < arr.length; i++) {
					if (arr[i][2] != arr[meal_index][2]){
						break
					} 
					prods_count += 1;
					prods += arr[i][5];
				};

				let main = document.getElementById('display');


		        let table = document.createElement('div');
		  		table.id = "table_meal";

		  		let table_head = document.createElement('div');
		  		table_head.id = "head_table_meal";

		  		let name_time = document.createElement('div');
		  		name_time.id = "name_time";

		  		name_time.onclick = function(){
		  			//alert(prods);
		  			localStorage.setItem("meal_index", meal_index);
		  			load_p("prods_in_meal.html");
		  		};

		  		let prod_name = document.createElement('div');
		  		prod_name.id = "prod_name";
		  		prod_name.innerHTML = "Прием пищи " + meal_time.substr(0, 5);

		  		let time = document.createElement('div');
		  		time.id = "time_meal";
		  		time.innerHTML = meal_time.substr(0, 5) ;

		  		let del = document.createElement('div');
		  		del.id = "delete_meal";
		  		del.innerHTML = 'x';
		  		del.onclick = function(){
		  			arr.splice(meal_index, prods_count);
		  			alert(prods + " были удалены");
		  			localStorage.setItem('DIARY_ARRAY',JSON.stringify(arr));
		  			//table.style.backgroundColor = "red";
		  			group_prods(date_filter);
		  			update_bar();

		  		};
		  		if (date_filter == "all"){
		  			let date_date = document.createElement('div');
		  			date_date.id = "date_date";
		  			date_date.innerHTML =  meal_date;
		  			
		  			 main.append(date_date);
		  		}

	         	main.append(table);
	          	table.append(table_head);
	          	table_head.append(name_time);
	          	name_time.append(prod_name);
	          	        	
	          	table_head.append(del);

	            table.insertAdjacentHTML('beforeend', '<div id="stat_meal1" class="stats"><div id="prot_prod" class="elem_prod">Б ' + 
	              prot +'</div><div id="fats_prod">Ж '+ 
	              fats +'</div><div id="harb_prod">У '+ 
	              harb +'</div></div><div id="stat_meal2" class="stats"><div id="cell_prod">Кл '+ 
	              cell +'</div><div id="cal_prod">Ка '+ 
	              cal +'</div></div>');
	    	};

		};
/*
		ГРУППИРОВКА ПАРАМЕТРОВ ПО ИНДЕКСУ ПРИЕМА ПИЩИ
*/
	function group_prods(date_filter){
		var arr = JSON.parse(localStorage.getItem('DIARY_ARRAY'));
		
		if (arr.length > 0){
			let main = document.getElementById('display');
			main.innerHTML = "";
			var meal_id = arr[0][2];
			var meal_time = arr[0][4];
			var meal_date = arr[0][3];
			var index_meal = 0;
			prot = 0;
			fats = 0;
			harb = 0;
			cell = 0;
			cal = 0;
			arr.forEach(function(meal, index, array) {
				if (meal_id != meal[2])  {
					//console.log(prot +"	"+ fats + "	"+harb+"	"+cell+"	"+cal);
					//alert(arr.indexOf(meal));
					write_tab(date_filter, index_meal, meal_date, meal_time, prot, fats, harb, cell, cal);
					prot = 0;
					fats = 0;
					harb = 0;
					cell = 0;				
					cal = 0;
					meal_time = meal[4];
					meal_id = meal[2];
					meal_date = meal[3];
					index_meal = arr.indexOf(meal);
				}
				//console.log('meal[2]: '+meal[2]+'; meal_id: '+meal_id);
				prot += +meal[7];
				fats += +meal[8];
				harb += +meal[9];
				cell += +meal[10];				
				cal += +meal[11];
			    
			});
			write_tab(date_filter, index_meal, meal_date, meal_time, prot, fats, harb, cell, cal);
			console.log(prot +"	"+ fats + "	"+harb+"	"+cell+"	"+cal);
		};
	}
/*
		ГРУППИРОВКА ПАРАМЕТРОВ ПО ИНДЕКСУ ПРИЕМА ПИЩИ END
*/		
	