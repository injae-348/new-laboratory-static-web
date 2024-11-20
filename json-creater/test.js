const journals = [
  {
    id: 5,
    date: "2023-08-22",
    title:
      "XDN Based Network Framework Design to Communicate Interaction in Virtual Concert with Metaverse Platform",
    author:
      "Sangwon Oh, Kwangmoo Chung, Ibrahim Aliyu, Minsoo Hahn, Il-Kwon Jeong, Cho-Rong Yu, Tai-Won Um, Jinsul Kim* | Applied Sciences",
    read_more: "https://www.mdpi.com/2076-3417/13/17/9509",
    category: "International Journals",
  },
  {
    id: 6,
    date: "2023-08-21",
    title:
      "Deep Learning Model Performance and Optimal Model Study for Hourly Fine Power Consumption Prediction",
    author:
      "Seungmin Oh, Sangwon Oh, Hyeju Shin, Tai-won Um*, Jinsul Kim* | Electronics",
    read_more: "https://doi.org/10.3390/electronics12163528",
    category: "International Journals",
  },
  {
    id: 7,
    date: "2023-06-27",
    title:
      "Fine-Grained Image Recognition by Means of Integrating Transformer Encoder Blocks in a Robust Single-Stage Object Detector",
    author:
      "Usman Ali, Seungmin Oh, Tai-Won Um, Minsoo Hahn, Jinsul Kim* | Applied Sciences",
    read_more: "https://doi.org/10.3390/app13137589",
    category: "International Journals",
  },
  {
    id: 12,
    date: "2022-11-03",
    title:
      "Genetic Algorithm for the Optimization of a Building Power Consumption Prediction Model",
    author:
      "Seungmin Oh, Junchul Yoon, Yoona Choi, Young-Ae Jung, Jinsul Kim* | Electronics",
    read_more: "https://doi.org/10.3390/electronics11213591",
    category: "International Journals",
  },
  {
    id: 13,
    date: "2022-10-14",
    title:
      "Methods of Pre-Clustering and Generating Time Series Images for Detecting Anomalies in Electric Power Usage Data",
    author:
      "Sangwon Oh, Seungmin Oh, Tai-Won Um, Jinsul Kim*, Young-Ae Jung | Electronics",
    read_more: "https://doi.org/10.3390/electronics11203315",
    category: "International Journals",
  },
];

let currentIndex = 0;
const itemsPerPage = 10;

function createJournalItem(journal, index) {
  const [authors, publisher] = journal.author
    .split("|")
    .map((item) => item.trim());
  const displayNumber = journals.length - index; // 총 개수에서 현재 인덱스를 뺀 값

  return `
        <div class="journal-item">
            <div class="journal-item-header">
                <div class="journal-number">${displayNumber}</div>
                <div class="journal-meta">
                    <div class="journal-date">${journal.date}</div>
                    <div class="journal-category">${journal.category}</div>
                </div>
            </div>
            <h3 class="journal-item-title">
                <a href="${journal.read_more}" target="_blank" class="journal-title-link">${journal.title}</a>
            </h3>
            <div class="journal-item-content">
                <div class="journal-item-authors">${authors}</div>
                <div class="journal-item-publisher">${publisher}</div>
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
