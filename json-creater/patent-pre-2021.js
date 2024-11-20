const patentsPre2021 = [
  {
    id: 38,
    date: "Pre2020-05-28",
    title:
      "화재상황에 대한 화재기록정보를 분석하여 화재상황의 위험도를 판단하는 시스템 및 그 방법",
    author: "김진술, 이동수, 아시크자만에케이엠, 오승민, 장진호",
    read_more: "#",
    category: "Domestic Patents",
  },
];

let currentIndexPre2021 = 0;
const itemsPerPagePre2021 = 10;

function createPatentItemPre2021(patent, index) {
  const displayNumber = patentsPre2021.length - index;

  return `
            <div class="patent-item">
                <div class="patent-header">
                    <div class="patent-header-left">
                        <div class="patent-number">${displayNumber}</div>
                        <div class="patent-date">${patent.date}</div>
                    </div>
                    <div class="patent-year-tag">Pre 2021</div>
                </div>
                <a href="${patent.read_more}" class="patent-title-link">${patent.title}</a>
                <div class="patent-authors">${patent.author}</div>
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
