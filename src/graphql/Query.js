import { gql } from "@apollo/client"

export const GET_ALL_USERS = gql `
query Query {
  getUser1 {
    fName
    lName
    contact
    email
    password
    address
    city
    state
    pincode
    createdDateTime
    status
  }
}
`
export const GET_ALL_COURSES = gql `
query Query {
  getCourses {
    id
    courseTitle
    courseDescrition
    completePercentage
    complete
    createDateTime
    status
  }
}
`

export const GET_TOPIC_BY_COURSE_ID = gql`
query Query($courseId: ID) {
  getTopicByCourseId(courseId: $courseId) {
    id
    courseId
    courseTitle
    topicTitle
    topicDescription
    completionPercentage
    complete
    createDateTime
    status
  }
}

`

export const GET_ALL_SUB_TOPIC = gql`
query GetAllSubTopic {
  getAllSubTopic {
    id
    courseId
    courseTitle
    topicId
    topicTitle
    subTopicTitle
    subTopicTopicDescription
    completionPercentage
    complete
    createDateTime
    
    status
  }
}
`

export const GET_SUB_TOPIC_BY_ID = gql`
query Query($subTopicId: ID) {
  getSubTopicById(subTopicId: $subTopicId) {
    id
    courseId
    courseTitle
    topicId
    topicTitle
    subTopicTitle
    subTopicTopicDescription
    completionPercentage
    complete
    createDateTime
    status
    questions {
      id
      questionTitle
      objective
      correctAnswer
      answer
      mark
      questionType
      video
      status
    }
  }
}


`