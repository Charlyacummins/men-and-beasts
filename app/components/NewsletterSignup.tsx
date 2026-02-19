"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && data?.ok) {
      setStatus("success");
      setMessage(data?.message || "You're subscribed!");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(data?.error || "Something went wrong.");
    }
  }

  return (
    <div className="rounded-3xl border border-accent/20 bg-[#15110d] p-10 text-center">
      <h3 className="font-display text-3xl">Stay Connected with Us!</h3>
      <p className="mt-3 text-sm text-[#e6d6c7]">
        Be the first to know about new menu items, events, and promotions. Join our community of
        food lovers today!
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <input
          type="email"
          placeholder="Your Email"
          className="h-12 w-full max-w-sm rounded-full border border-[#5f4131] bg-transparent px-5 text-sm text-[#f2e8dc] placeholder:text-[#cdb8a5]"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          className="h-12 rounded-full bg-accent px-6 text-xs uppercase tracking-[0.3em] text-white disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>

      {message ? (
        <p
          className={`mt-4 text-sm ${status === "error" ? "text-red-300" : "text-[#e6d6c7]"}`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
