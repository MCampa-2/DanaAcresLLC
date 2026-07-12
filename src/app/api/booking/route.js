import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      eventDate,
      eventType,
      eventLocation,
      message,
    } = body;

    const { data, error } = await resend.emails.send({
      from: "Dana Acres Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECIPIENT_EMAIL],
      replyTo: email,
      subject: "New Booking Request - Dana Acres",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Event Location:</strong> ${eventLocation}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.log("RESEND BOOKING ERROR:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}