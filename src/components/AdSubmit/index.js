import React, { Component } from 'react';
import './index.css';

class AdSubmit extends Component {
    state ={
        submitTime:'',
        subTitle:'',
        textArea:'',
        phoneNumber: '',
        city: '',
        imageData: '',
        onBlurSubTitle:'',
        onBlurPhoneNumber:'',
        emptyTitle:'',
        emptyPhone:''
    };


    onSubTitleChange = event => {this.setState({subTitle: event.target.value}); /*console.log('---onSubTitleChange---')*/};
    onTextAreaChange = event => {this.setState({textArea: event.target.value}); /*console.log('---onTextAreaChange---')*/};
    onPhoneNumberChange = (event) => {
        // console.log('event.target.value---',event.target.value);
        // console.log('event.target.value.length---',event.target.value.length);
        // console.log('event.target.value[5]---',event.target.value[4]);

        /**Проверка на ввод цифр, если isNaN, удаляем знак
         * состоит из 4-х блоков из-за присутсвия '+',' ','(',')','-'*/
        for (let i=4; i<7; i++){
            if (isNaN(event.target.value[i])){
                // console.log('Не число!!!');
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=9; i<12; i++){
            if (isNaN(event.target.value[i])){
                // console.log('Не число!!!');
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=13; i<15; i++){
            if (isNaN(event.target.value[i])){
                // console.log('Не число!!!');
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=16; i<18; i++){
            if (isNaN(event.target.value[i])){
                // console.log('Не число!!!');
                event.target.value = event.target.value.substring(0,i);
            }
        }

        /**Набор регулярных выражений для добавления спец знаков при вводе телефона*/
        this.setState({phoneNumber: event.target.value},() => {
            const full        = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
            const third_done  = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-/;
            const third       = /\+7\s\(\d{3}\)\s\d{3}-\d{2}/;
            const second_done = /\+7\s\(\d{3}\)\s\d{3}-/;
            const second      = /\+7\s\(\d{3}\)\s\d{3}/;
            const first_done  = /\+7\s\(\d{3}\)\s/;
            const first       = /\+7\s\(\d{3}/;

            if (this.state.phoneNumber.search(full)+1){
                // console.log('---аеее---');

            }else
                if(this.state.phoneNumber.search(third)+1){
                    if (this.state.phoneNumber.search(third_done)+1){}
                        else
                            {this.setState({phoneNumber: this.state.phoneNumber +'-'},() => {
                                // console.log('this.state.phoneNumber.3',this.state.phoneNumber)
                                });
                            }
                } else
                    if (this.state.phoneNumber.search(second)+1){
                        if (this.state.phoneNumber.search(second_done)+1){}
                            else
                                {this.setState({phoneNumber: this.state.phoneNumber +'-'},() => {
                                     // console.log('this.state.phoneNumber.2',this.state.phoneNumber)
                                });
                                }
                    } else
                        if (this.state.phoneNumber.search(first)+1){
                            if (this.state.phoneNumber.search(first_done)+1){
                                // console.log('this.state.phoneNumber.search(first_done)+1');
                            }
                                else
                                            {this.setState({phoneNumber: this.state.phoneNumber +') '},() => {
                                                // console.log('this.state.phoneNumber.1',this.state.phoneNumber)
                                            });
                                            }

                        }
        });
    };

    onCityChange = event => this.setState({city: event.target.value});
    onImageDataChange = event => this.setState({imageData: event.target.value});

    onBlurSubTitleChange = () => this.setState({onBlurSubTitle: 1});
    onFocusSubTitleChange = () => this.setState({onBlurSubTitle: ''});
    onBlurPhoneNumberChange = () => {
        const full = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
        const empty = /^\+7\s\($/;
                if (this.state.phoneNumber.search(full)+1){
                    this.setState({onBlurPhoneNumber: 2});
                    // console.log('onBlurPhoneNumber: 2')
                } else {
                    if (this.state.phoneNumber.search(empty)+1){
                        this.setState({phoneNumber: ''});
                        this.setState({onBlurPhoneNumber: 0});
                        // console.log('onBlurPhoneNumber: 0')
                    } else {
                        this.setState({onBlurPhoneNumber: 1});
                        // console.log('onBlurPhoneNumber: 1')
                    }
                }

    };

    onFocusPhoneNumberChange = () => {
            this.setState({onBlurPhoneNumber: 3});
            // console.log('this.state.phoneNumber--',this.state.phoneNumber);
            if(!this.state.phoneNumber){
                this.setState({phoneNumber: '+7 ('});
            }

    };

    /**Сохранение в localStorage по клику*/
    onSubmit = () => {
        let time = new Date().getTime().toString();
        this.setState({submitTime: time}, () =>{
            const stateSubTitle = this.state.subTitle;
            const statePhoneNumber = this.state.phoneNumber.search(/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)+1;

            if (stateSubTitle!==''&&statePhoneNumber!==0){
                this.setState({emptyTitle:'',emptyPhone:''});
            }else {
                if (stateSubTitle!==''&&statePhoneNumber===0){
                    this.setState({emptyTitle:'',emptyPhone:'1'});
                    }else
                        if(stateSubTitle===''&&statePhoneNumber!==0){
                            this.setState({emptyTitle:'1',emptyPhone:''});
                        }else
                            if(stateSubTitle===''&&statePhoneNumber===0){
                                this.setState({emptyTitle:'1',emptyPhone:'1'});
                            }
            }
            console.log(this.state);
            localStorage.setItem(time,JSON.stringify(this.state));
            //     console.log('localStorage---',localStorage);
            /**передача в AdList*/
            // this.props.updateData(this.state.submitTime);
        });


    };

    render() {
        /**Проверка валидности Заголовка*/
        const sub_title_descrip =
                (this.state.onBlurSubTitle)?
                    (this.state.subTitle)?
                        <div id={'sub-title-decrip-done'}>
                            Заполнено
                        </div>
                    :
                        <div id={'sub-title-decrip-exclam'}>
                            Заполните поле
                        </div>
                :
                    (this.state.subTitle)?
                        <div id={'sub-title-decrip-hidden'}>
                        </div>
                    :
                        <div id={'sub-title-decrip-info'}>
                            <div>Обзятельное поле</div>
                            <div>Не более 140 символов</div>
                        </div>;

        const style_input = (this.state.emptyTitle)?{marginTop: '8px', border: '1px solid #fa5e5b'}:{marginTop: '8px'};
        const input_sub_title = <div className={'input-sub-title'}>
                <div style={{marginTop: '24px'}}>Заголовок</div>

                <input type='text' className='sub-title' value={this.state.subTitle}
                       maxLength={140}  style={style_input}
                       onChange={this.onSubTitleChange}
                       onBlur={this.onBlurSubTitleChange}
                       onFocus={this.onFocusSubTitleChange}
                       autoFocus/>
                {sub_title_descrip}
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
        const phone_descrip =
            (this.state.onBlurPhoneNumber)?
                (this.state.onBlurPhoneNumber-1)?
                    (this.state.onBlurPhoneNumber-2)?
                        <div id={'sub-title-decrip-hidden'}>
                        </div>:
                    <div id={'sub-title-decrip-done'}>
                        Заполнено
                    </div>:
                <div id={'sub-title-decrip-exclam'}>
                    Заполните поле
                </div>:
            <div id={'sub-title-decrip-info'}>
                <div>Обзятельное поле</div>
            </div>;

        const style_phone = (this.state.emptyPhone)?{marginTop: '8px', border: '1px solid #fa5e5b'}:{marginTop: '8px'};
        const input_phone =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '29px'}}>Телефон</div>
                <input type='tel' name='phone' style={style_phone}
                       placeholder='+7(___)-___-__-__'
                       value={this.state.phoneNumber}
                       onChange={this.onPhoneNumberChange}
                       onBlur={this.onBlurPhoneNumberChange}
                       onFocus={this.onFocusPhoneNumberChange}
                       maxLength={18}
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
