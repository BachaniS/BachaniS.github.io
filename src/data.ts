export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  detailedDescription?: string;
  features?: string[];
  techStack?: string[];
}

export interface Category {
  title: string;
  items: ProjectItem[];
}

export const userData = {
  name: "Somesh M. Bachani",
  title: "Software Engineer | AI & Data",
  description: "A passionate engineer building intelligent systems, robust backends, and beautiful frontends.",
  contact: {
    email: "bachani.s@northeastern.edu",
    linkedin: "https://www.linkedin.com/in/somesh-bachani-803233105",
    github: "https://github.com/BachaniS",
    portfolio: "https://someshbachani.sites.northeastern.edu/"
  },
  categories: [
    {
      title: "Featured Projects",
      items: [
        {
          id: "p1",
          title: "E.A.G.E.R. / JARVIS",
          description: "Voice-Driven OS & Web Automation Agent using LLMs and Selenium.",
          tech: ["Python", "LLM", "Selenium"],
          url: "https://github.com/BachaniS/llm_jarvis",
          detailedDescription: "A voice-driven automation agent that leverages Large Language Models to control your operating system and automate web browsing tasks. JARVIS acts as an intelligent assistant that understands natural language commands and translates them into OS-level and browser-level actions using Selenium for web automation.",
          features: [
            "Natural language voice commands for OS automation",
            "Web browsing automation via Selenium WebDriver",
            "LLM-powered intent parsing and action planning",
            "Multi-step task orchestration",
            "Extensible plugin architecture"
          ],
          techStack: ["Python", "LLM APIs", "Selenium", "Speech Recognition", "Apache 2.0 License"]
        },
        {
          id: "p2",
          title: "SchedulEase",
          description: "AI-driven course recommendation system that plans personalized, sequenced academic paths.",
          tech: ["FastAPI", "React", "Python"],
          url: "https://github.com/BachaniS/FAI-project",
          detailedDescription: "An AI-driven course recommendation system built as a Foundations of AI final project. SchedulEase assists students in planning their academics by recommending personalized, logically sequenced course paths based on prerequisites, student preferences, and historical data. Features a FastAPI backend with AI planning algorithms and an interactive React frontend.",
          features: [
            "Personalized course sequence recommendations",
            "Prerequisite tracking and validation",
            "AI-based optimal path planning",
            "Interactive React-based UI for course exploration",
            "Historical data-driven suggestions"
          ],
          techStack: ["Python", "FastAPI", "React", "TypeScript", "CSS", "Shell"]
        },
        {
          id: "p3",
          title: "LevelUP Wellness App",
          description: "AI-powered wellness app that gamifies personal development with fitness, sleep, and nutrition tracking.",
          tech: ["JavaScript", "Python", "React Native"],
          url: "https://github.com/LEVELUP-ML/levelup",
          detailedDescription: "LevelUP is an AI-powered wellness app that gamifies personal development by tracking fitness, sleep, nutrition, and cognitive performance. It converts health metrics into clear stats and provides personalized coaching to build sustainable habits across all life domains. The project includes a full-stack mobile application with a companion MLOps data pipeline.",
          features: [
            "Gamified personal development tracking",
            "Fitness, sleep, nutrition, and cognitive performance metrics",
            "AI-powered personalized coaching",
            "Health metric visualization and stats conversion",
            "Sustainable habit-building system"
          ],
          techStack: ["JavaScript", "React Native", "Python", "HTML", "Kotlin", "Swift"]
        },
        {
          id: "p4",
          title: "LLM Shopping Recommender",
          description: "Smart shopping assistant using vector search and LLMs for personalized product recommendations.",
          tech: ["Python", "LanceDB", "Streamlit"],
          url: "https://github.com/BachaniS/LLM_shopping",
          detailedDescription: "A smart shopping assistant where users ask in plain English what they need and get curated product picks via vector search plus a local LLM. The pipeline scrapes product data, builds vector embeddings in LanceDB, and uses an LLM query planner combined with vector search and diversity reranking to deliver personalized markdown recommendations through a Streamlit UI.",
          features: [
            "Natural language product search",
            "LLM-powered query planning (1-4 retrieval queries)",
            "LanceDB vector search with embeddings",
            "Diversity reranking for varied recommendations",
            "Streamlit UI with sidebar toggles for LLM planner and filtering",
            "Web scraper for product catalogs (title, price, reviews, materials, etc.)"
          ],
          techStack: ["Python", "LanceDB", "Streamlit", "LLM APIs", "Web Scraping", "Vector Embeddings"]
        }
      ]
    },
    {
      title: "AI & Machine Learning",
      items: [
        {
          id: "ai1",
          title: "Ephemeral Tic-Tac-Toe RL",
          description: "Multi-agent reinforcement learning game where pieces have limited lifespans and vanish after set turns.",
          tech: ["Python", "Q-Learning", "OpenAI Gym", "Pygame"],
          url: "https://github.com/BachaniS/ephemeral_tictactoe_RL",
          detailedDescription: "An AI-powered, reinforcement-learning-enhanced twist on classic Tic-Tac-Toe where pieces have a lifespan and vanish after a set number of turns. Features a fully compatible OpenAI Gym environment, Q-learning with epsilon-greedy exploration strategy, and Pygame visualization with visual effects for piece aging (fading, shrinking lifespan circles, crosses for expired spots).",
          features: [
            "Dynamic gameplay with piece expiration after 6 turns",
            "Q-learning with epsilon-greedy strategy",
            "Fully compatible OpenAI Gym environment",
            "Pygame visualization with aging visual effects",
            "Customizable lifespans and board configurations",
            "50,000 training episodes for AI agent"
          ],
          techStack: ["Python", "Reinforcement Learning", "Q-Learning", "OpenAI Gym", "Pygame", "NumPy"]
        },
        {
          id: "ai2",
          title: "Tic-Tac-Toe AI (Pygame)",
          description: "Ephemeral Tic-Tac-Toe with Q-learning AI, where pieces disappear after 6 turns with visual effects.",
          tech: ["Python", "Q-Learning", "Pygame"],
          url: "https://github.com/BachaniS/TicTacToe_final",
          detailedDescription: "A polished implementation of Ephemeral Tic-Tac-Toe featuring a human-vs-AI mode. Human plays X against a Q-learning AI playing O. Pieces expire after 6 turns with visual effects including fading, shrinking lifespan circles, and crosses for expired spots. Includes interactive GUI with click-to-place using Pygame.",
          features: [
            "Human vs AI gameplay (Human = X, AI = O)",
            "Interactive click-to-place GUI",
            "Visual piece aging and expiration effects",
            "Pre-trained Q-table agent (q_table_agent.pkl)",
            "Configurable training episodes and lifespan values"
          ],
          techStack: ["Python", "Q-Learning", "Pygame", "NumPy"]
        },
        {
          id: "ai3",
          title: "Course Retrieval System",
          description: "Intelligent course search engine using BM25, TF-IDF, PageRank, and hybrid IR techniques.",
          tech: ["Python", "NLP", "BM25", "PageRank"],
          url: "https://github.com/BachaniS/IR-project",
          detailedDescription: "An intelligent course retrieval engine for Northeastern's CS curriculum using hybrid information retrieval techniques. Ranks courses by textual relevance, curriculum structure, and metadata (prerequisites, hours, corequisites, level). BM25+PageRank achieves ~0.70 Precision@10 and >0.85 nDCG@10 across 15 manually annotated queries.",
          features: [
            "Hybrid retrieval: BM25, TF-IDF, Boolean search, PageRank",
            "Query expansion with abbreviation mapping",
            "Graduate-level filtering and lab detection",
            "Skill-based query support",
            "CLI and Tkinter GUI interfaces",
            "Evaluation: Precision@10 and nDCG@10 metrics"
          ],
          techStack: ["Python", "scikit-learn", "NLTK", "Tkinter", "Jupyter Notebook", "HTML"]
        },
        {
          id: "ai4",
          title: "LevelUP MLOps Data Pipeline",
          description: "End-to-end MLOps pipeline for fitness data with Airflow orchestration, DVC versioning, and bias monitoring.",
          tech: ["Python", "Apache Airflow", "DVC", "Docker"],
          url: "https://github.com/LEVELUP-ML/data-pipeline",
          detailedDescription: "End-to-end MLOps data pipeline for fitness and activity tracking data. Covers ingestion, cleaning, validation, stamina computation, bias monitoring, versioning, and alerting — orchestrated with Apache Airflow and versioned with DVC on GCS. Processes 5 data sources including 15.6M accelerometer rows and 101k food images.",
          features: [
            "Apache Airflow DAG orchestration for 5 data sources",
            "DVC data versioning with GCS remote storage",
            "Bias detection and monitoring (demographic slicing, class imbalance)",
            "Structured logging with SLA budgets and Slack alerts",
            "~130 tests across 6 modules",
            "Docker Compose deployment"
          ],
          techStack: ["Python", "Apache Airflow", "DVC", "Docker", "GCP", "Slack", "pytest"]
        }
      ]
    },
    {
      title: "Data Engineering & ETL",
      items: [
        {
          id: "de1",
          title: "LevelUP MLOps Data Pipeline",
          description: "End-to-end MLOps pipeline with Airflow orchestration, DVC versioning, and multi-source data ingestion.",
          tech: ["Python", "Apache Airflow", "DVC", "Docker"],
          url: "https://github.com/LEVELUP-ML/data-pipeline",
          detailedDescription: "End-to-end MLOps data pipeline for fitness and activity tracking data. Covers ingestion, cleaning, validation, stamina computation, bias monitoring, versioning, and alerting — orchestrated with Apache Airflow and versioned with DVC on GCS. Handles Kaggle weightlifting data (9,932 rows), UCI WISDM accelerometer data (15.6M rows), ETH Food-101 images (101k), and Firestore profiles.",
          features: [
            "Multi-source data ingestion (Kaggle, UCI, ETH, Firestore)",
            "Apache Airflow DAG orchestration",
            "Data cleaning and validation pipelines",
            "DVC versioning with GCS remote",
            "Bias monitoring and demographic slicing",
            "SLA budgets, Slack alerts, and structured logging"
          ],
          techStack: ["Python", "Apache Airflow", "DVC", "Docker", "GCP", "pytest"]
        },
        {
          id: "de2",
          title: "Data Story Analysis",
          description: "Data analysis project exploring economic trends using R and Python with statistical visualization.",
          tech: ["R", "Python", "Data Analysis"],
          url: "https://github.com/BachaniS/data-story",
          detailedDescription: "A data storytelling project that analyzes economic and retail trends across multiple years (2019-2021). Uses R Markdown for statistical analysis and visualization, with Python scripts for data conversion. Explores correlations in retail sales data and stimulus spending patterns.",
          features: [
            "Multi-year economic trend analysis (2019-2021)",
            "R Markdown statistical reports with visualizations",
            "Retail sales data analysis (mrtssales92-present)",
            "Stimulus spending timeline exploration",
            "Python data conversion utilities"
          ],
          techStack: ["R", "R Markdown", "Python", "Data Visualization", "Statistical Analysis"]
        },
        {
          id: "de3",
          title: "Course Retrieval System",
          description: "Indexed text engine with BM25, TF-IDF scoring, and metadata-enriched search over academic courses.",
          tech: ["Python", "NLP", "BM25"],
          url: "https://github.com/BachaniS/IR-project",
          detailedDescription: "An information retrieval system that indexes and searches Northeastern's CS course catalog using multiple scoring methods. Supports metadata-enriched search with prerequisites, credit hours, corequisites, and course level as ranking signals alongside textual relevance scoring.",
          features: [
            "Multi-method search scoring (BM25, TF-IDF, Boolean)",
            "PageRank-based curriculum structure analysis",
            "XML data ingestion and indexing",
            "Query expansion and abbreviation mapping",
            "Evaluation framework with precision and nDCG metrics"
          ],
          techStack: ["Python", "scikit-learn", "NLTK", "XML", "Jupyter Notebook"]
        }
      ]
    },
    {
      title: "Full-Stack Applications",
      items: [
        {
          id: "fs1",
          title: "Kanbas Learning Platform",
          description: "Full-stack Canvas-style learning management system with React frontend and Node.js backend.",
          tech: ["React", "TypeScript", "Node.js", "MongoDB"],
          url: "https://github.com/BachaniS/kanbas-react-web-app",
          detailedDescription: "A full-stack Canvas-style learning management system built with React and TypeScript on the frontend and Node.js on the backend. Features course management, assignments, quizzes, and user authentication. The application mirrors the functionality of a real LMS with a modern, responsive UI.",
          features: [
            "Course management and enrollment",
            "Assignment creation and submission",
            "Quiz and assessment system",
            "User authentication and roles",
            "Responsive React UI with TypeScript",
            "RESTful Node.js/Express backend"
          ],
          techStack: ["React", "TypeScript", "JavaScript", "CSS", "Node.js", "Express", "MongoDB"]
        },
        {
          id: "fs2",
          title: "Kanbas Backend Server",
          description: "RESTful API server powering the Kanbas learning platform with Express and MongoDB.",
          tech: ["Node.js", "Express", "JavaScript"],
          url: "https://github.com/BachaniS/kanbas-node-server-app",
          detailedDescription: "The backend infrastructure for the Kanbas Learning Management System. Built with Node.js and Express, it provides a comprehensive RESTful API for managing courses, users, assignments, and quizzes. Handles data persistence with MongoDB and implements authentication middleware.",
          features: [
            "RESTful API for LMS operations",
            "Course and enrollment management endpoints",
            "User authentication and session management",
            "Assignment and quiz CRUD operations",
            "MongoDB data persistence",
            "Middleware for authorization and validation"
          ],
          techStack: ["Node.js", "Express", "JavaScript", "MongoDB", "REST API"]
        },
        {
          id: "fs3",
          title: "SchedulEase",
          description: "AI-driven course planning app with FastAPI backend and interactive React frontend.",
          tech: ["FastAPI", "React", "TypeScript", "Python"],
          url: "https://github.com/BachaniS/FAI-project",
          detailedDescription: "An AI-driven course recommendation system with a FastAPI backend serving AI planning algorithms and a React/TypeScript frontend for interactive course exploration. Assists students in planning academics by recommending personalized, logically sequenced course paths using prerequisites, preferences, and historical data.",
          features: [
            "FastAPI backend with AI planning algorithms",
            "Interactive React/TypeScript frontend",
            "Prerequisite-aware course sequencing",
            "Personalized recommendation engine",
            "Student preference modeling"
          ],
          techStack: ["Python", "FastAPI", "React", "TypeScript", "CSS", "JavaScript"]
        },
        {
          id: "fs4",
          title: "LevelUP Wellness App",
          description: "Full-stack AI-powered wellness app with React Native mobile frontend and Python backend.",
          tech: ["JavaScript", "React Native", "Python", "Kotlin"],
          url: "https://github.com/LEVELUP-ML/levelup",
          detailedDescription: "A full-stack AI-powered wellness application with a React Native mobile frontend (supporting iOS via Swift and Android via Kotlin) and a Python backend. Gamifies personal development by converting health metrics into clear stats with personalized coaching across fitness, sleep, nutrition, and cognitive performance.",
          features: [
            "Cross-platform mobile app (iOS + Android)",
            "Health metrics tracking and gamification",
            "AI-powered personalized coaching",
            "Real-time stat visualization",
            "Python backend for ML processing"
          ],
          techStack: ["JavaScript", "React Native", "Python", "HTML", "Kotlin", "Swift"]
        }
      ]
    },
    {
      title: "Work Experience",
      items: [
        { id: "w1", title: "Cognizant - Software Engineer", description: "Data Platform Engineer owning Apple GBI Teradata-to-Snowflake migration. Moved 70+ TB of data and delivered 650+ Tableau workbooks.", tech: ["Snowflake", "Teradata", "SQL"] }
      ]
    },
    {
      title: "Education",
      items: [
        { id: "e1", title: "Northeastern University", description: "M.S. Computer Science (Expected May 2026), GPA: 3.91", tech: ["Boston, MA"] },
        { id: "e2", title: "Galgotias University", description: "B.Tech. Computer Science Engineering (AI & ML), GPA: 3.65", tech: ["Noida, India"] }
      ]
    },
    {
      title: "Core Skills",
      items: [
        { id: "s1", title: "Frontend", description: "React, React Native, TypeScript, JavaScript, HTML, CSS, TailwindCSS", tech: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS"] },
        { id: "s2", title: "Backend", description: "Python, Node.js, Express, FastAPI, Java, REST APIs", tech: ["Python", "Node.js", "Express", "FastAPI", "Java"] },
        { id: "s3", title: "Data & AI", description: "SQL, Snowflake, MongoDB, LanceDB, RAG, BM25, TF-IDF, NLP, Reinforcement Learning", tech: ["SQL", "MongoDB", "LanceDB", "NLP", "RL", "RAG"] },
        { id: "s4", title: "MLOps & Data Engineering", description: "Apache Airflow, DVC, Docker, GCP, TensorBoard, Streamlit, pytest", tech: ["Airflow", "DVC", "Docker", "GCP", "Streamlit"] },
        { id: "s5", title: "Tools & Platforms", description: "Git, Selenium, Pygame, OpenAI Gym, Jupyter, R, Kotlin, Swift", tech: ["Git", "Selenium", "Pygame", "OpenAI Gym", "Jupyter", "R"] }
      ]
    }
  ] as Category[]
};
