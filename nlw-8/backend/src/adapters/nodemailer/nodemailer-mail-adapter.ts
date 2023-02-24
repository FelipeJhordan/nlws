import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "cd9be11be81aa7",
      pass: "321a78df7a304b"
    }
  });


export class NodeMailerMailAdapter implements MailAdapter {
    async  sendMail ({subject, body}: SendMailData)   {
            await transport.sendMail({
        from: 'Equipe Feedget <oi@geedget.com>',
        to: 'Diego Fernandes <felipejhordan.alves@gmail.com>',
        subject,
        html: body
    })

    };
}