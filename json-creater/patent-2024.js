const patents2024 = [
  {
    id: 38,
    date: "2024-05-28",
    title:
      "화재상황에 대한 화재기록정보를 분석하여 화재상황의 위험도를 판단하는 시스템 및 그 방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 장진호",
    read_more: "#",
    category: "Domestic Patents",
  },
];

let currentIndex2024 = 0;
const itemsPerPage2024 = 10;

function createPatentItem2024(patent, index) {
  const displayNumber = patents2024.length - index;

  return `
          <div class="patent-item">
              <div class="patent-header">
                  <div class="patent-header-left">
                      <div class="patent-number">${displayNumber}</div>
                      <div class="patent-date">${patent.date}</div>
                  </div>
                  <div class="patent-year-tag">2024</div>
              </div>
              <a href="${patent.read_more}" class="patent-title-link">${patent.title}</a>
              <div class="patent-authors">${patent.author}</div>
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
