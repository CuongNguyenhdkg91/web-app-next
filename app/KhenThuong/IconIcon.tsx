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
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19 13a1 1 0 00-1 1v.39l-1.48-1.48a2.79 2.79 0 00-3.93 0l-.7.7-2.48-2.49a2.87 2.87 0 00-3.93 0L4 12.61V7a1 1 0 011-1h4a1 1 0 000-2H5a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5a1 1 0 00-1-1zM5 20a1 1 0 01-1-1v-3.57l2.9-2.89a.79.79 0 011.09 0l3.17 3.17L15.45 20zm13-1a1 1 0 01-.18.54L13.31 15l.7-.69a.77.77 0 011.1 0L18 17.22zm3.71-8.71L20 8.57a4.31 4.31 0 10-6.72.79 4.27 4.27 0 003 1.26 4.34 4.34 0 002.29-.62l1.72 1.73a1 1 0 001.42 0 1 1 0 000-1.44zM18 8a2.32 2.32 0 110-3.27A2.32 2.32 0 0118 8z" />
    </svg>
  );
}

function IconArrowCollapse(props:any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19.5 3.09L15 7.59V4h-2v7h7V9h-3.59l4.5-4.5-1.41-1.41M4 13v2h3.59l-4.5 4.5 1.41 1.41 4.5-4.5V20h2v-7H4z" />
    </svg>
  );
}

export { Memo as IconSearchIconIcon, IconImageSearch, IconArrowCollapse };
