const user = {
    name: 'Ana',
    lastName: 'Santos',
};
  
function User() {
    return <span>{`${user.name} ${user.lastName}`}</span>;
}

export default User;