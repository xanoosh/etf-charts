import { ResponsiveLine } from '@nivo/line';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { formatSingleLineChartData } from '../../utils/formatChartData';

export default function LineChart({ ticker }: { ticker?: string }) {
  if (!ticker) {
    return null;
  }
  const chartData = formatSingleLineChartData(ticker);
  if (!chartData) {
    return null;
  }
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'price',
          legendOffset: -50,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
      />
    </AspectRatio.Root>
  );
}
