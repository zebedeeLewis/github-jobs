import * as Job from '@libs/domain/job'
import { DetailsPageComponent } from './details-page-component'
import sanitizeHtml from 'sanitize-html'

export const DetailsPageContainer = (job: Job.Model) => {
  const _job = {
    ...job,
    // description: sanitizeHtml(Job.getDescription(job)),
    // howToApply: sanitizeHtml(Job.getHowToApply(job)),
  }
  return <DetailsPageComponent {..._job} />
}
