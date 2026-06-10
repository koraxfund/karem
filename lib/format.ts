export function formatAddress(addr: string | null | undefined): string {
  if (!addr) return 'To be announced';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}
