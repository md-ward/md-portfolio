import dbConnection from '@/lib/db_connection';
import User from '@/schemas/user';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

/**
 * Handles the POST request for user login.
 *
 * @param {NextRequest} req - The request object containing the user's name and password.
 * @return {Promise<NextResponse>} A promise that resolves to a NextResponse object with the login result.
 * If the user's name or password is missing, a JSON response with an error message and status code 400 is returned.
 * If the user is not found, a JSON response with an error message and status code 404 is returned.
 * If the user's password is invalid, a JSON response with an error message and status code 401 is returned.
 * If the login is successful, a JSON response with a success message and a Set-Cookie header containing the user's token is returned.
 * If an error occurs during the login process, a JSON response with an error message and status code 500 is returned.
 */
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

    const user = await User.findOne({ name: name });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    } else if (!bcrypt.compareSync(password, user.password)) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    cookies().set({
      name: 'token',
      value: user._id,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    });

    return NextResponse.json(
      { message: 'User logged in   successfully' },
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
