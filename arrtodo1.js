// Shuffle
function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * arr.length)
        var k = arr[i]
        arr[i] = arr[j]
        arr[j] = k
    }
    return arr
}
console.log(shuffle([2, 9, 3, 6]))

// Skyline Heights
function skyline_heights(arr) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            if (newarr.length == 0) {
                newarr.push(arr[i])
            }
            else if (arr[i] > newarr[newarr.length - 1]) {
                newarr.push(arr[i])
            }
        }
    }
    return newarr
}
console.log(skyline_heights([-1, 1, 1, 7, 3]))

// Zip It
function zip_it(arr, arr2) {
    var newarr = []
    for (var i = 0; i < arr2.length; i++) {
        arr.push(arr2[i])
    }
    var extra_vals = []
    while (newarr.length < arr.length - extra_vals.length) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == Math.min.apply(Math, arr)) {
                if (arr[i] == newarr[newarr.length - 1]) {
                    extra_vals.push(arr[i])
                    arr[i] = Math.max.apply(Math, arr)
                }
                else {
                    newarr.push(arr[i])
                    arr[i] = Math.max.apply(Math, arr)
                }       
            }
        }
    }
    for (var i = 0; i < extra_vals.length; i++) {
        newarr.push(extra_vals[i])
    }
    return newarr
}
console.log(zip_it([14, 4, 100, 4, 26], [20, 26, 40, 30]))