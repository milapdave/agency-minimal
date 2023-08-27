import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header class="fixed top-0 left-0 w-full z-50 py-6 bg-[#F6F8FB]">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <Link class="block text-3xl font-semibold" href="/">
              <span class="sr-only">Home</span>
              Logo
            </Link>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-lg">
                <li>
                  <Link class="transition hover:text-primary" href="/">
                    About
                  </Link>
                </li>

                <li>
                  <Link class=" transition hover:text-primary" href="/">
                    Careers
                  </Link>
                </li>

                <li>
                  <Link class=" transition hover:text-primary" href="/">
                    History
                  </Link>
                </li>

                <li>
                  <Link class=" transition hover:text-primary" href="/">
                    Services
                  </Link>
                </li>

                <li>
                  <Link class=" transition hover:text-primary" href="/">
                    Projects
                  </Link>
                </li>

                <li>
                  <Link class=" transition hover:text-primary" href="/">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <Button color="secondary">Login</Button>
              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
