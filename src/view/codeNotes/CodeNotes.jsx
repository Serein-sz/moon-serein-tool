import styled from 'styled-components';
import NotesManager from './NotesManager';
import NotesShow from './NotesShow';

const CodeNotesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;



const CodeNotes = () => {
  return (
    <CodeNotesContainer>
      <NotesManager />
      <NotesShow />
    </CodeNotesContainer>
  );
};
export default CodeNotes;
