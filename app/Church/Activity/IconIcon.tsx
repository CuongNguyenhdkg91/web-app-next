import { memo, SVGProps } from 'react';

const IconSearchIconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.0007 15.7077C13.4083 17.1332 11.3054 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.3054 17.1332 13.4083 15.7078 15.0006L21.0104 20.3033C21.2057 20.4986 21.2057 20.8151 21.0104 21.0104C20.8152 21.2057 20.4986 21.2057 20.3033 21.0104L15.0007 15.7077ZM17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z'
      fill='#521517'
    />
  </svg>
);
const Memo = memo(IconSearchIconIcon);

const IconImageSearch = (props:any) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.17 3.17L15.45 20zm13-1a1 1 0 01-.18.54L13.31 15l.7-.69a.77.77 0 011.1 0L18 17.22zm3.71-8.71L20 8.57a4.31 4.31 0 10-6.72.79 4.27 4.27 0 003 1.26 4.34 4.34 0 002.29-.62l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM18 8a2.32 2.32 0 110-3.27A2.32 2.32 0 0118 8z" />
    </svg>
  );
}

function IconArrowCollapse(props:any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M19.5 3.09L15 7.59V4h-2v7h7V9h-3.59l4.5-4.5-1.41-1.41M4 13v2h3.59l-4.5 4.5 1.41 1.41 4.5-4.5V20h2v-7H4z" />
    </svg>
  );
}

function IconWatch(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" xmlSpace="preserve" width="50" height="50"><path d="M49.22 25.78c0 -6.104 -2.278 -11.935 -6.414 -16.418 -3.991 -4.326 -9.365 -7.033 -15.181 -7.66a2.873 2.873 0 0 0 -0.468 -0.729A2.878 2.878 0 0 0 25 0a2.877 2.877 0 0 0 -2.156 0.973 2.878 2.878 0 0 0 -0.698 2.261l1.174 9.39c0.106 0.845 0.827 1.482 1.683 1.482 0.852 0 1.573 -0.637 1.679 -1.482l1.158 -9.265c5.277 0.661 10.141 3.161 13.776 7.102 3.676 3.985 5.777 9.11 5.969 14.51h-3.076a0.81 0.81 0 0 0 0 1.62h3.075c-0.419 11.819 -9.955 21.355 -21.773 21.773V45.288a0.81 0.81 0 0 0 -1.62 0v3.075C12.371 47.945 2.835 38.409 2.417 26.59h3.075a0.81 0.81 0 0 0 0 -1.62H2.416c0.1 -2.857 0.725 -5.624 1.867 -8.235 1.207 -2.76 2.929 -5.219 5.118 -7.308a0.81 0.81 0 0 0 -1.118 -1.172c-2.346 2.238 -4.191 4.873 -5.484 7.831 -1.339 3.063 -2.018 6.324 -2.018 9.694 0 6.469 2.519 12.551 7.094 17.126 4.574 4.574 10.656 7.093 17.124 7.094l0.001 0 0.001 0c6.469 0 12.55 -2.52 17.125 -7.094 4.574 -4.574 7.094 -10.656 7.094 -17.126M26.247 3.033l-1.174 9.39c-0.004 0.036 -0.035 0.063 -0.075 0.063a0.072 0.072 0 0 1 -0.071 -0.063l-1.174 -9.39c-0.045 -0.363 0.063 -0.713 0.305 -0.987S24.634 1.62 25 1.62s0.7 0.151 0.942 0.425 0.35 0.625 0.305 0.987" fill="green"/>
    <path d="M21.083 25.461c-0.009 0.105 -0.014 0.211 -0.014 0.319 0 2.168 1.764 3.931 3.931 3.931s3.931 -1.764 3.931 -3.931 -1.764 -3.931 -3.931 -3.931c-0.014 0 -0.028 0.001 -0.042 0.001l-11.147 -9.18a0.81 0.81 0 0 0 -1.172 1.1zm6.228 0.319c0 1.274 -1.037 2.311 -2.311 2.311s-2.311 -1.037 -2.311 -2.311c0 -0.106 0.01 -0.209 0.023 -0.311a0.81 0.81 0 0 0 0.028 -0.172c0.199 -0.934 0.965 -1.658 1.919 -1.8a0.81 0.81 0 0 0 0.238 -0.023c0.034 -0.002 0.068 -0.005 0.102 -0.005 1.275 0 2.311 1.037 2.311 2.311m-4.268 -3.408a3.964 3.964 0 0 0 -1.31 1.223l-4.102 -5.68z" fill="yellow"/>
  </svg>
  )
}

export { Memo as IconSearchIconIcon, IconImageSearch, IconArrowCollapse, IconWatch };