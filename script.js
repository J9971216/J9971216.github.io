(function () {
  const root = document.documentElement;
  const langToggle = document.getElementById("lang-toggle");

  function currentLang() {
    return root.getAttribute("data-lang") || "en";
  }

  function applyStaticText(lang) {
    document.querySelectorAll("[data-en]").forEach((el) => {
      const text = el.getAttribute(lang === "zh" ? "data-zh" : "data-en");
      if (text != null) el.textContent = text;
    });
  }

  function renderEducation(lang) {
    const container = document.getElementById("education-list");
    container.innerHTML = SITE_CONTENT.education
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-header">
            <div class="timeline-header-main">
              ${item.logo ? `<img class="timeline-logo" src="${item.logo}" alt="${item.school[lang]}" />` : ""}
              <div>
                <h3 class="timeline-title">${item.school[lang]}</h3>
                <p class="timeline-role">${item.degree[lang]}</p>
              </div>
            </div>
            <div class="timeline-meta">
              <span>${item.location[lang]}</span>
              <span>${item.date[lang]}</span>
            </div>
          </div>
          ${
            item.notes.length
              ? `<ul class="timeline-notes">${item.notes
                  .map((n) => `<li>${n[lang]}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </div>`
      )
      .join("");
  }

  function renderExperience(lang) {
    const container = document.getElementById("experience-list");
    container.innerHTML = SITE_CONTENT.experience
      .map(
        (item) => `
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <h3 class="timeline-title">${item.company[lang]} ${
          item.current ? '<span class="badge">' + (lang === "zh" ? "进行中" : "Current") + "</span>" : ""
        }</h3>
              <p class="timeline-role">${item.role[lang]}</p>
            </div>
            <div class="timeline-meta">
              <span>${item.location[lang]}</span>
              <span>${item.date[lang]}</span>
            </div>
          </div>
          <ul class="timeline-notes">${item.bullets
            .map((b) => `<li>${b[lang]}</li>`)
            .join("")}</ul>
        </div>`
      )
      .join("");
  }

  function renderProjects(lang) {
    const container = document.getElementById("projects-list");
    container.innerHTML = SITE_CONTENT.projects
      .map(
        (p) => `
        <article class="project-card">
          <span class="project-tag">${p.tag[lang]}</span>
          <h3 class="project-title">${p.title[lang]}</h3>
          <p class="project-desc">${p.desc[lang]}</p>
          <div class="project-chips">${p.tags
            .map((t) => `<span class="chip">${t}</span>`)
            .join("")}</div>
        </article>`
      )
      .join("");
  }

  function renderSkills(lang) {
    const container = document.getElementById("skills-list");
    container.innerHTML = SITE_CONTENT.skills
      .map(
        (group) => `
        <div class="skill-group">
          <h3 class="skill-group-name">${group.name[lang]}</h3>
          <div class="project-chips">${group.items
            .map((i) => `<span class="chip">${i}</span>`)
            .join("")}</div>
        </div>`
      )
      .join("");
  }

  function render(lang) {
    applyStaticText(lang);
    renderEducation(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderSkills(lang);
    langToggle.textContent = lang === "zh" ? "EN" : "中文";
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }

  langToggle.addEventListener("click", () => {
    const next = currentLang() === "zh" ? "en" : "zh";
    root.setAttribute("data-lang", next);
    localStorage.setItem("site-lang", next);
    render(next);
  });

  const saved = localStorage.getItem("site-lang") || "en";
  root.setAttribute("data-lang", saved);
  render(saved);
})();
