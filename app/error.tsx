"use client";

import { useEffect } from "react";

type HostWindow = Window & {
  __recordHostError?: (message: string, details: string) => void;
};

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    try {
      const details = error.stack || "";
      (window as HostWindow).__recordHostError?.(error.message, details);
      window.parent?.postMessage(
        { type: "host_error", error: error.message, details },
        "*",
      );
    } catch {
      // swallow
    }
  }, [error]);

  return null;
}
