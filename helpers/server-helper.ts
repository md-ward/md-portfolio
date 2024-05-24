import prisma from '../prisma';
export const connectDb = async () => {
  try {
    await prisma.$connect();
  } catch (error) {
    console.log(error);

    throw Error('failed to connect to db');
  }
};
