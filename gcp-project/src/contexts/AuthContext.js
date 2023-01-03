import React, {useContext,useState,useEffect} from 'react'
import {auth,db} from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    const [userRole, setUserRole] = useState()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user)
            setLoading(false)
            if(user){
                const patientRef = db.collection('patient').doc(user.uid)
                const doctorRef = db.collection('doctor').doc(user.uid)
                const hospitalRef = db.collection('hospital').doc(user.uid)
                
                const patientdoc = await patientRef.get()
                const doctordoc = await doctorRef.get()
                const hospitaldoc = await hospitalRef.get()

                if(patientdoc.exists){
                    setUserRole('patient')
                }
                else if(doctordoc.exists){
                    setUserRole('doctor')
                }
                else if(hospitaldoc.exists){
                    setUserRole('hospital')
                }
                else{
                    setUserRole('none')
                }
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        userRole,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }
  
  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
