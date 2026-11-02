import {
  contactEmail,
  contactSchema,
  enquiryLimiter,
  handleEnquiry,
} from "@/lib/server/enquiry";

const limiter = enquiryLimiter();

/**
 * Sends enquiries to CONTACT_EMAIL_TO (default info@nordoravital.com) through Resend.
 * Set RESEND_API_KEY and a verified CONTACT_EMAIL_FROM in production.
 */
export async function POST(request: Request) {
  return handleEnquiry(request, {
    kind: "contact",
    schema: contactSchema,
    toEmail: contactEmail,
    deps: { env: process.env, limiter },
  });
}
