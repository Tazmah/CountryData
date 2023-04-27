import React from 'react'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
    const { searchTerm } = useParams()

    return (
        <div>SearchFeed</div>
    )
}

export default SearchFeed