// Simulated backend using localStorage

export type BookingType = "tour" | "car";
export type BookingStatus = "new" | "confirmed" | "completed" | "cancelled";

export interface Booking {
  id: string;
  type: BookingType;
  itemIndex: number; // index in tours or cars array
  date: string; // ISO date
  endDate?: string; // for car rentals
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
const ADMIN_KEY = "nordan_admin_auth";

// Demo admin credentials
const ADMIN_EMAIL = "admin@nordan.is";
const ADMIN_PASS = "nordan2024";

function genId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

// --- Bookings ---
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

export function updateBookingStatus(id: string, status: BookingStatus) {
  const all = getBookings();
  const idx = all.findIndex((b) => b.id === id);
  if (idx >= 0) { all[idx].status = status; saveBookings(all); }
}

export function deleteBooking(id: string) {
  saveBookings(getBookings().filter((b) => b.id !== id));
}

// --- Blocked dates ---
export function getBlockedDates(): BlockedDate[] {
  try {
    return JSON.parse(localStorage.getItem(BLOCKED_KEY) || "[]");
  } catch { return []; }
}

export function addBlockedDate(bd: Omit<BlockedDate, "id">): BlockedDate {
  const item: BlockedDate = { ...bd, id: genId() };
  const all = getBlockedDates();
  all.push(item);
  localStorage.setItem(BLOCKED_KEY, JSON.stringify(all));
  return item;
}

export function removeBlockedDate(id: string) {
  localStorage.setItem(BLOCKED_KEY, JSON.stringify(getBlockedDates().filter((b) => b.id !== id)));
}

export function isDateBlocked(type: BookingType, itemIndex: number, date: string): boolean {
  return getBlockedDates().some((b) => b.type === type && b.itemIndex === itemIndex && b.date === date);
}

// --- Admin auth (simulated) ---
export function adminLogin(email: string, password: string): boolean {
  if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
    localStorage.setItem(ADMIN_KEY, "true");
    return true;
  }
  return false;
}

export function isAdminLoggedIn(): boolean {
  return localStorage.getItem(ADMIN_KEY) === "true";
}

export function adminLogout() {
  localStorage.removeItem(ADMIN_KEY);
}

// --- Seed demo data ---
export function seedDemoData() {
  if (getBookings().length > 0) return; // already seeded
  const now = new Date();
  const demoBookings: Omit<Booking, "id" | "status" | "createdAt">[] = [
    { type: "tour", itemIndex: 0, date: new Date(now.getTime() + 3 * 86400000).toISOString().split("T")[0], name: "John Smith", email: "john@example.com", phone: "+354 555 1234", people: 4, notes: "Anniversary trip" },
    { type: "tour", itemIndex: 1, date: new Date(now.getTime() + 5 * 86400000).toISOString().split("T")[0], name: "Anna Kowalska", email: "anna@example.com", phone: "+48 600 123 456", people: 2, notes: "" },
    { type: "car", itemIndex: 1, date: new Date(now.getTime() + 2 * 86400000).toISOString().split("T")[0], endDate: new Date(now.getTime() + 7 * 86400000).toISOString().split("T")[0], name: "Erik Magnússon", email: "erik@example.is", phone: "+354 777 8899", people: 1, notes: "Need child seat" },
  ];
  demoBookings.forEach((b) => addBooking(b));
  // mark one as confirmed
  const all = getBookings();
  if (all[0]) updateBookingStatus(all[0].id, "confirmed");
}
