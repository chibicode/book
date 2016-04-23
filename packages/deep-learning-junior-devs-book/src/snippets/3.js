import React from 'react'

const Depth1Matrix1 = ({ data }) =>
  <table style={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
    <tbody>
      {
        data.map((row) =>
          <tr>
            {
              row.map((item) =>
                <td className='py1 px2 border'>
                  { item }
                </td>)
            }
          </tr>
        )
      }
    </tbody>
  </table>

export default Depth1Matrix1
