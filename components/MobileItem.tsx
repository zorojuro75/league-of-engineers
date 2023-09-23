import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MobileItemProps {
  label: string;
  active?: boolean;
  href: string;
  clickable?: string;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  active,
  href,
  clickable,
  onClick,
}) => {
  return (
    <>
      {clickable == "no" ? (
        <div
          className='flex
          flex-col
          items-center
          py-2
          mb-10'
        >
          {/* <p className="truncate w-100 hidden md:block text-[25px]">{label}</p> */}
          <div className="truncate text-gray-600 w-100">
            <p>{label}</p>
          </div>
        </div>
      ) : (
        <Link
          onClick={onClick}
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
            <p>{label}</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default MobileItem;
