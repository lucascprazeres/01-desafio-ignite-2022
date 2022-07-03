import styled, { css } from "styled-components";

interface CheckboxProps {
  completed: boolean;
}

export const Task = styled.li`
  height: 4.5rem;
  border: 1px solid var(--gray-400);
  border-radius: 8px;
  background: var(--gray-500);
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Checkbox = styled.div<CheckboxProps>`
  display: flex;
  align-items: center;
  gap: 14px;
  outline: 0;

  p {
    font-size: 0.875rem;
    color: var(--gray-100);
  }

  ${(props) => {
    if (props.completed) {
      return css`
        p {
          text-decoration: line-through;
          color: var(--gray-300);
        }
      `
    }
  }}

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 14px;
    margin-bottom: 18px;
  
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked {
        & ~ .checkmark {
          background-color: var(--purple-dark);
          border: 0;
        }

        & ~ .checkmark:hover {
          background-color: var(--purple);
        }

        & ~ .checkmark:after {
          display: block;
        }
      } 
    }
  
    .checkmark {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      border: 2px solid var(--blue);
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: var(--gray-100);

      &:hover {
        border-color: var(--blue-dark);
        background: rgba(30, 111, 159, 0.2);
      }
    }
  }
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 4px;
  color: var(--gray-300);
  height: 1.5rem;
  width: 1.5rem;

  transition: color 0.1s, background-color 0.1s;

  &:hover {
    color: var(--danger);
    background: var(--gray-400);
  }
`