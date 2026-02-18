import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

export default function AppBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-bold">awtpi314</Link>
      </div>
      <div className="flex-none">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
