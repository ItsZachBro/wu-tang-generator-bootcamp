document.getElementById("nameGeneratorForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const userName = document.getElementById("userName").value;
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;
    const question4 = document.getElementById("question4").value;
    const question5 = document.getElementById("question5").value;
  
    const nameParts = [
      ["Furious", "Master", "Salient", "Enigmatic",
        "Surreal", "Luminous", "Illustrious ", "Majestic", "Ethereal", "Ineffable", "Malevolent",
        "Nostalgic", "Benevolent", "Galactic", "Celestial", "Incandescent", "Nebulous", "Radiant",
        "Harmonious", "Zenith", "Aurora", "Infinite", "Wicked", "Clever", "Mighty", "Unyeilding", "Undying"],
      ["Dragon", "Unicorn", "Phoenix", "Dragon", "Chimera", "Kraken", "Sphinx", "Yeti", "Minotaur",
        "Basilisk", "Cerberus", "Gorgon", "Falcon", "Pegasus", "Manticore", "Centaur", "Griffin", "Wyvern", "Fang",
        "Naga", "Werewolf", "Savage", "Tiger", "Panther", "Crane", "Leopard", "Sage", "Warrior", "Immortal", "Eagle", "Wolf"],
    ];
  
    const getIndex = (answer) => {
        const firstChar = answer.trim().charAt(0).toLowerCase();
        const index = (firstChar.charCodeAt(0) - 'a'.charCodeAt(0)) % nameParts[0].length;
        return (index + userName.length) % nameParts[0].length;
      };
    
      const namePart1 = nameParts[0][(getIndex(question1) + getIndex(question2) + getIndex(question5)) % nameParts[0].length];
      const namePart2 = nameParts[1][(getIndex(question3) + getIndex(question4) + getIndex(question5)) % nameParts[1].length];
    
      const wuTangClanName = `${namePart1} ${namePart2}`;
    
      document.getElementById("userGivenName").innerText = userName;
      document.getElementById("generatedName").innerText = wuTangClanName;
    });
  