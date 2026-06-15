"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Menu, X, LogOut } from "lucide-react";
import { mainNav } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SiteLogo } from "@/components/site-logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // Transparent overlay only at the top of the homepage (and when menu closed).
  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        overlay
          ? "border-b border-white/10 glass-dark"
          : "border-b border-border glass-nav",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <SiteLogo invert={overlay} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  overlay
                    ? "text-white/80 hover:text-white"
                    : isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className={cn(
                    "hidden rounded-md px-3 py-2 text-sm font-medium transition-colors sm:inline-flex",
                    overlay ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className={cn(
                    "hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors sm:inline-flex",
                    overlay ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className={cn(
                  "hidden rounded-md px-3 py-2 text-sm font-medium transition-colors sm:inline-flex",
                  overlay ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary",
                )}
              >
                Sign in
              </Link>
            )}
            <Link
              href="/book"
              className={buttonVariants({ variant: "accent", size: "sm", className: "hidden sm:inline-flex" })}
            >
              Book Appointment
            </Link>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
                overlay ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted",
              )}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <Container>
            <nav className="flex flex-col py-3" aria-label="Mobile">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium",
                    isActive(item.href)
                      ? "bg-muted text-primary"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className={buttonVariants({ variant: "accent", size: "md", className: "mt-2" })}
              >
                Book Appointment
              </Link>

              <div className="mt-2 border-t border-border pt-2">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                    >
                      Dashboard
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                      className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-base font-medium text-foreground hover:bg-muted"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign out
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                  >
                    Sign in
                  </Link>
                )}
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
