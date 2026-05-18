import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <header className={cn(isCenter ? "text-center" : "text-left", className)}>
      <h2
        id={id}
        className={cn(
          "text-balance uppercase text-4xl font-semibold leading-tight tracking-[0.02em] text-white sm:text-6xl",
          isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-pretty text-[15px] leading-7 text-jfc-muted sm:text-lg sm:leading-8",
            isCenter ? "mx-auto max-w-3xl" : "max-w-3xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

