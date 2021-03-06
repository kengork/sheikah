import * as React from "react"

const styles = require("./style.scss")

interface Props {
  text?: string,
  iconName?: string,
}

/**
 * Empty state ui component
 *
 * @export
 * @class EmptyState
 * @extends {React.Component<Props>}
 */
export default class EmptyState extends React.Component<Props> {
  public render() {
    const src = require(`svg/${this.props.iconName || "generic"}.svg`)

    return (
      <div className={styles.content}>
        <img className={styles.icon} src={src} />
        <p className={styles.text}>{this.props.text}</p>
      </div>
    )
  }
}
