import { RotatingLines } from 'react-loader-spinner';
export default function Loading({
  width = '96',
  strokeWidth = '4',
  strokeColor = '#000000',
}) {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <RotatingLines
        visible={true}
        width={width}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        animationDuration="0.5"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
