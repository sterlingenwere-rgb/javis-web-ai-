async function generateWebsite(prompt) {
  const res = await fetch(
    "https://api.openai.com/v1/responses",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5",
        input: `Create a complete responsive website with HTML, CSS and JavaScript.\nRequest: ${prompt}`
      })
    }
  );

  const data = await res.json();

  document.getElementById("result").textContent =
    data.output_text || "No response";
}

async function startGeneration() {
  const prompt = document.getElementById("prompt").value;
  document.getElementById("result").textContent = "Generating...";
  await generateWebsite(prompt);
}
