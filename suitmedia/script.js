const cardContainer = document.getElementById("cardContainer");
const pagination = document.getElementById("pagination");
let itemsPerPage = 10;
let currentPage = 1;

// Isi data artikel sebanyak 50, gambar 1.jpeg dan 2.jpeg secara bergantian
const articles = Array.from({ length: 50 }, (_, i) => ({
  title: i % 2 === 0
    ? "Kenali Tingkatan Influencers berdasarkan Jumlah Followers"
    : "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer ...",
  date: "5 SEPTEMBER 2022",
  image: i % 2 === 0 ? "img/1.jpeg" : "img/2.jpeg"
}));

function renderCards() {
  cardContainer.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const selectedArticles = articles.slice(start, start + itemsPerPage);

  selectedArticles.forEach(article => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${article.image}" alt="Thumbnail" />
      <div class="content">
        <div class="date">${article.date}</div>
        <h3>${article.title}</h3>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderCards();
      renderPagination();
    });
    pagination.appendChild(btn);
  }
}

function changeItemsPerPage() {
  itemsPerPage = parseInt(document.getElementById("itemsPerPage").value);
  currentPage = 1;
  renderCards();
  renderPagination();
}

function sortItems() {
  const sortValue = document.getElementById("sortBy").value;
  if (sortValue === "Newest") {
    articles.reverse(); // hanya simulasi
  } else {
    articles.sort(); // simulasi
  }
  currentPage = 1;
  renderCards();
  renderPagination();
}

// Initial load
renderCards();
renderPagination();
