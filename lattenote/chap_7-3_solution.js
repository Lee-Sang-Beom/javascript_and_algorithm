const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 1. 같은 장르끼리 묶기.
// 2. 묶인 노래들을 재생 순으로 정렬.
// 3. 노래를 2개까지 자르는 작업.

// keyword: "bind(해쉬테이블과 관련이 있다.), sort"

// .foreach() 함수?
// entries() 함수?
// flatMap() 함수?

const genres=["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

function solution(genres, plays){
    const genreMap = new Map();
    genres.map((genre,index)=>[genre,plays[index]])
    .forEach((element, index) => {
        const genre = element[0];
        const play = element[1];
        const data = genreMap.get(genre) || {total: 0, songs: [] };
        genreMap.set(genre, {
            total: data.total + play,
            songs: [...data.songs, {play, index}]
            .sort((a,b) => b.play -a.play)
            .slice(0,2)
        })
    })
    return [...genreMap.entries()]
    .sort((a,b) => b[1].total - a[1].total)
    .flatMap(item=> item[1].songs)
    .map(song=>song.index)
}


console.log(solution(genres,plays));