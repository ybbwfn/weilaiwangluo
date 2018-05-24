function setObj(key, index) {
    var obj = {};
    for (var i in key) {
        if (typeof key[i] == "object") {
            var objKey = obj[key[i][0]] = {};
            objKey[key[i][1]] = '[' + i + ']' + key[i][2];
        } else {
            obj[key[i]] = key[i] + index;
        }

    }
    obj.id = index;
    return obj;
}

function getTestData(key, num) {
    if (key == "" || typeof key == "undefined") {
        var key = [
            "name",
            "age",

            ["detail", "list", "一美女问我：“大姐，我猜你有二十七八吧？”“嘿嘿，我三十多了，我是不是看着挺年轻？”“嗯，衣服穿的幼稚就显得年轻！”我。。。"],
            ["title", "list", "这个标题有点长这个标题有点长"],
            ["content", "list", "这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多这个内容有点多"]
        ];
    }
    var num = num || 100;
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(setObj(key, i));
    }
    return arr;
}
//  getTestData(循环次数，数据格式)
//  key=[参数1，参数2，参数3];   参数1将渲染为name:1   参数3将渲染为list:{text:'内容---'}
// var key = [
//     "name",
//     "age",
//     ["list", "text"，"内容-----"]
// ];
//getTestData(10, key)

module.exports = {
    ceshi: ceshi
}