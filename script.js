async function startGeneration() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  result.textContent = "🤖 JARVIS is thinking...";

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-5",
      input: `Write complete HTML, CSS and JavaScript for: ${prompt}`
    })
  });

  const data = await response.json();
  result.textContent = data.output_text || "No response";
}
