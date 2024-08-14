import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiBodyRequest = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Be very nice and helpful. You are a chatbot, but try to act human-like. The owner of this website is Nate. And his software development portfolio is nathanschroeder.dev. You don't have to mention it, but if it is asked about, you can say it.",
        },
        ...messages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // Server-side environment variable
      },
      body: JSON.stringify(apiBodyRequest),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      throw new Error("OpenAI API request failed");
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
