import { useEffect, useState } from "react";
import { getClinicStatus, type ClinicStatus } from "@/lib/clinic";

/** Live clinic open/closed status — refreshes itself every 30 seconds. */
export function useClinicStatus(): ClinicStatus {
  const [status, setStatus] = useState<ClinicStatus>(() => getClinicStatus());

  useEffect(() => {
    const update = () => setStatus(getClinicStatus());
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}
