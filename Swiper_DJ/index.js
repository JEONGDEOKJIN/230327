// 🟦 
    // [할 것 정리]
        // 클릭의 시작 위치를 갖고 있고, 
        // 끝나면 '끝난 좌표' 와 비교해서, 1) '오른쪽' 으로 스와이프 된건지, 2) 왼쪽으로 스와이프 된건지 확인하고 
        // '인덱스를 기준'으로, 움직임을 제어해보자.
            // '누르고 오른쪽 드래그' > 오른쪽으로 스와이프 


// 🟦 전역 변수 
    // 마우스 시작 클릭 지점 (x좌표)
    let _start ;

    // 현재 진행중인 인덱스 
    let _index = 0;

    // 아 이걸 위로 뺐는데, 그래서 되는건가 
    let _swiper = document.querySelector('.swiper')
    let _swiperContent = document.querySelector('.swiper-content');

    // 이동하는거, 500씩 이동 
        // getComputedStyle : '적용된 스타일의 값' 을 가져올 수 있음. 
            // 적용된 스타일을 가져올 태그를 매개변수로 전달
            // 
            
    let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
        // 스타일에서 너비를 가져옴 ⭐⭐⭐⭐⭐ 
        // 너비를 parseint 로 형변환! 

    // let _arrClientX = [];

    // 개수 가져오기 
    let {length} = document.querySelectorAll('.swiper-item')
    let _prev = document.querySelector('.prev')
    let _next = document.querySelector('.next')

    console.log(length);
    console.log(_swiperWidth);


// 태그 가져오기
    // 마우스 눌렀을 때!
    // let _swiper = document.querySelector('.swiper');
    _swiper.addEventListener('mousedown' , function(e) {
        console.log('마우스 누르자 마자 = mousedown 하자 마자 = 클릭 시작!');

        // 클릭했을 때, 'x좌표'
        console.log(e)
            // 해당 이벤트 안에 무슨 정보가 있는지 볼 수 있음. ⭐⭐⭐⭐⭐
            // clientX: 1037, : 클릭한 x 의 좌표 
            // e.clientX; 를 쓸 것 
        _start = e.clientX ;
        console.log(_start)

    })







    // 마우스 땠을 때! 
    _swiper.addEventListener('mouseup', function(e) {
        if( e.clientX < _start ) {
            console.log('끝 좌표가 더 작아!')
            
            if (_index < (length -1) )
            _index++;
            swiperMove();

        } else {
            console.log('끝 좌표가 더 커!')
            
            if (_index > 0)
            _index--;
            swiperMove();
        }

    })


    // 인덱스를 기준으로 움직임 

    function swiperMove ( ) {

        _swiperContent.style.left = -(_index * _swiperWidth) + "px"
        // _swiperContent.style.left = -(1 * _swiperWidth) + "px"
            // 인덱스가 -면 왼쪽으로 진행

    }

    swiperMove();


    _prev.addEventListener('click' , function() {
        if ( _index > 0 ) {

            _index--;
            swiperMove();

        } 

    
    })

    _next.addEventListener('click', function() {
        if(_index < (length -1)) 
            _index++;
            swiperMove();
    })
