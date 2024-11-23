const patents2021 = [
  {
    id: 38,
    date: "2021-05-28",
    title:
      "화재상황에 대한 화재기록정보를 분석하여 화재상황의 위험도를 판단하는 시스템 및 그 방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 장진호",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 40,
    date: "2021-09-11",
    title: "금융사기 위험도 판단 서버, 방법 및 프로그램",
    author: "김진술, 이동수, 아시크자만에케이엠, 장진호",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 99,
    date: "2021-09-02",
    title: "블록체인 기반 사용자 맞춤형 감염병 알림 시스템, 장치 및 방법",
    author: "김진술, 김영광, 오승민, 오상원, 이동수",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 100,
    date: "2021-08-10",
    title:
      "딥러닝 모델 기반의 도로 상태 판단을 통한 교통 사고 예방 장치 및 방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 김영광",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 101,
    date: "2021-08-03",
    title:
      "심층학습 모델을 이용한 상습 결빙 및 미끄러움 위험 지역 모니터링을 위한 장치 및 이를 위한 방법",
    author: "지택수, 김진술, 김치훈, 장재혁",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 102,
    date: "2021-07-20",
    title: "도로 결빙 현상 알림을 제공하는 차량 제어 시스템 및 그것의 제어방법",
    author: "김진술, 아시크자만에이케이엠, 이동수",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 103,
    date: "2021-06-29",
    title: "무인 비행체를 이용한 화재위험도 예측 시스템 및 그 방법",
    author: "김진술, 오승민, 이동수, 아시쿠자만에이케이엠",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 104,
    date: "2021-06-10",
    title: " CCTV 영상 분석을 통한 전염병에 대한 잠재적 확진자를 예측하는 방법",
    author: "김진술, 이동수, 아시크자만에이케이엠, 김영광, 신혜주",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 105,
    date: "2021-05-28",
    title: "딥러닝 기반 이미지 내 객체 분류 시스템 및 방법",
    author: "김진술, 오상원, 아시크자만에이케이엠, 장진호, 이동수",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 106,
    date: "2021-04-19",
    title:
      "기계학습한 엣지 서버환경에서 블랙아이스 포트홀, 안개 등을 포함하는 도로 상태를 파악하여 사고발생을 예측함으로써 교통사고를 예방하는 사고발생 예측 장치 및 그 제어방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 김영광",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 107,
    date: "2021-01-28",
    title: "네트워크 서비스를 위한 이미지 품질 평가 시스템 및 그 방법",
    author: "김진술, 아시크자만에이케이엠, 이동수, 오승민, 김상우",
    read_more: "",
    category: "Domestic Patents",
  },
];

let currentIndex2021 = 0;
const itemsPerPage2021 = 10;

function createPatentItem2021(patent, index) {
  const displayNumber = patents2021.length - index;
  const hasValidLink = patent.read_more && patent.read_more.trim() !== "";

  return `
          <div class="patent-item">
              <div class="patent-header">
                  <div class="patent-header-left">
                      <!--<div class="patent-number">${displayNumber}</div>-->
                      <div class="patent-date" style="font-size:1.5rem">${
                        patent.date
                      }</div>
                  </div>
                  <div class="patent-year-tag">2021</div>
              </div>
              <div class="patent-title">${patent.title}</div>
              <div class="patent-content">
                  <div class="content-left">
                      <div class="patent-authors">${patent.author}</div>
                  </div>
                  <a href="${hasValidLink ? patent.read_more : ""}" 
                     class="patent-view-more ${!hasValidLink ? "disabled" : ""}"
                     ${!hasValidLink ? 'onclick="return false;"' : ""} 
                     target="_blank">
                     View More
                  </a>
              </div>
          </div>
      `;
}

function loadPatents2021() {
  const patentList = document.getElementById("patent2021List");
  const endIndex = Math.min(
    currentIndex2021 + itemsPerPage2021,
    patents2021.length
  );

  for (let i = currentIndex2021; i < endIndex; i++) {
    patentList.innerHTML += createPatentItem2021(patents2021[i], i);
  }

  currentIndex2021 = endIndex;

  if (currentIndex2021 >= patents2021.length) {
    document.getElementById("loadMoreBtn2021").classList.add("hidden");
  }
}

document
  .getElementById("loadMoreBtn2021")
  .addEventListener("click", loadPatents2021);

loadPatents2021(); // Initial load
