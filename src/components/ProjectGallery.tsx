"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectImage } from "@/data/site";

export default function ProjectGallery({ rows }: { rows: ProjectImage[][] }) {
  // Only photos open in the lightbox; clips play in place.
  const images = rows.flat().filter((item) => !item.video);
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <div className="space-y-4">
        {rows.map((row, r) => (
          <div key={r} className="flex flex-col gap-4 sm:flex-row">
            {row.map((item) => {
              // flex-grow by aspect ratio gives every item in the row the same height,
              // so each item's share of the row width is its aspect ratio over the row's total.
              const aspect = item.width / item.height;
              const share = aspect / row.reduce((sum, other) => sum + other.width / other.height, 0);
              const sizes = `(min-width: 1024px) ${Math.ceil(50 * share)}vw, (min-width: 640px) ${Math.ceil(100 * share)}vw, 100vw`;
              return (
                <figure
                  key={item.src}
                  // On phones rows stack, so keep a portrait clip from towering over the photos.
                  className={`min-w-0 ${item.video ? "max-sm:max-w-[60%]" : ""}`}
                  style={{ flex: `${aspect} 1 0%` }}
                >
                  {item.video ? (
                    // The clips have no audio track, so browsers allow them to autoplay.
                    <video
                      src={item.video}
                      poster={item.src}
                      width={item.width}
                      height={item.height}
                      aria-label={item.alt}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="block h-auto w-full bg-surface object-cover"
                      style={{ aspectRatio: `${item.width} / ${item.height}` }}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpen(images.indexOf(item))}
                      className="block w-full cursor-zoom-in"
                      aria-label={`Enlarge: ${item.alt}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes={sizes}
                        className="w-full bg-surface"
                        loading={r === 0 ? "eager" : "lazy"}
                      />
                    </button>
                  )}
                  {item.caption && <figcaption className="mt-2 text-sm text-muted">{item.caption}</figcaption>}
                </figure>
              );
            })}
          </div>
        ))}
      </div>

      {/* Portaled to <body> so the page fade-in on <main> can't trap it below the back-to-top button. */}
      {current &&
        open !== null &&
        createPortal(
          <div role="dialog" aria-modal="true" aria-label={current.alt} className="fixed inset-0 z-50 flex flex-col bg-background">
            <div className="flex items-center justify-between px-5 py-4 text-sm sm:px-8">
              <span className="text-muted tabular-nums">
                {open + 1} / {images.length}
              </span>
              <button ref={closeRef} type="button" onClick={() => setOpen(null)} className="hover:opacity-50">
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 cursor-zoom-out" onClick={() => setOpen(null)}>
              <Image key={current.src} src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain px-5 sm:px-8" />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm sm:px-8">
              <button type="button" onClick={() => step(-1)} className="hover:opacity-50">
                ← Prev
              </button>
              <span className="truncate text-muted">{current.caption}</span>
              <button type="button" onClick={() => step(1)} className="hover:opacity-50">
                Next →
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
