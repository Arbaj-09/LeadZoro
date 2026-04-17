'use client'

import * as React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ScrollReveal from '../components/ui/ScrollReveal'

const heroTitle = 'Meta Ads Services in Pune That Actually Generate Leads — Not Just Clicks'

const heroIntro = `You’ve probably already tried running ads.
Boosted a few posts.
Spent ₹10,000… maybe ₹50,000.
Got likes, comments… but no real business.
Aur phir laga — “Ads kaam hi nahi karte.”`

const truthBlock = `Truth?
Ads kaam karte hain.
Bas strategy galat hoti hai.
Most businesses don’t fail because Meta Ads don’t work.
They fail because:`

const truthBullets = ['Wrong targeting', 'Weak creatives', 'No funnel strategy', 'No follow-up system']

const truthResult = `Result? Budget burn. Zero ROI.
If you're serious about leads, sales, and predictable growth — this is exactly where Leadzoro’s Meta Ads Services in Pune step in.`

const whatExactlyTitle = 'What Exactly Are Meta Ads Services — And Why They Matter for Your Business'

const whatExactlyPara1 = `Meta Ads = Facebook + Instagram Ads ecosystem
But real performance marketing goes way deeper than just running ads.`

const whatExactlyPara2 = `At Leadzoro, Meta Ads means:
Data-backed targeting (not guesswork)
High-converting creatives (not random designs)
Funnel-based strategy (not single ad campaigns)
Conversion tracking (actual ROI measurement)
We don’t run ads.
We build a system that turns attention into revenue.`

const whatYouGetTitle = 'What You Actually Get:'
const whatYouGetBullets = [
  'Facebook Ads strategy tailored to your business',
  'Instagram Ads campaigns designed for engagement + conversions',
  'Lead generation funnels (landing page / WhatsApp / forms)',
  'Retargeting campaigns (most agencies ignore this)',
  'Full tracking setup (Pixel + Conversion API)',
]

const whatYouGetPara = `This is why businesses searching for a Facebook Ads Agency Pune or Instagram Ads Services India end up choosing performance-focused teams — not just “ad runners”.`

const painTitle = 'Why Most Businesses Fail with Meta Ads (Real Pain Points)'
const painIntro = `Let’s break this down honestly.`

const painPoints = [
  `“Leads aa rahe hain… but quality bekaar hai”
Cheap leads ≠ good leads
Wrong audience targeting = time waste + low conversions`,
  `“Ad spend ho raha hai but ROI clear nahi hai”
No proper tracking = no idea what’s working
Most agencies don’t even set up events correctly`,
  `“Creative bana diya… but performance nahi aa raha”
Meta is a creative-first platform now
Average creatives = ignored ads`,
  `“Ek baar campaign chala, phir band ho gaya”
No scaling strategy
No optimization cycle
No testing`,
  `“Agency report bhejti hai… but business grow nahi hota”
Vanity metrics:
Reach
Impressions
Clicks
But no focus on:
Cost per lead
Cost per sale
ROI`,
  `“WhatsApp leads aate hain… but convert nahi hote”
No funnel.
No nurturing.
No follow-up automation.`,
]

const painClose = `Agar aapko inme se 2–3 problems bhi relate ho rahi hain,
then your ads don’t need more budget —
they need a better system.`

const approachTitle = 'Leadzoro’s Approach — Not Just Ads, A Complete Growth Engine'
const approachIntro = `Most agencies run ads.
We build conversion ecosystems.`

const approachBlocks = [
  `Audience Intelligence First (Not Random Targeting)
Before running a single ad, we deep dive into:
Your ideal customer profile
Buying intent signals
Competitor ad analysis
Market positioning
Because agar targeting galat hai, toh best creative bhi fail ho jayega.`,
  `Funnel-Based Strategy (This Changes Everything)
We don’t run single ads. We design:
Awareness Campaigns (cold audience)
Consideration Campaigns (engagement + education)
Conversion Campaigns (lead / sale)
Retargeting Campaigns (high intent users)
This is where most businesses lose money — they skip the funnel.`,
  `Creative Strategy = Performance Driver
Meta ads ka game 70% creative pe shift ho chuka hai.
We test:
Hook variations (first 3 seconds)
UGC-style videos
Problem-solution storytelling
Offer-based creatives
Social proof creatives
Har 7–10 din me new creative testing hota hai.`,
  `Data Tracking & Optimization (Real Performance Marketing)
We implement:
Meta Pixel
Conversion API
Event tracking (Lead, Purchase, ViewContent, etc.)
Then optimize based on:
CPL (Cost per Lead)
CPA (Cost per Acquisition)
ROAS (Return on Ad Spend)`,
  `WhatsApp & Lead Funnel Optimization
Leads lana easy hai. Convert karna skill hai.
We help with:
WhatsApp automation flow
Instant response scripts
Lead qualification systems`,
  `Continuous Testing & Scaling
No “set & forget”
We run:
A/B testing (audience, creatives, copies)
Budget scaling strategies
Performance analysis weekly`,
]

const processTitle = 'Our Step-by-Step Meta Ads Process (Clear & Practical)'
const processIntro = `This is exactly how we execute campaigns:`

const processSteps = [
  `Step 1: Business Understanding & Goal Setting
What’s your offer?
What’s your average ticket size?
What’s your break-even CPL?
Without this, ads = gambling.`,
  `Step 2: Audience Research & Strategy Mapping
We define:
Cold audience
Warm audience
Hot audience
Plus interest clusters, lookalike audiences, behavior targeting.`,
  `Step 3: Funnel & Offer Structuring
We finalize:
Lead magnet (if needed)
Offer positioning
Landing page / WhatsApp flow`,
  `Step 4: Creative Production & Copywriting
We build:
High-converting ad copies
Thumb-stopping creatives
Scroll-stopping hooks
Focus: Attention → Interest → Action`,
  `Step 5: Campaign Setup & Tracking Integration
Campaign structure (CBO / ABO)
Pixel + Conversion API setup
Event tracking verification`,
  `Step 6: Launch & Initial Testing (First 5–7 Days)
We test:
Multiple creatives
Different audiences
Ad formats
Goal: find winning combinations`,
  `Step 7: Optimization Phase
We analyze:
CPL trends
CTR
Conversion rate
Then:
Kill underperforming ads
Scale winning ads`,
  `Step 8: Scaling & Retargeting
Budget scaling
Retargeting warm audiences
Upsell / remarketing campaigns`,
  `Step 9: Reporting That Actually Makes Sense
No fluff dashboards.
You’ll see:
Cost per lead
Conversion rate
Revenue generated
ROAS`,
]

const chooseTitle = 'Why Businesses in Pune & Across India Choose Leadzoro'
const chooseBlock = `Because they’re tired of:
Random ad experiments
Fake promises
No ROI clarity
They want:
Predictable leads
Measurable growth
Clear strategy
And that’s exactly what we deliver with our Meta Ads Services in Pune, Facebook Ads Agency Pune expertise, and Instagram Ads Services India campaigns.`

const caseTitle = 'Real Case Study — From Wasted Budget to Predictable Leads'
const caseIntro = `Let’s talk numbers. No theory.
We worked with a mid-ticket service-based business (coaching niche, India market).`

const caseBefore = `Before Working With Leadzoro:
Monthly Ad Spend: ₹80,000
Cost Per Lead (CPL): ₹420
Lead Quality: Poor (low intent)
Conversion Rate: ~3%
ROAS: Not measurable (no proper tracking)
They were running ads through a typical Facebook Ads Agency Pune setup — campaigns were active, but business impact? Almost zero.`

const caseChanged = `What We Changed (Within First 30 Days):

Rebuilt Targeting Structure
Segmented cold vs warm audiences
Introduced lookalike audiences (based on actual converters)

Reworked Entire Creative Strategy
Shifted from generic posters → UGC-style videos
Hook optimization (first 3 seconds improved CTR significantly)

Funnel Fix
Direct WhatsApp → structured landing page + qualification
Reduced junk leads drastically

Tracking Setup
Installed Meta Pixel + Conversion API
Tracked real events (not just clicks)`

const caseResults = `Results (Within 45 Days):
Cost Per Lead dropped from ₹420 → ₹160 (62% reduction)
Conversion Rate improved from 3% → 11%
Monthly Leads increased by 2.3x
ROAS became measurable and profitable (3.8x)`

const caseMeaning = `What This Actually Means for You:
Same budget → more leads
Better leads → higher sales
Data clarity → confident scaling
Yahi difference hota hai between “running ads” vs real performance marketing.`

const outcomesTitle = 'What You Can Expect — Clear ROI-Driven Outcomes'
const outcomesIntro = `When your campaigns are structured correctly, results become predictable.
Here’s what businesses typically achieve with our Meta Ads Services in Pune:`

const outcomesBlocks = [
  `Lower Cost Per Lead (CPL)
Not by luck. By:
Better targeting
Strong creatives
Funnel optimization`,
  `High-Intent Leads (Quality > Quantity)
Aapko 100 random leads nahi chahiye.
Aapko 30 serious buyers chahiye.
We focus on:
Intent-driven targeting
Proper lead qualification`,
  `Consistent Lead Flow (No Dry Days)
Campaign structure ensures:
Continuous inflow of leads
No dependency on “one viral ad”`,
  `Scalable Growth System
Once we find winning ads:
Budget scaling
Audience expansion
Retargeting boost`,
  `Clear Data & Transparency
You’ll know:
Kitna spend hua
Kitne leads aaye
Kitni sales hui
No confusion. No guessing.`,
  `Better Conversion Ecosystem
We don’t stop at ads.
We improve:
Landing pages
WhatsApp responses
Lead follow-up`,
]

const perfectTitle = 'Who This Service Is Perfect For'
const perfectIntro = `If you fall into any of these categories, this service is built for you:`

const perfectBlocks = [
  `Service-Based Businesses
Digital agencies
Consultants
Marketing services
Need:
Consistent lead generation`,
  `Coaches & Course Creators
Online coaching
Skill-based training
Personal branding
Need:
Webinar / lead funnel`,
  `Real Estate Professionals
Builders
Brokers
Property consultants
Need:
High-ticket qualified leads`,
  `Local Businesses (Pune Focus)
Clinics
Salons
Gyms
Searching for Meta Ads Services in Pune usually want:
Local targeting
Walk-ins / bookings`,
  `Startups & Founders
MVP stage
Scaling stage
Need:
Fast testing + validation`,
  `Businesses Scaling Across India
Looking for Instagram Ads Services India level reach
Need:
Pan India targeting
Scalable campaigns`,
]

const faqTitle = 'Frequently Asked Questions (FAQs)'
const faqBlocks = [
  `How much budget do I need to start Meta Ads?
Minimum viable budget depends on your industry.
Local services: ₹15k–₹30k/month
Coaching / mid-ticket: ₹30k–₹1L/month
Important:
Low budget = slower testing
Higher budget = faster optimization`,
  `How soon can I expect results?
Initial data starts within 3–5 days.
But real optimization happens in:
2–3 weeks (testing phase)
30–45 days (stable results)
Ads are not magic. They are systems.`,
  `Do you guarantee leads or sales?
No serious performance marketer guarantees numbers blindly.
But what we guarantee:
Structured strategy
Continuous optimization
Data-driven decisions
And that’s what drives results.`,
  `Will you handle creatives as well?
Yes. We create:
Ad copies
Visual creatives
Video concepts
Because creatives = performance driver in Meta Ads.`,
  `What makes Leadzoro different from other agencies?
Simple:
Most agencies:
Run ads
Send reports
Leadzoro:
Builds funnels
Optimizes conversion
Focuses on ROI
We think like business owners, not ad operators.`,
  `Can you work with my existing campaigns?
Yes.
We audit:
Current campaigns
Targeting
Creatives
Funnel
Then optimize or rebuild if needed.`,
  `Do you work only in Pune?
No.
We serve:
Pune-based businesses
Pan India clients
Whether you're searching for a Facebook Ads Agency Pune or scaling nationwide — strategy remains performance-first.`,
  `What industries do you NOT work with?
We avoid:
Misleading offers
Low-quality products
Non-serious businesses
Because performance marketing needs real value behind ads.`,
]

const ctaTitle = 'Let’s Talk Growth — Not Just Ads'
const ctaBlock = `Agar aap serious ho:
Consistent leads chahiye
Ad spend ka ROI chahiye
Business scale karna hai
Then random boosting se kuch nahi hoga.
You need:
Strategy
Funnel
Execution

🚀 Work With Leadzoro — Meta Ads Experts
We don’t promise “viral ads”
We build predictable growth systems

Here’s Your Next Step:
👉 Get a free strategy call
👉 We’ll audit your current ads (if running)
👉 Identify exact gaps
👉 Show you how to improve ROI

No fluff. No false promises. Just clear strategy.

Leadzoro — Turning Ad Spend Into Revenue`

export default function MetaAdsServicesPage() {
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
                Get Free Strategy Call
              </Button>
            </div>
          </ScrollReveal>
          </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Truth?</h2>
            <Card className="mt-6">
              <p className="whitespace-pre-line prose-block">{truthBlock}</p>
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                {truthBullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <p className="mt-4 whitespace-pre-line prose-block">{truthResult}</p>
            </Card>
          </ScrollReveal>
          </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{whatExactlyTitle}</h2>
            <div className="mt-6 space-y-6">
              <p className="whitespace-pre-line prose-block">{whatExactlyPara1}</p>
              <Card variant="highlight">
                <p className="whitespace-pre-line prose-block">{whatExactlyPara2}</p>
              </Card>
            </div>
          </ScrollReveal>
          </div>
      </Section>

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{whatYouGetTitle}</h2>
            <Card className="mt-6">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {whatYouGetBullets.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Card>
            <p className="mt-6 whitespace-pre-line prose-block">{whatYouGetPara}</p>
          </ScrollReveal>
          </div>
      </Section>

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{painTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{painIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {painPoints.map((p) => (
                <Card key={p} variant="highlight">
                  <p className="whitespace-pre-line prose-block">{p}</p>
                </Card>
              ))}
            </div>
            <Card className="mt-6" variant="highlight">
              <p className="whitespace-pre-line prose-block">{painClose}</p>
            </Card>
          </ScrollReveal>
                      </div>
      </Section>

      <Section tone="gray">
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

      <Section>
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

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{chooseTitle}</h2>
            <Card className="mt-6" variant="highlight">
              <p className="whitespace-pre-line prose-block">{chooseBlock}</p>
            </Card>
          </ScrollReveal>
                      </div>
      </Section>

      <Section>
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

      <Section tone="gray">
        <div className="container">
          <ScrollReveal className="max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{outcomesTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{outcomesIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {outcomesBlocks.map((b) => (
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
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">{perfectTitle}</h2>
            <p className="mt-4 whitespace-pre-line prose-block">{perfectIntro}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {perfectBlocks.map((b) => (
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

      <Section>
        <div className="container">
          <ScrollReveal className="max-w-5xl text-center">
            <h2 className="text-3xl font-semibold text-gray-900">{ctaTitle}</h2>
            <Card className="mt-6 text-left">
              <p className="whitespace-pre-line prose-block">{ctaBlock}</p>
            </Card>
            <div className="mt-8 flex justify-center">
              <Button className="text-base md:text-lg" href="/contact-us">
                Get Free Strategy Call
              </Button>
            </div>
          </ScrollReveal>
          </div>
      </Section>

        <Footer />
      </div>
  )
}
