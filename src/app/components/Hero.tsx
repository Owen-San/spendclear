import BrandAccent from "./BrandAccent";

function PreviewCard() {
  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white/90">Overview</p>
          <p className="text-xs text-white/60">This month</p>
        </div>

        <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs text-white/60">Balance</p>
          <p className="mt-1 text-2xl font-semibold text-white">$4,281.22</p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-xs text-white/60">Income</p>
              <p className="mt-1 text-sm font-semibold text-white">$2,540</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-xs text-white/60">Spending</p>
              <p className="mt-1 text-sm font-semibold text-white">$1,913</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3">
              <p className="text-xs text-white/60">Saved</p>
              <p className="mt-1 text-sm font-semibold text-white">$627</p>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <p className="text-xs text-white/70">Groceries</p>
            <p className="text-xs font-semibold text-white">$146.28</p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <p className="text-xs text-white/70">Gas</p>
            <p className="text-xs font-semibold text-white">$62.10</p>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2">
            <p className="text-xs text-white/70">Subscriptions</p>
            <p className="text-xs font-semibold text-white">$38.97</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-emerald-400/10 blur-3xl" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-950/35 via-black to-black" />
      <div className="pointer-events-none absolute left-[-120px] top-24 h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid min-h-[calc(100vh-96px)] grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-emerald-200/90">
              SpendClear
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Take control of your finances{" "}
              <BrandAccent>without the chaos</BrandAccent>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              Track transactions, categorize spending, and build clarity with a
              clean dashboard designed for real life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-400 px-5 text-sm font-semibold text-emerald-950 shadow-sm transition hover:bg-emerald-300"
              >
                Get started
              </button>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Sign in
              </button>
            </div>

            <p className="mt-5 text-xs text-white/60">
              No bank connection required to start.
            </p>

            <div className="mt-8 lg:hidden">
              <PreviewCard />
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-md">
              <PreviewCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
