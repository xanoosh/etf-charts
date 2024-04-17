import { Outlet } from 'react-router-dom';
import BumpChart from '../components/BumpChart/BumpChart.tsx';
// import LineChart from '../components/LineChart/LineChart.tsx';

export default function ApiPage() {
  // example api call:  https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IWDA.AMS&apikey=YYZTG9TJ9YN8FTWH
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl mb-4">ETF Page</h1>
      <div>
        <BumpChart />
      </div>
      <Outlet />
    </div>
  );
}
