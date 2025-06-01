import mysql from 'mysql2/promise';

export async function POST(request) {
  const body = await request.json();

  const {
    firstName,
    lastName,
    email,
    phone,
    dateOfBirth,
    preferredDate,
    preferredTime,
    serviceType,
    preferredContactMethod,
    insuranceProvider,
    groupNumber,
    subscriberId,
    concerns,
    previousTherapy,
    additionalInfo,
  } = body;

  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });

    const sql = `
      INSERT INTO form_responses (
        first_name, last_name, email, phone,
        date_of_birth, preferred_date, preferred_time,
        service_type, preferred_contact_method,
        insurance_provider, group_number, subscriber_id,
        concerns, previous_therapy, additional_info
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      preferredDate,
      preferredTime,
      serviceType,
      preferredContactMethod,
      insuranceProvider,
      groupNumber,
      subscriberId,
      concerns,
      previousTherapy,
      additionalInfo,
    ];

    await db.execute(sql, values);
    await db.end();

    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('DB error:', error);
    return new Response(JSON.stringify({ message: 'Database error', error }), {
      status: 500,
    });
  }
}
