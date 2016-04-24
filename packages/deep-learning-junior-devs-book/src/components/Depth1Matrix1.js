import React from 'react'
// TODO: Export this at the top level so users can use it
import styles from './styles/Matrix.css'

const Depth1Matrix1 = ({ data }) =>
  <table>
    <tbody>
      {
        data.map((row, i) =>
          <tr key={row.toString()}>
            {
              row.map((item, j) =>
                <td className={styles.matrixCell} key={item}>
                  {item}
                </td>)
            }
          </tr>
        )
      }
    </tbody>
  </table>

export default Depth1Matrix1
