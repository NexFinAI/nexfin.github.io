import { LINKEDIN_URL } from '../config/site'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import { IconArrowRight, IconLinkedin } from '../components/icons'

const FOCUS_AREAS = [
  'Reproducible internal research',
  'Transparent evaluation standards',
  'Robust research infrastructure',
  'AI-assisted quantitative workflows',
  'Selective public releases when appropriate',
]

const PUBLICATION_PIPELINE = [
  'Research papers and technical reports',
  'Reproductions of existing studies',
  'Quantitative experiments and benchmarks',
  'AI-powered financial research systems',
  'Findings, limitations, and future research directions',
]

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects & Research"
            title="Proprietary Research. Rigorous Results."
            description="We believe disciplined, reproducible research and robust engineering are the foundation of reliable financial technology."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* Proprietary research */}
          <Reveal delay={80}>
            <article className="flex h-full flex-col rounded-none border border-edge bg-panel/50 p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[1.15rem] font-semibold tracking-tight text-white">
                  Proprietary Research &amp; Engineering
                </h3>
                <Tag tone="signal">Closed source</Tag>
              </div>

              <p className="mt-4 text-[0.9rem] leading-relaxed text-mist">
                Our core research, models, and trading systems are developed in-house. We prioritize
                methodological rigor, data quality, and engineering discipline over public
                disclosure of implementation details.
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                Our work aims to support
              </p>
              <ul className="mt-3 space-y-2.5">
                {FOCUS_AREAS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-signal/70" />
                    <span className="text-[0.87rem] leading-relaxed text-fog">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <p className="text-[0.87rem] leading-relaxed text-mist">
                  We occasionally release small tools or libraries when they are broadly useful.
                  For research collaborations and technical inquiries, get in touch.
                </p>
                <ButtonLink
                  href="#contact"
                  className="mt-4"
                  iconRight={<IconArrowRight className="h-4 w-4" />}
                >
                  Contact Us
                </ButtonLink>
              </div>
            </article>
          </Reveal>

          {/* Publications — honestly labeled as in progress */}
          <Reveal delay={160}>
            <article className="flex h-full flex-col rounded-none border border-dashed border-flag/35 bg-flag/[0.02] p-6 md:p-8">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[1.15rem] font-semibold tracking-tight text-white">
                  Research &amp; Publications
                </h3>
                <Tag tone="flag">Research in progress</Tag>
              </div>

              <p className="mt-4 text-[0.9rem] leading-relaxed text-mist">
                Our research output includes technical reports, research notes, experimental
                studies, and, where appropriate, academic publications. We prioritize methodological
                clarity, reproducibility, and honest evaluation over unsupported performance claims.
              </p>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                As our work develops, this section will feature
              </p>
              <ul className="mt-3 space-y-2.5">
                {PUBLICATION_PIPELINE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-flag/70" />
                    <span className="text-[0.87rem] leading-relaxed text-fog">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <p className="rounded-none border border-edge/80 bg-panel/60 px-4 py-3 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-mist">
                  <span className="text-flag">CURRENT STATUS</span> — Research and engineering are
                  ongoing. Publications and projects will be added as they become available.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink href="#research" variant="secondary">
                    Explore Research
                  </ButtonLink>
                  {LINKEDIN_URL ? (
                    <ButtonLink
                      href={LINKEDIN_URL}
                      variant="secondary"
                      icon={<IconLinkedin className="h-4 w-4" />}
                    >
                      Follow Us on LinkedIn
                    </ButtonLink>
                  ) : (
                    <span
                      title="Coming soon"
                      className="inline-flex cursor-default items-center gap-2 rounded-none border border-edge/60 px-4 py-2.5 text-sm font-medium text-mist/60"
                    >
                      <IconLinkedin className="h-4 w-4" />
                      LinkedIn
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}