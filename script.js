import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

async function startGeneration() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (!prompt) {
    result.textContent = "Enter a prompt first.";
    return;
  }

  result.textContent = "Saving...";

  await addDoc(collection(db, "prompts"), {
    prompt: prompt,
    status: "pending",
    createdAt: serverTimestamp()
  });

  result.textContent = "✅ Prompt saved!";
}

window.startGeneration = startGeneration;
