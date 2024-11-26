const projects = [
  {
    id: 21,
    title: "심뇌혈관질환을 위한 초광역 연합 의료 AI 기술 개발",
    duration: "2024-07-01 ~ 2031-12-31",
    Agency: "과학기술정보통신부",
    period: "ongoing",
    image_path: "./img/project/c654e2d7449042faa0eeaa6ef6367732.jpg",
  },
  {
    id: 12,
    title: "디지털 트윈 기반 네트워크 장애예방 및 운영관리 자동화 기술 개발",
    duration: "2024-04-01 ~ 2028-12-31",
    Agency: "한국전자통신연구원(ETRI)",
    period: "ongoing",
    image_path: "./img/project/04f6cdbe08cf4ec8b5a10dfe6fc4d4a5.jpg",
  },
  {
    id: 18,
    title: "인공지능 기반 518민주화운동 시청각 자료 복원 및 고도화 사업",
    duration: "2022-12-09 ~ 2023-05-27",
    Agency: "문화체육관광부",
    period: "past",
    image_path: "./img/project/7e9604f43b1046dbb320fed9d3e90190.jpg",
  },
  {
    id: 13,
    title:
      "지역지능화혁신인재양성 - 클러스터 네트워크 기반 미래형 미디어 제공을 위한 지능형 메타미디어 기술",
    duration: "2022-07-01 ~ 2029-12-31",
    Agency: "정보통신기획평가원(IITP)",
    period: "ongoing",
    image_path: "./img/project/4a98591736414f72bacbd04659bbbcb6.jpg",
  },
  {
    id: 16,
    title:
      "메타버스 공연에 특화된 상호작용 시나리오 발굴 및 사용성 검증을 위한 프로토타입 개발",
    duration: "2022-07-01 ~ 2023-11-30",
    Agency: "한국전자통신연구원(ETRI)",
    period: "past",
    image_path: "./img/project/39dbc5db563c43a3a95cad3af8083490.jpg",
  },
  {
    id: 14,
    title: "다시점 자유도를 제공하는 OTT 플레이어 지능화 기술 개발",
    duration: "2022-04-01 ~ 2025-12-31",
    Agency: "한국전자통신연구원(ETRI)",
    period: "ongoing",
    image_path: "./img/project/a5a9233a0e904a96a97de77d99fd0431.jpg",
  },
  {
    id: 9,
    title: "인공지능 혁신 허브 연구 개발",
    duration: "2021-07-01 ~ 2025-12-31",
    Agency: "정보통신기획평가원, 고려대학교",
    period: "ongoing",
    image_path: "./img/project/e3373d9149f1473a849bb7a94eecdaea.jpg",
  },
  {
    id: 15,
    title:
      "지능형 인터 엣지 클라우드 가상화 플랫폼 기반 동적 뉴미디어 적응형 스트리밍 전송 품질 보장 연구",
    duration: "2021-06-01 ~ 2024-05-31",
    Agency: "한국연구재단(NRF)",
    period: "past",
    image_path: "./img/project/badbf0b434454a93b97a2db187d4b777.jpg",
  },
  {
    id: 19,
    title: "전력 데이터 기반 딥러닝 모델 최적설계 방안 연구",
    duration: "2021-03-12 ~ 2022-12-04",
    Agency: "한국전력공사",
    period: "past",
    image_path: "./img/project/caf5221c185c4ac3b5a17b4e839d151f.jpg",
  },
  {
    id: 17,
    title: "초연결 공통 네트워킹 서비스 연구인프라 구축",
    duration: "2019-04-01 ~ 2023-12-31",
    Agency: "한국전자통신연구원(ETRI)",
    period: "past",
    image_path: "./img/project/c9195f8ded8b437ba30f53cb3cf2f9b5.jpg",
  },
  {
    id: 20,
    title: "도시 재난재해 대응 ICT 융합 시스템 연구",
    duration: "2017-01-01 ~ 2021-12-31",
    Agency: "과학기술정보통신부",
    period: "past",
    image_path: "./img/project/8ab8ff26948144459d144cdc90b9b8ee.jpg",
  },
  {
    id: 22,
    title:
      "4K UHD급 이상 고품질 미디어 서비스 제공을 위한 지능형 모바일 엣지 컴퓨팅 기반 S/W 플랫폼 기술 연구",
    duration: "2017-01-01 ~ 2020-05-31",
    Agency: "한국연구재단(NRF)",
    period: "past",
    image_path: "./img/project/4c6816c4c3ca4311969913452fe6029f.png",
  },
];
// 프로젝트를 화면에 표시하는 함수
function loadProjects() {
  // ongoing과 past 프로젝트 컨테이너 요소 가져오기
  const ongoingContainer = document.getElementById(
    "ongoing-projects-container"
  );
  const pastContainer = document.getElementById("past-projects-container");

  if (!ongoingContainer || !pastContainer) {
    console.error("Container elements not found");
    return;
  }

  // 컨테이너 초기화
  ongoingContainer.innerHTML = "";
  pastContainer.innerHTML = "";

  // 프로젝트 분류 및 표시
  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);

    if (project.period === "ongoing") {
      ongoingContainer.appendChild(projectCard);
    } else {
      pastContainer.appendChild(projectCard);
    }
  });

  // DOM이 완전히 업데이트된 후에 이벤트 리스너 추가
  setTimeout(() => {
    addFlipListeners();
  }, 0);
}

// 프로젝트 카드 HTML 생성 함수
function createProjectCard(project, index) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6 wow fadeInUp";
  col.setAttribute("data-wow-delay", `${0.1 * (index % 3)}s`);

  col.innerHTML = `
        <div class="card-container">
            <div class="card-flip">
                <!-- Front Side -->
                <div class="card-front">
                    <div class="service-item bg-light rounded h-100 p-5">
                        <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                            style="width: 65px; height: 65px;">
                            <i class="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h6 class="mb-3">${project.title}</h6>
                        <p class="mb-2"><strong>Period:</strong> ${project.duration}</p>
                        <p class="mb-2"><strong>Funding:</strong> ${project.Agency}</p>
                    </div>
                </div>
                <!-- Back Side -->
                <div class="card-back">
                    <div class="service-item bg-dark text-white rounded h-100 p-3">
                        <img src="${project.image_path}" alt="project-img" class="img-fluid rounded"
                            style="height: 100%; width: 100%; object-fit:cover;">
                    </div>
                </div>
            </div>
        </div>
    `;

  return col;
}

// 카드 뒤집기 이벤트 리스너 추가 함수
function addFlipListeners() {
  const cards = document.querySelectorAll(".card-flip");

  cards.forEach((card) => {
    card.addEventListener("click", function (e) {
      this.classList.toggle("flipped");
    });
  });
}

// 페이지 로드 시 프로젝트 로드
document.addEventListener("DOMContentLoaded", loadProjects);
