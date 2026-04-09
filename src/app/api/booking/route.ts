import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().optional(),
  message: z.string().optional(),
  professionalCategory: z.string().optional(),
  sectorSlug: z.string().optional(),
  sector: z.string().optional(),
  preferredStart: z.string().optional(),
  questions: z.string().optional(),
  source: z.string().optional(),
});

/**
 * Demo endpoint: replace with email provider, CRM, or CMS workflow.
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bodySchema.parse(json);
    console.info("[booking demo]", data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
