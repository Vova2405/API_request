import { TodoistApi } from '@doist/todoist-api-typescript'


const api = new TodoistApi('d37224c06997e2734f26837d3561ca7d65968179')


    api.addProject({ name: 'Market List' })
    .then((project) => console.log(project))
    .catch((error) => console.log(error))

    api.addTask({ content: 'Buy eggs',  projectId: 2291060974 })
    .then((task) => console.log(task))
    .catch((error) => console.log(error))
    
    api.addTask({ content: 'Buy milk',  projectId: 2291060974 })
    .then((task1) => console.log(task1))
    .catch((error) => console.log(error))

    api.updateTask(2291060380, { dueString: 'tomorrow' })
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error))

    api.getProject(2291060974)
    .then((project) => console.log(project))
    .catch((error) => console.log(error))

    api.closeTask(5824201591)   
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error))

    api.deleteProject(2291060974)
    .then((isSuccess) => console.log(isSuccess))
    .catch((error) => console.log(error))