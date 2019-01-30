import React, { Component } from 'react';
import './index.css';

class AdList extends Component {



    render() {
    console.log('this.props.addNewAd---',this.props.addNewAd);
        if(this.props.addNewAd){

            let time = JSON.parse(localStorage.getItem(this.props.addNewAd.toString()));
            // console.log('JSON.parse(time)---',JSON.parse(time));


            const adText =
                <div>
                    {time.subTitle}
                    {time.textArea}
                    {time.phoneNumber}
                    {/*Дописать всё остальное*/}
                </div>;

            return (
                <div>

                    {adText}
                </div>
            );

        }else {

            return (
                <div>

                </div>
            );

        }

    }
}

export default AdList;
