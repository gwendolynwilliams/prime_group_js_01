var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
<<<<<<< HEAD

var employeeSti = [];

var empName;
var empNumber;
var stiPercent;
var adjustedIncome;
var totalBonus;


function empInfo() {

	for (i = 0; i < employees.length; i++) {


		var rating = employees[i][3];
		var annualIncome = parseInt(employees[i][2]);

			// if rating = <2, then bonus = 4%
			if (rating <= 2) {
				stiPercent = 0;

			// if rating = 3 then no bonus
			} else if (rating == 3) {
				stiPercent = .04;

			// if rating = 4, then bonus = 6%
			} else if (rating == 4) {
				stiPercent = .06;

			// if rating = 5, then bonus = 10%
			} else if (rating == 5) {
				stiPercent = .10;
			}

			totalBonus = annualIncome * stiPercent;
		 	adjustedIncome = annualIncome + totalBonus;


			// if 4 employee numbers, then additional bonus = additional 5%
			if(employees[i][1].length === 4) {
				stiPercent += .05;
				totalBonus = stiPercent * annualIncome;
			}

			//if annual income > $65,000, then bonus = bonus - 1%
			if(employees[i][2] > 65000) {
				totalBonus = (stiPercent - .01) * annualIncome;
			}

			//if bonus > 13% then reassign bonus to 13%
			if(stiPercent > .13) {
				stiPercent = .13;
				totalBonus = stiPercent * annualIncome;
			}

			//console.log('adjusted income: ' + adjustedIncome);
			//console.log('STI Percent: ' + stiPercent);
			//console.log('total bonus: ' + totalBonus);

			//employmentSti = employeeSti.push(employees[i][0]);
			stiPercent = Math.round(stiPercent * 100);
			employeeSti = [employees[i][0], stiPercent + "%", adjustedIncome, Math.round(totalBonus)];
			console.log(employeeSti);

		};

		

}

empInfo();
=======
>>>>>>> b025e397e18a0ca3da9c600390c26b692d526d0e
