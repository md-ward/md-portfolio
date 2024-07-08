import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export function GET(req: NextApiRequest) {
  console.log(req.method);

  const filePath = path.join(process.cwd(), './cv.pdf'); // Replace with the actual file path

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return NextResponse.json(
        { error: 'Failed to download CV' },
        { status: 500 }
      );
    }

    headers().set('Content-Type', 'application/pdf');
    headers().set('Content-Disposition', 'attachment; filename=cv.pdf');
    // setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
    return NextResponse.json(data);
  });
}
