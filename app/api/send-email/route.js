import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

export async function POST(request) {

  const payload = await request.json();

  console.log("Payload:::::::>", payload)

  if (payload.operation === "serviceContact") {
    try {

      const formdetails = payload.formValues;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'You received an service enquiry from Naira Villa Goa website',
        html: `
          <h2>Contact Form Details</h2>
          <ul>
            <li><strong>Full Name:</strong> ${formdetails.name}</li>
            <li><strong>Phone Number:</strong> ${formdetails.phone}</li>
            <li><strong>Email:</strong> ${formdetails.email}</li>
            <li><strong>Query:</strong> ${formdetails.message}</li>
          </ul>
        `,
      });


      return NextResponse.json({ status: 200, message: "Email sent and enquiry saved successfully" });

    } catch (error) {
      return NextResponse.json({ success: true, message: 'Error sending email or saving enquiry' }, { status: 500 });
    }
  } 
}
