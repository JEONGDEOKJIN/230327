// 🟦 할 것들 
    // 1. 클릭의 시작 위치를 갖고 있고, 
    // 2. 끝나면, '끝난 좌표' 와 비교해서, 1) '오른쪽' 스와이프 인지, 2) '왼쪽' 스와이프 인지 확인 
        // ex) '누르고 > 오른쪽 드래그' = 오른쪽 스와이프
    // 3. '인덱스' 를 기준으로 '움직임' 을 제어


// 🟦 전역변수

    // 마우스 시작 클릭 지점 
    let _startPointMouseX ;

    // 현재 진행중인 인덱스 
    let _index = 0;

    // 옆으로 넘기는 '각각의 아이템들(li)'의 부모(ui)를 담고 있는 통(swiper) 에 swiper div 태그 담기
    let _swiper = document.querySelector('.swiper')

    // li 들을 감싸고 있는 ul 통 
    let _swiperContentUl = document.querySelector('.swiper-content');

    // li 들 각각 
    let {length} = document.querySelectorAll('.swiper-item');
        // 근데, 이건, 객체가 아닌데, {length} 를 어떻게 쓸 수 있찌❓❓❓ 
        console.log(length)

    // 페이지 넘어가는 인덱스
    let index = 0;


    // '이전', '다음' 해당하는 buttom 태그를 변수에 담기
        let _prev = document.querySelector('.prev')
        
        let _next = document.querySelector('.next')




// 🔷 마우스 눌렀을 때 > x 좌표 가져오기 
    _swiper.addEventListener('mousedown' , function(e) {
        console.log('마우스 이동 잘 되는지 테스트')
        console.log(`mousedown 했을 때 발생하는 모든 이벤트 = ${e}`)
        console.log(e)
        console.log("마우스 클릭시 x 좌표 :" + e.clientX)
        
        _startPointMouseX = e.clientX;
    })


// 🔷 마우스 뗄 때! > x 좌표 가져오기 > 50 또는 -50 일 때만, 반응하게 하기
    _swiper.addEventListener('mouseup' , function(e) {

    // e.clientX = 마우스 뗄 때 좌표
        console.log("마우스 클릭 ~ 뗄 때 좌표👇")
        console.log(e.clientX - _startPointMouseX);

    // 차이가, 50 이상, -50 이하 일 때만, 반응하게 하기
        if (e.clientX - _startPointMouseX > 50 ) {
            console.log('스와이프 오른쪽')

            _index ++;
            swipeMove();

            
        } else if (e.clientX - _startPointMouseX < -50) {
            console.log('스와이프 왼쪽')
            _index --;
            swipeMove();
        } else {
            console.log('아무것도 아닌')
        }
})

// /swipeMove();


// 🔷 버튼으로 > swipe 움직이게 하기
_prev.addEventListener('click' , function(){
    console.log("버튼 왼쪽")
    if(_index > 0) 
        _index --; 
        swipeMove()

})

_next.addEventListener('click' , function(){
    console.log("버튼 오른쪽")
    if(_index < (length-1))
        _index ++; 
        swipeMove();
 
})



// 🔷swipe 를 움직이게 하는 함수
    // swipe content 자체를 왼쪽으로 이동? 

    function swipeMove() {
        _swiperContentUl.style.left =  -(500 * _index) + "px";

        let _ul = document.querySelector('.swiper-content')
        console.log(_ul.length);
        
 
    // 만약, '000 넘으면 > page 000' 넘어가게 하기 
    // event 달아서 움직이는 값
    // id 가 1 인개 > 000 로 오면
    // li 박스의 left 를 구할 수 있지 않나? 
    // 아니면 인덱스? 
    // ul 의 포지션과 li 의 포지션이 같을 때? 
    console.log(_swiperContentUl.style.left.value);
    }





// 🔷 인덱스 0 이면 > 인덱스 5로, 인덳 6 이면 > 1 로 이동 
    // function swipeIndexChange () {
    //     if (index == 0) { 
    //         _swiperContentUl.style.left =  (500 * 5) + "px" 
    //     } else if (index == 6) {
    //         _swiperContentUl.style.left =  (500 * 1) + "px" 
    //     } else {
    //         console.log("가운데 지점~")
    //     }
    // }