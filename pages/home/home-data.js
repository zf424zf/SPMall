export  class Home {
  constructor(){

  }

  getBanner(id,callback){
    wx.request({
      url: 'http://mall.loc/api/v1/banner/'+ id,
      method: 'GET',
      success (response) {
        callback(response)
      }
    })
  }
}