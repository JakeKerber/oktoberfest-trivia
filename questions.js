/* =====================================================================
   OKTOBERFEST TRIVIA — QUESTIONS FILE  (edit me!)
   =====================================================================
   HOW TO ADD A QUESTION: copy one block below, paste it into the list,
   and change the text. Keep the commas between blocks.

     {
       q: "Your question text?",
       choices: ["Option A", "Option B", "Option C", "Option D"],
       answer: 2,          // index of the correct choice: 0=A, 1=B, 2=C, 3=D
       level: "easy",      // "easy" or "medium" (for your reference)
       kid: true,          // optional: marks kid-friendly questions
       fact: "Optional fun fact shown on the TV after the reveal."
     },

   Exactly 4 choices per question. Save, then refresh the TV page.
   ===================================================================== */

window.GAME_TITLE = "OktKerberfest Trivia";

// Default seconds per question (0 = no timer). When it hits zero the answer is
// revealed automatically; the host can still press Space to reveal early.
// The TV lobby's Timer dropdown can override this for a game.
window.TIMER_SECONDS = 30;

window.TRIVIA_QUESTIONS = [
  // ---------- Oktoberfest history ----------
  {
    q: "In which German city is the original Oktoberfest held?",
    choices: ["Berlin", "Munich", "Hamburg", "Cologne"],
    answer: 1, level: "easy", kid: true,
    fact: "In German the city is München, and locals call the festival simply \"die Wiesn\"."
  },
  {
    q: "In what year was the very first Oktoberfest held?",
    choices: ["1776", "1810", "1871", "1906"],
    answer: 1, level: "medium",
    fact: "It took place in October 1810."
  },
  {
    q: "The first Oktoberfest celebrated what event?",
    choices: ["A royal wedding", "The end of a war", "A record harvest", "A king's coronation"],
    answer: 0, level: "medium",
    fact: "Crown Prince Ludwig of Bavaria married Princess Therese of Saxe-Hildburghausen on October 12, 1810."
  },
  {
    q: "What was the big event that closed out the first Oktoberfest in 1810?",
    choices: ["A beer-drinking contest", "A fireworks show", "A horse race", "A yodeling contest"],
    answer: 2, level: "medium",
    fact: "Horse races were part of Oktoberfest for over a century after that."
  },
  {
    q: "The Oktoberfest grounds, the \"Theresienwiese,\" are named after whom?",
    choices: ["A famous brewer", "Saint Teresa", "The princess bride of 1810", "A Munich mayor"],
    answer: 2, level: "medium",
    fact: "Theresienwiese means \"Therese's meadow\" — that's why locals call the fest \"die Wiesn\"."
  },
  {
    q: "Crown Prince Ludwig, the 1810 groom, later became what?",
    choices: ["Emperor of Austria", "King of Bavaria", "Pope", "Mayor of Munich"],
    answer: 1, level: "medium",
    fact: "He became King Ludwig I of Bavaria in 1825."
  },
  {
    q: "Despite its name, Oktoberfest usually begins in which month?",
    choices: ["August", "October", "November", "September"],
    answer: 3, level: "easy",
    fact: "It starts in mid-to-late September and wraps up on the first Sunday in October (or October 3, German Unity Day, if that falls later)."
  },
  {
    q: "Who traditionally taps the first keg to open Oktoberfest?",
    choices: ["The Mayor of Munich", "The German Chancellor", "The oldest brewer", "A lucky visitor"],
    answer: 0, level: "easy",
    fact: "The tapping happens at noon on opening day in the Schottenhamel tent."
  },
  {
    q: "After tapping the first keg, the Mayor shouts \"O'zapft is!\" What does it mean?",
    choices: ["Cheers, everyone!", "It's tapped!", "Let's dance!", "Bring the pretzels!"],
    answer: 1, level: "medium",
    fact: "It's Bavarian dialect for \"Es ist angezapft\" — \"It is tapped!\""
  },
  {
    q: "Roughly how many visitors come to Munich's Oktoberfest each year?",
    choices: ["About 60,000", "About 600,000", "About 6 million", "About 60 million"],
    answer: 2, level: "medium",
    fact: "Recent years have drawn roughly 6 to 7 million visitors."
  },

  // ---------- Beer ----------
  {
    q: "A standard Oktoberfest beer mug (a \"Mass\") holds how much beer?",
    choices: ["Half a liter", "1 liter", "2 liters", "3 liters"],
    answer: 1, level: "easy",
    fact: "One liter is about 34 U.S. fluid ounces — nearly three cans of beer."
  },
  {
    q: "Which of these breweries is NOT one of the Munich breweries that serve beer at Oktoberfest?",
    choices: ["Paulaner", "Augustiner", "Spaten", "Beck's"],
    answer: 3, level: "medium",
    fact: "Only Munich breweries may pour at the Wiesn: Augustiner, Hacker-Pschorr, Hofbräu, Löwenbräu, Paulaner and Spaten. Beck's is from Bremen."
  },
  {
    q: "The famous German beer purity law is called the…",
    choices: ["Reinheitsgebot", "Bierstube", "Gemütlichkeit", "Weltanschauung"],
    answer: 0, level: "medium",
    fact: "Bavaria issued it in 1516."
  },
  {
    q: "The 1516 Bavarian purity law allowed beer to contain water, barley and what else?",
    choices: ["Wheat", "Sugar", "Hops", "Honey"],
    answer: 2, level: "medium",
    fact: "Yeast wasn't mentioned — its role in brewing wasn't understood yet."
  },
  {
    q: "The Märzen beer style gets its name from what?",
    choices: ["A town in Bavaria", "The month of March", "A brewer named Märzen", "The planet Mars"],
    answer: 1, level: "medium",
    fact: "It was traditionally brewed in March (\"März\") and stored in cool cellars through summer."
  },
  {
    q: "Hops, used to flavor beer, come from which part of the hop plant?",
    choices: ["The roots", "The leaves", "The seeds", "The flowers (cones)"],
    answer: 3, level: "medium",
    fact: "Bavaria's Hallertau region is one of the largest hop-growing areas in the world."
  },
  {
    q: "Which grain is most commonly malted to make beer?",
    choices: ["Rice", "Barley", "Corn", "Oats"],
    answer: 1, level: "easy"
  },
  {
    q: "How do you say \"Cheers!\" in German?",
    choices: ["Prost!", "Danke!", "Tschüss!", "Hallo!"],
    answer: 0, level: "easy", kid: true,
    fact: "Make eye contact when you clink glasses — it's tradition!"
  },
  {
    q: "The tent song \"Ein Prosit\" is a toast to \"Gemütlichkeit.\" What does that word mean?",
    choices: ["Strength", "Victory", "Coziness and good cheer", "Thirst"],
    answer: 2, level: "medium",
    fact: "Bands play \"Ein Prosit\" again and again, and the whole tent raises a toast."
  },

  // ---------- Food ----------
  {
    q: "Which twisted, salty baked snack is a classic at Oktoberfest?",
    choices: ["Bagel", "Croissant", "Pretzel", "Donut"],
    answer: 2, level: "easy", kid: true,
    fact: "In Bavaria a pretzel is called a \"Brezn.\""
  },
  {
    q: "Sauerkraut is made from which vegetable?",
    choices: ["Cabbage", "Potato", "Cucumber", "Onion"],
    answer: 0, level: "easy", kid: true,
    fact: "It's finely shredded cabbage that has been fermented."
  },
  {
    q: "At Oktoberfest, if you order a \"Hendl,\" what do you get?",
    choices: ["A sausage", "A potato pancake", "A cheese plate", "Roast chicken"],
    answer: 3, level: "medium",
    fact: "Spit-roasted half chickens are one of the most popular Wiesn meals."
  },
  {
    q: "By Bavarian tradition, Weisswurst (white sausage) should be eaten before…",
    choices: ["Breakfast", "Noon", "Sunset", "Midnight"],
    answer: 1, level: "medium",
    fact: "The saying goes it shouldn't hear the church bells ring at noon. It's often eaten with sweet mustard and a pretzel."
  },
  {
    q: "Obatzda, a Bavarian beer-garden spread, is made mainly from what?",
    choices: ["Chopped liver", "Mashed beans", "Pickled herring", "Cheese"],
    answer: 3, level: "medium",
    fact: "It's usually ripe Camembert mashed with butter, paprika and onions."
  },
  {
    q: "Schweinshaxe is a Bavarian favorite. What is it?",
    choices: ["Roasted pork knuckle", "A potato dumpling", "A fried fish", "A cabbage roll"],
    answer: 0, level: "medium",
    fact: "It's roasted until the skin is super crispy."
  },
  {
    q: "The heart-shaped cookies hung around people's necks at Oktoberfest are made of what?",
    choices: ["Sugar cookie", "Shortbread", "Gingerbread", "Chocolate"],
    answer: 2, level: "easy", kid: true,
    fact: "They're called Lebkuchenherzen and are decorated with icing messages."
  },
  {
    q: "What is the main fruit filling in a classic Apfelstrudel?",
    choices: ["Cherries", "Apples", "Pears", "Plums"],
    answer: 1, level: "easy", kid: true,
    fact: "\"Apfel\" is the German word for apple."
  },

  // ---------- Bavaria ----------
  {
    q: "Munich is the capital of which German state?",
    choices: ["Saxony", "Hesse", "Bavaria", "Berlin"],
    answer: 2, level: "easy",
    fact: "Bavaria (Bayern) is Germany's largest state by area."
  },
  {
    q: "What are the colors of the Bavarian flag?",
    choices: ["Red and white", "Blue and white", "Green and yellow", "Black and gold"],
    answer: 1, level: "easy", kid: true,
    fact: "The blue-and-white diamond pattern is everywhere at Oktoberfest."
  },
  {
    q: "Which fairy-tale Bavarian castle is famous for inspiring Disney's Sleeping Beauty Castle?",
    choices: ["Neuschwanstein", "Windsor", "Versailles", "Edinburgh"],
    answer: 0, level: "easy", kid: true,
    fact: "It was built for King Ludwig II, starting in 1869."
  },
  {
    q: "Which river flows through Munich?",
    choices: ["Rhine", "Elbe", "Danube", "Isar"],
    answer: 3, level: "medium",
    fact: "Munichers even surf on a standing wave in the Eisbach, a channel of the Isar."
  },
  {
    q: "Germany's highest mountain, the Zugspitze, is in which state?",
    choices: ["Bavaria", "Saxony", "Hamburg", "Lower Saxony"],
    answer: 0, level: "medium",
    fact: "It's about 2,962 meters (9,718 feet) tall, right on the Austrian border."
  },
  {
    q: "The Hofbräuhaus, one of the world's most famous beer halls, is in which city?",
    choices: ["Vienna", "Frankfurt", "Prague", "Munich"],
    answer: 3, level: "easy",
    fact: "It was founded in 1589 as a royal brewery for the Duke of Bavaria."
  },

  {
    q: "Golden lions appear on the Bavarian coat of arms. Which animal is on Germany's national coat of arms?",
    choices: ["A lion", "A bear", "An eagle", "A horse"],
    answer: 2, level: "easy", kid: true,
    fact: "Germany's coat of arms shows a black eagle on a gold background, while Bavaria's state arms are held up by two golden lions."
  },

  // ---------- German culture & language ----------
  {
    q: "What are traditional Bavarian leather shorts called?",
    choices: ["Lederhosen", "Dirndl", "Schnitzel", "Strudel"],
    answer: 0, level: "easy", kid: true,
    fact: "\"Leder\" means leather and \"Hosen\" means trousers."
  },
  {
    q: "What is the name of the traditional dress with an apron worn at Oktoberfest?",
    choices: ["Kimono", "Sari", "Poncho", "Dirndl"],
    answer: 3, level: "easy", kid: true
  },
  {
    q: "At Oktoberfest, what is a \"Riesenrad\"?",
    choices: ["A beer wagon", "A Ferris wheel", "A brass band", "A giant pretzel"],
    answer: 1, level: "medium", kid: true,
    fact: "\"Riesenrad\" literally means \"giant wheel.\""
  },
  {
    q: "What kind of band usually plays the music in the beer tents?",
    choices: ["Brass band", "String quartet", "Rock band", "Steel drum band"],
    answer: 0, level: "easy", kid: true,
    fact: "Think tubas, trumpets and trombones — the classic \"oom-pah\" sound."
  },
  {
    q: "What does the German word \"Danke\" mean?",
    choices: ["Hello", "Goodbye", "Thank you", "Please"],
    answer: 2, level: "easy", kid: true,
    fact: "\"Danke schön\" means \"thank you very much.\""
  },
  {
    q: "What is the capital city of Germany?",
    choices: ["Munich", "Frankfurt", "Hamburg", "Berlin"],
    answer: 3, level: "easy", kid: true
  }
];
