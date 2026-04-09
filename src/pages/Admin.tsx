import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Booking, BookingStatus, getBookings, updateBookingStatus, deleteBooking,
  getBlockedDates, addBlockedDate, removeBlockedDate,
  adminLogin, isAdminLoggedIn, adminLogout, seedDemoData,
} from "@/lib/store";
import { translations as tr } from "@/i18n/translations";
import { LogOut, Trash2, CalendarX, Shield } from "lucide-react";

const statusColors: Record<BookingStatus, string> = {
  new: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  confirmed: "bg-green-500/20 text-green-400 border-green-500/30",
  completed: "bg-muted text-muted-foreground border-border",
  cancelled: "bg-destructive/20 text-destructive border-destructive/30",
};

const tourNames = tr.tours.items.map((t) => t.title.en);

function getItemName(idx: number) {
  return tourNames[idx] || "Tour";
}

export default function Admin() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(isAdminLoggedIn());
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [blocked, setBlocked] = useState(getBlockedDates());

  useEffect(() => { seedDemoData(); }, []);

  useEffect(() => {
    if (authed) setBookings(getBookings());
  }, [authed]);

  const refresh = () => {
    setBookings(getBookings());
    setBlocked(getBlockedDates());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(email, pass)) {
      setAuthed(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleStatusChange = (id: string, status: BookingStatus) => {
    updateBookingStatus(id, status);
    refresh();
  };

  const handleDelete = (id: string) => {
    deleteBooking(id);
    refresh();
  };

  const handleLogout = () => {
    adminLogout();
    setAuthed(false);
  };

  const filteredBookings = filter === "all" ? bookings : bookings.filter((b) => b.status === filter);

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="text-center">
            <Shield className="w-10 h-10 text-primary mx-auto mb-2" />
            <CardTitle className="font-heading">Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label>Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@nordan.is" />
              </div>
              <div>
                <Label>Password</Label>
                <Input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••" />
              </div>
              {loginError && <p className="text-sm text-destructive">Invalid credentials</p>}
              <Button type="submit" className="w-full">Log in</Button>
              <p className="text-xs text-muted-foreground text-center mt-2">Demo: admin@nordan.is / nordan2024</p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <h1 className="font-heading text-xl font-bold flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" /> Norðan Admin
        </h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>← Site</Button>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="bookings">Bookings ({bookings.length})</TabsTrigger>
            <TabsTrigger value="blocked">Blocked dates ({blocked.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <div className="flex gap-2 items-center">
              <span className="text-sm text-muted-foreground">Filter:</span>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tour</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>People</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.length === 0 ? (
                    <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No bookings</TableCell></TableRow>
                  ) : filteredBookings.map((b) => (
                    <TableRow key={b.id}>
                      <TableCell className="font-medium">{getItemName(b.itemIndex)}</TableCell>
                      <TableCell>
                        <div className="text-sm">{b.name}</div>
                        <div className="text-xs text-muted-foreground">{b.email}</div>
                      </TableCell>
                      <TableCell className="text-sm">{b.date}</TableCell>
                      <TableCell>{b.people}</TableCell>
                      <TableCell>
                        <Select value={b.status} onValueChange={(v) => handleStatusChange(b.id, v as BookingStatus)}>
                          <SelectTrigger className={`w-28 h-7 text-xs border ${statusColors[b.status]}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => handleDelete(b.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="blocked" className="space-y-4">
            <BlockedDatesManager blocked={blocked} onRefresh={refresh} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function BlockedDatesManager({ blocked, onRefresh }: { blocked: ReturnType<typeof getBlockedDates>; onRefresh: () => void }) {
  const [itemIdx, setItemIdx] = useState(0);
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleAdd = () => {
    if (!date) return;
    addBlockedDate({ type: "tour", itemIndex: itemIdx, date, reason });
    setDate("");
    setReason("");
    onRefresh();
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader><CardTitle className="text-sm font-heading">Add blocked date</CardTitle></CardHeader>
        <CardContent className="flex flex-wrap gap-3 items-end">
          <div>
            <Label className="text-xs">Tour</Label>
            <Select value={String(itemIdx)} onValueChange={(v) => setItemIdx(+v)}>
              <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                {tourNames.map((n, i) => <SelectItem key={i} value={String(i)}>{n}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs">Date</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-36" />
          </div>
          <div>
            <Label className="text-xs">Reason</Label>
            <Input value={reason} onChange={(e) => setReason(e.target.value)} placeholder="e.g. Bad weather" className="w-40" />
          </div>
          <Button size="sm" onClick={handleAdd} disabled={!date}>
            <CalendarX className="w-4 h-4 mr-1" /> Block
          </Button>
        </CardContent>
      </Card>

      <div className="rounded-lg border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blocked.length === 0 ? (
              <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground py-8">No blocked dates</TableCell></TableRow>
            ) : blocked.map((bd) => (
              <TableRow key={bd.id}>
                <TableCell>{getItemName(bd.itemIndex)}</TableCell>
                <TableCell>{bd.date}</TableCell>
                <TableCell className="text-muted-foreground">{bd.reason}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => { removeBlockedDate(bd.id); onRefresh(); }}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
