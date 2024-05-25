import dbConnection from '@/lib/db_connection';
import User from '@/schemas/user';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, password } = await req.body;

  try {
    await dbConnection();
    console.log('name,password', name, password);

    console.log(name, password);

    if (!name || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({
      name: name,
      password: hashedPassword,
    });

    await user.save();

    return res.status(200).json({ message: 'User created successfully', user });
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      { error: 'An error occurred while creating the user' },
      {
        status: 500,
      }
    );
  }
}
