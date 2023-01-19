import {Text, View} from 'react-native';
import React from 'react';
import {OrientationType, TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {widthStyleHelper} from '../../utils/constants';
import {useOrientation} from '../../hooks/useOrientation';
import {gridPx} from '../../utils/styleHelpers';
import {useGame} from '../../hooks/useGame';

const GameComponent = ({route, navigation}: TProps): JSX.Element => {
  const {orientation} = useOrientation();
  const {isWinner, onReloadHandler, onPressHandler, cards} = useGame({
    route,
    navigation,
  });

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent title={'New Game'} onPress={onReloadHandler} />
      </View>
      <View
        style={{
          ...styles.bottomBlock,
          width:
            orientation === OrientationType.landscape
              ? '40%'
              : widthStyleHelper[route?.params.option],
          marginTop:
            orientation === OrientationType.landscape ? gridPx(5) : gridPx(2),
        }}>
        {isWinner ? (
          <Text style={styles.winBlock}>Congratulation You Win!!!</Text>
        ) : (
          cards.map(({id, uri, disabled, isOpen}) => (
            <CardComponent
              key={id}
              uri={uri}
              disabled={disabled}
              isOpen={isOpen}
              onPress={() => onPressHandler(id)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default GameComponent;
