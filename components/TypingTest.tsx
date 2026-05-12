"use client";

import { useMemo, useState } from "react";

const text =
  "Practice every day to improve your typing speed and accuracy.";

export default function TypingTest() {
  const [input, setInput] = useState("");

  const words = useMemo(() => {
    return input.trim().split(/\s+/).filter(Boolean).length;
  }, [input]);

  const accuracy = useMemo(() => {
    let correct = 0;

    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) {
        correct++;
      }
    }

    return input.length === 0
      ? 100
      : Math.round((correct / input.length) * 100);
  }, [input]);

  return (
    <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl neon-text">Typing Challenge</h2>

        <div>
          <p>WPM: {words}</p>
          <p>Accuracy: {accuracy}%</p>
        </div>
      </div>

      <div className="bg-black/40 border border-cyan-400 rounded-2xl p-6 leading-8">
        {text.split("").map((char, index) => {
          let color = "text-gray-500";

          if (index < input.length) {
            color =
              input[index] === char
                ? "text-cyan-300"
                : "text-red-500";
          }

          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full mt-6 h-40 bg-black border border-cyan-400 rounded-2xl p-4 outline-none"
        placeholder="Start typing here..."
      />
    </div>
  );
}