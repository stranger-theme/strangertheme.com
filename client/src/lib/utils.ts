import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "@/hooks/use-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Copies text and reports the result in a toast, which screen readers announce. */
export async function copyWithToast(text: string, title: string, failTitle: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast({ title, description: text })
  } catch {
    toast({ variant: "destructive", title: failTitle })
  }
}
