import BarChart from '../components/BarChart/BarChart.tsx';

export default function ApiPage() {
  console.log('apikey:::');
  console.log(import.meta.env.VITE_STOCK_API_KEY);
  return (
    <div>
      <h1 className="text-2xl">ApiPage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        amet sunt. Corrupti, inventore perspiciatis alias perferendis dicta iste
        porro quas sed vel dolor veritatis delectus. Iure quas reiciendis vitae
        commodi?
      </p>
      <h2 className="text-xl">Nivo Bar Chart:</h2>
      <div className="h-64 w-full">
        <BarChart />
      </div>
      {/* <p>KEY: {}</p> */}
    </div>
  );
}
