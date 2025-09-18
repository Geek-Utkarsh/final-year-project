import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = (resolvedTheme ?? theme) === "dark";
  return (
    <Switch
      size="sm"
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      aria-label="Toggle dark mode"
    >
      {isDark ? "Dark" : "Light"}
    </Switch>
  );
}
