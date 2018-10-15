// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "See What You Can Remember",
        "main":    "<p>Testing your knowledge</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "ACED it",
        "level2":  "Good job!",
        "level3":  "Go back and read it one more time"
         // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many people are currently living in modern day slavery all over the globe",
            "a": [
                {"option": "4.3 million",      "correct": false},
                {"option": "40.3 million",     "correct": true},
                {"option": "200 million",      "correct": false},
                {"option": "1.5 million",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>You're wrong.</span>  It's 40.3 million.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following are true?",
            "a": [
                {"option": "Most people are enslaved as sex slaves",               "correct": false},
                {"option": "Woman are more at risk to be human trafficked or sold into slavery than men",   "correct": true},
                {"option": "There aren't that many enslaved children so we shouldn't worry about it",               "correct": false},
                {"option": "Modern day slavery deserves attention and justice now", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You got it.</p>",
            "incorrect": "<p><span>Hmmm.</span> You may want to go back and read through the slides one more time.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
