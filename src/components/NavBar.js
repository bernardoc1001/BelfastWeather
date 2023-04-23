import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

function NavBar() {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title="Weather App" titleStyle={styles.title} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7d80df',
  },
  title: {
    color: '#ffffff',
    alignSelf: 'center',
  },
});
export default NavBar;
