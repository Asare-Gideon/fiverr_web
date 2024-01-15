"use client";

import React, { useState } from "react";

const InvestmentCalculator = () => {
  const [startingBalance, setStartingBalance] = useState("");
  const [duration, setDuration] = useState("");
  const [endingBalance, setEndingBalance] = useState(null);
  const [percentageReturn, setPercentageReturn] = useState(null);

  const calculateReturn = () => {
    const annualizedReturn = 0.715; // 71.5%
    const years = parseFloat(duration);

    if (isNaN(startingBalance as any) || isNaN(years) || years <= 0) {
      alert("Please enter valid input values.");
      return;
    }

    const compoundFactor = Math.pow(1 + annualizedReturn, years);
    const endingBalanceValue = parseFloat(startingBalance) * compoundFactor;
    const roiPercentage =
      ((endingBalanceValue - parseFloat(startingBalance)) /
        parseFloat(startingBalance)) *
      100;

    setEndingBalance(endingBalanceValue.toFixed(2) as any);
    setPercentageReturn(roiPercentage.toFixed(2) as any);
  };

  return (
    <div>
      <h1>Investment Calculator</h1>
      <div>
        <label>Starting Balance:</label>
        <input
          type="text"
          value={startingBalance}
          onChange={(e) => setStartingBalance(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Duration (years):</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button onClick={calculateReturn}>Calculate</button>
      {endingBalance !== null && percentageReturn !== null && (
        <div>
          <h2>Results:</h2>
          <p>Ending Balance: ${endingBalance}</p>
          <p>Percentage Return on Investment: {percentageReturn}%</p>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
