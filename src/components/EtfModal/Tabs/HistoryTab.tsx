import { useParams } from 'react-router-dom';
import LineChart from '../../LineChart/LineChart';

export default function EtfModal() {
  const { ticker } = useParams();
  return <LineChart ticker={ticker} />;
}
