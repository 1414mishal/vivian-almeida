"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { VideoPlayer } from "@/components/ui/video-thumbnail-player";
import { DOCTOR } from "@/lib/clinic";

const VIDEOS = [
  {
    thumbnailUrl: "./video/dr-vivian-intro-thumb.jpg",
    videoUrl: "./video/dr-vivian-intro.mp4",
    title: "Knee Surgery",
  },
  {
    thumbnailUrl: "./video/dr-vivian-clip-2-thumb.jpg",
    videoUrl: "./video/dr-vivian-clip-2.mp4",
    title: "Arthroscopic ACL Reconstruction — Part 1",
  },
  {
    thumbnailUrl: "./video/dr-vivian-clip-3-thumb.jpg",
    videoUrl: "./video/dr-vivian-clip-3.mp4",
    title: "Arthroscopic ACL Reconstruction — Part 2",
  },
];

export function IntroVideo() {
  return (
    <section
      id="watch"
      className="section-pad relative overflow-hidden bg-surface-low"
    >
      <div className="cyan-bloom -left-24 top-0 h-80 w-80" />
      <div className="cyan-bloom -right-20 bottom-10 h-72 w-72" />

      <div className="relative mx-auto w-full max-w-container px-5 md:px-12">
        <SectionHeading
          align="center"
          eyebrow="Meet the Doctor"
          title="A quick introduction"
          description={`Press play whenever you're ready — a short video introduction to ${DOCTOR.name} and ${DOCTOR.practice}. Sound is entirely optional; watch with or without it.`}
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:mt-16 md:grid-cols-3">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video.videoUrl}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            >
              <VideoPlayer
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                title={video.title}
                description={`${DOCTOR.name} · ${DOCTOR.practice}, ${DOCTOR.city}`}
                aspectRatio="16/9"
                className="rounded-2xl ring-1 ring-border/60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
