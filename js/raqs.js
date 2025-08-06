const FAQData = [
  {
    question: "年轻人应该如何生活？",
    answer: [
      "不要努力做一个成功的人，而要努力做一个有价值的人。成功的人会收获很多，而有价值的人会给予他人更多。 ~ 李永乐老师译",
	  "Try not to become a man of success, but rather try to become a man of value. ~ Albert Einstein",
      //'<a href="https://makeitstick.github.io/index.html">Make it stick</a>',
    ],
  },
  {
    question: "What are the implications of setting a target and then not reaching it? Certainly not everyone sets a higher target makes it.",
    answer: [
      "The objective of setting a target is not necessarily to reach it, but rather to establish a standard against which to measure your performance. If you are not reaching your target, it forces you to focus on what you are doing wrong or what you may not be doing that you should. The target holds you to a higher standard of performance.",
    ],
  },
  {
    question: "If my ex makes nasty comments about me to the children, I should just ignore them?",
    answer: [
      "The way one spouse talks about the other will be a crucial lesson for the children to observe. The fact that one spouse responds in an immature way is certainly no license for the other spouse to do the same.",
	  "Two immature parents will teach the children how to resolve conflicts in an immature manner. One mature parent responding to life's conflicts in a mature manner can show the children an alternative way of dealing with differences of opinion.",
	  "The greater the contrast in attitudes, the greater the illustration.",
    ],
  },
  /*  {
    question: "Can I assign a task to someone else?",
    answer: [
      "Yes, you can assign a task to someone else.",
      "While creating or editing a task, you will find an 'Assignee' field.",
      "Start typing the name or email of the person you want to assign the task to, and select their name from the suggestions.",
      "The assigned person will receive a notification about the task.",
    ],
  },
{
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
