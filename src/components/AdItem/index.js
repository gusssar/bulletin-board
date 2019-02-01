import React, { Component } from 'react';
import './index.css';

class AdItem extends Component {

    render() {

        const {data} = this.props;//принимаем объект объявления из AdList
        // console.log('class AdItem -> data ---',data);

        const output_sub_title =<div>{data.subTitle}</div>;
        const output_text_area =<div>{data.textArea}</div>;
        const output_image_data =<div>{data.imageData}</div>;
        const output_phone_number =
            <div>{data.phoneNumber}
            </div>;
        const output_city =<div>{data.city}</div>;
        const output_update = <div>Редактировать</div>;
        const output_delete = <div>Удалить</div>;

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
                            {output_update}
                            {output_delete}
                        </div>
                    </div>
            );
    }
}

export default AdItem;
