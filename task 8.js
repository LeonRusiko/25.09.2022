function test8(strUrl){
    var link = document.createElement('a');
    link.href = strUrl;
    return {
        "protocol": link.protocol,
        "hostname": link.hostname,
        "path": link.pathname
    };
}
 
function test888(strUrl){
    return new URL(strUrl);
}
 
var urlStr = 'https://itstep.org/ua/about';
var objURL = test8(urlStr);
console.log(objURL);
