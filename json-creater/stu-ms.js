const ms = [
  {
    name: "이중훈",
    major: "지능전자컴퓨터공학과",
    research_area:
      "Knowledge graph Completion, Graph Neural Network, Graph Embedding",
    image: "./img/member/이중훈.jpg",
  },
  {
    name: "김도연",
    major: "지능정보융합학과",
    research_area: "AI, Computer Vision, Meta Learning",
    image: "./img/member/김도연.jpg",
  },
  {
    name: "노주현",
    major: "지능전자컴퓨터공학과",
    research_area: "AI, Time Series Forecasting, Time Series Anomaly Detection",
    image: "./img/member/노주현.jpg",
  },
  {
    name: "송재호",
    major: "지능전자컴퓨터공학과",
    research_area: "AI, Computer Vision, Object Detection",
    image: "./img/member/송재호.jpg",
  },
  {
    name: "Muhammad Sulaiman Rashid",
    major: "지능전자컴퓨터공학과",
    research_area: "Network Optimization, Resource Allocation",
    image: "./img/member/라시드.jpg",
  },
];

const msStyles = `
.ms-section {
    padding: 40px 0;
}

.ms-title {
    margin-bottom: 40px;
    text-align: center;
}

.ms-item {
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
}

.ms-container {
    display: flex;
    height: 100%;
}

.ms-container.reverse {
    flex-direction: row-reverse;
}

.ms-image {
    width: 280px;
    height: 330px;
    position: relative;
    overflow: hidden;
}

.ms-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ms-content {
    width: 60%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.ms-container.reverse .ms-content {
    text-align: right;
    align-items: flex-end;
}

.ms-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--dark);
}

.ms-info {
    margin-bottom: 10px;
}

.ms-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary);
}

.ms-text {
    color: var(--dark);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .ms-container, 
    .ms-container.reverse {
        flex-direction: column;
        height: auto;
    }
    
    .ms-image,
    .ms-content {
        width: 100%;
    }
    
    .ms-item {
        height: auto;
    }
    
    .ms-content,
    .ms-container.reverse .ms-content {
        text-align: left;
        align-items: flex-start;
    }
}
`;

function renderMSStudent() {
  // 스타일 태그 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = msStyles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("msTeam");

  let html = `
        <div class="ms-section">
            <div class="container">
                <div class="ms-title">
                    <h1>M.S Student</h1>
                </div>
                <div class="row">
    `;

  ms.forEach((member, index) => {
    html += `
            <div class="col-6">
                <div class="ms-item">
                    <div class="ms-container ${
                      index % 2 !== 0 ? "reverse" : ""
                    }">
                        <div class="ms-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="ms-content">
                            <h2 class="ms-name">${member.name}</h2>
                            <div class="ms-info">
                                <p class="ms-label">전공</p>
                                <p class="ms-text">${member.major}</p>
                            </div>
                            <div class="ms-info">
                                <p class="ms-label">연구분야</p>
                                <p class="ms-text">${member.research_area}</p>
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

renderMSStudent();
