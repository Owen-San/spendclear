import BrandAccent from "./BrandAccent";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="border-b border-white/10 bg-linear-to-b from-emerald-950/80 to-emerald-900/50 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Spend<BrandAccent>Clear</BrandAccent>
          </div>

          <ul className="flex items-center gap-2 text-sm text-white/80">
            <li>
              <a
                href="#"
                className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
              >
                Log in
              </a>
            </li>

            <li>
              <a
                href="#"
                className="ml-1 rounded-xl border border-white/10 bg-white/10 px-3 py-2 font-semibold text-white transition hover:bg-white/15"
              >
                Create account
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
