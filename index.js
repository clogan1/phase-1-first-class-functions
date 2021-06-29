// function receivesAFunction(callBack) {
//     callBack();
// }

// function returnsANamedFunction() {
//     return function sampleFunction() {
//         console.log('Test function');
//     }
// }

// function returnsAnAnonymousFunction() {
//     return () => console.log('Anonymous function');
// }

function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction(){
        return 'Sample function';
    }
}

function returnsAnAnonymousFunction(){
    return function(){return 'Sample function';}
}