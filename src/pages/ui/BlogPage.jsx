import React, { Fragment } from 'react'
import PageHeader from '../../components/ui/PageHeader'
import BlogList from '../../components/ui/blog/BlogList'

const BlogPage = () => {
  console.log('dfkjsdjakj djfsjfkljsfkljflsdjflk dsjfklsjdfkljsdlf');
  return (
    <Fragment>
<PageHeader title='Blog List'/>
<div className='md:flex flex-wrap ml-10 mr-10'>
    <BlogList />
    </div>
   
    </Fragment>
  )
}

export default BlogPage
