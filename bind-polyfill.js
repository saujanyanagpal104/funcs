let testObj = {
    'a' : 11
}


function test(b, c) {
    console.log(`a: ${this.a}, b: ${b}, c: ${c}`)
}

Function.prototype.newBind = function(...args) {
    let bindThis = this;
    let params = args.slice(1);
    return function(...args2) {
        bindThis.apply(args[0], [...params, ...args2])
    }
}

let newFunc = test.newBind(testObj, 7);
newFunc(6);
