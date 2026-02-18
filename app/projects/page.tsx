import Link from "next/link";

export default function Projects() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-base-content/70 mb-3">
        A showcase of my work in web development, computer science, and cyber
        operations.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card card-border bg-base-200 py-3 px-5">
          <h2 className="card-title">Classwork</h2>
          <div className="card-body">
            <section>
              <div className="flex gap-4 items-center mb-2">
                <h3 className="text-lg font-semibold">CS3210 - Algorithms</h3>
                <div className="badge badge-outline gap-2 px-4 py-3 text-xs font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-success" />
                  Completed
                </div>
              </div>
              <p className="text-base-content/70 mb-4">
                This was my school&apos;s algorithms course where we learned
                about many different algorithms and data structures and
                implemented them in Java. Our term project was implementing a
                2-4 tree and showing its performance compared to a red-black
                tree.
              </p>
              <Link
                href="https://github.com/awtpi314/algorithms"
                className="btn btn-outline"
              >
                View on GitHub
              </Link>
            </section>
            <div className="divider" />
            <section>
              <div className="flex gap-4 items-center mb-2">
                <h3 className="text-lg font-semibold">
                  EGCP4210 - Advanced Computer Architecture
                </h3>
                <div className="badge badge-outline gap-2 px-4 py-3 text-xs font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-success" />
                  Completed
                </div>
              </div>
              <p className="text-base-content/70 mb-4">
                The Advanced Computer Architecture course is considered to be a
                capstone course for computer engineering students at my school.
                I chose to take this as a CS/CY major even though I did not
                technically need to since I wanted to learn more about how the
                hardware I use every day works. For the term project, we had to
                design and build a simulator that used Tomasulo&apos;s algorithm
                to execute a set of instructions in out-of-order execution. This
                was a very fun project and it taught me a lot about how CPUs
                work under the hood.
              </p>
              <Link
                href="https://github.com/awtpi314/adv-comp-arch"
                className="btn btn-outline"
              >
                View on GitHub
              </Link>
              <p className="text-xs mt-1 text-base-content/50">
                (private repo, request access if interested)
              </p>
            </section>
            <div className="divider" />
            <section>
              <div className="flex gap-4 items-center mb-2">
                <h3 className="text-lg font-semibold">
                  CS3510 - Compiler Theory and Practice
                </h3>
                <div className="badge badge-outline gap-2 px-4 py-3 text-xs font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-warning" />
                  In Progress
                </div>
              </div>
              <p className="text-base-content/70 mb-4">
                While Advanced Computer Architecture is the capstone for
                computer engineering students, Compiler Theory and Practice is
                the capstone for CS majors at my school. For this course, we are
                building a simple compiler for the C- programming language,
                which is a subset of C designed for teaching compilers. We are
                still working on the projects in this class, but so far
                we&apos;ve learned quite a bit about lexing, parsing, semantic
                analysis, and code generation.
              </p>
              <Link
                href="https://github.com/ZGeek03/The-Gompiler"
                className="btn btn-outline"
              >
                View on GitHub
              </Link>
              <p className="text-xs mt-1 text-base-content/50">
                (private repo, request access if interested)
              </p>
            </section>
          </div>
        </div>
        <div className="card card-border bg-base-200 py-3 px-5">
          <h2 className="card-title">Personal Projects</h2>
          <div className="card-body">
            <section>
              <h3 className="text-lg font-semibold mb-2">awtpi314.com</h3>
              <p className="text-base-content/70 mb-4">
                This website! I built this from scratch using Next.js and
                Tailwind CSS to serve as a personal portfolio and blog.
                It&apos;s nothing impressive, but I have some exciting plans for
                it. This and my other websites are all going to through some
                major updates once I get some more time, (e.g. when I&apos;m
                done with school). I want to add a blog to this site to share my
                thoughts on whatever is going on.
              </p>
            </section>
            <div className="divider" />
            <section>
              <h3 className="text-lg font-semibold mb-2">Zenith Flows</h3>
              <p className="text-base-content/70 mb-4">
                Zenith Flows is a project that I&apos;m trying to get up and
                running to help me keep track of everything going on in my life.
                It takes inspiration from{" "}
                <Link href="https://triliumnotes.org/">Trilium Notes</Link>,
                which is a note-taking app that I use daily, but it doesn&apos;t
                have all the features I want, such as a mobile app, and
                integrations with other services I use. I&apos;m building Zenith
                Flows to be a life dashboard that can keep track of everything
                going on in my life. Once I&apos;ve gotten it to a more complete
                state, I&apos;ll place a link here so you can check it out if
                you&apos;re interested.
              </p>
            </section>
            <div className="divider" />
            <section>
              <h3 className="text-lg font-semibold mb-2">Dining Menu Viewer</h3>
              <p className="text-base-content/70 mb-4">
                I was tired of viewing my school&apos;s dining menu the website
                that they provided, so I built a custom viewer for the data that
                can be installed as a PWA on mobile. It fetches the menu data
                from the school&apos;s API and displays it in a much more
                readable format.
              </p>
              <Link
                href="/projects/dining-menu-viewer"
                className="btn btn-outline"
              >
                View Project
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
