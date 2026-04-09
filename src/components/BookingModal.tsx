import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { t, Lang } from "@/i18n/translations";
import { addBooking, isDateBlocked } from "@/lib/store";
import { CalendarCheck, CheckCircle2 } from "lucide-react";

const labels: Record<string, Record<Lang, string>> = {
  title: { en: "Book tour", pl: "Zarezerwuj wycieczkę", is: "Bóka ferð" },
  date: { en: "Date", pl: "Data", is: "Dagsetning" },
  name: { en: "Full name", pl: "Imię i nazwisko", is: "Fullt nafn" },
  email: { en: "Email", pl: "Email", is: "Tölvupóstur" },
  phone: { en: "Phone", pl: "Telefon", is: "Sími" },
  people: { en: "Number of people", pl: "Liczba osób", is: "Fjöldi" },
  notes: { en: "Notes (optional)", pl: "Uwagi (opcjonalnie)", is: "Athugasemdir" },
  submit: { en: "Confirm booking", pl: "Potwierdź rezerwację", is: "Staðfesta bókun" },
  success: { en: "Booking confirmed!", pl: "Rezerwacja potwierdzona!", is: "Bókun staðfest!" },
  successDesc: { en: "We'll contact you shortly.", pl: "Skontaktujemy się wkrótce.", is: "Við munum hafa samband fljótlega." },
  blocked: { en: "This date is unavailable", pl: "Ten termin jest niedostępny", is: "Þessi dagur er ekki laus" },
  close: { en: "Close", pl: "Zamknij", is: "Loka" },
};

interface Props {
  open: boolean;
  onClose: () => void;
  itemIndex: number;
  itemName: string;
}

export default function BookingModal({ open, onClose, itemIndex, itemName }: Props) {
  const { lang } = useLanguage();
  const [step, setStep] = useState<"form" | "success">("form");
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(1);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    const dateStr = date.toISOString().split("T")[0];
    if (isDateBlocked("tour", itemIndex, dateStr)) {
      setError(t(labels.blocked, lang));
      return;
    }
    addBooking({
      type: "tour",
      itemIndex,
      date: dateStr,
      name,
      email,
      phone,
      people,
      notes,
    });
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setDate(undefined);
    setName("");
    setEmail("");
    setPhone("");
    setPeople(1);
    setNotes("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        {step === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-primary" />
            <h3 className="font-heading text-2xl font-bold">{t(labels.success, lang)}</h3>
            <p className="text-muted-foreground font-body">{t(labels.successDesc, lang)}</p>
            <Button onClick={handleClose} className="mt-4">{t(labels.close, lang)}</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-primary" />
                {t(labels.title, lang)}
              </DialogTitle>
              <DialogDescription className="font-body">{itemName}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="font-body text-sm">{t(labels.date, lang)}</Label>
                <div className="flex justify-center mt-1">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => { setDate(d); setError(""); }}
                    disabled={(d) => d < new Date()}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="font-body text-sm">{t(labels.name, lang)}</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <Label className="font-body text-sm">{t(labels.phone, lang)}</Label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="font-body text-sm">{t(labels.email, lang)}</Label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <Label className="font-body text-sm">{t(labels.people, lang)}</Label>
                  <Input type="number" min={1} max={20} value={people} onChange={(e) => setPeople(+e.target.value)} required />
                </div>
              </div>

              <div>
                <Label className="font-body text-sm">{t(labels.notes, lang)}</Label>
                <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} />
              </div>

              {error && <p className="text-sm text-destructive font-body">{error}</p>}

              <Button type="submit" className="w-full" disabled={!date}>
                {t(labels.submit, lang)}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
