import  { Router, Request, Response } from 'express';

const projects = Router();

interface ProjectData {
  id: number;
  name: string;
}

const projectsArrays: Array<ProjectData> = [{id: 1, name: "BAMA" } as ProjectData ];

projects.get('/', (request: Request, response: Response) => {
  return response.json(projectsArrays);
});

projects.post('/', (request: Request, response: Response) => {
   const value: ProjectData =  {id: request.body.id, name: request.body.name};
   projectsArrays.push(value);
   return response.json(projectsArrays); 
});

projects.put('/:id', (request: Request, response: Response ) => {
    const id  = Number(request.params.id);
    const  { name } = request.body;
    const project = projectsArrays.filter(project => project.id == id);
    
    project[0].name = name;
    return response.json(projectsArrays);
})

export default projects;