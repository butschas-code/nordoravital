/** Uptime probe. GET route handlers are not cached, so monitors always reach the live server. */
export function GET() {
  return Response.json(
    {
      status: "ok",
      time: new Date().toISOString(),
      commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
      // The site has no database; the only dependency worth reporting is email delivery.
      email: process.env.RESEND_API_KEY ? "configured" : "missing",
    },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
