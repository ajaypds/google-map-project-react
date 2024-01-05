import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import MarkerOverlay from './MarkerOverlay'
import { googleMapApiKey } from './conf'
import {
    bokaro, chatra, deoghar, dhanbad, dumka, eastSinghbhum, garhwa, giridih, godda, gumla, hazaribagh, jamtara, khunti, koderma, latehar, lohardaga, pakur, palamu, ramgarh, ranchi, sahibganj, serikelaKharsawan, simdega, westSinghbhum
} from './geojson/district-wise'

const MyMap2 = () => {
    const mapRef = useRef()
    const apiKey = googleMapApiKey
    const center = { lat: 23.29300, lng: 85.30000 }
    const center2 = { lat: 25, lng: 85.30000 }
    const center3 = { lat: 25, lng: 86.30000 }
    const center4 = { lat: 23.29300, lng: 86.30000 }
    const zoom = 16
    const fillOpacity = 0.2
    const strokeOpacity = 0.8
    const strokeWeight = 1
    const strokeColor = "#FF0000"
    const fillColor = "#FF0000"
    const polygonOptions = { strokeColor: strokeColor, strokeOpacity: strokeOpacity, strokeWeight: strokeWeight, fillColor: fillColor, fillOpacity: fillOpacity }
    const bokaroData = bokaro.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const chatraData = chatra.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const deogharData = deoghar.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const dhanbadData = dhanbad.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const dumkaData = dumka.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const eastSinghbhumData = eastSinghbhum.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const garhwaData = garhwa.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const giridihData = giridih.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const goddaData = godda.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const gumlaData = gumla.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const hazaribaghData = hazaribagh.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const jamtaraData = jamtara.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const khuntiData = khunti.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const kodermaData = koderma.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const lateharData = latehar.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const lohardagaData = lohardaga.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const pakurData = pakur.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const palamuData = palamu.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const ramgarhData = ramgarh.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const ranchiData = ranchi.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const sahibganjData = sahibganj.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const serikelaKharsawanData = serikelaKharsawan.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const simdegaData = simdega.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })
    const westSinghbhumData = westSinghbhum.geometry.coordinates[0][0].map((path) => { return { lat: parseFloat(path[1]), lng: parseFloat(path[0]) } })


    useEffect(() => {
        // console.log(bokaro.geometry.coordinates)
        // console.log(data);
    }, [])
    const onLoad = useCallback((map) => {
        // console.log("Map Loaded Effect: ", map)
        const bokaroPolygon = new window.google.maps.Polygon({ paths: bokaroData, ...polygonOptions })
        const chatraPolygon = new window.google.maps.Polygon({ paths: chatraData, ...polygonOptions })
        const deogharPolygon = new window.google.maps.Polygon({ paths: deogharData, ...polygonOptions })
        const dhanbadPolygon = new window.google.maps.Polygon({ paths: dhanbadData, ...polygonOptions })
        const dumkaPolygon = new window.google.maps.Polygon({ paths: dumkaData, ...polygonOptions })
        const eastSinghbhumPolygon = new window.google.maps.Polygon({ paths: eastSinghbhumData, ...polygonOptions })
        const garhwaPolygon = new window.google.maps.Polygon({ paths: garhwaData, ...polygonOptions })
        const giridihPolygon = new window.google.maps.Polygon({ paths: giridihData, ...polygonOptions })
        const goddaPolygon = new window.google.maps.Polygon({ paths: goddaData, ...polygonOptions })
        const gumlaPolygon = new window.google.maps.Polygon({ paths: gumlaData, ...polygonOptions })
        const hazaribaghPolygon = new window.google.maps.Polygon({ paths: hazaribaghData, ...polygonOptions })
        const jamtaraPolygon = new window.google.maps.Polygon({ paths: jamtaraData, ...polygonOptions })
        const khuntiPolygon = new window.google.maps.Polygon({ paths: khuntiData, ...polygonOptions })
        const kodermaPolygon = new window.google.maps.Polygon({ paths: kodermaData, ...polygonOptions })
        const lateharPolygon = new window.google.maps.Polygon({ paths: lateharData, ...polygonOptions })
        const lohardagaPolygon = new window.google.maps.Polygon({ paths: lohardagaData, ...polygonOptions })
        const pakurPolygon = new window.google.maps.Polygon({ paths: pakurData, ...polygonOptions })
        const palamuPolygon = new window.google.maps.Polygon({ paths: palamuData, ...polygonOptions })
        const ramgarhPolygon = new window.google.maps.Polygon({ paths: ramgarhData, ...polygonOptions })
        const ranchiPolygon = new window.google.maps.Polygon({ paths: ranchiData, ...polygonOptions })
        const sahibganjPolygon = new window.google.maps.Polygon({ paths: sahibganjData, ...polygonOptions })
        const serikelaKharsawanPolygon = new window.google.maps.Polygon({ paths: serikelaKharsawanData, ...polygonOptions })
        const simdegaPolygon = new window.google.maps.Polygon({ paths: simdegaData, ...polygonOptions })
        const westSinghbhumPolygon = new window.google.maps.Polygon({ paths: westSinghbhumData, ...polygonOptions })

        setTimeout(() => {
            bokaroPolygon.setMap(map)
            chatraPolygon.setMap(map)
            deogharPolygon.setMap(map)
            dhanbadPolygon.setMap(map)
            dumkaPolygon.setMap(map)
            eastSinghbhumPolygon.setMap(map)
            garhwaPolygon.setMap(map)
            giridihPolygon.setMap(map)
            goddaPolygon.setMap(map)
            gumlaPolygon.setMap(map)
            hazaribaghPolygon.setMap(map)
            jamtaraPolygon.setMap(map)
            khuntiPolygon.setMap(map)
            kodermaPolygon.setMap(map)
            lateharPolygon.setMap(map)
            lohardagaPolygon.setMap(map)
            pakurPolygon.setMap(map)
            palamuPolygon.setMap(map)
            ramgarhPolygon.setMap(map)
            ranchiPolygon.setMap(map)
            sahibganjPolygon.setMap(map)
            serikelaKharsawanPolygon.setMap(map)
            simdegaPolygon.setMap(map)
            westSinghbhumPolygon.setMap(map)
        }, 100);

        const bounds = new google.maps.LatLngBounds()
        bokaroData.forEach((path) => bounds.extend(path))
        chatraData.forEach((path) => bounds.extend(path))
        deogharData.forEach((path) => bounds.extend(path))
        dhanbadData.forEach((path) => bounds.extend(path))
        dumkaData.forEach((path) => bounds.extend(path))
        eastSinghbhumData.forEach((path) => bounds.extend(path))
        garhwaData.forEach((path) => bounds.extend(path))
        giridihData.forEach((path) => bounds.extend(path))
        goddaData.forEach((path) => bounds.extend(path))
        gumlaData.forEach((path) => bounds.extend(path))
        hazaribaghData.forEach((path) => bounds.extend(path))
        jamtaraData.forEach((path) => bounds.extend(path))
        khuntiData.forEach((path) => bounds.extend(path))
        kodermaData.forEach((path) => bounds.extend(path))
        lateharData.forEach((path) => bounds.extend(path))
        lohardagaData.forEach((path) => bounds.extend(path))
        pakurData.forEach((path) => bounds.extend(path))
        palamuData.forEach((path) => bounds.extend(path))
        ramgarhData.forEach((path) => bounds.extend(path))
        ranchiData.forEach((path) => bounds.extend(path))
        sahibganjData.forEach((path) => bounds.extend(path))
        serikelaKharsawanData.forEach((path) => bounds.extend(path))
        simdegaData.forEach((path) => bounds.extend(path))
        westSinghbhumData.forEach((path) => bounds.extend(path))

        map.fitBounds(bounds)
        // map.setZoom(zoom)
        setTimeout(() => {
            map.setZoom(8)
        }, 100);
    }, [])
    useEffect(() => {
    }, [])

    return (
        <LoadScript googleMapsApiKey={apiKey}>

            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '10px' }}
                // center={center}
                // zoom={zoom}
                onLoad={onLoad}
            >

                {/* <MarkerOverlay position={{ lat: 23.29300, lng: 85.30000 }}>
                    <div className='' style={{ height: '20px', width: '20px', borderRadius: '100%', backgroundColor: 'red' }}></div>
                </MarkerOverlay>
                <MarkerOverlay position={center2}>
                    <div className='' style={{ height: '20px', width: '20px', borderRadius: '100%', backgroundColor: 'red' }}></div>
                </MarkerOverlay>
                <MarkerOverlay position={center3}>
                    <div className='' style={{ height: '20px', width: '20px', borderRadius: '100%', backgroundColor: 'red' }}></div>
                </MarkerOverlay>
                <MarkerOverlay position={center4}>
                    <div className='' style={{ height: '20px', width: '20px', borderRadius: '100%', backgroundColor: 'red' }}></div>
                </MarkerOverlay> */}

            </GoogleMap>
        </LoadScript>
    )
}

export default memo(MyMap2)