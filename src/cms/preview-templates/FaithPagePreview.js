import React from 'react'
import PropTypes from 'prop-types'
import { FaithPageTemplate } from '../../templates/faith-page'

const FaithPagePreview = ({ entry, widgetFor }) => (
  <FaithPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FaithPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaithPagePreview
