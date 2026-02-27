export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-zinc-400">
        <div className="text-zinc-200">CMaura</div>
        <div>MVP systems for UK SMEs.</div>
        <div>© {new Date().getFullYear()} CMaura</div>
      </div>
    </footer>
  );
}
