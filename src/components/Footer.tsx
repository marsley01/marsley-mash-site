export default function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Marsley Mash. All rights reserved.
        </p>
        <p className="text-sm text-text-secondary">
          Built with purpose &middot; Nairobi, Kenya
        </p>
      </div>
    </footer>
  );
}
