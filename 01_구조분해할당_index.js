// 📚 구조 분해 할당(디스트럭쳐링)

// 🔷 ES5 문법에서, 배열의 값을, 호출해서, 변수에 담거나 사용할 때, 
    let one;
    let two;

    let arr = [1,2,3,4,5];

    one = arr[1];
    two = arr[3];
    console.log(one, two);
        // '하나씩 인덱스'를 사용해서, '값을 하나씩 할당'. ⭐⭐ 
        


// 🔷 ES6 에서 도입된 '배열의 구조분해 할당' 

    // 배열의 구조 분해 할당
        let arr2 = [1,2,3];
        let [one1, two1, three1, one2] = arr2;
            // [해석]
                // 변수를 선언하고, 배열의 arr2 값을 구조분해 할당해서 ⭐'순서대로'⭐ 할당 
                // 값도 '순서' 대로 있고 > 변수도 똑같이 '순서' 대로 있음. ⭐⭐⭐⭐⭐ 
        console.log(one1, two1, three1, one2)
            // 가져오는 값이 없으면 > undefined 가 뜬다. ⭐⭐⭐ 


    // 값이 1) '순서' 대로 할당되고, 2) 값이 없으면 undefined
        let [a,b] = [1,2];
            // 인덱스 순서대로 > 값이 들어간다. 
        console.log(a,b) 
            //1,2

        // 부족하게 들어오면 > undefined
        let [c,d] = [1]
            // 1은 > a 에 들어가고, d 는 undefined 

        // 넘쳐도 됨 ⭐⭐⭐⭐⭐ 
            // 순서대로 할당되는게 중요
        let [e,f] = [1,2,3]
            // 1,2 가 찍힘 
    
    // default 값
    let [e, f, g=1] = [1,2,3]
    console.log(e, f, g);
        // c=1 은 default 값 
        // 즉, 값을 넣어줄게 있으면 > 들어가고, 없으면 디폴트값으로 설정


    // [특징]
        // ES6 에서, 구조분해할당이 도움 되었는데, 
        // '배열' 이나, '객체' 의 '값'을 '분해' 해서 > 변수에 할당 할 수 있다. 
    
    // [장점]
        // 시간 절약 가능 
        // 길이도 줄어든다. > 가독성도 좋아짐


// 🟦 '객체' 구조 분해 할당 

// 🔷 ES5 

    // '객체의 값' 을 '변수'에 '할당' 
        // '키 값' 을 사용해서 > 값을 뽑고 > 할당
    // let name1 = { firstName : 'Lee', lastName : 'kim' };
    // let name2 = name1.firstName;
    // let name3 = name1.lastName;
    // console.log(name2, name3)


// 🔷 ES6 객체 각 키 값을 뽑아서 변수에 할당 
    
    // [특징]
        // '객체' 는 '순서가 아님'⭐⭐⭐ 
        // '키값' 을 기준으로 구조분해 할당! 
    
    // let { firstName, lastName } = name1;
    // console.log(firstName, lastName);
    
    // let { lastName, firstName  } = name1;
    //     이렇게 해도 동일하게 들어옴 😥😥😥😥😥😥😥😥❓❓❓❓❓ 

    // 객체의 디폴트 값 추가! 가 가능
    let name4 = { firstName : "lee📌" , lastName} = {firstName : "lee2", lastName : "kim"};
        // [특징] 1) value 를 넣고 2) 값이 없으면, default 값으로 설정이 가능! 

        // [해석]
            // [우항] {firstName : "lee2", lastName : "kim"} 이렇게 우선, '객체가 선언' 
            // [좌항] {firstName : "lee📌" , lastName} : 이렇게 값을 가져올 것 임 
                // [좌항] firstName 은 객체의 키값 이면서, 값을 가져올 때, 자동적으로 '변수 이름' 이 된다. ⭐⭐⭐ 
                // [좌항] firstName : "lee📌" 는 가져올 때, 만약, 원래 객체에 값이 없으면, 가져올 디폴트를 설정한다. 


        console.log(firstName, lastName);






// 🟦 [쓰임 예시] '문자열을 담은 변수' 에서의 구조분해 할당 😥😥😥😥😥 ❓❓ 
    let str = 'hellodeokjingit';
    str.length
        // 문자열 길이를 구하는 구문
    let {length} = str;
        // [해석]
            // 1. str 은 이미 객체임? 
            // 2. 해당 객체 안에 length 라는 키가 있음? 
            // 3. [좌변] 해당 키에 접근해서 값을 가져오고 
            // 4. [좌변] key 가 자동적으로 변수 이름이 되게 하기 ❓❓❓❓❓ 

    console.log(length)
        // ❓❓❓❓❓❓❓❓ 이게 가능한 이유는 length 자체가 key 이기 때문에? 
        // '문자열 길이' 를 구조분해 할당으로 꺼내봄. 


// 🟦 객체화 시켜서 작업을 하다가 > 작업을 하다가, 객체 안에서, 필요한 값만 호출해서 사용

    let list = [{ id : 1, content : "dfalkjdsa",  isActive : true }, 
                { id : 2, content : "dfalkjdsa",  isActive : true }, 
                { id : 3, content : "dfalkjdsa",  isActive : true } , 
                { id : 4, content : "dfalkjdsa",  isActive : true } ]

    // 반복 돌리면서, id 값만 뽑아오자. 
        // 그러면 변수 이름은 자동으로 id 가 되는건가? ⭐⭐⭐⭐⭐ 
    list.forEach(function(i) {
        let {id} = i 
        console.log(id);

    })
    // let {id} = list;
        // 리스트 객체에서 'id 키 값 만, '구조분해할당' 으로 '할당' 가능 ⭐⭐⭐⭐⭐ 



// 🔷 예시 2 
    // city 의 값을 추출 해서 > 할당 하기 
        let user = {
                name : "lee", 
                adderess : {
                    city : "Seoul"
                }
        }

        // 가능은 한데 거의 한 씀? 
        let {adderess:{city}} = user;
        console.log(city)




// 📚 스프레드 연산자 (많이 사용하게 될 것)

    // 구문 
        // ... 이렇게 작성 

    // 기능 
        // '본 객체'를 '변경하지 않고', '새로운 객체' 를 만들어서, '할당' 해줌.  
        // '주소' 를 참조하지 않고, '값' 만 참고해서 > '새로운 객체' 를 만들어낸다. ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
            // 그래서, '값은 동일' 하고, '주소' 가 다른게 나온다. 

    // 예시
    let temp = [1,2,3];
    let temp2 = [4,5,6];

    let temp3 = [...temp, ...temp2];
    console.log(temp3)

    // 예시 
    let obj = {
        a : 1, 
        b : 2
    }

    let obj2 = {
        a : 2,
        b : 3, 
        c : 1
    }
    
    let obj4 = {
        a : 3,
        b : 4, 
        c : 4
    }

    let obj3 = {...obj, ...obj2, ...obj4};
        // 값이 겹쳐지면 > 뒤에 들어온 obj2 의 b 키 값이 덮어 씌워진다. ⭐⭐⭐⭐⭐ 
        // 키값이 동일할 경우 > '마지막 값' 으로 '할당' 된다. 
    
    console.log(obj3)

    