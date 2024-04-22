import { ResponsiveBump } from '@nivo/bump';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import { formatBumpChartData } from '../../utils/formatChartData';
import { useNavigate } from 'react-router-dom';
import { useMedia } from 'react-use';

export default function BumpChart() {
  const isMobile = useMedia('(max-width: 640px)');
  const navigate = useNavigate();
  const stockChartData = formatBumpChartData();
  return (
    <AspectRatio.Root ratio={16 / 9}>
      <ResponsiveBump
        data={stockChartData}
        endLabel={isMobile ? false : true}
        colors={{ scheme: 'set2' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={isMobile ? 4 : 10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisBottom={null}
        enableGridY={false}
        onClick={({ id }) => navigate(`${id}/history`)}
        margin={isMobile ? {} : { top: 40 }}
        axisRight={null}
        axisTop={isMobile ? null : {}}
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
