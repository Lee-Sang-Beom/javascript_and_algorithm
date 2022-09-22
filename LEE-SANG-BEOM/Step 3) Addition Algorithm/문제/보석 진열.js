function solution(gems){
    // 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간
    let answer = [0, gems.length];

    // pointer 1,2
    let start = 0;
    let end = 0;

    const gemKinds = new Set(gems).size; // 겹치지 않는 보석 개수
    const collect = new Map();

    // collect: index를 증가시키며, 각 보석이 몇개있는지 확인
    collect.set(gems[0], 1); // 시작하며, 첫 보석을 먼저 담음
    while(start < gems.length && end < gems.length){
        // collect: map임. map.size === gemKinds인 경우에는 map도 4개 종류를 다 채웠다는 뜻
        // map key-value에서, value에 보석 수를 기입
        if (collect.size === gemKinds){ // 모든 종류의 보석이 map에 들어간 경우
            if(end - start < answer[1] - answer[0]){ // 만약 모든보석이 map에 있고 기존 answer보다, 현재 포인터 사이값 차가 더 좁은 경우
                answer = [start+1, end+1]; // answer교체 : 진열대번호 1 ~ length에 맞게 포인터 값(포인터는 0부터 시작)을 맞춤
            }

            // key: 보석의 이름
            // value: 기존 보석의 개수를 나타내는 값 -1 
            collect.set(gems[start], collect.get(gems[start])-1);

            if(!collect.get(gems[start])){ // 만약 0이 됐다면 목록에서 제거
                collect.delete(gems[start]);
            }
            start += 1;
        } else{
            // 아직, 모든 보석을 구매할 수 없다면
            end += 1;
            
            // 보석 추가
            // key: 보석의 이름
            // value: 기존 보석의 개수를 나타내는 값 + 1 (만약, 없었다면 0부여)
            collect.set(gems[end], 1+ (collect.get(gems[end]) || 0))
        }
    }

    return answer;
}
