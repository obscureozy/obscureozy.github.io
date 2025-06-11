import React from 'react';
import styled from '@emotion/styled';
import BackgroundEffect from './components/BackgroundCubes';
import CustomCursor from './components/CustomCursor';
import ScrollAnimation from './components/ScrollAnimation';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.5);
`;

const Section = styled.section`
  background: #1a1a1a;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.1);
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4a90e2;
  margin-bottom: 1rem;
`;

const Blockquote = styled.blockquote`
  font-style: italic;
  color: #b3b3b3;
  border-left: 4px solid #4a90e2;
  padding-left: 1rem;
  margin: 1rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const Timeline = styled.div`
  margin-top: 2rem;
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 2px solid #4a90e2;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

function App() {
  return (
    <>
      <CustomCursor />
      <BackgroundEffect />
      <Container>
        <Header>
          <Title>Dursun Ozgur Cakirkaya</Title>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/dursun-ozgur-cakirkaya/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink href="https://github.com/obscureozy" target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink href="https://docak.hashnode.dev/" target="_blank" rel="noopener noreferrer" title="Blockchain Blog">
              <i className="fas fa-cube"></i>
            </SocialLink>
          </SocialLinks>
        </Header>

        <ScrollAnimation>
          <Section>
            <h2>About Me</h2>
            <Blockquote>
              "Tech support is more than solving issues—it's about empowering users, optimizing systems, and continuously adapting to tomorrow's tech."
            </Blockquote>
            <div>
              <p>As a Technical Support Engineer with over 15 years in IT, I've carved a niche in blockchain infrastructure, DApps, and Web3 platforms. My expertise shines through in supporting a thriving community of 1,000+ developers monthly, where I excel at untangling complex challenges across blockchain SDKs, APIs, and node operations with remarkable efficiency.</p>
              <br />
              <p>My journey at Tatum has been marked by delivering expert-level support for multi-chain APIs and SDKs, where I've become a go-to resource for resolving intricate developer challenges across EVM-compatible chains. During my tenure at TON Studio, I elevated technical documentation standards, streamlined node installation and staking processes, and mastered DevOps workflows including API deployment and Linux-based cloud infrastructure management.</p>
              <br />
              <p>My impact extends beyond technical support – I've slashed ticket resolution times by 50% through innovative process optimization and proactive communication strategies. At Enigma Software Solutions, I transformed the support team's effectiveness by revolutionizing user experience and onboarding through comprehensive training and documentation. My toolkit includes mastery of Freshdesk, ClickUp, Jira, GitHub, and GCP, while I continuously expand my expertise through active learning in Python, Go, and Rust to stay at the forefront of blockchain technology evolution.</p>
            </div>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation>
          <Section>
            <h2>Skills & Tech Stack</h2>
            <SkillsGrid>
              <div>
                <h3>Technical Strengths</h3>
                <ul>
                  <li>Blockchain Support: EVM chains, TON, TRON, Solana, Bitcoin</li>
                  <li>APIs & SDKs: REST APIs, JavaScript, PHP, TypeScript</li>
                  <li>DevOps & Tools: Docker, GCP, GitHub, CI/CD pipelines</li>
                  <li>Support Platforms: Freshdesk, Jira, ClickUp, Slack, Discord</li>
                  <li>Programming: Python, Go (In Progress), Rust (In Progress)</li>
                </ul>
              </div>
              <div>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Analytical problem-solving</li>
                  <li>Clear technical communication</li>
                  <li>Process optimization</li>
                  <li>Cross-functional teamwork</li>
                  <li>Customer-centric support</li>
                </ul>
              </div>
            </SkillsGrid>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation>
          <Section>
            <h2>Career Timeline</h2>
            <Timeline>
              <TimelineItem>
                <h3>🚀 Founder & Director – Ozy Computing Ltd</h3>
                <p>📍 Brighton & Hove | 2013 – 2018</p>
                <ul>
                  <li>Launched and ran a successful IT consultancy</li>
                  <li>Delivered end-to-end support for SMBs: device maintenance, digital marketing, SEO</li>
                  <li>Spearheaded mobile device repairs and WordPress site deployments</li>
                  <li>Built long-term client relationships through high-quality delivery</li>
                </ul>
              </TimelineItem>
              <TimelineItem>
                <h3>🔄 Shift Manager – Enigma Software Solutions</h3>
                <p>📍 UK (Remote/Hybrid) | June 2018 – April 2022</p>
                <ul>
                  <li>Led B2C support team and B2B escalations</li>
                  <li>Reduced first-response times, trained staff, and improved workflows</li>
                  <li>Enhanced SLA compliance and QA processes using Jira and Confluence</li>
                  <li>Reviewed deployments and tested front/back-end features</li>
                </ul>
              </TimelineItem>
              <TimelineItem>
                <h3>🧩 Support Engineer – Tatum</h3>
                <p>📍 Remote | September 2022 – March 2025</p>
                <ul>
                  <li>Provided Tier 1–2 support for developers using blockchain APIs and SDKs</li>
                  <li>Supported Ethereum and other L1&L2 chains, Solana, TRON, BTC and other UTXO chains, Cosmos, TON, MultiverseX and many more!</li>
                  <li>Improved documentation and troubleshooting workflows</li>
                  <li>Collaborated with engineering and product teams for faster feedback loops</li>
                </ul>
              </TimelineItem>
              <TimelineItem>
                <h3>🔷 Tech Support Engineer – TON Studio</h3>
                <p>📍 Remote | March 2025 – May 2025</p>
                <ul>
                  <li>Enhanced technical docs (node setup, staking, token vesting)</li>
                  <li>Delivered DevOps support: Docker, Linux-based cloud infrastructure, API deployment</li>
                  <li>Bridged communication between devs and non-tech stakeholders</li>
                  <li>Contributed directly to GitHub docs for clarity and consistency</li>
                </ul>
              </TimelineItem>
            </Timeline>
          </Section>
        </ScrollAnimation>

        <ScrollAnimation>
          <Section>
            <h2>Featured Projects</h2>
            <p>💡 Explore hands-on work, open-source contributions, and blockchain experiments.</p>
            <ul>
              <li><a href="https://github.com/obscureozy" target="_blank" rel="noopener noreferrer">obscureozy on GitHub</a></li>
              <li><a href="https://docak.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blockchain Blog</a></li>
            </ul>
          </Section>
        </ScrollAnimation>
      </Container>
    </>
  );
}

export default App;