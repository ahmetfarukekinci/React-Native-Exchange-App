import React, {Component} from 'react'
import {Content, Card, CardItem, Input, Text} from 'native-base' 
import Axios from 'axios';
import {API_URL} from './constants'

class Converter extends Component{

    constructor(props){
        super(props);
        this.state= {
            tl: '',
            usd : '',
            cad : '',
            eur: '',
            input: '',
            rates: []
        }

        this.getRates = this.getRates.bind(this);
   
    };

    componentDidMount(){
        this.getRates();
    };

    getRates(){
        Axios.get(API_URL)
        .then(response => this.setState({rates: response.data.rates})) 
        .catch(err=>console.log(err)); 
    }; 

    render(){
        
        const {tl, usd, cad, eur, rates} = this.state;
        
        return(
            <Content> 
            
            <Input
            placeholder= 'Enter Euro Value'
            keyboardType = 'numeric'
            onChangeText= {(text)=> {
                const i = parseFloat(text) || 0; 
                this.setState({
                    input : text,
                    tl : (i * rates['TRY']),
                    usd : (i * rates['USD']).toFixed(3),
                    cad : (i * rates['CAD']).toFixed(3),
                    eur : (i * rates['EUR']).toFixed(3),
                })

            }}
            value={this.state.input} 
            textAlignVertical='center'
            style={{textAlign:'center'}}
            />


                <Card>
                <CardItem>
                <Text> TRY: {tl}</Text> 
                </CardItem>
                <CardItem>
                <Text> USD: {usd}</Text> 
                </CardItem>
                <CardItem>
                <Text> CAD: {cad}</Text>
                </CardItem>
                <CardItem>
                <Text> EUR: {eur}</Text> 
                </CardItem> 
                </Card>
                </Content>
       
        );
    }
};

export default Converter;