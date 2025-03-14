function majority(n) {
    var arr = n.length;
    for (var i = 0; i < arr; i++) {
        var count = 0;
        for (var j = 0; j < arr; j++) {
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count > Math.floor(arr / 2)) {
            return i;
        }
    }
    return -1;
}
var arr = [3, 3, 4, 3, 2, 3, 3];
console.log(majority(arr));
