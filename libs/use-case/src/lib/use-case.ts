import * as Job from '@libs/domain/job'
import * as App from '@libs/application'

/** produce a list of jobs of the given job type */
export const viewJobsList = async (
	app: App.Model,
	state: App.State.State
): Promise<Array<Job.Model>> => {
	const currentPage = App.State.getCurrentPage(state)
	const pageSize = App.State.getPageSize(state)
	const start = currentPage * pageSize

	const repo = app.repos.job

	return await Job.Repo.list(start, pageSize, repo)
}
