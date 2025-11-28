// This file stores all offline Q&A data for the chat bot

export const offlineData = [
  // 1–10 Greetings
  { question: "hello", answer: "Hi! How can I help you today?" },
  { question: "hi", answer: "Hello there! How can I assist you?" },
  { question: "hey", answer: "Hey! How's your study going?" },
  { question: "good morning", answer: "Good morning! Ready to learn today?" },
  { question: "good evening", answer: "Good evening! How can I help?" },

  // Attendance (basic)
  { question: "attendance", answer: "You can mark your attendance from the dashboard." },
  { question: "mark attendance", answer: "Click the 'Mark Attendance' button on your dashboard." },
  { question: "how many classes attended", answer: "Check your attendance card on the dashboard." },

  // Exams (basic)
  { question: "exam", answer: "You can take the exam from the Take Exam section." },
  { question: "start exam", answer: "Go to Dashboard > Take Exam to begin." },
  { question: "submit exam", answer: "Click the 'Submit Exam' button once you are done." },
  { question: "exam result", answer: "Results will be available after submission in your profile." },

  // Puzzles
  { question: "solve puzzle", answer: "You can solve puzzles from the Solve Puzzle page." },
  { question: "puzzle", answer: "Head to the Solve Puzzle section for fun challenges." },
  { question: "play game", answer: "Try the Solve Puzzle option in your dashboard." },

  // PDFs & Learning (basic)
  { question: "pdf", answer: "You can download PDFs from the Subjects section." },
  { question: "download book", answer: "Go to Subjects > Choose Subject > Download PDF." },
  { question: "maths pdf", answer: "Math PDFs are available in the Math subject section." },
  { question: "science notes", answer: "Check the Science subject section for notes and PDFs." },
  { question: "english grammar", answer: "English grammar notes are under English > Chapter 1." },

  // General School Info (basic)
  { question: "timetable", answer: "Your timetable is available in the dashboard or from your teacher." },
  { question: "subjects", answer: "We offer Math, Science, English, Social, Hindi, and Kannada." },
  { question: "help", answer: "You can ask me about attendance, exams, PDFs, or puzzles!" },

  // Motivational / Fun (basic)
  { question: "motivate me", answer: "Believe in yourself! Every small step counts towards success 💪." },
  { question: "tell me a quote", answer: "“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela" },
  { question: "who are you", answer: "I’m EduWeb ChatBot 🤖 here to assist your learning journey." },
  { question: "joke", answer: "Why did the math book look sad? Because it had too many problems! 😄" },

  // Goodbye & Thanks
  { question: "bye", answer: "Goodbye! Have a great day!" },
  { question: "good night", answer: "Good night! Sweet dreams and see you tomorrow 🌙." },
  { question: "thanks", answer: "You're welcome! Happy to help 😊." },
  { question: "thank you", answer: "No problem! Anytime 👍." },
  { question: "2+2", answer: "4" },

  // 31–40 Extended greetings & bot info
  { question: "hello", answer: "Hi! How can I help you today?" },
  { question: "hi", answer: "Hello there! How can I assist you?" },
  { question: "hey", answer: "Hey! How's your study going?" },
  { question: "good morning", answer: "Good morning! Ready to learn today?" },
  { question: "good afternoon", answer: "Good afternoon! Need any help?" },
  { question: "good evening", answer: "Good evening! How can I help?" },
  { question: "who are you", answer: "I’m EduWeb ChatBot 🤖 here to assist your learning journey." },
  { question: "your name", answer: "I’m EduWeb Bot — your friendly study assistant!" },
  { question: "who made you", answer: "I was built by the EduWeb platform to support learners." },
  { question: "how are you", answer: "I’m just code, but I’m ready to help — how are you?" },

  // 41–60 Attendance & Dashboard (detailed)
  { question: "attendance", answer: "You can mark your attendance from the dashboard." },
  { question: "mark attendance", answer: "Click the 'Mark Attendance' button on your dashboard." },
  { question: "how many classes attended", answer: "Check your attendance card on the dashboard to see attended classes." },
  { question: "attendance percentage", answer: "Your attendance percentage is computed from attended/total classes shown on your profile." },
  { question: "missed classes", answer: "Contact your teacher to record or excuse missed classes." },
  { question: "late attendance", answer: "Late attendance policy differs per institute; check your course rules." },
  { question: "today date", answer: (new Date()).toLocaleDateString() },
  { question: "today", answer: (new Date()).toLocaleDateString() },
  { question: "dashboard", answer: "The dashboard shows modules, attendance, exams, and latest notices." },
  { question: "where is my dashboard", answer: "Click 'Dashboard' in the main menu after login to access your dashboard." },

  // 61–80 Exams & Submissions (detailed)
  { question: "exam", answer: "You can take the exam from the Take Exam section in your dashboard." },
  { question: "start exam", answer: "Go to Dashboard > Take Exam to begin your test." },
  { question: "submit exam", answer: "Click the 'Submit Exam' button once you finish answering all questions." },
  { question: "exam result", answer: "Results will be available in your profile after grading." },
  { question: "exam duration", answer: "Exam duration will be displayed on the exam start page." },
  { question: "exam rules", answer: "Follow the on-screen instructions and time limits during the exam." },
  { question: "retake exam", answer: "Retake policies are set by your instructor — check the course guidelines." },
  { question: "exam help", answer: "If you have exam issues, contact your instructor or tech support." },
  { question: "practice test", answer: "Use mock tests or past papers provided in the Subjects section." },
  { question: "cheating policy", answer: "Academic integrity is important. Check your institution's policy." },

  // 81–110 Subjects & PDFs (detailed)
  { question: "subjects", answer: "We offer Math, Science, English, Social, Hindi, Kannada and Computer Science." },
  { question: "download pdf", answer: "Go to Subjects > Choose Subject > Download PDF." },
  { question: "math pdf", answer: "Math PDFs are listed under the Math subject page." },
  { question: "science notes", answer: "Science notes are available under the Science subject section." },
  { question: "english notes", answer: "English grammar notes are under English > Chapter 1." },
  { question: "where are notes", answer: "Notes are stored inside each subject's resource section on the dashboard." },
  { question: "upload assignment", answer: "Use the Assignments section in your course to upload files." },
  { question: "download book", answer: "Books and PDFs can be downloaded from the Subjects section." },
  { question: "video lessons", answer: "Video lessons are available in each module if provided by the teacher." },
  { question: "syllabus", answer: "Syllabus for each subject is visible in the subject overview page." },

  // 111–140 Technology Basics
  { question: "html tag for javascript", answer: "Use the <script> tag to include JavaScript in HTML." },
  { question: "what is css", answer: "CSS (Cascading Style Sheets) is used to style HTML elements." },
  { question: "what is html", answer: "HTML (HyperText Markup Language) structures content on the web." },
  { question: "what is javascript", answer: "JavaScript is a programming language for web interactivity." },
  { question: "what is react", answer: "React is a JavaScript library for building user interfaces." },
  { question: "what is nodejs", answer: "Node.js lets you run JavaScript on the server." },
  { question: "what is npm", answer: "npm is the Node package manager used for installing JS libraries." },
  { question: "what is git", answer: "Git is a version control system for tracking code changes." },
  { question: "git init", answer: "Run 'git init' to initialize a new Git repository." },
  { question: "git commit", answer: "Use 'git commit -m \"message\"' to save staged changes." },

  // 141–170 Web & APIs
  { question: "http status 200", answer: "200 means OK — the request succeeded." },
  { question: "http status 404", answer: "404 means Not Found — the requested resource doesn't exist." },
  { question: "http status 500", answer: "500 means Internal Server Error — server encountered an error." },
  { question: "what is api", answer: "API (Application Programming Interface) allows programs to communicate." },
  { question: "rest api", answer: "REST is an architectural style for building stateless APIs over HTTP." },
  { question: "json format", answer: "JSON is a lightweight data-interchange format using key-value pairs." },
  { question: "how to fetch", answer: "Use fetch() or axios.get() in JavaScript to call APIs." },
  { question: "cors error", answer: "CORS errors occur when browser blocks cross-origin requests; enable CORS on the server." },
  { question: "what is localhost", answer: "localhost refers to your local machine, usually accessible via http://localhost:PORT." },
  { question: "port 3000", answer: "Port 3000 is a common default for React development servers." },

  // 171–200 Databases & Backend
  { question: "sql vs nosql", answer: "SQL databases are relational; NoSQL databases are document/key-value/graph stores." },
  { question: "what is mongodb", answer: "MongoDB is a popular NoSQL document database." },
  { question: "what is mysql", answer: "MySQL is an open-source relational database using SQL." },
  { question: "connect to database", answer: "Use a driver or ORM (e.g., mongoose for MongoDB) to connect from backend." },
  { question: "what is express", answer: "Express is a minimal Node.js web framework for building APIs." },
  { question: "environment variables", answer: "Store secrets in environment variables (.env) and don't commit them to version control." },
  { question: "what is docker", answer: "Docker packages applications into portable containers." },
  { question: "what is jwt", answer: "JWT (JSON Web Token) is a compact token format used for authenticating users." },
  { question: "what is ssl", answer: "SSL/TLS secures communication over the internet (HTTPS)." },
  { question: "how to deploy", answer: "Deploy to cloud platforms like Vercel, Netlify, Heroku, or AWS depending on app type." },

  // 201–230 Computer Science Fundamentals
  { question: "binary search complexity", answer: "Binary search has time complexity O(log n)." },
  { question: "bubble sort complexity", answer: "Bubble sort worst-case is O(n²)." },
  { question: "what is algorithm", answer: "An algorithm is a step-by-step procedure to solve a problem." },
  { question: "what is data structure", answer: "Data structures organize and store data (arrays, lists, trees, maps)." },
  { question: "stack vs queue", answer: "Stack is LIFO; Queue is FIFO." },
  { question: "what is recursion", answer: "Recursion is when a function calls itself to solve subproblems." },
  { question: "what is dp", answer: "Dynamic Programming (DP) solves problems by combining solutions to subproblems." },
  { question: "what is oop", answer: "OOP (Object-Oriented Programming) uses objects and classes to structure code." },
  { question: "what is api key", answer: "An API key is a token used to identify and authorize API requests." },
  { question: "what is localhost 8000", answer: "Port 8000 is commonly used for development servers (e.g., Django default)." },

  // 231–260 Math Helpers & Conversions
  { question: "2+2", answer: "4" },
  { question: "5*6", answer: "30" },
  { question: "10/2", answer: "5" },
  { question: "square root of 16", answer: "4" },
  { question: "percentage formula", answer: "Percentage = (part / total) × 100" },
  { question: "area of circle formula", answer: "Area = π × r²" },
  { question: "perimeter of rectangle", answer: "Perimeter = 2 × (length + width)" },
  { question: "convert cm to m", answer: "Divide centimeters by 100 to get meters." },
  { question: "convert km to m", answer: "Multiply kilometers by 1000 to get meters." },
  { question: "what is pi", answer: "π is approximately 3.14159 — ratio of circumference to diameter." },

  // 261–290 Science & GK
  { question: "what is gravity", answer: "Gravity is the force that attracts objects toward each other; on Earth it's ~9.8 m/s²." },
  { question: "water formula", answer: "Water is H₂O — two hydrogen atoms and one oxygen atom." },
  { question: "largest planet", answer: "Jupiter is the largest planet in our Solar System." },
  { question: "largest ocean", answer: "The Pacific Ocean is the largest ocean on Earth." },
  { question: "capital of india", answer: "New Delhi is the capital of India." },
  { question: "who discovered penicillin", answer: "Alexander Fleming discovered penicillin in 1928." },
  { question: "who discovered electricity", answer: "Electricity was studied by many; Benjamin Franklin popularized experiments, but it's the result of many contributors." },
  { question: "speed of light", answer: "Speed of light in vacuum is ~299,792 km/s." },
  { question: "what is photosynthesis", answer: "Photosynthesis is how plants convert sunlight, CO₂, and water into glucose and oxygen." },
  { question: "what is atom", answer: "An atom is the basic unit of matter, made of protons, neutrons, and electrons." },

  // 291–320 History & Geography
  { question: "who was mahatma gandhi", answer: "Mahatma Gandhi was a leader of Indian independence using non-violent civil disobedience." },
  { question: "when was independence day india", answer: "India gained independence on August 15, 1947." },
  { question: "who discovered america", answer: "Christopher Columbus reached the Americas in 1492 (though indigenous peoples lived there long before)." },
  { question: "what is the longest river", answer: "The Nile or Amazon are contenders; many sources list the Nile as longest." },
  { question: "mount everest height", answer: "Mount Everest's height is about 8,848.86 meters (29,031.7 ft)." },
  { question: "capital of france", answer: "Paris is the capital of France." },
  { question: "capital of usa", answer: "Washington, D.C. is the capital of the United States." },
  { question: "which continent is india in", answer: "India is in the continent of Asia." },
  { question: "what is equator", answer: "The equator is the imaginary line at 0° latitude dividing Earth into northern and southern hemispheres." },
  { question: "what is latitude", answer: "Latitude measures north-south position relative to the equator." },

  // 321–350 Motivation & Study Tips
  { question: "motivate me", answer: "Believe in yourself! Every small step counts towards success 💪." },
  { question: "study tips", answer: "Break tasks into small chunks, use active recall, practice with past papers, and rest well." },
  { question: "how to focus", answer: "Minimize distractions, use short focused sessions (Pomodoro), and set clear goals." },
  { question: "exam preparation", answer: "Make a revision plan, practice problems, and revise weaker topics more frequently." },
  { question: "time management", answer: "Prioritize tasks, make a schedule, and limit multitasking for better productivity." },
  { question: "how to learn coding", answer: "Build small projects, practice daily, read docs, and learn debugging skills." },
  { question: "improve memory", answer: "Use spaced repetition, sleep well, and practice active recall." },
  { question: "confidence tips", answer: "Prepare thoroughly, start small, and celebrate progress to build confidence." },
  { question: "relax before exam", answer: "Do light revision, breathe deeply, and get a good night's sleep before the exam." },
  { question: "best way to revise", answer: "Teach what you learned to someone else — it reinforces understanding." },

  // 351–380 Jokes & Fun
  { question: "joke", answer: "Why did the math book look sad? Because it had too many problems! 😄" },
  { question: "tell me a joke", answer: "Why did the computer show up at work late? It had a hard drive! 😂" },
  { question: "fun fact", answer: "Honey never spoils — edible honey has been found in ancient tombs." },
  { question: "riddle", answer: "What has keys but can't open locks? Answer: keyboard." },
  { question: "trivia", answer: "Bananas are berries, but strawberries are not!" },
  { question: "interesting fact", answer: "Octopuses have three hearts." },
  { question: "quote", answer: "Education is the passport to the future — Malcolm X." },
  { question: "happy", answer: "That's great — keep up the positive energy! 😊" },
  { question: "sad", answer: "I'm sorry to hear that. If you want, tell me what's bothering you." },
  { question: "encourage", answer: "Small progress each day adds up to big results — keep going!" },

  // 381–410 Coding practice & interview
  { question: "leetcode practice", answer: "Start with easy problems, learn two-pointer and hashmap patterns, then progress." },
  { question: "prepare for interview", answer: "Practice data structures, system design basics, and mock interviews." },
  { question: "common dsa topics", answer: "Arrays, strings, trees, graphs, hashmaps, dynamic programming, and sorting." },
  { question: "what is big o", answer: "Big O notation describes algorithm time or space complexity in worst-case terms." },
  { question: "binary tree traversal", answer: "Inorder, preorder, and postorder are DFS traversal methods." },
  { question: "bfs vs dfs", answer: "BFS explores level by level; DFS explores depth-first." },
  { question: "stack implementation", answer: "Use an array with push/pop or a linked list for stack operations." },
  { question: "queue implementation", answer: "Use an array with pointers or a linked list for enqueue/dequeue." },
  { question: "merge sort complexity", answer: "Merge sort has time complexity O(n log n)." },
  { question: "quick sort complexity", answer: "Average O(n log n), worst-case O(n²) if pivot selection is poor." },

  // 411–440 Security & Best Practices
  { question: "password best practice", answer: "Use a long password, include different character types and use a password manager." },
  { question: "what is https", answer: "HTTPS is HTTP over TLS/SSL to secure data in transit." },
  { question: "sql injection", answer: "Sanitize inputs and use prepared statements to prevent SQL injection." },
  { question: "xss prevention", answer: "Escape output and use Content Security Policy (CSP) to prevent XSS." },
  { question: "secure api", answer: "Use authentication, rate-limiting, input validation, and HTTPS to secure APIs." },
  { question: "two factor authentication", answer: "2FA adds an extra verification step like SMS, email, or authenticator apps." },
  { question: "backup data", answer: "Regularly back up data and keep copies in multiple locations." },
  { question: "logging", answer: "Log important events safely and avoid storing sensitive info in logs." },
  { question: "code reviews", answer: "Code reviews improve quality, catch bugs, and spread knowledge." },
  { question: "testing", answer: "Write unit tests and integration tests to ensure code behaves as expected." },

  // 441–470 Productivity & Tools
  { question: "pomodoro", answer: "Pomodoro uses 25-minute focused sessions followed by short breaks." },
  { question: "note taking", answer: "Use bullet notes, highlight key points, and review regularly." },
  { question: "best editor", answer: "VS Code is a popular editor with many extensions for development." },
  { question: "terminal commands", answer: "Learn basic terminal commands: ls, cd, mkdir, rm, cp, mv, cat." },
  { question: "vs code tips", answer: "Use extensions, keyboard shortcuts, and workspaces to boost productivity." },
  { question: "browser devtools", answer: "Use devtools to inspect DOM, debug JS, and profile performance." },
  { question: "online courses", answer: "Platforms like Coursera, edX, and Udemy offer many useful courses." },
  { question: "certificate value", answer: "Certificates show learning but hands-on projects often matter more to employers." },
  { question: "build portfolio", answer: "Show 3–5 strong projects with clear README and deployed demos." },
  { question: "open source", answer: "Contributing to open source improves skills and demonstrates collaboration." },

  // 471–500 Common Errors & Fixes
  { question: "npm install error", answer: "Try clearing npm cache, delete node_modules and run npm install again." },
  { question: "module not found", answer: "Ensure package is installed and import path is correct." },
  { question: "cannot read property of undefined", answer: "Check that the object exists before accessing its property." },
  { question: "react setstate async", answer: "State updates are async; use callback or useEffect to act after changes." },
  { question: "cors error fix", answer: "Enable CORS on the server or use a proxy during development." },
  { question: "port already in use", answer: "Kill the process using that port or use a different port for your server." },
  { question: "500 server error fix", answer: "Check server logs to find the root cause and fix the server-side code." },
  { question: "syntax error", answer: "Check your code syntax and missing/extra brackets or commas." },
  { question: "react devtools", answer: "Use React DevTools extension to inspect component state and props." },
  { question: "source map error", answer: "Source map warnings are usually safe for production builds, but check build config." },

  // 501–520 Learning Paths & Careers
  { question: "learn web dev", answer: "Start with HTML, CSS, JS, then learn a frontend framework like React and backend basics." },
  { question: "learn data science", answer: "Learn Python, statistics, libraries like pandas, and basics of ML." },
  { question: "how to get internship", answer: "Build projects, apply actively, network, and prepare a good resume." },
  { question: "resume tips", answer: "Keep it concise, list projects with impact, and tailor to the job." },
  { question: "coding bootcamp", answer: "Bootcamps accelerate learning but practice and projects are essential afterward." },
  { question: "freelancing", answer: "Start small, build reputation, and deliver quality work to get repeat clients." },
  { question: "salary expectation", answer: "Salary varies by region, role, and experience; research local averages." },
  { question: "interview preparation", answer: "Practice algorithms, system design basics, and behavioral interview questions." },
  { question: "networking tips", answer: "Attend meetups, connect on LinkedIn, and contribute to communities." },
  { question: "portfolio hosting", answer: "Host projects on GitHub and deploy demos to Netlify/Vercel for easy sharing." },

  // 521–530 Advanced Concepts (short)
  { question: "what is machine learning", answer: "Machine learning lets systems learn patterns from data to make predictions." },
  { question: "what is deep learning", answer: "Deep learning uses neural networks with many layers to model complex patterns." },
  { question: "what is blockchain", answer: "Blockchain is a distributed ledger that records transactions across many nodes." },
  { question: "what is iot", answer: "IoT (Internet of Things) connects physical devices to the internet for data exchange." },
  { question: "what is cloud computing", answer: "Cloud computing delivers computing services over the internet (AWS, GCP, Azure)." },
  { question: "what is virtualization", answer: "Virtualization runs multiple virtual machines on a physical host using hypervisors." },
  { question: "what is edge computing", answer: "Edge computing processes data close to the source to reduce latency." },
  { question: "what is dns", answer: "DNS translates human-friendly domain names into IP addresses." },
  { question: "what is ip address", answer: "An IP address is a numerical label assigned to devices on a network." },
  { question: "what is subnet", answer: "Subnetting divides networks into smaller logical segments for organization and security." },

  // 531–540 Mini Quizzes & Practice Prompts
  { question: "quiz me math", answer: "Try: What is 12 × 9? (Answer: 108)" },
  { question: "quiz me coding", answer: "Reverse a string in your preferred language as practice." },
  { question: "small coding challenge", answer: "Write a function to check if a number is prime." },
  { question: "practice problem", answer: "Given an array, find the two numbers that add up to a target (two-sum)." },
  { question: "explain bubble sort", answer: "Bubble sort repeatedly swaps adjacent elements if they are in the wrong order." },
  { question: "what is two-sum", answer: "Two-sum finds pair of numbers adding to a target — use a hashmap for O(n) solution." },
  { question: "reverse linked list", answer: "Iteratively change next pointers or use recursion to reverse nodes." },
  { question: "count vowels", answer: "Iterate string and count characters in 'aeiou' (case-insensitive)." },
  { question: "fibonacci sequence", answer: "Sequence: 0,1,1,2,3,5,8 — each is sum of previous two." },
  { question: "check palindrome", answer: "Compare string with its reversed version or use two-pointer technique." },

  // 541–560 Quick Reference Commands
  { question: "linux list files", answer: "Use 'ls' to list directory contents in Linux." },
  { question: "linux current dir", answer: "Use 'pwd' to print current working directory." },
  { question: "create folder", answer: "Use 'mkdir foldername' to create a new directory." },
  { question: "remove file", answer: "Use 'rm filename' to delete a file (careful: irreversible)." },
  { question: "copy file", answer: "Use 'cp source dest' to copy a file in Linux." },
  { question: "move file", answer: "Use 'mv source dest' to move or rename a file." },
  { question: "display file", answer: "Use 'cat file' or 'less file' to view file contents." },
  { question: "check node version", answer: "Run 'node -v' to see installed Node.js version." },
  { question: "check npm version", answer: "Run 'npm -v' to see npm version." },
  { question: "start react app", answer: "Run 'npm start' or 'yarn start' in a create-react-app project." },

  // 561–580 Misc Utilities & Conversion Helpers
  { question: "celsius to fahrenheit", answer: "°F = (°C × 9/5) + 32" },
  { question: "fahrenheit to celsius", answer: "°C = (°F − 32) × 5/9" },
  { question: "km to miles", answer: "Multiply kilometers by 0.621371 to get miles." },
  { question: "mb to gb", answer: "Divide megabytes (MB) by 1024 to get gigabytes (GB)." },
  { question: "what is uptime", answer: "Uptime shows how long a system has been running without restart." },
  { question: "what is cron", answer: "Cron schedules recurring jobs on Unix-like systems." },
  { question: "what is ssh", answer: "SSH (Secure Shell) is used to securely connect to remote servers." },
  { question: "what is scp", answer: "SCP securely copies files between hosts using SSH." },
  { question: "what is rsync", answer: "rsync synchronizes files efficiently between locations." },
  { question: "what is tmux", answer: "tmux is a terminal multiplexer to run multiple sessions in one terminal." },

  // 581–600 Final helpful tips (short)
  { question: "daily routine", answer: "Set goals, study in blocks, take breaks, exercise, and sleep well." },
  { question: "project idea web", answer: "Build a personal portfolio, blog, or small e-commerce demo." },
  { question: "project idea ml", answer: "Create an image classifier or a sentiment analyzer with sample data." },
  { question: "how to ask question", answer: "Be clear, show what you tried, and include error messages for faster help." },
  { question: "where to practice", answer: "Use platforms like LeetCode, HackerRank, CodeChef, and Codeforces." },
  { question: "what to build", answer: "Build projects that solve real problems; demonstrate learning and impact." },
  { question: "how to debug", answer: "Reproduce the issue, add logs, isolate minimal failing code, and test fixes." },
  { question: "read documentation", answer: "Docs are primary source — read official docs and examples first." },
  { question: "ask for help", answer: "Share code, steps to reproduce, and what you expected vs actual behavior." },
  { question: "good luck", answer: "Good luck! You've got this — keep learning and building. 🚀" },

  // 601–620 Study & Exam Habits (Classes 1–10)
  {
    question: "how to improve reading",
    answer: "Use your finger to track words, read aloud slowly, and try simple storybooks suitable for your class."
  },
  {
    question: "how to improve spelling",
    answer: "Write difficult words three times, use them in sentences, and revise them every few days to remember."
  },
  {
    question: "how to remember answers",
    answer: "Understand the concept first, make short points, create mind maps, and revise using active recall without looking at the book."
  },
  {
    question: "how to manage homework",
    answer: "First list all homework, do the hardest subject first, avoid mobile distractions, and take a 5-minute break between tasks."
  },
  {
    question: "how to balance study and play",
    answer: "Fix a routine: finish homework and 1–2 hours of study, then enjoy playtime without guilt."
  },
  {
    question: "how to avoid exam fear",
    answer: "Prepare a little every day, solve sample papers, sleep well before the exam, and do deep breathing if you feel nervous."
  },
  {
    question: "how parents can help in studies",
    answer: "Parents can help by creating a quiet study space, asking what was taught in school, and encouraging without pressure."
  },
  {
    question: "daily routine for class 10 student",
    answer: "Wake up early, attend school, revise 2 subjects in the evening, solve one sample paper per week, and sleep on time."
  },
  {
    question: "healthy habits for students",
    answer: "Eat home-made food, drink enough water, sleep 7–8 hours, limit screen time, and play or exercise daily."
  },
  {
    question: "how to prepare for unit test",
    answer: "Check the syllabus, revise all chapters once, practice important questions, and do a quick revision on the previous day."
  },
  {
    question: "how to prepare for final exam",
    answer: "Start at least 1–2 months early, complete the syllabus, then spend time only on revision and solving question papers."
  },
  {
    question: "how to concentrate while studying",
    answer: "Keep phone away, sit at a table, study in 25-minute focus blocks, and take short breaks to stay fresh."
  },
  {
    question: "how to make timetable for study",
    answer: "Write subjects in a notebook, give more time to weak subjects, add breaks, and follow the timetable daily."
  },
  {
    question: "how to improve marks",
    answer: "Attend classes regularly, complete notes, revise daily, ask doubts, and learn from your mistakes in tests."
  },

  // 621–640 Support for Classes 1–10 (Study & Habits)
  {
    question: "study tips for class 1",
    answer: "For class 1, keep study time short and fun. Use pictures, reading aloud, and simple games to learn letters and numbers."
  },
  {
    question: "study tips for class 2",
    answer: "For class 2, revise school lessons daily for 20–30 minutes, read storybooks, and practice writing neatly."
  },
  {
    question: "study tips for class 3",
    answer: "For class 3, make a small timetable, read chapters aloud, solve simple sums daily, and ask doubts in class."
  },
  {
    question: "study tips for class 4",
    answer: "For class 4, practice multiplication tables, read textbooks carefully, and write short notes for each lesson."
  },
  {
    question: "study tips for class 5",
    answer: "For class 5, revise daily, practice math problems, read English stories, and prepare questions from each chapter."
  },
  {
    question: "study tips for class 6",
    answer: "For class 6, start using a proper timetable, practice math daily, and make point-wise notes for Science and Social."
  },
  {
    question: "study tips for class 7",
    answer: "For class 7, focus on understanding concepts, practice diagrams, and solve extra questions from guides or workbooks."
  },
  {
    question: "study tips for class 8",
    answer: "For class 8, revise every weekend, solve previous question papers, and discuss tough topics with friends or teachers."
  },
  {
    question: "study tips for class 9",
    answer: "For class 9, treat it like preparation for 10th—make strong basics in Math, Science, and English, and avoid last-minute study."
  },
  {
    question: "study tips for class 10",
    answer: "For class 10, follow a fixed timetable, finish NCERT first, solve past papers, and do weekly mock tests for practice."
  },
  {
    question: "how to improve handwriting",
    answer: "Write slowly and neatly, maintain equal spacing, use four-line books if needed, and practice one page daily."
  },

  // 641–660 10th Standard Specific Info
  {
    question: "10th standard subjects",
    answer: "10th standard students study Math, Science, English, Social Science, Hindi/Kannada, and Computer Science."
  },
  {
    question: "10th standard maths chapters",
    answer: "10th standard Math includes Real Numbers, Polynomials, Triangles, Trigonometry, Statistics, and Probability."
  },
  {
    question: "10th science chapters",
    answer: "10th Science includes Chemical Reactions, Acids & Bases, Metals & Non-metals, Life Processes, Electricity, and Light."
  },
  {
    question: "10th board exam tips",
    answer: "Revise NCERT thoroughly, solve previous year papers, and practice sample papers regularly."
  },
  {
    question: "10th best study schedule",
    answer: "Study 2 hours in the morning, 3 hours in the evening, revise daily, and take weekly mock tests."
  },
  {
    question: "10th board passing marks",
    answer: "Students must score at least 33% in each subject to pass the 10th board exams."
  },
  {
    question: "10th exam pattern",
    answer: "Most boards follow objective + subjective questions with a total of 100 marks per subject."
  },
  {
    question: "10th board important chapters",
    answer: "Important chapters include Trigonometry, Metals & Non-metals, Life Processes, and Chemical Reactions."
  },
  {
    question: "10th board motivation",
    answer: "Stay consistent! 10th boards are important but not everything—focus on understanding, not memorizing."
  },
  {
    question: "10th board preparation",
    answer: "Solve sample papers, revise formulas, practice diagrams, and manage your time properly."
  },
  {
    question: "how to score 90 in 10th",
    answer: "Revise daily, practice NCERT questions repeatedly, solve previous papers, and maintain clean notes."
  },
  {
    question: "10th board sample papers",
    answer: "Sample papers are available on your school portal or official board website."
  },
  {
    question: "10th board timetable",
    answer: "The board exam timetable is usually released 1–2 months before exams on the official board website."
  },
  {
    question: "how many hours should a 10th student study",
    answer: "A 10th student should study 4–5 focused hours per day with breaks."
  },
  {
    question: "10th class career options",
    answer: "After 10th, students can choose Science, Commerce, Arts, ITI, Diploma, or Skill Courses."
  },
  {
    question: "10th final exam",
    answer: "Final board exams usually take place between February and April depending on the board."
  },
  {
    question: "10th standard difficulty",
    answer: "10th is manageable with consistent practice. Focus on basics and NCERT exercises."
  },
  {
    question: "10th important formulas",
    answer: "Key formulas include Trigonometric Ratios, Area formulas, Statistics mean/median/mode, and Quadratic equations."
  },
  {
    question: "10th science diagrams",
    answer: "Important diagrams: Human digestive system, Human heart, Electric circuit, Magnetic field lines."
  },
  {
    question: "10th english grammar",
    answer: "Important grammar topics include Tenses, Active-Passive Voice, Direct-Indirect Speech, and Letter Writing."
  },

  // 661–680 Study Roadmaps & Exam Strategies
  {
    question: "exam roadmap",
    answer: "Here is a simple exam roadmap: 1) Understand the syllabus. 2) Make a study timetable. 3) Complete chapters from easy to difficult. 4) Make short notes. 5) Solve exercise questions. 6) Revise weekly. 7) Write mock tests. 8) In the last 5 days, only revise important points."
  },
  {
    question: "exam preparation",
    answer: "Start with the syllabus, make a timetable, finish NCERT first, revise daily, and solve previous question papers. Write mock tests in the last 3 weeks."
  },
  {
    question: "how to prepare for exam",
    answer: "Begin early, study a little every day, make notes, practice sums, revise chapters weekly, solve sample papers, and avoid last-minute learning."
  },
  {
    question: "study roadmap",
    answer: "Daily routine: 1 hour Math, 1 hour Science, 45 minutes Social Science, 30 minutes English or Language, and 30 minutes revision. Follow consistently for good results."
  },
  {
    question: "roadmap for class 1 to 5",
    answer: "For classes 1–5: Read daily for 20–30 minutes, practice handwriting, revise school lessons, solve simple sums, and complete homework on time."
  },
  {
    question: "roadmap for class 6 to 8",
    answer: "For classes 6–8: Make a weekly study plan, practice Math daily, revise Science diagrams, read Social chapters, solve workbook questions, and review notes every weekend."
  },
  {
    question: "roadmap for class 9",
    answer: "For class 9: Strengthen basics, read NCERT carefully, make chapter-wise notes, solve numerical problems, and revise weekly to prepare well for class 10."
  },
  {
    question: "roadmap for class 10",
    answer: "For class 10: Finish NCERT textbooks, make notes, solve previous papers, take weekly mock tests, and revise formulas, diagrams, and important answers regularly."
  },
  {
    question: "how to revise",
    answer: "Revise using short notes, mind maps, and repeated practice. Revise each chapter at least 3 times before exams and solve sample papers for practice."
  },
  {
    question: "weekly study plan",
    answer: "Weekly plan: Revise 1 Math chapter, 1 Science chapter, 1 Social chapter, and practice 20–30 English grammar questions. Complete all homework and review mistakes."
  },
  {
    question: "mock test roadmap",
    answer: "Take mock tests every 2–3 days in the last month before exams. Time yourself, avoid distractions, and check your mistakes after each test."
  },
  {
    question: "last minute tips",
    answer: "In the last 5 days, do only revision. Avoid learning new topics. Revise notes, formulas, diagrams, and important questions. Sleep well and stay calm."
  },
  {
    question: "exam day tips",
    answer: "Read the question paper carefully, answer known questions first, maintain neat handwriting, manage time well, and keep 10 minutes for checking at the end."
  }
];
