import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [searchData, setSearchData] = useState('')

  const handleFilter = (e) => {
    setSearchData(e.target.value)
    const searchInput = e.target.value

    if (searchInput !== '') {
      const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredData(newFilter)
    }

    if (searchInput === '') {
      setFilteredData([])
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setSearchData('')
  }

  return (
    <SearchInputContainer>
      <InputContainer>
        <SearchInput
          onChange={handleFilter}
          value={searchData}
          placeholder={placeholder}
        />
        {filteredData.length === 0 ? (
          <SearchIcon className='fas fa-search' />
        ) : (
          <SearchIcon onClick={clearInput} className='fas fa-times' />
        )}
      </InputContainer>
      {filteredData.length != 0 && (
        <DropContainer>
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <DropList href={value.link} target='_blank' key={index}>
                {value.title}
              </DropList>
            )
          })}
        </DropContainer>
      )}
    </SearchInputContainer>
  )
}

const SearchInputContainer = styled.div`
  width: 80%;
`

const InputContainer = styled.div`
  ${tw`
    relative
  `}
`

const SearchInput = styled.input`
  ${tw`
    mt-20
    w-64
    h-10
    outline-none
    pl-4
    pr-10
    py-2
    rounded-sm
  `}
`

const SearchIcon = styled.i`
  ${tw`
    absolute
    top-[5.75rem]
    left-[14.2rem]
    text-gray-500
    cursor-pointer
  `}
`

const DropContainer = styled.div`
  ${tw`
    bg-white
    mt-2
    mb-4
    w-full
    max-w-xs
    h-[10rem]
    shadow-md
    rounded-sm
    overflow-hidden
    overflow-y-auto
    scrollbar-hide
  `}
`

const DropList = styled.a`
  ${tw`
    flex
    flex-col
    w-full
    px-3
    py-2
    font-semibold
    cursor-pointer
    hover:bg-gray-200
  `}
`

export default SearchBar
