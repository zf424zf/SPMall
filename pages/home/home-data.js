import {Base} from '../../utils/base.js'
export class Home extends Base{
  constructor(){
    super()
  }

  getBanner(id,callback){
    var params = {
      url: 'banner/' + id,
      method: 'GET',
      successCallBack (res){
        callback && callback(res[0].items)
      }
    }
    this.request(params)
  }

  getTheme(ids,callback){
    var params = {
      url: 'theme?ids=' + ids,
      method: 'GET',
      successCallBack (res) {
        callback && callback(res);
      }
    }
    this.request(params)
  }
}