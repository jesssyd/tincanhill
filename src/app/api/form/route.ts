import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    let emailBody = '';
    for (const key in data) {
      emailBody += `${key}: ${data[key]}\n`; 
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tincanhillyellowknife@gmail.com",
        pass: "aoja ysns igkn lrqi",
      },
    });

    const mailOptions = {
      from: "tincanhillyellowknife@gmail.com",
      to: "tincanhillyellowknife@gmail.com",
      subject: "Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfuly" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
