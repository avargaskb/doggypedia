import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {

    try{
        const breedsReq = await fetch("https://api.thedogapi.com/v1/breeds");
        const breedsRes = await breedsReq.json();
        
        return NextResponse.json({statusCode: 200, breeds: breedsRes});
    } catch(error) {
        return NextResponse.json({statusCode: 500, error});
    }

}
