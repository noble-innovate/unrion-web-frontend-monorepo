export const Loader = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='red'
        d='M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
        opacity='.25'
      />
      <circle cx='12' cy='2.5' r='1.5' fill='red'>
        <animateTransform
          attributeName='transform'
          dur='0.75s'
          repeatCount='indefinite'
          type='rotate'
          values='0 12 12;360 12 12'
        />
      </circle>
    </svg>
  );
};
