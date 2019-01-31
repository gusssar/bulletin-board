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
            <div className={'input-sub-title'}>
                <div style={{'margin-top': '24px'}}>Заголовок</div>
                <input type='text' className='sub-title' value={this.state.subTitle}
                       maxLength={140}  style={{'margin-top': '8px'}} onChange={this.onSubTitleChange}/>
            </div>;

        const input_text_area =
            <div className={'input-sub-title'}>
                <div style={{'margin-top': '29px'}}>Текст объявления</div>
                <textarea className='text-area'  style={{'margin-top': '8px'}} value={this.state.textArea}
                          maxLength={300} onChange={this.onTextAreaChange}/>
            </div>;

        const input_phone =
            <div className={'input-sub-title'}>
                <div style={{'margin-top': '29px'}}>Телефон</div>
                <input type='tel' name='phone' style={{'margin-top': '8px'}}
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
            <div className={'input-sub-title'}>
                <div style={{'margin-top': '28px'}}>Город</div>
                <select name='input-city' style={{'margin-top': '12px'}} onChange={this.onCityChange}>
                    {/*этого тут не должно быть*/}
                    <option value='неизвестно'> </option>
                    <option value='Москва'>Москва</option>
                    <option value='Санкт-петербург'>Санкт-петербург</option>
                    <option value='Новосибирск'>Новосибирск</option>
                </select>
            </div>;

        /**разобраться как сохранять картинку в local.storage*/
        const input_image =
            <div className={'fake-input'}>
                <div style={{'margin-top': '32px'}}><div className={'fake-input-div'}>Прикрепить фото</div></div>
                <input id='image' type='file' accept='image/*' name='input-photo'
                       value={this.state.imageData} onChange={this.onImageDataChange}/>
            </div>;



        return (
            <div>
                <div className={'title'}>Подать объявление</div>
                {input_sub_title}
                {input_text_area}
                {input_phone}
                {input_city}
                {input_image}
                <button onClick={this.onSubmit}  style={{'margin-top': '32px'}}>Подать</button>
            </div>
        );
    }
}

export default AdSubmit;
