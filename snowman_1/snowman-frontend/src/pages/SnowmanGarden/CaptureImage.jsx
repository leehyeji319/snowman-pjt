import html2canvas from 'html2canvas';
import styled from 'styled-components';

export default function CaptureImage() {
  const handleImageDownload = async () => {
    const element = document.getElementById('print'),
      canvas = await html2canvas(element),
      data = canvas.toDataURL('image/png');

    var link = document.createElement('a');
    link.href = data;
    link.download = 'downloaded-santaGarden.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <CaptureBtn onClick={handleImageDownload}># 캡쳐하기</CaptureBtn>
    </>
  );
}
const CaptureBtn = styled.button`
  display: inline;
  padding: 0.6rem;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
  color: #dcdcdc;
  font-size: 1rem;
  font-family: 'bitbit';

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: white;
    cursor: pointer;
  }
`;
