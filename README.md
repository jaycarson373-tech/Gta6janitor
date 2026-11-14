# GTA 6 Janitor — Local 6

A professional frontend network for an independent GTA roleplay janitors union. Ticker: **JANITOR**. Membership threshold: **at least 5,000,000 JANITOR**. GitHub: https://github.com/jaycarson373-tech/Gta6janitor

## Run and deploy

Serve `dist/` with any static host. Local preview: `python3 -m http.server 4173 --directory dist`. No build or dependency installation is required. Syntax checks: `node --check dist/app.js` and `node --check dist/agreement.js`. Vercel configuration is included. Sites identity is retained in `.openai/hosting.json`.

## Frontend features

- Direct “Quit your job. Become a GTA 6 janitor.” campaign; $100K/year presented as an unfunded ambition, with an interactive funding calculator.
- Community feed, job marketplace, server directory, and union transaction view.
- Labeled worker, owner, and non-holder preview personas; distinct token-holder and verification badges.
- Browser-local work posts, job drafts, server listings, saved jobs, likes, and application drafts. Users can delete their drafts. No shared database or publishing.
- Downloadable job briefs, applications, and provisional union cards; no wallet verification implied.
- Vice City-inspired original district concept with interactive job locations. Flagship server explicitly in development.
- Separate ten-article **Union Workers’ Agreement** at `agreement.html`, with print-to-PDF support.
- AI-illustrated Adin Ross and FaZe Banks portraits, separately labeled. Click-to-load source X clips and original-source links. No generated celebrity speech.
- Self-hosted fonts and original generated artwork, responsive layout, keyboard dialogs, animation pause, and reduced-motion support.

## Media provenance

The excerpts are from published coverage; direct X pages returned HTTP 403 during research. The player loads their source posts and provides fallback links. These clips concern the speakers' own proposed servers, not an endorsement of this project. No $100K janitor quotation was verified.

- Adin Ross: https://gta6bible.com/streamers-think-that-gta-6-could-turn-in-game-jobs-into/ and https://www.gamingbible.com/news/gta-6-adin-ross-server-paid-play-game-636080-20260619
- Source post: https://x.com/AdinUpdate/status/2060234010781954189
- Banks/Ross server-economy discussion: https://decrypt.co/304597/adin-ross-faze-banks-crypto-gta-6-server
- Source post: https://x.com/vvsrak/status/1886588181128339611

Portraits are generated illustrations, not footage, documentary evidence, or endorsements. Font licenses are in `dist/assets/`.

## Backend handoff

Detailed implementation brief: [docs/BACKEND-HANDOFF.md](docs/BACKEND-HANDOFF.md). It maps the current frontend to proposed APIs, data, work verification, fee accounting and payout recovery, and records the game-platform constraint and unresolved owner decisions. This brief does not enable any backend or change current financial policy.

1. Publish the official mint, wallet-proof flow, token balance checks, qualification timing, and privacy terms. Never trust the frontend persona selector or local storage for authorization.
2. Implement users, verification evidence, roles, moderation, shared posts, job listings, application delivery, ownership reviews, and notifications. Validate and escape all data server-side; add rate limits, audit logs, abuse reporting, and deletion workflows.
3. Define contract terms, approval and dispute workflows, payout currency, any escrow, and actual funded reward rules. Token holdings must not erase rights to agreed payments.
4. Publish fee source/rate, treasury/signers, spending rules, and transaction indexing. The policy is **100% of collected project fees to the union**, with no separate buyback allocation. It is not yet implemented.
5. Confirm the game platform, tools, hosting, ownership, and permitted integrations. No working GTA 6 server or token-gated game integration is promised.
6. Adopt DAO voting, quorum, proposal, delegation, and budget rules. The draft agreement is a product proposal, not an executed labor contract.

## Data and privacy

First-party functionality is static and browser-local. No wallet connection, payment, real verification, shared posting, or application submission occurs. X's external script is requested only after the user opens a source clip. Browser storage can be cleared to remove local data. Simulated transaction rows are opt-in and clearly labeled; there are no fake chain signatures or balances.
