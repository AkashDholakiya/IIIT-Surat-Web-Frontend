import head from "../assets/images/example.png";
const clubData = {
  Cultural: {
    Saras:{
      name: "Saras",
      title: "Student Artistic Recreational Activities Society",
      link:`${head}`,
      lead: "Nilesh Kumar & Dev Val", // Replace with actual lead if different
      content: `Saras stands for "Student Artistic Recreational Activities Society".

It is the flagship body under the Cultural Club of IIIT Surat, dedicated to fostering a rich and vibrant cultural environment on campus. Saras promotes and nurtures a diverse range of artistic expressions—spanning music, dance, drama, literature, and visual arts.

The society plays a pivotal role in:
- Organizing major cultural events and annual festivals like *Prakriti*
- Encouraging and showcasing student talent
- Coordinating inter-college cultural representations

SARAS serves as the heart of all cultural and artistic endeavors within the institute. The club aims to celebrate diversity, creativity, and talent by organizing a variety of events throughout the academic year.

Key Features:
- Platform for artistic, literary, and performing arts skills
- Home to multiple sub-clubs (dance, music, drama, literature, fine arts)
- Fosters community beyond academics
- Develops confidence and builds lifelong memories`,
      events: [
        "Annual Cultural Fest - Prakriti",
        "Talent Nights & Cultural Showcases",
        "Traditional Day & Festive Celebrations",
        "Inter-College Competitions and Representations"
      ],
      gallery: [
        "saras_event_1.jpg",
        "saras_dance.jpg",
        "prakriti_stage.jpg"
      ],
      handles: {
        instagram: "https://www.instagram.com/saras.iiitsurat/",
        linkedin: "https://www.linkedin.com/company/saras-iiit-surat/"
      },
    },
    Abstract: {
      title: "Abstract (Art and Design Club)",
      link:`${head}`,
      lead: "Shruti Paulastye & Anisha Sodani (ART), Sarthak Kumar & Kanvi Makwana (DESIGN)",
      content: `Abstract is the creative sanctuary of IIIT Surat for artists and designers. We believe that art is not just a skill but a way of expression. Abstract encourages students to explore their imagination and bring it to life through sketching, painting, digital art, graphic design, and installations.

Our club regularly organizes:
• Art Exhibitions and Competitions
• Digital and Traditional Art Workshops
• Collaborative Design Projects
• Poster Making for Campus Events

Whether you're a novice or a seasoned creator, Abstract is your place to innovate, express, and collaborate.`,
      events: [
        "Art Exhibitions and Competitions",
        "Digital and Traditional Art Workshops",
        "Collaborative Design Projects",
        "Poster Designing for College Events"
      ],
      gallery: [
        "abstract_artwork_1.jpg",
        "abstract_workshop.jpg",
        "design_collab.jpg"
      ],
      handles: {
        instagram: "https://www.instagram.com/abstract.iiitsurat/"
      }
    },
    Antra: {
      title: "Antra (Poetry Club)",
      lead: "Shivangi & Sarthak Kumar",
      link:`${head}`,
      content: `Antra is the poetic soul of the campus, welcoming all those who find meaning in words. Our mission is to promote creative expression through poetry, spoken word, and storytelling.
      
Events and activities include:
• Poetry Slams & Open-Mic Nights
• Weekly Poetry Writing Prompts
• Collaborative Poetry Journals
• Guest Sessions with Writers and Poets

Whether you write couplets or compose free verse, Antra provides a platform to share your voice and inspire others.`,
        events: [
            "Poetry Slams & Open-Mic Nights",
            "Weekly Poetry Writing Prompts",
            "Collaborative Poetry Journals",
            "Guest Sessions with Writers and Poets"
        ],
        gallery: [
            "antra_poetry_night.jpg",
            "antra_open_mic.jpg",
            "antra_collab_poetry.jpg"
        ],
        handles: {
            instagram: "https://www.instagram.com/antra.iiitsurat/"
          }
        
    },
    Swrang: {
      title: "Swarang (Singing Club)",
      lead: "Vishu Patle & Prashasti Vyas",
      link:`${head}`,
      content: `Swarang celebrates the universal language of music. It brings together students passionate about singing and vocal performance across various genres—Indian classical, Bollywood, Western, and fusion.

Activities conducted include:
• Solo and Group Performances
• Vocal Training and Riyaaz Sessions
• Intra-College and Inter-College Music Competitions
• Jamming Sessions and Open Mic Nights

If music is your calling, Swarang is where your voice will find its stage.`,
        events: [
            "Solo and Group Performances",
            "Vocal Training and Riyaaz Sessions",
            "Intra-College and Inter-College Music Competitions",
            "Jamming Sessions and Open Mic Nights"
        ],
        gallery: [
            "swarang_performance.jpg",
            "swarang_jamming.jpg",
            "swarang_open_mic.jpg"
        ],
        handles: {
            instagram: "https://www.instagram.com/swarang.iiitsurat/"
          }
    },
    Malhar: {
      title: "Malhar (Drama Club)",
      lead: "Harshita Purwar & Kishor Solanki",
      link:`${head}`,
      content: `Malhar is a haven for theatre lovers, actors, and scriptwriters. It’s dedicated to promoting the dramatic arts and providing students with a platform to explore stagecraft and performance.

Our key initiatives include:
• Stage Plays and Street Theatre
• Improvisation and Acting Workshops
• Scriptwriting Sessions
• Theatre Festivals and Competitions

Whether you're drawn to performing or storytelling, Malhar helps you master the art of drama.`,
        events: [
            "Stage Plays and Street Theatre",
            "Improvisation and Acting Workshops",
            "Scriptwriting Sessions",

            "Theatre Festivals and Competitions"
        ],
        gallery: [
            "malhar_stage_play.jpg",
            "malhar_rehearsal.jpg",
            "malhar_theatre_fest.jpg"
        ],
        handles: {
            instagram: "https://www.instagram.com/malhar.iiitsurat/"
          }
    },
    Groove: {
      title: "Groove (Dance Club)",
      lead: "Devika Verma & Aditi Rathore",
      link:`${head}`,
      content: `Groove is where passion meets movement. Dedicated to all dance forms—from classical to hip-hop—Groove is the perfect place for dance enthusiasts to explore, practice, and perform.

The club hosts:
• Choreography & Freestyle Workshops
• Group and Solo Dance Events
• College Fest Performances
• Dance Battles and Competitions

If you move to the rhythm and live for the beat, Groove is your crew.`,
        events: [
            "Choreography & Freestyle Workshops",
            "Group and Solo Dance Events",
            "College Fest Performances",
            "Dance Battles and Competitions"
        ],
        gallery: [
            "groove_dance_performance.jpg",
            "groove_rehearsal.jpg",
            "groove_dance_battle.jpg"
        ],
        
    },
    Cineworks: {
      title: "Cineworks (Videography Club)",
      lead: "Devansh Kushwaha & Aditya Kumar",
        link:`${head}`,
      content: `Cineworks is where storytelling meets cinematography. From idea to execution, this club covers scriptwriting, direction, videography, and editing, enabling members to tell impactful stories.

Our activities include:
• Short Film Projects
• Editing & Post-Production Workshops
• Campus Documentary Shoots
• Annual Cinefest Screenings

Whether behind the camera or in the editing room, Cineworks gives you a cinematic playground.`,
        events: [
            "Short Film Projects",
            "Editing & Post-Production Workshops",
            "Campus Documentary Shoots",
            "Annual Cinefest Screenings"
        ],
        gallery: [
            "cineworks_short_film.jpg",
            "cineworks_editing_workshop.jpg",
            "cineworks_campus_documentary.jpg"
        ],
        handles: {
            instagram: "https://www.instagram.com/cineworks.iiitsurat/"
          }
    },
    Exposure: {
      title: "Exposure (Photography Club)",
      lead: "Dasari Sriyash & Rohith Kuramana",
        link:`${head}`,
      content: `Exposure is the shutterbug’s dream. The club brings together photography lovers to explore techniques, gear, and artistic vision.

What we offer:
• Thematic Photo Walks
• Lightroom and Photoshop Sessions
• Annual Photography Exhibitions
• Contests and Photo Stories

Whether you shoot on a DSLR or a mobile phone, Exposure helps you find your frame.`,
        events: [
            "Thematic Photo Walks",
            "Lightroom and Photoshop Sessions",
            "Annual Photography Exhibitions",
            "Contests and Photo Stories"
        ],
        gallery: [
            "exposure_photo_walk.jpg",
            "exposure_editing_session.jpg",
            "exposure_exhibition.jpg"
        ],
        handles: {
            instagram: "https://www.instagram.com/exposure.iiitsurat/"
          }
    },
    Management: {
      title: "Management (Cultural Club Core Team)",
      lead: "Devansh Kushwaha",
        link:`${head}`,
      content: `The Management Team is the engine behind every successful event. From planning to logistics, and promotion to execution, the team ensures every cultural activity runs smoothly.

Responsibilities include:
• Event Planning and Scheduling
• Sponsorship and Budget Handling
• Logistics and Operations
• Publicity, Design, and Social Media Management

If you love organizing and leading from the front, the Cultural Club Management Team needs your skills.`,
        events: [
            "Event Planning and Scheduling",
            "Sponsorship and Budget Handling",
            "Logistics and Operations",
            "Publicity, Design, and Social Media Management"
        ],
        gallery: [
            "management_event_planning.jpg",
            "management_logistics.jpg",
            "management_publicity.jpg"
        ]
    }
  },

  Technical: {

    GDG: {
      title: "Google Developers Group (GDG) IIIT Surat",
      lead: "Aditya Kumar (GDG Lead)",
        link:`${head}`,
      content: `The Google Developers Group (GDG) IIIT Surat is a dynamic, student-led community supported by Google, dedicated to fostering innovation, skill development, and real-world technical experience. As one of the premier technical clubs on campus, GDG offers a platform for students to collaborate, learn, and grow in emerging technologies through workshops, hackathons, and project-based learning.

Key focus areas: 
• Web and Android Development – Build responsive websites and mobile apps using modern frameworks and tools  
• Artificial Intelligence and Machine Learning – Explore neural networks, data modeling, and AI applications  
• Cloud Computing and Cybersecurity – Learn cloud infrastructure, deployment, and security best practices  
• Data Structures and Algorithms (DSA) – Strengthen problem-solving and coding skills essential for tech careers  
• Open Source Contributions and Google Technologies – Contribute to open-source projects and master Google’s developer tools

Key focus areas:  
• Access to exclusive workshops, bootcamps, and certification programs designed to boost your technical expertise  
• Direct mentorship and guidance from Google professionals, alumni, and industry leaders  
• Opportunities to participate in local and global hackathons, including the prestigious Google Solution Challenge, with attractive prizes  
• Networking events and career support to help you connect with recruiters, build a strong portfolio, and advance your career  
• A vibrant community that encourages collaboration, innovation, and continuous learning


`,
      events: [
        {
            title: "Orientation Info Session for First Years",
            description: "Introduced students to Web Dev, AI/ML, Cyber Security, Blockchain, and motivated them to start coding and building impactful projects.",
            date: "3rd October",
            time: "—",
            venue: "CSE Lab 3 (Offline)",
            speaker: "Aditya Kumar (GDG Lead) and Core Members",
            audience: "180+ First-year Students",
            imgUrl: "/images/gdgorientation.png",
            link: "https://gdg.community.dev/events/details/google-gdg-on-campus-indian-institute-of-information-technology-surat-india-presents-gdg-orientation-session-2k24/"
        },
        {
            title: "Generative AI & Cloud Computing Bootcamp",
            description: "Hands-on sessions covering Google Cloud (Dataplex, Vision API, etc.) and Generative AI using Vertex AI and Gemini.",
            date: "8th Oct – 18th Nov",
            time: "—",
            venue: "IIIT Surat",
            participation: "150+ Students",
            imgUrl: "/images/genai-cloud.png",
            link: "https://gdg.community.dev/events/details/google-gdg-on-campus-indian-institute-of-information-technology-surat-india-presents-build-with-ai/"
        },
        {
            title: "Junior Developer & Creator Recruitment",
            description: "Screening and interviews to identify top 2nd-year developers and foster a coding culture.",
            date: "7th November",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/recruitment.jpg",
            link: "—"
        },
        {
            title: "Flutter Flow Online Session on Android Development",
            description: "Cross-platform mobile app dev session in collaboration with GDG Nagpur using Flutter Flow.",
            date: "14th December",
            time: "—",
            venue: "Online",
            imgUrl: "/images/flutter.jpg",
            link: "—"
        },
        {
            title: "Getting Started with APIs Using Postman",
            description: "Hands-on API testing and backend basics using Postman. Led by Yash Sojitra, Akash Dholakia, Samarth Gangrade.",
            date: "—",
            time: "—",
            venue: "Online",
            imgUrl: "/images/postman.png",
            link: "https://gdg.community.dev/e/m8t7sz/",
            youtube: "https://youtu.be/5weRsWbyigE?si=Q5ZBhw5Z1WRbPSil"
        },
        {
            title: "Expert Session: Introduction to Building in AI",
            description: "Hands-on session with Mira.AI on building AI systems using LLMs, RAGs, and advanced AI models.",
            date: "—",
            time: "—",
            venue: "—",
            speaker: "Venkatesh B",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://gdg.community.dev/e/mvmnag/",
            youtube: "https://youtu.be/9eEajJVbCMk?si=E7UT66MjkWJxy_Sj"
        },
        {
            title: "Solution Challenge Hackathon",
            description: "Hackathon to solve real-world challenges with an ₹8 Lakh+ prize pool. Ongoing with active student participation.",
            date: "—",
            time: "—",
            venue: "—",
            imgUrl: "/images/solution-challenge.jpg",
            link: "https://www.instagram.com/p/DE_zF9Eqbqm/?igsh=a3ZlMjV2MnJpNWQz"
        }
        ],

        
  
      handles: {
        instagram: "https://www.instagram.com/gdg_iiitsurat/",
        website: "https://gdg.community.dev/gdg-on-campus-indian-institute-of-information-technology-surat-india/"
      },
      gallery: ["/images/gdgorientation.png","/images/postman.png","/images/genai-cloud.png","/images/gdg1.png","/images/gdg2.png","/images/gdg3.png","/images/gdg4.png"] // Add image filenames if available
    },

    MARC: {
      title: "Modern Automation and Robotics Club (MARC)",
      lead: "Jugal Patel",
      

      content: `At MARC, we are more than just a club—we are a hub of innovation and passion for modern technology. Our mission is to cultivate a thriving culture of robotics and automation in IIIT Surat.

 Our Vision:
To drive hands-on learning, curiosity, and technological excellence among students through robotics and automation projects.

 Why Join MARC?
• Learn and build real robotic systems
• Explore cutting-edge technologies like IoT, AI, and Machine Learning
• Collaborate with peers on interdisciplinary projects

 What We Offer:
• Robotics Workshops & Hackathons
• Speaker Sessions with Industry Experts
• Competitions like Line-Follower & Robo Soccer

 Connect with us on Instagram: @marc.iiitsurat

MARC is a movement. Join us and be a part of the future.`,

      events: [
        {
          name: "Robo-Soccer Tournament",
          desc: "Inter-college competition with autonomous robots."
        },
        {
          name: "IoT Workshop Series",
          desc: "Built smart devices using sensors and cloud integration."
        }
      ],
      handles: {
        instagram: "@marc.iiitsurat" // Update with full link if available
      },
      gallery: ["marc_workshop.jpg", "marc_competition.jpg"]
    },

    LCS: {
      title: "Learn Code Solve(LCS)",
      lead: "Prakhar Mishra", // Add lead name if available
        link:`${head}`,
      content: `Learn Code Solve (LCS) is the official competitive programming club of IIIT Surat, dedicated to nurturing a strong foundation in Data Structures, Algorithms, and logical problem-solving among students. As one of the most active and intellectually driven communities on campus, LCS fosters a collaborative environment where aspiring developers and competitive programmers grow through consistent practice, guidance, and peer-to-peer learning.
LCS is driven by the core belief that problem-solving is a fundamental skill for all developers. The club conducts regular sessions on algorithmic thinking, organizes internal coding contests, and encourages participation in global platforms like Codeforces, LeetCode, HackerRank, and CodeChef. These contests not only strengthen coding skills but also prepare members for technical interviews and national-level competitive events.
A unique aspect of the club is its student-led learning model—seniors mentor juniors through topic-wise sessions, doubt-solving discussions, and mock contests. From beginners to seasoned coders, everyone finds a place to learn, improve, and compete.
LCS is also involved in interdisciplinary collaborations with other clubs and initiatives, such as GDSC to promote a broader understanding of software development and open-source. Whether you're aiming to ace your placements, build an Olympiad-level problem-solving mindset, or simply improve your logical reasoning, LCS is the ideal platform to start and scale.
In essence, LCS is not just a club—it's a mindset. A mindset of continuous learning, fearless debugging, and thriving under pressure. It’s a launchpad for every coder at IIIT Surat who dreams of becoming a top-notch problem solver, software engineer, or competitive programming expert.`,
      events: [{
            title: "Orientation Info Session for First Years",
            description: "Emphasized the importance of Data Structures & Algorithms (DSA) for technical interviews and coding excellence",
            date: "12th November",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "Prakhar Mishra (LCS Lead)",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DCMuEA-iBSx/?igsh=MXN4ZHdtc2h1YmRyMQ=="
        },
        {
            title: "Introduction to Competitive Programming",
            description: "First official hands-on workshop focused on Competitive Programming (CP) for beginners.",
            date: "15th January",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "Prakhar Mishra (LCS Lead) and Aman Parmar (Co-lead)",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DE0JTV3ilMh/?igsh=MTF2bjU5Z3JodWgyMw=="
        },
        {
            title: "CodeWave 3.0",
            description: "An exciting coding contest exclusively designed for 2nd-year students. Provided a platform for students to learn, win, and gain experience—each submission bringing them closer to mastery.",
            date: "30th January",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "Core Members of LCS ",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DFS8RSuiNT8/?igsh=ZWt1ZnR0NWoya21n"
        },
        {
            title: "Code Relay",
            description: "A unique relay-style coding challenge where teammates passed code to solve progressively. Encouraged teamwork, communication, and modular coding practices.",
            date: "10th April",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "LCS Fest Committee",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DH4C4YwiP-u/?igsh=MW1sNno1bGVnZnJydQ=="
        },
        {
            title: "Speed Coding – The Ultimate Coding Race",
            description: "A fast-paced ICPC-style coding competition for teams of three. Participants solved challenging algorithmic problems under tight time constraints.",
            date: "11th April",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "LCS Fest Committee",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DH4C0ATiz_A/?igsh=em5qbjlkc3lucDN5"
        },
        {
            title: "Code Sprint – From Buggy to Brilliant",
            description: "○	A thrilling contest challenge designed to test participants’ code analysis and fixing skills. Focused on real-world contests, encouraging practical problem-solving.",
            date: "12th April",
            time: "—",
            venue: "CSE Lab 3",
            speaker: "Prakhar Mishra (LCS Lead)",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://www.instagram.com/p/DH4CuTMiDIU/?igsh=MW05cmZqdzhycTZmYQ=="
        },
        {
            title: "LCS Weekly Contest",
            description: "A weekly practice contest hosted on Codeforces, open to students from all years.	Included 5-6 problems, closely modeled on Division-2 level difficulty.",
            date: "Every Week",
            time: "—",
            venue: "Online",
            speaker: "Prakhar Mishra (LCS Lead)",
            imgUrl: "/images/ai-expert.jpg",
            link: "https://codeforces.com/contestInvitation/caaa891f56c5c47c1e894a7bdb1bd054a136d95b"
        }
        // Add events if data is provided
      ],
      handles: { instagram: "https://www.instagram.com/lcs.iiitsurat/"}, // Add social media if available
      gallery: []
    }
  },


  Entrepreneur: {
    Ruminate: {
      title: "Ruminate (E-Cell of IIIT Surat)",
      lead: "Harshvardhan  Mani Tripathi",
      content: `Ruminate is IIIT Surat’s Entrepreneurship Cell, built to nurture leaders and thinkers of tomorrow. As the first and one of the most active clubs on campus, Ruminate empowers students with an entrepreneurial mindset.

 Our Mission:
To cultivate innovation, leadership, and startup culture among students by offering guidance, exposure, and real-world opportunities.

 Key Initiatives:
• Startup Weekends and Idea Showcases
• Business Model Canvas Workshops
• Talks by Founders, Investors, and Industry Mentors
• Collaboration with Incubators and Accelerators

 The 2023-24 academic year witnessed:
• 12 events organized
• 1500+ student participation

Ruminate is where ideas meet execution. Come innovate, ideate, and elevate with us.`,
        events: [
        {
            title: "SSIP Workshop",
            description:
            "Workshop to introduce students to SSIP funding, mentorship, and prototype support. Covered application process and successful startup examples.",
            date: "—",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/ssip.jpg",
            link: "—",
        },
        {
            title: "Speaker Session on Space Science and Technology",
            description:
            "Talk by Mr. Sunny Kabrawala, Founder of StarLab Surat, on space tech and cost-effective rocket manufacturing with insights into aerospace entrepreneurship.",
            date: "—",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/space-tech.jpg",
            link: "—",
        },
        {
            title: "Interaction with Co-founders of KasperTech",
            description:
            "Session with Ms. Ekta Arora and Mr. Krishna Ojha sharing their entrepreneurial journey and insights in building AI & IoT-based startups.",
            date: "—",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/kaspertech.jpg",
            link: "—",
        },
        {
            title: "Industrial Visit to ICCC, SMC Surat",
            description:
            "Visit to Surat’s Integrated Command and Control Center to explore IoT-based urban systems and smart governance in action.",
            date: "—",
            time: "—",
            venue: "ICCC, SMC Surat",
            imgUrl: "/images/iccc.jpg",
            link: "—",
        },
        {
            title: "Know The Business",
            description:
            "Month-long event where 25 teams analyzed local Surat industries and presented business case studies. Top 10 teams shortlisted for Shark Tank.",
            date: "—",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/ktb.jpg",
            link: "—",
        },
        {
            title: "Shark Tank",
            description:
            "Pitch competition judged by KasperTech co-founders where 10 teams presented innovative business ideas. Top 3 won ₹10,000 prize pool.",
            date: "—",
            time: "—",
            venue: "IIIT Surat",
            imgUrl: "/images/sharktank.jpg",
            link: "—",
        }
      ],
      handles: {}, // Add Instagram/LinkedIn if available
      gallery: [], // Add event photos (e.g., "shark_tank.jpg")
      impact: {
        stats: "12+ events | 1500+ participants (2023-24)",
        partnerships: "Collaborates with SSIP, SMC Surat, startups"
      }
    }
  },

  Sports: {
    Indominus: {
      title: "Indominus (Sports and Gaming Club)",
      lead: "Amaan Khan",
        link:`${head}`,
      content: `Indominus is the official Sports and Gaming Club of IIIT Surat. Founded in 2020, it focuses on building competitive spirit, teamwork, and excellence in both physical and digital arenas.

 What We Do:
• Traditional Sports: Football, Cricket, Chess, Badminton, and more
• E-Sports: Valorant, BGMI, FIFA, and Chess.com events

 Events We’ve Hosted:
• National Valorant Tournament 2k24
• Prakash Memorial Sports Fest
• 5th Inter-IIIT Sports Meet

Indominus isn't just a club; it’s a community that promotes well-being, coordination, and a winning mindset. Whether you’re a gamer, an athlete, or both—Indominus has a place for you.`,
        events: [
            "National Valorant Tournament 2k24",
            "Prakash Memorial Sports Fest",
            "5th Inter-IIIT Sports Meet"
        ],
        gallery: [
            "indominus_football_match.jpg",
            "indominus_chess_tournament.jpg",
            "indominus_valorant_event.jpg"
        ]
    }
  },
};

export default clubData;
