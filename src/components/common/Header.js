import React from 'react';
import { Text, CardItem } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <CardItem style={viewStyle}>
            <Text style={textStyle} >
                {props.headerText}
            </Text>
        </CardItem>
    );
};

const styles = {
    textStyle: {
        fontSize: 28
    },
    viewStyle: {
        backgroundColor: '#F1F1F8',
        height: 50,
        //Vertical
        justifyContent: 'center',
        //Horizontal
        alignItems: 'center',
        paddingTop: 5,
        //Shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        zIndex: 10
    }
}

export { Header };

