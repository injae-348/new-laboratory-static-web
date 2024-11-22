const journals = [
  {
    id: 55,
    date: "2023-04-30",
    title: "하이브리드 클라우드 환경 기반 연합학습 시스템 아키텍처 연구",
    author:
      "신혜주, 오상원, 오승민, 김광기, 김진술* | 한국지식정보기술학회 논문지",
    read_more:
      "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=9c7747157f498e6847de9c1710b0298d&keyword=%ED%95%98%EC%9D%B4%EB%B8%8C%EB%A6%AC%EB%93%9C%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%99%98%EA%B2%BD%20%EA%B8%B0%EB%B0%98%20%EC%97%B0%ED%95%A9%ED%95%99%EC%8A%B5%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20%EC%97%B0%EA%B5%AC",
    category: "Domestic Journals",
  },
  {
    id: 58,
    date: "2022-08-31",
    title: "전력 사용량 데이터 패턴 분석을 위한 시계열 이미지 생성 방안 연구",
    author: "윤준철, 오상원, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "http://journal.dcs.or.kr/_PR/view/?aidx=34064&bidx=3050",
    category: "Domestic Journals",
  },
  {
    id: 62,
    date: "2022-04-30",
    title:
      "이미지 내 객체 분류를 위한 노드 가지치기 기반 압축된 심층 합성곱 신경망 모델",
    author: "오승민, 오상원, 김영광, 신혜주, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "http://journal.dcs.or.kr/_PR/view/?aidx=32943&bidx=2927",
    category: "Domestic Journals",
  },
  {
    id: 72,
    date: "2020-12-31",
    title:
      "자율주행 환경에서 이미지 객체 분할을 위한 강화된 DFCN 알고리즘 성능연구",
    author: "김영광, 김진술* | 스마트미디어저널",
    read_more:
      "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10659170",
    category: "Domestic Journals",
  },
  {
    id: 116,
    date: "2024-05-01",
    title:
      "언리얼 엔진 나이아가라 파티클 시뮬레이션을 이용한 대규모 메타버스 플랫폼 구현",
    author: "정광무, 정일권, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2024.25.5.1387",
    category: "Domestic Journals",
  },
  {
    id: 118,
    date: "2024-04-01",
    title:
      "이미지 내 객체 분류를 위한 노드 가지치기 기반 압축된 심층 합성곱 신경망 모델",
    author: "오상원, 오승민, 김영광, 신혜주, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2022.23.4.735",
    category: "Domestic Journals",
  },
  {
    id: 119,
    date: "2020-09-01",
    title:
      "K-평균 군집화 알고리즘 및 딥러닝 기반 군중 집계를 이용한 전염병 확진자 접촉 가능성 여부 판단 모니터링 시스템 제안",
    author:
      "이동수, ASUIQUZZAMAN AKM, 김영광, 신혜주, 김진술* | 스마트미디어저널",
    read_more: "https://doi.org/10.30693/smj.2020.9.3.122",
    category: "Domestic Journals",
  },
  {
    id: 120,
    date: "2020-11-30",
    title:
      "무선 센서 네트워크에서 네트워크 수명 향상을 위한 체인 기반의 라우팅 모델",
    author: "신병무, 김진술* | 아시아태평양융합연구교류논문지",
    read_more: "https://doi.org/10.30693/smj.2020.9.3.122",
    category: "Domestic Journals",
  },
  {
    id: 122,
    date: "2019-12-01",
    title:
      "가상화 플랫폼을 통한 CNN기반 모니터링 애플리케이션의 안정적인 응답 속도 보장 방안 연구",
    author:
      "오승민, ASHIQUZZAMAN AKM, 이동수, 김진술*, 박재형* |  디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2019.20.12.2525",
    category: "Domestic Journals",
  },
  {
    id: 123,
    date: "2019-10-01",
    title:
      "스마트 팩토리 환경에서의 딥러닝 기반 제품 데이터 시각화 및 지능형 모니터링 기술 연구",
    author:
      "오승민, ASHIQUZZAMAN AKM, 이동수, 김진술*, 박재형* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2019.20.10.1933",
    category: "Domestic Journals",
  },
  {
    id: 124,
    date: "2018-08-01",
    title:
      "1인용 전동휠체어의 안전 운행을 위한 지능형 통합 제어보드 기능 개선 연구",
    author: "조영빈, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2018.19.8.1507",
    category: "Domestic Journals",
  },
  {
    id: 125,
    date: "2018-08-01",
    title: "휠체어 균형 조정을 위한 스마트 센서의 적용에 관한 연구",
    author: "Linh Van Ma, 조영빈, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org/10.9728/dcs.2018.19.8.1585",
    category: "Domestic Journals",
  },
  {
    id: 127,
    date: "2017-04-01",
    title:
      "로컬 물리적 네트워크에서 효율적인 대역폭 공유를 위한  퍼지 기반의 동적 방법",
    author:
      "Linh Van Ma, 박상현, 장종현, 박재형, 김진술* | 디지털콘텐츠학회논문지",
    read_more: "https://doi.org//10.9728/dcs.2017.18.2.411",
    category: "Domestic Journals",
  },
  {
    id: 128,
    date: "2017-04-07",
    title:
      "도커 기반에 가상머신을 이용한 사용자 네트워크의 최적 멀티미디어 데이터 분할 전송 방법",
    author: "박상현, 류호영, 김진술* | 한국지식정보기술학회 논문지",
    read_more: "https://doi.org//10.9728/dcs.2017.18.2.411",
    category: "Domestic Journals",
  },
  {
    id: 130,
    date: "2021-08-01",
    title: "스마트농업 ICT 융합기술 연구 동향 분석",
    author: "이지훈, 김진술* | 한국통신학회지(정보와통신)",
    read_more: "",
    category: "Domestic Journals",
  },
  {
    id: 131,
    date: "2021-08-01",
    title: "스마트 팜 환경 내 사물인터넷 통신기술 연구 동향",
    author: "김영광, 정광무, 김진술* | 한국통신학회지(정보와통신)",
    read_more: "",
    category: "Domestic Journals",
  },
];

let currentIndex = 0;
const itemsPerPage = 10;

function createJournalItem(journal, index) {
  const [authors, publisher] = journal.author
    .split("|")
    .map((item) => item.trim());
  const displayNumber = journals.length - index;

  // read_more가 존재하고 공백이 아닐 때만 활성화
  const hasValidLink = journal.read_more && journal.read_more.trim() !== "";

  return `
        <div class="journal-item">
            <div class="journal-item-header">
                <div class="journal-meta-left">
                    <div class="journal-number" style="font-size:1.4rem">${displayNumber}</div>
                    <div class="journal-date" style="font-size:1.5rem">${
                      journal.date
                    }</div>
                </div>
                <div class="journal-category">${journal.category}</div>
            </div>
            <h3 class="journal-item-title">
                <span class="journal-title-text">${journal.title}</span>
            </h3>
            <div class="journal-item-content">
                <div class="content-left">
                    <div class="journal-item-authors">${authors}</div>
                    <div class="journal-item-publisher">${publisher}</div>
                </div>
                <a href="${hasValidLink ? journal.read_more : "#"}" 
                   class="journal-view-more ${!hasValidLink ? "disabled" : ""}"
                   ${!hasValidLink ? 'onclick="return false;"' : ""} 
                   target="_blank">
                   View More
                </a>
            </div>
        </div>
    `;
}

function loadJournals() {
  const journalList = document.getElementById("journalList");
  const endIndex = Math.min(currentIndex + itemsPerPage, journals.length);

  for (let i = currentIndex; i < endIndex; i++) {
    journalList.innerHTML += createJournalItem(journals[i], i);
  }

  currentIndex = endIndex;

  if (currentIndex >= journals.length) {
    document.getElementById("loadMoreBtn").classList.add("hidden");
  }
}

// Initial load
loadJournals();

// Load more button click handler
document.getElementById("loadMoreBtn").addEventListener("click", loadJournals);
