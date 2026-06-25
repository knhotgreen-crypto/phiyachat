document.addEventListener('DOMContentLoaded', function () {
    // แสดงข้อความแจ้งเตือนเมื่อระบบพร้อมใช้งาน (ปรับชื่อให้ตรงกับหน้าเว็บแล้ว)
    console.log('Portfolio ของ PHIYACHAT พร้อมแล้ว!');

    // ดึงปี ค.ศ. ปัจจุบันมาแสดงที่ Footer ใน <span id="year"> อัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
