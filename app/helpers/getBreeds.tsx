const getBreeds = async () => {
	const res = await fetch('https://api.thedogapi.com/v1/breeds');
	
	if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    
    const breedsData = await res.json();

	return breedsData;
};

export default getBreeds;
