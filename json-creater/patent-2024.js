const patents2024 = [
  {
    id: 109,
    date: "2024-07-07",
    title: "MQTT 기반 모빌리티 관리 시스템, 방법 및 프로그램",
    author: "김진술, 오상원",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 96,
    date: "2024-03-18",
    title:
      "말단 엣지 디바이스 기반 데이터 이상 탐지 및 결손 데이터 보완을 통한 전력소비 예측 장치 및 방법",
    author: "김진술 오승민",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 97,
    date: "2024-02-13",
    title:
      "에너지 데이터를 활용하기 위한 유전 알고리즘 기반 엣지 컴퓨팅 내 개인화된 딥러닝 모델 운용 방법과 시스템",
    author: "김진술 오승민",
    read_more: "",
    category: "Domestic Patents",
  },
];

let currentIndex2024 = 0;
const itemsPerPage2024 = 10;

function createPatentItem2024(patent, index) {
  const displayNumber = patents2024.length - index;
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
                  <div class="patent-year-tag">2024</div>
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

function loadPatents2024() {
  const patentList = document.getElementById("patent2024List");
  const endIndex = Math.min(
    currentIndex2024 + itemsPerPage2024,
    patents2024.length
  );

  for (let i = currentIndex2024; i < endIndex; i++) {
    patentList.innerHTML += createPatentItem2024(patents2024[i], i);
  }

  currentIndex2024 = endIndex;

  if (currentIndex2024 >= patents2024.length) {
    document.getElementById("loadMoreBtn2024").classList.add("hidden");
  }
}

document
  .getElementById("loadMoreBtn2024")
  .addEventListener("click", loadPatents2024);

loadPatents2024(); // Initial load
