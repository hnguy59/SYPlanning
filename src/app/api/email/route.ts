import sendgrid, { MailDataRequired } from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    await sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

    const { email, subject, message } = await request.json()
    const emailSubject = `${subject} - ${email}`

    const msg = {
      to: 'services@syplanning.com.au',
      from: 'riripishu@gmail.com',
      html: `<p>${message}</p>`,
      text: message,
      subject: emailSubject,
    } as MailDataRequired

    const response = await sendgrid.send(msg)

    return new Response(response[0].body as any, {
      status: response[0].statusCode,
      headers: response[0].headers,
    })
  } catch (err) {
    const error = err as any

    return new Response(JSON.stringify({ message: error.message, response: error.response }), {
      status: error.code,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
