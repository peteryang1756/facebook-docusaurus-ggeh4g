import React from 'react'
import { DocSearch } from "@docsearch/react";

function SearchHeader() {
  return (
    <DocSearch
    apiKey="c286bee2461560e2c43b77350aae8321"
    indexName="help"
    searchParameters={{
      facetFilters
    }}
    />
  )
}

export default SearchHeader