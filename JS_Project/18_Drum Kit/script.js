document.addEventListener("DOMContentLoaded", () => {
    const drums = document.querySelectorAll(".drum");
    const volumeControl = document.getElementById("volume");
    const recordButton = document.getElementById("record");
    const playbackButton = document.getElementById("playback");

    let volume = 1;
    let isRecording = false;
    let recordedSequence = [];
    let playbackInterval;

    // Play sound
    function playSound(sound) {
        const audio = new Audio(`sounds/${sound}.wav`);
        audio.volume = volume;
        audio.play();
    }

    // mp3
    function playSound(sound) {
        const audio = new Audio(`sounds/${sound}.mp3`); // Ensure file extension is correct
        audio.volume = volume;
        audio.play();
    }

    // Handle drum click
    drums.forEach(drum => {
        drum.addEventListener("click", () => {
            const sound = drum.dataset.sound;
            playSound(sound);
            animateButton(drum);

            if (isRecording) {
                recordedSequence.push({ sound, time: Date.now() });
            }
        });
    });

    // Key bindings
    document.addEventListener("keydown", (e) => {
        const keyToSound = {
            "k": "kick",
            "s": "snare",
            "t": "tom",
            "h": "hi-hat"
        };
        const sound = keyToSound[e.key.toLowerCase()];
        if (sound) {
            const drum = document.querySelector(`[data-sound="${sound}"]`);
            playSound(sound);
            animateButton(drum);

            if (isRecording) {
                recordedSequence.push({ sound, time: Date.now() });
            }
        }
    });

    // Animate button
    function animateButton(button) {
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 100);
    }

    // Adjust volume
    volumeControl.addEventListener("input", (e) => {
        volume = e.target.value;
    });

    // Recording
    recordButton.addEventListener("click", () => {
        isRecording = !isRecording;
        recordedSequence = [];
        recordButton.textContent = isRecording ? "Stop Recording" : "Record";
    });

    // Playback
    playbackButton.addEventListener("click", () => {
        if (recordedSequence.length === 0) return;

        const startTime = recordedSequence[0].time;
        playbackInterval = setInterval(() => {
            const currentTime = Date.now();
            recordedSequence.forEach(event => {
                if (currentTime - startTime >= event.time - startTime) {
                    playSound(event.sound);
                    const drum = document.querySelector(`[data-sound="${event.sound}"]`);
                    animateButton(drum);
                }
            });
        }, 10);
    });
});
