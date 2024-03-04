const {username, password} = process.env;

export const connectionstr="mongodb+srv://"+username+":"+password+"@cluster0.ueqa2lm.mongodb.net/resto-app?retryWrites=true&w=majority&appName=Cluster0"