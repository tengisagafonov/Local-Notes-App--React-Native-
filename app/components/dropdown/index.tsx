import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  FlatList,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {Colors} from 'config/theme';

export const height = Dimensions.get('window').height;

interface IDropDownProps {
  placeHolder?: string;
  value?: DropItemProp;
  data: Array<any>;
  style?: ViewStyle;
  onChange?: (chosen?: any) => void;
}

type DropItemProp = {
  name: string | number;
};

const DropDown: React.FC<IDropDownProps> = ({
  value,
  data = [],
  style,
  onChange,
}) => {
  const [pressed, setIsPressed] = useState<boolean>(false);
  const [chosen, setChosen] = useState<DropItemProp>(value || {name: ''});
  const [layout, setLayout] = useState({width: 0, top: 0, left: 0});
  const DropRef = React.useRef<TouchableOpacity>(null);

  useEffect(() => setChosen(value || {name: ''}), [value]);

  const hasItems = () => {
    if (data.filter(i => i?.name === chosen?.name).length > 0) {
      return chosen.name;
    }
    return null;
  };

  const openDropDown = useCallback(() => {
    DropRef?.current?.measure(
      (
        x: number,
        y: number,
        width: number,
        heightView: number,
        pageX: number,
        pageY: number,
      ) => {
        setLayout({
          top: pageY > height ? pageY - height - 35 : pageY + 15,
          left: pageX - 20,
          width: width,
        });
      },
    );
    setIsPressed(true);
  }, [DropRef]);

  return (
    <TouchableOpacity
      ref={DropRef}
      onPress={() => openDropDown()}
      style={[styles.main, style]}>
      {pressed && (
        <Modal
          isVisible={pressed}
          backdropColor={'transparent'}
          animationIn={'fadeIn'}
          animationOut={'fadeOut'}
          onBackdropPress={() => setIsPressed(false)}>
          <View style={dropDown(layout)}>
            <FlatList
              data={data}
              maxToRenderPerBatch={5}
              snapToInterval={35}
              style={styles.list}
              renderItem={({item}: {item: any}) => (
                <TouchableOpacity
                  onPress={() => {
                    setChosen(item);
                    setIsPressed(false);
                    onChange && onChange(item);
                  }}
                  style={styles.dropView}>
                  <Text
                    ellipsizeMode="middle"
                    numberOfLines={1}
                    style={styles.text}>
                    {String(item.name)}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      )}
      <Text ellipsizeMode="middle" numberOfLines={1}>
        {hasItems()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 35,
    width: '60%',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: Colors.darkGrey,
    paddingRight: 10,
  },
  list: {maxHeight: 35 * 5},
  icon: {transform: [{rotate: '270deg'}]},
  dropView: {
    height: 35,
    borderBottomWidth: 1,
    borderColor: Colors.darkGrey,
  },
  add: {
    flexDirection: 'row',
    paddingRight: 28,
    alignItems: 'center',
    backgroundColor: '#BEDFFF',
    opacity: 0.6,
  },
  text: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    width: '100%',
  },
});

const dropDown = (layout: {width: number; top: number; left: number}) =>
  ({
    position: 'absolute',
    top: layout.top,
    left: layout.left,
    backgroundColor: Colors.white,
    width: layout.width > 0 ? layout.width : '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  } as ViewStyle);

export default DropDown;
