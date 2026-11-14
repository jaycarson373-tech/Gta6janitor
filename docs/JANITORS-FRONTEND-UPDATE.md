# Janitors — quotes, pairing and fund panel

Owner-authorized frontend update, November 13, 2026. Existing Local 6 artwork, jobs, drafts, storage keys, agreement and server directory preserved. No backend, custody, launch, signing or payout functionality activated.

## Identity and copy

- Public name: **GTA 6 Janitors**, ticker **JANITOR**. The sentence “Become a GTA 6 janitor” remains grammatically singular.
- Target domain: **gta6janitors.fun**. Canonical metadata uses www and the footer shows the target. Apex redirect and www production HTTP 200 verified November 13.
- Existing proposed 5 million token membership threshold retained.
- Homepage prioritizes a union fund, not a hypothetical salary figure. Original salary budgeting dialog remains available in the code; the quote cards accurately contextualize the speakers' own statements.
- Three quote cards use original frames, local video and timestamped captions. Names/order supplied by owner: TJR, Adin Ross, Razmers. See CLIP-QUOTES.json. Remove/revise attribution if owner corrects it; do not independently identify faces.

## TTWO — proposed quote asset

Owner confirmed “2-2 stock” means Take-Two / TTWO. Both primary sources list the same Solana asset:

`TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo`

- Backpack issuer asset list: https://wallet.backpack.exchange/tokenized-stocks/assets
- Pump supported pairs: https://pump.fun/docs/custom-pairs
- Take-Two corporate identity: https://www.take2games.com/en/ir

Sources checked November 13, 2026. These establish the quote asset listing, not that JANITOR has launched, is paired, owns stock, or has collected fees. No project mint, treasury or pool is supplied. No transfer/purchase is authorized by this frontend change. Issuer eligibility and venue rules still apply.

Pump documents creator fees being denominated in the paired asset. For a verified JANITOR/TTWO launch, account for collected TTWO directly; do not invent an additional buy-TTWO conversion from SOL. If a real fee source differs, publish the actual conversion receipt and amounts separately.

## Fund contract for doctadog

Frontend fetches `assets/fund.json` with no-store on load, every 60 seconds when visible, and on returning to the page. This is an unconfigured contract placeholder, not a mock ledger. Backend owner can supply a reviewed same-origin read-only source or replace this snapshot publishing path; no endpoint is represented as existing.

Required shape is in the JSON file:

- `schemaVersion: 1`, `network: "solana-mainnet"`.
- `status: "unconfigured"` until verified; `"verified"` only for a reconciled server-produced record.
- `projectMint`, exact `quoteMint`, `treasuryAddress`, chain-verified `decimals`.
- `feesCollectedRaw`: cumulative creator/project fees actually received, excluding trading volume, unclaimed fees and unrelated deposits.
- `workerAllocatedRaw`: outstanding approved TTWO worker reserves, still held in custody. Never cumulative paid-plus-unpaid rewards.
- `rewardsPaidRaw`: cumulative finalized, deduplicated TTWO payouts to approved workers.
- `treasuryBalanceRaw`: reconciled current token balance; worker allocation cannot exceed it.
- `updatedAt`: ISO UTC timestamp of reconciliation, not merely response generation.

Amounts are nonnegative integer strings in raw quote-token units. Unknowns are null, never fake zeros. Client rejects wrong mint/network, invalid amounts, future dates beyond 60 seconds, overallocated worker reserves and data older than 15 minutes. UI truncates fractional quantities to four decimal places (tiny nonzero amounts show <0.0001). Raw amount/decimals remain in the value's title. Do not use display-rounded values for settlement.

The client validation is presentation hygiene, not a cryptographic proof. Backend must verify actual receipts, persist immutable allocation records and reconcile liabilities. Receipt links and the shared transaction view must be integrated from the real ledger; the existing browser-only sample ledger remains isolated.

## Policy preserved

100% of collected project fees is earmarked for the union. The internal worker/server/reserve budget is still unadopted. The TTWO worker-allocation card displays only the actual approved worker portion; it does not quietly commit 100% to immediate payouts or move funds. Holding JANITOR confers no Take-Two share ownership or claim on treasury assets.

## Design and checks

Owner-supplied VI/janitor logo replaces the mop mark in navigation, fund and footer. Exact source image preserved; WebP and favicon exports only resize it. Violet and sunset accents drawn from that artwork.

Original implementation in existing vanilla HTML/CSS/JS. References researched: https://21st.dev/?tab=home and https://reactbits.dev/animations/animated-content. No library components/code copied; no new UI dependencies. Used a compact ledger, restrained source-footage cards and tabular values, retaining the peach/plum brand. No animated financial totals or decorative market chart.

Responsive screenshots and browser results are recorded with the release. Backend implementation/treasury funding remain separate from frontend readiness.

## Verification

- JS syntax checks and git diff whitespace check passed.
- Chrome at 390px, 820px and 1280px: no horizontal overflow or JavaScript exceptions; supplied logo and all original-footage posters loaded.
- All three local video excerpts loaded with expected durations; closing the dialog stops playback. Captions included.
- Opt-in transaction examples remain explicitly simulated and do not feed the fund totals.
- Fund display checks: real zero remains zero; stale records, wrong mint, null amounts and reserves exceeding custody are withheld rather than displayed as verified figures.
- No backend funding, token launch, worker verification or payout tested/activated.

## CA and social follow-up

Added compact `$JANITOR · CA · Soon` box below the homepage header. No mint or copy action is fabricated. Added an X-logo slot at the top right on homepage/agreement; official handle is still missing, so the button is visibly marked Soon and disabled with an accessible explanation. Replace with the exact official link when owner supplies it. Header action labels shorten on phones; membership and menu functions remain available.

Owner supplied official X: https://x.com/GTA6Janitors. Both header icons now link to that account; Soon label removed. CA remains Soon pending mint.

### Header alignment fix — 2026-11-13
Grouped the right-side controls, removed the large desktop gap before X, matched mobile button heights, and replaced the text hamburger with an SVG icon. Checked home and agreement pages at 320, 390, 820 and 1280px: no horizontal overflow; navigation toggle, membership dialog and official X target verified. CA remains Soon.

### Night palette polish — 2026-11-13
Owner requested a darker presentation closer to the supplied VI logo. Added a scoped screen-only night stylesheet: near-black plum header and hero, larger original VI emblem, sunset-pink headline, stronger CTA contrast, dark fund ledger and original-footage cards, and a compact dark footer. Community feed and district map retain light reading surfaces. Short entrance motion honors reduced-motion preferences. Print styling, text, financial policies, quote attribution and all frontend behavior remain intact.

Researched 21st.dev and React Bits Animated Content for component options; implemented original CSS without copying components or adding dependencies. Direction comes from the owner-supplied logo. Home and agreement checked at 320/390/820/1280px with no overflow or page exceptions. Navigation, Join dialog, original video opening/closing and lazy poster loading verified. Syntax and diff checks passed. No backend or financial activation.

### TTWO pairing and rewards — latest owner correction
Both pairing and rewards use TTWO. Restored the previously verified TTWO quote mint and single-asset schema v1; all figures remain null until a verified treasury source is supplied. DacityCoin is no longer the intended quote or reward asset. Any historical DacityCoin records retain their identity and must not be relabeled. No pool, trade or payout was activated.

TTWO correction QA: 390/820/1280px layouts pass without overflow or browser exceptions. Verified TTWO fixture renders correctly; former DacityCoin fixture is rejected. JS syntax and diff checks pass. Backpack/Pump asset lists rechecked for the exact TTWO mint.

### JANITOR contract address — owner supplied November 13
`Hy8jq9LjuvWfpiB3UCh2EtCnnKqupWkoTjFDE9qapump`

Homepage CA chip now shows and copies this exact address. Read-only fund contract and project-mint validation use it. TTWO pairing/rewards remain unchanged. Mint supplied by owner; no pool, balances, fees or payouts inferred from the address. Backend must verify actual mint metadata, pool and treasury receipts.
