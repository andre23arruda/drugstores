import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

// utils
import { nullImageLink } from '../../services/api'
import { getVarietyName } from '../../utils/formatString'
import CustomText from '../CustomText'

// styles
import styles from './styles'


function RenderItem({ item, index }){
    const [itemImage, setItemImage] = useState(item.image)

    function handleAlternativeImage() {
        setItemImage(nullImageLink)
    }

    return (
        <View style={ styles.imageContainer }>
            <Image
                style={ styles.image }
                source={{ uri: itemImage }}
                onError={ handleAlternativeImage }
            />

            <CustomText style={ styles.variety }>
                { getVarietyName(item.id) }
            </CustomText>
        </View>
    )
}


function PokemonCarousel(props) {
    const [activeIndex, setActiveIndex] = useState(0)

	return (
        <>
            <Carousel
                layout={ 'default' }
                data={ props.data }
                sliderWidth={ 450 }
                itemWidth={ 250 }
                renderItem={ ({ item, index }) => <RenderItem item={ item } index={ index } /> }
                onSnapToItem = { index => setActiveIndex(index) }
            />

            <Pagination
                dotsLength={ props.data.length  }
                activeDotIndex={ activeIndex }
                containerStyle={{
                    marginTop: -20,
                    marginBottom: -25
                }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </>
	)
}

export default PokemonCarousel
