import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  { 
    title: "Crossing The Line",
    category: "cricket",
    type: "documentry",
    _id:  "MKcvHAec6GM",
    description:
      "Relive the highly controversial 2018 Australian cricket tour to South Africa; five weeks that rocked the gentleman’s game and captivated the globe.",
    creator: "Soham Shah"
  },
  { 
    title: "Arsenal: From Boring to Invincibles",
    category: "football",
    type: "documentry",
    description:
      "After winning the league in 1991, Arsenal failed to get back to those highs for a long time. Until an unknown foreign manager was signed to build a new dynasty at the club.",
    creator: "balón - English",
    _id:  "2hyGFsUcplI"
  },
  { 
    title: "The Perfect Storm",
    category: "mma",
    type: "documentry",
    description:
      "An Adelaide United youth product, Richards walked away from a promising football career in July 2020 to chase another sporting passion.",
    creator: "Ethos Documentaries",
    _id: "3-KKmIfXXzo"
  },
  { 
    title: "Forging India’s Badminton Champions",
    category: "badminton",
    type: "documentry",
    description:
      " We head to the hustle of Hyderabad to meet India’s badminton legend Pullela Gopichand and hear of his champion-building dream. Insights from legends such as Saina Nehwal, Sai Praneeth and Kidambi Srikanth.",
    creator: "Olympics",
    _id: "75D9jJv1yvA"
  },
  { 
    title: "15 Questions With India's Top Badminton Pair - Satwik and Chirag",
    category: "badminton",
    type: "interview",
    description: 
        "India's top men's doubles pairing of Satwinsairaj Rankireddy and Chirag Shetty speak to The Quint.",
    creator: "The Quint",
    _id: "X3_JFhZ10RY"
  },
  { 
    title: "Lin Dan's 🇨🇳 Best Badminton Moments at the Olympics | Athlete Highlights",
    category: "badminton",
    type: "highlights",
    description: 
        "Chinese badminton player Lin Dan is certainly one of the greatest badminton players of all time. He took part in the Olympic Games in Athens 2004 for the first time, and four years later, in Beijing 2008, he claimed the gold medal. In London 2012 he repeated history and defended his gold medal. Watch the best of Lin Dan's action at Olympic Summer Games!",
    creator: "Olympics",
    _id: "zFYy5dJcRlQ"
  },
  { 
    title: "Top 10 Badminton Rallies at the Olympic Games! | Top Moments",
    category: "badminton",
    type: "highlights",
    description: 
        "Enjoy this look back at the Top 10 Badminton Rallies from throughout the history of the Olympic Games",
    creator: "Olympics",
    _id: "6RqND3BAf1A"
  },
  {
    title: "Badminton Men's Singles Semifinal - Malaysia v China | London 2012 Olympics",
    category: "badminton",
    type: "fullmatch",
    description: 
        "",
    creator: "Olympics",
    _id: "3z_zoFSPLRE"
  },
  { 
    title: "Parthiv Patel on What The Duck Season",
    category: "cricket",
    type: "interview",
    description: 
        "Parthiv Patel on What The Duck Season 2 with Vikram Sathaye, full episode on Viu India. Parthiv Patel has played for Chennai Super Kings, Kochi Tuskers Kerala, Sunrisers Hyderabad, Royal Challenger Bangalore and Mumbai Indians in IPL.",
    creator: "What The Duck Season 2 with Vikram Sathaye",
    _id: "9wNZ0XCyr2c"
  },
  { 
    title: "Nidahas Trophy 2018 Final Match, Final Over - India vs Bangladesh",
    category: "cricket",
    type: "highlights",
    description: 
        "Hero #NidahasTrophy 2018 Final Match, Final Over - India vs Bangladesh at RPICS, Colombo.",
    creator: "Sri Lanka Cricket",
    _id: "QD2hxpQd_b0"
  },
  { 
    title: "Highlights: Australia v India, MCG | ODI Tri-Series 2014-15",
    category: "Cricket",
    type: "highlights",
    description: 
        "Mitchell Starc took a career-best haul and Aaron Finch starred with the bat as Australia snuck home against India in an MCG thriller",
    creator: "cricket.com.au",
    _id: "EY41X9sfxlA"
  },
  { 
    title: "India vs Sri Lanka 2005 3rd ODI",
    category: "cricket",
    type: "fullmatch",
    description: 
        "India vs Sri Lanka 2005 3rd ODI Jaipur - Indian Innings - MS Dhoni 183* - Ball by Ball",
    creator: "Cricket Fever 2",
    _id: "04vWaGaqw-4"
  },
  { 
    title: "BLUE RISING Episode 1 feat Virat Kohli and Sunil Chhetri",
    category: "football",
    type: "interview",
    description: 
      "Virat Kohli and Sunil Chhetri share interesting anecdotes from their career.",
    creator: "Indian Sports Honours",
    _id: "Frf3ySnmQY4"
  },
  { 
    title: "Villarreal 2 - 3 Liverpool",
    category: "football",
    type: "highlights",
    description: 
        "Villarreal 2 - 3 Liverpool | Highlights | UEFA Champions League | 4th May 2022.",
    creator: "SonyLIV",
    _id: "NfGIGfIz16s"
  },
  { 
    title: "Real Madrid 3 - 1 Man City",
    category: "football",
    type: "highlights",
    description: 
        "Real Madrid 3 - 1 Man City | Highlights | UEFA Champions League | 5th May 2022",
    creator: "SonyLIV",
    _id: "UoUjz-bOn_w"
  },
  { 
    title: "Portugal v Spain | 2018 FIFA World Cup | Full Match",
    category: "football",
    type: "fullmatch",
    description: 
        "Fans voted in numbers on Twitter to have their favourite World Cup matches streamed on YouTube. Now, it’s time to enjoy these classic games with fans across the globe.",
    creator: "FIFA",
    _id: "Xhu5Bz1xDf0"
  },
  { 
    title: "Tony Ferguson Goes In Depth on Loss to Michael Chandler, Conor McGregor Feud, Future - MMA Fighting",
    category: "mma",
    type: "interview",
    description: 
      "Tony Ferguson discusses his performance at UFC 274, the knockout finish by Michael Chandler, which team he might join, what sparked his comments at the UFC 274 media day, fighting Conor McGregor, Gregor Gillespie’s recent comments, his beef with Khabib Nurmagomedov, and more.",
    creator: "MMAFightingonSBN",
    _id: "L-qhPkUhn9s"
  },
  { 
    title: "Top Finishes of 2021 (So Far)",
    category: "mma",
    type: "highlights",
    description: 
        "Relive some of the top finishes so far in 2021. From Rose Namajunas and Kamaru Usman's incredible finishes at UFC 261 to Francis Ngannou knocking out Stipe Miocic at UFC 260, many of the most exciting highlights of the year have taken place under the brightest lights.",
    creator: "UFC - Ultimate Fighting Championship",
    _id: "4d0NNKTkk3E"
  },
  { 
    title: "MMA's Best Knockouts of the Winter 2022 | HD",
    category: "mma",
    type: "highlights",
    description: 
        "We present to you a collection of the best knockouts of the Winter 2022. The best and most exciting MMA knockouts include all months of the Winter 2022 in HD!",
    creator: "That's why MMA!",
    _id: "_1H6obIyJGE"
  },
  { 
    title: "Full Fight | Michael Chandler vs. Benson Henderson - Bellator 165",
    category: "mma",
    type: "fullmatch",
    description: 
        "It's Full Fight Friday! Take a look back at Bellator 165: Michael Chandler vs. Benson Henderson in it's entirety! #Bellator #MMAKnockouts #KOs #FightSubmissions #FightFinishes",
    creator: "BellatorMMA",
    _id:  "K50CfyCAlzM"
  },
  { 
    title: "Top 5 last lap battles in 2019",
    category: "racing",
    type: "highlights",
    description: 
      "We were treated to numerous last lap battles in 2019 - here are our top 5!",
    creator: "MotoGP",
    _id: "gMCWrTI0Ojo"
  },
  { 
    title: "Race Highlights | Nürburgring 2021 | Fanatec GT World Challenge Europe Powered by AWS",
    category: "racing",
    type: "highlights",
    description: 
        "atch all of the action from Round 8 of GT World Challenge Europe at Nürburgring. GT World is the official YouTube channel for SRO Motorsports Group, the global leader in GT racing.",
    creator: "GTWorld",
    _id: "uPSigdlEnkk"
  },
  {
    title: "EXCLUSIVE: Lando Norris And Daniel Ricciardo Interview Each Other",
    category: "racing",
    type: "interview",
    description: 
      "The dynamic McLaren duo of Daniel Ricciardo and Lando Norris sat down in Russia to interview each other, and chat all things Monza, McLaren and more!",
    creator: "That's why MMA!",
    _id: "GkbAPdKk5Os"
  },
  { 
    title: "2017 #DutchGP | Full MotoGP Race",
    category: "racing",
    type: "fullmatch",
    description: 
      "The return of the king! 👑 The Cathedral always brings great racing and this for sure was not an exception! 🙌",
    creator: "MotoGP",
    _id:  "VXtY8BrE4RA"
  },
  {
    title: "Mike Tyson - All Knockouts of the Legend",
    category: "boxing",
    type: "highlights",
    description: 
      "He was called the ‘Baddest man on the planet’ for his incredible punching power and aggressive fighting style. His Speed, strength, and vicious aggression earned him the title of the youngest world heavyweight champion in 1986. He is Iron Mike Tyson.",
    creator: "The World of Boxing!",
    _id: "kknVfOJZ1w0"
  },
  {
    title: "Canelo Alvarez vs Gennady Golovkin 1 Full Highlights HD",
    category: "boxing",
    type: "highlights",
    description: 
      "Canelo Alvarez vs Gennady Golovkin 1 Full Highlights HD",
    creator: "Sweet Science",
    _id:  "vqkvwTtoOYM"
  }
];
