import { ResponsiveLine } from '@nivo/line';
import formatLineChartData from '../../utils/formatLineChartData';
import { example } from '../../nivoExmpleChartData';

export default function LineChart({
  options = 'mock',
}: {
  options: 'mock' | 'nivo';
}) {
  const stockChartData = formatLineChartData();

  return (
    <ResponsiveLine
      data={options === 'mock' ? [stockChartData] : example}
      colors={['#4793AF', '#FFC470', '#DD5746', '#8B322C']}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      // yScale={{
      //   type: 'linear',
      //   min: 'auto',
      //   max: 'auto',
      //   stacked: true,
      //   reverse: false,
      // }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'time',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'price',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={3}
      // pointColor="blue"
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.1}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
