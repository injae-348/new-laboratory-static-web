const postDoctor = [
  {
    name: "Aamir Nadeem",
    major: "지역지능화 G5-AICT 연구센터 전임연구원",
    research_area: "Task Prioritization, Offload Optimization, D2D-Assisted MEC",
    image: "./img/member/나딤.jpg",
  },
  {
    name: "Ibrahim Aliyu",
    major: "지역지능화 G5-AICT 연구센터 전임연구원",
    research_area: "5G Network, In-network Computing, Task Offloading",
    image: "./img/member/알리유.jpg",
  },
];

const styles = `
.postdoc-section {
    padding: 40px 0;
}

.postdoc-title {
    margin-bottom: 40px;
    text-align: center;
}

.postdoc-item {
    margin-bottom: 30px;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    height: 300px;
}

.postdoc-container {
    display: flex;
    height: 100%;
}

.postdoc-container.reverse {
    flex-direction: row-reverse;
}

.postdoc-image {
    width: 280px;
    height: 330px;
    position: relative;
    overflow: hidden;
}

.postdoc-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.postdoc-content {
    width: 60%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.postdoc-container.reverse .postdoc-content {
    text-align: right;
    align-items: flex-end;
}

.postdoc-name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--dark);
}

.postdoc-info {
    margin-bottom: 10px;
}

.postdoc-label {
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--primary);
}

.postdoc-text {
    color: var(--dark);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .postdoc-container, 
    .postdoc-container.reverse {
        flex-direction: column;
        height: auto;
    }
    
    .postdoc-image,
    .postdoc-content {
        width: 100%;
    }
    
    .postdoc-item {
        height: auto;
    }
    
    .postdoc-content,
    .postdoc-container.reverse .postdoc-content {
        text-align: left;
        align-items: flex-start;
    }
}
`;

function renderPostDoctor() {
  // 스타일 태그 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("postDoctor");

  let html = `
        <div class="postdoc-section">
            <div class="container">
                <div class="postdoc-title">
                    <h1>Post Doctor</h1>
                </div>
                <div class="row">
    `;

  postDoctor.forEach((member, index) => {
    html += `
            <div class="col-6">
                <div class="postdoc-item">
                    <div class="postdoc-container ${
                      index % 2 !== 0 ? "reverse" : ""
                    }">
                        <div class="postdoc-image">
                            <img src="${member.image}" alt="${member.name}">
                        </div>
                        <div class="postdoc-content">
                            <h2 class="postdoc-name">${member.name}</h2>
                            <div class="postdoc-info">
                                <p class="postdoc-label">소속</p>
                                <p class="postdoc-text">${member.major}</p>
                            </div>
                            <div class="postdoc-info">
                                <p class="postdoc-label">연구분야</p>
                                <p class="postdoc-text">${
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

renderPostDoctor();
