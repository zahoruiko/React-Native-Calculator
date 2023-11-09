import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CalculationsList = ({ data }) => {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      style={styles.calculationsListScroll}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      <View style={styles.listWrapper}>
        {data.map((item, id) => {
          return (
            <View key={id} style={styles.listItemWrapper}>
              <Text style={styles.displayText}>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CalculationsList;

const styles = StyleSheet.create({
  calculationsListScroll: {
    backgroundColor: '#FAE5D3',
    borderColor: '#F5CBA7',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 17,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4
  },
  listWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 5
  },
  displayText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  listItemWrapper: {

  }
});
