import { gql } from '@apollo/client'


export const MUTATION_ADMIN_LOGIN = gql`
  mutation CreateAdmin($username: String, $password: String) {
    adminLogin(username: $username, password: $password) {
      adminToken
      adminTokenExpire
      adminId
    }
  }
`
export const MUTATION_USER_LOGIN = gql`
 mutation Mutation($email: String, $password: String) {
  loginUser(email: $email, password: $password) {
    userId
    userToken
    userTokenExpire
  }
}
`
export const MUTATION_CREATE_USER = gql `
mutation Mutation($user1Input: user1Input) {
  createUser1(User1Input: $user1Input) {
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
export const MUTATION_CREATE_COURSE=gql `
mutation CreateCourses($coursesInput: coursesInput) {
  createCourses(CoursesInput: $coursesInput) {
    id
   
  }
}
`

export const MUTATION_CREATE_TOPIC = gql`
mutation Mutation($topicInput: topicInput) {
  createTopic(TopicInput: $topicInput) {
    id
   
  }
}
`

export const MUTATION_UPDATE_TOPIC = gql`
mutation Mutation($updateTopicInput: updateTopicInput) {
  updateTopic(UpdateTopicInput: $updateTopicInput) {
    id
   
  }
}
`

export const MUTATION_DELETE_TOPIC = gql`
mutation DeleteTopic($topicId: ID) {
  deleteTopic(topicId: $topicId) {
    id
    
  }
}
`

export const MUTATION_SUB_TOPIC = gql`
mutation CreateSubTopic($subTopicInput: subTopicInput) {
  createSubTopic(SubTopicInput: $subTopicInput) {
    id
    
  }
}

`

export const MUTATION_ADD_QUESTION = gql`
mutation Mutation($addQuestionInput: addQuestionInput) {
  addQuestion(AddQuestionInput: $addQuestionInput) {
    id
  
  }
}
`

export const MUTATION_DELETE_SUB_TOPIC = gql`
mutation Mutation($deleteSubTopicId: ID) {
  deleteSubTopic(id: $deleteSubTopicId) {
    id
  
  }
}
`
export const MUTATION_DELETE_COURSE = gql`
mutation Mutation($deleteCourseId: ID) {
  deleteCourse(id: $deleteCourseId) {
    id
    
  }
}

`

export const MUTATION_QUESTION_UPDATE = gql`
mutation Mutation($subTopicId: ID, $questionId: ID, $questionTitle: String, $answer: String, $correctAnswer: String, $video: String, $mark: String) {
  updateQuestion(subTopicId: $subTopicId, questionId: $questionId, questionTitle: $questionTitle, answer: $answer, correctAnswer: $correctAnswer, video: $video, mark: $mark) {
    id
   
  }
}
`

