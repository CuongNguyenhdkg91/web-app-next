import { NextResponse } from "next/server";
import prisma from "../../../prisma/prismadb";

export async function PUT(request:Request,) {
    const body = await request.json()
    const {id,published} = body
    
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {NextResponse.error()}
      })

      const result = await prisma.post.update({
        where: {id},
        data: {
          published,
        }
      })

      return NextResponse.json(result)
    }
