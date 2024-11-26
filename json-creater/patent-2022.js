const patents2022 = [];

let currentIndex2022 = 0;
const itemsPerPage2022 = 10;

function createPatentItem2022(patent, index) {
  const displayNumber = patents2022.length - index;
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
                  <div class="patent-year-tag">2022</div>
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

function loadPatents2022() {
  const patentList = document.getElementById("patent2022List");
  const endIndex = Math.min(
    currentIndex2022 + itemsPerPage2022,
    patents2022.length
  );

  for (let i = currentIndex2022; i < endIndex; i++) {
    patentList.innerHTML += createPatentItem2022(patents2022[i], i);
  }

  currentIndex2022 = endIndex;

  if (currentIndex2022 >= patents2022.length) {
    document.getElementById("loadMoreBtn2022").classList.add("hidden");
  }
}

document
  .getElementById("loadMoreBtn2022")
  .addEventListener("click", loadPatents2022);

loadPatents2022(); // Initial load
