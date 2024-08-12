/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DxFaUxz7x3T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import a from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f4f8]">
          <div className="container w-full mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-[#4caf50] sm:text-5xl md:text-6xl">
                Plant a Tree, Grow a Future
              </h1>
              <p className="max-w-[600px] text-[#6b7280] md:text-xl">
                Join our mission to plant trees and create a more sustainable
                future. Collaborate with local NGOs to make a real impact.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#4caf50] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#43a047] focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:ring-offset-2"
                  prefetch={false}
                >
                  Plant a Tree
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#4caf50] bg-white px-8 text-sm font-medium text-[#4caf50] shadow-sm transition-colors hover:bg-[#e6f4ea] focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:ring-offset-2"
                  prefetch={false}
                >
                  Learn More
                </a>
              </div>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/188/651/small_2x/earth-day-tree-on-the-green-earth-background-generative-ai-free-photo.jpeg"
              width="550"
              height="400"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container w-full mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#4caf50] sm:text-4xl md:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-[#6b7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our tree-planting initiatives are making a difference
                  in local communities and the environment.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#4caf50]">
                  Millions of Trees Planted
                </h3>
                <p className="text-sm text-[#6b7280]">
                  Our global network of partners has planted millions of trees,
                  helping to combat deforestation and climate change.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#4caf50]">
                  Sustainable Livelihoods
                </h3>
                <p className="text-sm text-[#6b7280]">
                  By working with local communities, we've created sustainable
                  livelihoods and empowered people to take care of the
                  environment.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-[#4caf50]">
                  Biodiversity Restoration
                </h3>
                <p className="text-sm text-[#6b7280]">
                  Our tree-planting efforts have helped to restore habitats and
                  support the recovery of endangered species.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f4f8]">
          <div className="container w-full mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-[#4caf50] md:text-4xl/tight">
                Join Our Movement
              </h2>
              <p className="mx-auto max-w-[600px] text-[#6b7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Together, we can make a lasting impact on the environment and
                local communities. Get involved today!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 border-[#4caf50] focus:ring-[#4caf50]"
                />
                <button
                  type="submit"
                  className="bg-[#4caf50] text-white hover:bg-[#43a047] focus:ring-[#4caf50]"
                >
                  Get Involved
                </button>
              </form>
              <p className="text-xs text-[#6b7280]">
                Sign up to stay updated on our latest initiatives.{" "}
                <a
                  href="#"
                  className="underline underline-offset-2 text-[#4caf50]"
                  prefetch={false}
                >
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container w-full mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#4caf50] sm:text-4xl md:text-5xl">
                  Our Partners
                </h2>
                <p className="max-w-[900px] text-[#6b7280] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We collaborate with leading environmental NGOs and
                  organizations to make a real impact.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0f4f8]">
          <div className="container w-full mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f4ea] px-3 py-1 text-sm text-[#4caf50]">
                  Testimonials
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter text-[#4caf50] sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Hear from Our Community
                </h2>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#4caf50] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#43a047] focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Read Testimonials
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#4caf50] bg-white px-8 text-sm font-medium text-[#4caf50] shadow-sm transition-colors hover:bg-[#e6f4ea] focus:outline-none focus:ring-2 focus:ring-[#4caf50] focus:ring-offset-2"
                    prefetch={false}
                  >
                    Become a Partner
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f4ea] px-3 py-1 text-sm text-[#4caf50]">
                  Impact
                </div>
                <p className="mx-auto max-w-[700px] text-[#6b7280] md:text-xl/relaxed">
                  Our tree-planting initiatives have had a significant impact on
                  local communities and the environment. By working with trusted
                  partners, we ensure that every tree planted makes a lasting
                  difference.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#f0f4f8] p-6 md:py-12 w-full">
        <div className="container w-full mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#4caf50]">About</h3>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Our Mission
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Our Team
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Careers
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Press
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#4caf50]">Get Involved</h3>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Plant a Tree
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Donate
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Volunteer
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Partnerships
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#4caf50]">Resources</h3>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Blog
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              FAQs
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Impact Reports
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Educational Resources
            </a>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold text-[#4caf50]">Legal</h3>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf50]"
              prefetch={false}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#6b7280] hover:text-[#4caf"
              prefetch={false}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  );
}
