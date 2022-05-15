async function test() {
    // 调用python函数
    const res = await eel.my_add(3, 4)();
    console.log(res);
}