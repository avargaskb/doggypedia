const getBreeds = async () => {

    try {
        const res = await fetch('/api/get-breeds');
        const breedsData = await res.json();
        return breedsData.breeds;

    } catch(error) {
        throw new Error('Failed to fetch data');        
    }

};

export default getBreeds;
