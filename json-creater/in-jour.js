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
  {
    id: 16,
    date: "2022-01-24",
    title: "Improved Q Network Auto-Scaling in Microservice Architecture",
    author:
      "Yeonggwang Kim, Jaehyung Park, Junchurl Yoon, Jinsul Kim* | Applied Sciences",
    read_more: "https://doi.org/10.3390/app12031206",
    category: "International Journals",
  },
  {
    id: 17,
    date: "2021-06-01",
    title:
      "A Modified Quad Q Network Algorithm for Predicting Resource Management",
    author:
      "Yeonggwang Kim, Jaehyung Park, Jinyoung Kim, Junchurl Yoon, Sangjoon Lee, Jinsul Kim* | Applied Sceiences",
    read_more: "https://doi.org/10.3390/app11115154",
    category: "International Journals",
  },
  {
    id: 18,
    date: "2021-04-14",
    title:
      "Study on Human Activity Recognition Using Semi-Supervised Active Transfer Learning",
    author:
      "Seungmin Oh, Akm Ashiquzzamanm, Dongsu Lee, Yeonggwang Kim, Jinsul Kim* | Sensors",
    read_more: "https://doi.org/10.3390/s21082760",
    category: "International Journals",
  },
  {
    id: 19,
    date: "2022-10-19",
    title:
      "Statistical Detection of Adversarial Examples in Blockchain-Based Federated Forest In-Vehicle Network Intrusion Detection Systems",
    author:
      "Ibrahim Aliyu, Selinde Van Engelenburg, Muhammed Bashir Muazu, Jinsul Kim*,  Chang Gyoon Lim | IEEE Access",
    read_more: "https://ieeexplore.ieee.org/abstract/document/9912427",
    category: "International Journals",
  },
  {
    id: 20,
    date: "2023-05-01",
    title:
      "Deep Learning for Multivariate Prediction of Building Energy Performance of Residential Buildings.",
    author:
      "Ibrahim Aliyu, Tai-Won Um, Sang-Joon Lee, Chang Gyoon Lim, Jinsul Kim* | Computers, Materials & Continua ",
    read_more:
      "https://eds.s.ebscohost.com/abstract?site=eds&scope=site&jrnl=15462218&AN=163618549&h=V0gXopECb2PEPhJ%2faZTKndyJrTsuz153XvgW4xorHHHqCzxoPB3orvv5th4wryTuKoPiycmy63zyJS8Jd7AV2A%3d%3d&crl=c&resultLocal=ErrCrlNoResults&resultNs=Ehost&crlhashurl=login.aspx%3fdirect%3dtrue%26profile%3dehost%26scope%3dsite%26authtype%3dcrawler%26jrnl%3d15462218%26AN%3d163618549",
    category: "International Journals",
  },
  {
    id: 22,
    date: "2023-05-15",
    title:
      " Manta Ray Foraging Optimization Algorithm: Modifications and Applications",
    author:
      "Mohammed Abdullahi, Ibrahim Hayatu Hassan, Muhammad Dalhat Abdullahi, Ibrahim Aliyu, Jinsul Kim* | IEEE Access",
    read_more: "https://ieeexplore.ieee.org/abstract/document/10124217",
    category: "International Journals",
  },
  {
    id: 23,
    date: "2023-05-12",
    title:
      " A Novel Approach for Brain Tumor Classification Using an Ensemble of Deep and Hand-Crafted Features",
    author:
      "Hareem Kibriya, Rashid Amin, Jinsul Kim*, Marriam Nawaz, Rahma Gantassi | Sensors",
    read_more: "https://www.mdpi.com/1424-8220/23/10/4693",
    category: "International Journals",
  },
  {
    id: 24,
    date: "2022-10-01",
    title:
      " Stride-TCN for Energy Consumption Forecasting and Its Optimization",
    author:
      "Le Hoang Ahn, Gwang Hyun Yu, Dang Thanh Vu, Jinsul Kim*, Jung Il Lee, Jun Churl Yoon, Jin Young Kim | Applied Sciences",
    read_more: "https://www.mdpi.com/2076-3417/12/19/9422",
    category: "International Journals",
  },
  {
    id: 26,
    date: "2022-08-01",
    title:
      "Autoencoder based Consensus Mechanism for Blockchain-enabled Industrial Internet of Things",
    author:
      "Murshedul Arifeen, Tapotosh Ghosh, Rakibul Islam, Akm Ashiquzzaman, Juncheol Yoon, Jinsul Kim* | Internet of Things",
    read_more:
      "https://www.sciencedirect.com/science/article/abs/pii/S254266052200066X",
    category: "International Journals",
  },
  {
    id: 27,
    date: "2022-06-14",
    title:
      "Trust Management for Artificial Intelligence: A Standardization Perspective",
    author:
      "Tai-Won Um, Jinsul Kim*, Sunhwan Lim, Gyu Myoung Lee | Applied Sciences ",
    read_more: "https://www.mdpi.com/2076-3417/12/12/6022",
    category: "International Journals",
  },
  {
    id: 29,
    date: "2021-11-30",
    title:
      "Optimal service placement using Pseudo service chaining mechanism for cloud-based multimedia services",
    author:
      "Taeheum Na, Pyungkoo Park, Hoyong Ryu, TaeYeon Kim, Jinsul Kim*, Jaehyung Park*",
    read_more: "https://link.springer.com/article/10.1007/s11042-020-09083-2",
    category: "International Journals",
  },
  {
    id: 88,
    date: "2023-09-14",
    title:
      "Build your own closed loop: Graph-based proof of concept in closed loop for autonomous networks",
    author:
      "Ibrahim Aliyu, Jinsul Kim* et al | ITU Journal on Future and Evolving Technologies",
    read_more: "https://doi.org/10.52953/OPDK5666",
    category: "International Journals",
  },
  {
    id: 89,
    date: "2023-09-20",
    title:
      "Network Traffic Prediction Model in a Data-Driven Digital Twin Network Architecture",
    author:
      "Hyeju Shin, Seungmin Oh, Abubakar Isah, Ibrahim Aliyu, Jaehyung Park, Jinsul Kim* | Electronics ",
    read_more: "https://doi.org/10.3390/electronics12183957",
    category: "International Journals",
  },
  {
    id: 90,
    date: "2023-10-09",
    title:
      "Digital Twins Temporal Dependencies-Based on Time Series Using Multivariate Long Short-Term Memory",
    author:
      "Abubakar Isah, Hyeju Shin, Seungmin Oh, Sangwon Oh, Ibrahim Aliyu, Tai-won Um, Jinsul Kim* | Electronics",
    read_more: "https://doi.org/10.3390/electronics12194187",
    category: "International Journals",
  },
  {
    id: 91,
    date: "2023-10-16",
    title:
      "Lightweight Three-Dimensional Pose and Joint Center Estimation Model for Rehabilitation Therapy",
    author:
      "Yeonggwang Kim, Giwon Ku, Culseung Yang, Jeonggi Lee, Jinsul Kim* | Electronics ",
    read_more: "https://doi.org/10.3390/electronics12204273",
    category: "International Journals",
  },
  {
    id: 92,
    date: "2023-12-01",
    title:
      "Optimizing Microarray Cancer Gene Selection Using Swarm Intelligence: Recent Developments and an Exploratory Study",
    author: "Ibrahim Aliyu, Jinsul Kim* et al | Egyptian Informatics Journal ",
    read_more: "https://doi.org/10.1016/j.eij.2023.100416",
    category: "International Journals",
  },
  {
    id: 93,
    date: "2024-01-25",
    title:
      "Dynamic Partial Computation Offloading for the Metaverse in In-Network Computing",
    author: "Ibrahim Aliyu, Jinsul Kim* et al | Egyptian Informatics Journal ",
    read_more: "https://doi.org/10.1016/j.eij.2023.100416",
    category: "International Journals",
  },
  {
    id: 95,
    date: "2020-12-02",
    title:
      "Deep Learning-Guided Production Quality Estimation for Virtual Environment-Based Applications",
    author:
      "Akm Ashiquzzaman, Hyunmin Lee*, Tai-Won Um, Kwangki Kim, Hye-Young Kim, Jinsul Kim* | Tehnicki Vjesnik-Technical Gazette",
    read_more: "https://doi.org/10.17559/TV-20200906191853",
    category: "International Journals",
  },
];

let currentIndex = 0;
const itemsPerPage = 10;

function createJournalItem(journal, index) {
  const [authors, publisher] = journal.author
    .split("|")
    .map((item) => item.trim());
  const displayNumber = journals.length - index;

  // read_more가 존재하고 공백이 아닐 때만 활성화
  const hasValidLink = journal.read_more && journal.read_more.trim() !== "";

  return `
        <div class="journal-item">
            <div class="journal-item-header">
                <div class="journal-meta-left">
                    <!--<div class="journal-number" style="font-size:1.4rem">${displayNumber}</div>-->
                    <div class="journal-date" style="font-size:1.5rem">${
                      journal.date
                    }</div>
                </div>
                <div class="journal-category" style="background:#F2E2FF;color:#9C27B0">${
                  journal.category
                }</div>
            </div>
            <h3 class="journal-item-title">
                <span class="journal-title-text">${journal.title}</span>
            </h3>
            <div class="journal-item-content">
                <div class="content-left">
                    <div class="journal-item-authors">${authors}</div>
                    <div class="journal-item-publisher">${publisher}</div>
                </div>
                <a href="${hasValidLink ? journal.read_more : "#"}" 
                   class="journal-view-more ${!hasValidLink ? "disabled" : ""}"
                   ${!hasValidLink ? 'onclick="return false;"' : ""} 
                   target="_blank">
                   View More
                </a>
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
