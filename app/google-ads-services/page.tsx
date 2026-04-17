'use client'

import * as React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

const heroTitle = 'Google Ads Services in Pune That Turn Clicks Into Actual Revenue'

const heroIntro = `Aap Google Ads chala rahe ho… ya try kiya hai?
₹20,000–₹1,00,000 tak spend ho gaya
CPC high hai
Clicks aa rahe hain
But leads? Sales? Almost zero
Aur sabse frustrating part?
Aapko samajh hi nahi aa raha kya galat ho raha hai.
Google Ads ek aisa platform hai jahan:
Har click ka paisa lagta hai
Har mistake ka direct loss hota hai
Yeh Meta Ads jaisa nahi hai jahan awareness build hoti hai.
Yahan banda already search kar raha hota hai — intent high hota hai.
Phir bhi results nahi aa rahe?
Matlab problem ad platform me nahi hai.
Problem strategy me hai.
Aur yahi gap fill karta hai Leadzoro — with Google Ads Services in Pune designed for high-intent lead generation.`

const perspectiveTitle = 'Google Ads — Business Perspective (Not Textbook Theory)'
const perspectiveBlock = `Simple samajh:
Google Ads = Demand capture machine
Log already search kar rahe hain:
“best dentist near me”
“buy 2BHK in Pune”
“CRM software pricing”
Aapka kaam hai unko us moment pe capture karna.`

const typesTitle = 'Types of Google Ads (Practical View):'
const typesBlocks = [
  `Search Ads (Highest Intent)
User search karta hai → aapka ad dikhta hai
Best for:
Leads
Calls
Direct conversions`,
  `Display Ads (Awareness + Retargeting)
Websites pe banner ads
Best for:
Brand recall
Retargeting visitors`,
  `YouTube Ads (Attention + Education)
Video-based ads
Best for:
Product explanation
Funnel warm-up`,
]

const typesClose = `Real game?
In tino ko combine karke funnel banana.`

const failTitle = 'Why Most Businesses Fail With Google Ads (Reality Check)'
const failIntro = `Agar aap already ads chala rahe ho, toh yeh points relate karenge:`

const failBlocks = [
  `High CPC, Low Conversion
₹50–₹200 per click
100 clicks → 2 leads
Reason:
Wrong keywords
Broad targeting
No intent filtering`,
  `Wrong Keyword Strategy
Most campaigns target:
“cheap” keywords
High volume keywords
But ignore:
Buyer intent keywords
Example:
❌ “digital marketing”
✅ “hire digital marketing agency Pune”`,
  `Poor Landing Page Experience
User click karta hai…
Landing page open hota hai…
Slow
Confusing
No clear offer
Result → Bounce`,
  `No Conversion Tracking
Shockingly common.
No proper GA4 setup
No conversion events
No attribution clarity
Matlab:
👉 Aapko pata hi nahi kaunsa keyword sale la raha hai`,
  `“Set & Forget” Campaigns
Campaign run kar diya → bas
No:
Bid optimization
Search term analysis
Negative keywords`,
  `Agency Reports Without Business Impact
Reports me hota hai:
Impressions
Clicks
CTR
But missing:
Cost per lead
Cost per sale
Revenue`,
]

const failClose = `Agar aapko lag raha hai “haan ye sab mere saath ho raha hai”
then you don’t need more budget.
You need a performance-driven Google Ads system.`

const approachTitle = 'Leadzoro’s Approach — Built for High-Intent Conversions'
const approachIntro = `Most agencies run ads based on:
👉 Keywords
👉 Budget
We run ads based on:
👉 Intent + Funnel + Data`

const approachBlocks = [
  `High-Intent Keyword Strategy (Core Foundation)
We don’t chase volume.
We chase buyers.
We identify:
Commercial intent keywords
Transactional queries
Long-tail high-converting terms
Example:
“buy”, “hire”, “pricing”, “near me”`,
  `Funnel-Based Google Ads Strategy
Single campaign ≠ system
We build:
Search (capture intent)
Display (retargeting)
YouTube (awareness + education)
User journey:
Search → Visit → Leave → Retarget → Convert`,
  `Ad Copy That Actually Gets Clicks (CTR Focus)
Google Ads me:
Ad copy = entry gate
We test:
Emotional triggers
Problem-based headlines
Offer-based CTAs
Goal:
👉 Higher CTR → Lower CPC → Better Quality Score`,
  `Landing Page Optimization (CRO Mindset)
Traffic lana easy hai
Conversion karwana skill hai
We optimize:
Headline clarity
Offer positioning
CTA placement
Trust elements (proof, testimonials)`,
  `Advanced Tracking Setup (No Guesswork)
We implement:
GA4
Google Tag Manager
Conversion tracking (form, call, purchase)
Now you know:
👉 Kaunsa keyword paisa la raha hai
👉 Kaunsa budget waste kar raha hai`,
  `Continuous Optimization & Scaling
Google Ads = daily game
We optimize:
Bids
Keywords
Search terms
Negative keywords
And scale only what works.`,
]

const processTitle = 'Step-by-Step Google Ads Process (Execution Breakdown)'
const processIntro = `Yeh exact process hum follow karte hain:`
const processSteps = [
  `Step 1: Business & Offer Understanding
Product/service clarity
Ticket size
Break-even cost
Without this → ads fail`,
  `Step 2: Keyword Research (Buyer Intent Focus)
We find:
High intent keywords
Competitor keywords
Long-tail opportunities
Plus:
Negative keyword list`,
  `Step 3: Campaign Structure Setup
Search campaigns (core leads)
Display campaigns (retargeting)
YouTube campaigns (optional scaling)
Structure matters.
Galat structure = wasted budget`,
  `Step 4: Ad Copywriting & Extensions
We create:
Multiple ad variations
Strong CTAs
Callouts, sitelinks
Goal:
👉 Improve CTR + Quality Score`,
  `Step 5: Landing Page Optimization
We align:
Keyword → Ad → Landing page
Message mismatch = conversion drop`,
  `Step 6: Tracking & Analytics Setup
GA4 integration
Conversion tracking
Event tracking
Now every click becomes data.`,
  `Step 7: Launch & Testing Phase
First 7–10 days:
Keyword testing
Ad testing
Bid adjustments
Goal: Find winners`,
  `Step 8: Optimization Phase
We analyze:
Search terms
CPL
Conversion rate
Then:
Pause waste
Scale winners`,
  `Step 9: Scaling Strategy
Once profitable:
Increase budget
Expand keywords
Add remarketing`,
]

const chooseTitle = 'Why Businesses Choose Leadzoro for PPC Services Pune'
const chooseBlock = `Because they’re done with:
Random keyword targeting
High CPC, low ROI
Confusing reports
They want:
Clear strategy
Measurable ROI
Scalable growth
And that’s exactly what we deliver with our Google Ads Services in Pune, Google Ads Agency Pune expertise, and performance-driven PPC Services Pune approach.`

const caseTitle = '📈 Real Case Study — Turning Expensive Clicks into Profitable Leads'
const caseIntro = `Let’s get straight to what actually matters:
Numbers. ROI. Business impact.
We worked with a service-based business in Pune (home services niche).`

const caseBefore = `Before Leadzoro (Typical Scenario):
Monthly Ad Spend: ₹1,20,000
Avg CPC: ₹85
Cost Per Lead (CPL): ₹650
Leads/month: ~180
Conversion Rate (lead → customer): ~4%
ROAS: Unclear (no proper tracking)
They were already working with a so-called Google Ads Agency Pune, but campaigns were:
Broad keyword targeting
No negative keywords
Weak landing page
No proper conversion tracking
Result?
Money was being spent, but business wasn’t growing.`

const caseChanged = `What We Changed (Execution Level):

Keyword Strategy Overhaul
Removed 60% irrelevant keywords
Added high-intent terms like:
“book home service Pune”
“hire [service] near me”
Built strong negative keyword list

Campaign Restructuring
Separated campaigns by intent
Tight ad group segmentation
Focused on Search first (lead capture)

Ad Copy Optimization
Added urgency-based CTAs
Highlighted pricing + trust signals
Improved CTR significantly

Landing Page Fix
Simplified design
Clear CTA above fold
Added WhatsApp click option

Tracking Setup
GA4 + conversion tracking implemented
Call tracking enabled
Now we had real data.`

const caseResults = `Results (Within 60 Days):
CPC reduced from ₹85 → ₹48 (43% drop)
CPL reduced from ₹650 → ₹220 (66% reduction)
Leads increased from 180 → 420/month
Conversion rate improved from 4% → 12%
ROAS improved to ~4.2x`

const caseMeaning = `What This Means for You:
Same budget → almost 2.3x more leads
Better targeting → higher quality customers
Data clarity → confident scaling
Yeh hota hai difference between “ads chal rahe hain” vs “ads profit de rahe hain”`

const benefitsTitle = '🚀 Benefits You Can Expect from Our Google Ads Services'
const benefitsIntro = `When campaigns are structured with intent + data, outcomes change completely.`

const benefitsBlocks = [
  `High-Quality, Ready-to-Buy Leads
Google Ads ka biggest advantage:
👉 User already searching
We ensure:
Right keywords
Right intent
Right timing`,
  `Lower Cost Per Acquisition (CPA)
Not by reducing budget —
By improving efficiency:
Better Quality Score
Higher CTR
Smart bidding`,
  `Predictable Lead Flow
No dependency on:
Viral content
Organic reach
You get:
👉 Consistent daily leads`,
  `Scalable Campaign System
Once profitable:
Budget increase
Keyword expansion
Retargeting
Growth becomes predictable.`,
  `Full Transparency (No Guesswork)
You’ll clearly see:
Kitna spend
Kitne leads
Kitni revenue
Everything backed by tracking.`,
  `Faster Results Compared to SEO
SEO takes time.
Google Ads gives:
👉 Immediate visibility
👉 Faster testing
👉 Quick validation`,
]

const bestForTitle = '🎯 Who This Service Is Best For'
const bestForIntro = `Agar aapka business inme se kisi category me aata hai, Google Ads is a goldmine.`

const bestForBlocks = [
  `Local Businesses (Pune Focus)
Clinics
Salons
Gyms
Repair services
People search:
👉 “near me”
Perfect fit for Google Ads Services in Pune`,
  `Real Estate Businesses
Builders
Property dealers
High-ticket leads require:
👉 High-intent targeting`,
  `SaaS & B2B Companies
CRM tools
Software services
Goal:
👉 Demo bookings
👉 Qualified leads`,
  `E-commerce Brands
Product-based businesses
Use Google Ads for:
👉 Purchase intent targeting
👉 Shopping ads`,
  `Coaches & Consultants
Business coaches
Trainers
Need:
👉 Webinar / consultation leads`,
  `Startups & Growth-Stage Businesses
Fast testing
Market validation
Google Ads = fastest feedback loop`,
]

const faqTitle = '❓ Frequently Asked Questions (FAQs)'
const faqBlocks = [
  `What budget is required to start Google Ads?
Depends on your niche.
Local services: ₹20k–₹50k/month
Competitive niches: ₹50k–₹2L/month
Important:
👉 Budget decides speed, not success`,
  `How soon will I see results?
Initial clicks/leads: 3–5 days
Optimization phase: 2–3 weeks
Stable performance: 30–45 days
Google Ads is fast — but optimization takes time.`,
  `What’s the difference between SEO and Google Ads?
SEO
Google Ads
Long-term
Immediate results
Organic traffic
Paid traffic
Slow scaling
Fast scaling

Best strategy:
👉 Use both together`,
  `Is Google Ads expensive?
It depends on how you run it.
Bad setup = expensive
Optimized campaigns = profitable
We focus on:
👉 ROI, not just cost`,
  `Do you create landing pages as well?
Yes.
We either:
Optimize your existing page
Or suggest high-converting structure
Because ads without good landing page = wasted money`,
  `How do you track conversions?
We use:
GA4
Google Tag Manager
Conversion tracking (forms, calls, purchases)
So every rupee is measurable.`,
  `Can you audit my existing campaigns?
Yes.
We analyze:
Keywords
Ad copy
Structure
Tracking
Then identify exact gaps.`,
  `Do you work only in Pune?
No.
We work with:
Pune-based businesses
Clients across India
Whether you need PPC Services Pune or Pay Per Click Services India, strategy remains performance-driven.`,
]

const ctaTitle = '🔥 Ready to Turn Google Ads Into a Revenue Machine?'
const ctaBlock = `Agar aap:
High CPC se frustrated ho
Leads nahi aa rahe
Ya ROI clear nahi hai
Then continuing same strategy won’t fix it.

🚀 Work With Leadzoro — Google Ads Experts
We’ve:
Managed ₹5L–₹15L/month budgets
Generated 1000+ leads/month
Reduced CPL by up to 60%

👉 Your Next Step:
Book a Free Strategy Call
Get your campaigns audited
Identify exact ROI gaps

🎯 Goal:
👉 30 days me clear improvement
👉 60 days me scalable system

No random experiments.
No guesswork.
Only performance-driven Google Ads.

Leadzoro — Where Clicks Turn Into Customers`

export default function GoogleAdsServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">{heroTitle}</h1>
            <p className="mt-6 whitespace-pre-line prose-block">{heroIntro}</p>
            <div className="mt-8">
              <Button className="text-base md:text-lg" href="/contact-us">
                Book a Free Strategy Call
              </Button>
                </div>
          </ScrollReveal>
              </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{perspectiveTitle}</h2>
            <Card className="mt-6" variant="highlight">
              <p className="whitespace-pre-line prose-block">{perspectiveBlock}</p>
            </Card>
          </ScrollReveal>
                          </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{typesTitle}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {typesBlocks.map((b) => (
                <Card key={b}>
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
                  ))}
                </div>
            <p className="mt-6 whitespace-pre-line prose-block">{typesClose}</p>
          </ScrollReveal>
                </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{failTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{failIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {failBlocks.map((b) => (
                <Card key={b} variant="highlight">
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
              ))}
            </div>
            <Card className="mt-6" variant="highlight">
              <p className="whitespace-pre-line prose-block">{failClose}</p>
            </Card>
          </ScrollReveal>
              </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{approachTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{approachIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {approachBlocks.map((b) => (
                <Card key={b}>
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
              ))}
                        </div>
          </ScrollReveal>
                      </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{processTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{processIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {processSteps.map((s) => (
                <Card key={s}>
                  <p className="whitespace-pre-line prose-block">{s}</p>
                </Card>
                  ))}
                </div>
          </ScrollReveal>
                </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{chooseTitle}</h2>
            <Card className="mt-6" variant="highlight">
              <p className="whitespace-pre-line prose-block">{chooseBlock}</p>
            </Card>
          </ScrollReveal>
            </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{caseTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{caseIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <p className="whitespace-pre-line prose-block">{caseBefore}</p>
              </Card>
              <Card>
                <p className="whitespace-pre-line prose-block">{caseResults}</p>
              </Card>
                </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card variant="highlight">
                <p className="whitespace-pre-line prose-block">{caseChanged}</p>
              </Card>
              <Card variant="highlight">
                <p className="whitespace-pre-line prose-block">{caseMeaning}</p>
              </Card>
              </div>
          </ScrollReveal>
                            </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{benefitsTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{benefitsIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {benefitsBlocks.map((b) => (
                <Card key={b}>
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
              ))}
                          </div>
          </ScrollReveal>
                        </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{bestForTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{bestForIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {bestForBlocks.map((b) => (
                <Card key={b}>
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
                  ))}
                </div>
          </ScrollReveal>
              </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{faqTitle}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {faqBlocks.map((b) => (
                <Card key={b}>
                  <p className="whitespace-pre-line prose-block">{b}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
                </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl text-center">
            <h2 className="text-3xl font-semibold text-gray-900">{ctaTitle}</h2>
            <Card className="mt-6 text-left">
              <p className="whitespace-pre-line prose-block">{ctaBlock}</p>
            </Card>
            <div className="mt-8 flex justify-center">
              <Button className="text-base md:text-lg" href="/contact-us">
                Book a Free Strategy Call
              </Button>
                      </div>
          </ScrollReveal>
                          </div>
      </Section>

      <Footer />
                          </div>
  )
}
