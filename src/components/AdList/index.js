import React, { Component } from 'react';
import './index.css';
// import AdItem from '../AdItem/index';

class AdList extends Component {

    render() {


    const {addNewAd} = this.props;//приходит время нового объявления

    console.log('const {addNewAd}---',addNewAd);

            let time = JSON.parse(localStorage
                .getItem(this.props.addNewAd.toString()));//достаём новый оъект из localStorage
            console.log('JSON.parse',time);
            console.log('localStorage',localStorage);

            let data =[];

            /**Ищем в localStorage все объявления и записываем их в массив (новый в начало)*/
            for (let key in localStorage){
                if(localStorage.getItem(key)){
                    data.unshift(localStorage.getItem(key))}
            }



            console.log('JSON.parse(data[0] after unshift',JSON.parse(data[0]));

            /**Раскладываем кажжый элемент массива в строки (в будущем в отдельные шаблоны компонентов AdItem)*/
            const dataAdItem = data.map((data,index) =>
                <li key={index}>{JSON.parse(data).submitTime}
                </li>
            );

            console.log('dataAdItem',dataAdItem);

            return (
                <ul>
                    {dataAdItem}
                </ul>
            );

    }
}

export default AdList;
