import {
  bookingEmail,
  bookingSchema,
  enquiryLimiter,
  handleEnquiry,
} from "@/lib/server/enquiry";

const limiter = enquiryLimiter();

/**
 * Booking, pilot and sector forms. Emailed through Resend to the same inbox as
 * /api/contact (CONTACT_EMAIL_TO, default info@nordoravital.com).
 */
export async function POST(request: Request) {
  return handleEnquiry(request, {
    kind: "booking",
    schema: bookingSchema,
    toEmail: bookingEmail,
    deps: { env: process.env, limiter },
  });
}
