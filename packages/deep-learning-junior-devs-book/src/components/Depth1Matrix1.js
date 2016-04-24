import React from 'react'

const Depth1Matrix1 = ({ data }) =>
  <table style={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
    <tbody>
      {
        data.map((row, i) =>
          <tr key={ i }>
            {
              row.map((item, j) =>
                <td className='py1 px2 border' key={ `${i},${j}` }>
                  { item }
                </td>)
            }
          </tr>
        )
      }
    </tbody>
  </table>

export default Depth1Matrix1
