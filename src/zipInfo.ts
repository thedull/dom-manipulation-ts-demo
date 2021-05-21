const getZipInfo = async (code: string) => 
    await fetch(`http://ZiptasticAPI.com/${code}`);

export default getZipInfo;