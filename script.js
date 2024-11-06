alert("working");
const reader = new FileReader();

reader.onload = function(event) {
    const fileContent = event.target.result;
    // Do something with the file content
    console.log(fileContent);
  };

  reader.onerror = function(event) {
    console.error("Error reading file:", event.target.error);
  };

  let contents = reader.readAsText(file);
  alert(contents);
  
//   // Attach the readFile function to an input element
//   const video_container = document.getElementById("video container");
//   let file = 
//   video_container.addEventListener("change", (event) => {
//     const file = event.target.files[0];
//     readFile(file);
//   });