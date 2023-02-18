export default function convertToDongString(value: number) {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  return formatter.format(value);
}