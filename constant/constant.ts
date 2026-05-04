import { StaticImageData } from "next/image";
import { AVATAR } from "@/public/images/images";

export interface Testimonial {
  username: string;
  designation: string;
  text: string;
  image: string | StaticImageData;
  
}
export const testimonials: Testimonial[] = [
  {
    username: "Ananya Roy",
    designation: "Product Designer at Zepto",
    text:
      "Xyra helped me understand a complex codebase in minutes. It feels like having a senior dev explain everything instantly.",
    image: AVATAR.testiOne,
  },
  {
    username: "Rahul Mehta",
    designation: "Full-Stack Developer at TCS",
    text:
      "I use Xyra to break down unfamiliar projects. What used to take hours now takes minutes.",
    image: AVATAR.testiEight,
  },
  {
    username: "Meera Chopra",
    designation: "Founder of PixelDrop",
    text:
      "I described my startup idea and Xyra generated a full system architecture. Honestly insane.",
    image: AVATAR.testiSeven,
  },
  {
    username: "Siddharth Jain",
    designation: "Marketing Lead at Creatix",
    text:
      "Even as a non-dev, I can now understand how products are built. Xyra makes everything clear.",
    image: AVATAR.testiSix,
  },
  {
    username: "Riya Sen",
    designation: "UI Developer at Accenture",
    text:
      "Debugging and understanding new codebases has never been this easy. Xyra saves me hours every week.",
    image: AVATAR.testiFive,
  },
  {
    username: "Aditya Sharma",
    designation: "Founder, DevSpark",
    text:
      "Xyra cuts out the confusion and lets me focus on building. I use it for every new project now.",
    image: AVATAR.testiFour,
  },
  {
    username: "Sneha Verma",
    designation: "Growth Strategist at Launchpad",
    text:
      "Understanding tech used to be hard for me. Xyra makes it simple and actually enjoyable.",
    image: AVATAR.testiThree,
  },
  {
    username: "Karan Batra",
    designation: "Freelance Web Developer",
    text:
      "From repo analysis to architecture planning, Xyra speeds up my entire workflow.",
    image: AVATAR.testiTwo,
  },
  {
    username: "Tanya D’Souza",
    designation: "Creative Director at Dotcom",
    text:
      "Xyra brings clarity to complex systems. It’s a must-have tool for modern developers.",
    image: AVATAR.testiNine,
  },
];


export interface FAQ {
  question: string;
  answer: string;
}

export const faq: FAQ[] = [
  {
    question: "What is Xyra AI?",
    answer:
      "Xyra AI is an AI-powered developer tool that helps you understand codebases, generate full project architectures, and build software faster. Just paste a repository or describe your idea, and Xyra does the rest.",
  },
  {
    question: "What can I use Xyra for?",
    answer:
      "You can analyze GitHub repositories, generate backend and frontend architecture, understand unfamiliar codebases, and even turn ideas into structured projects instantly.",
  },
  {
    question: "Do I need advanced coding skills to use Xyra?",
    answer:
      "Not at all. Xyra is designed for both beginners and experienced developers. Whether you're learning or building, it simplifies complex systems into easy-to-understand outputs.",
  },
  {
    question: "Does Xyra support different tech stacks?",
    answer:
      "Yes. Xyra can detect and work with various stacks including MERN, Next.js, Node.js, and more, helping you understand and build across technologies.",
  },
  {
    question: "How is Xyra different from ChatGPT or other AI tools?",
    answer:
      "Unlike general AI tools, Xyra is focused on developers. It provides structured outputs like architecture, APIs, and file breakdowns instead of just text responses.",
  },
];