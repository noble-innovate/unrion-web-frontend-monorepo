export const UnrionLoader = ({ size = 3 }: { size?: number }) => {
  return (
    <span
      className='relative flex items-center justify-center p-3'
      style={{ width: `${size}rem`, height: `${size}rem` }}
    >
      <span className='absolute inset-0 animate-ping h-full w-full rounded-full bg-rose-900 opacity-75'></span>
      <span className='absolute inset-0 animate-spin border-r border-rose-900 rounded-full h-full w-full bg-rose-50 p-3 z-10'></span>

      <svg
        className='block w-full h-full relative z-20 animate-pulse'
        width='27'
        height='28'
        viewBox='0 0 27 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          className='fill-rose-900'
          d='M13.312 27.3C10.5733 27.3 8.19867 26.78 6.188 25.74C4.212 24.6653 2.68667 23.2267 1.612 21.424C0.537333 19.5867 0 17.5587 0 15.34V2C0 0.895431 0.895431 0 2 0H6.06C7.16457 0 8.06 0.895431 8.06 2V15.132C8.06 16.068 8.28533 16.9347 8.736 17.732C9.18667 18.4947 9.79333 19.1187 10.556 19.604C11.3533 20.0547 12.2547 20.28 13.26 20.28C14.2307 20.28 15.0973 20.0547 15.86 19.604C16.6573 19.1187 17.2813 18.4947 17.732 17.732C18.1827 16.9347 18.408 16.068 18.408 15.132V2C18.408 0.895432 19.3034 0 20.408 0H24.468C25.5726 0 26.468 0.895431 26.468 2V15.34C26.468 17.5587 25.948 19.5867 24.908 21.424C23.868 23.2267 22.36 24.6653 20.384 25.74C18.4427 26.78 16.0853 27.3 13.312 27.3Z'
          fill='white'
        />
      </svg>
    </span>
  );
};
