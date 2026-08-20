"use server";

import { resend } from "@/lib/resend";

type SendEmailResult = {
  success: boolean;
  error?: string;
};

export async function sendContactEmail(
  _prevState: SendEmailResult | null,
  formData: FormData
): Promise<SendEmailResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "natiman075@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Something went wrong.",
    };
  }
}
