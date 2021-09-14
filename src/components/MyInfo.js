import React from 'react'

const MyInfo = (props) => {
    return (
        <>
            <h2>My Info View</h2>
            <h3>Client-Only Route</h3>
            <table>
                <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <td>
                        your name
                    </td>
                </tr>
                <tr>
                    <th>
                        Email
                    </th>
                    <td>
                        example@demo.com
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default MyInfo