const patents2023 = [
  {
    id: 98,
    date: "2023-12-13",
    title: "시계열 기반 전력 데이터의 이상 탐지 방법 및 이를 위한 장치",
    author: "김진술 오상원",
    read_more: "",
    category: "Domestic Patents",
  },
  {
    id: 47,
    date: "2023-08-21",
    title:
      "블록체인 기반 전력소비예측 인공지능 모델 거래 시스템, 방법 및 프로그램",
    author: "김진술, 신혜주",
    read_more: "",
    category: "Domestic Patents",
  },
];

let currentIndex2023 = 0;
const itemsPerPage2023 = 10;

function createPatentItem2023(patent, index) {
  const displayNumber = patents2023.length - index;
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
                  <div class="patent-year-tag">2023</div>
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

function loadPatents2023() {
  const patentList = document.getElementById("patent2023List");
  const endIndex = Math.min(
    currentIndex2023 + itemsPerPage2023,
    patents2023.length
  );

  for (let i = currentIndex2023; i < endIndex; i++) {
    patentList.innerHTML += createPatentItem2023(patents2023[i], i);
  }

  currentIndex2023 = endIndex;

  if (currentIndex2023 >= patents2023.length) {
    document.getElementById("loadMoreBtn2023").classList.add("hidden");
  }
}

document
  .getElementById("loadMoreBtn2023")
  .addEventListener("click", loadPatents2023);

loadPatents2023(); // Initial load
