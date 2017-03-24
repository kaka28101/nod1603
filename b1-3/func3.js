const aFunc = function () {
    console.log("het 1 giay");
}


//callback = cb
function add (a, b, callback) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            callback('tham so fai co kieu number', undefined)
        } else {
            callback(undefined, a + b);
        }
        
    }, 3000);
}

add(4, "5a", function (err, total) {
    if (err) return console.log(err);// 'tham so fai co kieu number' =err, undefined = total
    console.log('ketqua:', total);
    // body
});
