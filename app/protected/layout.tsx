import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="flex-1 w-full flex flex-col gap-8 items-center">
        <nav className="w-full flex justify-center border-b border-gray-200 h-16 bg-white">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">Pawsome Foundation</Link>
            </div>
            <AuthButton />
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-8 max-w-5xl p-5 w-full">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t border-gray-200 mx-auto text-center text-xs gap-8 py-8 bg-white">
          <p className="text-gray-600">
            &copy; 2024 Pawsome Foundation
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
