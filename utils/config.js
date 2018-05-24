function setObj(key, index) {
    var obj = {};
    for (var i in key) {
        if (typeof key[i] == "object") {
            var objKey = obj[key[i][0]] = {};
            objKey[key[i][1]] = '[' + index + ']' + key[i][2];
        } else {
            obj[key[i]] = key[i] + index;
        }

    }
    obj.title = index + "标题有点长标题有点长标题有点长标题有点长";
    obj.id = index;
    return obj;
}

function ceshi(key, num) {
    if (key == "" || typeof key == "undefined") {
        var key = [
            "url",
            "name",
            "age", ["phone", "list", "15300001234"],
            ['adress', "list", "河北省张家口市蔚县西合营"],
            ["detail", "list", "一美女问我：“大姐，我猜你有二十七八吧？”“嘿嘿，我三十多了，我是不是看着挺年轻？”“嗯，衣服穿的幼稚就显得年轻！”我。。。"],

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


const basUrl = "http:192.168.1.105:9082";
const API = {
    bookDetail: basUrl + '/happyReadingApp/ bookResource/ getBookData',
    ceshi: ceshi
}
module.exports = API;