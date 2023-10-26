//1-a,b
var images = document.querySelectorAll('.images-1');

images.forEach(function(details) {
    details.addEventListener('mouseover', function() {
        var content = details.querySelector('div');
        content.classList.add('show-descriptions');
    });

    details.addEventListener('mouseout', function() {
        var content = details.querySelector('div');
        content.classList.remove('show-descriptions')
    });
});

//2-a
//새로고침하면 버튼이 보이는 경우 --> 해결
window.onload = function() {
    window.scrollTo(0, 0); // 새로고침시 페이지를 최상단으로 스크롤
    var button = document.getElementById('button-top');
    button.style.opacity = 0; // 버튼의 투명도를 0으로 설정하여 보이지 않게 함
}

//버튼의 투명도 설정 
window.addEventListener('scroll', ()=> {
    var button = document.getElementById('button-top');
    
    // 최대 스크롤 가능한 높이
    var maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 현재 스크롤된 높이의 비율 계산 (0에서 1 사이의 값)
    var scrollPercentage = window.scrollY / maxScrollHeight;

    // 버튼의 투명도를 스크롤 비율에 따라 설정
    button.style.opacity = scrollPercentage;
});

