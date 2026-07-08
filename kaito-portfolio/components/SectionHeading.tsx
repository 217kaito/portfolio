import Reveal from "./Reveal";

type SectionHeadingProps = {
  index: string;
  title: string;
  sub?: string;
};

export default function SectionHeading({ index, title, sub }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="display mb-3 text-sm tracking-[0.35em] text-accent-soft/70 uppercase">
        {index}
      </p>
      <h2 className="display text-4xl font-bold md:text-6xl lg:text-7xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-4 max-w-xl text-base text-foreground/60">{sub}</p>}
    </Reveal>
  );
}
