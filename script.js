function tabuada() {
    let num = document.getElementById('txtn').value
    let tab = document.getElementById('seltab')
    if (num.length == 0) {
        alert('[ERROR] Digite um número para continuar')
    } else {
        let n = Number(num)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}