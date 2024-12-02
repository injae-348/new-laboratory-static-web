const alumni = [
  {
    name: "Usman Ali",
    degree: "Master's Degree",
    company: "-",
    image_path: "./img/member/alumni/우스만.jpg",
  },
  {
    name: "정광무",
    degree: "Master's Degree",
    company: "-",
    image_path: "./img/member/alumni/정광무.png",
  },
  {
    name: "신혜주",
    degree: "Master's Degree",
    company: "한국전자통신연구원",
    image_path: "./img/member/alumni/신혜주.jpg",
  },
  {
    name: "김영광",
    degree: "Master's Degree",
    company: "한국전자기술연구원",
    image_path: "./img/member/alumni/김영광.jpg",
  },
  {
    name: "나누리",
    degree: "Undergraduate",
    company: "한국전력공사",
    image_path: "./img/member/alumni/나누리.jpg",
  },
  {
    name: "양진승",
    degree: "Undergraduate",
    company: "(주)네이버",
    image_path: "./img/member/alumni/양진승.jpg",
  },
  {
    name: "문용필",
    degree: "Undergraduate",
    company: "SK텔레콤",
    image_path: "./img/member/alumni/문용필.png",
  },
  {
    name: "박상현",
    degree: "Master's Degree",
    company: "-",
    image_path: "./img/member/alumni/박상현.png",
  },
  {
    name: "Ha Tran-Thi-Thu",
    degree: "Master's Degree",
    company: "-",
    image_path: "./img/member/alumni/Ha Tran-Thi-Thu.png",
  },
  {
    name: "Linh Van Ma",
    degree: "Master's Degree",
    company: "광주과학기술원",
    image_path: "./img/member/alumni/Linh Van Ma.jpg",
  },
  {
    name: "최근창",
    degree: "Undergraduate",
    company: "SK C&C",
    image_path: "./img/member/alumni/최근창.jpg",
  },
  {
    name: "조영빈",
    degree: "Undergraduate",
    company: "한전KDN",
    image_path: "./img/member/alumni/조영빈.jpg",
  },
  {
    name: "김민혜",
    degree: "Undergraduate",
    company: "-",
    image_path: "./img/member/alumni/김민혜.jpg",
  },
  {
    name: "박용범",
    degree: "Undergraduate",
    company: "(주)동네티콘",
    image_path: "./img/member/alumni/박용범.jpg",
  },
  {
    name: "정소진",
    degree: "Undergraduate",
    company: "-",
    image_path: "./img/member/alumni/정소진.jpg",
  },
  {
    name: "이동수",
    degree: "Master's Degree",
    company: "-",
    image_path: "./img/member/alumni/이동수.jpg",
  },
  {
    name: "Akm Ashiquzzaman",
    degree: "Master's Degree",
    company: "광주과학기술원",
    image_path: "./img/member/alumni/Akm Ashiquzzaman.jpg",
  },
];

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
                            <img src="${member.image_path}" alt="${
      member.name
    }">
                        </div>
                        <div class="alumni-content">
                            <h2 class="alumni-name">${member.name}</h2>
                            <div class="alumni-info">
                                <p class="alumni-label">Degree</p>
                                <p class="alumni-text">${member.degree}</p>
                            </div>
                            <div class="alumni-info">
                                <p class="alumni-label">Company</p>
                                <p class="alumni-text">${member.company}</p>
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
