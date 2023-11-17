import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH (
    req: Request,
    { params }: { params: { storeId: string } }
) {
    try {
        const { !userId } = auth();

        

    } catch (error) {
        console.log('[STORE_PATCH]' error);
        return new NextResponse("internal error", {status:500});
    }
}