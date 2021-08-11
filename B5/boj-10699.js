/* 10699 */
const today = new Date()
const date = `${today.getDate()}`.length === 1 ? `0${today.getDate()}` : today.getDate()
const month = `${today.getMonth()+1}`.length === 1 ? `0${today.getMonth()+1}` : today.getMonth()+1
const year = today.getFullYear()
console.log(`${year}-${month}-${date}`)

// Date 객체 YYYY-MM-DD
// getMont starts 0