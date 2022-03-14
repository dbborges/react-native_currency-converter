import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import api from '../services/api';

class Conversor extends Component {

    constructor(props){
        super(props);
        this.state = {
            currencyOne: props.currencyOne,
            currencyTwo: props.currencyTwo,
            currencyTwoValue: 0,
            convertedValue: 0
        }

        this.convert = this.convert.bind(this);
    }

    async convert() {
        let fromTo = this.state.currencyOne + '_' + this.state.currencyTwo;
        const response = await api.get(`convert?q=${fromTo}&compact=ultra&apiKey=794c7e1144bf3fb93fa8`);
        let price = response.data[fromTo];

        let result = (price * parseFloat(this.state.currencyTwoValue))
        
        this.setState({
            convertedValue: result.toFixed(2)
        })

        // close keyboard
        Keyboard.dismiss();
    }

    render() {
        const {currencyOne, currencyTwo} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{currencyOne} para {currencyTwo}</Text>

                <TextInput
                placeholder="Valor a ser convertido"
                style={styles.areaInput}
                onChangeText={(currencyTwoValue) => this.setState({currencyTwoValue})}
                keyboardType="numeric"
                />

                <TouchableOpacity style={styles.buttonArea} onPress={this.convert}>
                    <Text style={styles.buttonText}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.convertedValue}>
                    {(this.state.convertedValue == 0) ? '' : this.state.convertedValue}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    buttonArea: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
    },
    convertedValue: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
  });

export default Conversor;