import React, { Component } from 'react';
import './index.css';

class AdItem extends Component {

    render() {

        const {data} = this.props;
        console.log('class AdItem -> data ---',data);

        const output_sub_title =<div>{data.subTitle}</div>;
        const output_text_area =<div>{data.textArea}</div>;
        const output_phone_number =<div>{data.phoneNumber}</div>;
        const output_city =<div>{data.city}</div>;
        const output_image_data =<div>{data.imageData}</div>;

            return (
                <div style={{border:'1px solid black'}}>
                    {output_sub_title}
                    {output_text_area}
                    {output_phone_number}
                    {output_city}
                    {output_image_data}
                </div>
            );
    }
}

export default AdItem;
