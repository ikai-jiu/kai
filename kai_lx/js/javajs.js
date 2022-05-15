function zTreeOnRename(event, treeId, treeNode, isCancel) {
    // alert(treeNode.tId + ", " + treeNode.name);
    $.ajax({
        url: "../python/pyexe.py",
        type: "get",
        dataType: "text",
        // data: {dt: $("#dt").val(), tm: $("#tm").val() },
        success: textSucceed,
        error: Error
    });
    // .done(function( o ) {
    // // do something
    // });
    // process = fn.zTree.Process(vr=treeNode.name,is_template= true, status="aaa");
    // process.save();
}