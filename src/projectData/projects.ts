import LenslessImg from './LenslessImg.png';
import ImproveEdgeImg from './improveEdgeextension.png';
import AntennaImg from './Antenna.jpg';
import SmartBellImg from './smartdoorbell.jpg';
import JeraImg from './jera-site.png';
import MPCountImg from './mpcount-density.png';
import RecruitimationSwipeImg from './recruitimation-swipe.png';
import RecruitimationJobsImg from './recruitimation-jobs.png';
import RecruitimationResultsImg from './recruitimation-results.png';
import TravvyImg from './travvy-chat.png';
import YaleMealsImg from './yalemeals-icon.png';
import BarRaiserBehavioralImg from './bar-raiser-behavioral.png';
import BarRaiserWhiteboardImg from './bar-raiser-whiteboard.png';

interface Project {
  title: string;
  description: string;
  image: string;
  // Extra screenshots shown as a thumbnail strip under the hero image.
  images?: string[];
  link?: string;
  // Label for the link when "View Project" is not the right words.
  linkLabel?: string;
  // Write-up on this site, e.g. /blogs/HKUST/.
  blog?: string;
  technologies?: string[];
  completed?: string;
  // What I actually did, for team projects and forks of existing work.
  role?: string;
}

// Ordered by impact rather than by date: the first three render above the
// "See more" fold, and everything past that runs newest-first.
export const projects: Project[] = [
  {
    title: "Jera — Satellite Supply-Chain Intelligence",
    description: "A quantitative pipeline that reads Sentinel-1 SAR imagery over three DRC cobalt mines, converts backscatter into a mine-activity index, and tests whether that signal leads Glencore (GLEN.L) equity returns. Backtested across 2020–2025 with t-tests over an eight-horizon sweep, and served from a live REST API with point-in-time replay. The founding result: activity at Tenke Fungurume crossed below baseline 11 days before the DRC's February 2025 cobalt export ban became public.",
    image: JeraImg,
    link: "https://jera-website.vercel.app/",
    linkLabel: "Visit jera-website.vercel.app →",
    technologies: ["Python", "Sentinel-1 SAR", "NumPy", "pandas", "SciPy", "PostgreSQL", "REST API", "Railway", "React", "Geospatial"],
    completed: "2026"
  },
  {
    title: "Temporal Extension of MPCount — Video Crowd Counting",
    description: "Extends MPCount, the CVPR 2024 single-image crowd counter, into a video model that consumes N consecutive frames and predicts the centre frame's density map. Motion is fused before the attention memory bank, so the same domain-generalization machinery that handles appearance shift also covers movement. A zero-initialized residual fusion path keeps the temporal model bit-identical to the single-frame baseline at initialization (max|diff| = 0.0), letting pretrained checkpoints transfer with no accuracy loss. Against a single-frame control on the FDST benchmark, the tconv fusion mode cut counting error by 23.6% MAE and 33.0% MSE. Also built an optical-flow people-flow target pipeline and a four-mode ablation ladder to isolate how much of the gain came from real motion rather than added capacity.",
    image: MPCountImg,
    role: "Research Engineer — sole developer of the fork, HKUST",
    link: "https://github.com/onghaig/MPCount",
    linkLabel: "View on GitHub →",
    blog: "/blogs/HKUST/",
    technologies: ["PyTorch", "Python", "VGG16-BN U-Net", "Optical Flow", "CUDA", "Computer Vision", "Domain Generalization"],
    completed: "2026"
  },
  {
    title: "Recruitimation — AI Candidate Screening",
    description: "A full-stack recruiting tool built for a light industrial staffing agency. A Chrome extension pulls applicants off Indeed and LinkedIn, a queue-backed worker scores each one with OpenAI embeddings for job-to-resume match and Claude for a willingness estimate and one-line summary, and a swipe-style dashboard drives review, outreach drafting, and ATS logging. Ranked candidates surface with match and willingness scores, prior roles, and automatically flagged risks such as employment gaps.",
    image: RecruitimationSwipeImg,
    images: [RecruitimationJobsImg, RecruitimationResultsImg],
    technologies: ["TypeScript", "React", "Fastify", "Prisma", "PostgreSQL", "BullMQ", "Redis", "OpenAI", "Claude", "Chrome Extension", "Cloudflare R2", "Docker"],
    completed: "2026"
  },
  {
    title: "Bar Raiser — Voice Mock Interview Coach",
    description: "A mock interview coach for software engineers. Type any system design, low-level design, or LeetCode-style question, or paste a resume and a set of leadership principles for a behavioral round, and an AI interviewer talks it through with you in real time over the Gemini Live API. It sees your Excalidraw whiteboard and your code as you work, asks follow-ups, and grades you at the end against a rubric it wrote beforehand and kept hidden until you finished. Every interview is saved to your account and can be exported as a single Markdown file. Accounts and history live in MongoDB, each user brings their own API key so interviews run on their own quota, and one live interview per account is enforced across servers. Containerized and deployed on Google Cloud Run.",
    image: BarRaiserBehavioralImg,
    images: [BarRaiserWhiteboardImg],
    link: "https://bar-raiser-ibj6tr2ixq-uc.a.run.app",
    linkLabel: "Try it live →",
    technologies: ["TypeScript", "React", "Node.js", "Express", "WebSockets", "MongoDB", "Gemini Live API", "Excalidraw", "Docker", "Google Cloud Run"],
    completed: "2026"
  },
  {
    title: "SmartBell",
    description: "A fully offline smart doorbell built on a Raspberry Pi 4. It detects motion, classifies what is there using on-device TFLite inference, recognizes faces by name using OpenCV DNN and OpenFace embeddings, and announces results through a speaker — no cloud, no subscription, no images leaving the device.",
    image: SmartBellImg,
    link: "https://github.com/onghaig/smartDoorBell",
    technologies: ["C++17", "Python", "TensorFlow Lite", "OpenCV", "OpenFace", "Piper TTS", "pigpio", "libcamera", "Raspberry Pi 4", "Unix sockets", "MobileNet SSD", "Edge AI"],
    completed: "2026"
  },
  {
    title: "Travvy — Multi-Agent Travel Planner",
    description: "A YHack build where an orchestrator model coordinates specialist sub-agents for flights, lodging, events, budget, calendar, and booking. The three search agents fan out in parallel and their combined cost is validated against the traveller's budget before anything is shown. Onboarding is a progressive chat that collects destination, dates, travellers, and budget conversationally and never re-asks for something it already knows.",
    image: TravvyImg,
    role: "Team project — built the budget tracker, calendar sync, and chat interaction flow",
    link: "https://github.com/daniel-lu32/travelapp",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenAI Function Calling", "Supabase", "Redis", "Railway"],
    completed: "2026"
  },
  {
    title: "Lensless Polarimetric Imaging",
    description: "Lensless computational imaging pipeline, with capabilities in estimating Stokes parameters with ADMM.",
    image: LenslessImg,
    link: "https://github.com/onghaig/LenslessPiCam",
    technologies: ["Python", "NumPy", "Computer Vision", "ADMM"],
    completed: "2025"
  },
  {
    title: "YaleMeals: Campus Dining App",
    description: "An iOS app with real-time menus and community ratings across all 14 Yale residential colleges, Slifka, and Commons. Students can filter by dietary needs and allergens, rate dishes, and catch the best meals on campus before they leave their room. Built with the Yale Computer Society, where I am a Software Team Lead.",
    image: YaleMealsImg,
    link: "https://apps.apple.com/us/app/yalemeals/id6755962674",
    linkLabel: "View on the App Store →",
    technologies: ["React", "TypeScript"],
    completed: "2024"
  },
  {
    title: "ImproveEdge Extension",
    description: "Created a custom homepage and new tab extension with extensive feature set, working with API calls, React JSX, Vite, and TailwindCSS",
    image: ImproveEdgeImg,
    link: "https://github.com/onghaig/ImprovEdge-Extension",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    completed: "2024"
  },
  {
    title: "Yagi-Uda Antenna Design",
    description: "Designed and created a Yagi-Uda antenna for 2.4 GHz WiFi with ~15 dBi gain.",
    image: AntennaImg,
    technologies: ["RF Design", "HFSS", "Hardware"],
    completed: "2023"
  }
];
