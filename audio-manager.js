function setupAudio() {
  const musicAudio = new Howl({
    src: ['starwars_naboo_suite.mp3'],
    html5: true,
    autoplay: true,
    loop: true
  });
  musicAudio.play();
}
window.setupAudio = setupAudio;
