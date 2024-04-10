import { ResponsiveBar } from '@nivo/bar';

export default function BarChart() {
  const data = [
    {
      country: 'AD',
      'hot dog': 43,
      'hot dogColor': 'hsl(116, 70%, 50%)',
      burger: 56,
      burgerColor: 'hsl(207, 70%, 50%)',
      sandwich: 48,
      sandwichColor: 'hsl(264, 70%, 50%)',
      kebab: 164,
      kebabColor: 'hsl(224, 70%, 50%)',
      fries: 125,
      friesColor: 'hsl(150, 70%, 50%)',
      donut: 0,
      donutColor: 'hsl(125, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 24,
      'hot dogColor': 'hsl(122, 70%, 50%)',
      burger: 160,
      burgerColor: 'hsl(104, 70%, 50%)',
      sandwich: 131,
      sandwichColor: 'hsl(47, 70%, 50%)',
      kebab: 16,
      kebabColor: 'hsl(254, 70%, 50%)',
      fries: 33,
      friesColor: 'hsl(19, 70%, 50%)',
      donut: 177,
      donutColor: 'hsl(21, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 84,
      'hot dogColor': 'hsl(262, 70%, 50%)',
      burger: 100,
      burgerColor: 'hsl(166, 70%, 50%)',
      sandwich: 147,
      sandwichColor: 'hsl(254, 70%, 50%)',
      kebab: 176,
      kebabColor: 'hsl(217, 70%, 50%)',
      fries: 72,
      friesColor: 'hsl(12, 70%, 50%)',
      donut: 84,
      donutColor: 'hsl(358, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 44,
      'hot dogColor': 'hsl(5, 70%, 50%)',
      burger: 23,
      burgerColor: 'hsl(333, 70%, 50%)',
      sandwich: 16,
      sandwichColor: 'hsl(208, 70%, 50%)',
      kebab: 149,
      kebabColor: 'hsl(158, 70%, 50%)',
      fries: 7,
      friesColor: 'hsl(230, 70%, 50%)',
      donut: 191,
      donutColor: 'hsl(200, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 93,
      'hot dogColor': 'hsl(74, 70%, 50%)',
      burger: 198,
      burgerColor: 'hsl(260, 70%, 50%)',
      sandwich: 7,
      sandwichColor: 'hsl(325, 70%, 50%)',
      kebab: 166,
      kebabColor: 'hsl(97, 70%, 50%)',
      fries: 194,
      friesColor: 'hsl(204, 70%, 50%)',
      donut: 18,
      donutColor: 'hsl(218, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 8,
      'hot dogColor': 'hsl(173, 70%, 50%)',
      burger: 192,
      burgerColor: 'hsl(281, 70%, 50%)',
      sandwich: 140,
      sandwichColor: 'hsl(344, 70%, 50%)',
      kebab: 135,
      kebabColor: 'hsl(203, 70%, 50%)',
      fries: 158,
      friesColor: 'hsl(193, 70%, 50%)',
      donut: 126,
      donutColor: 'hsl(103, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 87,
      'hot dogColor': 'hsl(314, 70%, 50%)',
      burger: 2,
      burgerColor: 'hsl(154, 70%, 50%)',
      sandwich: 39,
      sandwichColor: 'hsl(15, 70%, 50%)',
      kebab: 86,
      kebabColor: 'hsl(336, 70%, 50%)',
      fries: 121,
      friesColor: 'hsl(301, 70%, 50%)',
      donut: 45,
      donutColor: 'hsl(126, 70%, 50%)',
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
      }
    />
  );
}
