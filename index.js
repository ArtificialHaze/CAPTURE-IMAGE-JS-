let video = document.getElementById("video");
let snapBtn = document.getElementById("snapshotBtn");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.log(err)
  );
  snapBtn.addEventListener("click", () => {
    ctx.drawImage(video, 0, 0, 512, 336);
  });
}
