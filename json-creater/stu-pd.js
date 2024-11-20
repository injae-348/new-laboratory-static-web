const postDoctor = [
  {
    name: "Aamir Nadeem",
    major: "학과 받아오기",
    research_area: "연구 분야 받아오기",
    image: "./img/member/나딤.jpg",
  },
  {
    name: "Ibrahim Aliyu",
    major: "학과 받아오기",
    research_area: "연구 분야 받아오기",
    image: "./img/member/알리유.jpg",
  },
];

function renderPostDoctor() {
  const container = document.getElementById("postDoctor");

  let html = `
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                        <h1>Post Doctor</h1>
                    </div>
                    <div class="row g-4">
        `;

  postDoctor.forEach((member) => {
    html += `
                <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item position-relative rounded overflow-hidden">
                        <div class="overflow-hidden">
                            <img class="img-fluid" src="${member.image}" alt="${member.name}" style="width: 300px; height: 400px; object-fit: cover;">
                        </div>
                        <div class="team-text bg-light text-center p-4">
                            <h5>${member.name}</h5>
                            <p class="text-dark">${member.major}</p>
                            <div class="team-social text-center">
                                <p class="text-dark">${member.research_area}</p>
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
