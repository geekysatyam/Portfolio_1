export const myProjects = [
  {
    id: 1,
    title: "Smart Safety Helmet for Accident & Alcohol Detection",
    description:
      "An IoT-based safety helmet using ESP32 that detects intoxication and crash events, with real-time emergency alerts and GPS tracking for workplace safety.",
    subDescription: [
      "Designed safety helmet with ESP32 microcontroller, alcohol sensor, and accelerometer for dual detection capabilities.",
      "Integrated relay-based ignition control system to prevent vehicle operation during intoxication.",
      "Implemented GSM module for automatic emergency alerts and real-time location tracking to emergency contacts.",
      "Optimized for low-power operation with fast response time, ensuring reliable detection in critical scenarios.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/esp32.svg",
    image: "/assets/projects/safety-helmet.jpg",
    tags: [
      {
        id: 1,
        name: "ESP32",
        path: "/assets/logos/esp32.svg",
      },
      {
        id: 2,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 3,
        name: "IoT",
        path: "/assets/logos/iot.svg",
      },
      {
        id: 4,
        name: "Arduino",
        path: "/assets/logos/arduino.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Local Home Automation System using ESP-NOW",
    description:
      "A wireless home automation system using ESP32 devices with ESP-NOW protocol for internet-independent smart home control.",
    subDescription: [
      "Built wireless system using ESP32-CAM and DevKit V1 with ESP-NOW protocol for mesh communication.",
      "Implemented touch sensor controls for appliances via relay modules without internet dependency.",
      "Developed mobile app interface for real-time device control over local network.",
      "Designed modular architecture focusing on security, responsiveness, and easy integration for offline use.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/esp32.svg",
    image: "/assets/projects/home-automation.png",
    tags: [
      {
        id: 1,
        name: "ESP32",
        path: "/assets/logos/esp32.svg",
      },
      {
        id: 2,
        name: "ESP-NOW",
        path: "/assets/logos/espnow.png",
      },
      {
        id: 3,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 4,
        name: "IoT",
        path: "/assets/logos/iot.svg",
      },
    ],
  },
  {
    id: 3,
    title: "IoT-Based Weather Monitoring Station",
    description:
      "A comprehensive weather monitoring system using ESP8266 and multiple sensors with cloud dashboard integration.",
    subDescription: [
      "Developed weather station using DHT11 and BMP180 sensors with ESP8266 for monitoring temperature, humidity, and pressure.",
      "Implemented real-time data display on LCD and cloud transmission using Blynk IoT platform.",
      "Created Python scripts for data logging, visualization, and trend analysis using Matplotlib.",
      "Configured automated alerts for abnormal environmental changes with email notifications.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/esp8266.svg",
    image: "/assets/projects/weather-station.png",
    tags: [
      {
        id: 1,
        name: "ESP8266",
        path: "/assets/logos/esp8266.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Blynk",
        path: "/assets/logos/blynk.svg",
      },
      {
        id: 4,
        name: "Matplotlib",
        path: "/assets/logos/matplotlib.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Face Detection using YOLO",
    description:
      "An advanced face detection system implementing YOLOv3 algorithm with OpenCV for accurate real-time detection.",
    subDescription: [
      "Implemented YOLOv3 algorithm with OpenCV in Python for high-accuracy face detection on static images.",
      "Applied pre-trained weights and Non-Max Suppression technique for precise bounding box results.",
      "Optimized detection pipeline for enhanced performance across various image types and lighting conditions.",
      "Integrated confidence scoring system to filter false positives and improve detection reliability.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/yolo.svg",
    image: "/assets/projects/face-detection.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "OpenCV",
        path: "/assets/logos/opencv.svg",
      },
      {
        id: 3,
        name: "YOLO",
        path: "/assets/logos/yolo.svg",
      },
      {
        id: 4,
        name: "Machine Learning",
        path: "/assets/logos/ml.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Personal Diary Web Application",
    description:
      "A secure personal diary web application built with Django framework featuring user authentication and CRUD operations.",
    subDescription: [
      "Built secure web application using Django framework with SQLite database backend.",
      "Implemented comprehensive user authentication system with login, registration, and session management.",
      "Developed full CRUD functionality for diary entries with intuitive user interface.",
      "Designed responsive UI with model-view-template architecture and secure routing system.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/django.svg",
    image: "/assets/projects/personal-diary.png",
    tags: [
      {
        id: 1,
        name: "Django",
        path: "/assets/logos/django.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "HTML/CSS",
        path: "/assets/logos/html5.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Global Air Pollution Analysis",
    description:
      "A comprehensive data analysis project examining global air pollution trends using machine learning for predictive modeling.",
    subDescription: [
      "Analyzed large-scale global air pollution datasets to identify key sources and environmental patterns.",
      "Implemented advanced data visualization using Python libraries (Matplotlib, Seaborn) for trend interpretation.",
      "Developed predictive machine learning models to forecast pollution levels and assess environmental impact.",
      "Utilized Pandas and NumPy for efficient data preprocessing and handling of large-scale pollution datasets.",
    ],
    href: "https://github.com/geekysatyam", 
    logo: "/assets/logos/python.svg",
    image: "/assets/projects/air-pollution.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Pandas",
        path: "/assets/logos/pandas.svg",
      },
      {
        id: 3,
        name: "Machine Learning",
        path: "/assets/logos/ml.svg",
      },
      {
        id: 4,
        name: "Matplotlib",
        path: "/assets/logos/matplotlib.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918847514424", // Your WhatsApp number
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/geek-satyam/", 
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/geekysatyam", 
    icon: "/assets/socials/github.svg",
  },
  {
    name: "Email",
    href: "mailto:satyam884751@gmail.com",
    icon: "/assets/socials/email.svg",
  },
];

export const experiences = [
  {
    title: "Data Analyst Intern",
    job: "IBM SkillsBuild",
    date: "June 2024 - August 2024",
    contents: [
      "Analyzed 10,000+ historical sales data points to identify key trends and customer behavior patterns.",
      "Implemented machine learning models (Random Forest, Gradient Boosting) achieving 85% accuracy for sales forecasting.",
      "Developed inventory optimization strategies based on predictive analytics and seasonal trends.",
      "Utilized Python ecosystem including Pandas, NumPy, scikit-learn, Matplotlib, and Seaborn for comprehensive data analysis.",
      "Created interactive dashboards and visualizations to communicate insights to stakeholders.",
    ],
  },
  {
    title: "Team Lead - PITEX 2024",
    job: "PHD Chamber of Commerce",
    date: "December 2024",
    contents: [
      "Led a team of 25 interns coordinating event logistics including scheduling and venue management.",
      "Managed VIP hospitality services and facilitated interactions with celebrities, ministers, and dignitaries.",
      "Demonstrated exceptional leadership, adaptability, and teamwork skills in high-pressure environment.",
      "Coordinated cross-functional teams to ensure seamless event execution and stakeholder satisfaction.",
      "Developed project management and communication skills through large-scale event coordination.",
    ],
  },
  {
    title: "Student Leader & Technical Club President",
    job: "I.K. Gujral Punjab Technical University",
    date: "January 2024 - Present",
    contents: [
      "Serving as President of Technoverse Technical Club, organizing technical workshops and coding competitions.",
      "Working as Student Coordinator at Training & Placement Cell, facilitating campus recruitment drives.",
      "Leading as Cadet Sergeant in 2 PB Air SQN NCC Amritsar, developing leadership and discipline skills.",
      "Mentoring junior students in programming, IoT development, and career guidance.",
      "Organizing hackathons, seminars, and technical events to promote innovation and learning.",
    ],
  },
];

export const reviews = [
  {
    name: "Rajesh Kumar",
    username: "@rajesh_dev",
    body: "Satyam's IoT projects are incredibly innovative. His smart helmet solution could revolutionize workplace safety.",
    img: "https://robohash.org/rajesh",
  },
  {
    name: "Priya Sharma",
    username: "@priya_tech",
    body: "Impressed by the depth of his data analysis work. His predictive models are both accurate and practical.",
    img: "https://robohash.org/priya",
  },
  {
    name: "Amit Singh",
    username: "@amit_iot",
    body: "Great work on the home automation system. The offline functionality is exactly what smart homes need.",
    img: "https://robohash.org/amit",
  },
  {
    name: "Neha Gupta",
    username: "@neha_ml",
    body: "His machine learning implementations are solid. The face detection system shows great technical understanding.",
    img: "https://robohash.org/neha",
  },
  {
    name: "Vikram Patel",
    username: "@vikram_py",
    body: "Excellent Python developer with strong problem-solving skills. His Django projects are well-structured.",
    img: "https://robohash.org/vikram",
  },
  {
    name: "Anita Desai",
    username: "@anita_data",
    body: "Outstanding data visualization work. His insights on air pollution trends are both meaningful and actionable.",
    img: "https://robohash.org/anita",
  },
  {
    name: "Rohit Verma",
    username: "@rohit_iot",
    body: "The weather monitoring station is a perfect example of practical IoT implementation. Great sensor integration!",
    img: "https://robohash.org/rohit",
  },
  {
    name: "Kavya Nair",
    username: "@kavya_tech",
    body: "His leadership at university events shows he's not just technically skilled but also a great team player.",
    img: "https://robohash.org/kavya",
  },
];

// Additional data you might want to include
export const certifications = [
  {
    title: "AI/ML for Geospatial Data Analysis",
    issuer: "Indian Space Research Organisation (ISRO)",
    year: "2023",
    logo: "/assets/logos/isro.png",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    logo: "/assets/logos/ibm.png",
  },
];

export const skills = {
  programming: ["Python", "C/C++", "Java"],
  hardware: ["ESP32", "ESP8266", "Arduino", "Sensor Integration", "GSM/GPS", "Relay Control"],
  tools: ["Jupyter", "VS Code", "Power BI", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV", "MySQL"],
  specialties: ["IoT Development", "Data Analysis", "Machine Learning", "Hardware-Software Integration", "Data Visualization"],
};