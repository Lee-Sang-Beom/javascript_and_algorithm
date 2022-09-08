// 1. 같은 장르끼리 묶어야함
// 2. 묶인 노래를 재생순 정렬
// 3. 노래를 2개까지 자르는 작업
// 4. 고유번호 return

function solution(genres, plays) {
  // genres[i]는 고유번호가 i인 노래의 장르입니다.
  // plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
  // genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.

  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]]) // 새로운 배열 반환 : genre와 index별 play 횟수 반환 
    .forEach((element, index) => { // element: [classic, 500] 등의 배열임
      const genre = element[0];
      const play = element[1];

      // data 객체를 생성 : 해당 객체는 pop과 classic의 총 play중 뭐가 큰지 비교하기 위해 총 데이터를 통합하기 위해 사용
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      console.log(data);
      genreMap.set(genre, {
        // 이전 값에 play값을 더해 총 total play횟수를 구함
        total: data.total + play,

        /*
         각 장르의 고유번호 별로 어떤 인덱스의 노래의 재생횟수가 어떻다는 것을 보여주기 위함
        [
            [ 'classic', 500 ],
            [ 'pop', 600 ],
            [ 'classic', 150 ],
            [ 'classic', 800 ],
            [ 'pop', 2500 ]
        ]

        아래의 songs는 {play: 500, index: 0} {play: 600, index: 1} {play: 150,index: 2} 이렇게 점점 추가함
         */
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  // "고유번호"가 리턴되어야 함

  // 모든 프로퍼티와 값을 배열로 반환함 : 객체가 가지고 있는 모든 프로퍼티를 키와 값 쌍으로 배열 형태로 반환
  // total 순 정렬
//   return [...genreMap.entries()]
//     .sort((a, b) => b[1].total - a[1].total)
//     .flatMap((item) => item[1].songs)
//     .map((song) => song.index);
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];
solution(genres, plays);
