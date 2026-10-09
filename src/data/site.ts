// Edit this file to personalize the site: name, details, experience, skills, and projects.

export const site = {
  name: "Stefan Popovic",
  title: "Computer Engineering (Co-op)",
  school: "University of Guelph",
  location: "Guelph, ON",
  email: "stefanpopovic976@gmail.com",
  social: {
    github: "https://github.com/stefanpopovic-dev",
    // Add your LinkedIn URL to show it in the header.
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
  // Set to an .mp4 to show a muted, looping clip in this spot; `src` is then its poster frame.
  video?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  context: string;
  period: string;
  tools: string[];
  // Listed under the project name on the home page cover.
  scope: string[];
  summary: string;
  // Short paragraphs about the project; shown instead of a highlights list when there are no highlights.
  writeup?: string[];
  highlights: string[];
  // Shown on the home page grid. Leave undefined to show a placeholder until photos are added.
  cover?: ProjectImage;
  // Each inner array is one row on the project page; images in a row sit side by side at equal height.
  gallery: ProjectImage[][];
  repo?: string;
  link?: string;
  // Hidden projects stay here but don't appear anywhere on the site. Remove the flag to show one again.
  hidden?: boolean;
};

const fpv = "/projects/fpv-flight-controller";
const gec = "/projects/gec-recycling-robot";
const ostrich = "/projects/solar-hydraulic-ostrich";

const allProjects: Project[] = [
  {
    slug: "fpv-flight-controller",
    title: "Custom FPV Flight Controller PCB",
    category: "PCB Design / Embedded Hardware",
    context: "Personal project",
    period: "May 2026 – Sept. 2026",
    tools: ["KiCad", "STM32F405", "Betaflight"],
    scope: ["PCB design, 4-layer (KiCad)", "STM32F405, Betaflight", "Board bring-up", "Flight testing"],
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
    slug: "gec-recycling-robot",
    title: "GEC Competition Robot",
    category: "Autonomous Robotics",
    context: "Guelph Engineering Competition 2026, Senior Design, team of 4",
    period: "Oct. 2026",
    tools: ["Arduino UNO", "L298N H-bridges", "DC motors"],
    scope: ["Autonomous vehicle (Arduino)", "4WD skid-steer drive", "Passive pickup and storage", "Built in one day, team of 4"],
    summary:
      "ACU-3741-4W, an autonomous car built in one day at the Guelph Engineering Competition to collect recyclables off a simulated landfill grid and leave the trash behind.",
    writeup: [
      "At the 2026 Guelph Engineering Competition, Ali Meski, Khaled Jimoh, Adam Alzahal, and I had one day and a standard kit to build an autonomous vehicle for the theme \"Full Circle: Rethinking Resources.\" The robot had to drive a simulated landfill grid, pick up the three recyclables, and leave the three pieces of trash where they were, with no human input once the run started. It was tested on two randomized layouts, and judges scored the design, the reuse of materials, and our presentation.",
      "We called ours the ACU-3741-4W. An Arduino UNO drives four DC motors through two L298N H-bridges, giving the car four-wheel skid-steer control. The pickup isn't motorized. Two cardboard guide arms and a shallow ramp at the front funnel items in as the car drives, a flap stops them from sliding back out, and everything ends up in a storage bag at the back. We kept the build to cardboard, heavy paper, a reusable bag, and rechargeable batteries, so it comes apart easily and the parts can be used again.",
    ],
    highlights: [],
    cover: { src: `${gec}/front.webp`, width: 1500, height: 1200, alt: "ACU-3741-4W robot with its cardboard guide arms and front ramp" },
    gallery: [
      [
        { src: `${gec}/front.webp`, width: 1500, height: 1200, alt: "Robot from the front, showing the guide arms and ramp", caption: "Front, guide arms and ramp" },
        {
          src: `${gec}/test-run-poster.jpg`,
          video: `${gec}/test-run.mp4`,
          width: 540,
          height: 960,
          alt: "Robot driving the competition grid on its own",
          caption: "Test run",
        },
      ],
      [
        { src: `${gec}/side.webp`, width: 1600, height: 1200, alt: "Robot from the side next to other competition entries", caption: "Side" },
        { src: `${gec}/side-bag.webp`, width: 2000, height: 1200, alt: "Robot from the side, showing the storage bag at the back", caption: "Storage bag at the back" },
      ],
    ],
  },
  {
    slug: "solar-hydraulic-ostrich",
    title: "Solar-Hydraulic Toy Reverse Engineering",
    category: "Mechanical CAD",
    context: "University of Guelph, team of 6",
    period: "Sept. 2025 – Mar. 2026",
    tools: ["SolidWorks"],
    scope: ["Reverse engineering", "SolidWorks modeling & assembly", "2D drawing package", "Team of 6"],
    summary:
      "A full SolidWorks assembly of a solar-hydraulic ostrich toy, reverse engineered by a team of six using nothing but the physical pieces as a reference.",
    writeup: [
      "For a group project at the University of Guelph, our team of six reverse engineered the ostrich model from a 12-in-1 solar and hydraulic construction kit and rebuilt it as a complete SolidWorks assembly. There were no drawings or CAD files to work from, only the physical pieces, so each of us measured and modeled our assigned parts by hand, and together we released a full 2D drawing package.",
      "I built and led the full assembly, bringing all six members' parts together into one mated model with motion relationships and tolerances defined so we could check fit and function. I also animated the exploded views and the assembly sequence for our design review presentation.",
    ],
    highlights: [],
    // Same render as the first gallery photo, widened to 4:3 with its own background so the tile doesn't crop the model.
    cover: { src: `${ostrich}/assembly-front-cover.jpg`, width: 1111, height: 833, alt: "SolidWorks render of the finished ostrich assembly" },
    gallery: [
      [
        { src: `${ostrich}/assembly-front.png`, width: 923, height: 833, alt: "SolidWorks render of the ostrich assembly, front three-quarter view", caption: "SolidWorks assembly, front" },
        { src: `${ostrich}/assembly-back.png`, width: 830, height: 767, alt: "SolidWorks render of the ostrich assembly, rear three-quarter view", caption: "SolidWorks assembly, back" },
      ],
      [
        {
          src: `${ostrich}/exploded-view-poster.jpg`,
          video: `${ostrich}/exploded-view.mp4`,
          width: 1280,
          height: 466,
          alt: "Animation of the ostrich assembly exploding into its parts and coming back together",
          caption: "Exploded view animation",
        },
      ],
      [
        { src: `${ostrich}/toy.jpg`, width: 560, height: 725, alt: "The physical solar-hydraulic ostrich toy", caption: "The physical toy" },
        { src: `${ostrich}/kit-box.jpg`, width: 447, height: 447, alt: "Box of the 12-in-1 solar and hydraulic construction kit", caption: "The 12-in-1 kit it comes from" },
      ],
    ],
  },
  {
    slug: "fsae-can-data-logger",
    hidden: true,
    title: "CAN Data Logger & LoRa Telemetry",
    category: "Embedded Firmware",
    context: "Gryphon Racing, Formula SAE",
    period: "Sept. 2024 – Present",
    tools: ["C", "ESP-IDF", "FreeRTOS", "ESP32-S3", "CAN", "LoRa"],
    scope: ["Embedded firmware (C, FreeRTOS)", "ESP32-S3, CAN bus", "LoRa telemetry", "Gryphon Racing FSAE"],
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
    hidden: true,
    title: "16-Bit CPU Architecture",
    category: "Digital Design / FPGA",
    context: "University of Guelph, team of 4",
    period: "Jan. 2026 – Apr. 2026",
    tools: ["VHDL", "Vivado"],
    scope: ["Digital design (VHDL)", "Datapath & control logic", "Vivado simulation", "Team of 4"],
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
    hidden: true,
    title: "Chess Engine with Learned Position Evaluation",
    category: "Software / Machine Learning",
    context: "Personal project",
    period: "May 2026 – Sept. 2026",
    tools: ["Python", "PyTorch", "python-chess"],
    scope: ["Alpha-beta search (Python)", "Neural network evaluation (PyTorch)", "Self-play benchmarking"],
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
];

export const projects = allProjects.filter((project) => !project.hidden);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
