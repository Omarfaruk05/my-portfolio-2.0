import Container from "@/components/shared/Container";
import Mail from "@/components/ui/Mail";
import Profiles from "@/components/ui/Profiles";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <Container>
      <div className="min-h-[75vh] ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-14 justify-center items-center md:justify-between my-12 px-2 lg:px-12">
          <div className="md:col-span-2 mt-4 space-y-12">
            <h2 className="text-xl uppercase font-semibold">Contact Me</h2>
            <div className="pt-4 space-y-5">
              <div className="flex gap-5">
                <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-3 rounded-md">
                  <p className="text-2xl mx-1">@</p>
                </div>
                <div>
                  <p className=" font-semibold">Email</p>
                  <p className="text-gray-400">mdomarfaruk149518@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-4 rounded-md">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className=" font-semibold">Phone</p>
                  <p className="text-gray-400">
                    +880156900262 , +8801941221528
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="flex justify-center items-center bg-gradient-to-r from-[#262626] to-[#181818] w-fit p-4 rounded-md">
                  <FaLocationDot className="w-6 h-6" />
                </div>
                <div>
                  <p className=" font-semibold">Location</p>
                  <p className="text-gray-400">Gazipur, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div>
              <Profiles />
            </div>
          </div>
          <div className="md:col-span-3 mt-4 space-y-3">
            <Mail />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;

// api/contact/route.ts
// import { NextRequest, NextResponse } from "next/server";
// const nodemailer = require("nodemailer");

// export async function POST(request: NextRequest) {
//     const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//     const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//     const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     const message = formData.get('message')

//     const transporter = nodemailer.createTransport({
//         host: '',
//         potr: 587,
//         secure: false,
//         auth: {
//             user: username,
//             pass: password,
//         }
//     });

//     try {
//         const mail = await transporter.sendMail({
//             from: username,
//             to: myEmail,
//             replayTo: email,
//             subject: `Website activity from ${email}`,
//             html:
//                 `<p>Name: ${name}</p>
//                 <p>Email: ${email}</p>
//                 <p>Message: ${message}</p>`,

//         })

//         return NextResponse.json({message:'Success:email was sent'})
//     } catch (error) {
//         console.log(error)
//         NextResponse.json({ message: "COULD NOT SEND MESSAGE" })
//     }
// }
