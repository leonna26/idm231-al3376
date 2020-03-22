{
  // Allow user to mute and play the background music
  var app_music = document.getElementById('appMusic');
  var music_button = document.getElementById('music-button');
  music_button.addEventListener('click', function() {PlayPause()}, false);

  function PlayPause() {  
    var which_state = music_button.getAttribute('src');

    if (which_state === 'images/pause.png') {
      app_music.pause();
      music_button.setAttribute('src', 'images/playbutton.png')
      document.getElementById('music-text').innerHTML = 'Play Music';
      console.log('music paused');
    } else {
      app_music.play();
      music_button.setAttribute('src', 'images/pause.png')
      document.getElementById('music-text').innerHTML = 'Pause Music';
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

    var invalid_date;
    if (date_test.includes('/')){

      var date_test = date_test.split('/');

      var month = date_test[0];
      console.log('Month is ' + month);
      var day = date_test[1];
      console.log('Day is ' + day);

      if (date_test[2] != undefined) {
        var year = date_test[2];
        console.log('Year is ' + year);

        date_to_check = month + '/' + day;

        if (year.length != 4 || date_to_check == '2/30' || date_to_check == '2/31' || date_to_check == '4/31' || date_to_check == '6/31' || date_to_check == '9/31' || date_to_check == '11/31') {
          invalid_date = true;
        } else {
          invalid_date = false;
        }
      }
    } else {
      invalid_date = true;
    }
    ////////////////////////////////////////////////////////////////////////

    if  (isNaN(date) || invalid_date) {
      feedback.innerHTML = "Please enter a valid date in this format: /MM/DD/YYYY";
      console.log('date error: invalid date entered');
      date.focus();
      date.value = '';
      feedback.hidden = false;
    } else {
        feedback.hidden = true;
        console.log('date is valid');
        
        getSucc();
    }
  }


  // to get the buttons
  var fishbone = document.getElementById('fishbone');
  var snake = document.getElementById('snake');
  var starfish = document.getElementById('starfish');
  var leek = document.getElementById('leek');
  var money = document.getElementById('money');
  var easter = document.getElementById('easter');
  var firecracker = document.getElementById('firecracker');
  var shark = document.getElementById('shark');
  var buttonstrings = document.getElementById('buttonstrings');
  var zebra = document.getElementById('zebra');
  var aloe = document.getElementById('aloe');
  var panda = document.getElementById('panda');

  // making the icon buttons functional
  fishbone.addEventListener('click', function() {displaysuccEntry('fish');});
  snake.addEventListener('click', function() {displaysuccEntry('snakep');});
  starfish.addEventListener('click', function() {displaysuccEntry('star');});
  leek.addEventListener('click', function() {displaysuccEntry('hleek');});
  money.addEventListener('click', function() {displaysuccEntry('moneyp');});
  easter.addEventListener('click', function() {displaysuccEntry('easterc');});
  firecracker.addEventListener('click', function() {displaysuccEntry('mexican');});
  shark.addEventListener('click', function() {displaysuccEntry('sharks');});
  buttonstrings.addEventListener('click', function() {displaysuccEntry('string');});
  zebra.addEventListener('click', function() {displaysuccEntry('zebra');});
  aloe.addEventListener('click', function() {displaysuccEntry('aloep');});
  panda.addEventListener('click', function() {displaysuccEntry('pandap');});

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

  const bday = document.getElementById('bday');
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
  displayPokedex(pokemon);

  return false;
}

// Random phrase generator that outputs if the person entered a name.
function getPhrase(pokemonTemp) {
  name = getName();

  var pokemonFL = pokemonTemp.charAt(0).toUpperCase();
  var pokemonT = pokemonFL + pokemonTemp.slice(1);
  
  var phrases;
  if (pokemonT == "Arcanine"){
    phrases = [
      /* 0  */"Ah, " + name + ", looks like you are an " + pokemonT,
      /* 1  */"Hmm, seems like you are an " + pokemonT + ", " + name,
      /* 2  */"How interesting! " + name + ", it turns out you're an " + pokemonT,
      /* 3  */"Not bad, " + name + "! You are an " + pokemonT,
      /* 4  */"I'm not sure how you'll take this, " + name + ", but you're an " + pokemonT,
      /* 5  */"Now " + name + ", you'd better sit down for this: you're an " + pokemonT,
      /* 6  */"Well well well, if it isn't " + name + " masquerading as an " + pokemonT,
      /* 7  */"The results are in " + name + ": You are most similar to an " + pokemonT,
      /* 8  */name + ", I'm shocked! You are, in fact, an " + pokemonT,
      /* 9  */"Guess what, " + name + "? You're an " + pokemonT,
      /* 10 */"Yer an " + pokemonT + ", Harry!... I mean " + name,
      /* 11 */"I wish I could be an " + pokemonT + " just like you, " + name
    ];
  }
  else {
    phrases = [
      /* 0  */"Ah, " + name + ", looks like you are a " + pokemonT,
      /* 1  */"Hmm, seems like you are a " + pokemonT + ", " + name,
      /* 2  */"How interesting! " + name + ", it turns out you're a " + pokemonT,
      /* 3  */"Not bad, " + name + "! You are a " + pokemonT,
      /* 4  */"I'm not sure how you'll take this, " + name + ", but you're a " + pokemonT,
      /* 5  */"Now " + name + ", you'd better sit down for this: you're a " + pokemonT,
      /* 6  */"Well well well, if it isn't " + name + " masquerading as a " + pokemonT,
      /* 7  */"The results are in " + name + ": You are most similar to a " + pokemonT,
      /* 8  */name + ", I'm shocked! You are, in fact, a " + pokemonT,
      /* 9  */"Guess what, " + name + "? You're a " + pokemonT,
      /* 10 */"Yer a " + pokemonT + ", Harry!... I mean " + name,
      /* 11 */"I wish I could be a " + pokemonT + " just like you, " + name
    ];
  }

  var randBetween = Math.floor(Math.random()*12);
  console.log(randBetween);

  var chosenPhrase = phrases[randBetween];
  console.log(chosenPhrase);

  return chosenPhrase;
}


// Display the right result 
function displayPokedex(succ) {

  name = getName();
  phrase = getPhrase(succ);

  switch (succ) {

    case 'fishbone':
      console.log('Ran fishbone');
      clearZodiac();

      if (name == "") {
        fishRead.textContent = "Fishbone Orchid - also known as Ric Rac or Zigzag. Fast growing, ambitious. With your climbing stems you know you'll go far in life. You are fierce on the outside but gentle on the inside - your outer petals are dark violet, and inner white petals.";
      } else {
        fishRead.textContent = phrase + "Fishbone Orchid - also known as Ric Rac or Zigzag. Fast growing, ambitious. With your climbing stems you know you'll go far in life. You are fierce on the outside but gentle on the inside - your outer petals are dark violet, and inner white petals.";
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
        snakeRead.textContent = phrase + "Snake Plant. You are simple and anything goes. You are tough on the outside but easily swayed by your feelings and emotions.";
      }

      showZodiac(succ);
      playSound('snakeAud');
      break;

    case 'starfish':
      console.log('Ran starfish');
      clearZodiac();

      if (name == "") {
        starRead.textContent = "Starfish Cactus - also known as carrion Flower, Star Flower, and Toad Cactus. You are special. Just as your flowers give off an unpleasant smell, others never know what you're up to. You are uniquely attractive - attracting flies and other insects, and it helps pollinate the blooms.";
      } else {
        starRead.textContent = phrase + "Starfish Cactus - also known as carrion Flower, Star Flower, and Toad Cactus. You are special. Just as your flowers give off an unpleasant smell, others never know what you're up to. You are uniquely attractive - attracting flies and other insects, and it helps pollinate the blooms.";
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
        leekRead.textContent = phrase + "House Leek - also known as Hen and Chicks, Old Man and Woman, and Roof House Leek. You love to care for others. This plant is nicknamed Hen and Chicks because mother plants cluster around its base like chicks.";
      }

      showZodiac(succ);
      playSound('leekAud');
      break;

    case 'money':
      console.log('Ran money');
      clearZodiac();

      if (name == "") {
        moneyRead.textContent = "Money Plant - also known as Jade Plant. You're often considered one of the 'old fashioned' of succulents, but don't let that bring you down. It is believed that the energy from this plant comes from its well-rooted energy that brings new growth. You are resilient, and able to thrive in even harsh environments." ;
      } else {
        moneyRead.textContent = phrase + "Money Plant - also known as Jade Plant. You're often considered one of the 'old fashioned' of succulents, but don't let that bring you down. It is believed that the energy from this plant comes from its well-rooted energy that brings new growth. You are resilient, and able to thrive in even harsh environments.";
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
        sanRead.textContent = phrase + "Easter Cactus, also known as the Spring Cactus. You are full of bloom, full of joy. Full of color bursting bright. After winter months, you speak of spring and good times coming, joys ahead. Positive vibes all around.";
      }

      showZodiac(succ);
      playSound('easterAud');
      break;

    case 'firecracker':
      console.log('Ran firecracker');
      clearZodiac();

      if (name == "") {
        firecrackerRead.textContent = "Mexican Firecracker Contrary to its name, this is a slow growing plant. But as it grows, it shoots into many and spreads out. Your time will come, my friend. Slow progress is not no progress.";
      } else {
        firecrackerRead.textContent = phrase + "Mexican Firecracker Contrary to its name, this is a slow growing plant. But as it grows, it shoots into many and spreads out. Your time will come, my friend. Slow progress is not no progress.";
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
        sharkRead.textContent = phrase + "Shark's Tooth. You grow in the wild, dry, rocks. Though you flush red when faced with drought and the heat of the sun, you  endure difficulties with strength.";
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
        rapRead.textContent = phrase + "String of Buttons - also known as Baby's Necklace, Necklace Vine, and Stacked Crassula. This fast growing plant has rosy edges, which contrasts with its gentle personality. Its colonizing qualities means it is aggressive and wants to spread its influence.";
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
        zebraRead.textContent = phrase + "Zebra Plant. You are no fuss, simple to love and be cared for. You're always a go-to for your unique and cheerful pattern, and you love making people happy.";
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
        aloeRead.textContent = phrase + "Aloe. You are known to be spiky, spunky, and dramatic. Yet you are attractive and gifted in a lot of things, providing those around you with emotional, mental, and practical love and care.";
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
        pandaRead.textContent = phrase + "Panda Plant, also known as Pussy Ears. You are gentle, kind, soft around the edges. You bring harmony and ease to all you encounter.";
      }

      showZodiac(succ);
      playSound('pandaAud');
      break;

    case 'helpbutton':
      console.log('Ran helpbutton');
      clearZodiac();

      if (name == "") {
        helpInfo.textContent = "Hi! Not sure how to start? Here's some help!";
      } else {
        helpInfo.textContent = "Hi," + name + "not sure how to start? Here'some help!";
      }

      showZodiac(succ);
      playSound('helpAud');
      break;
  }
}


// Show the corresponding succulent match
function showZodiac(succ) {
  document.getElementById(succ).setAttribute('class', 'succEntry showZodiac');
  document.getElementById('inputForm').setAttribute('class', 'inputForm showZodiac');
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
  document.getElementById('inputForm').setAttribute('class', 'inputForm');
}


// Retrieve first name
function getName() {
  var fnameT = document.getElementById('fName').value;
      if (fName == "") { console.log('No name retrieved.'); }
      else { console.log('Name was retrieved.'); }

  var fletter = fNameT.charAt(0).toUpperCase();
  var fname = fletter + fNameT.slice(1);
  
  return fName;
}

// Play the sound when box is opened
function playSound(succ) {
  var cry = document.getElementById(succ);
  cry.volume = 0.4;
  cry.play();
}

}