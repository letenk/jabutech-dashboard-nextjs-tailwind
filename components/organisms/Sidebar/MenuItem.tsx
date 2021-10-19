import Link from "next/link";
import Image from "next/image";
import classActive from "classnames";

interface MenuItemProps {
  title: String;
  icon: String;
  active?: boolean;
  href: String;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  // Get property props
  const { title, icon, active, href = "/" } = props;
  //   Init activeMenu
  const classItem = classActive({
    "hover:bg-red-700": true,
    rounded: true,
    // Object ini dijalankan ketika nilai props active menjadi true
    "bg-red-500": active,
  });

  return (
    <div className={classItem}>
      <Link href={href}>
        <a className="px-4 py-2 my-1 flex text-white h6">
          <div className="mr-2 w-6 h-6 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src={`/icon/menuItem/${icon}.svg`}
              alt="menu-home"
            />
          </div>
          {title}
        </a>
      </Link>
    </div>
  );
}
