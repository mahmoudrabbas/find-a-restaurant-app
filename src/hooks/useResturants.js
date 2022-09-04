
import { useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [result, setResult] = useState({
        data:null,
        loading:false,
        error:null
    });

    const getRestuarants = async (term) => {
        setResult({
            data:null,
            loading:true,
            error:null
        })
        try {
            const restaurants = await yelp.get(`/search`, {
                params: {
                    limit:20,
                    term,
                    location:"Chicago"
                }
            })
            setResult({
                data:restaurants.data.businesses,
                loading:false,
                error:null
            })
        } catch (error) {
            setResult({
                data:null,
                loading:false,
                error:"Something went wrong!"
            })
        }
    }

    return [result, getRestuarants]
}