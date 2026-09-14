import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

async function startGeneration() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  result.textContent = "🤖 Saving...";

  await addDoc(collection(window.db, "jarvis_projects"), {
    prompt: prompt,
    status: "pending",
    createdAt: new Date()
  });

  result.textContent = "✅ Prompt saved!";
}
