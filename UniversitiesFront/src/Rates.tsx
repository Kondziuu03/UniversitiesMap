import React from "react";

import { getRates, Rate } from "./service";

interface RatesProps {
  universityId: number;
}

export default function Rates(props: RatesProps) {
  const { universityId } = props;
  const [rates, setRates] = React.useState<Rate[]>([]);

  React.useEffect(() => {
    const response = getRates(universityId).then((response) => {
      setRates(response.data);
    });
  }, [universityId]);

  return (
    <div>
      <h3>Rates</h3>
      {rates.length === 0 ? (
        <span>No rates yet</span>
      ) : (
        rates.map((rate, i) => {
          return (
            <div key={i}>
              <p>{rate.rateValue}</p>
              <p>{rate.comment}</p>
            </div>
          );
        })
      )}
    </div>
  );
}
