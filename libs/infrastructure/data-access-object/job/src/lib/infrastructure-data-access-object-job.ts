import * as Job from '@domain/entity/job'

export const create = (): Job.DAO.DAO => {
  return {
    /** TODO!!! */
    create (jobs) {
      console.log()
    },

    /** TODO!!! */
    async read(pageNumber, pageSize, filters) {
      const queryParams
        = Object
        .entries(filters)
        .reduce(
          (_queryParam, [param, value]) => (
            `${_queryParam}${!_queryParam ? '?' : '&'}${param}=${value}`
          ),
          ''
        )

      const path = `/api/job${queryParams}`
      const response = await fetch(path)
      const jobs = response.json()

      return jobs
    },

    /** TODO!!! */
    async readJobWithId(id) {
      const path = `/api/job/${id}`
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
