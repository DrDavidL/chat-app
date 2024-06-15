import OpenAI from "openai";

const openai = new OpenAI();

export const fetchChatbotResponse = async (prompt) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": prompt }
      ],
      stream: true,
    });

    let response = '';
    for await (const chunk of completion) {
      response += chunk.choices[0].delta.content;
    }
    return response.trim();
  } catch (error) {
    console.error('Error fetching chatbot response:', error.response ? error.response.data : error.message);
    return 'Sorry, there was an error.';
  }
};
