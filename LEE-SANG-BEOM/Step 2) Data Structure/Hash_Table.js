/*
 해시 테이블 : 삽입 o(1). 키를 알고 있다면, 삭제와 탐색도 o(1)
 - 빠르게 값을 찾아야 하는 경우 해시테이블을 사용하는 것이 유리하다.
 - 각 테이블에 해당하는 인덱스를 해시 테이블에서는 bucket임
 - 각 테이블의 요소는 키와 값을 둘 다 저장하고 있어야 함.
 - 해시함수 : 입력받은 값을 특정 범위 내 숫자로 변경하는 함수
 - 해시 충돌 : 해시테이블의 문제점으로, 해시함수의 결과가 동일하여 겹친다면?
    1) 선형 탐사법 : 충돌 발생 시 옆으로 한 칸 이동한다.
    2) 제곱 탐사법 : 충돌 발생 시, 충돌이 발생한 횟수의 제곱만큼 옆으로 이동
                    (충돌이 발생할수록 범위가 커지므로, 선형탐사법 보다 데이터의 몰림이 덜함)
    3) 이중해싱 : 충돌 발생 시, 다른 해시함수를 이용 (새로운 index를 만듬)
    4) 분리 연결법: 버킷의 값을 연결리스트로 사용해, 충돌이 발생하면 리스트에 값을 추가
                   (하나의 bucket이 무한정 늘어날 수도 있음)

*/

// array로 해시테이블처럼 사용하기 : 올바른 방법이 아님.
{
    const table=[];
    table["key"]=10;
    table["key2"]="hello";
    console.log(table["key"]); // 100

    table["key"]=340;
    console.log(table["key"]); // 340

    delete table["key"];
    console.log(table["key"]); // undefined

}

// map으로 해시테이블처럼 사용하기
{
    const table= new Map();

    // map은 set함수로 값을 넣음
    table.set('key',100);
    table.set('key2','hello');

    // map은 get함수로 값을 빼옴
    console.log(table['key']); // undefined
    console.log(table.get('key2')); // hello

    // obj로 key사용 가능
    const obj = {a:1};
    table.set(obj,'world');
    console.log(table.get(obj)); // world
    
    // 삭제는 delete
    table.delete(obj);
    console.log(table.get(obj)); // undefined

    // key 집합 불러오기
    console.log(table.keys()); // [Map Iterator] { 'key', 'key2' }

    // value 집합 불러오기
    console.log(table.values()); // [Map Iterator] { 100, 'hello' }

    // key 값인 key2를 가지고 있는지 확인
    console.log(table.has('key2')); // true

    // 초기화
    table.clear();
    console.log(table.values()); // [Map Iterator] {  }

}

// set으로 해시테이블처럼 사용하기
// set은 키와 값이 동일하게 저장되는 방벙을 채택하고 있음
// 집합 연산이라 볼 수 있음. 중복된 내용을 전부 제외함
{
    const table = new Set();

    // add 메소드 사용 시 키 생성 (아래의 경우, values도 동일하게 들어감)
    table.add('key');
    table.add('key2');

    // has : 포함여부
    console.log(table.has('key')); // true
    console.log(table.has('key3')); // false

    // 삭제 시, delete
    table.delete('key2');
    console.log(table.has('key2')); // false

    // size
    table.add('key3');
    table.add('key'); // 중복된 값은 더해도 의미 없음.
    console.log(table.size); // 2

    // clear
    table.clear();
    console.log(table.size); // 0

}