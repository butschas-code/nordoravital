"use client";

/**
 * Replaces the root layout when it fails, so it cannot rely on globals.css,
 * fonts or translations: everything is inline and in English.
 */
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  console.error(JSON.stringify({ level: "error", event: "page.global_error", digest: error.digest ?? null }));

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#F6F1EA",
          color: "#1E2A22",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <title>Something went wrong | Nordora Vital</title>
        <main style={{ maxWidth: 480, padding: 24, textAlign: "center" }}>
          <h1 style={{ fontSize: 28, margin: 0 }}>Something went wrong</h1>
          <p style={{ color: "#6D6158", lineHeight: 1.6 }}>
            The page couldn&apos;t load. Please try again. If it keeps happening, email
            info@nordoravital.com.
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            style={{
              marginTop: 16,
              minHeight: 44,
              padding: "10px 20px",
              border: 0,
              borderRadius: 10,
              background: "#0E3D34",
              color: "#fff",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
