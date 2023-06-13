

const getDog = async (breedId: any) => {
	const secret:any = process.env.NEXT_PUBLIC_APIDOG_KEY;

	const url =
		!breedId || breedId === 0
			? 'https://api.thedogapi.com/v1/images/search'
			: 'https://api.thedogapi.com/v1/images/search?breed_ids=' + breedId;

	const res = await fetch(url, {
		method: 'GET',
		headers: {
			'x-api-key': secret,
		},
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

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

	return dogData;
};

export default getDog;
