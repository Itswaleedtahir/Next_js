import { NextRequest,NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest){
    return NextResponse.json([
     {id:1,name:"Milk",price:2.5},
     {id:2,name:"Bread",price:2.5}
    ])
 }

//POST Request
 export async function POST(request:NextRequest){
    const body = await request.json()
    const validae = schema.safeParse(body)
    if(!validae.success) return NextResponse.json(validae.error.errors,{status:400})
    return NextResponse.json({id:10, name:body.name, price: body.price},{status:201})
 }