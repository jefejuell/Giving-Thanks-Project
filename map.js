mapboxgl.accessToken = 'pk.eyJ1IjoiamVmZWp1ZWxsIiwiYSI6ImNrdGZ6aTlpaTBkOWczMm5sMDdja3UwanYifQ.0bEdPWVZftSkB8c9ZUSBOw';
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-90.370760, 38.636210],
                zoom: 9
            });

            // Add the control to the map.
            map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
            );

            //Add map directions
            map.addControl(
                new MapboxDirections({
                accessToken: mapboxgl.accessToken
                }),
                'top-left'
                );
                
            //Adds navigation controls
            map.addControl(new mapboxgl.NavigationControl());