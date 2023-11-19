import request from '../utils/request';
export async function download(url, fileName, method = 'GET') {
  const data = await request({ url, method });
  const blob = new Blob([data]);
  URL.createObjectURL(blob);
  const downloadUrl = URL.createObjectURL(blob);
  const downloadLink = document.createElement('a');
  downloadLink.href = downloadUrl;
  downloadLink.download = fileName;
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
}
