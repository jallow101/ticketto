import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ location, name }) => {
  console.log("heres the location ", location);
  const defaultProps = {
    center: {
      lat: location._lat,
      lng: location._long,
    },
    zoom: 15,
  };

  const handleApiLoaded = (map, maps) => {

    let marker = new maps.Marker({
        position: { lat: location._lat, lng: location._long },
        map,
        title: name
        });
        return marker;

  };


  return (
    <div  style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDSzuJGjpeJEn-udQhdft5fOL2CM8TZ4To",
        }}
    
        layerTypes={['TrafficLayer']}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={
          ({ map, maps }) => handleApiLoaded(map, maps) 
          // Do whatever you want using the map, and maps objects
        }
        options={{
            styles: [
              {
                featureType: 'all',
                stylers: [{ visibility: 'on' }],
              }]
          }}
        
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;
