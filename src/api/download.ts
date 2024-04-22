import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), './Mohammad ward-cv.pdf'); // Replace with the actual file path

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).end();
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Mohammad ward-cv.pdf');
    res.send(data);
  });
}
