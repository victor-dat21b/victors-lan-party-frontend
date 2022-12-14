const baseURL = "https://lan-party-backend.azurewebsites.net"

async function handleHttpErrors(res) {
    if (!res.ok) {
      const errorResponse = await res.json();
      const error = new Error(errorResponse.message)
      error.apiError = errorResponse
      throw error
    }
    
    return res.json()
  }
