import ChatImg from "../assets/chat.webp";
import WeatherImg from "../assets/weather.webp";
import NoughtsAndCrossesImg from "../assets/noughts-and-crosses.webp";
import ECommerceImg from "../assets/e-commerce.webp";

export const PROJECT_CARDS = [
  {
    img: ChatImg,
    name: "Chat App",
    description:
      "The chat application is a sophisticated real-time messaging platform built using Socket.IO. It enables seamless, instantaneous communication between users in a highly interactive environment. Key features include the ability to broadcast messages to all participants, share user locations with map integration, and maintain dynamic user lists for each chat room. The application implements robust event acknowledgements, ensuring reliable message delivery, and supports room-based chat functionalities to compartmentalise conversations effectively. Users are automatically tracked as they join and leave rooms, and messages are rendered with timestamps for context and clarity. The inclusion of automatic scrolling enhances user experience, while the front-end styling ensures the interface remains visually appealing. Designed with scalability in mind, this application was deployed using Heroku.",
    skills: [
      "Real-time Communication",
      "Event-driven Programming",
      "Backend Development",
      "Data Management",
      "Error Handling",
      "Debugging and Testing",
      "Deployment",
    ],
    technologies: [
      "Node.js",
      "Socket.IO",
      "Express.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Moment.js",
      "Geolocation API",
      "Git and Version Control",
      "Heroku",
      "Browser APIs",
    ],
    source: "https://github.com/OliverShenton/os-nodejs-chat-app",
  },
  {
    img: WeatherImg,
    name: "Weather Tracker",
    description:
      "This Weather Tracker is a sophisticated and user-friendly tool designed to provide accurate and up-to-date weather forecasts. It leverages the OpenWeather API to deliver a detailed 5-day forecast at three-hour intervals for any city worldwide. The app features a responsive and intuitive interface, enabling users to quickly access weather data for popular cities via predefined buttons or search for specific locations using the built-in search functionality. Additionally, the application displays the current weather conditions, complete with temperature, descriptive icons, and concise summaries, ensuring users have all the information they need at a glance. With its elegant design, dynamic date and time display, and optional dark mode toggle, the Weather Tracker seamlessly combines functionality and aesthetics.",
    skills: [
      "React Development",
      "JavaScript",
      "API Integration",
      "CSS Styling",
      "Error Handling",
      "Date and Time Manipulation",
      "Responsive Web Design",
    ],
    technologies: [
      "React",
      "OpenWeather API",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Git and Version Control",
      "Browser Geolocation API",
    ],
    source: "https://github.com/OliverShenton/weather-tracker",
  },
  {
    img: NoughtsAndCrossesImg,
    name: "Noughts & Crosses",
    description:
      "This Noughts and Crosses application built with React is a dynamic and interactive game that allows two players to engage in the classic strategy game. Its primary functionality includes rendering a 3x3 grid where players alternate turns to place their markers (typically 'X' and 'O') in an attempt to create a row, column, or diagonal of three consecutive markers, thereby achieving a victory. This React-based application is structured to maintain state effectively, ensuring the game updates immediately as players make their moves. It incorporates React's component-based architecture, enabling modular and reusable code, such as a dedicated component for each square and the game board itself. Additionally, the app includes essential features such as game status updates (indicating whose turn it is or declaring the winner), and a 'Game Over' condition to reset or terminate the session when a player wins or all squares are filled without a winner. The game also demonstrates best practices in state lifting, immutability, and the use of computed values, which ensure the application remains robust and efficient. This elegant implementation highlights React's capability for creating engaging and responsive user interfaces while maintaining code clarity and functionality.",
    skills: [
      "React Fundamentals",
      "State Management",
      "Conditional Rendering",
      "Event Handling",
      "Logic Implementation",
      "Responsive UI Design",
      "Debugging and Testing",
      "Component Reusability",
      "Seperation of Concerns",
      "Git version Control",
    ],
    technologies: ["React", "JavaScript (ES6+)", "HMTL", "CSS", "React Dev Tools", "Node.js"],
    source: "https://github.com/OliverShenton/learning-react/tree/main/tic-tac-toe",
  },
  {
    img: ECommerceImg,
    name: "E-Commerce Market",
    description:
      "This e-commerce marketplace application is a professional demonstration of a fully functional and user-focused platform, showcasing modern web development skills. Designed for adaptability, the application allows users to browse, search, and interact with a dynamic product catalogue, featuring features such as user authentication, a shopping cart system, and a simulated payment gateway. Built using a robust technology stack; including HTML, CSS, JavaScript, React, Bootstrap, Node.js, and MongoDB; it combines a polished, responsive front-end with a secure and scalable back-end. The application includes advanced functionalities like search and filtering, user account management, and seamless API communication, all presented in an intuitive and visually appealing design. This project serves as a testament to proficiency in full-stack development, industry best practices, and the ability to create engaging, interactive web experiences.",
    skills: [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Full-Stack Integration",
      "Version Control",
      "Testing and Debugging",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "React",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Browser Developer Tools",
      "Postman",
      "Git",
    ],
    source: "https://github.com/OliverShenton/e-commerce-marketplace",
  },
];
