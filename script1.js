const toggleBtn = document.getElementById("toggle-btn");
const boxLeft = document.querySelector(".box-left");
const boxLeftContent = document.querySelector(".text-left"); // เลือกเนื้อหาภายในกล่องซ้าย (ข้อความ + รูป)
const futureMakerText = document.getElementById("future-maker-text");
const futureImage = document.querySelector(".future-ai"); // เลือกรูปภาพในกล่องซ้าย
const futureMakerContainer = document.querySelector(".future-maker-container"); // ส่วนของรูปคน


let isExpanded = false; // สถานะของกล่อง (เริ่มต้นเป็น False)

toggleBtn.addEventListener("click", () => {
  if (!isExpanded) {
    // ซ่อนเนื้อหาภายในกล่องซ้าย (ข้อความและรูป)
    boxLeftContent.style.display = "none"; // ซ่อนทั้งข้อความและรูปในกล่องซ้าย
    futureImage.style.display = "none"; // ซ่อนรูปภาพในกล่องซ้าย
    boxLeft.style.flex = "0.1"; // กล่องซ้ายแคบลง
    toggleBtn.querySelector("i").className = "ri-arrow-right-s-line"; // เปลี่ยนไอคอนเป็นขวา
    futureMakerText.style.display = "none"; // ทำให้ข้อความ "The Future Maker" หายไป
    futureMakerContainer.style.display = "block"; // แสดงส่วนของรูปคน
  } else {
    // แสดงเนื้อหาภายในกล่องซ้าย (ข้อความและรูป)
    boxLeftContent.style.display = "flex"; // แสดงข้อความและรูปในกล่องซ้าย
    futureImage.style.display = "block"; // แสดงรูปภาพในกล่องซ้าย
    boxLeft.style.flex = "1"; // กลับขนาดกล่องซ้ายตามเดิม
    toggleBtn.querySelector("i").className = "ri-arrow-left-s-line"; // เปลี่ยนไอคอนเป็นซ้าย
    futureMakerText.style.display = "inline"; // แสดงข้อความ "The Future Maker"
    futureMakerContainer.style.display = "none"; // ซ่อนส่วนของรูปคน
  }
  isExpanded = !isExpanded; // เปลี่ยนสถานะ
});

//click image then scroll
// เลือกรูปภาพทั้งหมดที่มี data-target
const futurePeopleImages = document.querySelectorAll('.future-person');

// เพิ่ม event listener ให้กับรูปภาพแต่ละอัน
futurePeopleImages.forEach(image => {
  image.addEventListener('click', function () {
    // ดึงค่า data-target ที่เชื่อมโยงกับการ์ด
    const targetId = this.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    // ตรวจสอบว่า targetElement นั้นมีอยู่
    if (targetElement) {
      // เลื่อนหน้าจอไปยังการ์ดที่ตรงกับ target
      targetElement.scrollIntoView({
        behavior: 'smooth', // เลื่อนอย่างนุ่มนวล
        block: 'start'      // เริ่มต้นจากด้านบนของ element
      });
    }
  });
});