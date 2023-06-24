
const getDog = async (breedId: string) => {
    try {
        const res = await fetch(`/api/get-dog?breedId=${!breedId ? '0' : breedId}`);
        const breedsData = await res.json();
        return breedsData.data;

    } catch(error) {
        throw new Error('Failed to fetch data');        
    }
};

export default getDog;
