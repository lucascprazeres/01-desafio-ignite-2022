import styled from "styled-components"

export const Content = styled.main`
  flex: 1;
  width: 100%;
  max-width: 46rem;
  margin: 0 auto;
`

export const TaskForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.375rem;
  margin-top: -1.625rem;
`

export const TaskInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  background: var(--gray-500);
  color: var(--gray-100);
`

export const TaskButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  margin-left: 0.5rem;
  border: 0;
  border-radius: 8px;

  background: var(--blue-dark);
  color: var(--gray-100);
  font-weight: bold;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.1s;

  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    background: var(--blue);
  }
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 4rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid var(--gray-400);
    padding-bottom: 1.5rem;
  }
`

export const CreatedTasks = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--blue);

  strong {
    font-size: 0.75rem;
    color: var(--gray-100);
    padding: 2px 8px;
    border-radius: 8px;
    background: var(--gray-400);
    margin-left: 0.5rem;  
  }
`

export const CompletedTasks = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--purple);

  strong {
    font-size: 0.75rem;
    color: var(--gray-100);
    padding: 2px 8px;
    border-radius: 8px;
    background: var(--gray-400);
    margin-left: 0.5rem;  
  }
`

export const TaskList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const EmptyListPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    margin-bottom: 0.5rem;
  }
`