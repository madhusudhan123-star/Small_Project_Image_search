import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';
const ImageGallery = ({search, setSearch}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if(search <= 0){
        setSearch = "nature"
    }
    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

        const options = {
            method: 'GET',
            url: `https://free-images-api.p.rapidapi.com/v2/${search || 'nature'}/1`, // Use search or default to 'nature'
            headers: {
            'X-RapidAPI-Key': 'e38a4e3c45msh11bab08ddec17efp13a8c5jsn059e8b3700f9',
            'X-RapidAPI-Host': 'free-images-api.p.rapidapi.com'
            }
        };


      try {
        const response = await axios.request(options);
        setImages(response.data.results);
      } catch (error) {
        setError('Error fetching images');
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
    console.log(images);
}, [search]);

if (isLoading) {
    return <div>Loading...</div>;
}

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(images);
  return (
    <div className='flex flex-col justify-center items-center gap-20'>
      <h1 className='text-3xl mb-10'>Image Gallery</h1>
      <div className='flex gap-10 flex-row flex-wrap justify-center'>
        {Array.isArray(images)   && images.length > 0 ? (
            images.map((images, index) => (
                <div>
                    <Cards index={index} key={images.id} imageUrl={images} />
                </div>
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;






{/* <div key={images.id}>
  <img src={images.image} alt={images.alt_description} />
  <p>{images.description}</p>
</div> */}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ImageGallery = ({ search, setSearch }) => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchImages = async () => {
//       setIsLoading(true);
//       setError(null);

//       const options = {
//         method: 'GET',
//         url: `https://free-images-api.p.rapidapi.com/v2/${search || 'nature'}/1`, // Use search or default to 'nature'
//         headers: {
//           'X-RapidAPI-Key': 'e38a4e3c45msh11bab08ddec17efp13a8c5jsn059e8b3700f9',
//           'X-RapidAPI-Host': 'free-images-api.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         if (response.data && Array.isArray(response.data.images)) {
//           setImages(response.data.images);
//         } else {
//           setError('Unexpected API response format');
//           console.log('Unexpected API response format:', response.data);
//         }
//       } catch (error) {
//         setError('Error fetching images');
//         console.error('Error fetching images:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchImages();
//   }, [search]); // Add search to the dependency array

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div>
//         {Array.isArray(images) && images.length > 0 ? (
//           images.map((image) => (
//             <div key={image.id}>
//               <img src={image.urls.regular} alt={image.description} />
//               <p>{image.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No images found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;