function convert(){
    const input = Number(document.getElementById("input").value)
    const cnv   = input*(9/5)+32
    const output=document.getElementById("result")
    output.innerHTML=cnv.toFixed(2) + "fahrenheit"
}
