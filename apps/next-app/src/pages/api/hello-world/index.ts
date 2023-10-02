/* eslint-disable @typescript-eslint/require-await */
import { type NextApiRequest, type NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const helloWorld = async (request: NextApiRequest, response: NextApiResponse): Promise<void> => {
  const { query } = request;

  response.status(200).json({ hello: 'world' });
};
export default helloWorld;