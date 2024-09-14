'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <img
      onClick={() => router.push('/')}
      className="block cursor-pointer" 
      src="/logo.png" height="80" width="80" alt="Logo" /> //if use Image of next the optimization may make not update in dev env
   );
}
 
export default Logo;