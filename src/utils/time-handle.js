const dayjs = require('dayjs');
/**
 * 格式化时间
 * @param {string} dateTime 更新日期时间戳
 */
const formatTime = dateTime => dayjs(dateTime).format('YYYY-MM-DD HH:mm');
export default formatTime;
