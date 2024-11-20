import axios from 'axios';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbz11FNu4vphfzd1ZQHBF7OuAXaBbbbbySXB-LKi4s02BZooydWyBFKLDotiFWHJf0aD/exec';

export async function POST(request) {
  const data = await request.json();

  try {
    const response = await axios.post(GOOGLE_SHEET_URL, data);
    return new Response(JSON.stringify({ message: 'Success', data: response.data }), { status: 200 });
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return new Response(JSON.stringify({ message: 'Error', error: error.message }), { status: 500 });
  }
}