Array.prototype.uniq = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (!result.includes(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

    Array.prototype.twoSum = function() {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            for (let j = 1; j < this.length - 1; j++){
                if (this[i] + this[j] === 0) {
                    result.push([i,j])
                }
            }
        }
        return result;
    }

Array.prototype.transpose = function() {
    let transposed = [];
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result = [];
        transposed.push(result);
        for (let j = 0; j < this.length; j++){
            result.push(this[j][i]);
        }
    }
    return transposed;
}

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
        console.log(callback(this[i]));
    }
}

function plusOne(num) {
    return num + 1;
}

Array.prototype.myMap = function(callback) {
    let result = [];
    return result.push(this.myEach(callback));
}

Array.prototype.myReduce = function(callback, initialValue) {
    initialValue ||= this.drop();

    this.forEach( function(callback) {
        
    })
}