// supabase/functions/create-infinitepay-link/index.ts
// Edge Function que serve como proxy para a API da InfinitePay
// Isso resolve o problema de CORS pois a chamada é feita server-side (Deno)

// @ts-nocheck — Este arquivo roda no Deno (Supabase Edge Functions), não no Node.js
// Os tipos do Deno não estão disponíveis localmente, mas funcionam no deploy

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, apikey",
};

Deno.serve(async (req: Request): Promise<Response> => {
  // Responde preflight CORS (OPTIONS)
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Método não permitido" }),
      { status: 405, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }

  try {
    const body = await req.json();
    const payload = body.payload;

    if (!payload || !payload.handle || !payload.items) {
      return new Response(
        JSON.stringify({ error: "Payload inválido: handle e items são obrigatórios" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Faz a chamada para a API da InfinitePay (server-side, sem CORS)
    const infinitePayResponse = await fetch(
      "https://api.infinitepay.io/invoices/public/checkout/links",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const responseText = await infinitePayResponse.text();
    let responseData;

    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = { raw: responseText };
    }

    if (!infinitePayResponse.ok) {
      console.error("InfinitePay API error:", infinitePayResponse.status, responseText);
      return new Response(
        JSON.stringify({
          error: responseData.message || `Erro ${infinitePayResponse.status} da InfinitePay`,
          details: responseData,
        }),
        {
          status: infinitePayResponse.status,
          headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
        }
      );
    }

    // Retorna a resposta da InfinitePay para o frontend
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge Function error:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno no proxy", message: String(err) }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
});
