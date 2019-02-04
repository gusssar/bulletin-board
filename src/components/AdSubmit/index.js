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


    onSubTitleChange = event => this.setState({subTitle: event.target.value});
    onTextAreaChange = event => this.setState({textArea: event.target.value});

    onPhoneNumberChange = (event) => {
        /**Проверка на ввод цифр, если isNaN, удаляем знак
         * состоит из 4-х блоков из-за присутсвия '+',' ','(',')','-'*/
        for (let i=4; i<7; i++){
            if (isNaN(event.target.value[i])){
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=9; i<12; i++){
            if (isNaN(event.target.value[i])){
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=13; i<15; i++){
            if (isNaN(event.target.value[i])){
                event.target.value = event.target.value.substring(0,i);
            }
        }
        for (let i=16; i<18; i++){
            if (isNaN(event.target.value[i])){
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
            }else
                if(this.state.phoneNumber.search(third)+1){
                    if (this.state.phoneNumber.search(third_done)+1){}
                        else
                            {this.setState({phoneNumber: this.state.phoneNumber +'-'},() => {
                                });
                            }
                } else
                    if (this.state.phoneNumber.search(second)+1){
                        if (this.state.phoneNumber.search(second_done)+1){}
                            else
                                {this.setState({phoneNumber: this.state.phoneNumber +'-'},() => {
                                });
                                }
                    } else
                        if (this.state.phoneNumber.search(first)+1){
                            if (this.state.phoneNumber.search(first_done)+1){
                            }
                                else
                                            {this.setState({phoneNumber: this.state.phoneNumber +') '},() => {
                                            });
                                            }

                        }
        });
    };

    onCityChange = event => this.setState({city: event.target.value});

    /**Загрузка и обработка изображения*
     * необходимо доработать передачу reader.result в state.imageData*/
    onImageDataChange = event => {
        const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener('load',function () {
                // this.setState({imageData:reader.result}) //выдаёт ошибку TypeError: this.setState is not a function at FileReader
            });

    };


    onBlurSubTitleChange = () => this.setState({onBlurSubTitle: 1});
    onFocusSubTitleChange = () => this.setState({onBlurSubTitle: ''});
    /**управление расфокусом inputPhone*/
    onBlurPhoneNumberChange = () => {
        const full = /\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;
        const empty = /^\+7\s\($/;
                if (this.state.phoneNumber.search(full)+1){
                    this.setState({onBlurPhoneNumber: 2});
                } else {
                    if (this.state.phoneNumber.search(empty)+1){
                        this.setState({phoneNumber: ''});
                        this.setState({onBlurPhoneNumber: 0});
                    } else {
                        this.setState({onBlurPhoneNumber: 1});
                    }
                }

    };

    /**управление фокусировкой inputPhone*/
    onFocusPhoneNumberChange = () => {
            this.setState({onBlurPhoneNumber: 3});
            if(!this.state.phoneNumber){
                this.setState({phoneNumber: '+7 ('});
            }

    };

    /**Проверка заполненности обязательных полей перед отправкой*/
    /**Сохранение в localStorage по клику*/
    onSubmit = () => {
        let time = new Date().getTime().toString();
        this.setState({submitTime: time}, () =>{
            const stateSubTitle = this.state.subTitle;
            const statePhoneNumber = this.state.phoneNumber.search(/\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/)+1;

            if (stateSubTitle!==''&&statePhoneNumber!==0){
                this.setState({emptyTitle:'',emptyPhone:''});//всё заполнено
                localStorage.setItem(time,JSON.stringify(this.state));//записываем объект state в local.storage под ключом 'new Date().getTime().toString()'
                this.props.updateData(this.state.submitTime);
                    this.setState({submitTime:'', //очистка полей
                    subTitle:'',
                    textArea:'',
                    phoneNumber: '',
                    city: '',
                    imageData: '',
                    onBlurSubTitle:'',
                    onBlurPhoneNumber:'',
                    emptyTitle:'',
                    emptyPhone:''});
            }else {
                if (stateSubTitle!==''&&statePhoneNumber===0){
                    this.setState({emptyTitle:'',emptyPhone:'1'});//не заполнен телефон
                    }else
                        if(stateSubTitle===''&&statePhoneNumber!==0){
                            this.setState({emptyTitle:'1',emptyPhone:''});//не заполнен титул
                        }else
                            if(stateSubTitle===''&&statePhoneNumber===0){
                                this.setState({emptyTitle:'1',emptyPhone:'1'});//ничего не заполненно
                            }
            }
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

        const style_input = (this.state.emptyTitle)? //добавление border при пустом значении input
            {marginTop: '8px', border: '1px solid #fa5e5b'}:
            {marginTop: '8px'};
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

        const input_text_area =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '29px'}}>Текст объявления</div>
                <textarea className='text-area'  style={{marginTop: '8px'}} value={this.state.textArea}
                          maxLength={300} onChange={this.onTextAreaChange}/>
                <div id={'text-area-decrip'}>
                    <div>Не более 300 символов</div>
                </div>
            </div>;

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

        const style_phone = (this.state.emptyPhone)?//добавление border при пустом значении input
            {marginTop: '8px', border: '1px solid #fa5e5b'}:
            {marginTop: '8px'};
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

        /**выбор города из массива*/
        const input_city =
            <div className={'input-sub-title'}>
                <div style={{marginTop: '28px'}}>Город</div>
                <select name='input-city' style={{marginTop: '12px'}} onChange={this.onCityChange}>
                    <option value='неизвестно'> </option>
                    <option value='Москва'>Москва</option>
                    <option value='Санкт-петербург'>Санкт-петербург</option>
                    <option value='Гагарин'>Гагарин</option>
                </select>
            </div>;

        /**разобраться как сохранять картинку в local.storage*/
        const previewImg = (this.state.imageData)?//при данных в state.imageData будет preview изображение
          <img src={localStorage.getItem('Image')} alt={'изображение объявления'}
                 style={{position:'absolute', width:'69px',height:'52px', left:'200px'}}/>:
            <img  alt={'изображение объявления'} style={{position:'absolute', left:'200px', opacity:'0'}}/>;

        const input_image =
            <div className={'fake-input'}>
                <div style={{marginTop: '32px', position:'relative'}}>
                    {previewImg}
                    <div className={'fake-input-div'}>Прикрепить фото</div></div>
                <input id='image' type='file' accept='image/*' name='input-photo'
                       value={this.state.imageData} onChange={this.onImageDataChange}/>
            </div>;

        const btn = <button onClick={this.onSubmit} style={{marginTop: '32px'}}>Подать</button> ;

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
