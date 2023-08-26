import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')
    try {
        const categories = await prisma.product.findMany({
            where: {
                ...(cat ? { catSlug: cat } : { isFeatured: true }),
            }
        })
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({ message: "Some thing went wrong" }, { status: 500 })

    }
}

export const POST = () => {
    return new NextResponse("Hello", { status: 200 })
}