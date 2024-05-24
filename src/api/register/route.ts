import { NextResponse } from 'next/server';
import { connectDb } from '../../../helpers/server-helper';
import prisma from '../../../prisma';

export async function POST(req: Request) {
  console.log(req.method);
  return NextResponse.json({ message: req.method, reqBody: 'post' });

  const { name, email, password } = await req.json();

  try {
    console.log('name,email', name, email);

    console.log(name, email);

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        {
          status: 400,
        }
      );
    }

    await connectDb();
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(
      { message: 'User created successfully', user },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'An error occurred while creating the user' },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request) {
  console.log(req.method);
  return NextResponse.json({ message: req.method, reqBody: 'get' });
}
