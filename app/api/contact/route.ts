import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Définir cette route comme dynamique pour permettre l'utilisation de request.json()
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Vérification des champs requis
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires" },
        { status: 400 }
      );
    }

    // Configuration du transporteur d'email avec les variables d'environnement
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Sujet du message basé sur la sélection
    const subjectMap: Record<string, string> = {
      general: "Renseignement général",
      demo: "Demande de démonstration",
      partnership: "Proposition de partenariat",
      support: "Support technique",
      other: "Autre demande",
    };

    // Construction du contenu de l'email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER, // Utilise l'email de contact dédié s'il existe, sinon l'email Gmail
      replyTo: email,
      subject: `[Contact Site Web] ${subjectMap[subject] || subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
          <p><strong>Sujet:</strong> ${subjectMap[subject] || subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
            Ce message a été envoyé depuis le formulaire de contact du site web Hauts Numériques et Médias.
          </p>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Email de confirmation à l'expéditeur
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Confirmation de votre message - Hauts Numériques et Médias",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Merci de nous avoir contactés !</h2>
          <p>Bonjour ${name},</p>
          <p>Nous avons bien reçu votre message concernant "${
            subjectMap[subject] || subject
          }".</p>
          <p>Notre équipe va l'examiner et vous répondra dans les plus brefs délais.</p>
          <p style="margin-top: 20px;">Cordialement,</p>
          <p><strong>L'équipe de Hauts Numériques et Médias</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi de votre message" },
      { status: 500 }
    );
  }
}
