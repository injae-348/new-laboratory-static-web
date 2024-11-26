# 연구실 정적 웹 페이지

Custom Domain 연결 순서

1. 도메인 구입
2. GitHub Pages에 Custom Domain 연결
3. 도메인 구매처에서 DNS 설정 세팅
4. 도메인 연결 확인

3-1. CNAME 설정
```
type = CNAME
host = www
points to = injae-348.github.io
ttl = 1 hour
```

3-2. IP 주소 설정(www가 없는 APEX 도메인 형태)
   총 4개의 IP 주소 추가 필요
```
type = A
host = @
points to = IP 주소
ttl = 1 hour
```

등록해야할 Github Pages IP 주소 4가지
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
