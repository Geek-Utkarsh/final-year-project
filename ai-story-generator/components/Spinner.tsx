import { Spinner as NUSpinner } from "@nextui-org/react";

export default function Spinner({ label }: { label?: string }) {
  return <NUSpinner color="primary" label={label} />;
}
