function onDevToolsOpen(){
    setTimeout(console.clear.bind(console))
    setTimeout(() => {console.log(
        "%cDevTools is open",
        "color:red;font-family:system-uni;font-size:4rem;"
    )},10);
}


class DevToolsChecker extends Error{
    toString(){

    }

    get message(){
        onDevToolsOpen();
    }
}

console.log(new DevToolsChecker());

sour