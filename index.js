function receivesAFunction(callBack) {
    callBack();
}

function returnsANamedFunction() {
    return function sampleFunction() {
        console.log('Test function');
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('Anonymous function');
}