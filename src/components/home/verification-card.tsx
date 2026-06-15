import { BadgeCheck, Fingerprint, ScanLine } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { verifiedSubject } from "@/lib/images";

/**
 * Signature product visual — a glass "verification result" card resembling a
 * digital identity check (portrait, masked NIN, Verified state, biometric meter).
 * Distinct to Slogani; not a generic marketing card.
 */
export function VerificationCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(11,92,168,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(234,88,12,0.25),transparent_60%)] blur-2xl"
      />

      <div className="glass-card overflow-hidden p-0">
        {/* header */}
        <div className="flex items-center justify-between border-b border-border/70 bg-gradient-to-r from-primary to-[#0a4f93] px-5 py-3 text-white">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <ScanLine className="h-4 w-4" />
            Identity Verification
          </span>
          <span className="flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Live
          </span>
        </div>

        {/* body */}
        <div className="space-y-4 p-5">
          <div className="flex items-center gap-4">
            <Avatar name={verifiedSubject.name} src={verifiedSubject.img} size={64} />
            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-foreground">
                {verifiedSubject.name}
              </p>
              <p className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-emerald-600">
                <BadgeCheck className="h-4 w-4" />
                NIN Verified
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-muted/70 px-3 py-2">
              <dt className="text-xs text-muted-foreground">NIN</dt>
              <dd className="font-mono font-medium tracking-wider text-foreground">•••• •••• 4821</dd>
            </div>
            <div className="rounded-lg bg-muted/70 px-3 py-2">
              <dt className="text-xs text-muted-foreground">Status</dt>
              <dd className="font-medium text-foreground">Active</dd>
            </div>
          </dl>

          {/* biometric meter */}
          <div className="rounded-lg border border-border/70 px-3 py-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Fingerprint className="h-4 w-4 text-primary" />
                Biometric match
              </span>
              <span className="text-sm font-semibold text-emerald-600">98%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary to-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
