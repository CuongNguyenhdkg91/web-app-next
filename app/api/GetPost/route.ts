import prisma from "../../../prisma/prismadb";
import { NextResponse } from "next/server";

import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
      const records = await prisma.post.findMany({

      })
      
      return NextResponse.json(records)
    }

