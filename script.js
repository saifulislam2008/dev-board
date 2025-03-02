const body = document.body;
const completedTask = body.querySelector("#completedTask");
const taskCount = body.querySelector("#taskCount");
const clearBTN = body.querySelector("#clearBTN");
const activity = body.querySelector("#activity");
const cardContainer = body.querySelector("#cardContainer");
const completeBTN = body.querySelector("#completeBTN");
const calendar = body.querySelector("#calendar");
const colors = [
  "bg-red-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-blue-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-gray-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-lime-100",
  "bg-emerald-100",
  "bg-cyan-100",
  "bg-rose-100",
  "bg-violet-100",
  "bg-fuchsia-100",
];

const cardData = [
  {
    id: 1,
    companyName: "ShopEase",
    taskTitle: "Fix Mobile Button Issue",
    taskDescription:
      "Investigate and resolve the mobile button alignment issue. Debug using Chrome DevTools, check for overlapping elements, and ensure smooth functionality across all screen sizes.",
    deadline: "21 March 2025",
  },
  {
    id: 2,
    companyName: "CloudSync",
    taskTitle: "Add Dark Mode",
    taskDescription:
      "Implement a dark mode feature that stores the user's preference in localStorage. Update CSS variables dynamically, ensure smooth transitions, and provide a toggle switch for easy user control.",
    deadline: "21 March 2025",
  },
  {
    id: 3,
    companyName: "SwiftPay",
    taskTitle: "Optimize Home Page",
    taskDescription:
      "Improve the performance and loading speed of the homepage. Debug using Chrome DevTools, check for overlapping elements, remove unnecessary scripts, and optimize images for a seamless user experience.",
    deadline: "21 March 2025",
  },
  {
    id: 4,
    companyName: "Meta",
    taskTitle: "Add New Emoji ✋",
    taskDescription:
      "Integrate a new set of emojis, including hand gestures, into the platform. Ensure compatibility across all devices, debug for rendering issues, and test responsiveness in different screen sizes.",
    deadline: "21 March 2025",
  },
  {
    id: 5,
    companyName: "Google LLC",
    taskTitle: "Integrate OpenAI API",
    taskDescription:
      "Implement OpenAI's API for advanced AI-driven features. Debug using Chrome DevTools, check response handling, optimize API calls, and ensure seamless integration with existing services.",
    deadline: "21 March 2025",
  },
  {
    id: 6,
    companyName: "Glassdoor",
    taskTitle: "Improve Job Searching",
    taskDescription:
      "Enhance the job search algorithm for better accuracy. Debug using Chrome DevTools, refine search filters, optimize query performance, and provide a more user-friendly job recommendation system.",
    deadline: "21 March 2025",
  },
];
taskCount.innerHTML = cardData.length;
const cardNodeArray = [];
for (let i = 0; i < cardData.length; i++) {
  const card = cardData[i];
  const cardNode = `
                <div class="bg-blue-100 px-4 py-6 flex flex-col gap-4 rounded-xl">
                    <span class="px-4 py-2 bg-base-100 rounded-lg text-sm self-start">${card.companyName}</span>
                    <h3 class="text-xl font-semibold text-[#00303C]">${card.taskTitle}</h3>
                    <div class="bg-white p-4 rounded-lg ">
                        <p class="line-clamp-2 text-gray-900/50">${card.taskDescription}</p>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="flex flex-col ">
                            deadline
                            <p class="font-semibold">${card.deadline}</p>
                        </span>
                        <button onclick="completedTaskBTN(${card.id})" id="completeBTN-${card.id}" class="px-4 py-1 rounded-lg bg-blue-600 text-white">Complete</button>
                    </div>
                </div>         

    `;
  cardNodeArray.push(cardNode);
}
cardContainer.innerHTML = cardNodeArray.join("");

calendar.innerHTML = `${new Date().toDateString()}`;

function changeBgColor() {
  let color = Math.floor(Math.random() * colors.length);
  body.className = `transition-colors duration-300 ${colors[color]} py-10`;
}
function clearActivity() {
  activity.innerHTML = "";
}
function completedTaskBTN(id) {
  const button = document.getElementById(`completeBTN-${id}`);
  const cardTitle = cardData.find((card) => card.id === id).taskTitle;
  const p = document.createElement("p");
  p.className = "px-4 py-2 bg-blue-100 rounded-xl text-gray-900/80";
  p.textContent = `You have completed the task ${cardTitle} at ${new Date().toLocaleTimeString()}`;
  if (button) {
    button.disabled = true;
    button.innerText = "Completed";
    button.classList.add("bg-gray-400", "cursor-not-allowed");
      button.classList.remove("bg-blue-600");
      alert("board updated successfully!");
      taskCount.innerHTML = parseInt(taskCount.innerHTML) - 1;
      if (taskCount.innerHTML == 0) {
          alert("congratulatons!!! you have completed all current task.")
      }
      completedTask.innerHTML = parseInt(completedTask.innerHTML) + 1;
    activity.appendChild(p);
  }
}
