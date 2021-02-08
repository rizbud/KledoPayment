### Components Folder
All components are stored and organized here
## Index of Content
- [Button](#Button)
- [Header](#Header)
- [List](#List)
 
## Button
### Usage
```jsx harmony
import { Text } from 'react-native';
import Button from './Button';

<Button {...props}>
  <Text>Click Here</Text>
</Button>
```

### Props
Same as `TouchableOpacity` props

## Header
### Usage
```jsx harmony
import Header from './Header';

<Header {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| title | String | '' | Yes |
| type | String | '' | No |
| back | Function | () => {} | No |
| filter | Function | () => {} | No |

## List
### Usage
```jsx harmony
import List from './List';

<List {...props} />
```

### Props
| Props | Type | Default | Required
| ----- | ---- | ------- | -----
| item | Object | {} | Yes |
| onPress | Function | () => {} | No |
| remove | Function | () => {} | No |