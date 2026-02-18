import { IconArrowRight, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero min-h-[calc(100vh-4rem)] relative overflow-hidden bg-base-200">
        {/* Ambient glow blobs */}
        <div className="absolute -top-32 -left-32 w-120 h-120 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-120 h-120 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

        <div className="hero-content text-center flex flex-col z-10">
          {/* Status badge */}
          <div className="badge badge-outline gap-2 px-4 py-3 text-xs font-medium mb-2">
            <span className="inline-block w-2 h-2 rounded-full bg-success animate-pulse" />
            Working through school
          </div>

          {/* Heading with gradient */}
          <h1 className="text-6xl font-extrabold tracking-tight bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
            awtpi314
          </h1>

          {/* Subtitle */}
          <p className="text-base-content/70 max-w-md mt-2 text-lg leading-relaxed">
            Experienced web developer, dedicated computer science / cyber
            operations student, and technology enthusiast.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/projects" className="btn btn-primary">
              View Projects <IconArrowRight size={18} />
            </Link>
            <button className="btn btn-outline">
              Get in Touch <IconMail size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
