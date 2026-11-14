# GTA 6 Janitors — Local 6

A professional frontend network for an independent GTA roleplay janitors union. Ticker: **JANITOR**. Membership threshold: **at least 5,000,000 JANITOR**. GitHub: https://github.com/jaycarson373-tech/Gta6janitor

## Run and deploy

Serve `dist/` with any static host. Local preview: `python3 -m http.server 4173 --directory dist`. No build or dependency installation is required. Syntax checks: `node --check dist/app.js` and `node --check dist/agreement.js`. Vercel configuration is included. Sites identity is retained in `.openai/hosting.json`.

## Frontend features

- Direct “Quit your job. Become a GTA 6 janitor.” campaign, with a main-page DacityCoin fund panel and proposed JANITOR / DacityCoin pairing.
- Community feed, job marketplace, server directory, and union transaction view.
- Labeled worker, owner, and non-holder preview personas; distinct token-holder and verification badges.
- Browser-local work posts, job drafts, server listings, saved jobs, likes, and application drafts. Users can delete their drafts. No shared database or publishing.
- Downloadable job briefs, applications, and provisional union cards; no wallet verification implied.
- Vice City-inspired original district concept with interactive job locations. Flagship server explicitly in development.
- Separate ten-article **Union Workers’ Agreement** at `agreement.html`, with print-to-PDF support.
- Three actual source-footage quote cards, owner-attributed to TJR, Adin Ross and Razmers. Local MP4 excerpts with captions, timestamps, keyboard controls and playback cleanup.
- Self-hosted fonts and original generated artwork, responsive layout, keyboard dialogs, animation pause, and reduced-motion support.

## Media provenance

Owner supplied `copy_C05BF743-71C0-4963-8930-52FF4FF8C7F9.mov` on November 13, 2026. The first 28.5 seconds contain the three excerpts. Original images/audio are preserved in a web-encoded MP4; still frames are cropped only to remove black letterboxing. Transcription was performed locally. Speaker attribution follows the owner's supplied order, not facial identification. Exact excerpts and source timestamps: [docs/CLIP-QUOTES.json](docs/CLIP-QUOTES.json).

The remarks discuss proposed servers and hypothetical earnings, not a funded salary or endorsement of this project. The old generated portraits and unrelated X embeds are no longer displayed. Font licenses are in `dist/assets/`.

## Fund display

`dist/assets/fund.json` is an unconfigured, read-only data contract with null balances. `dist/fund.js` renders verified snapshots only, checks mint/network, exact integer amounts and freshness, and distinguishes zero from missing data. No wallet or financial transaction is connected by this change. [Release and integration details](docs/JANITORS-FRONTEND-UPDATE.md).

Target domain: `gta6janitors.fun`. Apex redirects to https://www.gta6janitors.fun/ and both the www domain and https://gta6janitor.vercel.app serve the existing frontend (verified November 13). Metadata uses the www canonical.

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
