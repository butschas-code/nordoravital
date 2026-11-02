"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import { CONSENT_KEY, POSTHOG_CONSENT_EVENT } from "@/lib/cookie-consent";

let posthogStarted = false;

function startPostHog() {
  if (posthogStarted) {
    posthog.opt_in_capturing();
    return;
  }

  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!token || !host) return;

  posthog.init(token, {
    api_host: host,
    defaults: "2026-01-30",
    capture_pageview: "history_change",
  });

  posthogStarted = true;
}

export function PostHogAnalytics() {
  useEffect(() => {
    try {
      if (window.localStorage.getItem(CONSENT_KEY) === "all") {
        startPostHog();
      }

      const handleConsent = (event: Event) => {
        if (!(event instanceof CustomEvent)) return;
        if (event.detail === "all") {
          startPostHog();
        } else if (posthogStarted) {
          // Consent withdrawn: stop capturing and clear PostHog's cookie and storage.
          posthog.opt_out_capturing();
          posthog.reset();
        }
      };

      window.addEventListener(POSTHOG_CONSENT_EVENT, handleConsent);
      return () => window.removeEventListener(POSTHOG_CONSENT_EVENT, handleConsent);
    } catch {
      return undefined;
    }
  }, []);

  return null;
}
