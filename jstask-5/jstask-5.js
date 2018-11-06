var btn=document.getElementById("btn");
btn.onclick = function(){
    console.log("anniu")
    var username = document.getElementById('user').value;
    var passwords = document.getElementById('passwords').value;
    //创建xhr对象
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //异步接受响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                console.log("yiban")
                //实际操作
                var response = JSON.parse(xhr.responseText);//返回的信息内容
                console.log(response);
                if (response.code == 0){
                    location.href="http://dev.admin.carrots.ptteng.com/#/dashboard"
                    console.log("chenggong")
                }
            }
        }
    };

    //发送请求
    xhr.open("POST", "/carrots-admin-ajax/a/login", true);//请求地址，异步
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + username + "&pwd=" + passwords);//发送数据
};