function BMI(age, weight, height, gender, act){

	if (gender === "m"){
		//cal_norm_m = (10 * height + 6.25 * height ‐ 5 * age + 5) * (act + add_mov)
		var cal_norm = (10 * weight + 6.25 * height - 5 * age + 5) * act;
	}

	if (gender === "f") {
		//cal_norm_f = (10 * height + 6.25 * height ‐ 5 * age ‐ 161) * (act + add_mov)
		//447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах).
		var cal_norm = (10 * weight + 6.25 * height - 5 * age - 161) * act;
	}
	window.localStorage.setItem("cal_norm", Math.round(cal_norm));
	console.log(cal_norm);

	var prot_norm = cal_norm * 25 / 100 / 4;
	window.localStorage.setItem("prot_norm",  Math.round(prot_norm));
	console.log(prot_norm);

	var fat_norm = cal_norm * 38 / 100 / 9;
	window.localStorage.setItem("fat_norm",  Math.round(fat_norm));
	console.log(fat_norm);

	var carb_norm = cal_norm * 45 / 100 / 4;
	window.localStorage.setItem("carb_norm",  Math.round(carb_norm));
	console.log(carb_norm);

	var cell_norm = cal_norm / 1000 * 14;
	window.localStorage.setItem("cell_norm",  Math.round(cell_norm));
	console.log(cell_norm);

}