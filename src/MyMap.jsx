import React, { useCallback, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { googleMapApiKey } from './conf';

const MyMap = () => {
    const containerStyle = {
        width: '100%',
        height: '100%'
    };

    const center = {
        lat: 23.29300,
        lng: 85.30000
    };
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapApiKey
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback((map) => {

    }, [])

    const onUnmount = useCallback((map) => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default MyMap