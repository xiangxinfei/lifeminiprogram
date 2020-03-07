Page({
  data: {
    imageSrc: '',
    cameraWidth: 0,
    cameraHeight: 0,
    showPhotoButton: true
  },
  onLoad() {
    this.setCameraSize();
  },
  /* 拍照 */
  takePhoto() {
    const CameraContext = wx.createCameraContext();
    CameraContext.takePhoto({
      quality: 'high',
      success: res => {
        this.setData({
          imageSrc: res.tempImagePath,
          showPhotoButton: false
        })
      }
    })
  },

  /* 取消拍照 */
  cancel() {
    this.setData({
      imageSrc: '',
      showPhotoButton: true
    })
  },

  /* 保存拍照照片 */
  save() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imageSrc,
      success: () => {
        wx.showToast({
          title: '保存照片成功！',
          icon: 'success',
          duration: 2000
        });
        this.cancel();
      }
    })
  },

  /**
   * 获取系统信息 设置相机的大小适应屏幕
   */
  setCameraSize() {
    //获取设备信息
    const res = wx.getSystemInfoSync();
    //获取屏幕的可使用宽高，设置给相机
    this.setData({
      cameraHeight: res.windowHeight,
      cameraWidth: res.windowWidth
    })
  },
})
