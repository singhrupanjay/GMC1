document.querySelector("button:nth-child(1)").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/certificate.jpg";
  link.download = "My_Certificate.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
