import LineChart from '../components/LineChart/LineChart.tsx';

export default function ApiPage() {
  console.log('API KEY: ', import.meta.env.VITE_STOCK_API_KEY);
  console.log('.ENV STOCK NAME: ', import.meta.env.VITE_STOCK_API_KEY);
  // https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IWDA.AMS&apikey=YYZTG9TJ9YN8FTWH
  return (
    <div>
      <h1 className="text-2xl mb-4">ApiPage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur,
        amet sunt. Corrupti, inventore perspiciatis alias perferendis dicta iste
        porro quas sed vel dolor veritatis delectus. Iure quas reiciendis vitae
        commodi?
      </p>
      <h2 className="text-xl">Nivo Bar Chart:</h2>
      <div className="h-64 w-full">
        <LineChart />
      </div>
      {/* <p>KEY: {}</p> */}
    </div>
  );
}
