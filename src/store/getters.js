const getters = {
  // automatic: state => state.user.automatic, // 是否可以自动登录
  // avatar: state => state.user.avatar, // 头像
  // role_ids: state => state.user.role_ids, // 角色id
  // admin_id: state => state.user.admin_id, // 用户id
  // region_ids: state => state.user.region_ids, // 区域id
  // maintain_unit_id: state => state.user.maintain_unit_id,
  // username: state => state.user.username, // 用户名
  // currentRole: state => state.user.currentRole, // 当前用户的角色
  // adminInfo: state => state.user.adminInfo, // 长连接登录返回的信息
  // sip_info: state => state.user.sip_info, // sip通话
  // unit_data: state => state.user.unit_data,
  // userAgentStatus: state => state.user.userAgentStatus, // sip注册情况
  // userAgent: state => state.user.userAgent, // sip注册实例
  // makeCalling: state => state.user.makeCalling, // 是否拨打电话中
  // loginInfo: state => state.user.loginInfo, // 用户登录的账号名
  // udid: state => state.user.udid,
  // sidebar: state => state.app.sidebar,
  // language: state => state.app.language, // 语言
  // size: state => state.app.size,
  // hasUsableFlash: state => state.app.hasUsableFlash, // 是否开启flash
  // allowFlash: state => state.app.allowFlash, // 是否开启flash
  // isIE: state => state.app.isIE,
  // isFlv: state => state.app.isFlv, // 浏览器是否支持flv
  // device: state => state.app.device,
  // isMonitor: state => state.settings.isMonitor, // 是否在详情页，是否展示球机状态
  // runningUser: state => state.settings.runningUser, // 是否电梯运行状态页
  // runningData: state => state.settings.runningData, // 电梯运行状态数据
  // monitorDevice: state => state.settings.monitorDevice, // 所在详情页的设备id
  // onlineDevice: state => state.settings.onlineDevice, // 在线设备列表
  // onlineDeviceData: state => state.settings.onlineDeviceData, // 设备详情
  // noticeData: state => state.settings.noticeData, // 操作通知
  // playUrl: state => state.settings.playUrl, // 播放地址
  // visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  // permission_routes: state => state.permission.routes, // 权限路由
  // addRoutes: state => state.permission.addRoutes, // 添加的路由菜单
  // errorLogs: state => state.errorLog.logs, // 错误信息
  // params: state => state.params.params,
  // // 安全帽
  // capsOnline: state => state.capsSetting.capsOnline, // 安全帽在线设备
  // rtspUrl: state => state.capsSetting.rtspUrl, // 播放地址
  // capsOpenVideo: state => state.capsSetting.capsOpenVideo, // 单个视频通话
  // groupCall: state => state.capsSetting.groupCall, // 群组通话
  // deerCall: state => state.capsSetting.deerCall // 报警
}

export default getters
