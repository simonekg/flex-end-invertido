import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'; 

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
Container,
Header,
HeaderContent,
TotalCars,
} from './styles';

export function Home(){
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: '120',
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHmDAH48l1u2DtMPKUe_zVLfQNhs6Ngb3P_g&usqp=CAU',
  }

  const carDataTwo = {
    brand: 'Porche',
    name: 'Panamera',
    rent: {
      period: 'Ao dia',
      price: '340',
    },
    thumbnail: 'https://purepng.com/public/uploads/large/purepng.com-black-porsche-panamera-carcarvehicletransportporsche-961524660080ezwd4.png',
  }


return (
 <Container>
   <StatusBar 
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
   />
   <Header>
    <HeaderContent>
      <Logo 
        width={RFValue(108)}
        height={RFValue(120)}
      />
      <TotalCars>
        Total de 12 carros
      </TotalCars>
    </HeaderContent>
   </Header>

  <Car data={carDataOne}/>
  <Car data={carDataTwo}/>
   
 </Container>
);
}