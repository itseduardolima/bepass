import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const baseCurrency = searchParams.get('base') || 'BRL';

  const apiKey = process.env.EXCHANGE_RATE_API_KEY;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result === 'success') {
      return NextResponse.json(data.conversion_rates);
    } else {
      throw new Error('Failed to fetch exchange rates');
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return NextResponse.json({ error: 'Failed to fetch exchange rates' }, { status: 500 });
  }
}

