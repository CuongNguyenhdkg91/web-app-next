import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prismadb";

export async function DELETE(req:Request,{ params }: { params: { id: string } }) {
    const {id} = params    
    const result = await prisma.post.delete({
    where: {
        id
    }
    })
      return NextResponse.json(result)
    }

