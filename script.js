const video = document.querySelector("video");
let playing = false;
document.addEventListener("keydown", async (e) => {
  if (e.key === " " && !playing) {
    await video.play();
    playing = true;
  } else if (e.key === " " && playing) {
    video.pause();
    playing = false;
  }
});
