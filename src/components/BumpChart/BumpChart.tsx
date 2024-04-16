import { ResponsiveBump } from '@nivo/bump';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
// import { example } from '../../nivoExmpleChartData';
import formatLineChartData from '../../utils/formatLineChartData';

export default function BumpChart() {
  const stockChartData = formatLineChartData();
  console.log('stockChartData', [stockChartData]);
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <ResponsiveBump
        data={[stockChartData]}
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
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </AspectRatio.Root>
  );
}
