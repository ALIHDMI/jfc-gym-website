"use client";

import Image from "next/image";
import Link from "next/link";

import { CONTACTS } from "@/content/contacts";
import { cn } from "@/lib/cn";

type FloatingWhatsAppButtonProps = {
  className?: string;
};

export function FloatingWhatsAppButton({ className }: FloatingWhatsAppButtonProps) {
  return (
    <Link
      href={CONTACTS.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className={cn(
        "fixed bottom-5 right-5 z-50",
        "inline-flex h-14 w-14 overflow-hidden rounded-2xl",
        "bg-[#25D366] ring-1 ring-black/10",
        "shadow-[0_18px_40px_rgba(37,211,102,0.22)]",
        "transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(37,211,102,0.28)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-jfc-bg",
        className,
      )}
    >
      <Image
        src="/assets/icons/whatsapp.jpg"
        alt="WhatsApp"
        fill
        sizes="56px"
        className="object-cover"
        priority
      />
    </Link>
  );
}

