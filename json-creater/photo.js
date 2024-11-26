// 데이터
const photos = [
  {
    id: 1,
    url: "./img/photo/ICT2024-1.jpg",
    title: "ICT 2024",
    category: "ICT 2024",
    date: "2024-03-15",
    text: "이번 세미나에서는 최신 연구 트렌드와 결과를 공유했습니다.",
    relatedImages: ["./img/photo/ICT2024-1.jpg", "./img/photo/ICT2024-2.jpg"],
  },
  {
    id: 2,
    url: "./img/about-1.jpg",
    title: "DCS 2024 추계종합학술대회",
    category: "DCS 2024",
    date: "2024-02-20",
    text: "국제 컨퍼런스에서 우리 팀의 연구 성과를 발표했습니다.",
    relatedImages: [
      "./img/carousel-1.jpg",
      "./img/about-2.jpg",
      "./img/carousel-2.jpg",
      "./img/carousel-2.jpg",
    ],
  },
];

const styles = `
.gallery-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.category-carousel {
    position: relative;
    background: #f3f4f6;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.category-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    padding: 0 40px;
}

.category-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 9999px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.category-btn.active {
    background: #2563eb;
    color: white;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.carousel-btn:hover {
    background: #f3f4f6;
}

.carousel-btn.prev {
    left: 8px;
}

.carousel-btn.next {
    right: 8px;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.gallery-item {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
    /* 카드 전체 높이 고정 */
    height: 360px;
    display: flex;
    flex-direction: column;
}

.gallery-item:hover {
    transform: translateY(-4px);
}

.gallery-item-image {
    width: 100%;
    height: 260px; /* 이미지 높이 고정 */
    position: relative;
    overflow: hidden;
}

.gallery-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지하면서 영역 채우기 */
    position: absolute;
    top: 0;
    left: 0;
}

.gallery-item-content {
    padding: 1rem;
    /* 남은 공간 채우기 */
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.gallery-item-title {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    /* 제목이 길 경우 ... 처리 */
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.gallery-item-date {
    font-size: 0.875rem;
    color: #666;
    margin: 0;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.9);
    z-index: 1000;
    padding: 2rem;
}

.modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    border-radius: 8px;
    max-width: 900px;
    width: 100%;
    position: relative;
}

.modal-image-container {
    position: relative;
    width: 100%;
    height: 500px; /* 모달 이미지 높이 고정 */
    background: #f3f4f6;
}

.modal-image {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 이미지 비율 유지하면서 영역에 맞추기 */
}

.modal-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1;
}

.modal-nav-btn:hover {
    background: #f3f4f6;
}

.modal-nav-btn.prev {
    left: 1rem;
}

.modal-nav-btn.next {
    right: 1rem;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index: 1;
}

.modal-info {
    padding: 1.5rem;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 0 0.5rem 0;
}

.modal-date {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
}

.modal-text {
    color: #333;
    line-height: 1.5;
}

.category-container {
    display: flex;
    justify-content: flex-start; /* center에서 flex-start로 변경 */
    gap: 1rem;
    overflow: hidden;
    position: relative;
    padding: 0 40px;
    transition: transform 0.3s ease; /* 부드러운 전환 효과 추가 */
}

.category-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 9999px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    flex-shrink: 0; /* 버튼이 줄어들지 않도록 설정 */
}

.carousel-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    
    .gallery-item {
        height: 320px;
    }

    .gallery-item-image {
        height: 220px;
    }
    
    .modal {
        padding: 1rem;
    }

    .modal-image-container {
        height: 300px;
    }
}

@media (max-width: 480px) {
    .gallery-item {
        height: 300px;
    }

    .gallery-item-image {
        height: 200px;
    }
}

.category-carousel {
    position: relative;
    background: #f3f4f6;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    width: 100%;
}

.category-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    padding: 0 40px;
    width: calc(100% - 80px); /* 좌우 버튼 공간 제외한 너비 */
    max-width: 800px; /* 최대 너비 증가 */
}

.category-btn {
    padding: 0.5rem 1.5rem; /* 좌우 패딩 증가 */
    border: none;
    border-radius: 9999px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    flex: 0 0 auto; /* flex-shrink 대신 flex 속성 사용 */
    min-width: fit-content; /* 내용에 맞게 너비 조정 */
    text-align: center;
    font-size: 0.875rem; /* 기본 폰트 크기 조정 */
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    z-index: 2;
}

/* 반응형 스타일 개선 */
@media (max-width: 1024px) {
    .category-container {
        max-width: 700px;
    }
    
    .category-btn {
        padding: 0.5rem 1.25rem;
    }
}

@media (max-width: 768px) {
    .category-container {
        max-width: 500px;
        gap: 0.75rem;
    }
    
    .category-btn {
        padding: 0.5rem 1rem;
        font-size: 0.8125rem;
    }
}

@media (max-width: 480px) {
    .category-container {
        max-width: 300px;
        gap: 0.5rem;
        padding: 0 35px;
    }
    
    .category-btn {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
    }
    
    .carousel-btn {
        width: 28px;
        height: 28px;
    }
}
`;

// 메인 함수
function initPhotoGallery() {
  // 스타일 추가
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  const container = document.getElementById("photoGallery");
  const categories = ["all", ...new Set(photos.map((photo) => photo.category))];
  let currentCategoryIndex = 0;
  let currentModalPhoto = null;
  let currentImageIndex = 0;

  function createGalleryHTML() {
    return `
        <div class="gallery-section">
            <div class="category-carousel">
                <button class="carousel-btn prev">←</button>
                <div class="category-container">
                    ${categories
                      .map(
                        (category, index) => `
                            <button class="category-btn ${
                              category === "all" ? "active" : ""
                            }"
                                    data-category="${category}">
                                ${
                                  category.charAt(0).toUpperCase() +
                                  category.slice(1)
                                }
                            </button>
                        `
                      )
                      .join("")}
                </div>
                <button class="carousel-btn next">→</button>
            </div>
                
                <div class="gallery-grid">
                    ${photos
                      .map(
                        (photo) => `
                        <div class="gallery-item" data-category="${photo.category}" data-id="${photo.id}">
                            <div class="gallery-item-image">
                                <img src="${photo.url}" alt="${photo.title}">
                            </div>
                            <div class="gallery-item-content">
                                <h3 class="gallery-item-title">${photo.title}</h3>
                                <p class="gallery-item-date">${photo.date}</p>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>

            <div class="modal">
                <div class="modal-content">
                    <div class="modal-image-container">
                        <img class="modal-image" src="" alt="">
                        <button class="modal-nav-btn prev">←</button>
                        <button class="modal-nav-btn next">→</button>
                        <button class="modal-close">×</button>
                    </div>
                    <div class="modal-info">
                        <h2 class="modal-title"></h2>
                        <p class="modal-date"></p>
                        <p class="modal-text"></p>
                    </div>
                </div>
            </div>
        `;
  }

  // 초기 HTML 삽입
  container.innerHTML = createGalleryHTML();

  // 요소 참조
  const categoryButtons = container.querySelectorAll(".category-btn");
  const categoryContainer = container.querySelector(".category-container");
  const prevCategoryBtn = container.querySelector(".category-carousel .prev");
  const nextCategoryBtn = container.querySelector(".category-carousel .next");
  const modal = container.querySelector(".modal");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDate = modal.querySelector(".modal-date");
  const modalText = modal.querySelector(".modal-text");
  const modalPrevBtn = modal.querySelector(".modal-nav-btn.prev");
  const modalNextBtn = modal.querySelector(".modal-nav-btn.next");
  const modalCloseBtn = modal.querySelector(".modal-close");

  // 카테고리 필터링
  function filterPhotos(category) {
    const items = container.querySelectorAll(".gallery-item");
    items.forEach((item) => {
      if (category === "all" || item.dataset.category === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // 카테고리 캐러셀 제어
  function updateCategoryVisibility() {
    const containerWidth = categoryContainer.offsetWidth;
    const gap = 16; // gap 값 (1rem)
    const buttonWidths = Array.from(categoryButtons).map(
      (btn) => btn.offsetWidth + gap
    );
    const visibleCount = 5; // 한 번에 보여질 버튼 수 고정

    // 버튼들의 표시/숨김 상태 업데이트
    categoryButtons.forEach((btn, index) => {
      if (
        index >= currentCategoryIndex &&
        index < currentCategoryIndex + visibleCount
      ) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });

    // 이전/다음 버튼 활성화 상태 업데이트
    prevCategoryBtn.disabled = currentCategoryIndex === 0;
    nextCategoryBtn.disabled =
      currentCategoryIndex >= categories.length - visibleCount;

    // 버튼 스타일 업데이트
    prevCategoryBtn.style.opacity = currentCategoryIndex === 0 ? "0.5" : "1";
    nextCategoryBtn.style.opacity =
      currentCategoryIndex >= categories.length - visibleCount ? "0.5" : "1";
  }

  // 모달 제어
  function updateModalContent() {
    if (!currentModalPhoto) return;

    const allImages = [
      currentModalPhoto.url,
      ...currentModalPhoto.relatedImages,
    ];
    modalImage.src = allImages[currentImageIndex];
    modalTitle.textContent = currentModalPhoto.title;
    modalDate.textContent = currentModalPhoto.date;
    modalText.textContent = currentModalPhoto.text;
  }

  // 이벤트 리스너
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterPhotos(button.dataset.category);
    });
  });

  container.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const photoId = parseInt(item.dataset.id);
      currentModalPhoto = photos.find((p) => p.id === photoId);
      currentImageIndex = 0;
      updateModalContent();
      modal.classList.add("active");
    });
  });

  modalPrevBtn.addEventListener("click", () => {
    if (!currentModalPhoto) return;
    const allImages = [
      currentModalPhoto.url,
      ...currentModalPhoto.relatedImages,
    ];
    currentImageIndex =
      (currentImageIndex - 1 + allImages.length) % allImages.length;
    updateModalContent();
  });

  modalNextBtn.addEventListener("click", () => {
    if (!currentModalPhoto) return;
    const allImages = [
      currentModalPhoto.url,
      ...currentModalPhoto.relatedImages,
    ];
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    updateModalContent();
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    currentModalPhoto = null;
  });

  prevCategoryBtn.addEventListener("click", () => {
    if (currentCategoryIndex > 0) {
      currentCategoryIndex--;
      updateCategoryVisibility();
    }
  });

  nextCategoryBtn.addEventListener("click", () => {
    const visibleCount = 5;
    if (currentCategoryIndex < categories.length - visibleCount) {
      currentCategoryIndex++;
      updateCategoryVisibility();
    }
  });

  // 초기화
  updateCategoryVisibility();
  // 윈도우 리사이즈 이벤트에 디바운스 적용
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateCategoryVisibility();
    }, 100);
  });
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", initPhotoGallery);
