var inputNum = document.getElementById("players");
var rangeNum = document.getElementById("slider");
var number1 = document.getElementById("words1");
var number2 = document.getElementById("words2");
// 获取词汇
// function matchWords() {
//     gameWords = [words1.value, words2.value];
//     if (words1.value != "" && words2.value != "") {
//         words1.value = words1.value;
//         words2.value = words2.value;
//         console.log(gameWords);
//     }
//     return gameWords;
// }
//输入框与滑块匹配
function matchNum() {
    if (inputNum.value >= 4 && inputNum.value <= 18) {
        rangeNum.value = inputNum.value;
    } else {
        alert("请输入正确值");
        window.location.reload();
        inputNum.value = 4;
        rangeNum.value = 4;
    }
}
// 滑块匹配输入框
function sliderChange() {
    inputNum.value = rangeNum.value;
}

function reduceNum() {
    rangeNum.value--;
    if (inputNum.value < 4) {
        rangeNum.value = 4;
    } else {
        inputNum.value = rangeNum.value;
    }
}
function increaseNum() {
    rangeNum.value++;
    if (inputNum.value > 18) {
        rangeNum.value = 18;
    } else {
        inputNum.value = rangeNum.value;
    }
}
// 身份乱序
var postCard = [];
function shuffle(array) {
    var killer = Math.round(inputNum.value * 0.3);
    var farmer = inputNum.value - killer;

    // 创建数组
    for (var i = killer; i < inputNum.value; i++) {
        postCard[i] = "平民";
    }
    for (var j = 0; j < killer; j++) {
        postCard[j] = "杀手";
    }
    var m = array.length,
        x,y;
    //如果还有剩余元素...
    while(m){
         //随机选取一个元素
        y = Math.floor(Math.random()*m--);
        //与当前元素进行交换
        t = array[m];
        array[m] = array[y];
        array[y] = t;
    }
    console.log(postCard);
    return postCard;
}
// 分配身份
function setPlayNum() {
    var ul = document.getElementById("player");
    var identity = shuffle(postCard);
    // 清空所有子元素
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (i = 0; i < inputNum.value; i++) {
        var li = document.createElement("li");
        li.innerHTML +=
            '<span class="list-item-style" id=i></span>' +
            identity[i] +
            (i + 1) +
            "号";
        li.style.cssText += "width:50%;float:left;color:#bfbfbf;list-style:none;";
        ul.appendChild(li);
    }
}
// 运行成功
function sendCard() {
    if (postCard.length !== 0 && postCard.length == inputNum.value && words1.value != "" && words2.value != "") {
        sessionStorage.setItem("identify", JSON.stringify(postCard));
        sessionStorage.setItem("playerNums", inputNum.value);
        sessionStorage.setItem("words1",number1.value);
        sessionStorage.setItem("words2", number2.value);
        window.location.href = "jstask-2-3.html";
    }
    else if (postCard.length !== 0 && postCard.length == inputNum.value && words1.value == "" && words2.value == "") {
        alert("请设置词汇");
        window.location.reload();
    } else if (postCard.length !== 0 && postCard.length == inputNum.value && words1.value == "" && words2.value != "") {
        alert("请设置平民词汇");
        window.location.reload();
    } else if (postCard.length !== 0 && postCard.length == inputNum.value && words1.value != "" && words2.value == "") {
        alert("请设置卧底词汇");
        window.location.reload();
    } else if (postCard.length !== 0 && postCard.length != inputNum.value && words1.value != "" && words2.value != "") {
        alert("请重新分配玩家身份");
        window.location.reload();
    } else if (postCard.length == 0 && postCard.length == inputNum.value && words1.value != "" && words2.value != "") {
        alert("请输入玩家数量");
        window.location.reload();
    } else {
        alert("请分配玩家身份");
        window.location.reload();
    }
}