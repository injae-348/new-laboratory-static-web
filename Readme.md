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

---

## Hi-IoP 웹 사이트 디렉터리 구조

```
├─ css => Css 변경이 필요할 때
├─ img => 이미지를 추가하고 싶을 때
│  ├─...
│  └─project
├─ js
├─ json-creater => 데이터를 변경하고 싶을 때
├─ lib
│  ├─...
│  └─wow
├─ scss
└─ .html 파일들 => 하드코딩된 내용 수정이 필요할 때(ex. index.html 내용 및 member.html에서 교수님에 관한 정보 등)
```

해당 페이지는 템플릿을 변경해 만들었습니다. 변경 사항이 있을 때 수정할 파일은 다음과 같습니다.
- 스타일 변경: css 디렉터리
- 새로운 이미지 추가 및 삭제: img 디렉터리
- 새로운 정보 추가 및 삭제: json-creator 디렉터리
- html 구조 변경: 각 html 파일들

※ 기본 제공 파일에서 변경하고 싶은게 있다면 다른 js, lib, scss 내용을 변경해도 좋아요.

※ Footer에 있는 Designed By HTML Codex는 저작권 고지 사항으로 반드시 붙여야합니다.

---

## HTML 파일, img 디렉터리, json-creator 디렉터리 연관 관계
![image](https://github.com/user-attachments/assets/7cfb1843-5b2b-4967-9b33-689c3b8631bd)

Hi-IoP 사이트는 다음과 같은 페이지들로 이루어져 있습니다.(이미지 참고해주세요.)
- ABOUT
- MEMBER
- PROJECT
- PUBLICATION(International Journal, Domestic Journal, International Conference, Domestic Conference
- PATENT
- PHOTO

PUBLICATION에서 JOURNAL과 CONFERENCE 의 경우 IJ, DJ, IC, DC 약자로 표시하겠습니다.


### 각 페이지별 사용되는 .html 파일 및 json-creator/*.js 파일
```
ABOUT - index.html 
MEMBER - member.html / stu-alumi.js, stu-ms.js, stu-pd.js, stu-ph.js, stu-under.js
PROJECT - project.html / project.js
IJ - in-jour.html / in-jour.js
DJ - dom-jour.html / dom-jour.js
IC - in-conf.html / in-conf.js
DC - dom-conf.html / dom-conf.js
PATENT - patent.html / patent-pre-2021.js, patent-202x.js
PHOTO - photo.html / photo.js
```

참고
1. 각 html 파일에 들어갈 데이터들은(EX. Member 정보, Patent 정보 등등) json-creator에 .js 파일들을 통해 데이터를 넣어줬습니다.

  1-1. ex) Member페이지 Undergraduate 정보 변경 필요 => stu-under.js 파일 변경
  
  1-2. ex) Project페이지 내용 변경 필요 => project.js 파일 변경

3. 다만, html 파일에 하드 코딩된 부분은 크게 2개 있습니다.(수정이 필요할 때 .html 파일을 직접 수정해주세요.)
   
   2-1. .js 파일이 없는 index.html 모든 정보가 하드코딩 되어있다 생각하시면 됩니다.
   
   2-2. member.html의 Professor 정보


