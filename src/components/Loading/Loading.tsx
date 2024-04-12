import { RotatingLines } from 'react-loader-spinner';
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.5"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
