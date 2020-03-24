{
  // Allow user to mute and play the background music
  var app_music = document.getElementById('appMusic');
  var music_button = document.getElementById('music-button');
  music_button.addEventListener('click', function() {PlayPause()}, false);
  document.getElementById('appMusic').volume = 0.1;

  function PlayPause() {  
    var which_state = music_button.getAttribute('src');

    if (which_state === 'images/pausebutton.png') {
      app_music.pause();
      music_button.setAttribute('src', 'images/playbutton.png')
      document.getElementById('appMusic').innerHTML = 'Play Music';
      console.log('music paused');
    } else {
      app_music.play();
      music_button.setAttribute('src', 'images/pausebutton.png')
      document.getElementById('appMusic').innerHTML = 'Pause Music';
      console.log('music playing');
    }
  }

  // Is the date formatted right?//
  const form = document.forms['inputform'];
  form.addEventListener('submit', checkDate, false);

  var feedback = document.getElementById('feedback');

  // Start checkDate function
  function checkDate(event) {
    console.log('checkdate called');
    event.preventDefault();

    var bday = document.getElementById('date');
    const date = new Date(bday.value);
    console.log(date);

    // is date valid? //
    var date_test = document.getElementById('date').value;
    
    
        getSucc();
    }
  }

  // making the icon buttons functional
  document.getElementById('fish').addEventListener('click', function() {displayhelp('fishbone');});
  document.getElementById('snakep').addEventListener('click', function() {displayhelp('snake');});
  document.getElementById('star').addEventListener('click', function() {displayhelp('starfish');});
  document.getElementById('hleek').addEventListener('click', function() {displayhelp('leek');});
  document.getElementById('moneyp').addEventListener('click', function() {displayhelp('money');});
  document.getElementById('easterc').addEventListener('click', function() {displayhelp('easter');});
  document.getElementById('mexican').addEventListener('click', function() {displayhelp('firecracker');});
  document.getElementById('sharks').addEventListener('click', function() {displayhelp('shark');});
  document.getElementById('string').addEventListener('click', function() {displayhelp('buttonstrings');});
  document.getElementById('zebrap').addEventListener('click', function() {displayhelp('zebra');});
  document.getElementById('aloep').addEventListener('click', function() {displayhelp('aloe');});
  document.getElementById('pandap').addEventListener('click', function() {displayhelp('panda');});

  // Get areas where zodiac phrase will output
  var fishRead = document.getElementById('fishRead');
  var snakeRead = document.getElementById('snakeRead');
  var starRead = document.getElementById('starRead');
  var leekRead = document.getElementById('leekRead');
  var moneyRead = document.getElementById('moneyRead');
  var easterRead = document.getElementById('easterRead');
  var firecrackerRead = document.getElementById('firecrackerRead');
  var sharkRead = document.getElementById('sharkRead');
  var buttonstringsRead = document.getElementById('buttonstringsRead');
  var zebraRead = document.getElementById('zebraRead');
  var aloeRead = document.getElementById('aloeRead');
  var pandaRead = document.getElementById('pandaRead');
  var helpb = document.getElementById('helpb');


// Determine the month entered by the user, find corresponding succulent to display.
var succ;
var name;
var phrase;

function getSucc() {

  const bday = document.getElementById('date');
  const date = new Date(bday.value);

  const whichMonth = date.getUTCMonth() + 1;
  const whichDayOfMonth = date.getUTCDate();


  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    succ = 'fishbone';
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    succ = 'snake';
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    succ = 'starfish';
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    succ = 'leek';
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    succ = 'money';
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    succ = 'easter';
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    succ = 'firecracker';
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    succ = 'shark';
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    succ = 'buttonstrings';
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    succ = 'zebra';
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    succ = 'aloe';
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    succ = 'panda';
  }

  console.log(succ);
  displayhelp(succ);

  return false;
}

// Random phrase generator that outputs if the person entered a name.
function getPhrase(succphrases) {
  name = getName();

  var succFL = succphrases.charAt(0).toUpperCase();
  var succT = succFL + succphrases.slice(1);
  
  var phrases;
  if (succT == "Money Plant"){
    phrases = [
      /* 0  */"Ooh, " + name, 
      /* 1  */"Cool, " + name,
      /* 2  */"Amazing, " + name,
      /* 3  */"What's up, succa! Or " + name,
      /* 4  */"This is way cool, " + name,
      /* 5  */"Awesome sauce, " + name,
      /* 6  */"What do you know, " + name,
      /* 7  */"Look at this, " + name,
      /* 8  */name + ", this is pretty interesting, friend!",
      /* 9  */"Guess what, " + name,
      /* 10 */"You're results are in, " + name,
      /* 11 */"Fascinating, " + name,
    ];
  }
  else {
    phrases = [
      /* 0  */"Ooh, " + name, 
      /* 1  */"Cool, " + name,
      /* 2  */"Amazing, " + name,
      /* 3  */"What's up, succa! Or " + name,
      /* 4  */"This is way cool, " + name,
      /* 5  */"Awesome sauce, " + name,
      /* 6  */"What do you know, " + name,
      /* 7  */"Look at this, " + name,
      /* 8  */name + ", this is pretty interesting, friend!",
      /* 9  */"Guess what, " + name,
      /* 10 */"You're results are in, " + name,
      /* 11 */"Fascinating, " + name,
    ];
  }

  var randBetween = Math.floor(Math.random()*12);
  console.log(randBetween);

  var chosenPhrase = phrases[randBetween];
  console.log(chosenPhrase);

  return chosenPhrase;
}


// Display the right result 
function displayhelp(succ) {

  name = getName();
  phrase = getPhrase(succ);

  switch (succ) {

    case 'fishbone':
      console.log('Ran fishbone');
      clearZodiac();

      if (name == "") {
        fishRead.textContent = "Fishbone Orchid - also known as Ric Rac or Zigzag. Fast growing, ambitious. With your climbing stems you know you'll go far in life. You are fierce on the outside but gentle on the inside - your outer petals are dark violet, and inner white petals.";
      } else {
        fishRead.textContent = phrase + ". You are a Fishbone Orchid - also known as Ric Rac or Zigzag. Fast growing, ambitious. With your climbing stems you know you'll go far in life. You are fierce on the outside but gentle on the inside - your outer petals are dark violet, and inner white petals.";
      }

      showZodiac(succ);
      playSound('fishAud');

      break;

    case 'snake':
      console.log('Ran snake');
      clearZodiac();

      if (name == "") {
        snakeRead.textContent = "Snake Plant. You are simple and anything goes. You are tough on the outside but easily swayed by your feelings and emotions.";
      } else {
        snakeRead.textContent = phrase + ". You are a Snake Plant. You are simple and anything goes. You are tough on the outside but easily swayed by your feelings and emotions.";
      }

      showZodiac(succ);
      playSound('snakeAud');
      break;

    case 'starfish':
      console.log('Ran starfish');
      clearZodiac();

      if (name == "") {
        starRead.textContent = "Starfish Cactus - also known as Carrion Flower, Star Flower, and Toad Cactus. You are special. Just as your flowers give off an unpleasant smell, others never know what you're up to. You are uniquely attractive - attracting flies and other insects, and it helps pollinate the blooms.";
      } else {
        starRead.textContent = phrase + ". You got Starfish Cactus - also known as Carrion Flower, Star Flower, and Toad Cactus. You are special. Just as your flowers give off an unpleasant smell, others never know what you're up to. You are uniquely attractive - attracting flies and other insects, and it helps pollinate the blooms.";
      }

      showZodiac(succ);
      playSound('starAud');
      break;

    case 'leek':
      console.log('Ran leek');
      clearZodiac();

      if (name == "") {
        leekRead.textContent = "House Leek - also known as Hen and Chicks, Old Man and Woman, and Roof House Leek. You love to care for others. This plant is nicknamed Hen and Chicks because mother plants cluster around its base like chicks." ;
      } else {
        leekRead.textContent = phrase + ". You got House Leek - also known as Hen and Chicks, Old Man and Woman, and Roof House Leek. You love to care for others. This plant is nicknamed Hen and Chicks because mother plants cluster around its base like chicks.";
      }

      showZodiac(succ);
      playSound('leekAud');
      break;

    case 'money':
      console.log('Ran money');
      clearZodiac();

      if (name == "") {
        moneyRead.textContent = "Money Plant - also known as Jade Plant. You're often considered one of the 'old fashioned' of succulents, but don't let that bring you down. You are resilient, and able to thrive in even harsh environments." ;
      } else {
        moneyRead.textContent = phrase + ". You got the Money Plant - also known as Jade Plant. You're often considered one of the 'old fashioned' of succulents, but don't let that bring you down. You are resilient, and able to thrive in even harsh environments.";
      }

      showZodiac(succ);
      playSound('moneyAud');
      break;

    case 'easter':
      console.log('Ran easter');
      clearZodiac();

      if (name == "") {
        easterRead.textContent = "Easter Cactus, also known as the Spring Cactus. You are full of bloom, full of joy. Full of color bursting bright. After winter months, you speak of spring and good times coming, joys ahead. Positive vibes all around.";
      } else {
        easterRead.textContent = phrase + ". Your result is the Easter Cactus, also known as the Spring Cactus. You are full of bloom, full of joy. Full of color bursting bright. After winter months, you speak of spring and good times coming, joys ahead. Positive vibes all around.";
      }

      showZodiac(succ);
      playSound('easterAud');
      break;

    case 'firecracker':
      console.log('Ran firecracker');
      clearZodiac();

      if (name == "") {
        firecrackerRead.textContent = "Mexican Firecracker. Contrary to its name, this is a slow growing plant. But as it grows, it shoots into many and spreads out. Your time will come, my friend. Slow progress is not no progress.";
      } else {
        firecrackerRead.textContent = phrase + ". You got the Mexican Firecracker! Contrary to its name, this is a slow growing plant. But as it grows, it shoots into many and spreads out. Your time will come, my friend. Slow progress is not no progress.";
      }

      showZodiac(succ);
      playSound('mexicanAud');
      break;

    case 'shark':
      console.log('Ran shark');
      clearZodiac();

      if (name == "") {
        sharkRead.textContent = "Shark's Tooth. You grow in the wild, dry, rocks. Though you flush red when faced with drought and the heat of the sun, you  endure difficulties with strength.";
      } else {
        sharkRead.textContent = phrase + ". You got Shark's Tooth. You grow in the wild, dry, rocks. Though you flush red when faced with drought and the heat of the sun, you endure difficulties with strength.";
      }

      showZodiac(succ);
      playSound('sharkAud');
      break;

    case 'buttonstrings':
      console.log('Ran buttonstrings');
      clearZodiac();

      if (name == "") {
        buttonstringsRead.textContent = "String of Buttons - also known as Baby's Necklace, Necklace Vine, and Stacked Crassula. This fast growing plant has rosy edges, which contrasts with its gentle personality. Its colonizing qualities means it is aggressive and wants to spread its influence.";
      } else {
        buttonstringsRead.textContent = phrase + ". You got the String of Buttons - also known as Baby's Necklace, Necklace Vine, and Stacked Crassula. This fast growing plant has rosy edges, which contrasts with its gentle personality. Its colonizing qualities means it is aggressive and wants to spread its influence.";
      }

      showZodiac(succ);
      playSound('buttonsAud');
      break;

    case 'zebra':
      console.log('Ran zebra');
      clearZodiac();

      if (name == "") {
        zebraRead.textContent = "Zebra Plant. You are no fuss, simple to love and be cared for. You're always a go-to for your unique and cheerful pattern, and you love making people happy.";
      } else {
        zebraRead.textContent = phrase + ". You got the Zebra Plant. You are no fuss, simple to love and be cared for. You're always a go-to for your unique and cheerful pattern, and you love making people happy.";
      }

      showZodiac(succ);
      playSound('zebraAud');
      break;

    case 'aloe':
      console.log('Ran aloe');
      clearZodiac();

      if (name == "") {
        aloeRead.textContent = "Aloe. You are known to be spiky, spunky, and dramatic. Yet you are attractive and gifted in a lot of things, providing those around you with emotional, mental, and practical love and care.";
      } else {
        aloeRead.textContent = phrase + ". A-loe? Do you hear me? You got Aloe! You are known to be spiky, spunky, and dramatic. Yet you are attractive and gifted in a lot of things, providing those around you with emotional, mental, and practical love and care.";
      }

      showZodiac(succ);
      playSound('aloeAud');
      break;

    case 'panda':
      console.log('Ran panda');
      clearZodiac();

      if (name == "") {
        pandaRead.textContent = "Panda Plant, also known as Pussy Ears. You are gentle, kind, soft around the edges. You bring harmony and ease to all you encounter.";
      } else {
        pandaRead.textContent = phrase + ". You got the Panda Plant, also known as Pussy Ears. You are gentle, kind, soft around the edges. You bring harmony and ease to all you encounter.";
      }

      showZodiac(succ);
      playSound('pandaAud');
      break;

    case 'helpbutton':
      console.log('Ran helpbutton');
      clearZodiac();
      showZodiac(succ);
      playSound('helpAud');
      break;
  }
}


// Show the corresponding succulent match
function showZodiac(succ) {
  document.getElementById(succ).setAttribute('class', 'succEntry showZodiac');
  document.getElementById('inputform').setAttribute('class', 'inputform showZodiac');
}


// Clear screen
function clearZodiac() {
  var succEntries = document.getElementsByClassName('succEntry');

  for (var i = 0; i < succEntries.length; i ++) {
    succEntries[i].setAttribute('class', 'succEntry');
  }
}


// Show form 
function showForm() {
  document.getElementById('inputform').setAttribute('class', 'inputform');
}


// Retrieve first name
function getName() {
  var fName = document.getElementById('firstName').value;
      if (fName == "") { console.log('No name retrieved.'); }
      else { console.log('Name was retrieved.'); }

  var fletter = fName.charAt(0).toUpperCase();
  var fName = fletter + fName.slice(1);
  
  return fName;
}

// Play the sound when box is opened
function playSound(succ) {
  var cry = document.getElementById(succ);
  cry.volume = 0.4;
  cry.play();
}

