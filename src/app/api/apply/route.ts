import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Hostinger email credentials
const EMAIL_USER = "career@dcodestech.com";   // <-- tamaru Hostinger email
const EMAIL_PASSWORD = "Car##r@82!0";          // <-- e email nu normal login password
const ADMIN_EMAIL = "hr@dcodestech.com";       // <-- notification jya jase

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, position, message } = body;

    if (!name || !email || !position) {
      return NextResponse.json(
        { success: false, error: "Name, email and position required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    // 1. Candidate ko acknowledgment mail
    await transporter.sendMail({
      from: `"Dcodes Technologies" <${EMAIL_USER}>`,
      to: email,
      subject: "We've received your application - Dcodes Technologies",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #222;">
          <h2>Hi ${name},</h2>
          <p>Thank you for applying for the <b>${position}</b> position at Dcodes Technologies. We're excited that you're interested in joining our team.</p>
          <p>We've successfully received your application along with your resume. Our HR team will now carefully review your profile against the requirements for this role.</p>
          <p>Here's what happens next:</p>
          <ul>
            <li>Our recruitment team will review your resume and application details.</li>
            <li>If your profile matches our requirements, we'll reach out to you to schedule the next round (screening call / technical interview).</li>
            <li>The entire review process usually takes a few business days, depending on the number of applications we receive.</li>
          </ul>
          <p>We truly appreciate the time and effort you've put into applying, and we'll make sure to get back to you with an update as soon as possible.</p>
          <p>In the meantime, if you have any questions about the position or the application process, feel free to reply to this email,  we're happy to help.</p>
          <br/>
          <p>Best regards,<br/>HR Team<br/>Dcodes Technologies</p>
        </div>
      `,
    });

    // 2. HR/Admin ko notification mail
    await transporter.sendMail({
      from: `"Career Portal" <${EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Application: ${position} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2>New Job Application</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Position:</b> ${position}</p>
          <p><b>Message:</b> ${message || "N/A"}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}