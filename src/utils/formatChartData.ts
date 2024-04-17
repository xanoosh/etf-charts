// import example from '../mockEtfData.json';
import iwda from '../mockEtfData/iwda.json';
import gold from '../mockEtfData/gold.json';
import bitcoin from '../mockEtfData/bitcoin.json';

export interface singleApiCallInterface {
  'Meta Data': MetaData;
  'Monthly Time Series': { [key: string]: MonthlyTimeSeries };
}

export interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Time Zone': string;
}

export interface MonthlyTimeSeries {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

function formatSingleChartLine(
  el: singleApiCallInterface,
  variant: 'bump' | 'line'
) {
  const id = el?.['Meta Data']?.['2. Symbol'];
  const data: { x: string; y: number }[] = [];

  Object.entries(el?.['Monthly Time Series']).forEach(([key, value], i) => {
    if (variant === 'bump') {
      if (i % 12 === 0) {
        data.push({
          x: key.split('-')[0],
          y: Number(value['4. close']) * -1,
        });
      }
    }
    if (variant === 'line') {
      if (i % 4 === 0) {
        data.push({
          x: `${key.split('-')[1]}-${key.split('-')[0]}`,
          y: Number(value['4. close']),
        });
      }
    }
  });

  data.reverse();
  return {
    id,
    data,
  };
}

export function formatBumpChartData() {
  return [
    formatSingleChartLine(iwda, 'bump'),
    formatSingleChartLine(gold, 'bump'),
    formatSingleChartLine(bitcoin, 'bump'),
  ];
}

export function formatSingleLineChartData(ticker: string) {
  switch (ticker) {
    case 'IWDA.AMS':
      return [formatSingleChartLine(iwda, 'line')];
    case 'SGLN.LON':
      return [formatSingleChartLine(gold, 'line')];
    case 'BTCE.AMS':
      return [formatSingleChartLine(bitcoin, 'line')];
    default:
      return null;
  }
}
