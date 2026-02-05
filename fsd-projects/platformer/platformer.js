$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(400, 650, 290, 20);
createPlatform(800, 550, 300, 20);
createPlatform(400, 500, 290, 20);
createPlatform(800, 400, 300, 20);
createPlatform(400, 300, 290, 20);
createPlatform(1200, 600, 300, 20);

    // TODO 3 - Create Collectables
createCollectable("diamond", 650, 100, 0.5, 0.7);
createCollectable("steve", 1350, 545);
createCollectable("steve", 1000, 350);

    
    // TODO 4 - Create Cannons
createCannon("top", 200, 500);
createCannon("right", 200, 550);
    createCannon("left", 200, 550);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
