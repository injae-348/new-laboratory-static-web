# 연구실 정적 웹 페이지

###### Todo

- Publication & Patent 애니메이션 제거, Title 클릭 대신 Read More 버튼을 두어 사이트 이동
- Publication & Patent Index(파란색 숫자) 대신 발행연월일을 좀 더 키우기
- 필요한 데이터 삽입
- Custom Domain 연결

Custom Domain 연결 순서

1. 도메인 구입
2. GitHub Pages에 Custom Domain 연결
3. 도메인 구매처에서 DNS 설정 세팅
4. 도메인 연결 확인

학교에서 발급 받은 도메인 존재
전산원에 부탁할 일

1. CNAME 설정 부탁
   type = CNAME
   host = www
   points to = injae-348.github.io
   ttl = 1 hour
2. IP 주소 설정(www가 없는 APEX 도메인 형태)
   총 4개의 IP 주소 추가 필요

   type = A
   host = @
   points to = IP 주소
   ttl = 1 hour

   등록해야할 Github Pages IP 주소 4가지
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
