import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message }: ContactFormData = await req.json();

    console.log("Processing contact form submission from:", email);

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Todos os campos obrigatórios devem ser preenchidos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Build email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2d5a27;">Nova mensagem do formulário de contato</h2>
        <hr style="border: 1px solid #e5e7eb;" />
        
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
        <p><strong>Assunto:</strong> ${subject}</p>
        
        <h3 style="color: #2d5a27; margin-top: 24px;">Mensagem:</h3>
        <div style="background-color: #f9fafb; padding: 16px; border-radius: 8px;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: 1px solid #e5e7eb; margin-top: 24px;" />
        <p style="color: #6b7280; font-size: 12px;">
          Esta mensagem foi enviada através do formulário de contato do FitoPlantaMed.
        </p>
      </div>
    `;

    console.log("Sending email via Resend...");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FitoPlantaMed <onboarding@resend.dev>",
        to: ["fito.planta.med@gmail.com"],
        subject: `[FitoPlantaMed] ${subject}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error(`Failed to send email: ${errorData}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(
      JSON.stringify({ success: true, message: "Mensagem enviada com sucesso!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Erro ao enviar mensagem" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
