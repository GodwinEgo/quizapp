const quizzes = [
  {
    title: "General Knowledge Quiz",
    questions: [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        answer: "H2O",
      },
      {
        question: "Who wrote the famous play 'Romeo and Juliet'?",
        options: [
          "William Shakespeare",
          "Mark Twain",
          "Jane Austen",
          "Leo Tolstoy",
        ],
        answer: "William Shakespeare",
      },

      {
        question: "Which famous scientist developed the theory of relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "Albert Einstein",
      },
      {
        question: "In which country did the Olympic Games originate?",
        options: ["Greece", "Italy", "France", "Egypt"],
        answer: "Greece",
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        answer: "Skin",
      },
      {
        question: "Who is the author of the 'Harry Potter' book series?",
        options: [
          "J.K. Rowling",
          "Stephen King",
          "George R.R. Martin",
          "Suzanne Collins",
        ],
        answer: "J.K. Rowling",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Fe", "Au", "Cu"],
        answer: "Au",
      },
      {
        question: "Which famous artist painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Michelangelo",
        ],
        answer: "Leonardo da Vinci",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: [
          "Indian Ocean",
          "Atlantic Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        answer: "Pacific Ocean",
      },
      {
        question: "What is the main gas that makes up the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "Who was the first person to step on the moon?",
        options: [
          "Neil Armstrong",
          "Buzz Aldrin",
          "Yuri Gagarin",
          "John Glenn",
        ],
        answer: "Neil Armstrong",
      },
      {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "O2", "H2O", "CO2"],
        answer: "O",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: [
          "Mount Kilimanjaro",
          "Mount Everest",
          "Mount McKinley",
          "Mount Fuji",
        ],
        answer: "Mount Everest",
      },
      {
        question: "Who painted the 'The Starry Night'?",
        options: [
          "Claude Monet",
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Salvador Dali",
        ],
        answer: "Vincent van Gogh",
      },
      {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Lion", "Tiger", "Elephant", "Giraffe"],
        answer: "Lion",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Euro", "Dollar", "Yen"],
        answer: "Yen",
      },
      {
        question: "What is the chemical symbol for carbon dioxide?",
        options: ["CO", "CO2", "O2", "C2O"],
        answer: "CO2",
      },
      {
        question: "Who wrote the famous play 'Hamlet'?",
        options: [
          "William Shakespeare",
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "India", "Japan", "South Korea"],
        answer: "Japan",
      },
      {
        question: "What is the largest continent in the world?",
        options: ["Europe", "Africa", "Asia", "North America"],
        answer: "Asia",
      },
      {
        question: "Who is the artist of the famous painting 'The Scream'?",
        options: [
          "Pablo Picasso",
          "Claude Monet",
          "Vincent van Gogh",
          "Edvard Munch",
        ],
        answer: "Edvard Munch",
      },
      {
        question: "What is the chemical symbol for sodium chloride?",
        options: ["H2O", "NaCl", "CO2", "CaCl2"],
        answer: "NaCl",
      },
      {
        question: "Who is known as the 'Father of Modern Physics'?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "Albert Einstein",
      },
      {
        question: "What is the smallest planet in our solar system?",
        options: ["Mars", "Mercury", "Venus", "Earth"],
        answer: "Mercury",
      },
      {
        question: "Which famous playwright wrote 'The Tragedy of Macbeth'?",
        options: [
          "William Shakespeare",
          "George Bernard Shaw",
          "Oscar Wilde",
          "Arthur Miller",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the main component of the Earth's core?",
        options: ["Gold", "Diamond", "Iron", "Platinum"],
        answer: "Iron",
      },
      {
        question: "Who is the author of the book 'To Kill a Mockingbird'?",
        options: [
          "George Orwell",
          "Harper Lee",
          "J.R.R. Tolkien",
          "Jane Austen",
        ],
        answer: "Harper Lee",
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Fe", "Cu"],
        answer: "Ag",
      },
      {
        question:
          "Who was the first female Prime Minister of the United Kingdom?",
        options: [
          "Angela Merkel",
          "Theresa May",
          "Margaret Thatcher",
          "Jacinda Ardern",
        ],
        answer: "Margaret Thatcher",
      },
      {
        question: "Which famous scientist developed the theory of gravity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "Isaac Newton",
      },
      {
        question: "What is the largest land animal?",
        options: ["Elephant", "Giraffe", "Hippopotamus", "Lion"],
        answer: "Elephant",
      },
      {
        question: "Who wrote the famous novel 'Pride and Prejudice'?",
        options: [
          "Charles Dickens",
          "Jane Austen",
          "Mark Twain",
          "Emily Bronte",
        ],
        answer: "Jane Austen",
      },
      {
        question: "What is the largest desert in the world?",
        options: [
          "Sahara Desert",
          "Gobi Desert",
          "Atacama Desert",
          "Arabian Desert",
        ],
        answer: "Sahara Desert",
      },
      {
        question: "What is the main gas that plants use for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide",
      },
      {
        question: "Who is the lead singer of the rock band 'Queen'?",
        options: ["Freddie Mercury", "Bono", "Mick Jagger", "Elton John"],
        answer: "Freddie Mercury",
      },
      {
        question: "What is the currency of the United States?",
        options: ["Yuan", "Euro", "Dollar", "Pound"],
        answer: "Dollar",
      },
      {
        question: "What is the chemical symbol for helium?",
        options: ["He", "H", "O", "C"],
        answer: "He",
      },
      {
        question: "Who painted the 'Mona Lisa'?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Michelangelo",
        ],
        answer: "Leonardo da Vinci",
      },
      {
        question: "Which animal is the largest reptile on Earth?",
        options: [
          "Alligator",
          "Komodo Dragon",
          "Anaconda",
          "Saltwater Crocodile",
        ],
        answer: "Saltwater Crocodile",
      },
      {
        question: "What is the currency of the United Kingdom?",
        options: ["Yuan", "Euro", "Dollar", "Pound"],
        answer: "Pound",
      },
      {
        question: "What is the chemical symbol for nitrogen?",
        options: ["N", "Ni", "Na", "Ne"],
        answer: "N",
      },
      {
        question: "Who was the first President of the United States?",
        options: [
          "Thomas Jefferson",
          "Abraham Lincoln",
          "George Washington",
          "John Adams",
        ],
        answer: "George Washington",
      },
      {
        question: "Which famous scientist discovered the laws of motion?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "Isaac Newton",
      },
      {
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Eagle", "Penguin", "Albatross"],
        answer: "Ostrich",
      },
      {
        question: "Who wrote the famous play 'The Merchant of Venice'?",
        options: [
          "William Shakespeare",
          "George Bernard Shaw",
          "Oscar Wilde",
          "Arthur Miller",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the main component of the Earth's crust?",
        options: ["Gold", "Diamond", "Silica", "Platinum"],
        answer: "Silica",
      },
      {
        question: "Who is the author of the book '1984'?",
        options: [
          "George Orwell",
          "Harper Lee",
          "J.R.R. Tolkien",
          "Jane Austen",
        ],
        answer: "George Orwell",
      },
      {
        question: "What is the chemical symbol for copper?",
        options: ["Cu", "Ag", "Fe", "Au"],
        answer: "Cu",
      },
      {
        question: "Who was the first woman to win a Nobel Prize?",
        options: [
          "Marie Curie",
          "Rosalind Franklin",
          "Ada Lovelace",
          "Emmy Noether",
        ],
        answer: "Marie Curie",
      },
      {
        question:
          "Which famous scientist is best known for his theory of evolution?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Charles Darwin",
          "Nikola Tesla",
        ],
        answer: "Charles Darwin",
      },
      {
        question: "What is the closest planet to the Sun?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Mercury",
      },
      {
        question: "Who wrote the famous novel 'Wuthering Heights'?",
        options: [
          "Charles Dickens",
          "Jane Austen",
          "Emily Bronte",
          "Mark Twain",
        ],
        answer: "Emily Bronte",
      },
      {
        question: "What is the largest bay in the world?",
        options: [
          "Hudson Bay",
          "Chesapeake Bay",
          "San Francisco Bay",
          "Bay of Bengal",
        ],
        answer: "Hudson Bay",
      },
      {
        question: "What is the main gas that forms the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question:
          "Who is the lead guitarist of the rock band 'The Rolling Stones'?",
        options: ["Keith Richards", "Brian May", "Jimmy Page", "Eric Clapton"],
        answer: "Keith Richards",
      },
      {
        question: "What is the currency of Germany?",
        options: ["Yuan", "Euro", "Dollar", "Pound"],
        answer: "Euro",
      },
      {
        question: "What is the chemical symbol for potassium?",
        options: ["P", "K", "Na", "K2"],
        answer: "K",
      },
    ],
  },
  // Add more quizzes here...
];

export default quizzes;
