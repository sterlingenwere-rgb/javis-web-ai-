function startGeneration() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (prompt === "") {
    result.textContent = "Please enter a prompt.";
    return;
  }

  result.textContent = "JARVIS received: " + prompt;
}
