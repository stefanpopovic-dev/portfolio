"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectImage } from "@/data/site";

export default function ProjectGallery({ rows }: { rows: ProjectImage[][] }) {
  const images = rows.flat();
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

  // Position of each row's first image in the flat list the lightbox steps through.
  const offsets = rows.map((_, r) => rows.slice(0, r).reduce((n, row) => n + row.length, 0));
  const current = open === null ? null : images[open];

  return (
    <>
      <div className="space-y-5">
        {rows.map((row, r) => (
          <div key={r} className="flex flex-col gap-5 sm:flex-row">
            {row.map((image, c) => {
              const i = offsets[r] + c;
              return (
                // flex-grow by aspect ratio gives every image in the row the same height
                <figure key={image.src} className="min-w-0" style={{ flex: `${image.width / image.height} 1 0%` }}>
                  <button type="button" onClick={() => setOpen(i)} className="block w-full cursor-zoom-in" aria-label={`Enlarge: ${image.alt}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      sizes={`(min-width: 640px) ${Math.round(100 / row.length)}vw, 100vw`}
                      className="w-full bg-surface"
                      loading={r === 0 ? "eager" : "lazy"}
                    />
                  </button>
                  {image.caption && <figcaption className="mt-2 text-sm text-muted">{image.caption}</figcaption>}
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
