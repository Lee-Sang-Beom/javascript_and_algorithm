/*

[네트워크 기초]

scheme: 프로토콜이 들어가는 영역

1단계: URL 해석.

2단계: DNS 조회
1. Domain Name System
2. DNS: 도메인과 IP주소를 서로 변환해준다.
3. DNS로 요청 보내기 전 브라우저 캐시와 hosts 파일 참조.
4. DNS는 보통 통신사(ISP)에서 제공하는 것을 사용.
5. Name Server: DNS를 운영하는 서버
6. present.do, www.present.do, gateway.dev.present.do
=> 도메인은 present.do

3단계: 해당 IP가 존재하는 서버로 이동.
1. 네트워크 장비인 라우터를 통해 이동.
2. 동적 라우팅을 통해 이동.

4단계: ARP를 이용하여 MAC 주소 변환을 한다.
1. Address Resolution Protocol
2. 논리 주소인 IP 주소를 물리 주소인 MAC 주소로 변환하는 프로토콜.
3. 실제 통신을 위해 변하지 않는 고유한 MAC 주소 필요.
4. 네트워크 내에 ARP를 Broadcasting하면 해당 IP주소를 가지고 있는 기기가 MAC 주소를 반환한다.
* Broadcasting: 송신 호스트가 전송한 데이터가 네트워크에 연결된 모든 호스트에 전송되는 방식

* IP: 논리적인 주소
* MAC: 물리적인 주소
* 기계의 실제 위치 알기 위해선 MAC 주소 필요

5단계: TCP 통신을 통해 Socket을 열어야 함.
1. 네트워크 통해 해당 기기로 패킷을 전달.
2. 3 way handshake로 연결 요청.
3. 요청 수락 시 기기는 패킷을 받아 처리.

6단계: 서버는 응답 반환
1. HTTP 프로토콜로 들어온 패킷 읽고 처리.
2. 요청에 따른 적절한 응답 값 반환.

7단계: 브라우저는 렌더링.
1. HTML을 읽어 DOM Tree를 구축.
2. 만들어진 DOM Tree를 이용하여 화면에 그림.
3. 스크립트 실행.

논외:
OSI 7 계층
Routing Table
Subnet mask
TCP Socket Stream  
*/
