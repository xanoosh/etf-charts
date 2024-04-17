import { ResponsiveBump } from '@nivo/bump';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { formatBumpChartData } from '../../utils/formatChartData';
import { useNavigate } from 'react-router-dom';

export default function BumpChart() {
  const navigate = useNavigate();
  const stockChartData = formatBumpChartData();
  console.log(stockChartData);
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <ResponsiveBump
        data={stockChartData}
        colors={{ scheme: 'set2' }}
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
        axisBottom={null}
        enableGridY={false}
        onClick={({ id }) => navigate(id)}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
        axisLeft={null}
        tooltip={({ serie: { id } }) => {
          return (
            <div className="bg-white px-2 py-1 border border-1 border-slate-200 rounded text-slate-500 text-sm">
              show details of {id}
            </div>
          );
        }}
      />
    </AspectRatio.Root>
  );
}
