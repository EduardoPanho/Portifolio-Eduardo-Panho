export async function getProjects() {
    try {
        const response = await fetch('https://back-end-teal-rho.vercel.app')
        const dados = await response.json()
        return dados

    } catch (e) {
        console.log(`Erro: ${e}`)
    }
} 