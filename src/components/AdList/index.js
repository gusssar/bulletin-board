import React, { Component } from 'react';
import AdItem from '../AdItem/index';

class AdList extends Component {

    state ={
        delItem: 0
    };

    changeDataList = (value) => {
        this.setState({delItem:value});
    };


    render() {
    /**если state.delItem меняется, то удаляем по ключу из local.storage*/
    localStorage.removeItem(this.state.delItem.toString());

        let data =[];
        /**Ищем в localStorage все объявления и записываем их в массив (новый в начало)*/
        for (let key in localStorage){
            if(localStorage.getItem(key)){
                data.unshift(localStorage.getItem(key))}
        }

            /**Раскладываем кажжый элемент массива в отдельные шаблоны компонентов AdItem*/
            const dataAdItem = data.map((data,index) =>
                <div key={index}>
                    {<AdItem data = {JSON.parse(data)} changeDataList={this.changeDataList}/>}
                </div>
            );

                return (
                    <div>
                        {dataAdItem}
                    </div>
                );

    }
}

export default AdList;
