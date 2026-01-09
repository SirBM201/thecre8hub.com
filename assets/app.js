// Basic helpers (safe for reviewers; no trackers)
(function(){
  const yearEl = document.querySelector("[data-year]");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // optional: highlight active nav link
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = (a.getAttribute("href")||"").split("/").pop();
    if(href === path) a.style.background = "rgba(255,255,255,.08)";
  });
})();
