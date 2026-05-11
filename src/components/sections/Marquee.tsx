type MarqueeProps = {
  items?: readonly string[];
};

export function Marquee({
  items = ["СИЛА", "ХАРАКТЕР", "ДИСЦИПЛИНА"],
}: MarqueeProps) {
  const renderSegment = (keyPrefix: string) =>
    items.flatMap((t, idx) => [
      <span key={`${keyPrefix}-item-${idx}`} className="jfc-marquee-item">
        {t}
      </span>,
      <span key={`${keyPrefix}-sep-${idx}`} className="jfc-marquee-sep">
        •
      </span>,
    ]);

  return (
    <div className="relative overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0))]" />

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 lg:px-6">
        <div className="border-y border-black/10 py-3 sm:py-4">
          <div className="jfc-marquee-track">
            <div className="jfc-marquee-row">
              {renderSegment("a")}
              {renderSegment("b")}
            </div>
            <div className="jfc-marquee-row" aria-hidden="true">
              {renderSegment("c")}
              {renderSegment("d")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

