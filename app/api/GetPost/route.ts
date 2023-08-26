import prisma from "../../../prisma/prismadb";
import { NextResponse } from "next/server";


export async function GET(req: Request,) {
      const records = await prisma.post.findMany({

      })
      
      return NextResponse.json(records)
    }

