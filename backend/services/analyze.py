from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

def analyze_sales_call(transcript):

    prompt = f"""
    Analyze this sales call transcript.

    Give:
    1. Customer Intent
    2. Sentiment
    3. Main Objections
    4. Buying Signals
    5. Closing Probability
    6. Suggested Follow-Up

    Transcript:
    {transcript}
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content