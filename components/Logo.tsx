import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <>
      <div className={clsx("whitespace-nowrap font-display", className)}>
        <span>Hauts </span>
        <span className="text-red-600">Numériques </span>
        <span>et Médias</span>
      </div>
    </>
  );
}
