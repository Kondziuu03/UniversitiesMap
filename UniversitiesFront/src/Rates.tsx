interface RatesProps {
  universityId: number;
}

export default function Rates(props: RatesProps) {
  const { universityId } = props;

  return <div>Rates {universityId}</div>;
}
