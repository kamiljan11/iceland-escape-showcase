import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { beforeEach, describe, expect, it } from "vitest";
import { addBooking, getBookings, isDateBlocked } from "@/lib/store";

const enquiry = {
  type: "tour" as const,
  itemIndex: 0,
  date: "2026-10-01",
  name: "Test Visitor",
  email: "visitor@example.com",
  phone: "+354 555 0000",
  people: 2,
  notes: "",
};

describe("store", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("keeps an enquiry in the browser and marks it new", () => {
    const saved = addBooking(enquiry);
    expect(saved.status).toBe("new");
    expect(saved.id).not.toHaveLength(0);
    expect(getBookings()).toHaveLength(1);
  });

  it("returns an empty list when localStorage holds something unparsable", () => {
    localStorage.setItem("nordan_bookings", "not json");
    expect(getBookings()).toEqual([]);
  });

  it("reports a date as blocked only when a matching entry exists", () => {
    expect(isDateBlocked("tour", 0, "2026-10-01")).toBe(false);
    localStorage.setItem(
      "nordan_blocked",
      JSON.stringify([{ id: "x", type: "tour", itemIndex: 0, date: "2026-10-01", reason: "Bad weather" }]),
    );
    expect(isDateBlocked("tour", 0, "2026-10-01")).toBe(true);
    expect(isDateBlocked("tour", 1, "2026-10-01")).toBe(false);
  });
});

// This is a front-end showcase with no server. A sign-in screen here could only ever be
// fake, and a fake one shipped in a public demo reads as sloppy rather than convincing.
describe("no authentication in the bundle", () => {
  function sourceFiles(dir: string): string[] {
    return readdirSync(dir).flatMap((entry) => {
      const path = join(dir, entry);
      if (statSync(path).isDirectory()) return sourceFiles(path);
      return /\.tsx?$/.test(entry) ? [path] : [];
    });
  }

  it("ships no login gate and no credential constants", () => {
    const forbidden = /adminLogin|isAdminLoggedIn|adminLogout|ADMIN_PASS|DEMO_PASS|["'`]\/admin["'`]/;
    const offenders = sourceFiles(resolve(process.cwd(), "src"))
      .filter((path) => !path.endsWith("store.test.ts"))
      .filter((path) => forbidden.test(readFileSync(path, "utf8")));
    expect(offenders).toEqual([]);
  });
});
