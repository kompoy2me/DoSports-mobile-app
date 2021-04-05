function BMI(age, weight, height, gender, act){

	if (gender === "m"){
		//cal_norm_m = (10 * height + 6.25 * height ‐ 5 * age + 5) * (act + add_mov)
		var cal_norm = (10 * height + 6.25 * weight - 5 * age + 5) * act;
	}

	if (gender === "f") {
		//cal_norm_f = (10 * height + 6.25 * height ‐ 5 * age ‐ 161) * (act + add_mov)
		//447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах).
		var cal_norm = (10 * height + 6.25 * weight - 5 * age - 161) * act;
	}
	window.localStorage.setItem("cal_norm", cal_norm);
	console.log(cal_norm);

	var prot_norm = cal_norm * 25 / 100 / 4;
	window.localStorage.setItem("prot_norm", prot_norm);
	console.log(prot_norm);

	var fat_norm = cal_norm * 38 / 100 / 9;
	window.localStorage.setItem("fat_norm", fat_norm);
	console.log(fat_norm);

	var carb_norm = cal_norm * 45 / 100 / 4;
	window.localStorage.setItem("carb_norm", carb_norm);
	console.log(carb_norm);

}