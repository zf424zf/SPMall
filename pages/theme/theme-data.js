import {Base} from '../../utils/base.js'
export class Theme extends Base{
  constructor() {
    super()
  }

  getThemeInfo(id,callback){
   let param = {
     url:'theme/' + id,
     method:'GET',
     successCallBack (res) {
       callback && callback(res)
     }
   } 
   this.request(param)
  }
}