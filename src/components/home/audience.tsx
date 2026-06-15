import Image from "next/image";
import { audience, initials } from "@/lib/images";

/**
 * "Who we serve" — human faces with audience-segment labels. Shows the photo when
 * `img` is set, otherwise a branded portrait placeholder (Nigerian names/initials).
 */
export function Audience() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {audience.map((p) => (
        <figure key={p.name} className="glass-card glass-card-hover overflow-hidden p-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            {p.img ? (
              <Image
                src={p.img}
                alt={p.role}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <div
                aria-hidden
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a4f93] to-[#0a2440]"
              >
                <span className="text-4xl font-semibold text-white/90">
                  {initials(p.name)}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#081d33]/85 via-[#081d33]/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
              <p className="text-sm font-semibold">{p.name}</p>
              <p className="text-xs text-white/80">{p.role}</p>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
  );
}
