# AO-5 — About/Bio identity framing (post-Gaembla, autónomo)

> Decision record for the personal-site identity refresh. This is the upstream
> wording/voice decision the downstream `about-me` edit drops in. It changes no
> rendered surface on its own.
>
> Linear: [AO-5](https://linear.app/ao-rin-personal/issue/AO-5/brainstorm-refresh-aboutbio-identity-post-gaembla-autonomo-framing)

## TL;DR (the operator-level calls)

| Decision | Choice |
| -- | -- |
| Role label | **Independent Fullstack Engineer** (autónomo as the parenthetical, not the headline) |
| Where it lives | **Personal site only** for now — no LinkedIn fan-out this round |
| Voice | Calm, concise, first-person — matches the landing banner, *not* the corporate LinkedIn summary |
| Section shape | One recalibrated About block; no new timeline section |
| Client naming | No client named (YUM, nvp, oggi, tuplaa stay off the site); aggregated as "several fullstack engagements" |
| Employer naming | Employers may stay named; Gaembla is the only one used as the post-2024 anchor in the drop-in copy |

## Why a decision was needed first

The issue assumes the site already speaks in a "calm, lower-case-casual voice."
The landing banner does (`landing-banner/index.jsx:33-34` — "Hey! I'm Jose" /
"Full-stack developer"), but the live About copy
(`about-me/index.jsx:22-34`) is corporate and strengths-y: *"Hard-working… eager
to make significant contributions… You can rely on my dedication."* That reads
like the LinkedIn summary the issue explicitly wants to avoid.

So the framing decision is also a **recalibration** decision: the autónomo
paragraph can't just be appended to corporate copy, or the voices clash. The
drop-in below replaces the corporate paragraphs wholesale and keeps the existing
skills lead-in.

## Voice principles (for the drop-in and anything downstream)

- First person, present tense, lower-key. No adjectives selling the candidate
  ("hard-working", "dedicated", "goal-oriented" — all cut).
- State what the work *is*, not how committed I am to it.
- Concrete stacks over abstract strengths.
- Short sentences. One idea per clause.

## Final drop-in copy (ready as-is — no further editing pass)

Replace the two corporate `<p>` paragraphs in `about-me/index.jsx:22-31` with the
following, keeping the existing "Here you can check some of my **skills**:"
lead-in to the skills slider unchanged.

> I'm a Colombian fullstack engineer based in Málaga, Spain, with a
> software-engineering degree from ITMO University and a bit over six years
> building commercial software.
>
> Up to 2024 I spent a couple of years at Gaembla in Cyprus. Since then I've
> worked independently as an autónomo, usually across several fullstack
> engagements at once — web platforms, internal admin tools, deploy
> infrastructure, and design-system work. I pick the stack to fit the project:
> mostly TypeScript on Node/NestJS with React, Next, and React Native, and more
> recently Go with Temporal on the backend and React with TanStack on the
> frontend.

Notes for the implementer:
- This is plain prose; no client name appears. Keep it that way.
- "autónomo" stays lower-case and unitalicized — it's how Jose refers to it, not
  a foreign-term flourish.
- If a role label is needed elsewhere (e.g. a banner subtitle), use **Independent
  Fullstack Engineer**, not "Full-stack developer".

## Role label — decision

**Independent Fullstack Engineer**, with "autónomo" carried in the body text as
the lived-in word rather than the title.

Considered and rejected:
- *Fullstack Contractor* — accurate but "contractor" leans staffing-agency; less
  true to running several engagements by choice.
- *Autónomo · Software Engineer* — good but mixes a Spanish legal status into a
  primarily English headline; better as body voice than label.
- *Independent Software Engineer & Consultant* — "consultant" overstates the
  advisory share of the work; most of it is building.

## Client / employer naming — policy and rationale

| Org | Period | On the site? | Why |
| -- | -- | -- | -- |
| Asmetales (Cali) | 2017–2018 | Named (already a portfolio project) | Public, Jose's own showcased work |
| BluePixel (Mexico City) | 2020–2021 | May stay named | Employer, not a confidential client |
| Управление Пространством (St. Petersburg) | 2021–2022 | May stay named | Employer, public LinkedIn timeline |
| Adcombo (St. Petersburg) | 2022 | May stay named | Employer, public LinkedIn timeline |
| Gaembla (Cyprus) | 2022–2024 | **Named** — used as the post-2024 anchor | Employer; the "post-Gaembla" pivot the whole framing hangs off |
| YUM, nvp, oggi, tuplaa | 2024–present | **Never named** — aggregated | Autónomo *clients*, not employers; naming them leaks an engagement list |

Principle: **employers can be named; contract clients are aggregated.** An employer
relationship is already public (LinkedIn) and was a job, not a confidence. A
client engaged me directly under autónomo terms — surfacing that list serves no
one and risks leaking who is paying for what. The drop-in copy uses only Gaembla
because it's the one name that does narrative work (the "since then" pivot); the
older employers are kept available by this policy but aren't forced into the
minimal copy.

## LinkedIn — decision

**Personal site only for now.** LinkedIn keeps its current corporate headline
("Software Engineer | AI & TypeScript Enthusiast") and strengths-y summary. The
two surfaces serve different audiences and the calm voice is deliberately a
personal-site choice. Revisit LinkedIn as a separate, explicit task if/when Jose
wants the voices to converge — not as a side effect of this refresh.

## Alternatives kept on paper (so the final copy is a real choice)

**Alt B — voice-of-the-craft**

> Since 2024 I've worked independently, helping product teams ship the parts they
> don't have headcount for — usually the design-system, deploy-pipeline, or
> admin-SPA slice of a larger product. Multi-tenant, multi-stack, mostly
> TypeScript and Go.

*Why not chosen as primary:* sharper, but "the parts they don't have headcount
for" frames the work as gap-filling rather than ownership, and drops the ITMO /
six-years grounding that anchors the identity.

**Alt C — consultancy framing**

> Since 2024 I've consulted and built for product teams on fullstack work —
> frontend systems, backend services, deploy tooling. Each engagement is
> different; what stays the same is small reviewable diffs, ADRs for the
> load-bearing choices, and shipping over polishing.

*Why not chosen as primary:* the process-values tail ("small reviewable diffs,
ADRs…") is strong but reads more like a working-style manifesto than an About
intro; better suited to a dedicated "how I work" section than the bio.

The chosen primary leans on Alt A (voice-of-the-CV) for its concrete
stack-to-fit-the-project line, with the calmer grounding of the recalibrated
opening.

## Acceptance criteria coverage

- [x] Short paragraph describes the post-Gaembla period without naming any client → drop-in §2.
- [x] Framing makes the work read as independent / contractor across multiple engagements → "worked independently as an autónomo… across several fullstack engagements at once".
- [x] Voice consistent with the site (concise, first-person, calm), not corporate → voice principles + recalibrated opening.
- [x] At least two alternative phrasings on paper → Alts B and C.
- [x] Note on which earlier roles stay named vs anonymized, and why → naming policy table.
- [x] Role label decided → Independent Fullstack Engineer.
- [x] LinkedIn vs site-only decided → site only for now.
- [x] Chosen wording ready to drop in as-is → final drop-in copy.

## Validation note

This deliverable is a decision document; it renders nothing, so UI validation is
N/A here and belongs to the downstream `about-me` edit that consumes the drop-in
copy. The one automatable safety gate — repo-wide search for the client names —
is clean: no `YUM`, `nvp`, `oggi`, or `tuplaa` in `src/`, `public/`, or
`README.md`. The only employer-shaped hit anywhere is `Asmetales` as an existing
portfolio project.
