import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import { adminLogin, adminLogout, isAdminLoggedIn } from "@/lib/store";

const DEMO_EMAIL = "demo@example.com";
const DEMO_PASS = "demo-only-not-secure";

describe("adminLogin (demo-only gate)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("accepts the demo credentials printed on the login screen", () => {
    expect(adminLogin(DEMO_EMAIL, DEMO_PASS)).toBe(true);
    expect(isAdminLoggedIn()).toBe(true);
    adminLogout();
    expect(isAdminLoggedIn()).toBe(false);
  });

  it("rejects any other pair", () => {
    expect(adminLogin(DEMO_EMAIL, "wrong")).toBe(false);
    expect(adminLogin("someone@example.com", DEMO_PASS)).toBe(false);
    expect(isAdminLoggedIn()).toBe(false);
  });

  // The check runs in the browser bundle, so every literal in store.ts is public by
  // construction. This guards against a real-looking credential being pasted back in.
  it("keeps store.ts free of addresses outside the reserved example domains", () => {
    const source = readFileSync(resolve(process.cwd(), "src/lib/store.ts"), "utf8");
    const emails = source.match(/[A-Za-z0-9._+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+/g) ?? [];
    const offenders = emails.filter((email) => !/@example\.[A-Za-z]+$/.test(email));
    expect(offenders).toEqual([]);
  });
});
