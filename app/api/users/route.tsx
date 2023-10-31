import {NextRequest,NextResponse} from "next/server"
import schema from "./schema"

export function GET(request: NextRequest){
   return NextResponse.json([
    {id:1,name:"Waleed"},
    {id:2,name:"Usman"}
   ])
}

export async function POST(request: NextRequest){
    const body = await request.json()
    const validae = schema.safeParse(body)
    if(!validae.success) return NextResponse.json(validae.error.errors,{status:400})
    return NextResponse.json({id:1,name:body.name},{status:201})
}