// CSS 파일
const alumniStyles = `
.alumni-section {
    padding: 40px 0;
}

.alumni-title {
    margin-bottom: 40px;
    text-align: center;
}

.alumni-item {
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
}

.alumni-container {
    display: flex;
    height: 100%;
}

.alumni-container.reverse {
    flex-direction: row-reverse;
}

.alumni-image {
    width: 280px;
    height: 330px;
    position: relative;
    overflow: hidden;
}

.alumni-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.alumni-content {
    width: 60%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.alumni-container.reverse .alumni-content {
    text-align: right;
    align-items: flex-end;
}

.alumni-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--dark);
}

.alumni-info {
    margin-bottom: 10px;
}

.alumni-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary);
}

.alumni-text {
    color: var(--dark);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .alumni-container, 
    .alumni-container.reverse {
        flex-direction: column;
        height: auto;
    }
    
    .alumni-image,
    .alumni-content {
        width: 100%;
    }
    
    .alumni-item {
        height: auto;
    }
    
    .alumni-content,
    .alumni-container.reverse .alumni-content {
        text-align: left;
        align-items: flex-start;
    }
}
`;

// JavaScript 코드
const alumni = [
  {
    name: "test member",
    major: "학과 받아오기",
    research_area: "연구 분야 받아오기",
    image: "./img/member/default picture.png",
  },
];

function renderAlumni() {
  // 스타일 태그 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = alumniStyles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("alumni");

  let html = `
        <div class="alumni-section">
            <div class="container">
                <div class="alumni-title">
                    <h1>Alumni</h1>
                </div>
                <div class="row">
    `;

  alumni.forEach((member, index) => {
    html += `
            <div class="col-6">
                <div class="alumni-item">
                    <div class="alumni-container ${
                      index % 2 !== 0 ? "reverse" : ""
                    }">
                        <div class="alumni-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="alumni-content">
                            <h2 class="alumni-name">${member.name}</h2>
                            <div class="alumni-info">
                                <p class="alumni-label">전공</p>
                                <p class="alumni-text">${member.major}</p>
                            </div>
                            <div class="alumni-info">
                                <p class="alumni-label">연구분야</p>
                                <p class="alumni-text">${
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

renderAlumni();
