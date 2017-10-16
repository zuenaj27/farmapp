
class UserApi {

    createUser = (user, old)=> {
        return new Promise((resolve, reject)=> {
            const array = [...old, user];
            resolve(Object.assign([], array));
        });
    };


    findOneUser = (userId) => {
        return new Promise((resolve, reject)=> {

        })
    };



}

export default new UserApi();