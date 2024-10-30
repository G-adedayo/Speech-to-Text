const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const textOutput = document.getElementById('textOutput');

let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = function(event) {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }
        textOutput.value = transcript;
    };

    recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
    };
} else {
    alert("Your browser does not support speech recognition.");
}

startBtn.onclick = function() {
    if (recognition) {
        recognition.start();
        textOutput.placeholder = "Listening...";
    }
};

stopBtn.onclick = function() {
    if (recognition) {
        recognition.stop();
        textOutput.placeholder = "Your text will appear here...";
    }
};
