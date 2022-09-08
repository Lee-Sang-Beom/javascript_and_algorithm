const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;
  
  const arr1 = new Array();
  const arr2 = [];
  const arr3 = [1,2,3,4,5];
  const arr4 = new Array(5);
  const arr5 = new Array(5).fill(5);
  const arr6 = Array.from(Array(5), function(v,k){
    return k+1;
    // 파라미터 1: 배열의 값
    // 파라미터 2: 배열의 인덱스
  
  })
  
  console.log(arr6);
  
  const arr = [1,2,3,4,5,6];
  
  console.log(arr.length);
  arr.length = 3;
  console.log(arr);
   
  arr.length = 10;
  console.log(arr);
  
  // 05:32
  
  const arr7 = [1,2,3,4,5,6];
  
  // join 
  console.log(arr7.join(", "));
  
  // reverse => 원래 배열에도 영향이 있다.
  console.log(arr7.reverse());
  
  const arr8 = [1,2,3,4,5,6];
  const arr9 = [7,8,9,10];
  
  // concat
  console.log(arr8.concat(arr9));
  
  // 배열 요소 삭제
  // push, pop
  const arr10 = [1,2,3,4,5,6];
  arr10.push(7);
  arr10.push(7,8,9);
  console.log(arr10);
  
  arr10.pop();
  arr10.pop();
  console.log(arr10.pop());
  console.log(arr10);
  
  const arr11 = [1,2,3,4,5,6];
  // shift (맨 앞 요소를 삭제), unshift (맨 앞 요소에 추가)
  
  arr11.shift();
  arr11.shift();
  console.log(arr11);
  
  arr11.unshift(10);
  console.log(arr11);
  
  // slice
  const arr12 = [1,2,3,4,5,6];
  
  console.log(arr12.slice(2,4)); // 3,4가 나옴.
  
  console.log(arr12); // 원본 배열 변화 없음.
  
  arr12.splice (2,2);
  console.log(arr12); // 3,4가 삭제됨. (원본 배열까지 변화 적용.)
  
  const arr13 = [1,2,3,4,5,6];
  
  // 예전 for문 
  for (let i = 0; i <6; i +=1){
    console.log(arr13[i]);
  }
  
  // for of
  for (const item of arr13){
    console.log("for of,",item);
  }
  
  console.log(typeof arr13);
  
  arr13['key'] = "value";
  console.log(arr13);
  console.log(arr13.length );
  
  // object part
  
  const obj1 = new Object();
  const obj2 = {};
  const obj3 = {name: 'lattesmoody', company: 'chocolatte'};
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
  
  // 객체 추가 방법
  
  obj3["email"] = "lattesmoody@gmail.com";
  obj3.phone = "01000000000";
  console.log(obj3);
  
  // 객체 삭제
  
  delete obj3.phone;
  console.log(obj3);
  
  console.log('email' in obj3); // true
  console.log('phone' in obj3); // false
  
  // key-value 값 알아보기.
  console.log(Object.keys(obj3)); // key 값 나옴.
  console.log(Object.values(obj3)); // value 값 나옴.
  
  // for in >> (key-value 값 동시에 나옴.) 쉽게 객체를 순회할 수 있다.
  for (const key in obj3){
    console.log(key, obj3[key]);
  }