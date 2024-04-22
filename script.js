const button = document.querySelector(".talk");
const content = document.querySelector(".content");

const speak = (text) => {
  const tell = new SpeechSynthesisUtterance(text);
  tell.rate = 1;
  tell.pitch = 1;
  tell.volume = 1;
  window.speechSynthesis.speak(tell);
}

// window.addEventListener('load', () => {
//     speak("Testing speech synthesis");
// })

function call() {
  const day = new Date();
  const hour = day.getHours();
  if (hour >= 0 && hour < 12) {
    speak("Hi Eren Yeager");
  } else if (hour >= 12 && hour < 17) {
    speak("Hi Asta");
  } else {
    speak("Hi Shadow Monarch");
  }
}


// content.addEventListener("click", () => {
//   call();
//   const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new SpeechRecognition();

//   recognition.onresult = (event) => {
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
//   };

//   recognition.start();

//   // Debugging statement to check if Call function works
// });
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
  };
window.addEventListener('load',()=>{
    recognition.start();
});



function takeCommand(message) {
  if (
    message.includes("hey") ||
    message.includes("hello") ||
    message.includes("hi")
  ) {
    speak("Hello Sir, How May I Help You?");
  } else if (message.includes("open portfolio")) {
    window.open("https://karthikbatta.me/", "_blank");
  } else if (message.includes("open Google")) {
    window.open("https://google.com", "_blank");
  } else if (message.includes("open nptel")) {
    window.open("https://onlinecourses.nptel.ac.in/", "_blank");
  } else if (message.includes("other resume")) {
    window.open(
      "https://www.overleaf.com/project/661975720213126a4dbca776",
      "_blank"
    );
  } else if (message.includes("open portfolio contact")) {
    window.open(
      "https://docs.google.com/spreadsheets/d/1oyfg9Mdsaj0P9M71ncmFirBNTbaMrsZY0yDBjYICkUs/edit#gid=0",
      "_blank"
    );
  } else if (message.includes("placement series")) {
    window.open(
      "https://drive.google.com/drive/folders/1SkCOcAS0Kqvuz-MJkkjbFr1GSue6Ms6m",
      "_blank"
    );
  } else if (message.includes("github")) {
    window.open("https://github.com/karthik13647", "_blank");
  } else if (message.includes("chatbot")) {
    window.open("https://chat.openai.com/", "_blank");
  } else if (message.includes("consistency")) {
    window.open("https://leetcode.com/problemset/", "_blank");
  } else if (message.includes("resume")) {
    window.open(
      "https://www.overleaf.com/project/660312f9b0deeec5090b762a",
      "_blank"
    );
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
  } else if (message.includes("facebook")) {
    window.open("https://facebook.com", "_blank");
  } else if (message.includes("gmail")) {
    window.open("https://gmail.com", "_blank");
  } else if (message.includes("instagram")) {
    window.open("https://instagram.com", "_blank");
  } else if (message.includes("music")) {
    window.open(
      "https://www.jiosaavn.com/featured/lets-play-justin-bieber/fHF5W2y22Wc_",
      "_blank"
    );
  } else if (message.includes("linkedin")) {
    window.open("https://www.linkedin.com/in/karthik-b-475484259/", "_blank");
  } else if (
    message.includes("what") ||
    message.includes("who") ||
    message.includes("where") ||
    message.includes("how") ||
    message.includes("when")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "This is what I found on the internet regarding " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message
        .replace("wikipedia", "")
        .trim()}`,
      "_blank"
    );
    const finalText = "This is what I found on Wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "The current time is " + time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = "Today's date is " + date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("whatsapp")) {
    window.open("whatsapp://");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else if (message.includes("telegram")) {
    window.open("telegram:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on Google";
    speak(finalText);
  }
}
