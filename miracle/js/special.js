// 类型："文档型文件块"
// 开发者："凯"
// 作用："存储文本，更新文本"
// 是否可用于多网页："否"
// 主作用文件：[SOURCE_CODE/miracle/html/special_documents.html]
Vue.config.productionTip = false;
new Vue({
    el: "#hemo",
    data: {
        //特殊文件用文件简写代替文件名
        fileName: "文件名：",
        fileType: "类型：",
        effect: "作用：",
        filePath: "路径：",
        author: "编写者：",
        //部分添加
        KTS: "特殊条件：",
        //以下数据为文档数据
        unknown: "未知",
        kai: "凯",
        //js语句参数
        js_1: "Object.style.overflow='visible|hidden|scroll|auto|inherit'",
        visible: "默认。内容不会被修剪，会显示在元素框之外",
        hidden: "内容会被修剪，元素框外面的内容不会被显示，浏览器不会显示滚动条。",
        scroll: "浏览器会显示滚动条，如果需要内容会被修剪。",
        auto: "内容会被修剪，如果需要则显示滚动条。",
        inherit: "overflow 属性的值从父元素继承。",
        //to||配置文件夹数据
        to: "to",
        to_fileType: "配置文件夹",
        to_effect: "为网站提供配置文件",
        to_filePath: "SOURCE_CODE/to",
        to_KTS: "本目录所有文件不接受规则更改",
        //html/special_documents.html特殊文件集网站
        special: "special_documenta.html",
        special_fileType: "网站文件",
        special_effect: "收集网站特殊文件并整理资料",
        special_filePath: "网站本地路径:/miracle/html/special_documents.html:URL('https://ikai-jiu.github.io/kai/miracle/html/special_documents.html')",
        //es||工具使用
        es6: "ES6",
        es6_fileType: "脚本文件夹",
        es6_effect: "es6转换",
        es6_filePath: "本地地址：/to/es6",
        es6_KTS: "本目录下子文件[dist]是输出文件,[list]是原文件,这两个子文件可以遵循js文件规则",
    }
})