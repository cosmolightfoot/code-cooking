function catOrDog(randomNumber) {
        
    let result = '';
    if(randomNumber < 0.5) {
        result = 'cat'
    }
    else {
        result = 'dog'
    }
    return result;
}
export default catOrDog;