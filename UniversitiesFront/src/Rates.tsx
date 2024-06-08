import React from "react";
import { Rate } from "./service";

interface RatesProps {
  rates: Rate[];
}

export default function Rates(props: RatesProps) {
  const { rates } = props;
  const avg = React.useMemo(() => {
    const sum = rates.reduce((acc, rate) => acc + rate.rateValue, 0);
    return sum / rates.length;
  }, [rates]);

  return (
    <div>
      <h3>Rates - {avg}</h3>
      {rates.length === 0 ? (
        <span>No rates yet</span>
      ) : (
        rates.map((rate, i) => {
          return (
            <div key={i}>
              <p>
                User: {rate.userId} - {rate.rateValue}
              </p>
              <p>Comment: {rate.comment}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
