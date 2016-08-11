// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai16RoutePhan1 extends Component {
  
  renderScene(route, navigator){

    // Xử lý đi đến các màn hình
    switch(route.name){

      case 'do':

        // Xử lý sự kiện onPressYellowScreen và truyền tham số passProps từ màn hình đỏ đến màn hình vàng 
        return( <ManHinhDo onPressYellowScreen={()=>{
          
          navigator.push({
            name:'vang',
            passProps:{ho:'Tran', ten:'Ti'}
          });

        }} /> );

      case 'vang':

        // Xử lý sự kiện onPressYellowScreen
        return( <ManHinhVang onPressRedScreen={()=>{
          
          navigator.pop({
            name:'do'});
        }}

        // Nhận tham số từ màn hình đỏ
        abc = {route.passProps.ho}
        def = {route.passProps.ten}

        /> );
    }
  }


  /*initialRoute : view đầu tiên được load
      renderScene : routing đến view nào*/
  render() {
    
    return (

      <Navigator initialRoute={{name:'do'}}
        renderScene={this.renderScene} />
    );
  }
}


// Khai báo Component
export default class ManHinhDo extends Component{

  render(){

    return(

      <View style={{backgroundColor:'red', flex:1}}>

        {/* Bắt sự kiện click onPressYellowScreen */}
        <TouchableOpacity onPress={this.props.onPressYellowScreen}>
          <Text style={{marginTop:100, color:'yellow'}}>Go To Yellow View</Text>
        </TouchableOpacity>
      </View>

    );
  }
}


export default class ManHinhVang extends Component{

  render(){

    return(

      <View style={{backgroundColor:'yellow', flex:1}}>

        {/* Bắt sự kiện click onPressRedScreen */}
        <TouchableOpacity onPress={this.props.onPressRedScreen}>

          {/*Lấy giá trị từ màn hình đỏ thông qua this.props*/}
          <Text style={{marginTop:100, color:'black'}}>{this.props.abc} - {this.props.def}</Text>

          <Text style={{marginTop:100, color:'black'}}>Go To Red View</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

// Khai báo CSS
var ao = StyleSheet.create({


});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai16RoutePhan1', () => Bai16RoutePhan1);
