import * as Mirage from 'miragejs'


export const createServer = () => {
  Mirage.createServer({
    routes() {
      this.get('/api/job', (schema, request) => {
        const jobs = [] as unknown[]

        return jobs
      })
    }
  })
}
