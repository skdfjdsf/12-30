//讓點點跟著動起來
/*上一步*/
prev.onclick = function() {
    index = index -1;
    if(index < 1) {
        index = 5;
    }
    buttonShow();
    animate(600);
}
/*下一步*/
next.onclick = function() {
    index = index + 1;
    if(index > 5) {
        index = 1;
    }
    buttonShow();
    animate(-600);
}
function buttonShow() {
    /*console.log(buttons.length);*/
    /*清除之前的樣式*/
    for(var i = 0; i < buttons.length; i++) {
        if(buttons[i].className === 'on') {
            buttons[i].className = '';
        }
    }
    /*數組從0開始，temp從-1開始*/
    buttons[index - 1].className = 'on';
}
/*小圓點的點擊事件*/
for(var i = 0; i < buttons.length; i++) {
    /*使用立即函數*/
    (function(i) {
        buttons[i].onclick = function() {
            console.log(i);
            /*偏移量的獲取：獲取鼠標的小圓點的位置，用this把index綁定到對象buttons[i]上*/
            /*由于index是自定義屬性，需要用到getAttribute()這個dom的2級方法，去獲取自定義的index屬性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = 600 * (index - clickIndex);
            animate(offset);
            index = clickIndex;
            buttonShow();
        }
    })(i)
}