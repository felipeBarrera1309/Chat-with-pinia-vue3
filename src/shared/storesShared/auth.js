import useProfile from '../../stores/profile.js';

async function getDataBackend(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                username: 'Felipe Barrera',
                status: 'active'
            })
        }, 1000)
    })
}

export async function setDatas(){
    const getDatas = await getDataBackend()
    useProfile().username = getDatas.username,
    useProfile().status = getDatas.status
}



