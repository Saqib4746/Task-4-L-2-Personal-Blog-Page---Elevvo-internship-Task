const blogPosts = [
  {
    title: "Understanding JavaScript Closures",
    category: "Tech",
    image: "https://dmitripavlutin.com/static/00b6ed6d91a74c2e4ca5096e2d541dd7/be4c9/cover-5.webp",
    desc: "Learn how closures work in JavaScript with real examples.",
    date: "Nov 7, 2025"
  },
  {
    title: "Exploring the Mountains of Pakistan",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    desc: "A journey through breathtaking landscapes and peaks.",
    date: "Nov 5, 2025"
  },
  {
    title: "Mastering React Props & State",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    desc: "A clear explanation of Props and State for beginners.",
    date: "Oct 31, 2025"
  },
  {
    title: "10 Must-Try Dishes in Lahore",
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    desc: "A food lover’s guide to Lahore’s top street dishes.",
    date: "Oct 28, 2025"
  },
  {
    title: "Why Tailwind CSS is the Future",
    category: "Tech",
    image: "https://www.netsetsoftware.com/insights/wp-content/uploads/2025/01/Tailwind-css-feature-image.webp",
    desc: "Simplify your design workflow with utility-first CSS.",
    date: "Oct 24, 2025"
  },
  {
    title: "Hidden Beaches You Should Visit",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    desc: "Discover serene and uncrowded beaches worldwide.",
    date: "Oct 20, 2025"
  },
  {
    title: "Best Coffee Spots for Digital Nomads",
    category: "Food",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    desc: "Top cafés for remote work and great coffee.",
    date: "Oct 15, 2025"
  },
];

const container = document.getElementById("blogContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const searchInput = document.getElementById("searchInput");

let visibleCount = 4;
let currentCategory = "All";

function displayPosts() {
  container.innerHTML = "";
  const filtered = blogPosts.filter(post =>
    (currentCategory === "All" || post.category === currentCategory) &&
    post.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  const visiblePosts = filtered.slice(0, visibleCount);
  visiblePosts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
        <div class="date">${post.date}</div>
      </div>
    `;
    container.appendChild(card);
  });

  loadMoreBtn.style.display = filtered.length > visibleCount ? "block" : "none";
}

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    visibleCount = 4;
    displayPosts();
  });
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 4;
  displayPosts();
});

searchInput.addEventListener("input", displayPosts);

displayPosts();
