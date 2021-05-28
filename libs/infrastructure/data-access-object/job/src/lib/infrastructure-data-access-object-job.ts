import * as Job from '@domain/entity/job'
//import * as DAOI from '@domain/data-access-object'

export const create = (): Job.DAO.DAO => {
  return {
    /** TODO!!! */
    create (jobs) {
      console.log()
    },

    /**
     * Get one or more job items from the api.
     * TODO!!!
     * */
    async read(id, pageNumber?, pageSize?) {
      const path = `/api/job${id ? '/' + id : ''}`
      const response = await fetch(path)
      const jobs = response.json()

      return jobs
    },

    /** TODO!!! */
    update(jobs) {
      console.log()
    },

    /** TODO!!! */
    delete(id) {
      console.log()
    }
  }
}
