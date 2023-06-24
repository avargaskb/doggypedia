import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	try {
		const secret:string | undefined = process.env.APIDOG_KEY;
		const breedId = request.nextUrl.searchParams.get('breedId');

		const url =
			!breedId || breedId === '0'
				? 'https://api.thedogapi.com/v1/images/search'
				: 'https://api.thedogapi.com/v1/images/search?breed_ids=' + breedId;

		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'x-api-key': secret!,
			},
		});
		const [data] = await res.json();
		let {
			url: image,
			breeds: [breed],
		} = data;

		if (!breed) {
			breed = {
				id: 0,
				name: 'Random',
			};
		}

		const dogData = {
			image,
			breed,
		};

        return NextResponse.json({ statusCode: 200, data: dogData });
	} catch(error) {
        console.log(error)
		return NextResponse.json({ statusCode: 500, error });
	}
}
