import React from 'react'
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png'
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap() {
    const navigation = useNavigation()

    function handleNavigateToOrphanageDatails() {
        navigation.navigate('OrphanageDetails')
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: -26.219546,
                    longitude: -51.0926203,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    icon={mapMarker}
                    calloutAnchor={{
                        x: 2.7,
                        y: 0.8,
                    }}
                    coordinate={{
                        latitude: -26.219546,
                        longitude: -51.0926203,
                    }}
                >
                    <Callout tooltip onPress={handleNavigateToOrphanageDatails}>
                        <View style={styles.calloutContainer}>
                            <Text style={styles.calloutText}>Lar das meninas</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>orfanatos encotrados</Text>
                <TouchableOpacity style={styles.createOrphanageButton} onPress={() => { }}>
                    <Feather name="plus" size={20} color="#FFF" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: '#0089a5',
        fontSize: 14,
        fontFamily: 'Nunito_700Bold',
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 55,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    footerText: {
        color: '#8fa7b3',
        fontFamily: 'Nunito_700Bold',
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
});