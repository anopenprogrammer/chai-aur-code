const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anopenprogrammer')
    return response.json()
}

export default githubInfoLoader