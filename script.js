const projects = [
  {
    title: "Asynchronous FIFO UVM Verification",
    period: "May 2026",
    status: "RTL Verification",
    description:
      "Developed an advanced Universal Verification Methodology (UVM) environment for verifying an Asynchronous FIFO design to industry standards.",
    impact:
      "Created a robust testbench architecture demonstrating expertise in high-impact hardware verification and advanced simulation techniques for VLSI design.",
    stack: ["SystemVerilog", "UVM", "ModelSim", "RTL Verification", "Asynchronous FIFO"],
    github: "https://github.com/Bhavin-umatiya/async-fifo-uvm-verification",
    demo: null
  },
  {
    title: "AI-VLSI Feasibility Engine",
    period: "2026",
    status: "AI + VLSI",
    description:
      "Built a Python-based engine that evaluates VLSI design feasibility using AI-driven analysis, bridging the gap between concept-level hardware ideas and implementation-ready specifications.",
    impact:
      "Automates early-stage design evaluation to accelerate hardware development decision-making and reduce iteration cycles.",
    stack: ["Python", "AI/ML", "VLSI Analysis", "Automation"],
    github: "https://github.com/Bhavin-umatiya/AI-VLSI-Feasibility-Engine",
    demo: null
  },
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
    title: "8-bit Pipelined CPU",
    period: "Feb 2026",
    status: "Digital Design",
    description:
      "Designed and implemented a 5-stage pipelined 8-bit processor in Verilog with hazard detection, data forwarding, and a custom ALU supporting arithmetic and logic operations.",
    impact:
      "Achieved pipelined execution with proper stall and forwarding logic, verified through ModelSim simulation and synthesized with Xilinx Vivado.",
    stack: ["Verilog HDL", "Vivado", "ModelSim", "Pipelined CPU", "Hazard Detection"],
    github: "https://github.com/Bhavin-umatiya/pipelined-8bit-cpu-verilog",
    demo: null
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
    title: "Open Source Contributions: Zephyr RTOS & ROS2",
    period: "2026",
    status: "Open Source",
    description:
      "Active contributor to Zephyr RTOS and ROS2 Controllers, focusing on embedded infrastructure, real-time system stability, and hardware-aware optimizations.",
    impact:
      "Successfully merged pull requests addressing CI compliance, parameter deprecation, and system stability, demonstrating strong collaborative engineering in large-scale codebases.",
    stack: ["C", "C++", "RTOS", "ROS2", "Embedded Systems", "Git Workflow"],
    github: "https://github.com/zephyrproject-rtos/zephyr",
    demo: null
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
    title: "Neuromorphic SNN Accelerator on FPGA",
    period: "In Progress",
    status: "Current Research",
    description:
      "Building a Spiking Neural Network (SNN) hardware accelerator on FPGA using Leaky Integrate-and-Fire (LIF) neuron models for brain-inspired computing.",
    impact:
      "Focused on architecture design, hardware feasibility, and scalable accelerator implementation for efficient real-time neuromorphic processing on Xilinx FPGAs.",
    stack: ["SystemVerilog", "Xilinx Vivado", "Neuromorphic Computing", "SNN", "FPGA"],
    github: "https://github.com/Bhavin-umatiya/neuromorphic-snn-accelerator",
    demo: null
  }
];

const projectGrid = document.querySelector("#projects-grid");
const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

const normalizeStatus = (status) => String(status || "").trim();

const isValidURL = (value) => value && value !== "pending";

const buildProjectLinks = (project) => {
  const links = [];

  if (isValidURL(project.github)) {
    links.push(`<a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>`);
  } else {
    links.push('<span class="project-link disabled">GitHub link pending</span>');
  }

  if (isValidURL(project.demo)) {
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