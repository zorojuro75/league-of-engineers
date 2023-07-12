import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

interface NavbarItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-black
        transition
        text-neutral-600
        py-1`,
        active && "text-primary font-semibold"
        )
      }
    >
      <p className="truncate w-100 hidden md:block">{label}</p>
    </Link>
   );
}

export default NavbarItem;