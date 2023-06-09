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

fetch("./subtitle.json")
  .then((res) => res.json())
  .then((subtitles) => {
    let serial = 0;
    const text = document.querySelector(".text");
    text.innerText = subtitles[serial];
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        serial++;
        text.innerText = subtitles[serial];
      } else if (e.key === "ArrowLeft") {
        serial--;
        text.innerText = subtitles[serial];
      }
    });
  });
