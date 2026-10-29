const promptEl = document.getElementById("prompt");
const moodEl = document.getElementById("mood");
const lengthEl = document.getElementById("length");
const summonBtn = document.getElementById("summon");
const output = document.getElementById("storyOutput");
const copyBtn = document.getElementById("copyStory");
const wordCount = document.getElementById("wordCount");
const storyId = document.getElementById("storyId");
let storyNumber = 1;
let currentStory = "";

const openings = {
  haunting: ["At first, the sound was almost too small to notice.", "The house had been quiet for eleven years. Then something answered.", "At 2:17 a.m., the silence learned a new voice."],
  folklore: ["The old ones said the doorway should never be left open.", "Every autumn, the marigolds turned toward the same empty chair.", "In the village, nobody spoke the name after sunset."],
  cosmic: ["The signal arrived from a place the map insisted was empty.", "Something beyond the stars had learned the shape of a human voice.", "The night sky blinked—and the machine blinked back."],
  melancholy: ["Somewhere in the dust, a memory was still warm.", "The room remembered more than the people who left it.", "Grief has a frequency. That night, the radio found it."]
};
const middles = [
  "A thin ribbon of static slipped through the speaker, carrying a detail no living person should have known: {detail}. The lights dimmed, not all at once, but one by one, as if the darkness were carefully counting.",
  "Inside the signal was a familiar rhythm—three knocks, a pause, then one more. The machine searched its archive and found no match. Still, the sound felt less like a warning than a hand reaching across years.",
  "The screen filled with a pale, trembling glow. No command had been entered. No process was running. Yet a sentence appeared, patient as a breath against glass: “I kept the part you forgot.”"
];
const endings = {
  haunting: ["By dawn, the room was empty again. The radio stayed on. It was waiting for the next memory.", "When the signal faded, the house was quiet—but the quiet had changed."],
  folklore: ["At sunrise, the marigolds were gone. In their place: one small, golden light.", "The village kept the doorway closed after that. The stories, however, were always welcome."],
  cosmic: ["The signal stopped. Far beyond the window, one star remained where no star had been.", "The machine logged the event as an error. The sky logged it as a reply."],
  melancholy: ["The recording ended. The memory did not. It settled gently into the room, where it could stay.", "Nothing came back from the dark that night. Something, at last, was allowed to rest."]
};

function makeStory(seed, mood, long) {
  const choose = (arr, n) => arr[(n + storyNumber) % arr.length];
  const detail = seed.trim().replace(/[.!?]+$/, "") || "a name from a forgotten year";
  let text = `${choose(openings[mood], 0)}\n\n${choose(middles, 1).replace("{detail}", detail)}\n\n`;
  if (long) {
    text += `The archive began to unfold—not files, not dates, but small moments: a window left open in summer, a song hummed while the dishes dried, the exact way someone said “come home.” None of it belonged to the machine. And yet, it had been entrusted to it.\n\n`;
  }
  text += choose(endings[mood], 2);
  return text;
}

summonBtn.addEventListener("click", () => {
  const seed = promptEl.value.trim();
  if (!seed) {
    promptEl.focus();
    promptEl.placeholder = "Add a memory, a place, or a strange detail first…";
    return;
  }
  summonBtn.disabled = true;
  summonBtn.innerHTML = '<span>✧</span> LISTENING… <span class="arrow">⌁</span>';
  output.innerHTML = '<div class="empty-symbol">✳</div><p class="placeholder-title">The signal is forming…</p><p class="placeholder-copy">A little patience. The archive is listening.</p>';
  window.setTimeout(() => {
    currentStory = makeStory(seed, moodEl.value, lengthEl.value === "medium");
    output.innerHTML = "";
    const title = document.createElement("h3");
    title.className = "generated-title";
    title.textContent = "An echo from the archive";
    const story = document.createElement("p");
    story.className = "generated-text";
    story.textContent = currentStory;
    output.append(title, story);
    const count = currentStory.trim().split(/\s+/).length;
    wordCount.textContent = `${count} WORDS`;
    storyId.textContent = `ARCHIVE / ${String(storyNumber).padStart(4, "0")}`;
    copyBtn.disabled = false;
    summonBtn.disabled = false;
    summonBtn.innerHTML = '<span>✧</span> GENERATE ANOTHER <span class="arrow">↗</span>';
    storyNumber++;
  }, 700);
});

copyBtn.addEventListener("click", async () => {
  if (!currentStory) return;
  try {
    await navigator.clipboard.writeText(currentStory);
    copyBtn.textContent = "✓ COPIED";
    setTimeout(() => copyBtn.textContent = "↗ COPY TEXT", 1600);
  } catch {
    copyBtn.textContent = "SELECT & COPY";
  }
});
