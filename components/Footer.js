export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 py-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-base text-black">
              &copy; 2022. Company Name. All rights reserved.
            </p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-base sm:mt-0 lg:justify-end">
              <li>
                <a href="#" className="text-black transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" className="text-black transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-black transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
