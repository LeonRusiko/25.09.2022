let a =prompt()
let b =prompt()
let c =prompt('+,-,*,/')

function calc(){
    if (c === '-'){
        alert(+a - +b)
    }
    else if (c === '*'){
        alert(+a * +b)
    }
    else if (c === '/'){
        alert(+a * +b)
    }
    else if (c === '+'){
        alert(+a + +b)
    }
    else {
        alert('null')
    }
}
