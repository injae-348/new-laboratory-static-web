const conferences = [
  {
    id: 132,
    date: "2024-06-19",
    title: "심층신경망을 이용한 네트워크 장애 분류를 위한 디지털 트윈 네트워크",
    author:
      "Abubakar Isah, 이지훈, 오상원, 김진술* | 2024년도 한국통신학회 하계종합학술발표회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 133,
    date: "2022-02-09",
    title:
      "시계열 데이터의 이상 탐지를 위한 Recurrence Plot 알고리즘 기반 시계열 이미지 생성 방안",
    author:
      "오상원, 윤준철, 김영관, 김진술* | 2022년도 한국통신학회 동계종합학술발표회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 134,
    date: "2022-02-09",
    title: "YOLO v3를 활용한 미디어 내 운송기기 탐지 모델 구현",
    author:
      "신혜주, 오승민, 오상원, 김영광, 엄태원, 김진술* | 2022년도 한국통신학회 동계종합학술발표회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 135,
    date: "2022-02-09",
    title: "생성적 적대 신경망 기반 이미지 생성을 통한 초해상화 방안",
    author:
      "오승민, 오상원, 신혜주, 엄태원, 김진술* | 2022년도 한국통신학회 동계종합학술발표회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 136,
    date: "2022-02-09",
    title: "전력 수요 예측을 위한 에지 컴퓨팅 성능 측정 연구",
    author:
      "김영광, 이지훈, 윤준철, 김영관, 김진술* | 2022년도 한국통신학회 동계종합학술발표회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 137,
    date: "2024-06-27",
    title:
      "개발 및 배포의 용이성을 위한 컨테이너 기반 웹 서비스 프레임워크 개발",
    author:
      "정인재, 오상원, 김진술* | 2024년도 한국디지털콘텐츠학회 하계종합학술대회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 138,
    date: "2024-06-27",
    title: "Varifocal 손실함수 기반 객체 탐지 모델 향상 방안 연구",
    author:
      "송재호, 한민수, 김진술* | 2024년도 한국디지털콘텐츠학회 하계종합학술대회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 139,
    date: "2024-06-27",
    title: "버텍스 애니메이션 텍스처의 원리 및 구현 방법에 관한 연구",
    author:
      "정광무, 남지승, 김진술* | 2024년도 한국디지털콘텐츠학회 하계종합학술대회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 140,
    date: "2024-06-27",
    title:
      "효율적인 전력 수요 예측을 위한 머신러닝 기반 XGBoost 및 RNN 기반 모델들의 성능 비교",
    author:
      "노주현, 남지승, 김진술* | 2024년도 한국디지털콘텐츠학회 하계종합학술대회",
    read_more: "#",
    category: "Domestic Conferences",
  },
  {
    id: 141,
    date: "2024-06-27",
    title: "시계열 기반 네트워크 데이터의 지식 그래프 화 분석",
    author:
      "이중훈, 이지훈, 오상원, Abubakar Isah, 박재형, 김진술* | 2024년도 한국디지털콘텐츠학회 하계종합학술대회",
    read_more: "#",
    category: "Domestic Conferences",
  },
];

let currentIndex = 0;
const itemsPerPage = 10;

function createConferenceItem(conference, index) {
  const [authors, publisher] = conference.author
    .split("|")
    .map((item) => item.trim());
  const displayNumber = conferences.length - index;

  return `
        <div class="conference-item">
            <div class="conference-item-header">
                <div class="conference-meta-left">
                    <div class="conference-number">${displayNumber}</div>
                    <div class="conference-date">${conference.date}</div>
                </div>
                <div class="conference-category">${conference.category}</div>
            </div>
            <h3 class="conference-item-title">
                <a href="${conference.read_more}" target="_blank" class="conference-title-link">${conference.title}</a>
            </h3>
            <div class="conference-item-content">
                <div class="conference-item-authors">${authors}</div>
                <div class="conference-item-publisher">${publisher}</div>
            </div>
        </div>
          `;
}

function loadConferences() {
  const conferenceList = document.getElementById("conferenceList");
  const endIndex = Math.min(currentIndex + itemsPerPage, conferences.length);

  for (let i = currentIndex; i < endIndex; i++) {
    conferenceList.innerHTML += createConferenceItem(conferences[i], i);
  }

  currentIndex = endIndex;

  // Hide "View More" button if all items are loaded
  if (currentIndex >= conferences.length) {
    document.getElementById("loadMoreBtn").classList.add("hidden");
  }
}

// Initial load
loadConferences();

// Load more button click handler
document
  .getElementById("loadMoreBtn")
  .addEventListener("click", loadConferences);