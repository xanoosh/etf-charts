import example from '../mockEtfData.json';

export default function formatLineChartData() {
  const id = example?.['Meta Data']?.['2. Symbol'];
  const data: { x: string; y: number }[] = [];

  Object.entries(example?.['Monthly Time Series']).forEach(
    ([key, value], i) => {
      if (i % 12 === 0) {
        data.push({
          x: key.split('-')[0],
          y: Number(value['4. close']) * -1,
        });
      }
    }
  );

  data.reverse();
  return {
    id,
    data,
  };
}
