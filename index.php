<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Arvo|Dosis|Exo+2&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/vendor/OwlCarousel2-2.3.4/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/vendor/OwlCarousel2-2.3.4/owl.theme.default.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/responsive.css">
    <title>Dice Game</title>
  </head>
<body>

  <div class="container game-content">
    <div class="row text-center h-100">
      <div class="col-6">
        <div class="player-0-panel h-100 active">
          <span class="player-name" id="player-0">Player-1 </span><span class="player-name" id="wins-0"></span>
          <h2 class="score" id="score-0"> 35 </h2>
          <div class="current" id="current-0">4</div>
        </div>
      </div>
      
      <div class="col-6">
        <div class="player-1-panel h-100">
          <span class="player-name" id="player-1">Player-2 </span><span class="player-name" id="wins-1"></span>
          <h2 class="score" id="score-1"> 49 </h2>
          <div class="current" id="current-1">3</div>
        </div>
      </div>
      
        <img class="img-fluid dice" id="dice-1" src="assets/images/dice-5.png">
        <img class="img-fluid dice" id="dice-2" src="assets/images/dice-3.png">

        <button class="btn btn-new">New Game</button>
        <button class="btn btn-roll">Roll</button>
        <button class="btn btn-hold">Hold</button>
        <input type="text" Placeholder="Winning Score" id="finalScore">
    </div>
  </div>

  <footer class="text-white text-center pt-3">
    <small>Copyright © Dice Game. All rights Reserved. Made by 
      <a href="https://github.com/alfie254" target="_blank">alfie</small>
  </footer>

      <script type="text/javascript" src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="assets/js/script.js"></script>

</body>
</html>