import React, { useState, useMemo, useCallback, useRef } from "react";

// Tracks how many times a component renders
const useRenderCount = () => {
  const count = useRef(1);
  count.current += 1;
  return count.current;
};

// ✅ useCallback example (memoized function)
const ChildWithCallback = React.memo(({ calculate }) => {
  const renderCount = useRenderCount();
  console.log("🔁 ChildWithCallback re-rendered");

  const result = calculate();

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Squared in child (callback): {result}</p>
      <p>Child render count: {renderCount}</p>
    </div>
  );
});

function UseCasesDemo() {
  const [input, setInput] = useState(2);
  const [count, setCount] = useState(0);

  const parentRenderCount = useRenderCount();

  // ✅ useMemo: Caches the RESULT
  const memoizedSquare = useMemo(() => {
    console.log("🧠 useMemo: Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = input * input;
    }
    return result;
  }, [input]);

  // ✅ useCallback: Caches the FUNCTION
  const calculateSquareCallback = useCallback(() => {
    console.log("🧮 useCallback: Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result = input * input;
    }
    return result;
  }, [input]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🔍 useMemo vs useCallback</h1>

      <div style={{ marginBottom: "12px" }}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={() => setCount((c) => c + 1)} style={{ padding: "8px" }}>
          Re-render parent
        </button>
      </div>

      <p>🔄 Parent render count: {parentRenderCount}</p>
      <p>Memoized square (useMemo): {memoizedSquare}</p>

      <ChildWithCallback calculate={calculateSquareCallback} />
    </div>
  );
}

export default UseCasesDemo;
