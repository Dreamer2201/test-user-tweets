const filterUsers = ({ users, filter }) => {
    const arrUsers = users.users

      if (!filter) {
        return arrUsers;
      }
      else if (filter === "Follow") {
        const resultFilter = arrUsers.filter(item => !item.isActiveBtn)
        console.log(resultFilter)
        return resultFilter;
      } 
      else if (filter === "Followings") {
        const resultFilter = arrUsers.filter(item => item.isActiveBtn)
        console.log(resultFilter)
        return resultFilter;
      } 
      else if (filter === "Show all") {
        console.log(arrUsers)
        return arrUsers
      }
      else {
        console.log(arrUsers)
        return arrUsers
      }
    }
  
  export default filterUsers;