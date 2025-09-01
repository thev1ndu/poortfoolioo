import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
//   {
//     id: "simplamo",
//     companyName: "Simplamo Enterprise JSC",
//     companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
//     positions: [
//       {
//         id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
//         title: "Senior Frontend Developer",
//         employmentPeriod: {
//           start: "10.2022",
//         },
//         employmentType: "Full-time",
//         icon: "code",
//         description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
// - Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
// - Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
// - Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
// - Develop and maintain core features to enhance functionality and user experience.
// - Ensure UI/UX consistency and adherence to standards.
// - Implement robust frontend solutions for web and mobile platforms.
// - Analyze technical capabilities and provide optimal solutions.`,
//         skills: [
//           "TypeScript",
//           "Next.js",
//           "React Native",
//           "MobX",
//           "MobX-State-Tree",
//           "Tailwind CSS",
//           "Dify",
//           "Zalo Mini App",
//           "Agile",
//           "Teamwork",
//           "Research",
//           "Problem-solving",
//         ],
//         isExpanded: true,
//       },
//       {
//         id: "cedd7adb-4118-4085-9983-ae00530b49e2",
//         title: "UI Design Lead",
//         employmentPeriod: {
//           start: "10.2022",
//         },
//         employmentType: "Full-time",
//         icon: "design",
//         description: `- Ensure UI/UX consistency and high-quality standards.
// - Design intuitive, user-focused interfaces aligned with business goals.
// - Define and establish a cohesive UI style for Simplamo.`,
//         skills: ["Creativity", "UI/UX Design", "Figma"],
//       },
//     ],
//     isCurrentEmployer: true,
//   },
//   {
//     id: "quaric",
//     companyName: "Quaric Co., Ltd.",
//     companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
//     positions: [
//       {
//         id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
//         title: "Design Engineer",
//         employmentPeriod: {
//           start: "03.2024",
//         },
//         employmentType: "Part-time",
//         icon: "code",
//         description: `- Created Quaric Brand Identity.
// - Created the Quaric Design System to standardize design practices and accelerate development.

// In-house Project: [Quaric Website](https://quaric.com)
// - Designed the UI/UX for Quaric Website, delivering a seamless experience.
// - Developed online ordering to streamline purchases.
// - Integrated VNPAY-QR for secure transactions.
// - Registered the e-commerce site with [online.gov.vn](http://online.gov.vn/website/chi-tiet-115855) for compliance.

// In-house Project: [ZaDark](https://zadark.com)
// - Build and maintain ZaDark.com with Docusaurus, integrating AdSense.
// - Develop and maintain the ZaDark extension for Zalo Web on Chrome, Safari, Edge, and Firefox — with 15,000+ active users via Chrome Web Store.`,
//         skills: [
//           "Next.js",
//           "Strapi",
//           "Auth0",
//           "VNPAY-QR",
//           "Docker",
//           "NGINX",
//           "Google Cloud",
//           "Docusaurus",
//           "Extension",
//           "UI/UX Design",
//           "UX Writing",
//           "Design System",
//           "Brand Design",
//           "Figma",
//           "Research",
//         ],
//         isExpanded: true,
//       },
//       {
//         id: "991692c4-7d02-4666-8d31-933c4831768d",
//         title: "Founder & Director",
//         employmentPeriod: {
//           start: "03.2024",
//         },
//         employmentType: "Part-time",
//         icon: "idea",
//         description: `- Lead and manage the company's strategy.
// - Oversee technical teams and product development.
// - Manage relationships with customers and partners.`,
//         skills: ["Business Ownership", "Business Law", "Business Tax"],
//       },
//     ],
//     isCurrentEmployer: true,
//   },
//   {
//     id: "tungtung",
//     companyName: "Tung Tung JSC",
//     companyLogo: "https://assets.chanhdai.com/images/companies/tungtung.webp",
//     positions: [
//       {
//         id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
//         title: "Web Developer",
//         employmentPeriod: {
//           start: "2020",
//           end: "2022",
//         },
//         employmentType: "Full-time",
//         description: `- Built a scalable design system for consistency and efficiency.
// - Built a complex rich-text editor based on ProseMirror and Slate for customizable content creation.
// - Integrated APIs with the Backend Team to enhance functionality.`,
//         icon: "code",
//         skills: [
//           "React",
//           "Redux",
//           "Storybook",
//           "Lerna",
//           "Agile",
//           "Teamwork",
//           "Research",
//         ],
//       },
//       {
//         id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
//         title: "Mobile Developer",
//         employmentPeriod: {
//           start: "2019",
//           end: "2020",
//         },
//         employmentType: "Full-time",
//         description: `- Rebuilt the app with React Native for better UX and performance.
// - Integrated MoMo and in-app purchases for seamless payments.
// - Optimized deployment for staging and production.
// - Published on App Store and Google Play, ensuring compliance.`,
//         icon: "code",
//         skills: [
//           "React Native",
//           "Redux",
//           "MoMo Payment API",
//           "App Store",
//           "Google Play Store",
//           "App Center",
//           "Agile",
//           "Teamwork",
//           "Research",
//         ],
//       },
//       {
//         id: "73151add-7adf-4035-a237-b5803ceb5478",
//         title: "UI/UX Designer",
//         employmentPeriod: {
//           start: "2018",
//           end: "2019",
//         },
//         employmentType: "Full-time",
//         description: `- Designed a Landing Page for enterprise clients.
// - Redesigned the Online Quiz Platform for a modern look on web and mobile.
// - Redesigned the Pricing interface for individual customers.
// - Enhanced UX by improving usability, navigation, and user flow.`,
//         icon: "design",
//         skills: ["UI/UX Design", "Sketch"],
//       },
//     ],
//   },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Web Developer",
        employmentPeriod: {
          start: "2024",
          end: "2025",
        },
        employmentType: "Part-time",
        description: ``,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University of Westminster",
        employmentPeriod: {
          start: "01.2025",
          end: "2028",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Computer Science.`,
        skills: [
          "Java",
          "Python",
          "JavaScript",
          "Data Structures",
          "Algorithms",
          "Databases",
          "Systems Design",
          "Software Engineering",
          "Self-learning",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "National Institute of Business Management",
        employmentPeriod: {
          start: "03.2024",
          end: "03.2025",
        },
        icon: "education",
        description: `- Finished my Diploma in Software Engineering with Distinction (GPA of 4.0)`,
        skills: [
          "Algorithms",
          "C#",
          "JavaScript",
          "Computer Logic",
          "PHP",
          "MySQL",
          "Laravel",
          "Self-learning",
        ],
      },
    ],
  },
];
