import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Animated, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

// Styles
import styles from './Styles/ListStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const List = props => {
  const { item, remove } = props

  const leftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton onPress={remove} style={styles.delete}>
        <Animated.Text
          style={[
            styles.deleteLabel,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          Hapus
        </Animated.Text>
      </RectButton>
    )
  }

  return (
    <Swipeable
    containerStyle={apply('bg-white')}
    renderLeftActions={leftActions}>
      <TouchableOpacity activeOpacity={0.9} style={styles.container} {...props}>
        <Text style={styles.text}>{item?.name}</Text>
        <Icon name='chevron-right' size={scaleWidth(6)} color={apply('gray-600')} />
      </TouchableOpacity>
    </Swipeable>
  )
}

// Prop type warnings
List.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  remove: PropTypes.func,
}

// Defaults for props
List.defaultProps = {
  item: {},
  onPress: () => {},
  remove: () => {},
}

export default memo(List)
