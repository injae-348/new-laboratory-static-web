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
