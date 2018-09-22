
import store from '../../store'
import create from '../../utils/create'

const util = require('../../utils/util.js')

create(store, {

  onLoad: function () {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })
    this.store.update()
  }
})
