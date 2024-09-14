'use client';

import { useRouter } from "next/navigation";

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  path?: string;
}


const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    path
  }) => {

    const router = useRouter()

    const ClickMenu = () =>
      {
        onClick?onClick():onClick
        router.push('/'+(path??label))
      }

    return(
        <div  onClick={ClickMenu} 
              className="px-4 py-3 hover:bg-neutral-400 transition font-semibold">
            {label}
        </div>

    )
}

export default MenuItem