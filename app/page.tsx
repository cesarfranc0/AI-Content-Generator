"use client";
import { useState, useEffect } from "react";
import { runAI } from "@/actions/ai";

export default function Page() {
  // state
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await runAI("List the accolades of Aaron Rodgers");
      setResponse(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <button onClick={handleClick}>Run AI</button>
      <hr />
      <div>{loading ? "Loading..." : response}</div>
    </>
  );
}
