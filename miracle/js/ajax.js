// 类型："模块型文件"
// 开发者："凯"
// 作用："ajax初步调用"
// 是否可用于多网页："可"
// 主作用文件：所有文件

var xhr;
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else { // code for IE6, IE5 兼容
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open("GET", "https://api.xdclass.net/pub/api/v1/web/index_card")
xhr.onreadystatechange = function() {
    // 为了保证数据完整返回，我们⼀般会判断两个值
    if (xhr.readyState === 4 && xhr.status === 200) {
        alert(xhr.responseText);
    } else {
        alert('出错了，Err:' + xhr.status);
    }
};