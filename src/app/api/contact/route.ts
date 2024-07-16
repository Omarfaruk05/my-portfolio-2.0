import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");


export async function POST(request: NextRequest) {
    const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const transporter = nodemailer.createTransport({
        host: '',
        potr: 587,
        secure: false,
        auth: {
            user: username,
            pass: password,
        }
    });

    try {
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replayTo: email,
            subject: `Website activity from ${email}`,
            html:
                `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>`,

        })

        return NextResponse.json({message:'Success:email was sent'})
    } catch (error) {
        console.log(error)
        NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
    }
}