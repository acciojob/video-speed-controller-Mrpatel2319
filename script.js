// const inputs = document.querySelectorAll('.controls input');

//     function handleUpdate() {
//       const suffix = this.dataset.sizing || '';
//       document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
//     }

//     inputs.forEach(input => input.addEventListener('change', handleUpdate));
//     inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Toggle play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = '❚ ❚';
    } else {
        video.pause();
        toggle.textContent = '►';
    }
}

// Update the volume
function updateVolume() {
    video.volume = volume.value;
}

// Update playback speed
function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeed.value;
}

// Rewind 10 seconds
function rewindVideo() {
    video.currentTime -= 10;
}

// Forward 25 seconds
function forwardVideo() {
    video.currentTime += 25;
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

// Seek video
function seekVideo(e) {
    const seekTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = seekTime;
}

// Event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volume.addEventListener('input', updateVolume);
playbackSpeed.addEventListener('input', updatePlaybackSpeed);
rewind.addEventListener('click', rewindVideo);
forward.addEventListener('click', forwardVideo);
progress.addEventListener('click', seekVideo);
