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
        to: "to",
        to_fileType: "配置文件夹",
        to_effect: "为网站提供配置文件",
        to_filePath: "SOURCE_CODE/to",
        to_KTS: "本目录所有文件不接受规则更改",
    }
})