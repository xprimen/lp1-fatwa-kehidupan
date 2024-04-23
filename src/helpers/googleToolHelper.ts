export function googleDriveImage(url: string, size: string = "w1000") {
  // https://drive.google.com/file/d/1EOrdFidBBVLEeVG6yNAcrmi4E7JzFadB/view?usp=drive_link
  const newUrl = url.split("file/d/");
  const id = newUrl[1].split("/")[0];
  // https://lh3.googleusercontent.com/d/1EOrdFidBBVLEeVG6yNAcrmi4E7JzFadB=w500?authuser=0
  // https://lh3.googleusercontent.com/d/1EOrdFidBBVLEeVG6yNAcrmi4E7JzFadB=w500
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=" + size;
}
