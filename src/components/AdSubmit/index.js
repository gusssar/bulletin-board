import React, { Component } from 'react';
import './index.css';

class AdSubmit extends Component {
    state ={
        submitTime:'',
        subTitle:'',
        textArea:'',
        phoneNumber: '',
        city: '',
        imageData: ''
    };


    onSubTitleChange = event => this.setState({subTitle: event.target.value});
    onTextAreaChange = event => this.setState({textArea: event.target.value});
    onPhoneNumberChange = event => this.setState({phoneNumber: event.target.value});
    onCityChange = event => this.setState({city: event.target.value});
    onImageDataChange = event => this.setState({imageData: event.target.value});

    /**Сохранение в localStorage по клику*/
    onSubmit = () => {
        let time =new Date().getTime();
        this.setState({submitTime: time});
        // console.log(this.state);
            // let serialState = JSON.stringify(this.state);
            localStorage.setItem(time.toString(),JSON.stringify(this.state));
                // console.log(localStorage);
        this.props.updateData(this.state.submitTime);
    };

    render() {

        const input_sub_title =
            <div>
                <div>заголовок</div>
                <input type='text' className='sub-title' value={this.state.subTitle}
                       maxLength={140} onChange={this.onSubTitleChange}/>
            </div>;

        const input_text_area =
            <div>
                <div>текст объявления</div>
                <textarea className='text-area' value={this.state.textArea}
                          maxLength={300} onChange={this.onTextAreaChange}/>
            </div>;

        const input_phone =
            <div>
                <div>телефон</div>
                <input type='tel' name='phone'
                       placeholder='+7(___)-___-__-__'
                       value={this.state.phoneNumber}
                       onChange={this.onPhoneNumberChange}
                       required/>
            </div>;

        /**подумать как реализовать выбор города из массива*/
        // const city_arr = [  '',
        //                     'Москва',
        //                     'Санкт-Петербург',
        //                     'Новосибирск',
        //                     'Екатеринбург',
        //                     'Нижний Новгород',
        //                     'Казань',
        //                     'Челябинск',
        //                     'Омск',
        //                     'Самара',
        //                     'Ростов-на-Дону',
        //                     'Уфа',
        //                     'Красноярск',
        //                     'Пермь',
        //                     'Воронеж',
        //                     'Волгоград'];


        const input_city =
            <div>
                <div>город</div>
                <select name='input-city' onChange={this.onCityChange}>
                    <option value='id-0'> </option>
                    <option value='id-1'>москва</option>
                    <option value='id-2'>санкт-петербург</option>
                    <option value='id-3'>новосибирск</option>
                </select>
            </div>;

        /**разобраться как сохранять картинку в local.storage*/
        const input_image =
            <div>
                <input id='image' type='file' accept='image/*' name='input-photo'
                       value={this.state.imageData} onChange={this.onImageDataChange}/>
            </div>;



        return (
            <div>
                <div>подать объявление</div>
                {input_sub_title}
                {input_text_area}
                {input_phone}
                {input_city}
                {input_image}
                <button onClick={this.onSubmit}>подать</button>
            </div>
        );
    }
}

export default AdSubmit;
