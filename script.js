async function startGeneration() {
  const prompt = document.getElementById("prompt").value;

  document.getElementById("result").textContent =
    "🤖 JARVIS is thinking...";

  await addDoc(collection(window.db, "jarvis_projects"), {
    prompt: prompt,
    status: "pending",
    createdAt: new Date()
  });

  document.getElementById("result").textContent =
    "✅ Prompt saved to Firebase!";
}
