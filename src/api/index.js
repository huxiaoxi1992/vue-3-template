import request from './request';

export default {
  // 单位查询
  async getUnit(params) {
    const data = await request.post('/api/unit/select.dhtml', params);
    return data;
  },
  // 人员查询
  async getPeople(params) {
    const data = request.post(`/api/user/select.dhtml`, params);
    return data;
  },
  // 避难场所查询
  async getPlace(params) {
    const data = request.post(`/api/place/select.dhtml`, params);
    return data;
  },
  // 应急广播查询
  async getEmergencyRadio(params) {
    const data = request.post(`/api/radio/select.dhtml`, params);
    return data;
  },
  // 隐患点查询
  async getDanger(params) {
    const data = request.post(`/api/danger/select.dhtml`, params);
    return data;
  },
  // 应急队伍查询
  async getEmergencyTeam(params) {
    const data = request.post(`/api/team/select.dhtml`, params);
    return data;
  },
  // 预案查询
  async getPlan(params) {
    const data = request.post(`/api/plan/select.dhtml`, params);
    return data;
  },
  // 事件查询
  async getEvent(params) {
    const data = request.post(`/api/event/select.dhtml`, params);
    return data;
  },
  // 事件过程查询
  async getEventProcess(params) {
    const data = request.post(`/api/eventInfo/select.dhtml`, params);
    return data;
  },
  // 设备查询
  async getEquipment(params) {
    const data = request.post(`/api/device/select.dhtml`, params);
    return data;
  },
  // 传感器查询
  async getSensor(params) {
    const data = request.post(`/api/sensor/select.dhtml`, params);
    return data;
  },
};
