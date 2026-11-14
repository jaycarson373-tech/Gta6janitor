'use strict';
(() => {
  const fields = ['feesCollectedRaw', 'workerAllocatedRaw', 'rewardsPaidRaw'];
  const expectedQuote = 'TTWofwAge91oFhZs7kpQdyrVRkmevgM88xijGvQFbKo';
  const status = document.getElementById('fund-status');
  const updated = document.getElementById('fund-updated');
  const address = x => typeof x === 'string' && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(x);
  const amount = x => typeof x === 'string' && /^(0|[1-9]\d{0,39})$/.test(x);
  function clear(label, note) {
    fields.forEach(key => document.querySelector(`[data-fund="${key}"]`).textContent = '—');
    status.textContent = label; updated.textContent = note;
  }
  function format(raw, decimals) {
    const padded = raw.padStart(decimals + 1, '0');
    const whole = decimals ? padded.slice(0, -decimals) : padded;
    const fraction = decimals ? padded.slice(-decimals) : '';
    const shown = fraction.slice(0, 4).replace(/0+$/, '');
    if (BigInt(raw) > 0n && BigInt(whole) === 0n && !shown) return '<0.0001';
    return whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (shown ? '.' + shown : '');
  }
  async function refresh() {
    try {
      // Static contract placeholder until the backend owner supplies a verified read-only source.
      const response = await fetch('assets/fund.json', {cache: 'no-store', signal: AbortSignal.timeout(8000)});
      if (!response.ok) throw new Error('Unavailable');
      const data = await response.json();
      if (data.status === 'unconfigured') {
        clear('Awaiting treasury records', 'Figures appear after the treasury is verified.'); return;
      }
      const time = Date.parse(data.updatedAt), age = Date.now() - time;
      if (data.schemaVersion !== 1 || data.status !== 'verified' || data.network !== 'solana-mainnet' || data.quoteMint !== expectedQuote || !address(data.projectMint) || !address(data.treasuryAddress) || !Number.isInteger(data.decimals) || data.decimals < 0 || data.decimals > 18 || !fields.every(k => amount(data[k])) || !amount(data.treasuryBalanceRaw) || BigInt(data.workerAllocatedRaw) > BigInt(data.treasuryBalanceRaw) || !Number.isFinite(time) || age < -60000) throw new Error('Invalid record');
      if (age > 15 * 60 * 1000) {
        clear('Update pending', 'The last treasury record is over 15 minutes old.'); return;
      }
      fields.forEach(key => {
        const el = document.querySelector(`[data-fund="${key}"]`);
        el.textContent = format(data[key], data.decimals);
        el.title = `${data[key]} raw units · ${data.decimals} decimals`;
      });
      status.textContent = 'Verified treasury snapshot';
      updated.textContent = `Updated ${new Date(time).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} · TTWO amounts`;
    } catch {
      clear('Treasury data unavailable', 'Totals will return when a verified record is available.');
    }
  }
  refresh();
  setInterval(() => {if (!document.hidden) refresh()}, 60000);
  document.addEventListener('visibilitychange', () => {if (!document.hidden) refresh()});
})();
