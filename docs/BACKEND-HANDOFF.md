# GTA 6 Janitor / Local 6 — backend handoff

Prepared 13 November 2026. Status: implementation brief, not an operating backend.
Frontend baseline inspected: `23dfebb` on `main`.

## 1. Product in plain English

A professional community and job board for roleplay janitors and the server operators who hire them. Workers build profiles, find shifts, submit work evidence and build a verified work history. Operators publish clear jobs and approve completed work. The project intends to direct 100% of its collected project fees toward its janitor community.

The existing campaign is “Quit your job. Become a GTA 6 janitor.” It is satirical positioning, not an employment offer. The existing $100K/year calculator is hypothetical and must not become a salary promise when the API is connected.

Keep the existing Local 6 design and approved assets. Do not rebuild the frontend or copy another project's treasury, keys, mint, fee policy or records.

## 2. What exists today

- Static site in `dist/`: `index.html`, `app.js`, `styles.css`, `agreement.html`, `agreement.js`, local assets and fonts.
- Feed, job search/filtering, saved jobs, server-directory drafts, application downloads, provisional cards, funding calculator and draft workers' agreement.
- Worker/owner/visitor selectors are labeled preview personas, not authenticated roles.
- Posts, jobs, applications, likes and server drafts live only in browser storage. No shared database, verified membership, notifications, executed employment contract, live treasury feed or payments exist.
- Transaction samples are opt-in illustrations. They must never be imported as real ledger entries.
- Ticker in the current frontend: JANITOR. Proposed membership threshold: at least 5,000,000 JANITOR. Official mint is not configured.
- No product-specific API contract or backend repository was present in the inspected frontend checkout. Routes below are a proposed contract for the backend owner to ratify.

## 3. Owner decisions and constraints

### Preserve

- JANITOR / Local 6 identity and current frontend.
- 5M-token threshold as the existing proposed value, configurable and versioned.
- Holding, verified-worker status and verified-server-owner status are separate checks.
- 100% of collected project fees stays earmarked for the janitor community; no imported buyback split.
- Selling tokens cannot erase completed-work payables, accepted contractual obligations, evidence or appeal rights.

### Resolve before financial activation

1. Official Solana mint and network; verify decimals and token program from chain.
2. Actual fee source and collection authority. “100%” describes the allocation of project fees actually collected, not 100% of trade volume or all venue fees.
3. Latest brief emphasizes payouts to participating janitors. Existing Article 05 also permits server expenses and a reserve. Confirm whether the entire pool is worker-only or a wider union budget. Do not silently deduct server costs, gas or a platform cut from a worker-only promise. Model these destinations separately, leave allocation unconfigured, and reconcile public copy before activation.
4. Payout asset, worker eligibility, award formula, caps, cadence and dispute deadlines. No reward formula has been approved. Do not invent wages, APY, equal-holder distributions or a payout timer.
5. Public treasury address, separate operational funding, signing policy and responsible reviewers. Request public addresses only; credentials belong in the deployment's secret store.
6. Target server platform, operator and permitted integration. A Discord jobs community, GTA V/FiveM server and a future GTA VI server are not interchangeable.
7. Membership timing: proposed MVP checks on enrollment and gated participation, with expiry/recheck metadata. Decide revocation/grace rules before enabling enforcement.
8. Named operating entity/contact, privacy retention and worker/operator terms before real hiring.

## 4. Game-platform dependency

Do not assume a supported GTA VI server API or represent a game server as live because the web directory exists.

Rockstar's RP support page points to its Creator Platform agreement and Mod Guidelines. The January 12, 2026 agreement, section 3.1(8), prohibits facilitating the use, sale or promotion of cryptocurrency through the covered creator services/custom-server commercial activity, unless separately permitted in writing. Section 3.1 also restricts real-money cash-out mechanics.

This is an actual integration constraint. Do not implement token-gated GTA access, crypto game wages, crypto promotions inside a server, or relabel those mechanics to evade the restriction. Keeping a separate website is not evidence that an otherwise prohibited arrangement is permitted. Confirm the applicable platform and obtain an appropriate policy/legal review or written permission before that adapter is enabled. A community/jobs prototype can be prepared while this remains unresolved; do not present it as an approved game integration.

Sources checked 13 November 2026:
- https://support.rockstargames.com/articles/5I66kExWgligszgMCU3XC1/roleplay-rp-servers
- https://static.cfx.re/platform-license-agreement-12-jan-2026.pdf — sections 2.3 and 3.1

## 5. Recommended lean architecture

Use the backend owner's existing supported TypeScript API conventions if available. Initial shape: a same-origin API, PostgreSQL, private object storage for application/evidence files, and a scheduled reconciliation worker. Keep frontend hosting separate from signing. Node API/worker on Railway is a proposal, not an existing deployment.

Start with manual verification and moderated job publishing. Discord OAuth can link a community account if Discord is selected; wallet ownership requires a separate signed challenge. No autonomous treasury signer is needed for the first read-only/community milestone.

All frontend calls go through one API client. Backend authorization must ignore the local persona selector, browser claims and hidden controls. Keep draft import explicit and user-scoped; never upload existing local data automatically.

## 6. Identity, membership and roles

- Wallet sign-in: short-lived, single-use, origin-bound message challenge; verify the exact message and signature server-side, then issue a secure HttpOnly session. No transaction approval for login.
- Chain reads use a server-side production RPC. Check the official mint, token program and raw balance; never trust ticker/name or a pasted balance.
- Store threshold as an integer raw amount derived from verified decimals. Aggregate only supported accounts owned by that proven wallet; document exclusions and unsupported asset representations.
- Record observed slot/time and expiry. RPC failures produce `unavailable`, never a fabricated zero or verified badge.
- Separate `membershipStatus`, `workerVerificationStatus`, `serverOwnershipStatus` and staff permissions.
- Worker verification: submitted evidence -> review -> approved/rejected -> appeal/revoked. Token holdings do not prove employment, qualifications or identity.
- Server-owner verification: documented control/authority evidence with review. A submitted URL or holder badge is not sufficient.
- Approved verification criteria, age restrictions and handling of personal evidence require owner decisions. Collect the minimum necessary information.

## 7. Core data model

Use stable IDs, UTC timestamps, created/updated/version fields and audit events.

| Entity | Main fields / purpose |
| --- | --- |
| users / linked_wallets | Public handle, wallet proof, optional linked community identity; private contact fields kept separate |
| membership_checks | Mint, raw balance, threshold version, slot, checked/expiry times, status |
| profiles / verification_cases | Skills, work history, review state, private evidence references and appeal decisions |
| servers / ownership_cases | Platform, owner, listing state, control evidence and real availability |
| jobs | Owner/server, role, scope, dates, currency, exact compensation or negotiation status, evidence rules, approval/payment deadlines, cancellation/dispute terms |
| applications / contracts | Applicant, job version, submitted answers, agreed terms and acceptance by both parties |
| work_submissions / reviews | Contract, evidence, revisions, reviewer, decision and audit trail |
| posts / reports | Public updates, moderation state, reports; no private application evidence by default |
| fee_receipts / ledger_entries | Real chain receipts, classification, immutable allocation policy version, reconciliation status |
| reward_epochs / awards / payouts | Reviewed allocation, reserved funds, recipient, amount, approval and original transaction state |
| disputes / notifications | Case history, reviewer separation and durable delivery status |

Monetary values: `amountRaw` decimal strings plus chain, asset address and decimals. Distinguish SOL, USDC, JANITOR, fiat quotes and in-game credits. Never use browser floating-point values for settlement.

## 8. Proposed API contract — not implemented

Ratify in `API.md` before frontend wiring. Public responses omit private contact/evidence fields. Collections use cursor pagination; errors include stable code, safe message and optional field errors.

| Current screen/action | Proposed routes | Authorization / key behavior |
| --- | --- | --- |
| Runtime configuration | GET /api/config | Public: mint, threshold, enabled capabilities, server state; absent values remain null |
| Sign in | POST /api/auth/challenge; POST /api/auth/verify; GET /api/session; POST /api/auth/logout | Nonce replay protection, exact origin, session/cookie protections |
| Membership | GET /api/me/membership; POST /api/me/membership/refresh | Proven wallet only, bounded refresh, no client balance input |
| Profile / work badge | GET /api/profiles/:id; PATCH /api/me/profile; POST /api/me/verification | Public/private field separation; staff-only review |
| Community feed | GET /api/posts; POST /api/posts; POST /api/reports | Membership/role rules, input validation, rate limits and moderation |
| Job marketplace | GET /api/jobs; GET /api/jobs/:id; POST /api/jobs | Public reads; approved owner writes; versioned published terms |
| Apply / hire | POST /api/jobs/:id/applications; GET /api/me/applications; POST /api/applications/:id/offer; POST /api/contracts/:id/accept | Applicant/owner scopes; no self-approval; terms accepted before work |
| Work evidence | POST /api/contracts/:id/submissions; POST /api/submissions/:id/review | Assigned worker/owner; reason and audit trail; appeals supported |
| Server directory | GET /api/servers; POST /api/servers; POST /api/servers/:id/ownership | Draft -> review -> approved, no fabricated availability |
| Union transactions | GET /api/treasury; GET /api/treasury/transactions | Only indexed receipts; expose freshness and unavailable/partial states |
| Worker awards | GET /api/me/awards; GET /api/me/payouts | Private entitlement detail; no automatic financial mutation from a page load |
| Disputes | POST /api/contracts/:id/disputes; GET /api/me/disputes | Participant access; independent reviewer; reasoned resolution |

Define idempotency for mutation retries and optimistic version checks for job/contract changes. A transport timeout is an uncertain outcome; fetch the existing action before retrying. Notifications must be queued, deduplicated and scoped to the actual application/contract.

## 9. Work and payout lifecycle

1. Approved operator publishes a job with specific terms; unfunded or negotiable offers must be distinguishable from funded commitments.
2. Eligible worker applies. Operator offers and worker accepts a fixed contract version.
3. Worker performs the permitted task and submits evidence. A client click is not proof of work.
4. Reviewer accepts, requests revision or rejects with a reason. Appeals follow published deadlines.
5. Employer wages and optional union-funded awards remain different obligations. Union revenue must not stand in for an employer's unpaid invoice.
6. Approved union awards reserve available funds atomically. Prevent duplicate submissions, duplicate awards, self-dealing and conflicting reviewer roles.
7. No escrow exists today. Do not label a balance “escrow” until the actual mechanism and refund/dispute rules are implemented and reviewed.
8. Proposed payout states: `approved -> reserved -> submitted -> confirmed`, with `failed` and `unknown` recovery states. Save the original transaction identifier before broadcast; reconcile it before any replacement.
9. Credit paid totals only after verifying the expected recipient, asset, exact raw amount and finality. Replaying a receipt, restarting a worker or retrying a request must not pay twice.
10. Public receipts may be pseudonymous; warn workers that an onchain payout exposes its destination. Do not publish personal verification evidence alongside it.

## 10. Fee accounting

- Fee collection, allocation and payment are separate steps with separate receipts.
- One immutable source receipt can enter the ledger once. Exclude donations, user deposits and employer wage funding from creator-fee statistics unless classified separately.
- Every collected project-fee unit is recorded as earmarked for the approved janitor-community purpose. No unapproved platform/buyback diversion.
- Worker liabilities, approved reserves and operational funding remain distinct accounts; don't count the same money twice.
- If costs are funded separately, show that fact. If the owner instead approves costs from the union fund, publish the budget and describe 100% as union allocation rather than immediate worker distribution.
- Worker-fund balance, available budget, obligations, paid awards and pending transfers reconcile to real custody balances. A shortfall pauses new commitments; it does not erase existing debts.
- First financial milestone should use explicit human approval and a capped reviewed pilot. Automation follows reconciled receipts and restart/retry acceptance.

## 11. Frontend integration checklist

- Replace preview personas with server-authorized session roles; retain a separate clearly labeled preview mode if useful.
- Replace local feed/job/server stores with real APIs only after CRUD, ownership and moderation checks exist.
- Keep unsent drafts and recovery intact; submission success must mean the backend accepted the record.
- Replace sample badges with separate verified membership, worker and server-owner states.
- Make application confirmation show status, real destination and next step.
- Show only real ledger entries in live mode; link actual signatures, timestamp reads, and distinguish unknown from zero.
- Keep salary/funding calculators illustrative unless actual contracts fund the displayed amount.
- Maintain current layout, typography, artwork, mobile navigation, keyboard dialogs and reduced-motion support.

## 12. Delivery order and acceptance

1. **Contract and identity:** publish API.md, configured mint/server scope and sign-in; test nonce replay, wallet mismatch, expiration, account switch, threshold boundary and RPC outage.
2. **Community:** profiles, roles, moderation, job/server publishing, applications and scoped evidence. Test cross-user access, unauthorized reviews, deletion, pagination and duplicate submissions.
3. **Jobs:** versioned offers/acceptance, review and appeals. Test edits after acceptance, lost membership preserving existing claims and disputed work.
4. **Read-only accounting:** collection/indexing and reconciled receipts. Verify unrelated transfers are excluded and repeated indexing is idempotent.
5. **Reviewed payout pilot:** approved asset/policy/signers, covered obligations, finality verification and restart recovery. No live payouts before this stage is accepted.
6. **Game adapter / governance:** separate future milestones after platform permissions and actual capabilities are established. Do not block ordinary prototype preparation on invented game APIs.

## 13. What Matthew needs to supply

- Official JANITOR mint, if issued; otherwise leave it unset.
- Intended first community/game platform and its operator/server details.
- Payout asset and whether 100% funds only worker awards or also approved union/server costs.
- Treasury public address and reviewer/operator identities before payouts; signer secrets are never requested in chat or committed.
- Final domain/X and any replacement logo when ready. Existing assets are sufficient to continue preparation.

Doctadog owns backend contract decisions and implementation; frontend work should follow that contract. A write-access invitation was issued separately; pending acceptance is not completed access.
