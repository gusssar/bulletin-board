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


    onSubTitleChange = event => {this.setState({subTitle: event.target.value}); /*console.log('---onSubTitleChange---')*/};
    onTextAreaChange = event => {this.setState({textArea: event.target.value}); /*console.log('---onTextAreaChange---')*/};
    onPhoneNumberChange = event => {this.setState({phoneNumber: event.target.value});/* console.log('---onPhoneNumberChange---')*/};
    onCityChange = event => this.setState({city: event.target.value});
    onImageDataChange = event => this.setState({imageData: event.target.value});
    onBlurChange = (event) => {
        if (!event.target.value){console.log('---onBlurChange---')} //доделать слушателя ДизФокуса!!!!
    };

    /**Сохранение в localStorage по клику*/
    onSubmit = () => {
        let time = new Date().getTime().toString();
        this.setState({submitTime: time});
        // console.log('time---',time);
        // console.log('this.state---',this.state);

            // let serialState = JSON.stringify(this.state);
            localStorage.setItem(time,JSON.stringify(this.state));
                console.log('localStorage---',localStorage);
        /**передача в AdList*/
        this.props.updateData(this.state.submitTime);
    };

    render() {
               // console.log('---input_sub_title---');
        /**Проверка валидности Заголовка*/
        const sub_title_decrip = (this.state.subTitle)?
            <div id={'sub-title-decrip'}>
            </div> :
            <div id={'sub-title-decrip'}>
                <div>Обзятельное поле</div>
                <div>Не более 140 символов</div>
            </div>;

        const input_sub_title = <div className={'input-sub-title'}>
                <div style={{marginTop: '24px'}}>Заголовок</div>
                <input type='text' className='sub-title' value={this.state.subTitle}
                       maxLength={140}  style={{marginTop: '8px'}}
                       onChange={this.onSubTitleChange} onBlur={this.onBlurChange} autoFocus/>
                {sub_title_decrip}
            </div>;

        // console.log('---input_text_area---');
        const input_text_area =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '29px'}}>Текст объявления</div>
                <textarea className='text-area'  style={{marginTop: '8px'}} value={this.state.textArea}
                          maxLength={300} onChange={this.onTextAreaChange}/>
                <div id={'text-area-decrip'}>
                    <div>Не более 300 символов</div>
                </div>

            </div>;

        // console.log('---input_phone---');
        /**Проверка валидности Телефона*/
        const phone_descrip = (this.state.phoneNumber)?
            <div id={'phone-descrip'}>
            </div>:
            <div id={'phone-descrip'}>
                <div>Обзятельное поле</div>
            </div>;
        const input_phone =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '29px'}}>Телефон</div>
                <input type='tel' name='phone' style={{marginTop: '8px'}}
                       placeholder='+7(___)-___-__-__'
                       value={this.state.phoneNumber}
                       onChange={this.onPhoneNumberChange}
                       required/>
                {phone_descrip}
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


        // console.log('---input_city---');
        const input_city =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '28px'}}>Город</div>
                <select name='input-city' style={{marginTop: '12px'}} onChange={this.onCityChange}>
                    {/*этого тут не должно быть*/}
                    <option value='неизвестно'> </option>
                    <option value='Москва'>Москва</option>
                    <option value='Санкт-петербург'>Санкт-петербург</option>
                    <option value='Новосибирск'>Новосибирск</option>
                </select>
            </div>;

        /**разобраться как сохранять картинку в local.storage*/
        // console.log('---input_image---');
        const input_image =
            <div className={'fake-input'}>
                <div style={{marginTop: '32px'}}><div className={'fake-input-div'}>Прикрепить фото</div></div>
                <input id='image' type='file' accept='image/*' name='input-photo'
                       value={this.state.imageData} onChange={this.onImageDataChange}/>
            </div>;

        // console.log('---input_btn---');
        const btn = <button onClick={this.onSubmit} onChange={this.onTime}  style={{marginTop: '32px'}}>Подать</button>  ;


        return (
            <div>
                <div className={'title'}>Подать объявление</div>
                {input_sub_title}
                {input_text_area}
                {input_phone}
                {input_city}
                {input_image}
                {btn}
            </div>
        );
    }
}

export default AdSubmit;
