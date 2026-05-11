"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import { LEAD_FORM } from "@/content/leadForm";
import { CONTACTS } from "@/content/contacts";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FieldWrapper, inputBase, textareaBase } from "@/components/ui/FormField";
import { cn } from "@/lib/cn";

type Status = "idle" | "loading" | "success" | "error";

async function submitLead(_payload: {
  name: string;
  phone: string;
  message: string;
}) {
  // Заготовка: здесь позже подключим API route / Telegram / email.
  await new Promise((r) => setTimeout(r, 650));
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+]/g, "");
}

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const canEdit = status === "idle" || status === "error";
  const isLoading = status === "loading";

  const phoneValue = useMemo(() => phone, [phone]);

  const validate = () => {
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Введите имя (минимум 2 символа).";
    if (normalizePhone(phone).length < 10)
      next.phone = "Введите корректный номер телефона.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setStatus("loading");
      await submitLead({ name: name.trim(), phone: phone.trim(), message: message.trim() });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="lead"
      variant="surface"
      ariaLabelledby="lead-title"
      withTopDivider
      withBottomDivider
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="lead-title"
              eyebrow="Связь"
              title={LEAD_FORM.title}
              description={LEAD_FORM.description}
            />
          </Reveal>

          <Reveal delay={0.04}>
            <div className="mt-8 grid gap-4 text-sm text-white/60">
              <div className="rounded-2xl border border-jfc-border bg-white/[0.02] p-5">
                <p className="text-white/85">Быстрый старт</p>
                <p className="mt-2 leading-6 text-jfc-muted">
                  Оставьте заявку — мы уточним цель и предложим удобное время для первого визита.
                </p>
              </div>
            {/* <div className="rounded-2xl border border-jfc-border bg-white/[0.02] p-5">
              <p className="text-white/85">Готово к интеграции</p>
              <p className="mt-2 leading-6 text-jfc-muted">
                Форма уже подготовлена под подключение отправки в Telegram/email/API.
              </p>
            </div> */}
            </div>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-jfc-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-8 h-56 w-56 rounded-full bg-jfc-accent-2/10 blur-3xl" />

          <Reveal delay={0.06}>
            <Card className="p-6 sm:p-7">
              {status === "success" ? (
                <div className="grid gap-3">
                  <p className="text-lg font-semibold text-white">{LEAD_FORM.successTitle}</p>
                  <p className="text-[15px] leading-7 text-jfc-muted">
                    {LEAD_FORM.successDescription}
                  </p>
                  <div className="mt-2">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setStatus("idle");
                        setName("");
                        setPhone("");
                        setMessage("");
                        setErrors({});
                      }}
                    >
                      Отправить ещё раз
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FieldWrapper
                    label={LEAD_FORM.fields.name.label}
                    htmlFor="lead-name"
                    error={errors.name}
                  >
                    <input
                      id="lead-name"
                      name="name"
                      autoComplete="name"
                      disabled={!canEdit}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={LEAD_FORM.fields.name.placeholder}
                      className={cn(inputBase, errors.name ? "border-jfc-accent/55" : "")}
                    />
                  </FieldWrapper>

                  <FieldWrapper
                    label={LEAD_FORM.fields.phone.label}
                    htmlFor="lead-phone"
                    error={errors.phone}
                  >
                    <input
                      id="lead-phone"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      disabled={!canEdit}
                      value={phoneValue}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={LEAD_FORM.fields.phone.placeholder}
                      className={cn(inputBase, errors.phone ? "border-jfc-accent/55" : "")}
                    />
                  </FieldWrapper>
                </div>

                <FieldWrapper
                  label={LEAD_FORM.fields.message.label}
                  htmlFor="lead-message"
                  hint={LEAD_FORM.helperNote}
                >
                  <textarea
                    id="lead-message"
                    name="message"
                    disabled={!canEdit}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={LEAD_FORM.fields.message.placeholder}
                    className={textareaBase}
                  />
                </FieldWrapper>

                {status === "error" ? (
                  <div className="rounded-xl border border-jfc-accent/25 bg-jfc-accent/10 p-4">
                    <p className="text-sm font-medium text-white">{LEAD_FORM.errorTitle}</p>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      {LEAD_FORM.errorDescription}
                    </p>
                  </div>
                ) : null}

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="grid gap-3">
                    <Button
                      type="submit"
                      className="w-full justify-center"
                      disabled={isLoading}
                    >
                      <Send className="h-4 w-4" />
                      {isLoading ? "Отправляем..." : LEAD_FORM.submitLabel}
                    </Button>
                    <Button
                      href={CONTACTS.whatsapp.href}
                      variant="secondary"
                      className="w-full justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </Button>
                  </div>
                </motion.div>
              </form>
            )}
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

