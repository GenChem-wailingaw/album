<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
<title>Nyan Cat Fan Page</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    height: 100%;
    font-family: 'Press Start 2P', cursive;
    background: #000;
    color: #fff;
  }

  /* Background rainbow animation stripes */
  body {
    background:
      repeating-linear-gradient(
        45deg,
        #ff3f8b,
        #ff3f8b 20px,
        #ffcc1b 20px,
        #ffcc1b 40px,
        #4affdb 40px,
        #4affdb 60px,
        #ff3f8b 60px,
        #ff3f8b 80px
      );
  }

  /* Container */
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  /* Nyan cat */
  .nyan-cat {
    position: relative;
    width: 180px;
    height: 140px;
    background: linear-gradient(135deg, #f0a1e8 30%, #fae982 70%);
    border-radius: 24px;
    box-shadow: 0 0 10px #ff69b4;
    animation: float 3s ease-in-out infinite;
    z-index: 10;
  }
  /* "Pop-Tart" body */
  .nyan-cat::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20px;
    width: 140px;
    height: 120px;
    background: linear-gradient(135deg, #fabebf 0%, #fdd1a6 100%);
    border-radius: 12px;
    box-shadow:
      inset 0 5px 10px rgba(255 255 255 / .6),
      inset 0 -5px 10px rgba(255 165 0 / 0.5);
  }
  /* Sprinkles */
  .nyan-cat::after {
    content: "";
    position: absolute;
    top: 15px;
    left: 40px;
    width: 100px;
    height: 90px;
    background: radial-gradient(circle at 20% 15%, #ff5c5c 5px, transparent 6px),
                radial-gradient(circle at 40% 30%, #fffc74 4px, transparent 6px),
                radial-gradient(circle at 55% 60%, #79ff52 7px, transparent 10px),
                radial-gradient(circle at 75% 35%, #6483ff 6px, transparent 9px),
                radial-gradient(circle at 75% 70%, #cc53f9 5px, transparent 8px);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    pointer-events: none;
  }

  /* Head */
  .head {
    position: absolute;
    top: 48px;
    left: -52px;
    width: 60px;
    height: 54px;
    background: #999;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    box-shadow: inset -8px -4px 5px rgba(0,0,0,.25);
  }
  /* Ears */
  .ear {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #aaa, #555);
    border-radius: 40% 40% 70% 70%/60% 60% 40% 40%;
    top: 2px;
  }
  .ear.left {
    left: 2px;
    transform: rotate(-20deg);
    box-shadow: inset 1px 1px 2px rgba(255 255 255 / 0.3);
  }
  .ear.right {
    right: 2px;
    transform: rotate(20deg);
    box-shadow: inset 1px 1px 2px rgba(255 255 255 / 0.3);
  }
  /* Eyes */
  .eye {
    position: absolute;
    top: 22px;
    width: 10px;
    height: 11px;
    background: #222;
    border-radius: 50%;
    box-shadow: inset 1px 1px 2px #fff;
  }
  .eye.left {
    left: 15px;
  }
  .eye.right {
    right: 15px;
  }
  /* Nose */
  .nose {
    position: absolute;
    top: 38px;
    left: 26px;
    width: 8px;
    height: 4px;
    background: #a00;
    border-radius: 10px 10px 0 0;
  }
  /* Mouth */
  .mouth {
    position: absolute;
    bottom: 10px;
    left: 18px;
    width: 24px;
    height: 6px;
    border-bottom: 3px solid #a00;
    border-radius: 0 0 12px 12px;
  }

  /* Tail pixels - rainbow trailing */
  .tail {
    position: absolute;
    top: 90px;
    left: 176px;
    display: flex;
    gap: 3px;
    animation: tailMove 1s linear infinite;
  }
  .tail .pixel {
    width: 15px;
    height: 15px;
    border-radius: 3px;
    box-shadow: 0 0 4px currentColor;
  }
  .pixel-red    { background: #ff3f8b; color: #ff3f8b; }
  .pixel-yellow { background: #ffcc1b; color: #ffcc1b; }
  .pixel-cyan   { background: #4affdb; color: #4affdb; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @keyframes tailMove {
    0%   { transform: translateX(0); }
    50%  { transform: translateX(-6px); }
    100% { transform: translateX(0); }
  }

  /* Title text */
  .title {
    position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    color: #ffdd74;
    font-size: 1.25rem;
    text-shadow:
      2px 2px 0 #ff3f8b,
      -2px -2px 0 #4affdb;
    letter-spacing: 2px;
  }

  /* Music button */
  .music-controls {
    position: fixed;
    bottom: 15px;
    right: 15px;
    background: rgba(0,0,0,0.7);
    border-radius: 40px;
    padding: 0.4rem 0.75rem;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 0 10px #ff69b4;
    transition: background-color 0.3s ease;
  }
  .music-controls:hover, .music-controls:focus {
    background: rgba(0,0,0,0.9);
    outline: none;
  }
  .music-icon {
    font-size: 1.15rem;
  }
</style>
</head>
<body>
  <div class="container" role="main" aria-label="Nyan Cat website">
    <div class="title" aria-live="polite">NYAN CAT!!!</div>

    <div class="nyan-cat" aria-label="Animated Nyan Cat">
      <div class="head" role="img" aria-label="Nyan cat head">
        <div class="ear left"></div>
        <div class="ear right"></div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="nose"></div>
        <div class="mouth"></div>
      </div>
      <div class="tail" aria-hidden="true">
        <div class="pixel pixel-red"></div>
        <div class="pixel pixel-yellow"></div>
        <div class="pixel pixel-cyan"></div>
        <div class="pixel pixel-red"></div>
        <div class="pixel pixel-yellow"></div>
        <div class="pixel pixel-cyan"></div>
      </div>
    </div>
  </div>

  <div tabindex="0" class="music-controls" role="button" aria-pressed="true" aria-label="Toggle Nyan Cat music" id="music-toggle">
    <span class="music-icon" id="music-icon">🔊</span>
    <span id="music-text">Pause Music</span>
  </div>

  <audio id="nyan-audio" loop preload="auto" autoplay>
    <source src="https://ia800506.us.archive.org/14/items/nyannyannyan/NyanCatoriginal.mp3" type="audio/mpeg" />
    Sorry, your browser does not support the audio element.
  </audio>

<script>
  const audio = document.getElementById('nyan-audio');
  const toggle = document.getElementById('music-toggle');
  const icon = document.getElementById('music-icon');
  const text = document.getElementById('music-text');

  // Start playing audio on user interaction for mobile autoplay policy compliance
  const startAudio = () => {
    if(audio.paused) {
      audio.play().catch(e => {});
    }
    window.removeEventListener('click', startAudio);
    window.removeEventListener('touchstart', startAudio);
  };
  window.addEventListener('click', startAudio);
  window.addEventListener('touchstart', startAudio);

  toggle.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
      icon.textContent = '🔊';
      text.textContent = 'Pause Music';
      toggle.setAttribute('aria-pressed', 'true');
    } else {
      audio.pause();
      icon.textContent = '🔈';
      text.textContent = 'Play Music';
      toggle.setAttribute('aria-pressed', 'false');
    }
  });

  toggle.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
</script>
</body>
</html>

