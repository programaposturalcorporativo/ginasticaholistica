
import { GoogleGenAI } from "@google/genai";

export const getPosturalAdvice = async (userMessage: string) => {
  try {
    // Inicializa o cliente dentro da função para garantir que pegue a variável de ambiente mais recente
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Você é o Assistente Postural da plataforma da Renata Couto.
        Seu objetivo é dar orientações rápidas e seguras sobre ergonomia, postura e exercícios de Ginástica Holística.
        Diretrizes:
        1. Seja encorajador e profissional.
        2. Mencione que você é um assistente baseado na metodologia da Renata Couto (CREF 023336-G/SP).
        3. Se o usuário relatar dor aguda ou trauma recente, recomende SEMPRE procurar um médico ou fisioterapeuta.
        4. Sugira pausas ativas rápidas (ex: rodar ombros, alongar pescoço).
        5. Mantenha as respostas concisas.`,
        temperature: 0.7,
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, estou com dificuldade de conexão agora. Verifique se a sua chave de API está configurada corretamente nas variáveis de ambiente ou tente novamente em breve.";
  }
};
