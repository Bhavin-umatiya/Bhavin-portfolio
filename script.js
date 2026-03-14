const projects = [
  {
    title: "Secure Firmware Bootloader - STM32",
    period: "Mar 2026",
    status: "Embedded",
    description:
      "Built a secure bootloader demonstration on STM32F401RE using STM32 HAL and STM32CubeIDE to validate firmware integrity before application launch.",
    impact:
      "Implemented checksum-based verification, staged boot flow, and LED status signaling for pass and fail paths, creating a foundation for production secure boot features.",
    stack: ["STM32F401RE", "Embedded C", "STM32 HAL", "STM32CubeIDE", "Bootloader"],
    github: "https://github.com/Bhavin-umatiya/secure-firmware-bootloader-STM32",
    demo: "pending"
  },
  {
    title: "8-bit CPU Implementation",
    period: "Feb 2026",
    status: "Digital Design",
    description:
      "Built a simple 8-bit CPU in Verilog with a fetch-decode-execute flow, including a program counter, instruction memory, register file, ALU, and top-level datapath integration.",
    impact:
      "Verified arithmetic and logic instructions including ADD, SUB, AND, and OR through ModelSim simulation and synthesized the design with Intel Quartus.",
    stack: ["Verilog HDL", "Intel Quartus", "ModelSim", "CPU Datapath"],
    github: "https://github.com/Bhavin-umatiya/8_bit_cpu_Implementation",
    demo: "pending"
  },
  {
    title: "Agentic Hardware Co-Design Platform",
    period: "2026",
    status: " AI SaaS",
    description:
      "Built for AMD Sling Shot Hackathon 2026, this platform converts natural language hardware prompts into architecture, synthesizable Verilog RTL, testbenches, and Vivado TCL automation scripts.",
    impact:
      "Implemented a 3-agent pipeline (System Architect, RTL Engineer, Vivado Integrator), Firebase Google Sign-In with user project history, block-diagram generation, and one-click downloadable ZIP export for complete project delivery.",
    stack: ["Python", "Flask", "Gemini API", "Firebase Auth", "Firestore", "HTML", "CSS", "JavaScript", "Vivado Flow"],
    github: "https://github.com/Bhavin-umatiya/AMD_hack",
    demo: "pending"
  },
  {
    title: "Automated Leaf Health Detection",
    period: "Oct 2025",
    status: "Computer Vision",
    description:
      "Developed a Python computer vision pipeline to assess crop leaf health using preprocessing, HSV segmentation, and lesion visualization.",
    impact:
      "Calculated health scores from green-to-diseased ratios and generated overlays for clearer decision support.",
    stack: ["Python", "OpenCV", "NumPy", "PIL"],
    github: "pending",
    demo: "pending"
  },
  {
    title: "Smart Agriculture System",
    period: "Aug 2025",
    status: "IoT",
    description:
      "Built AgroSmart for SIH 2025, a low-cost smart agriculture platform for hilly regions with sensor-driven irrigation, crop intelligence, and rainwater-aware water management.",
    impact:
      "Integrated real-time monitoring, automated valve control logic, and farmer-focused app features including price tracking, scheme access, and advisory support. SIH '25 Campus Winner selected from 200+ teams.",
    stack: ["ESP32", "DHT11/DHT22", "Ultrasonic Sensor", "Flutter", "Firebase", "Wi-Fi/MQTT", "Gemini API"],
    github: "https://github.com/Bhavin-umatiya/SIH2025",
    demo: "pending"
  },
  {
    title: "Carry Save Adder on FPGA",
    period: "Mar 2025",
    status: "Digital Design",
    description:
      "Designed a 64-bit carry save adder using Verilog HDL and validated the design through simulation and synthesis workflows.",
    impact:
      "Implemented the output display on hardware using a 7-segment interface on the DE2 kit.",
    stack: ["Verilog", "Quartus", "ModelSim", "FPGA DE2"],
    github: "https://github.com/Bhavin-umatiya/Carry-save-FPGA",
    demo: "pending"
  },
  {
    title: "Parents and Child Performance Analysis",
    period: "May 2024",
    status: "Data Analysis",
    description:
      "Analyzed how parents' education levels affect student academic performance using structured Python-based analysis.",
    impact:
      "Used exploratory analysis and visual storytelling to turn education data into understandable insights.",
    stack: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    github: "https://github.com/Bhavin-umatiya/Parents-and-child-performance-analysis",
    demo: "pending"
  },
  {
    title: "Neuromorphic Computing on FPGA",
    period: "In Progress",
    status: "Current Research",
    description:
      "Developing a neuromorphic computing project using FPGA-based hardware acceleration for brain-inspired workloads.",
    impact:
      "Focused on architecture design, hardware feasibility, and scalable accelerator implementation strategy for efficient real-time processing.",
    stack: ["FPGA", "Digital Design", "Neuromorphic Computing", "Verilog"],
    github: "pending",
    demo: "pending"
  }
];

const projectGrid = document.querySelector("#projects-grid");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

const normalizeStatus = (status) => String(status || "").trim();

const buildProjectLinks = (project) => {
  const links = [];

  if (project.github) {
    links.push(`<a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`);
  } else {
    links.push('<span class="project-link disabled">GitHub link pending</span>');
  }

  if (project.demo) {
    links.push(`<a class="project-link" href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>`);
  } else {
    links.push('<span class="project-link disabled">Demo link pending</span>');
  }

  return links.join("");
};

const renderProjects = () => {
  projectGrid.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-top">
            <div>
              <p class="project-meta">${project.period}</p>
              <h3>${project.title}</h3>
            </div>
            <span class="status-badge">${normalizeStatus(project.status)}</span>
          </div>
          <p>${project.description}</p>
          <p>${project.impact}</p>
          <div class="project-tags">
            ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
          </div>
          <div class="project-links">
            ${buildProjectLinks(project)}
          </div>
        </article>
      `
    )
    .join("");
};

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("menu-open");
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

renderProjects();