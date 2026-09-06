// Simulated backend using localStorage.
//
// This is a front-end showcase: there is no server, no account and no login anywhere in
// the app. Enquiries are kept in the visitor's own browser so the form can behave like a
// real one during a demo, and they never leave the machine.

export type BookingType = "tour";
export type BookingStatus = "new" | "confirmed" | "completed" | "cancelled";

export interface Booking {
  id: string;
  type: BookingType;
  itemIndex: number;
  date: string;
  name: string;
  email: string;
  phone: string;
  people: number;
  notes: string;
  status: BookingStatus;
  createdAt: string;
}

export interface BlockedDate {
  id: string;
  type: BookingType;
  itemIndex: number;
  date: string;
  reason: string;
}

const BOOKINGS_KEY = "nordan_bookings";
const BLOCKED_KEY = "nordan_blocked";

function genId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export function getBookings(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(BOOKINGS_KEY) || "[]");
  } catch { return []; }
}

function saveBookings(b: Booking[]) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(b));
}

export function addBooking(b: Omit<Booking, "id" | "status" | "createdAt">): Booking {
  const booking: Booking = { ...b, id: genId(), status: "new", createdAt: new Date().toISOString() };
  const all = getBookings();
  all.push(booking);
  saveBookings(all);
  return booking;
}

// Nothing in the app writes blocked dates — seed the "nordan_blocked" key by hand when a
// demo needs to show the "date unavailable" message.
export function getBlockedDates(): BlockedDate[] {
  try {
    return JSON.parse(localStorage.getItem(BLOCKED_KEY) || "[]");
  } catch { return []; }
}

export function isDateBlocked(type: BookingType, itemIndex: number, date: string): boolean {
  return getBlockedDates().some((b) => b.type === type && b.itemIndex === itemIndex && b.date === date);
}
