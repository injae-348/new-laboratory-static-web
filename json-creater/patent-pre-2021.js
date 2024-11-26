const patentsPre2021 = [
  {
    id: 108,
    date: "2020-09-11",
    title: "사고기록정보와 이미지에 기반한 재난 상황 판단 방법 및 시스템",
    author: "김진술, 이동수, 아시크자만에이케이엠, 장진호",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 112,
    date: "2019-10-01",
    title: "사용자 감정 분석을 이용한 이벤트 탐지 시스템 및 방법",
    author: "김진술, 구엔반콴",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 110,
    date: "2019-09-03",
    title: "적응형 스트리밍 서버를 전환하기 위한 방법",
    author: "김진술 마반린 김상우",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 111,
    date: "2019-07-22",
    title: "다른 위치에서 동기화된 PPG와 PCG를 사용한 감정 인식 장치 및 방법",
    author: "김진술 구엔반콴",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 113,
    date: "2018-11-07",
    title: "전자 섬유를 이용한 센싱 및 사용자 식별 시스템",
    author: "김진술, 박상현",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 114,
    date: "2018-08-24",
    title:
      "정확한 위치정보 획득을 위한 퍼지로직 기반 무선신호 분석을 통한 스마트 디바이스 사용자 위치 파악 방법",
    author: "김진술, 마반린",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 115,
    date: "2018-07-06",
    title:
      "무선 기반의 장애물 감지 센서를 이용한 전동휠체어 안전주행 시스템 및 방법",
    author: "김진술, 박상현",
    read_more: "",
    category: "Domestic Patents",
  },
];

let currentIndexPre2021 = 0;
const itemsPerPagePre2021 = 10;

function createPatentItemPre2021(patent, index) {
  const displayNumber = patentsPre2021.length - index;
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
                  <div class="patent-year-tag">Pre 2021</div>
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

function loadPatentsPre2021() {
  const patentList = document.getElementById("patentPre2021List");
  const endIndex = Math.min(
    currentIndexPre2021 + itemsPerPagePre2021,
    patentsPre2021.length
  );

  for (let i = currentIndexPre2021; i < endIndex; i++) {
    patentList.innerHTML += createPatentItemPre2021(patentsPre2021[i], i);
  }

  currentIndexPre2021 = endIndex;

  if (currentIndexPre2021 >= patentsPre2021.length) {
    document.getElementById("loadMoreBtnPre2021").classList.add("hidden");
  }
}

document
  .getElementById("loadMoreBtnPre2021")
  .addEventListener("click", loadPatentsPre2021);

loadPatentsPre2021(); // Initial load
