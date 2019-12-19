import Rave from 'react-native-rave-webview';
import React, { Component } from 'react'
import { View } from 'react-native'

class PayStack extends Component {
    constructor(props) {
        super(props);
            
      }
    
      onSuccess(data) {
        console.log("success", data);
        // You can get the transaction reference from successful transaction charge response returned and handle your transaction verification here
    
      }
    
      onCancel() {
        console.log("error", 'Transaction was Cancelled!');
      }
    
      onError() {
        //an error occoured 
    
      }
    render() {
        return (
           <View  >
               <Rave
                   buttonText=  "Pay Now"
                   raveKey="<your-api-key-here>"
                   amount={20000}
                   billingEmail="ayoshokz@gmail.com"
                   billingMobile="08101274387"
                   billingName="Oluwatobi Shokunbi"
                   ActivityIndicatorColor="green"
                   onCancel={()=>this.onCancel()}
                   onSuccess={(transactionRef)=>this.onSuccess(transactionRef)}
                   btnStyles={{backgroundColor:'green', width:100, alignContent:  'center' }}
                   textStyles={{ color:'white', alignSelf:  'center', }}
                   onError={()=>{alert('something went wrong')}}
                   txref="1234"
                 />
           </View>
       );
      
    
  }
}
export default PayStack