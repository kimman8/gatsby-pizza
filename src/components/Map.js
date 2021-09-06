import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

function Map() {
  const [selectPark, setSelectPark] = useState(false);
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: -38.102102026820255, lng: 145.18421758497004 }}
    >
      <Marker
        position={{
          lat: -38.102102026820255,
          lng: 145.18421758497004,
        }}
        // icon={{
        //   url:
        //     'https://cdn.iconscout.com/icon/premium/png-256-thumb/dumpling-3194054-2669895.png',
        //   scaledSize: new window.google.maps.Size(45, 45),
        // }}
        onClick={() => setSelectPark(!selectPark)}
      />
      {selectPark && (
        <InfoWindow
          position={{
            lat: -38.102102026820255,
            lng: 145.18421758497004,
          }}
        >
          <h2 style={{ padding: '3px' }}>We are here! Next to Woolies! 😉</h2>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
export default WrappedMap;
