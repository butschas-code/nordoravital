"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

const CONSENT_KEY = "nv_cookie_consent";
const POSTHOG_CONSENT_EVENT = "nv-cookie-consent";

let posthogStarted = false;

function startPostHog() {
  if (posthogStarted) return;

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
        if (event instanceof CustomEvent && event.detail === "all") {
          startPostHog();
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
