import React from 'react';
import {Text, View, Alert} from 'react-native';
import CheckBox from './componentes/CheckBox';

const YourApp = () => {

    const optionsindividual = [{id:1, text:'concordo'}]

  const optionsumporvez = [{id:1, text:'concordo'}, {id:2, text:'discordo'}, {id:3, text:'alerta'}]

  const optionmultiplos = [{id:1, text:'concordo'}, {id:2, text:'discordo'}, {id:3, text:'alerta'}]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <Text>CheckBox individual</Text>
        <CheckBox options={optionsindividual} onChange={(op) => Alert.alert(JSON.stringify(op))}/>
        <Text>CheckBox uma opção por vez</Text>
        <CheckBox options={optionsumporvez} onChange={(op) => Alert.alert(JSON.stringify(op))}/>
        <Text>CheckBox múltipla escolha</Text>
        <CheckBox options={optionmultiplos} multiple={true} onChange={(op) => Alert.alert(JSON.stringify(op))}/>

    </View>
  );
};

export default YourApp;