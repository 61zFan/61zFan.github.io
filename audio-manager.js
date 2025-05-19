function setupAudio() {
  //theme
  const musicAudio = new Howl({
    src: [starwars_naboo_suite.mp3], 
    autoplay: true,
    loop: true,
  });
musicAudio.play();
}
