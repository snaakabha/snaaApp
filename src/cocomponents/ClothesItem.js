import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ClothesItem = props => {
    const {size, Type, color, ShopName} = props;
    const [like , setLike ] = useState(0)

    const onItemPress = () => {
    
      setLike(like +1 )
    };
    console.log('likes: ', like );

    
    
    return (
        <TouchableOpacity onPress={onItemPress}>
          <View style={styles.container}>
            <View style={styles.txtContainer}>
              <Text style={styles.txt}>{`size: ` + size}</Text>
              <Text style={styles.txt}>{`Type: ${Type}`}</Text>
              <Text style={styles.txt}>{'color: ' + color}</Text>
              <Text style={styles.txt}>{'ShopName: ' + ShopName}</Text>
              <Text style={styles.txt}>{'like: ' + like}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
}
export default ClothesItem;

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
  },
  container: {
    borderWidth: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plus: {
    fontSize: 45,
    textAlign: 'center',
  },
  plusContainer: {
    borderWidth: 1,
    flex: 1,
  },
  txtContainer: {
    flex: 1,
  },
});