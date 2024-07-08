import dbConnection from '@/lib/db_connection';
import User from '@/schemas/user';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();

  try {
    await dbConnection();
    console.log('name,password', name, password);

    console.log(name, password);

    if (!name || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let user = new User({
      name: name,
      password: hashedPassword,
    });

    await user.save();

    return NextResponse.json(
      { message: 'User created successfully', user },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json(
      {
        error: 'An error occurred while creating the user',
      },
      {
        status: 500,
      }
    );
  }
}
