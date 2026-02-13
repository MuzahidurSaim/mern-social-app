import React from 'react'

const Loading = ({height = '100vh'}) => {
    return (
        <div style={{height}} className='flex items-center justify-center h-screen'>
            <div className='animate-spin rounded-full h-10 w-10 border-3 border-t-transparent border-purple-500 '></div>
        </div>
    )
}
export default Loading