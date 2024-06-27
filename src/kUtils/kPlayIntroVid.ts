export default function kPlayIntroVid(
  url: string,
  callback?: () => void
): void {
  const video = document.createElement("video");

  video.src = url;
  video.autoplay = true;
  video.loop = false;
  video.controls = false;
  if (!("isTauri" in window)) {
    video.muted = true;
  }

  video.style.position = "fixed";
  video.style.top = "0";
  video.style.left = "0";
  video.style.width = "100vw";
  video.style.height = "100vh";
  video.style.zIndex = "9999";

  video.addEventListener("ended", () => {
    document.body.removeChild(video);
    if (callback) {
      callback();
    }
  });

  document.body.appendChild(video);
}
