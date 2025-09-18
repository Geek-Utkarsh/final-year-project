import Link from "next/link";
import { Navbar as NUNavbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import ThemeToggle from "./ThemeToggle";
import { useAuthUser } from "@/lib/auth";

export default function SiteNavbar() {
  const { user } = useAuthUser();
  return (
    <NUNavbar maxWidth="xl" className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <NavbarBrand>
        <Link href="/" className="font-semibold text-lg">AI Story Generator</Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem><Link href="/story-generator">Generate</Link></NavbarItem>
        {user && <NavbarItem><Link href="/dashboard">Dashboard</Link></NavbarItem>}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem><ThemeToggle /></NavbarItem>
        {!user ? (
          <>
            <NavbarItem><Link href="/login">Login</Link></NavbarItem>
            <NavbarItem>
              <Button as={Link} href="/register" color="primary" size="sm">Sign Up</Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button as={Link} href="/logout" color="danger" size="sm">Logout</Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </NUNavbar>
  );
}
