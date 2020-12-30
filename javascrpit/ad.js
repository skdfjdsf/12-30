window.onload = function() {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(offset) {
        /*獲取的是style.left，是相對左邊獲取距離，所以第一張圖后style.left都為負值，
        且style.left獲取的是字符串，需要用parseInt()取整轉化為數字。*/
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if(newLeft < -3000) {
            list.style.left = -600 + 'px';
        }
        if(newLeft > -600) {
            list.style.left = -3000 + 'px';
        }
    }
    /*上一步*/
    prev.onclick = function() {
            animate(600);
        }
        /*下一步*/
    next.onclick = function() {
            animate(-600);
        }
        /*自動循環播放*/
    var timer;

    function play() {
        timer = setInterval(function() {
            prev.onclick();
        }, 1500)
    }
    play();
    /*鼠標放上（離開）對應輪播暫停（播放）*/
    var container = document.getElementById('container');
    function stop() {
        clearInterval(timer);
    }
    container.onmouseover = stop;
    container.onmouseout = play;
}
