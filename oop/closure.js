function outer() {
    let name="adnan"
    console.log("adnnnnn")
    function inner() {
        console.log(name)
    }
    return inner
}

let callingInnerFunction=outer()
callingInnerFunction()
//this isn called closure since even though
//the function brings everything inhouse
//the entire outer function also goes