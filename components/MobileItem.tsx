import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MobileItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const MobileItem: React.FC<MobileItemProps> = ({ label, active, href }) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex
        flex-col
        items-center
        hover:text-white
        py-2
        mb-10
        `,
        active && "text-white font-bold"
      )}
    >
      <div className="truncate text-white w-100">
        <p className={twMerge(active && "w-[70%] border-b-[2px]")}>{label}</p>
      </div>
    </Link>
  );
};

export default MobileItem;
