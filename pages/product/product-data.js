import {Base} from '../../utils/base.js'

export class Product extends Base{
  constructor(){
    super()
  }

  getDetailInfo(id,callback){
    var param = {
      url: 'product/' + id,
      method: 'GET',
      successCallBack (res) {
        callback && callback(res)
      }
    }
    this.request(param)
  }
}