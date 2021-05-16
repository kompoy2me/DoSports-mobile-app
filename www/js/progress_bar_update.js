		function update_bar() {
			var arr = JSON.parse(localStorage.getItem('DIARY_ARRAY'));

			cal_norm = window.localStorage.getItem("cal_norm");
			prot_norm = window.localStorage.getItem("prot_norm"); 
			fat_norm = window.localStorage.getItem("fat_norm");
			carb_norm = window.localStorage.getItem("carb_norm");
			cell_norm = window.localStorage.getItem("cell_norm");

			if (arr.length > 0){
				cal_sum = 0;
				prot_sum = 0;
				fat_sum = 0;
				carb_sum = 0;
				cell_sum = 0;
				arr.forEach(function(prod, index, array) {
					if (prod[3] == localStorage.getItem('DAY_DATE')) {
						cal_sum += +prod[11];
						prot_sum += +prod[7];
						fat_sum += +prod[8];
						carb_sum += +prod[9];
						cell_sum += +prod[10];
					};
				});

			//alert(prot_sum+" "+ prot_norm+' '+  Math.round((+prot_sum / +prot_norm)*100)+"%" );
			
			document.getElementById('text_prot').innerHTML = Math.round(prot_sum) + " / " + prot_norm;
			document.getElementById('text_cal').innerHTML = Math.round(cal_sum) + " / " + cal_norm;
			document.getElementById('text_fat').innerHTML = Math.round(fat_sum) + " / " + fat_norm;
			document.getElementById('text_carb').innerHTML = Math.round(carb_sum) + " / " + carb_norm;
			document.getElementById('text_cell').innerHTML = Math.round(cell_sum) + " / " + cell_norm;

			if (Math.round((+prot_sum / +prot_norm)*100)>100) {
				document.getElementById('bar_prot').style.width = '100%';
				document.getElementById('bar_prot').style.backgroundColor = "#D7112A";
				document.getElementById('bar_cal').style.width = '100%';
				document.getElementById('bar_cal').style.backgroundColor = "#D7112A";
				document.getElementById('bar_fat').style.width = '100%';
				document.getElementById('bar_fat').style.backgroundColor = "#D7112A";
				document.getElementById('bar_carb').style.width = '100%';
				document.getElementById('bar_carb').style.backgroundColor = "#D7112A";
				document.getElementById('bar_cell').style.width = '100%';
				document.getElementById('bar_cell').style.backgroundColor = "#D7112A";
			}
			else {
				document.getElementById('bar_prot').style.backgroundColor = "#E77817";
				document.getElementById('bar_prot').style.width = Math.round((+prot_sum / +prot_norm)*100)+"%";
				document.getElementById('bar_cal').style.backgroundColor = "#E77817";
				document.getElementById('bar_cal').style.width = Math.round((+cal_sum / +cal_norm)*100)+"%";
				document.getElementById('bar_fat').style.backgroundColor = "#E77817";
				document.getElementById('bar_fat').style.width = Math.round((+fat_sum / +fat_norm)*100)+"%";
				document.getElementById('bar_carb').style.backgroundColor = "#E77817";
				document.getElementById('bar_carb').style.width = Math.round((+carb_sum / +carb_norm)*100)+"%";
				document.getElementById('bar_cell').style.backgroundColor = "#E77817";
				document.getElementById('bar_cell').style.width = Math.round((+cell_sum / +cell_norm)*100)+"%";
			};
			
			};
		};