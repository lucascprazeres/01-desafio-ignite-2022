import { ClipboardText, PlusCircle } from "phosphor-react"
import { GlobalStyle } from "./styles/global"
import { Header } from "./styles/header"
import { Task } from "./components/Task"
import logoImg from './assets/logo.svg'

import {
  CompletedTasks,
  Content,
  CreatedTasks,
  EmptyListPanel,
  TaskButton,
  TaskContainer,
  TaskForm,
  TaskInput,
  TaskList
} from "./styles/task-list"
import { FormEvent, useState } from "react"

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!newTaskTitle) {
      return
    }

    const newTask = {
      id: Math.floor(Math.random() * 999),
      title: newTaskTitle,
      isComplete: false,
    }

    setTasks(state => [...state, newTask])
    setNewTaskTitle('')
  }

  function handleToggleTaskCompletion(id: number) {
    const updatedTaskIdx = tasks.findIndex(item => item.id === id)
    const updatedTasks = [...tasks]

    updatedTasks[updatedTaskIdx].isComplete = !updatedTasks[updatedTaskIdx].isComplete

    setTasks(updatedTasks)
  }

  function handleRemoveTask(id: number) {
    const updatedTasks = tasks.filter(item => item.id !== id)

    setTasks(updatedTasks)
  }

  const compledTaskAmount = tasks.filter(task => task.isComplete).length

  return (
    <>
      <Header>
        <img src={logoImg} alt="Ignite To Do logo" />
      </Header>

      <Content>
        <TaskForm onSubmit={handleCreateNewTask}>
          <TaskInput
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={event => setNewTaskTitle(event.target.value)}
          />
          <TaskButton type="submit">
            Criar
            <PlusCircle size={16} />
          </TaskButton>
        </TaskForm>

        <TaskContainer>
          <div>
            <CreatedTasks>
              Tarefas criadas <strong>{tasks.length}</strong>
            </CreatedTasks>

            <CompletedTasks>
              Concluídas <strong>{tasks.length} de {compledTaskAmount}</strong>
            </CompletedTasks>
          </div>

          <TaskList>
            {tasks.length
              ? (
                tasks.map(task => (
                  <Task
                    task={task}
                    onCheckTask={() => handleToggleTaskCompletion(task.id)}
                    onDeleteTask={() => handleRemoveTask(task.id)}
                  />
                ))
              )
              : (
                <EmptyListPanel>
                  <ClipboardText size={56}/>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </EmptyListPanel>
              )}
          </TaskList>
        </TaskContainer>
      </Content>
      <GlobalStyle />
    </>
  )
}

export default App
