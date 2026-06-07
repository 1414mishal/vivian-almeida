"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

/**
 * Inline, scroll-gated video player.
 *
 * Behaviour (by design, for the doctor intro clip):
 *  - Shows a thumbnail with a play button — nothing plays on page load.
 *  - Only becomes playable once the player has scrolled into view.
 *  - Playback starts solely on user click (a real user gesture), and pauses
 *    automatically again if the visitor scrolls away.
 *  - Sound is entirely optional: the native <video> controls (which mount once
 *    playback starts) include a volume/mute toggle, so the visitor decides.
 */
interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "9/16";
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    forwardedRef
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [isInView, setIsInView] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useImperativeHandle(
      forwardedRef,
      () => containerRef.current as HTMLDivElement
    );

    // Track visibility — only allow playback while the player is on screen,
    // and pause automatically the moment it scrolls out of view again.
    React.useEffect(() => {
      const node = containerRef.current;
      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
          if (!entry.isIntersecting) {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        },
        { threshold: 0.4 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    const handlePlay = () => {
      if (!isInView) return;
      setIsPlaying(true);
    };

    // Once the <video> mounts, start playback — this is a direct result of a
    // user click, so the browser allows sound (the visitor can still mute via
    // the native controls if they'd rather watch silently).
    React.useEffect(() => {
      if (isPlaying) {
        videoRef.current?.play().catch(() => {
          /* Autoplay can still be blocked in rare cases — controls remain visible. */
        });
      }
    }, [isPlaying]);

    return (
      <div
        ref={containerRef}
        className={cn(
          "group relative overflow-hidden rounded-lg bg-black shadow-lg",
          className
        )}
        style={{ aspectRatio }}
        {...props}
      >
        {isPlaying ? (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={thumbnailUrl}
            controls
            playsInline
            preload="metadata"
            className="h-full w-full rounded-lg bg-black"
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support embedded video.
          </video>
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={`Play video: ${title}`}
            className={cn(
              "relative block h-full w-full cursor-pointer text-left",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            {/* Thumbnail */}
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300",
                  "group-hover:scale-110 group-hover:bg-white/30",
                  isInView && "shadow-[0_0_0_0_rgba(255,255,255,0.35)] animate-pulse-ring"
                )}
              >
                <Play className="h-8 w-8 fill-white text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title and description */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-white sm:text-2xl">{title}</h3>
              {description && (
                <p className="mt-1 text-xs text-white/80 sm:text-sm">{description}</p>
              )}
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
                Tap to play · sound optional
              </p>
            </div>
          </button>
        )}
      </div>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
