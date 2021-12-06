import React, { useEffect, useState }  from 'react';

const Cards = ({ categoria }) => {
    
    const [stateImages, setStateImages] = useState([])

    useEffect(() => {
        imgGif(categoria)
        .then(imgData => setStateImages(imgData))
    }, [categoria])

    const imgGif = async (categoria) => {
        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=20&api_key=EFGov3HYBS8xO76YqE4uOZ8N3ODTW2SN`
        const resp = await fetch(url)
        const { data } = await resp.json()
        //console.log(data)

        const imgData = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return imgData
    }

    return (
        categoria !== undefined ?
            <ol>
                {
                    stateImages.map((img) => (
                        <li key={img.id}>
                            <h3>{img.title}</h3>
                            <img src={img.url} alt={img.title} />
                        </li>
                    ))
                }
                </ol>
                :
                null
    )
}

export default Cards