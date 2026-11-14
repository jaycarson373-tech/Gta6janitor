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
