//kg/m平方

var bmi = bmical (65,1.8)

function bmical (kg,m) {
    return kg/Math.pow(m,2);
}

console.log(bmi);