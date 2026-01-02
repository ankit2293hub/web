// PROJECTS
const container = document.getElementById("projects-container");

if (container && typeof projects !== "undefined") {
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech:</strong> ${project.tech}</p>
      <p><strong>Status:</strong> ${project.status}</p>
      <a href="${project.github}" target="_blank">GitHub</a>
    `;

    container.appendChild(div);
  });
}

// DARK MODE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
