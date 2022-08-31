function calculo() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let calc = (weight / (height * height)).toFixed(2)
    
    if(height > 3) {
        alert("A altura é somente aceita em metros")
    }
    if(calc < 18.5) {
        document.getElementById("result").innerText = (`${calc} Abaixo do peso normal`)
    }else if(calc >= 18.5 && calc <= 24.9) {
        document.getElementById("result").innerText = (`${calc} Peso normal`)
    }else if(calc >= 25 && calc <= 29.9) {
        document.getElementById("result").innerText = (`${calc} Excesso de peso`)
    }else if(calc >= 30 && calc <= 34.9) {
        document.getElementById("result").innerText = (`${calc} Obsidade classe I`)
    }else if(calc >= 35 && calc <= 39.9) {
        document.getElementById("result").innerText = (`${calc} Obsidade classe II`)
    }else if(calc >= 40) {
        document.getElementById("result").innerText = (`${calc} Obsidade classe III ou mórbida`)
    }
}