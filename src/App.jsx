import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Start from './components/Start';
import Timer from './components/Timer';


function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUserName] = useState(null)

    const data = [
          
    {
      id: 1,
      question: "In a website browser address bar, what does “www” stand for?",
      answers: [
        {
          text: "Wide Web World",
          correct: false,
        },
        {
          text: "World Wide Web",
          correct: true,
        },
        {
          text: "What When Why",
          correct: false,
        },
        {
          text: "Web World Wide",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: " In what year were the first Air Jordan sneakers released?",
      answers: [
        {
          text: "1984",
          correct: true,
        },
        {
          text: "1985",
          correct: false,
        },
        {
          text: "1986",
          correct: false,
        },
        {
          text: "1987",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which African country was formerly known as Abyssinia?",
      answers: [
        {
          text: "Nigeria",
          correct: false,
        },
        {
          text: "Ghana",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "Ethiopia",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In which European city would you find Orly airport?",
      answers: [
        {
          text: "London",
          correct: false,
        },
        {
          text: "Paris",
          correct: true,
        },
        {
          text: "Madrid",
          correct: false,
        },
        {
          text: "Rome",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which singer’s real name is Stefani Joanne Angelina Germanotta?",
      answers: [
        {
          text: "Lady Gaga",
          correct: true,
        },
        {
          text: "beyonce",
          correct: false,
        },
        {
          text: "Rihanna",
          correct: false,
        },
        {
          text: "Cardi B",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: " Which country consumes the most chocolate per capita?",
      answers: [
        {
          text: "England",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: true,
        },
        {
          text: "Nigeria",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of Shakespeare’s plays is the longest?",
      answers: [
        {
          text: "Hamlet",
          correct: true,
        },
        {
          text: "Othello",
          correct: false,
        },
        {
          text: "Romeo and Juliet",
          correct: false,
        },
        {
          text: "King Lear",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who was the first female Prime Minister of Great Britain?",
      answers: [
        {
          text: "Theresa May",
          correct: false,
        },
        {
          text: "Margaret Thatcher",
          correct: true,
        },
        {
          text: "lizz Truss",
          correct: false,
        },
        {
          text: "Hillary Clinton",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "How many ribs are in a human body?",
      answers: [
        {
          text: "24",
          correct: true,
        },
        {
          text: "34",
          correct: false,
        },
        {
          text: "44",
          correct: false,
        },
        {
          text: "54",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which country is known as the Land of White Elephant?",
      answers: [
        {
          text: "pakistan",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Thailand",
          correct: true,
        },
        {
          text: "Indonedsia",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What color eyes do most humans have?",
      answers: [
        {
          text: "brown",
          correct: true,
        },
        {
          text: "white",
          correct: false,
        },
        {
          text: "red",
          correct: false,
        },
        {
          text: "blue",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What is the name of the Earth’s largest ocean?",
      answers: [
        {
          text: "Atlantic Ocean",
          correct: false,
        },
        {
          text: "Pacific Ocean",
          correct: true,
        },
        {
          text: "Indian Ocean",
          correct: false,
        },
        {
          text: "Artic Ocean",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What country won the very first FIFA World Cup in 1930?",
      answers: [
        {
          text: "Brazil",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Uruguay",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "How many hearts does an octopus have?",
      answers: [
        {
          text: "One",
          correct: false,
        },
        {
          text: "Two",
          correct: false,
        },
        {
          text: "Three",
          correct: true,
        },
        {
          text: "Four",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which mammal has no vocal cords?",
      answers: [
        {
          text: "Giraffe",
          correct: true,
        },
        {
          text: "Monkey",
          correct: false,
        },
        {
          text: "Lion",
          correct: false,
        },
        {
          text: "Snake",
          correct: false,
        },
      ],
    },
  ];
  
   

  const moneyList = useMemo(()=> 
    [
    {id: 1, amount: "$ 100"},
    {id: 2, amount: "$ 200"},
    {id: 3, amount: "$ 300"},
    {id: 4, amount: "$ 500"},
    {id: 5, amount: "$ 1000"},
    {id: 6, amount: "$ 2000"},
    {id: 7, amount: "$ 4000"},
    {id: 8, amount: "$ 8000"},
    {id: 9, amount: "$ 16,000"},
    {id: 10, amount: "$ 32,000"},
    {id: 11, amount: "$ 64,000"},
    {id: 12, amount: "$ 125,000"},
    {id: 13, amount: "$ 250,000"},
    {id: 14, amount: "$ 500,000"},
    {id: 15, amount: "$ 1,000,000"},
  ].reverse(),[]);


  useEffect(()=> {
    questionNumber > 1 && setEarned(moneyList.find(m=> m.id === questionNumber - 1).amount);
  },[moneyList, questionNumber])

  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? <h1 className='money-text'>You earned: {earned}</h1> : (
          <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/> 
            </div>
        </div>
        <div className="bottom">
          <Quiz data={data} 
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}/>
        </div>
        </>
        )}
      </div>

         <div className="money">
        <ul className='money-list'>
          {moneyList.map((mon) => (
             <li key={mon.id} className={questionNumber === mon.id ? "money-list-item active" : "money-list-item"}>
            <span className='money-list-item-number'>{mon.id}</span>
            <span className='money-list-item-amount'>{mon.amount}</span>
          </li>
          ))}
         
        </ul>
      </div>
        </>
      ) :( <Start setUserName={setUserName}/>)}
      

    </div>
  )
}

export default App
