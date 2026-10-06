// Edit this file to personalize the site: name, details, experience, skills, and projects.

export const site = {
  name: "Stefan Popovic",
  title: "Computer Engineering (Co-op)",
  school: "University of Guelph",
  location: "Guelph, ON",
  email: "stefanpopovic976@gmail.com",
  social: {
    github: "https://github.com/stefanpopovic-dev",
    // Add your LinkedIn URL to show it in the header and footer.
    linkedin: "",
    resume: "",
  },
  intro:
    "Third-year Computer Engineering student building embedded systems, PCBs, and software, from flight controller hardware and race car firmware to FPGA processors and machine learning.",
};

export const education = {
  school: "University of Guelph",
  degree: "Bachelor of Engineering, Computer Engineering (Co-op)",
  detail: "Third Year",
  period: "Expected 2029",
  location: "Guelph, ON",
};

export const experience: {
  org: string;
  role: string;
  period: string;
  location: string;
}[] = [
  {
    org: "Gryphon Racing, Formula SAE Team",
    role: "Electrical & Embedded Systems Subteam",
    period: "Sept. 2024 – Present",
    location: "Guelph, ON",
  },
  {
    org: "Cineplex",
    role: "Traditional Cast Member (Permanent Part-Time)",
    period: "Oct. 2023 – Present",
    location: "Kitchener, ON",
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "VHDL", "C#", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Embedded & FPGA",
    items: ["FPGA design (Vivado)", "STM32", "ESP32", "Arduino"],
  },
  {
    category: "Software",
    items: ["OOP", "Unit testing", "React", "Node.js", "FastAPI", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "Linux", "Arduino IDE", "Jira"],
  },
  {
    category: "CAD & PCB",
    items: ["KiCad", "SolidWorks", "AutoCAD", "Fusion 360"],
  },
];

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  context: string;
  period: string;
  year: string;
  tools: string[];
  summary: string;
  highlights: string[];
  // Shown on the home page grid. Leave undefined to show a placeholder until photos are added.
  cover?: ProjectImage;
  // Each inner array is one row on the project page; images in a row sit side by side at equal height.
  gallery: ProjectImage[][];
  repo?: string;
  link?: string;
};

const fpv = "/projects/fpv-flight-controller";

export const projects: Project[] = [
  {
    slug: "fpv-flight-controller",
    title: "Custom FPV Flight Controller PCB",
    category: "PCB Design / Embedded Hardware",
    context: "Personal project",
    period: "May 2026 – Sept. 2026",
    year: "2026",
    tools: ["KiCad", "STM32F405", "Betaflight"],
    summary:
      "A 4-layer, 30.5 × 30.5 mm STM32F405 flight controller designed from scratch in KiCad, flown on a 5-inch quad with stable hover and full manual control.",
    highlights: [
      "Self-taught KiCad to design an STM32F405 flight controller from scratch, taking it from schematic capture to a 4-layer, 30.5 mm × 30.5 mm board that reached first flight with stable hover and full manual control across 5 test flights.",
      "Benchmarked the board against a similar commercial F405 flight controller on an identical quadcopter by logging in-flight gyro data, measuring sensor noise within 10% of the commercial board.",
      "Iterated the PCB layout through 3 full design revisions before fabrication, resolving routing conflicts across all 7 functional blocks (MCU, IMU, barometer, OSD, flash, USB-C, and buck converter + LDO regulation from an 11–25 V battery input) to fit a dense 4-layer board.",
      "Engineered MCU pin, timer, and SPI/UART assignments around Betaflight's hardware requirements, enabling the board to run open-source flight firmware and standard FPV hardware with zero code changes.",
      "Diagnosed a switch footprint/pinout mismatch that held BOOT0 high and trapped the MCU in bootloader mode on every power-up; lifted 2 of 4 pins to restore normal boot and motor control.",
    ],
    cover: { src: `${fpv}/quad-front.jpg`, width: 1200, height: 1117, alt: "Finished quadcopter built around the custom flight controller" },
    gallery: [
      [
        { src: `${fpv}/quad-front.jpg`, width: 1200, height: 1117, alt: "Finished quadcopter, front view with camera", caption: "Finished quad" },
        { src: `${fpv}/quad-top.jpg`, width: 980, height: 1200, alt: "Finished quadcopter, top view", caption: "Finished quad, top" },
      ],
      [
        { src: `${fpv}/top-render.png`, width: 948, height: 867, alt: "3D render of the flight controller, top side", caption: "3D render, top" },
        { src: `${fpv}/bottom-render.png`, width: 957, height: 863, alt: "3D render of the flight controller, bottom side", caption: "3D render, bottom" },
      ],
      [
        { src: `${fpv}/board-top.jpg`, width: 900, height: 1200, alt: "Assembled board, top side", caption: "Assembled board, top" },
        { src: `${fpv}/board-bottom.jpg`, width: 900, height: 1200, alt: "Assembled board, bottom side", caption: "Assembled board, bottom" },
        { src: `${fpv}/board-installed.jpg`, width: 900, height: 1200, alt: "Board wired into the quad frame", caption: "Installed in the frame" },
      ],
      [
        { src: `${fpv}/top-copper.png`, width: 930, height: 859, alt: "Top copper layer of the PCB layout", caption: "Top copper" },
        { src: `${fpv}/bottom-copper.png`, width: 985, height: 836, alt: "Bottom copper layer of the PCB layout", caption: "Bottom copper" },
      ],
      [{ src: `${fpv}/schematic.png`, width: 4320, height: 2808, alt: "Full schematic of the flight controller", caption: "Schematic" }],
    ],
    repo: "https://github.com/stefanpopovic-dev/fpv-flight-controller",
  },
  {
    slug: "fsae-can-data-logger",
    title: "CAN Data Logger & LoRa Telemetry",
    category: "Embedded Firmware",
    context: "Gryphon Racing, Formula SAE",
    period: "Sept. 2024 – Present",
    year: "2024",
    tools: ["C", "ESP-IDF", "FreeRTOS", "ESP32-S3", "CAN", "LoRa"],
    summary:
      "Firmware for an ESP32-S3 data logger that records the race car's CAN bus to an SD card and streams live telemetry to the pit over LoRa radio.",
    highlights: [
      "Wrote C firmware (ESP-IDF, FreeRTOS) for an ESP32-S3 data logger that records 250 CAN messages per second to an SD card and sends live telemetry to the pit over LoRa radio.",
      "Built a buffered logging pipeline with FreeRTOS tasks, queues, and a ring buffer so the logger keeps recording through SD card delays and radio dropouts, losing 0 messages over 30 minutes of bench testing.",
      "Rewrote the radio driver over SPI with the subteam lead after a PCB design flaw broke its standard library, delivering 4 working loggers in time for installation on the car.",
      "Defined the radio packet format and agreed on a shared CAN message list with the IMU-GPS, BMS, and dash developers, so one firmware build logs all 4 boards without changes.",
    ],
    gallery: [],
  },
  {
    slug: "16-bit-cpu",
    title: "16-Bit CPU Architecture",
    category: "Digital Design / FPGA",
    context: "University of Guelph, team of 4",
    period: "Jan. 2026 – Apr. 2026",
    year: "2026",
    tools: ["VHDL", "Vivado"],
    summary:
      "A 16-bit processor designed in VHDL, with its own ALU, control unit, registers, and memory, verified in Vivado simulation.",
    highlights: [
      "Designed a 16-bit CPU in VHDL with a 4-person team, building and integrating the ALU, control unit, program counter, registers, instruction/data memory, and multiplexers into one processor.",
      "Implemented datapath and control logic supporting 8 instructions (ADD, SUB, AND, OR, LOAD, STORE, BNE, JUMP), verifying correct execution with VHDL testbenches and Vivado simulation waveforms.",
      "Verified each module on its own before system integration, then used waveform analysis to debug code and simulation configuration issues in the full CPU.",
    ],
    gallery: [],
  },
  {
    slug: "chess-engine",
    title: "Chess Engine with Learned Position Evaluation",
    category: "Software / Machine Learning",
    context: "Personal project",
    period: "May 2026 – Sept. 2026",
    year: "2026",
    tools: ["Python", "PyTorch", "python-chess"],
    summary:
      "An alpha-beta chess engine whose hand-tuned evaluator was replaced by a neural network trained on 250,000 Stockfish-scored positions.",
    highlights: [
      "Built an alpha-beta search core over python-chess move generation, adding move ordering (captures and checks first) to reach 5 plies at 3 sec/move with a hand-tuned material evaluator.",
      "Trained a neural network position evaluator on 250,000 labeled positions from Lichess games scored by Stockfish, replacing hand-tuned piece values as the engine's leaf-node heuristic.",
      "Diagnosed a search-depth collapse after swapping in the NN evaluator, tracing the bottleneck to thousands of network calls per move, and added an evaluation cache to recover 4 plies.",
      "Benchmarked the NN-evaluated engine against the hand-tuned baseline across 200 self-play games at fixed time per move, winning 55%.",
    ],
    gallery: [],
  },
  {
    slug: "solar-hydraulic-ostrich",
    title: "Solar-Hydraulic Toy Reverse Engineering",
    category: "Mechanical CAD",
    context: "University of Guelph, team of 6",
    period: "Sept. 2025 – Mar. 2026",
    year: "2025",
    tools: ["SolidWorks"],
    summary:
      "A full SolidWorks reverse engineering of a solar-hydraulic ostrich toy: measured parts, a 2D drawing package, and an animated team assembly.",
    highlights: [
      "Reverse engineered a multi-component solar-hydraulic toy in a 6-person team, measuring and modeling individually assigned parts in SolidWorks and releasing a full 2D drawing package.",
      "Built and led the full team assembly, integrating all 6 members' individually modeled parts into a single mated assembly with defined motion relationships and tolerances to validate fit and function.",
      "Animated exploded views and the assembly sequence for the design review presentation.",
    ],
    gallery: [],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
