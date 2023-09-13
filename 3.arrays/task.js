 function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every(function(element, index) {
		return element === arr2[index];
	})
}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);
	const ages = filteredUsers.map(user => user.age);
	const avgAge = ages.reduce((sum, age) => sum + age, 0) / ages.length  || 0;
	return avgAge;
}