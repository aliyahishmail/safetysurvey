// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
        type: "radiogroup",
        name: "question0",
        title: "What is the most common cause of lifeguard injuries?",
        choices: [
            "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
        ],
        correctAnswer: "Slip and fall accidents"
    },
    {
        type: "radiogroup",
        name: "question1",
        title: "What is the primary safety precaution when swimming in open water?",
        choices: [
            "Wearing a life jacket",
            "Staying within designated swimming areas",
            "Avoiding swimming alone",
            "Checking water temperature before swimming"
        ],
        correctAnswer: "Staying within designated swimming areas",
        explanation: "Staying within designated swimming areas ensures that you are within the monitored and safe zones, reducing the risk of accidents or drowning in unfamiliar or hazardous water conditions."
    },
    {
        type: "radiogroup",
        name: "question2",
        title: "What should you do if you witness someone struggling in the water?",
        choices: [
            "Jump in and attempt to rescue them immediately",
            "Throw a floatation device or rope to them",
            "Yell for help and wait for a lifeguard",
            "Ignore them and continue swimming"
        ],
        correctAnswer: "Throw a floatation device or rope to them",
        explanation: "Attempting to directly rescue someone struggling in the water can put both of you at risk. Throw a floatation device or rope to them from a safe distance to provide assistance without endangering yourself."
    },
    {
        type: "radiogroup",
        name: "question3",
        title: "What is the primary cause of drowning in children under 5 years old?",
        choices: [
            "Lack of swimming skills",
            "Strong currents",
            "Playing too close to the water's edge",
            "Unattended access to water"
        ],
        correctAnswer: "Unattended access to water",
        explanation: "Children under 5 are particularly vulnerable to drowning when left unattended near water sources such as pools, ponds, or bathtubs. It's crucial to supervise young children around water at all times."
    },
    {
        type: "radiogroup",
        name: "question4",
        title: "What should you do if caught in a rip current while swimming at the beach?",
        choices: [
            "Swim directly against the current to reach shore",
            "Float or tread water and swim parallel to the shore",
            "Yell for help until assistance arrives",
            "Attempt to signal for attention using hand gestures"
        ],
        correctAnswer: "Float or tread water and swim parallel to the shore",
        explanation: "Swimming directly against a rip current can exhaust even strong swimmers. Instead, conserve energy by floating or treading water and swim parallel to the shore until you escape the current's pull."
    },
    {
        type: "radiogroup",
        name: "question5",
        title: "What is the safest way to enter the water from a boat or dock?",
        choices: [
            "Jump in feet first",
            "Dive headfirst",
            "Slide in gently",
            "Walk in slowly"
        ],
        correctAnswer: "Slide in gently",
        explanation: "Sliding in gently reduces the risk of injury from impact or collisions with underwater obstacles. Always exercise caution and be mindful of water depth and potential hazards when entering the water."
    },
    {
        type: "radiogroup",
        name: "question6",
        title: "What should you do if you encounter lightning while swimming or boating?",
        choices: [
            "Stay in the water or on the boat",
            "Move to a safe shelter or shore immediately",
            "Continue swimming or boating, but avoid metal objects",
            "Wear a wet suit to protect against electric shock"
        ],
        correctAnswer: "Move to a safe shelter or shore immediately",
        explanation: "Lightning poses a significant risk of electric shock when in water or on a boat. Move to a safe shelter or shore immediately to reduce the risk of injury or fatality."
    },
    {
        type: "radiogroup",
        name: "question7",
        title: "What is the recommended ratio of adults to children when supervising swimming activities?",
        choices: [
            "1:1",
            "2:1",
            "4:1",
            "6:1"
        ],
        correctAnswer: "1:1",
        explanation: "Supervising swimming activities requires constant attention and vigilance, especially with young children or inexperienced swimmers. The recommended ratio is one adult per child to ensure adequate supervision and quick response in case of emergencies."
    },
    {
        type: "radiogroup",
        name: "question8",
        title: "What is the most common cause of boating accidents?",
        choices: [
            "Excessive speed",
            "Weather conditions",
            "Operator inattention",
            "Lack of safety equipment"
        ],
        correctAnswer: "Operator inattention",
        explanation: "Operator inattention, distractions, or negligence are leading factors contributing to boating accidents. Maintaining focus and awareness of surroundings while operating a boat is essential for safety on the water."
    },

    {
        type: "radiogroup",
        name: "question9",
        title: "When is it safest to swim in natural bodies of water?",
        choices: [
            "During high tide",
            "During low tide",
            "When water is calm and visibility is good",
            "During heavy rainfall"
        ],
        correctAnswer: "When water is calm and visibility is good",
        explanation: "Swimming in natural bodies of water is safest when conditions are calm and visibility is good, reducing the risk of underwater hazards and strong currents."
    },
    {
        type: "radiogroup",
        name: "question10",
        title: "What should you do if you experience muscle cramps while swimming?",
        choices: [
            "Keep swimming to relieve the cramps",
            "Stop swimming and rest on the water's surface",
            "Stretch the affected muscles gently",
            "Drink more water to hydrate"
        ],
        correctAnswer: "Stop swimming and rest on the water's surface",
        explanation: "Experiencing muscle cramps while swimming can indicate fatigue or dehydration. Stop swimming, rest on the water's surface, and gently stretch the affected muscles to prevent further injury."
    }];

    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}