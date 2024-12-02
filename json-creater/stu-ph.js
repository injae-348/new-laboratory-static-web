const phD = [
  {
    name: "오승민",
    major: "지능전자컴퓨터공학과",
    research_area: "AI, Time Series Forecasting, Time Series Anomaly Detection",
    image: "./img/member/오승민.jpg",
  },
  {
    name: "이지훈",
    major: "지능전자컴퓨터공학과",
    research_area: "AI-based Network Management, Graph Neural Network, Explainable AI",
    image: "./img/member/이지훈.png",
  },
  {
    name: "오상원",
    major: "지능전자컴퓨터공학과",
    research_area: "Generation Model, Synthetic Data Generation, Time-Series Analysis",
    image: "./img/member/오상원1.jpg",
  },
  {
    name: "Abubakar Isah",
    major: "지능전자컴퓨터공학과",
    research_area: "Graph Neural Network, Cost-Sensitive Learning, Imbalance Learning",
    image: "./img/member/이사.jpg",
  },
];

const phdStyles = `
.phd-section {
    padding: 40px 0;
}

.phd-title {
    margin-bottom: 40px;
    text-align: center;
}

.phd-item {
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
}

.phd-container {
    display: flex;
    height: 100%;
}

.phd-container.reverse {
    flex-direction: row-reverse;
}

.phd-image {
    width: 280px;
    height: 330px;
    position: relative;
    overflow: hidden;
}

.phd-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.phd-content {
    width: 60%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.phd-container.reverse .phd-content {
    text-align: right;
    align-items: flex-end;
}

.phd-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--dark);
}

.phd-info {
    margin-bottom: 10px;
}

.phd-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary);
}

.phd-text {
    color: var(--dark);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .phd-container, 
    .phd-container.reverse {
        flex-direction: column;
        height: auto;
    }
    
    .phd-image,
    .phd-content {
        width: 100%;
    }
    
    .phd-item {
        height: auto;
    }
    
    .phd-content,
    .phd-container.reverse .phd-content {
        text-align: left;
        align-items: flex-start;
    }
}
`;

function renderPhDStudent() {
  // 스타일 태그 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = phdStyles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("phDTeam");

  let html = `
        <div class="phd-section">
            <div class="container">
                <div class="phd-title">
                    <h1>Ph.D Student</h1>
                </div>
                <div class="row">
    `;

  phD.forEach((member, index) => {
    html += `
            <div class="col-6">
                <div class="phd-item">
                    <div class="phd-container ${
                      index % 2 !== 0 ? "reverse" : ""
                    }">
                        <div class="phd-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="phd-content">
                            <h2 class="phd-name">${member.name}</h2>
                            <div class="phd-info">
                                <p class="phd-label">전공</p>
                                <p class="phd-text">${member.major}</p>
                            </div>
                            <div class="phd-info">
                                <p class="phd-label">연구분야</p>
                                <p class="phd-text">${member.research_area}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });

  html += `
                </div>
            </div>
        </div>
    `;

  container.innerHTML = html;
}

renderPhDStudent();
