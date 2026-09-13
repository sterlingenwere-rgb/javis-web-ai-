async function startGeneration(){
  const prompt = document.getElementById("prompt").value;

  document.getElementById("result").textContent = "Generating...";

  await generateWebsite(prompt);
}
