import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Thevindu",
  lastName: "Wickramaarachchi",
  displayName: "Thevindu Wickramaarachchi",
  username: "thev1ndu",
  gender: "male",
  pronouns: "he/him",
  bio: "Code. Create. Refine.",
  flipSentences: [
    "Code. Create. Refine.",
    "Software Developer",
    "Machine Learning x DevOps Engineering Enthusiast",
  ],
  address: "Kadawatha, Sri Lanka",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "aXRzdGh3OUBnbWFpbC5jb20=", // base64 encoded
  website: "https://thevinduw.de",
  jobTitle: "Software Developer",
  jobs: [
    {
      title: "Computer Science Undergraduate",
      company: "University of Westminster",
      website: "https://www.westminster.ac.uk/",
    },
    // {
    //   title: "",
    //   company: "",
    //   website: "",
    // },
  ],
  about: `
I’m a 20-year-old tech enthusiast passionate about innovation and driven by the goal of becoming a versatile developer. While still early in my journey, I’m eager to keep learning across different areas of technology and applying that knowledge to real-world projects that make an impact.

I’m building a strong foundation in frontend development with React.js, Next.js, Tailwind CSS, and ShadCN components, while also exploring backend development with Node.js, Spring Boot, and Appwrite. Beyond that, I’m deeply interested in DevOps and cloud infrastructure, practicing with CI/CD pipelines, Docker, Kubernetes, and deploying on platforms like Google Cloud Platform and AWS.

To put my skills into action, I’ve worked on projects that challenge me to grow. One of them is [Classiloom](https://pypi.org/project/classiloom/), a Python library and CLI trainer for image classification. It integrates Gemini-powered hyperparameter suggestions with Keras backbones like MobileNetV2, EfficientNetB0, and ResNet50. Building [Classiloom](https://pypi.org/project/classiloom/) strengthened my understanding of machine learning while sharpening my engineering skills.

I believe in learning by building, and I’m excited to keep expanding my knowledge while collaborating with others to create meaningful solutions.

Alongside my personal projects, I also take on freelance work. One of my biggest freelance projects was [Yogeshwari.one](https://yogeshwari.one), a concert website. As the frontend developer, I focused on building a fully responsive design and ensuring pixel-perfect Figma-to-code implementation—a key part of delivering a seamless user experience.

Let’s connect and explore opportunities to grow and build together!`,

  avatar: "",
  ogImage: "",
  namePronunciationUrl: "",
  keywords: [
    "thevindu",
    "thevinduw",
    "thevindu hansara wickramaarachchi",
    "thev1ndu",
    "thevindu hansara",
    "itsthw",
  ],
  dateCreated: "2025-08-01", // YYYY-MM-DD
};
