import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "~/utils/cn";
import { useRouter } from "next/router";
import Logo from "./logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTabs } from "./tabs";

const MobileNavbar: React.FC = () => {
  const router = useRouter();
  const tabs = useTabs();

  return (
    <div className="flex h-14 w-screen items-center justify-between px-8 pb-1 pt-4">
      <div className="flex flex-1 items-center justify-start">
        <Link
          href="/"
          className={cn(
            "flex items-center justify-center",
            router.pathname === "/" ? "fill-white" : "fill-[#9f9fa2]"
          )}
        >
          <Logo size="1.4rem" inherit />
        </Link>
      </div>
      <Popover>
        <div className="flex w-full flex-1 items-center justify-end">
          <PopoverTrigger>
            <GiHamburgerMenu />
          </PopoverTrigger>
        </div>

        <PopoverContent className="mt-2 flex w-screen flex-col gap-5">
          {tabs.map((t, i) => (
            <a
              href={t.href}
              key={i}
              className={
                router.pathname === t.href ? "text-text-100" : "text-text-200"
              }
            >
              {t.name}
            </a>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MobileNavbar;
