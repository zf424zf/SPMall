import {Config} from 'config.js'

export class Base {
  constructor(){
    this.baseUrl = Config.baseUrl
  }
  
  request(params){
    let url = this.baseUrl + params.url

    if(!params.method){
      params.method = 'GET'
    }

    wx.request({
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'aplication/json',
        'token': wx.getStorageSync('token')
      },
      success (res){
        params.successCallBack && params.successCallBack(res.data)
      },
      fail (err) {
        console.log(err)
      }
    })
  }

  getDataSet(event,key){
    return event.currentTarget.dataset[key]
  }
}