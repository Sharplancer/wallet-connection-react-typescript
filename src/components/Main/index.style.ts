import styled from '@emotion/styled'

export const MainStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    padding: '2rem 0rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: '0.5rem',
    background: theme.bg.lightGray,
  }
})
