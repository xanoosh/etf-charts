import example from '../example.json';

export default function formatLineChartData() {
  const id = example?.['Meta Data']?.['2. Symbol'];
  const data: { x: string; y: string }[] = [];

  Object.entries(example?.['Monthly Time Series']).forEach(
    ([key, value], i) => {
      if (i % 10 === 0) {
        data.push({
          x: key,
          y: value['4. close'],
        });
      }
    }
  );

  data.reverse();
  return {
    id,
    color: 'red',
    data,
  };
}
