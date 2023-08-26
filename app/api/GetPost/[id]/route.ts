import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismadb";

export async function GET(req:Request,{ params }: { params: { id: string } }) {
    const {id} = params    
    const result = await prisma.post.findMany({
/*     where: {
        id
    } */
    })
      return NextResponse.json(result)
    }

