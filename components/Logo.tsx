import clsx from "clsx";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showImage?: boolean;
  imageSize?: number;
  compact?: boolean;
}

export function Logo({
  className,
  showImage = true,
  imageSize = 40,
  compact = false,
}: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      {showImage && (
        <div className="relative shrink-0">
          <Image
            src="/logo/logo-hnm.png"
            alt="Logo Hauts Numériques et Médias"
            width={imageSize}
            height={imageSize}
            className="object-contain"
            priority
          />
        </div>
      )}
      <div
        className={clsx(
          "whitespace-nowrap font-display transition-all",
          compact ? "text-sm md:text-base" : "text-base md:text-lg lg:text-xl"
        )}
      >
        <span className="font-bold text-slate-900">Hauts </span>
        <span className="font-bold text-red-600">Numériques </span>
        {!compact && (
          <span className="text-slate-900 font-bold">et Médias</span>
        )}
      </div>
    </div>
  );
}
