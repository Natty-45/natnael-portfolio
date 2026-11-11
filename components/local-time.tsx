"use client";

import { useEffect, useState } from "react";

export default function LocalTime({ timezone }: { timezone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(id);
  }, [timezone]);

  return <span suppressHydrationWarning>{time || "—:—"}</span>;
}
