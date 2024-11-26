// CSS 파일
const undergradStyles = `
.undergrad-section {
    padding: 40px 0;
}

.undergrad-title {
    margin-bottom: 40px;
    text-align: center;
}

.undergrad-item {
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
}

.undergrad-container {
    display: flex;
    height: 100%;
}

.undergrad-container.reverse {
    flex-direction: row-reverse;
}

.undergrad-image {
    width: 280px;
    height: 330px;
    position: relative;
    overflow: hidden;
}

.undergrad-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.undergrad-content {
    width: 60%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.undergrad-container.reverse .undergrad-content {
    text-align: right;
    align-items: flex-end;
}

.undergrad-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--dark);
}

.undergrad-info {
    margin-bottom: 10px;
}

.undergrad-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary);
}

.undergrad-text {
    color: var(--dark);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .undergrad-container, 
    .undergrad-container.reverse {
        flex-direction: column;
        height: auto;
    }
    
    .undergrad-image,
    .undergrad-content {
        width: 100%;
    }
    
    .undergrad-item {
        height: auto;
    }
    
    .undergrad-content,
    .undergrad-container.reverse .undergrad-content {
        text-align: left;
        align-items: flex-start;
    }
}
`;

// JavaScript 코드
const undergraduate = [
  {
    name: "정인재",
    major: "컴퓨터정보통신공학과",
    research_area: "Backend Develop",
    image: "./img/member/정인재.jpg",
  },
];

function renderUndergraduate() {
  // 스타일 태그 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = undergradStyles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("undergraduateTeam");

  let html = `
        <div class="undergrad-section">
            <div class="container">
                <div class="undergrad-title">
                    <h1>Undergraduate</h1>
                </div>
                <div class="row">
    `;

  undergraduate.forEach((member, index) => {
    html += `
            <div class="col-6">
                <div class="undergrad-item">
                    <div class="undergrad-container ${
                      index % 2 !== 0 ? "reverse" : ""
                    }">
                        <div class="undergrad-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="undergrad-content">
                            <h2 class="undergrad-name">${member.name}</h2>
                            <div class="undergrad-info">
                                <p class="undergrad-label">전공</p>
                                <p class="undergrad-text">${member.major}</p>
                            </div>
                            <div class="undergrad-info">
                                <p class="undergrad-label">연구분야</p>
                                <p class="undergrad-text">${
                                  member.research_area
                                }</p>
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

renderUndergraduate();
