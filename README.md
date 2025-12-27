📱 ProductReviewDiscovery

A Community-Based Product Review Explorer (React Native Prototype)

ProductReviewDiscovery is a mobile prototype designed to reimagine how users research products online. Instead of scrolling through scattered, overloaded reviews, users enter curated community spaces like “Electronics Hub”, “Clothing & Style”, or “Home & Appliances” — each acting as a focused knowledge zone for smarter decision-making.

This prototype demonstrates how context-driven communities + visual clarity can transform product research from chaotic → structured, helpful, and human-friendly.

🎯 Objective

Current online reviews suffer from:

❌ Too much text with no structure

❌ Sponsored or untrustworthy evaluations

❌ Hard comparison experiences

❌ UI clutter creates cognitive fatigue

ProductReviewDiscovery solves this by:

🧭 Moving browsing into clean category hubs

🏷 Grouping products into topic-driven communities

🔍 Presenting summaries instead of long unreadable threads

🎨 Using a Neumorphic-inspired soft UI to reduce cognitive load

This prototype validates whether users find this approach easier, faster, and more intuitive than the traditional marketplace review model.

🚀 Project Overview
Area	Implementation
Framework	React Native CLI (Android Target)
Architecture	Modular screens + stack navigation
Data Source	Static JSON dataset (no backend yet)
State Mgmt	React hooks (local state only)
Navigation	@react-navigation/native-stack
UI System	Neumorphism + Soft interaction feedback
✨ Feature Highlights
🧩 Community-Centric Navigation

Users choose interest hubs, allowing mental filtering before reading any product data.

🖥 Clean UI with Soft 3D Surfaces

All cards, categories, and components follow a subtle Neumorphism gradient, creating a calm product research experience.

🔄 Interaction Flow

Select category → view items

Press card → view product context

Scroll lists with smooth animation

🛠 Stable Build (Post Bug Fix Phase)

All major blockers like:

Hermes library crash

Navigation stack mismatch

Reanimated/Reanimated plugin conflicts

MinSdk & Gradle sync issues

...have now been fixed and documented.

🧠 Key Concept & Research Value (700–800 word section target)

ProductReviewDiscovery is not just an interface; it is a research-backed UX exploration of how digital review ecosystems might evolve. Traditionally, users are forced into passive consumption — scrolling endlessly through unrelated text, deciphering credibility, and mentally sorting opinions. This prototype challenges that paradigm by introducing a community-first review hierarchy.

By structuring research around topic clusters, the user’s journey changes drastically:

Old Method	New Method (in App)
Search product name → get random reviews	Choose community hub to explore product categories
Read 200+ reviews blindly	See summarized insights + structured perspectives
Fatigue & indecision	Confidence through visual clarity and relevance

The UI emphasizes low-stress reading, applying principles of:

🧊 Low-contrast visual surfaces

🌬 Large whitespace breathing zones

🎛 Minimal text with intentional hierarchy

This respects cognitive load theory — reducing visual noise improves decision comprehension.

In future iterations, this system could scale into a hybrid network:

Communities moderated by subject enthusiasts

AI-powered review summarization (OpenAI / LLMs)

Trusted profile systems replacing anonymous reviews

This prototype validates the feasibility of that vision on a small scale.

📸 Screens Overview
Screen	Description
Discovery Screen	Entry hub for categories and exploration
ProductReviews Screen	Sample detail section inside communities
Navigation	Stack-based routing and transitions
📦 Install & Run (Stable Build)
📍 Prerequisites

Node.js LTS

JDK 17

Android Studio + SDK Platform 34

USB debugging enabled (for device testing)

1️⃣ Install dependencies
npm install

2️⃣ Start Metro on fixed port
npx react-native start --reset-cache --port 9092

3️⃣ Run the App (Device or Emulator)
npx react-native run-android --port 9092

🛠 If build issues happen
cd android
gradlew clean
cd ..

📱 APK Build (Unsigned)
cd android
gradlew assembleDebug


APK Output:

/android/app/build/outputs/apk/debug/app-debug.apk

📍 Project Structure
PRDnew/
│
├── src/
│   ├── screens/
│   │   ├── DiscoveryScreen.tsx
│   │   ├── ProductReviewsScreen.tsx
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   ├── data/
│   │   └── communityData.ts
│   └── utils/
├── android/
├── index.js
└── package.json

🧭 Roadmap (Phase 2)
Feature	Status
Firebase/Backend Integration	🟡 Planned
User Accounts / Profiles	🟡 Planned
AI Summarization of reviews	🔵 Prototype planned
Submit & Vote review system	🟡 In design
APK Play Store Release	⚪ Pending
🧩 Conclusion

ProductReviewDiscovery proves that review research can be human-friendly.
By prioritizing clarity, category context, and UI calmness, the prototype offers a promising foundation to evolve into a next-generation consumer decision tool.

This phase confirms:
✔ Navigation flow works
✔ User experience direction is validated
✔ Build pipeline now stable

Next steps target making the system live and scalable.

🛠 Maintained By

Nishchal Gond
Final Year CSE — UX + Mobile Prototype Research