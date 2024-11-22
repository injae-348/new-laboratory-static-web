const conferences = [
  {
    id: 54,
    date: "2024-02-12",
    title:
      "A Preliminary Analysis of a Nuclear Power Plant Startup for a Physics-based Model of a Digital Twin",
    author: "Awwal Arigi, Ibrahim Aliyu, Jinsul Kim* | IHSI 2024",
    read_more:
      "https://hi-iot.github.io/assets/docs/2017.03.21_A%20Fuzzy-based%20Method%20for%20Reducing%20Mobile%20Video-.pdf",
    category: "International Conferences",
  },
  {
    id: 87,
    date: "2024-03-28",
    title:
      "Improving the Real-Data Driven Network Evaluation Model for Digital Twin Networks",
    author:
      "Hyeju Shin, Ibrahim Aliyu, Abubakar Isah, Jinsul Kim* | IEEE ICC 2024 Workshop",
    read_more: "https://doi.org/10.48550/arXiv.2405.08473",
    category: "International Conferences",
  },
  {
    id: 94,
    date: "2024-03-20",
    title:
      "Brands Logo Recognition with Semi-Supervised Learning Using a Robust YOLOv8 Detection Model",
    author: "Ali Usman, Seungmin Oh, Junghoon Lee, Jinsul Kim* | ICAIIC 2024",
    read_more: "https://doi.org/10.1109/ICAIIC60209.2024.10463217",
    category: "International Conferences",
  },
  {
    id: 142,
    date: "2024-02-19",
    title:
      "Brands Logo Recognition with Semi-Supervised Learning using a Robust YOLOv8 Detection Model",
    author: "Usman Ali, 오승민, 이중훈, 김진술* | IEEE ICAIIC 2024",
    read_more: "",
    category: "International Conferences",
  },
  {
    id: 143,
    date: "2024-02-21",
    title:
      "Graph Neural Network for Digital Twin Network: A Conceptual Framework",
    author:
      "Abubakar Isah, Ibrahim Aliyu, Rashid Muhammad Sulaiman, 김진술* | IEEE ICAIIC 2024",
    read_more: "",
    category: "International Conferences",
  },
  {
    id: 144,
    date: "2024-02-22",
    title:
      "Designing Data Pipeline for Network Data Management in Digital Twin Network Environment",
    author: "신혜주, 오승민, 이지훈, 정광무, 김진술* | IEEE ICAIIC 2024",
    read_more: "",
    category: "International Conferences",
  },
  {
    id: 145,
    date: "2024-01-16",
    title:
      "A Deep Learning Model for the Fine-grained Prediction Multivariate Nonresidential Power Consumption",
    author: "오승민, 이지훈, 김진술* | 2024 12th ICAEIC",
    read_more: "",
    category: "International Conferences",
  },
];

let currentIndex = 0;
const itemsPerPage = 10;

function createConferenceItem(conference, index) {
  const [authors, publisher] = conference.author
    .split("|")
    .map((item) => item.trim());
  const displayNumber = conferences.length - index;

  // read_more가 존재하고 공백이 아닐 때만 활성화
  const hasValidLink =
    conference.read_more && conference.read_more.trim() !== "";

  return `
        <div class="conference-item">
            <div class="conference-item-header">
                <div class="conference-meta-left">
                    <div class="conference-number" style="font-size:1.4rem">${displayNumber}</div>
                    <div class="conference-date" style="font-size:1.5rem">${
                      conference.date
                    }</div>
                </div>
                <div class="conference-category">${conference.category}</div>
            </div>
            <h3 class="conference-item-title">
                <span class="conference-title-text">${conference.title}</span>
            </h3>
            <div class="conference-item-content">
                <div class="content-left">
                    <div class="conference-item-authors">${authors}</div>
                    <div class="conference-item-publisher">${publisher}</div>
                </div>
                <a href="${hasValidLink ? conference.read_more : "#"}" 
                   class="conference-view-more ${
                     !hasValidLink ? "disabled" : ""
                   }"
                   ${!hasValidLink ? 'onclick="return false;"' : ""} 
                   target="_blank">
                   View More
                </a>
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
