export const showToast = (title = '已完成', icon = 'success', duration = 1500) => {
  wx.showToast({ title, icon, duration })
}
