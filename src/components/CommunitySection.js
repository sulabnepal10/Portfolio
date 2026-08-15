import { Container } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "./CommunitySection.css";

export const CommunitySection = () => {
  return (
    <section className="community" id="community">
      <span className="sheet-tag">SHEET 06 / FIELD NOTES</span>
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <div className="sheet-head align-left">
                <span className="eyebrow">Community</span>
                <h2>Engineering, pointed at people</h2>
                <p>
                  Somewhere between donating blood at the hospital near home and a fellowship
                  my sister pulled me into, I found the throughline I still build toward:
                  none of this means much until it's aimed at someone. Seneca put it better —
                  "luck is what happens when preparation meets opportunity" — and when the
                  opportunity showed up, it was a chance to design an app.
                </p>
              </div>

              <div className="community-grid">
                <article className="community-card featured">
                  <div className="community-card-head">
                    <span className="community-tag">IFRC Fellowship · UI Design</span>
                    <h3>Pari — a way to report cyberbullying safely</h3>
                  </div>
                  <p>
                    When my sister was selected for an IFRC fellowship on cyberbullying
                    protection, I designed the interface for <strong>Pari</strong> — Nepali
                    for "angel" — a reporting tool for victims of cyberbullying and
                    cybercrime. Serious cases route straight to Nepal's Cyber Bureau. I went
                    back to schools, including my own, to demonstrate it and explain that
                    reporting doesn't require speaking up out loud. By the next day after one
                    session, students had already filed reports. Pari has since completed
                    testing with positive feedback and is with the IFRC for further
                    assessment.
                  </p>
                  <blockquote>
                    One report came from a girl who had finally found the courage to speak
                    out after months of online harassment. Pari became the voice she used to
                    ask for help — that's when the project stopped being "lines of code" to
                    me.
                  </blockquote>
                </article>

                <article className="community-card">
                  <div className="community-card-head">
                    <span className="community-tag">Ongoing</span>
                    <h3>Blood donation</h3>
                  </div>
                  <p>
                    Living near a zonal hospital, I never had much of an excuse not to show
                    up. I keep donating because it's the smallest habit I know that
                    consistently helps someone I'll never meet.
                  </p>
                </article>

                <article className="community-card">
                  <div className="community-card-head">
                    <span className="community-tag">Campus Drive</span>
                    <h3>COVID-19 vaccine awareness</h3>
                  </div>
                  <p>
                    When misinformation was keeping students on campus from getting
                    vaccinated, a group of us organized an on-campus awareness drive to walk
                    people through the facts directly instead of leaving them to sort through
                    rumors.
                  </p>
                </article>
              </div>

              <div className="certificate-plate">
                <div className="certificate-seal" aria-hidden="true">
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="30" stroke="var(--copper)" strokeWidth="1.5" />
                    <circle cx="32" cy="32" r="23" stroke="var(--copper)" strokeWidth="1" strokeDasharray="3 4" />
                    <path d="M22 33l7 7 14-15" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="certificate-body">
                  <span className="community-tag">Certificate of Recognition</span>
                  <h3>UN Volunteers — "My Vote Matters"</h3>
                  <p>
                    Recognized by the United Nations Volunteers (UNV) programme for
                    contributing as an Online Volunteer with UNDP, supporting outreach for
                    the "My Vote Matters" campaign during Nepal's election.
                  </p>
                  <dl className="certificate-facts">
                    <div>
                      <dt>Role</dt>
                      <dd>Online Volunteer, UNDP</dd>
                    </div>
                    <div>
                      <dt>Commitment</dt>
                      <dd>5 hrs/week for 3 weeks</dd>
                    </div>
                    <div>
                      <dt>Started</dt>
                      <dd>19 February 2026</dd>
                    </div>
                    <div>
                      <dt>Signed</dt>
                      <dd>Toily Kurbanov, Executive Coordinator, UNV</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
