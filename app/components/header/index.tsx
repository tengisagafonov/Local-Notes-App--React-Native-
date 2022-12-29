import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, Spacing} from 'config/theme';

interface IHeaderProps {
  title?: string;
  goBack?: boolean;
}

const Header = (props: IHeaderProps) => {
  const navigation = useNavigation();
  const {title, goBack} = props;
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.row}>
        {goBack && (
          <TouchableOpacity style={styles.back} onPress={navigation.goBack}>
            <Text>{'<'}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingBottom: Spacing.larger,
    borderBottomWidth: 2,
    borderColor: Colors.white,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Spacing.larger,
    marginHorizontal: Spacing.larger,
  },
  back: {
    position: 'absolute',
    left: 0,
    backgroundColor: Colors.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
