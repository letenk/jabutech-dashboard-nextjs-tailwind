import Image from "next/image";
import Link from "next/link";

interface ButtonItemProps {
  title: String;
  icon: string;
  colorButton: String;
  href: String;
}
export default function ButtonLink(props: ButtonItemProps) {
  // Get proprty props
  const { title, icon, colorButton, href = "#" } = props;
  return (
    <div>
      <Link href={href}>
        <a
          className={`bg-${colorButton}-500 hover:bg-${colorButton}-700 transition-all duration-150 px-2 py-2 rounded text-white font-semibold inline-flex items-center mb-2 lg:mb-0`}
        >
          <div className="mr-1 w-5 h-5 relative">
            <Image
              src={`/icon/button/${icon}.svg`}
              layout="fill"
              objectFit="contain"
              alt="pluc-circle-icon"
            />
          </div>
          {title}
        </a>
      </Link>
    </div>
  );
}
