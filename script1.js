const toggleBtn = document.getElementById("toggle-btn");
const boxLeft = document.querySelector(".box-left");
const boxLeftContent = document.querySelector(".text-left"); // เลือกเนื้อหาภายในกล่องซ้าย (ข้อความ + รูป)
const futureMakerText = document.getElementById("future-maker-text");
const futureImage = document.querySelector(".future-ai"); // เลือกรูปภาพในกล่องซ้าย

let isExpanded = false; // สถานะของกล่อง (เริ่มต้นเป็น False)

toggleBtn.addEventListener("click", () => {
  if (!isExpanded) {
    // ซ่อนเนื้อหาภายในกล่องซ้าย (ข้อความและรูป)
    boxLeftContent.style.display = "none"; // ซ่อนทั้งข้อความและรูปในกล่องซ้าย
    futureImage.style.display = "none"; // ซ่อนรูปภาพในกล่องซ้าย
    boxLeft.style.flex = "0.1"; // กล่องซ้ายแคบลง
    toggleBtn.querySelector("i").className = "ri-arrow-right-s-line"; // เปลี่ยนไอคอนเป็นขวา
    futureMakerText.style.opacity = "0"; // ซ่อนข้อความ "The Future Maker"
  } else {
    // แสดงเนื้อหาภายในกล่องซ้าย (ข้อความและรูป)
    boxLeftContent.style.display = "flex"; // แสดงข้อความและรูปในกล่องซ้าย
    futureImage.style.display = "block"; // แสดงรูปภาพในกล่องซ้าย
    boxLeft.style.flex = "1"; // กลับขนาดกล่องซ้ายตามเดิม
    toggleBtn.querySelector("i").className = "ri-arrow-left-s-line"; // เปลี่ยนไอคอนเป็นซ้าย
    futureMakerText.style.opacity = "1"; // แสดงข้อความ "The Future Maker"
  }
  isExpanded = !isExpanded; // เปลี่ยนสถานะ
});