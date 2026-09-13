async function generateWebsite(prompt) {
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-5",
      input: `Build a complete HTML, CSS and JavaScript website for: ${prompt}`
    })
  });

  const data = await res.json();
  console.log(data);
}
