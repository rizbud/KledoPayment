import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

// Styles
import styles from './Styles/HeaderStyle'
import { apply } from '../Themes/OsmiProvider'
import { scaleWidth } from 'osmicsx'

const Header = props => {
  const navigation = useNavigation()
  const { title, type } = props
  return (
    <View style={styles.container}>
      {type === 'back' ? (
        <TouchableOpacity style={apply('flex')} onPress={props.back} activeOpacity={0.9}>
          <Icon name="arrow-left" size={scaleWidth(6)} />
        </TouchableOpacity>
      ): (
        <View style={apply('flex')} />
      )}
      <Text style={styles.title}>{title}</Text>
      {type === 'filter' ? (
        <TouchableOpacity style={apply('flex')} onPress={props.filter} activeOpacity={0.9}>
          <Icon name="filter" size={scaleWidth(6)} />
        </TouchableOpacity>
      ): (
        <View style={apply('flex')} />
      )}
    </View>
  )
}

// Prop type warnings
Header.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  back: PropTypes.func,
  filter: PropTypes.func,
}

// Defaults for props
Header.defaultProps = {
  title: '',
  type: '',
  back: () => {},
  filter: () => {},
}

export default memo(Header)
