/**
 * Local flyer previews. The marker gives <html> plain scrolling (see globals.css);
 * this segment gets no header, footer or cookie banner because those live in the
 * surface layouts. The proxy answers 404 for /flyers in production.
 */
export default function FlyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-flyer-preview className="contents">
      {children}
    </div>
  );
}
