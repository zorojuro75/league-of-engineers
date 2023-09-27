import React from 'react'

type Props = {
    className: string,
}

const Try = (props: Props) => {
  return (
    <div className={props.className}>taking full screen</div>
  )
}

export default Try