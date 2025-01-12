"use client";
import { useState, useEffect } from "react";
import { runAI } from "@/actions/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  // state
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

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
    <div className="m-5">
      <form onSubmit={handleClick}>
        <Input
          className="mb-5"
          placeholder="Ask anything"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button>Generate with AI</Button>
      </form>
    </div>
  );
}
