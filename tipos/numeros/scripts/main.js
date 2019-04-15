var n1 = document.getElementById('n1').innerHTML
var n2 = document.getElementById('n2').innerHTML
var n3 = document.getElementById('n3')




n3.onclick = function () {

    n1 = Number.parseFloat(n1)
    n2 = Number.parseFloat(n2)

    let resultado = n1 + n2
    n3.innerHTML = resultado

}

s3.onclick = function (){
    var s1 = document.getElementById('s1').innerHTML
    var s2 = document.getElementById('s2').innerHTML
    var s3 = document.getElementById('s3')
    var exp1 = document.getElementById('exp1')

    let resultado = s1 + s2

    s3.innerHTML = resultado
    exp1.innerHTML = "Perceba que ao inv&eacute;s de somar os dois n&uacute;meros, foi concatenado 0.1 com 0.2"

    
}

k3.onclick = function (){
    var k1 = document.getElementById('k1').innerHTML
    var k2 = document.getElementById('k2').innerHTML
    var k3 = document.getElementById('k3')
    
    k1 = Number.parseFloat(k1)
    k2 = Number.parseFloat(k2)

    let resultado = k1 + k2

    k3.innerHTML = resultado
    
}

l3.onclick = function (){
    var l1 = document.getElementById('l1').innerHTML
    var l2 = document.getElementById('l2').innerHTML
    var l3 = document.getElementById('l3')
    
    l1 = Number.parseInt(l1)
    l2 = Number.parseInt(l2)

    let resultado = l1 + l2

    l3.innerHTML = l1.toString() + " + " + l2.toString() + " == " + resultado.toString()
    
}