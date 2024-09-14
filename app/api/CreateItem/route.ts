import { NextResponse } from "next/server";
import prisma from "../../../prisma/prismadb";

export async function POST(request:Request,) {
    const body = await request.json()
    const {title, publish, content} = body
    
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {NextResponse.error()}
      })

      const result = await prisma.post.create({
        data: {
          title,
          published: publish,
          content
        }
      })

      return NextResponse.json(result)
    }

