import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Tasks} from 'store/selectors/task';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';
import {StackParamList} from 'app/screens';

export const useTodo = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const task = useSelector(Tasks.info);
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamList, 'Home'>>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!task.hasDrafted || !task.hasChangesInNew) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [task.hasDrafted, task.hasChangesInNew]);

  return {task, dispatch, navigation, visible, setVisible};
};
