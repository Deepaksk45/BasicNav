import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    shadowOpacity: 0.9,
    shadowRadius: 44,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    padding: 20,
    backgroundColor: '#fff',
    margin: 5,
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    width: '15%',
    fontSize: 14,
  },
  value: {
    // width: '45%',
    fontSize: 12,
    flexShrink: 1,
  },
});

export default styles;
