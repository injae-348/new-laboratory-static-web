const patents2023 = [
  {
    id: 38,
    date: "2023-05-28",
    title:
      "화재상황에 대한 화재기록정보를 분석하여 화재상황의 위험도를 판단하는 시스템 및 그 방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 장진호",
    read_more: "#",
    category: "Domestic Patents",
  },
];

let currentIndex2023 = 0;
const itemsPerPage2023 = 10;

function createPatentItem2023(patent, index) {
  const displayNumber = patents2023.length - index;

  return `
            <div class="patent-item">
                <div class="patent-header">
                    <div class="patent-header-left">
                        <div class="patent-number">${displayNumber}</div>
                        <div class="patent-date">${patent.date}</div>
                    </div>
                    <div class="patent-year-tag">2023</div>
                </div>
                <a href="${patent.read_more}" class="patent-title-link">${patent.title}</a>
                <div class="patent-authors">${patent.author}</div>
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