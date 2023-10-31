import {NextRequest,NextResponse} from "next/server"

export function GET(){
   return NextResponse.json([
    {id:1,name:"Waleed"},
    {id:2,name:"Usman"}
   ])
}