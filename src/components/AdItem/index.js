import React, { Component } from 'react';
import './index.css';

class AdItem extends Component {

    /**состояние для передачи номера объявления для удаления из local.storage*/
    state ={
      delNumber:''
    };

    /**функция удаления передаёт Родителю номер для удаления*/
    onDelete = () =>{
        const {data} = this.props;
        this.setState({delNumber: data.submitTime}, ()=>{
            this.props.changeDataList(this.state.delNumber)
        });
    };

    render() {

        const {data} = this.props;//принимаем объект объявления из AdList
        const output_sub_title =<div>{data.subTitle}</div>;
        const output_text_area =<div>{data.textArea}</div>;
        const output_image_data =<div>{data.imageData}</div>;
        const output_phone_number =<div>{data.phoneNumber}</div>;
        const output_city =<div>{data.city}</div>;
        const output_update = <div>Редактировать</div>;
        const output_delete = <div onClick={this.onDelete}>Удалить</div>;

            return (
                    <div id={'adItem'}>
                        <div>
                            {output_sub_title}
                            {output_text_area}
                            {output_image_data}
                        </div>
                        <div>
                            {output_phone_number}
                            {output_city}
                        </div>
                        {output_update}
                        {output_delete}
                    </div>
            );
    }
}

export default AdItem;
