"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POSTS_PER_PAGE = 16; // 4 rows × 4 columns

const featuredPost = {
  title: "Same AI. Four Different Jobs.",
  image: "/images/blog/same-ai-four-different-jobs.jpeg",
  slug: "same-ai-four-different-jobs",
};

const sidebarPosts = [
  { title: "First AI Workflow Leaves the Nest (Week #6 Report-out)", slug: "first-ai-workflow-leaves-the-nest" },
  { title: "Implementing AI-Native Workflows, Week #5", slug: "implementing-ai-native-workflows-week-5" },
  { title: "The Moment AI Stops Feeling Like a Demo", slug: "the-moment-ai-stops-feeling-like-a-demo" },
  { title: "Implementing AI-Native Workflows, Week #3", slug: "implementing-ai-native-workflows-week-3" },
];

const posts = [
  {
    title: "The Human Premium",
    image: "/images/blog/the-human-premium.jpeg",
    slug: "the-human-premium",
  },
  {
    title: "Stop Training People to Use AI",
    image: "/images/blog/stop-training-people-to-use-ai.jpeg",
    slug: "stop-training-people-to-use-ai",
  },
  {
    title: "How to Make AI Videos That Don’t Look Like AI",
    image: "/images/blog/how-to-make-ai-videos-that-dont-look-like-ai.jpeg",
    slug: "how-to-make-ai-videos-that-dont-look-like-ai",
  },
  {
    title: "The AI Consulting Model Is Broken. Here Is What Replaces It.",
    image: "/images/blog/the-ai-consulting-model-is-broken.jpeg",
    slug: "the-ai-consulting-model-is-broken",
  },
  {
    title: "The Future Belongs to AI Workflow Companies",
    image: "/images/blog/the-future-belongs-to-ai-workflow-companies.jpeg",
    slug: "the-future-belongs-to-ai-workflow-companies",
  },
  {
    title: "The End of Lead Lists",
    image: "/images/blog/the-end-of-lead-lists.jpeg",
    slug: "the-end-of-lead-lists",
  },
  {
    title: "When Meetings Start Doing the Work",
    image: "/images/blog/when-meetings-start-doing-the-work.jpeg",
    slug: "when-meetings-start-doing-the-work",
  },
  {
    title: "Your Newest Team Member is Digital",
    image: "/images/blog/your-newest-team-member-is-digital.jpeg",
    slug: "your-newest-team-member-is-digital",
  },
  {
    title: "AI Changed the Sales Job—Not the Salesperson",
    image: "/images/blog/ai-changed-the-sales-job-not-the-salesperson.jpeg",
    slug: "ai-changed-the-sales-job-not-the-salesperson",
  },
  {
    title: "How to Choose an AI Workflow Transformation Partner",
    image: "/images/blog/how-to-choose-an-ai-workflow-transformation-partner.jpeg",
    slug: "how-to-choose-an-ai-workflow-transformation-partner",
  },
  {
    title: "The Moment AI Stopped Feeling Like Software (Week #7)",
    image: "/images/blog/the-moment-ai-stopped-feeling-like-software.jpeg",
    slug: "the-moment-ai-stopped-feeling-like-software",
  },
  {
    title: "First AI Workflow Leaves the Nest (Week #6 Report-out)",
    image: "/images/blog/first-ai-workflow-leaves-the-nest.jpeg",
    slug: "first-ai-workflow-leaves-the-nest",
  },
  {
    title: "Your SaaS Problem Isn't SaaS. It's Workflow Sprawl",
    image: "/images/blog/your-saas-problem-isnt-saas-its-workflow-sprawl.jpeg",
    slug: "your-saas-problem-isnt-saas-its-workflow-sprawl",
  },
  {
    title: "Implementing AI-Native Workflows, Week #5",
    image: "/images/blog/implementing-ai-native-workflows-week-5.jpeg",
    slug: "implementing-ai-native-workflows-week-5",
  },
  {
    title: "The Moment AI Stops Feeling Like a Demo",
    image: "/images/blog/the-moment-ai-stops-feeling-like-a-demo.jpeg",
    slug: "the-moment-ai-stops-feeling-like-a-demo",
  },
  {
    title: "Implementing AI-Native Workflows, Week #3",
    image: "/images/blog/ai-native-onboarding-week-3.jpeg",
    slug: "implementing-ai-native-workflows-week-3",
  },
  {
    title: "AI-Native Onboarding Week #2",
    image: "/images/blog/ai-native-onboarding-week-2.jpeg",
    slug: "ai-native-onboarding-week-2",
  },
  {
    title: "Letter from Chris, CEO of RevWisely",
    image: "/images/blog/letter-from-chris-ceo.jpeg",
    slug: "letter-from-chris-ceo",
  },
  {
    title: "David Can Beat Goliath Again—This Time With AI",
    image: "/images/blog/david-can-beat-goliath-again.jpeg",
    slug: "david-can-beat-goliath-again",
  },
  {
    title: "Salesforce Just Changed the Rules",
    image: "/images/blog/salesforce-just-changed-the-rules.jpeg",
    slug: "salesforce-just-changed-the-rules",
  },
  {
    title: "The CRO–CEO Relationship Is Broken",
    image: "/images/blog/the-cro-ceo-relationship-is-broken.jpeg",
    slug: "the-cro-ceo-relationship-is-broken",
  },
  {
    title: "The AI Trap That Most Companies Fall Into",
    image: "/images/blog/ai-trap-companies-fall-into.jpeg",
    slug: "the-ai-trap-that-most-companies-fall-into",
  },
  {
    title: "AI Doesn’t Fail. Leadership Does.",
    image: "/images/blog/ai-doesnt-fail-leadership-does.jpeg",
    slug: "ai-doesnt-fail-leadership-does",
  },
  {
    title: "AI GTM Engineer Job Description",
    image: "/images/blog/ai-gtm-engineer-job-description.jpeg",
    slug: "ai-gtm-engineer-job-description",
  },
  {
    title: "The New Builder of the Revenue Engine",
    image: "/images/blog/the-new-builder.jpeg",
    slug: "the-new-builder-of-the-revenue-engine",
  },
  {
    title: "Avoid Collaborative Drag with These 5 Steps",
    image: "/images/blog/collaborative-drag-and-5-steps-leaders-can-take-to-avoid-it.png",
    slug: "collaborative-drag-and-5-steps-leaders-can-take-to-avoid-it",
  },
  {
    title: "A Project and Program Management Guide",
    image: "/images/blog/the-ultimate-guide-to-project-management-and-technical-program-management.png",
    slug: "the-ultimate-guide-to-project-management-and-technical-program-management",
  },
  {
    title: "The Missing Capability Behind Most AI Initiatives",
    image: "/images/blog/missing-capability.jpeg",
    slug: "the-missing-capability-behind-most-ai-initiatives",
  },
  {
    title: "How to Build a One-Person Marketing Department",
    image: "/images/blog/one-person-marketing.png",
    slug: "how-to-build-a-one-person-marketing-department",
  },
  {
    title: "An AI GTM Engineer Should Be Your Next Marketing Hire",
    image: "/images/blog/ai-gtm-engineer.png",
    slug: "an-ai-gtm-engineer-should-be-your-next-marketing-hire",
  },
  {
    title: "Bad Revenue: When Growth Makes the Business Worse",
    image: "/images/blog/bad-revenue.png",
    slug: "bad-revenue-when-growth-makes-the-business-worse",
  },
  {
    title: "RevOps as a Competitive Advantage in the Age of AI",
    image: "/images/blog/revop-competitive-advantage.png",
    slug: "revop-as-a-competitive-advantage-in-the-age-of-ai",
  },
  {
    title: "You Think You Know. But You Don't.",
    image: "/images/blog/you-think-you-know.png",
    slug: "you-think-you-know-but-you-dont",
  },
  {
    title: "The Modern Sales Kickoff in the Age of AI",
    image: "/images/blog/modern-sales-kickoff.png",
    slug: "the-modern-sales-kickoff-in-the-age-of-ai",
  },
  {
    title: "The AI ROI Debate Is Over. Now the Work Begins.",
    image: "/images/blog/ai-roi-debate.png",
    slug: "the-ai-roi-debate-is-over-now-the-work-begins",
  },
  {
    title: "AI Year in Review 2025",
    image: "/images/blog/ai-year-review-2025.png",
    slug: "ai-year-in-review-2025",
  },
  {
    title: "How B2B SaaS Teams Should Actually Build Professional Services",
    image: "/images/blog/b2b-professional-services.png",
    slug: "how-b2b-saas-teams-should-actually-build-professional-services",
  },
  {
    title: "Launching Services as an Upmarket Strategy",
    image: "/images/blog/services-upmarket-strategy.png",
    slug: "launching-services-as-an-upmarket-strategy",
  },
  {
    title: "Customer Satisfaction Is a Revenue Strategy",
    image: "/images/blog/customer-satisfaction.png",
    slug: "customer-satisfaction-is-a-revenue-strategy",
  },
  {
    title: "The SaaS Pricing Reset",
    image: "/images/blog/saas-pricing-reset.png",
    slug: "the-saas-pricing-reset",
  },
  {
    title: "How I'd Use AI to Launch a Service Business Today",
    image: "/images/blog/ai-launch-service-business.png",
    slug: "how-id-use-ai-to-launch-a-service-business-today",
  },
  {
    title: "5 Ways to Scale Your GTM Without More Headcount",
    image: "/images/blog/scale-gtm-no-headcount.png",
    slug: "5-ways-to-scale-your-gtm-without-more-headcount",
  },
  {
    title: "Why AI Isn't Working at Your Company... Yet",
    image: "/images/blog/ai-not-working-yet.png",
    slug: "why-ai-isnt-working-at-your-company-yet",
  },
  {
    title: "Stop Studying AI. Start Using It.",
    image: "/images/blog/stop-studying-ai.png",
    slug: "stop-studying-ai-start-using-it",
  },
  {
    title: "The Sales OS: How to Reclaim 8 Hours a Week for Every Rep",
    image: "/images/blog/sales-os-reclaim-hours.png",
    slug: "the-sales-os-how-to-reclaim-8-hours-a-week-for-every-rep",
  },
  {
    title: "Building Revenue-Generating AI Agents: Our System",
    image: "/images/blog/building-ai-agents.png",
    slug: "building-revenue-generating-ai-agents-our-system",
  },
  {
    title: "Tie AI to Value Before You Build",
    image: "/images/blog/tie-ai-to-value-before-you-build.png",
    slug: "tie-ai-to-value-before-you-build",
  },
  {
    title: "Stop Guessing Your AI Roadmap",
    image: "/images/blog/stop-guessing-your-ai-roadmap.png",
    slug: "stop-guessing-your-ai-roadmap",
  },
  {
    title: "A Speed, Quality, Price Reality Check",
    image: "/images/blog/a-speed-quality-price-reality-check.png",
    slug: "a-speed-quality-price-reality-check",
  },
  {
    title: "Loyalty Hangs in the Balance",
    image: "/images/blog/loyalty-hangs-in-the-balance.png",
    slug: "loyalty-hangs-in-the-balance",
  },
  {
    title: "Hiring Guide: AI Skills Every Sales Rep Must Have",
    image: "/images/blog/hiring-guide-ai-skills-every-sales-rep-must-have.png",
    slug: "hiring-guide-ai-skills-every-sales-rep-must-have",
  },
  {
    title: "5 Plays Every CRO Must Master",
    image: "/images/blog/5-plays-every-cro-must-master.png",
    slug: "5-plays-every-cro-must-master",
  },
  {
    title: "The VP of Sales Who Saves or Sinks You",
    image: "/images/blog/the-vp-of-sales-who-saves-or-sinks-you.png",
    slug: "the-vp-of-sales-who-saves-or-sinks-you",
  },
  {
    title: "Can AI Deliver Smarter Territory Planning? Yes!",
    image: "/images/blog/can-ai-deliver-smarter-territory-planning-yes.png",
    slug: "can-ai-deliver-smarter-territory-planning-yes",
  },
  {
    title: "AI Gold or Fool’s Gold",
    image: "/images/blog/ai-gold-or-fools-gold.png",
    slug: "ai-gold-or-fools-gold",
  },
  {
    title: "Get AI-Literate—Fast",
    image: "/images/blog/get-ai-literate.png",
    slug: "get-ai-literate",
  },
  {
    title: "7 Strategies to Cut the Cost of Sales—Without Killing Growth",
    image: "/images/blog/7-strategies-to-cut-the-cost-of-sales--without-killing-growth.png",
    slug: "7-strategies-to-cut-the-cost-of-sales--without-killing-growth",
  },
  {
    title: "AI-First Revenue Growth: How Small Teams Win Big",
    image: "/images/blog/ai-first-revenue-growth-how-small-teams-win-big.png",
    slug: "ai-first-revenue-growth-how-small-teams-win-big",
  },
  {
    title: "What Is Fake AI? (And How to Spot It)",
    image: "/images/blog/what-is-fake-ai-and-how-to-spot-it.png",
    slug: "what-is-fake-ai-and-how-to-spot-it",
  },
  {
    title: "Why Most AI Fails (And How to Make Sure Yours Doesn’t)",
    image: "/images/blog/why-most-ai-fails-and-how-to-make-sure-yours-doesnt.png",
    slug: "why-most-ai-fails-and-how-to-make-sure-yours-doesnt",
  },
  {
    title: "How to Stand Out in a Crowded Market",
    image: "/images/blog/how-to-stand-out-in-a-crowded-market.png",
    slug: "how-to-stand-out-in-a-crowded-market",
  },
  {
    title: "Week to Minutes. How AI Fixes the Broken Market Research Process",
    image: "/images/blog/week-to-minutes-how-ai-fixes-the-broken-market-research-process.png",
    slug: "week-to-minutes-how-ai-fixes-the-broken-market-research-process",
  },
  {
    title: "5 Automations That Move the Needle For Operations",
    image: "/images/blog/5-automations-that-move-the-needle-for-operations.png",
    slug: "5-automations-that-move-the-needle-for-operations",
  },
  {
    title: "Automating AI Workflows with n8n: A Real-World Example for B2B Sales Enablement",
    image: "/images/blog/automating-ai-workflows-with-n8n-a-real-world-example-for-b2b-sales-enablement.png",
    slug: "automating-ai-workflows-with-n8n-a-real-world-example-for-b2b-sales-enablement",
  },
  {
    title: "How to Build Durable Advantage in the Age of AI",
    image: "/images/blog/how-to-build-durable-advantage-in-the-age-of-ai.png",
    slug: "how-to-build-durable-advantage-in-the-age-of-ai",
  },
  {
    title: "Rethink How Work Gets Done with AI",
    image: "/images/blog/rethink-how-work-gets-done-with-ai.png",
    slug: "rethink-how-work-gets-done-with-ai",
  },
  {
    title: "How to Build a Modern Sales Channel Program",
    image: "/images/blog/how-to-build-a-modern-sales-channel-program.png",
    slug: "how-to-build-a-modern-sales-channel-program",
  },
  {
    title: "Top Challenges Vexing CROs Today",
    image: "/images/blog/top-challenges-vexing-cros-today.png",
    slug: "top-challenges-vexing-cros-today",
  },
  {
    title: "Want to appear in LLM results? Follow these 5 Steps.",
    image: "/images/blog/want-to-appear-in-llm-results-follow-these-5-steps.png",
    slug: "want-to-appear-in-llm-results-follow-these-5-steps",
  },
  {
    title: "I'm a CRO. These are my Top ChatGPT use cases",
    image: "/images/blog/im-a-cro-these-are-my-top-chatgpt-use-cases.png",
    slug: "im-a-cro-these-are-my-top-chatgpt-use-cases",
  },
  {
    title: "Gamechanger: AI Project Consultant for SMBs",
    image: "/images/blog/gamechanger-ai-project-consultant-for-smbs.png",
    slug: "gamechanger-ai-project-consultant-for-smbs",
  },
  {
    title: "Sales enablement is dead. It's buyer enablement now.",
    image: "/images/blog/sales-enablement-is-dead-its-buyer-enablement-now.png",
    slug: "sales-enablement-is-dead-its-buyer-enablement-now",
  },
  {
    title: "The Modern Sales Playbook, 2025 Edition",
    image: "/images/blog/the-modern-sales-playbook-2025-edition.png",
    slug: "the-modern-sales-playbook-2025-edition",
  },
  {
    title: "How to Create Urgency in Software Sales",
    image: "/images/blog/how-to-create-urgency-in-software-sales.png",
    slug: "how-to-create-urgency-in-software-sales",
  },
  {
    title: "Software Sales Efficiency Blueprint, Part 3",
    image: "/images/blog/software-sales-efficiency-blueprint-part-3.png",
    slug: "software-sales-efficiency-blueprint-part-3",
  },
  {
    title: "Software Sales Efficiency Blueprint, Part 2",
    image: "/images/blog/software-sales-efficiency-blueprint-part-2.png",
    slug: "software-sales-efficiency-blueprint-part-2",
  },
  {
    title: "Software Sales Efficiency Blueprint, Part 1",
    image: "/images/blog/software-sales-efficiency-blueprint-part-1.png",
    slug: "software-sales-efficiency-blueprint-part-1",
  },
  {
    title: "Mastering Sales Pipeline Management",
    image: "/images/blog/mastering-sales-pipeline-management-for-steady-growth.png",
    slug: "mastering-sales-pipeline-management-for-steady-growth",
  },
  {
    title: "Stopping \"Happy Ears\": A Guide for Sales Leaders",
    image: "/images/blog/stopping-happy-ears-a-guide-for-sales-leaders.png",
    slug: "stopping-happy-ears-a-guide-for-sales-leaders",
  },
  {
    title: "19 GenAI Use Cases for Customer Success Teams",
    image: "/images/blog/19-genai-use-cases-for-customer-success-teams.png",
    slug: "19-genai-use-cases-for-customer-success-teams",
  },
  {
    title: "20 Gen AI Use Cases for Sales Teams",
    image: "/images/blog/20-gen-ai-use-cases-for-sales-teams.png",
    slug: "20-gen-ai-use-cases-for-sales-teams",
  },
  {
    title: "AI Adoption—Which Company Are You?",
    image: "/images/blog/ai-adoption--which-company-are-you.png",
    slug: "ai-adoption--which-company-are-you",
  },
  {
    title: "Fight Complexity. Why Simplicity Matters.",
    image: "/images/blog/fight-complexity-why-simplicity-matters.png",
    slug: "fight-complexity-why-simplicity-matters",
  },
  {
    title: "6 AI Critical Success Factors For Revenue Leaders",
    image: "/images/blog/6-ai-critical-success-factors-for-revenue-leaders.png",
    slug: "6-ai-critical-success-factors-for-revenue-leaders",
  },
  {
    title: "How Sales and Marketing Teams Become AI-Native",
    image: "/images/blog/how-sales-and-marketing-teams-become-ai-native.png",
    slug: "how-sales-and-marketing-teams-become-ai-native",
  },
  {
    title: "AI Automation Fuels Profitable Growth",
    image: "/images/blog/ai-automation-fuels-profitable-growth-in-2025.png",
    slug: "ai-automation-fuels-profitable-growth-in-2025",
  },
  {
    title: "AI Ops Lab: Streamline Revenue Operations",
    image: "/images/blog/ai-ops-lab-streamline-revenue-operations.png",
    slug: "ai-ops-lab-streamline-revenue-operations",
  },
  {
    title: "Boost Upselling and Cross-Selling with Data",
    image: "/images/blog/optimizing-upselling-and-cross-selling-with-data-analytics.png",
    slug: "optimizing-upselling-and-cross-selling-with-data-analytics",
  },
  {
    title: "Succeed with One Go-to-Market Message",
    image: "/images/blog/achieve-more-with-one-unifying-go-to-market-message.png",
    slug: "achieve-more-with-one-unifying-go-to-market-message",
  },
  {
    title: "How Sales VPs Can Use AI to Bootstrap Growth",
    image: "/images/blog/how-sales-vps-can-use-ai-to-bootstrap-revenue-growth.png",
    slug: "how-sales-vps-can-use-ai-to-bootstrap-revenue-growth",
  },
  {
    title: "How to Build A Software Renewal Program",
    image: "/images/blog/how-to-build-a-software-renewal-program.png",
    slug: "how-to-build-a-software-renewal-program",
  },
  {
    title: "Referrals Boost Sales Faster and More Reliably",
    image: "/images/blog/harnessing-the-power-of-referrals-the-quickest-most-reliable-way-to-grow-sales.png",
    slug: "harnessing-the-power-of-referrals-the-quickest-most-reliable-way-to-grow-sales",
  },
  {
    title: "Turning Setbacks Into Sales Success",
    image: "/images/blog/failure-is-a-blessing-how-sales-setbacks-can-fuel-insight-and-learning.png",
    slug: "failure-is-a-blessing-how-sales-setbacks-can-fuel-insight-and-learning",
  },
  {
    title: "The Psychology of Color in Sales Presentations",
    image: "/images/blog/the-psychology-of-color-in-sales-presentations.png",
    slug: "the-psychology-of-color-in-sales-presentations",
  },
  {
    title: "Strategies to Overcome Sales Stagnation",
    image: "/images/blog/how-to-get-sales-unstuck-strategies-for-overcoming-stagnation-and-driving-growth.png",
    slug: "how-to-get-sales-unstuck-strategies-for-overcoming-stagnation-and-driving-growth",
  },
  {
    title: "The Art of Storytelling in Sales",
    image: "/images/blog/the-art-of-storytelling-in-sales.png",
    slug: "the-art-of-storytelling-in-sales",
  },
  {
    title: "Innovative New Training Methods for Sales Team",
    image: "/images/blog/innovative-new-training-methods-for-sales-team.png",
    slug: "innovative-new-training-methods-for-sales-team",
  },
  {
    title: "Sales Strategies for Economic Downturns",
    image: "/images/blog/sales-strategies-for-staying-resilient-during-economic-downturns.png",
    slug: "sales-strategies-for-staying-resilient-during-economic-downturns",
  },
  {
    title: "Customer Journey Mapping for SAAS Firms",
    image: "/images/blog/mapping-the-customer-journey-how-b2b-saas-companies-can-identify-and-fix-pain-points.png",
    slug: "mapping-the-customer-journey-how-b2b-saas-companies-can-identify-and-fix-pain-points",
  },
  {
    title: "Sales Enablement: No Longer Basic Support",
    image: "/images/blog/the-evolution-of-revenue-enablement-beyond-traditional-sales-support.png",
    slug: "the-evolution-of-revenue-enablement-beyond-traditional-sales-support",
  },
  {
    title: "Breaking Down Sales and Marketing Silos",
    image: "/images/blog/breaking-down-silos-how-to-build-a-cohesive-sales-and-marketing-team.png",
    slug: "breaking-down-silos-how-to-build-a-cohesive-sales-and-marketing-team",
  },
  {
    title: "Gamification Strategies to Motivate Sales",
    image: "/images/blog/gamification-in-sales-leadership-innovative-ways-to-boost-motivation.png",
    slug: "gamification-in-sales-leadership-innovative-ways-to-boost-motivation",
  },
  {
    title: "Psychology of Building a Strong Sales Culture",
    image: "/images/blog/the-psychology-behind-building-a-strong-sales-culture.png",
    slug: "the-psychology-behind-building-a-strong-sales-culture",
  },
  {
    title: "Startup Growth Using Fractional Leadership",
    image: "/images/blog/unlock-early-stage-growth-for-startups-with-fractional-sales-leadership.png",
    slug: "unlock-early-stage-growth-for-startups-with-fractional-sales-leadership",
  },
  {
    title: "Sales Momentum in Times of Crisis",
    image: "/images/blog/how-sales-leaders-can-navigate-uncertainty-and-maintain-momentum-in-times-of-crisis.png",
    slug: "how-sales-leaders-can-navigate-uncertainty-and-maintain-momentum-in-times-of-crisis",
  },
  {
    title: "Building an AI-Powered Lead Gen Engine",
    image: "/images/blog/how-to-create-an-ai-assisted-lead-generation-engine.png",
    slug: "how-to-create-an-ai-assisted-lead-generation-engine",
  },
  {
    title: "Fractional Sales Leaders Boost Revenue Growth",
    image: "/images/blog/how-fractional-sales-leaders-can-drive-your-companys-revenue-growth.png",
    slug: "how-fractional-sales-leaders-can-drive-your-companys-revenue-growth",
  },
  {
    title: "Top Sales Enablement Practices",
    image: "/images/blog/sales-enablement-best-practices-of-top-performing-companies.png",
    slug: "sales-enablement-best-practices-of-top-performing-companies",
  },
  {
    title: "Automate Everything Between Sales Meetings",
    image: "/images/blog/automate-everything-between-sales-meetings.png",
    slug: "automate-everything-between-sales-meetings",
  },
  {
    title: "How Content Marketing Drives Sales Growth",
    image: "/images/blog/how-content-marketing-drives-sales-growth.png",
    slug: "how-content-marketing-drives-sales-growth",
  },
  {
    title: "5 Traits of Highly Effective Sales Leaders",
    image: "/images/blog/the-top-5-qualities-of-highly-effective-sales-leaders.png",
    slug: "the-top-5-qualities-of-highly-effective-sales-leaders",
  },
  {
    title: "10 Ways to Motivate Your Sales Team",
    image: "/images/blog/10-strategies-for-motivating-your-sales-team.png",
    slug: "10-strategies-for-motivating-your-sales-team",
  },
  {
    title: "B2B Marketing Tactics to Boost Sales Funnels",
    image: "/images/blog/b2b-growth-marketing-tactics.png",
    slug: "b2b-growth-marketing-tactics",
  },
  {
    title: "Science of the deal review",
    image: "/images/blog/science-of-the-deal-review.png",
    slug: "science-of-the-deal-review",
  },
  {
    title: "Sales Strategies for Working Smarter",
    image: "/images/blog/how-modern-sales-pros-work-smarter-not-harder.png",
    slug: "how-modern-sales-pros-work-smarter-not-harder",
  },
  {
    title: "Account Executive Best Practices",
    image: "/images/blog/the-best-practices-that-make-account-executives-great.png",
    slug: "the-best-practices-that-make-account-executives-great",
  },
  {
    title: "Calculating the ROI of Sales Consultants",
    image: "/images/blog/calculating-the-roi-of-sales-consultants.png",
    slug: "calculating-the-roi-of-sales-consultants",
  },
  {
    title: "Account Segmentation Drives Success",
    image: "/images/blog/account-segmentation.png",
    slug: "account-segmentation",
  },
  {
    title: "The New Playbook for Modern B2B GTM",
    image: "/images/blog/the-new-gtm-playbook.png",
    slug: "the-new-gtm-playbook",
  },
  {
    title: "Creative destruction hits the SDR role",
    image: "/images/blog/creative-destruction-hits-the-sdr-role.png",
    slug: "creative-destruction-hits-the-sdr-role",
  },
  {
    title: "What is Sales Enablement?",
    image: "/images/blog/what-is-sales-enablement.png",
    slug: "what-is-sales-enablement",
  },
  {
    title: "How AI Helps CROs Drive Revenue Growth",
    image: "/images/blog/how-cros-and-sales-vps-use-ai-for-revenue-growth.png",
    slug: "how-cros-and-sales-vps-use-ai-for-revenue-growth",
  },
  {
    title: "Ready to hire your first Sales VP…Or not quite?",
    image: "/images/blog/ready-to-hire-your-first-sales-vp-or-not-quite.png",
    slug: "ready-to-hire-your-first-sales-vp-or-not-quite",
  },
  {
    title: "6 Qualities Make Sales Managers Great",
    image: "/images/blog/6-qualities-make-sales-managers-great.png",
    slug: "6-qualities-make-sales-managers-great",
  },
  {
    title: "The 10 Best AI Hacks for Sales Ops Leaders",
    image: "/images/blog/the-10-best-ai-hacks-for-sales-ops-leaders.png",
    slug: "the-10-best-ai-hacks-for-sales-ops-leaders",
  },
  {
    title: "Building A Champion Within Your Prospects’ Organization",
    image: "/images/blog/building-a-champion-within-your-prospects-organization.png",
    slug: "building-a-champion-within-your-prospects-organization",
  },
  {
    title: "Fractional Sales Leadership for SMBs",
    image: "/images/blog/fractional-sales-leadership-is-here.png",
    slug: "fractional-sales-leadership-is-here",
  },
  {
    title: "AI is Remaking Revenue Enablement",
    image: "/images/blog/ai-is-remaking-revenue-enablement.png",
    slug: "ai-is-remaking-revenue-enablement",
  },
  {
    title: "AI Gives Marketers a Competitive Edge",
    image: "/images/blog/how-ai-can-give-marketers-a-critical-boost.png",
    slug: "how-ai-can-give-marketers-a-critical-boost",
  },
  {
    title: "AI Accelerates Efficiency in Customer Success",
    image: "/images/blog/how-ai-is-accelerating-the-push-for-efficiency-in-customer-success.png",
    slug: "how-ai-is-accelerating-the-push-for-efficiency-in-customer-success",
  },
  {
    title: "AI predicts the Top 10 AI trends in 2024",
    image: "/images/blog/ai-predicts-the-top-10-ai-trends-in-2024.png",
    slug: "ai-predicts-the-top-10-ai-trends-in-2024",
  },
  {
    title: "Design Thinking: Crucial for AI Solution Concepts",
    image: "/images/blog/why-you-need-design-thinking-to-develop-ai-solutions.png",
    slug: "why-you-need-design-thinking-to-develop-ai-solutions",
  },
  {
    title: "Starting the AI Journey: Overcoming Blockers",
    image: "/images/blog/how-to-start-the-ai-journey-a-common-dilemma.png",
    slug: "how-to-start-the-ai-journey-a-common-dilemma",
  },
  {
    title: "Recognize SaaS Sprawl",
    image: "/images/blog/recognize-saas-sprawl.png",
    slug: "recognize-saas-sprawl",
  },
  {
    title: "Avoid Common HubSpot Missteps",
    image: "/images/blog/avoid-common-hubspot-missteps.png",
    slug: "avoid-common-hubspot-missteps",
  },
  {
    title: "Ignite AI Workshop",
    image: "/images/blog/ignite-ai-workshop.png",
    slug: "ignite-ai-workshop",
  },
  {
    title: "How-To Guide: Gauging Personalization",
    image: "/images/blog/impact-personalization-marketing.png",
    slug: "impact-personalization-marketing",
  },
  {
    title: "Most B2B content falls short … and sales suffer",
    image: "/images/blog/most-b2b-content-falls-short-and-sales-suffer.png",
    slug: "most-b2b-content-falls-short-and-sales-suffer",
  },
  {
    title: "The Ultimate Guide to Growing Channel Sales",
    image: "/images/blog/the-ultimate-guide-to-growing-channel-sales.png",
    slug: "the-ultimate-guide-to-growing-channel-sales",
  },
  {
    title: "The Ultimate Guide to Social Media Marketing",
    image: "/images/blog/the-ultimate-guide-to-social-media-marketing.png",
    slug: "the-ultimate-guide-to-social-media-marketing",
  },
  {
    title: "The Ultimate Guide to Digital Marketing",
    image: "/images/blog/the-ultimate-guide-to-digital-marketing.png",
    slug: "the-ultimate-guide-to-digital-marketing",
  },
  {
    title: "The Ultimate Guide to Product-Led Growth",
    image: "/images/blog/the-ultimate-guide-to-product-led-growth.png",
    slug: "the-ultimate-guide-to-product-led-growth",
  },
  {
    title: "Get SAAS Application Sprawl Under Control",
    image: "/images/blog/saas-application-sprawl.png",
    slug: "saas-application-sprawl",
  },
  {
    title: "Make Application Data a Competitive Edge",
    image: "/images/blog/application-data.png",
    slug: "application-data",
  },
  {
    title: "A Technical Program Management Guide",
    image: "/images/blog/master-technical-program-management.png",
    slug: "master-technical-program-management",
  },
  {
    title: "How to Build a Sales Channel Program",
    image: "/images/blog/a-step-by-step-guide-to-building-a-sales-channel-program.png",
    slug: "a-step-by-step-guide-to-building-a-sales-channel-program",
  },
  {
    title: "5 Hasty Research Tips",
    image: "/images/blog/voice-of-the-customer.png",
    slug: "voice-of-the-customer",
  },
  {
    title: "RevOps: We Answer 10 FAQs",
    image: "/images/blog/revenue-operations-faq.png",
    slug: "revenue-operations-faq",
  },
  {
    title: "The Modern B2B Ecommerce Experience",
    image: "/images/blog/creating-the-modern-b2b-ecommerce-experience.png",
    slug: "creating-the-modern-b2b-ecommerce-experience",
  },
  {
    title: "Every Reason to Love The Price Waterfall",
    image: "/images/blog/price-waterfall.png",
    slug: "price-waterfall",
  },
  {
    title: "Using Emotion to Make Great Presentations",
    image: "/images/blog/using-emotion-to-make-sales-presentations-great.png",
    slug: "using-emotion-to-make-sales-presentations-great",
  },
  {
    title: "Building An Indirect Sales Channel",
    image: "/images/blog/sales-channel.png",
    slug: "sales-channel",
  },
  {
    title: "The Risk of Doing Nothing Is Bigger Than You Think",
    image: "/images/blog/the-risk-of-doing-nothing-is-bigger-than-you-think.jpeg",
    slug: "the-risk-of-doing-nothing-is-bigger-than-you-think",
  },
  {
    title: "What’s Next for the Outbound SDR Role?",
    image: "/images/blog/future-of-sales-prospecting.png",
    slug: "future-of-sales-prospecting",
  },
];

export default function ContentPage() {
  const ref = useRef(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24">
        <div ref={ref} className="mx-auto max-w-[1200px] px-6 lg:px-8">

          {/* Featured post title — centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="pb-10"
          >
            <a href={`/insights/${featuredPost.slug}`} className="group">
              <h1 className="text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-[var(--dark-graphite)] transition-colors duration-200 group-hover:text-[var(--brand-red)]">
                {featuredPost.title}
              </h1>
            </a>
          </motion.div>

          {/* Two-column: Featured image left + sidebar right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-20 grid items-end gap-10 lg:grid-cols-[1fr_380px]"
          >
            {/* Left — featured post image */}
            <a href={`/insights/${featuredPost.slug}`} className="group block overflow-hidden rounded-xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            {/* Right — Featured Posts sidebar */}
            <div className="rounded-2xl bg-[var(--off-white)] p-8">
              <h3 className="border-b border-[var(--light-gray)] pb-4 text-lg font-bold text-[var(--dark-graphite)]">
                Featured Posts
              </h3>
              <div className="divide-y divide-[var(--light-gray)]">
                {sidebarPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/insights/${post.slug}`}
                    className="block py-4 text-base font-semibold text-[var(--dark-graphite)] transition-colors duration-200 hover:text-[var(--brand-red)]"
                  >
                    {post.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog section */}
          <div ref={blogRef} className="scroll-mt-24 pb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-2xl font-bold text-[var(--dark-graphite)]"
            >
              Blog
            </motion.h2>

            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {currentPosts.map((post, i) => (
                <motion.a
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug text-[var(--dark-graphite)] transition-colors duration-200 group-hover:text-[var(--brand-red)]">
                    {post.title}
                  </h3>
                </motion.a>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-14 flex items-center justify-center gap-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[var(--dark-graphite)] transition-colors hover:bg-[var(--off-white)] disabled:pointer-events-none disabled:opacity-30"
                aria-label="Previous page"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    page === currentPage
                      ? "bg-[var(--dark-graphite)] text-white"
                      : "text-[var(--dark-graphite)] hover:bg-[var(--off-white)]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-[var(--dark-graphite)] transition-colors hover:bg-[var(--off-white)] disabled:pointer-events-none disabled:opacity-30"
                aria-label="Next page"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
