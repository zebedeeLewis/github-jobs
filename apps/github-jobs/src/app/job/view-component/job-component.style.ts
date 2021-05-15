import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  link: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    display: 'block',
    textDecoration: 'none',
  },

  card: {
    minHeight: theme.spacing(28.5),
    overflow: 'visible',
    padding: theme.spacing(2),
  },

  cardAvatar: {
    marginTop: theme.spacing(-7),
    width: theme.spacing(6),
    height: theme.spacing(6),
  },

  timeLine: {
    marginTop: theme.spacing(2.5),
  },

  titleLine: {
    marginTop: theme.spacing(1),
  },

  companyLine: {
    marginTop: theme.spacing(1),
  },

  locationLine: {
    marginTop: theme.spacing(2),
  },

  locationText: {
    fontSize: '13px',
    fontWeight: 'bold',
    lineHeight: 1.2,
  },

  dot: {
    fontSize: '24px',
    lineHeight: 1,
    verticalAlign: 'sub',
    marginLeft: '8px',
    marginRight: '8px',
  },
}))
