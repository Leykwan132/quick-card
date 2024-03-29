import { NextRequest, NextResponse } from "next/server";
import { PKPass } from "passkit-generator";
import { promises as fs } from "fs";

export interface RequestWithBody {
  body: BusinessPass;
}

type BusinessPass = {
  organizationName: string;
  description: string;
  logoText: string;
  barcodeLink: string;
  employeeStartYear: string;
  employeeName: string;
  employeeTitle: string;
};

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

// export async function GET(request: NextRequest) {
//   console.log("GET /api");
//   const [signerCert, signerKey, wwdr, signerKeyPassphrase] = await Promise.all([
//     fs.readFile("certs_test/signerCert.pem", "utf-8"),
//     fs.readFile("certs_test/signerKey.pem", "utf-8"),
//     fs.readFile("certs_test/WWDR.pem", "utf-8"),
//     Promise.resolve("123456"),
//   ]);

//   const pass = await PKPass.from({
//     model: "models/business.pass",
//     certificates: {
//       wwdr,
//       signerCert,
//       signerKey,
//       signerKeyPassphrase,
//     },
//   });

//   const stream = pass.getAsStream();

//   const res = new NextResponse(stream, {
//     // Create a new NextResponse for the file with the given stream from the disk
//     status: 200, //STATUS 200: HTTP - Ok
//     headers: new Headers({
//       //Headers
//       "content-disposition": `attachment; filename=test.pkpass`, //State that this is a file attachment
//       "content-type": pass.mimeType, //Set the file type to an iso
//     }),
//   });

//   return res;
// }

export async function POST(request: NextRequest) {
  try {
    // set type for request.body

    const data = await request.json();
    console.log(data.organizationName);
    const [signerCert, signerKey, wwdr, signerKeyPassphrase] =
      await Promise.all([
        fs.readFile("certs_test/signerCert.pem", "utf-8"),
        fs.readFile("certs_test/signerKey.pem", "utf-8"),
        fs.readFile("certs_test/WWDR.pem", "utf-8"),
        Promise.resolve("123456"),
      ]);
    // console.log(
    //   data.organizationName,
    //   data.description,
    //   data.logoText,
    //   data.barcodeLink,
    //   data.employeeStartYear,
    //   data.employeeName,
    //   data.employeeTitle
    // );
    const pass = await PKPass.from(
      {
        model: "models/business.pass",
        certificates: {
          wwdr,
          signerCert,
          signerKey,
          signerKeyPassphrase,
        },
      },
      {
        organizationName: data.organizationName,
        description: data.description,
        logoText: data.logoText,
      }
    );

    pass.setBarcodes({
      message: data.barcodeLink,
      format: "PKBarcodeFormatQR",
    });

    pass.headerFields.push({
      key: "header-name",
      textAlignment: "PKTextAlignmentRight",
      label: "Employee since",
      value: data.employeeStartYear,
    });

    pass.secondaryFields.push({
      key: "name",
      label: "Name",
      value: data.employeeName,
    });

    pass.auxiliaryFields.push({
      key: "level",
      label: "Title",
      value: data.employeeTitle,
    });

    pass.backFields.push({
      label: "Holidays left",
      key: "holiday",
      value: 20,
    });

    const stream = pass.getAsStream();

    const res = new NextResponse(stream, {
      // Create a new NextResponse for the file with the given stream from the disk
      status: 200, //STATUS 200: HTTP - Ok
      headers: new Headers({
        //Headers
        "content-disposition": `attachment; filename=test.pkpass`, //State that this is a file attachment
        "content-type": pass.mimeType, //Set the file type to an iso
      }),
    });

    return res;
  } catch (error) {
    console.log(error);
    return new NextResponse(error, {
      status: 500,
    });
  }
}
