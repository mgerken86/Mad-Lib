

const promptDiv = document.querySelector('.promptDiv');
const userInput = document.querySelector('#userInput');
const button = document.querySelector('.button');

const answerArray = [];
let currentPromptNumber = 0;
const prompts = ["a body part", "a country", "a food", "an adjective", "an animal", "an adjective", "a city", "a vehicle", "a body part", "a hobby", "an emotion", "a body part", "a celebrity", "a place you used to live", "a body part", "an emotion", "a vehicle", "an emotion", "a verb", "a place", "something x-rated", "a number", "a vehicle", "an adjective", "an adjective", "an adjective"]

userInput.style.display = 'none';


button.addEventListener('click', addAnswer) 


function addAnswer (){
  if (currentPromptNumber !== 0) {
    answerArray.push(userInput.value);
  }
  userInput.style.display = 'inline-block';
  userInput.value = '';
  button.value = "Next Prompt"
  promptDiv.innerText = `Please enter: ${prompts[currentPromptNumber]}`;
  if (currentPromptNumber === prompts.length) {
    showResults();
  }
  currentPromptNumber++;
}




function showResults() {
  console.log(answerArray[0]);
  userInput.style.display = 'none';
  button.style.display = 'none';
  promptDiv.innerHTML = 
    `"Bri Bri and Marky go to <span>${answerArray[1]}</span>"<br><br><BR>
    
    On a whim, Bri and Mark decided to travel to <span>${answerArray[1]}</span> to sample its renowned cuisine, <span>${answerArray[2]}</span>. Their experience of <span>${answerArray[2]}</span> was <span>${answerArray[3]}</span>, to say the least. Unbeknownst to them, the <span>${answerArray[2]}</span> actually had <span>${answerArray[4]}</span> <span>${answerArray[0]}</span> in it! Not quite as vegetarian-friendly as they were hoping... <br><br>
    
    Their visit to <span>${answerArray[1]}</span> left a <span>${answerArray[5]}</span> taste in their mouths, so they figured it would be best to travel to <span>${answerArray[6]}</span> by <span>${answerArray[7]}</span>. The trip was long and arduous, so they passed time by Bri massaging Mark's <span>${answerArray[8]}</span>, and him massaging her <span>${answerArray[11]}</span>. Upon arrival to <span>${answerArray[6]}</span>, they tried their hand at the most popular local activitiy, <span>${answerArray[9]}</span>. A round of <span>${answerArray[9]}</span> left them <span>${answerArray[10]}</span>, which was a major improvement over eating <span>${answerArray[4]}</span>!<br><br>
    
    On their last morning of the trip, they bumped into <span>${answerArray[12]}</span>. Come to find out, <span>${answerArray[12]}</span> was an ex-partner of Bri's from <span>${answerArray[13]}</span>. Mark felt really jealous, but Bri assured him that his <span>${answerArray[14]}</span> was so much bigger and sexier. Mark felt a little <span>${answerArray[15]}</span> knowing this, but he still wished <span>${answerArray[12]}</span> would get run over by a <span>${answerArray[16]}</span>(or at the least eat a <span>${answerArray[4]}</span>). <br><br>
    
    Once <span>${answerArray[12]}</span> properly fucked off and left Mark feeling <span>${answerArray[17]}</span>, he and Bri decided to <span>${answerArray[18]}</span> to the local <span>${answerArray[19]}</span>. Surprisingly, they found <span>${answerArray[20]}</span> for sale there, and together they bought <span>${answerArray[21]}</span> tons. Traveling back to Boulder from <span>${answerArray[6]}</span> with <span>${answerArray[21]}</span> tons of <span>${answerArray[20]}</span> was going to be tricky, especially since they decided to travel by <span>${answerArray[22]}</span>.<br><br>
    
    Back at home, they reminisced about the trip and decided it was a <span>${answerArray[23]}</span> experience. They had some <span>${answerArray[24]}</span> times and some <span>${answerArray[25]}</span> times... but what mattered most was the copious amount of <span>${answerArray[20]}</span> they smuggled back with them!<br><br><br>
    
    THE END!!!`
}
