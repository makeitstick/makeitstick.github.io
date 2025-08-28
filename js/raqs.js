const FAQData = [
  {
    question: "年轻人应该如何生活？",
    answer: [
      "不要努力做一个成功的人，而要努力做一个有价值的人。成功的人会收获很多，而有价值的人会给予他人更多。 ~ 李永乐老师译",
	  "Try not to become a man of success, but rather try to become a man of value. ~ Albert Einstein",
    ],
  },
  
 {
    question: "迷失了方向，如何是好？",
    answer: [
      "那就回到这里吧。这里有着二十岁那年，你所要知道的事情。那些年，那些文字；那些图，那些故事。",
	  '<a href="https://makeitstick.github.io/letter.html">诗和远方、排骨和汤、你的信箱</a>',
    ],
  },
  
  {
    question: "I am stuck. What should I do?",
    answer: [
      "Utilize AI. This is 2025.",
	  "They are your mentors. They are your aha moment. They are the leading tools. To lead is to serve. They are here to serve you.",
	  "Grok 刘德华； ChatGPT 张学友； Copilot 郭富城； DeepSeek 黎明",
    ],
  },  
  
  {
    question: "How to do great work?",
    answer: [
      "Search for the paragraph <strong>Use the advantages of youth...</strong>",
	  '<a href="https://www.paulgraham.com/greatwork.html">那些二十岁我想知道的事</a>',
    ],
  },
  
  /*{
    question: "How can I track the progress of a task?",
    answer: [
      "111",
      "222",
      "333",
    ],
  },*/
];

const FAQContainer = document.querySelector(".faq-container");

const removeAllExpanded = () => {
  const questionContainers = document.querySelectorAll(
    ".faq-container .question-container"
  );

  questionContainers.forEach((q) => {
    q.classList.remove("expanded");
    const answerContainer = q.querySelector(".answer-container");
    answerContainer.style.maxHeight = "0";
  });
};

const displayFAQ = () => {
  FAQData.forEach((q) => {
    const answerHTML = q.answer
      .map(
        (a) => `<div class="answer">
        <span class="answer-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        ${a}
      </div>`
      )
      .join("");

    const html = `<div class="question">
          ${q.question}
          <span class="question-icon"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>

        <div class="answer-container">
          ${answerHTML}
        </div>`;

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    questionContainer.innerHTML = html;

    FAQContainer.appendChild(questionContainer);

    const question = questionContainer.querySelector(".question");

    question.addEventListener("click", () => {
      if (!questionContainer.classList.contains("expanded")) {
        removeAllExpanded();
      }

      questionContainer.classList.toggle("expanded");
      const isExpanded = questionContainer.classList.contains("expanded");

      const answerContainer =
        questionContainer.querySelector(".answer-container");
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
    });
  });
};

displayFAQ();
