import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface MobileItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  active,
  href
}) => {
  return ( 
    <Link
      href={href} 
      className={twMerge(`
        flex
        flex-col
        items-center
        hover:text-white
        `,
        active && "text-white font-bold"
        )
      }
    >
      <p className="truncate text-black w-100">{label}</p>
    </Link>
   );
}

export default MobileItem;