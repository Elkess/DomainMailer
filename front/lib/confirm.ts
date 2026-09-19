/**
 * Confirmation dialog helper.
 *
 * Uses the native window.confirm() global (Chrome, Edge, Firefox, Safari
 * all support it) to show an OK/Cancel dialog. When a browser does not
 * expose window.confirm, falls back to warning with alert() and proceeding,
 * so destructive buttons never silently break in edge-case browsers.
 */
export function confirm(message: string): boolean {
  if (typeof window !== "undefined" && typeof (window as any).confirm === "function") {
    return (window as any).confirm(message);
  }
  if (typeof window !== "undefined") {
    window.alert(message);
  }
  return true;
}