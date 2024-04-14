import { ResponsiveBump } from '@nivo/bump';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

export default function BumpChart() {
  const bumpExampleData = [
    {
      id: 'Serie 1',
      data: [
        {
          x: 2000,
          y: 8,
        },
        {
          x: 2001,
          y: 5,
        },
        {
          x: 2002,
          y: 1,
        },
        {
          x: 2003,
          y: 6,
        },
        {
          x: 2004,
          y: 4,
        },
      ],
    },
    {
      id: 'Serie 2',
      data: [
        {
          x: 2000,
          y: 1,
        },
        {
          x: 2001,
          y: 1,
        },
        {
          x: 2002,
          y: 11,
        },
        {
          x: 2003,
          y: 9,
        },
        {
          x: 2004,
          y: 10,
        },
      ],
    },
    {
      id: 'Serie 3',
      data: [
        {
          x: 2000,
          y: 9,
        },
        {
          x: 2001,
          y: 2,
        },
        {
          x: 2002,
          y: 9,
        },
        {
          x: 2003,
          y: 10,
        },
        {
          x: 2004,
          y: 2,
        },
      ],
    },
  ];

  return (
    <AspectRatio.Root ratio={16 / 6}>
      <ResponsiveBump
        data={bumpExampleData}
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
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ranking',
          legendPosition: 'middle',
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
      />
    </AspectRatio.Root>
  );
}
