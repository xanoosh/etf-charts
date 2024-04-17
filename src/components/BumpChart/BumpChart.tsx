import { ResponsiveBump } from '@nivo/bump';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { formatBumpChartData } from '../../utils/formatChartData';
import { useNavigate } from 'react-router-dom';

export default function BumpChart() {
  const navigate = useNavigate();
  const stockChartData = formatBumpChartData();
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <ResponsiveBump
        data={stockChartData}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -36,
          truncateTickAt: 0,
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        onClick={({ id }) => navigate(id)}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </AspectRatio.Root>
  );
}
