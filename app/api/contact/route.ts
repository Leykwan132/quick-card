import { NextRequest, NextResponse } from "next/server";
import { Contact } from "../../shared/contact";
import { promises as fs } from "fs";

const https = require("https");
async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = (await request.json()) as Contact;
  var vCardsJS = require("vcards-js");

  //create a new vCard
  var vCard = vCardsJS();

  //set properties
  vCard.firstName = "Ley Kwan";
  vCard.lastName = "Choo";
  vCard.organization = "Quickcard";

  vCard.title = "Founder";

  vCard.note = "Call me on Tuesday or WhatsApp only.";
  //set email addresses
  vCard.workEmail = "lchoo2@wisc.edu";
  vCard.cellPhone = "+1608-960-0349";

  //set social media URLs
  vCard.socialUrls["LinkedIn"] =
    "https://www.linkedin.com/in/ley-kwan-choo-129678228/";
  vCard.socialUrls["Github"] = "https://github.com/Leykwan132";
  vCard.socialUrls["Personal"] =
    "https://personal-website-inky-eta.vercel.app/";
  vCard.socialUrls["Company"] = "https://personal-website-inky-eta.vercel.app/";

  //fetch photo from url and convert to base64
  const response_image = await fetch(
    "https://xsgames.co/randomusers/avatar.php?g=pixel"
  );
  const imageBuffer = await response_image.arrayBuffer();
  const base64Data = Buffer.from(imageBuffer).toString("base64");

  vCard.photo.embedFromString(base64Data, "image/png");
  vCard.logo.embedFromString(base64Data, "image/png");

  let vCardString = vCard.getFormattedString();
  vCardString = vCardString.replace(
    /SOCIALPROFILE;CHARSET=UTF-8;/gm,
    "SOCIALPROFILE;"
  );

  const res = new NextResponse(vCardString, {
    // Create a new NextResponse for the file with the given stream from the disk
    status: 200, //STATUS 200: HTTP - Ok
    headers: new Headers({
      //Headers
      "content-disposition": 'inline; filename="enesser.vcf"', //State that this is a file attachment
      "content-type": 'text/vcard; name="enesser.vcf"', //Set the file type to an iso
    }),
  });

  return res;
}
