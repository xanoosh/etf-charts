import { RotatingLines } from 'react-loader-spinner';
export default function Loading({
  variant = 'lg',
  strokeColor = '#1e293b',
}: {
  variant?: 'lg' | 'sm';
  strokeColor?: string;
}) {
  return (
    <div
      className={`flex justify-center items-center ${
        variant === 'lg' ? 'h-[100vh]' : 'h-full'
      }`}
    >
      <RotatingLines
        visible={true}
        width={variant === 'lg' ? '80' : '30'}
        strokeColor={strokeColor}
        strokeWidth={variant === 'lg' ? '3' : '1'}
        animationDuration="0.5"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
