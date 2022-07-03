import { Check, Trash } from 'phosphor-react';
import { Task as ITask } from '../App';
import { Checkbox, DeleteButton, Task as TaskItem } from './task-styles'

interface TaskProps {
  task: ITask;
  onCheckTask: () => void;
  onDeleteTask: () => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  return (
    <TaskItem>
      <Checkbox completed={task.isComplete}>
        <label className="checkbox-container">
          <input
            type="checkbox"
            readOnly
            checked={task.isComplete}
            onClick={onCheckTask}
          />
          <span className="checkmark">
            {task.isComplete && <Check size={12} weight="bold"/>}
          </span>
        </label>
        <p>{task.title}</p>
      </Checkbox>

      <DeleteButton type="button" onClick={onDeleteTask}>
        <Trash size={16} />
      </DeleteButton>
    </TaskItem>
  )
}