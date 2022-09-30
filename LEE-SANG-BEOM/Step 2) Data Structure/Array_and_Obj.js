
// Array().fill();
{
  const arr = Array(5).fill(100); // new Array(5).fill(100);
  console.log(arr); // [ 100, 100, 100, 100, 100 ]
}


// Array.from();
{
  // Array.from(초기화할 배열, 함수형 로직)
  // 함수형 로직 : 1번째 인자는 배열의 값 v, 2번째 인자는 배열의 인덱스 k
  const arr = Array.from(Array(5), (v, k) => {
    // 1~5로 출력할 것이므로 index+1한 값을 리턴
    return (k = k + 1);
  });
  console.log(arr); // [ 1, 2, 3, 4, 5 ]
}


// Array.length
{
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.length); // 5
}


// join function : 배열을 string으로
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); // 배열 요소를 전달된 운자요소로 이어 string 변환
    console.log(result); // apple,banana,orange
}

// reverse function : 배열을 reverse
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.reverse(); // 배열 요소를 reverse
    console.log(result, fruits); // [ 'orange', 'banana', 'apple' ]
}

// shift, unshift
{
    const arr = [1,2,3,4,5];

    // shift: 제일 처음 원소을 제거
    arr.shift(); // [ 2, 3, 4, 5 ]
    arr.shift(); // [ 3, 4, 5 ]
    console.log(arr);

    // unshift : 요소를 맨 앞에 추가
    arr.unshift(0); // [ 0, 3, 4, 5 ]
    console.log(arr); 
}

// slice
{
    const arr = [1,2,3,4,5];

    // slice: index 2 <= index < 4 요소를 잘라 옴
    const result = arr.slice(2,4);

    // 원본 배열에는 영향을 주지 않음.
    console.log(result, arr) // [ 3, 4 ] [ 1, 2, 3, 4, 5 ]
}

// splice
{
    const arr = [1,2,3,4,5];

    // slice: index 2부터 3개의 원소를 잘라 반환
    const result = arr.splice(2,3);

    // 원본 배열에 영향을 줌.
    console.log(result, arr) // [ 3, 4, 5 ] [ 1, 2 ]
}

// for문 순회
{
  const arr = [1, 2, 3, 4, 5];

  for (let i = 0; i < 5; i++) {
    console.log(arr[i]); // 1 2 3 4 5
  }

  // for of 사용 : iterable한 객체를 순회할 때 사용할 수 있다. (next()로 전체를 순회)
  // for of문은 값을 return
  // for~in문은 인덱스가 return
  for (const item of arr) {
    console.log(item);  // 1 2 3 4 5
  }

}

// arr type : 추천하지 않음
{
    const arr = [1, 2, 3, 4, 5];
    arr["key"] = "value"; // 객체처럼 사용 가능
    console.log(arr); // [ 1, 2, 3, 4, 5, key: 'value' ]
    console.log(arr.length); // 5 (6이 아님)
}

// 객체 생성
{
    const obj1 = new Object({name:'name', value:'value'});
    const obj2 = {name:'name', value:'value'};

    console.log(obj1, obj2);
}

// 객체 값 관리
{
    const obj = {name:'name', value:'value'};

    // 추가
    obj['age'] = 30;
    console.log(obj); // { name: 'name', value: 'value', age: 30 }

    obj.school = "KIT";
    console.log(obj); // { name: 'name', value: 'value', age: 30, school: 'KIT' }

    // 삭제
    delete obj.age;
    console.log(obj); // { name: 'name', value: 'value', school: 'KIT' }

    // key 존재 확인
    console.log("age" in obj); // false
    console.log("name" in obj); // true

    // key 집합 확인
    console.log(Object.keys(obj));

    // value 집합 확인
    console.log(Object.values(obj));

    // 객체 순회 : for in
    for (const key in obj){
        console.log(key, obj[key]); // 하나씩 순회 : name name, value value, school KIT
    }
} 


